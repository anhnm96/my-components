<script lang="ts">
interface PanelGroupContext {
  addItem: (item: HTMLDivElement) => void
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
    handleEl: HTMLElement,
    handleId: string,
  ) => void
  stopDragging: () => void
  getHandlePanelElements: (
    handleEl: HTMLElement,
  ) => [HTMLElement, HTMLElement, number]
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

const items = ref<HTMLElement[]>([])
function addItem(item: HTMLElement) {
  items.value.push(item)
}

function getHandlePanelElements(
  handleEl: HTMLElement,
): [HTMLElement, HTMLElement, number] {
  const handles = Array.from(
    document.querySelectorAll(
      `[data-panel-group-id="${groupId}"] [data-panel-handle-id]`,
    ),
  )
  const handleIndex = handles.indexOf(handleEl)

  const itemBefore = items.value[handleIndex]
  const itemAfter = items.value[handleIndex + 1]
  return [itemBefore, itemAfter, handleIndex]
}

const reactiveState = reactive({
  dragging: false,
  itemBeforeId: '',
  itemAfterId: '',
  activeHandleId: '',
})

const dragState = {
  startX: 0,
  delta: 0,
  itemBefore: undefined as HTMLElement | undefined,
  itemAfter: undefined as HTMLElement | undefined,
  initialSizeItemBefore: 0,
  initialSizeItemAfter: 0,
  handleIndex: -1,
  handleOffset: 0,
  handleEl: null as HTMLElement | null,
}
function startDragging(
  e: PointerEvent,
  handleEl: HTMLElement,
  handleId: string,
) {
  reactiveState.dragging = true
  dragState.startX = e.clientX
  dragState.handleEl = handleEl
  reactiveState.activeHandleId = handleId
  const [itemBefore, itemAfter, handleIndex] = getHandlePanelElements(handleEl)
  dragState.itemBefore = itemBefore
  dragState.itemAfter = itemAfter
  dragState.handleIndex = handleIndex
  dragState.initialSizeItemBefore = itemBefore.getBoundingClientRect().width
  dragState.initialSizeItemAfter = itemAfter.getBoundingClientRect().width
  reactiveState.itemBeforeId = itemBefore.dataset.panelItemId!
  reactiveState.itemAfterId = itemAfter.dataset.panelItemId!
  if (teleportHandle) {
    dragState.handleOffset = handleEl.getBoundingClientRect().width / 2
  }
  window.addEventListener('pointermove', pointerMove)
  window.addEventListener('pointerup', stopDragging)
}

function pointerMove(e: any) {
  dragState.delta = e.clientX - dragState.startX
  if (lazy)
    dragState.handleEl!.style.transform = `translateX(${dragState.delta + dragState.handleOffset}px)`
  else update()
}

function stopDragging() {
  reactiveState.dragging = false
  window.removeEventListener('pointermove', pointerMove)
  window.removeEventListener('pointerup', stopDragging)
  reactiveState.activeHandleId = ''
  if (lazy) update()
  dragState.delta = 0
}

function update() {
  if (!dragState.itemBefore || !dragState.itemAfter) return

  const itemBeforeMinSize = Number(dragState.itemBefore.dataset.panelItemMin)
  let itemBeforeNewWidth = dragState.initialSizeItemBefore + dragState.delta
  if (!isNaN(itemBeforeMinSize) && itemBeforeNewWidth <= itemBeforeMinSize)
    itemBeforeNewWidth = itemBeforeMinSize

  const itemAfterMinSize = Number(dragState.itemAfter.dataset.panelItemMin)
  const totalWidth =
    dragState.initialSizeItemBefore + dragState.initialSizeItemAfter
  let itemAfterNewWidth = totalWidth - itemBeforeNewWidth
  if (!isNaN(itemAfterMinSize) && itemAfterNewWidth <= itemAfterMinSize) {
    itemAfterNewWidth = itemAfterMinSize
    itemBeforeNewWidth = totalWidth - itemAfterNewWidth
  }

  dragState.itemBefore.style.width = `${itemBeforeNewWidth}px`
  dragState.itemAfter.style.width = `${itemAfterNewWidth}px`
  if (autoSaveId) {
    sizes.value[dragState.handleIndex] = `${itemBeforeNewWidth}px`
    sizes.value[dragState.handleIndex + 1] = `${itemAfterNewWidth}px`
  }
}

const groupId = useId()
provide(PanelGroupKey, {
  addItem,
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
  if (sizes.value.length)
    items.value.forEach((item, index) => {
      item.style.width = sizes.value[index]
    })
  else
    requestAnimationFrame(() => {
      items.value.forEach((item) => {
        const width = `${item.getBoundingClientRect().width}px`
        sizes.value.push(width)
      })
      items.value.forEach((item, index) => {
        item.style.width = sizes.value[index]
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
