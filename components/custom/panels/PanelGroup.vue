<script lang="ts">
interface PanelGroupContext {
  addItem: (item: HTMLDivElement) => void
  groupId: string
  direction: Direction
  directionValue: DirectionValue
  teleportHandle: boolean
  state: {
    dragging: boolean
    itemBeforeId: string
    itemAfterId: string
    activeHandleId: string
  }
  startDragging: (
    e: PointerEvent,
    handleEl: HTMLDivElement,
    handleId: string,
  ) => void
  stopDragging: () => void
  getHandlePanelElements: (
    handleEl: HTMLDivElement,
  ) => [HTMLDivElement, HTMLDivElement, number, HTMLDivElement | undefined]
}

type Direction = 'vertical' | 'horizontal'
type DirectionValue = 'height' | 'width'

export const PanelGroupKey: InjectionKey<PanelGroupContext> =
  Symbol('PanelGroup')
</script>

<script lang="ts" setup>
const {
  direction = 'horizontal',
  as = 'div',
  teleportHandle,
  autoSaveId,
  lazy,
} = defineProps<{
  as?: string
  direction?: Direction
  teleportHandle?: boolean
  autoSaveId?: string
  lazy?: boolean
}>()

const directionMap = {
  vertical: 'height',
  horizontal: 'width',
} as const
const directionValue = directionMap[direction]
const axisMap = {
  vertical: 'Y',
  horizontal: 'X',
} as const
const axis = axisMap[direction]

const items = ref<HTMLDivElement[]>([])
function addItem(item: HTMLDivElement) {
  items.value.push(item)
}

function getHandlePanelElements(
  handleEl: HTMLDivElement,
): [HTMLDivElement, HTMLDivElement, number, HTMLDivElement | undefined] {
  const handles = Array.from(
    document.querySelectorAll<HTMLDivElement>(
      `[data-panel-group-id="${groupId}"][data-panel-handle-id]`,
    ),
  )
  const handleIndex = handles.indexOf(handleEl)
  const nextHandleEl = handles[handleIndex + 1]

  const itemBefore = items.value[handleIndex]
  const itemAfter = items.value[handleIndex + 1]
  return [itemBefore, itemAfter, handleIndex, nextHandleEl]
}

const reactiveState = reactive({
  dragging: false,
  itemBeforeId: '',
  itemAfterId: '',
  activeHandleId: '',
})

const dragState = {
  startPos: 0,
  delta: 0,
  itemBefore: undefined as HTMLElement | undefined,
  itemAfter: undefined as HTMLElement | undefined,
  initialSizeItemBefore: 0,
  initialSizeItemAfter: 0,
  handleIndex: -1,
  handleOffset: 0,
  handleEl: null as HTMLElement | null,
  nextHandleEl: undefined as HTMLElement | undefined,
}
function startDragging(
  e: PointerEvent,
  handleEl: HTMLDivElement,
  handleId: string,
) {
  reactiveState.dragging = true
  dragState.startPos = e[`client${axis}`]
  dragState.handleEl = handleEl
  reactiveState.activeHandleId = handleId
  const [itemBefore, itemAfter, handleIndex, nextHandleEl] =
    getHandlePanelElements(handleEl)
  dragState.itemBefore = itemBefore
  dragState.itemAfter = itemAfter
  dragState.handleIndex = handleIndex
  dragState.nextHandleEl = nextHandleEl
  dragState.initialSizeItemBefore =
    itemBefore.getBoundingClientRect()[directionValue]
  dragState.initialSizeItemAfter =
    itemAfter.getBoundingClientRect()[directionValue]
  reactiveState.itemBeforeId = itemBefore.dataset.panelItemId!
  reactiveState.itemAfterId = itemAfter.dataset.panelItemId!
  if (teleportHandle) {
    dragState.handleOffset =
      handleEl.getBoundingClientRect()[directionValue] / 2
  }
  window.addEventListener('pointermove', pointerMove)
  window.addEventListener('pointerup', stopDragging)
}

function pointerMove(e: any) {
  dragState.delta = e[`client${axis}`] - dragState.startPos
  if (lazy)
    dragState.handleEl!.style.transform = `translate${axis}(${dragState.delta + dragState.handleOffset}px)`
  else update()
}

function stopDragging() {
  reactiveState.dragging = false
  window.removeEventListener('pointermove', pointerMove)
  window.removeEventListener('pointerup', stopDragging)
  reactiveState.activeHandleId = ''
  reactiveState.itemBeforeId = ''
  reactiveState.itemAfterId = ''
  if (lazy) update()
  dragState.delta = 0
}

interface Panel {
  maxWidth?: number
  minWidth: number
  width: number
  collapsible: boolean
  collapsedSize: number
}

function calculateSize(panel1: Panel, panel2: Panel, delta: number) {
  let panelCollapsing
  let panelExpanding
  if (delta < 0) {
    panelCollapsing = panel1
    panelExpanding = panel2
  } else {
    panelCollapsing = panel2
    panelExpanding = panel1
  }

  if (panelExpanding.width === panelExpanding.maxWidth) {
    return [panel1.width, panel2.width]
  }

  const totalWidth = panel1.width + panel2.width
  let newWidth1 = panelCollapsing.width - Math.abs(delta)
  let newWidth2 = panelExpanding.width + Math.abs(delta)

  if (panelExpanding.maxWidth && newWidth2 > panelExpanding.maxWidth) {
    if (newWidth1 >= panelCollapsing.minWidth) {
      newWidth2 = panelExpanding.maxWidth
      newWidth1 =
        panelCollapsing.width - (panelExpanding.maxWidth - panelExpanding.width)
    } else {
      const panelCollapsingDelta =
        panelCollapsing.width - panelCollapsing.minWidth
      const panelExpandingDelta = panelExpanding.maxWidth - panelExpanding.width
      if (panelCollapsingDelta < panelExpandingDelta) {
        if (panelCollapsing.collapsible) {
          const halfwayPoint =
            (panelCollapsing.collapsedSize + panelCollapsing.minWidth) / 2
          if (newWidth1 < halfwayPoint) {
            if (
              !panelExpanding.maxWidth ||
              panelExpanding.maxWidth >
                totalWidth - panelCollapsing.collapsedSize
            ) {
              newWidth1 = panelCollapsing.collapsedSize
              newWidth2 = totalWidth - newWidth1
            } else {
              newWidth1 = panelCollapsing.minWidth
              newWidth2 = totalWidth - newWidth1
            }
          } else {
            newWidth1 = panelCollapsing.minWidth
            newWidth2 = totalWidth - newWidth1
          }
        } else {
          newWidth1 = panelCollapsing.minWidth
          newWidth2 = totalWidth - newWidth1
        }
      } else {
        newWidth2 = panelExpanding.maxWidth
        newWidth1 = totalWidth - newWidth2
      }
    }
    panelCollapsing.width = newWidth1
    panelExpanding.width = newWidth2
    return delta < 0
      ? [panelCollapsing.width, panelExpanding.width]
      : [panelExpanding.width, panelCollapsing.width]
  }

  if (
    panelExpanding.collapsible &&
    panelExpanding.width === panelExpanding.collapsedSize
  ) {
    const halfwayPoint =
      (panelExpanding.collapsedSize + panelExpanding.minWidth) / 2
    if (newWidth2 >= halfwayPoint) {
      if (newWidth2 < panelExpanding.minWidth) {
        if (
          !panelCollapsing.minWidth ||
          panelCollapsing.minWidth <= totalWidth - panelExpanding.minWidth
        ) {
          newWidth2 = panelExpanding.minWidth
        } else {
          newWidth2 = panelExpanding.collapsedSize
        }
      }
    } else {
      newWidth2 = panelExpanding.collapsedSize
    }
    newWidth1 = totalWidth - newWidth2
  }

  if (newWidth1 < panelCollapsing.minWidth) {
    if (panelCollapsing.collapsible) {
      const halfwayPoint =
        (panelCollapsing.collapsedSize + panelCollapsing.minWidth) / 2
      if (newWidth1 < halfwayPoint) {
        if (
          !panelExpanding.maxWidth ||
          panelExpanding.maxWidth > totalWidth - panelCollapsing.collapsedSize
        ) {
          newWidth1 = panelCollapsing.collapsedSize
        } else {
          newWidth1 = panelCollapsing.minWidth
        }
      } else {
        newWidth1 = panelCollapsing.minWidth
      }
    } else {
      newWidth1 = panelCollapsing.minWidth
    }
  }
  newWidth2 = totalWidth - newWidth1
  panelCollapsing.width = newWidth1
  panelExpanding.width = newWidth2
  return delta < 0
    ? [panelCollapsing.width, panelExpanding.width]
    : [panelExpanding.width, panelCollapsing.width]
}

function update() {
  if (!dragState.itemBefore || !dragState.itemAfter || dragState.delta === 0)
    return

  const itemBeforeMinSize =
    Number(dragState.itemBefore.dataset.panelItemMinSize) || 0
  const itemBeforeMaxSize = Number(
    dragState.itemBefore.dataset.panelItemMaxSize,
  )

  const itemAfterMinSize =
    Number(dragState.itemAfter.dataset.panelItemMinSize) || 0
  const itemAfterMaxSize = Number(dragState.itemAfter.dataset.panelItemMaxSize)
  const [itemBeforeNewSize, itemAfterNewSize] = calculateSize(
    {
      maxWidth: itemBeforeMaxSize,
      minWidth: itemBeforeMinSize,
      width: dragState.initialSizeItemBefore,
      collapsible: dragState.itemBefore.dataset.panelItemCollapsible === 'true',
      collapsedSize:
        Number(dragState.itemBefore.dataset.panelItemCollapsedSize) || 0,
    },
    {
      maxWidth: itemAfterMaxSize,
      minWidth: itemAfterMinSize,
      width: dragState.initialSizeItemAfter,
      collapsible: dragState.itemAfter.dataset.panelItemCollapsible === 'true',
      collapsedSize:
        Number(dragState.itemAfter.dataset.panelItemCollapsedSize) || 0,
    },
    dragState.delta,
  )
  dragState.itemBefore.style[directionValue] = `${itemBeforeNewSize}px`
  dragState.itemAfter.style[directionValue] = `${itemAfterNewSize}px`
  dragState.handleEl!.ariaValueNow = `${itemBeforeNewSize}px`
  if (dragState.nextHandleEl)
    dragState.nextHandleEl.ariaValueNow = `${itemAfterNewSize}px`
  if (autoSaveId) {
    sizes.value[dragState.handleIndex] = `${itemBeforeNewSize}px`
    sizes.value[dragState.handleIndex + 1] = `${itemAfterNewSize}px`
  }
}

const groupId = useId()
provide(PanelGroupKey, {
  addItem,
  groupId,
  direction,
  directionValue,
  teleportHandle,
  state: reactiveState,
  startDragging,
  stopDragging,
  getHandlePanelElements,
})

let sizes = ref<string[]>([])
if (autoSaveId) sizes = useLocalStorage(autoSaveId, [], { initOnMounted: true })
onMounted(() => {
  const handles = Array.from(
    document.querySelectorAll(
      `[data-panel-group-id="${groupId}"][data-panel-handle-id]`,
    ),
  )
  if (sizes.value.length)
    items.value.forEach((item, index) => {
      item.style[directionValue] = sizes.value[index]
      if (handles[index])
        handles[index].ariaValueNow = `${sizes.value[index]}px`
    })
  else
    requestAnimationFrame(() => {
      items.value.forEach((item) => {
        const size = `${item.getBoundingClientRect()[directionValue]}px`
        sizes.value.push(size)
      })
      items.value.forEach((item, index) => {
        item.style[directionValue] = sizes.value[index]
        if (handles[index])
          handles[index].ariaValueNow = `${sizes.value[index]}px`
      })
    })
})
</script>

<template>
  <component
    :is="as"
    :data-panel-group-id="groupId"
    :data-panel-direction="direction"
  >
    <slot />
  </component>
</template>
