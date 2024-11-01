<script lang="ts">
interface PanelGroupContext {
  addItem: (item: HTMLDivElement) => void
  direction: Direction
  teleportHandle: boolean
  activeHandleId: Ref<string>
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

const activeHandleId = ref()

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
  dragState.startX = e.clientX
  dragState.handleEl = handleEl
  activeHandleId.value = handleId
  const [itemBefore, itemAfter, handleIndex] = getHandlePanelElements(handleEl)
  dragState.itemBefore = itemBefore
  dragState.itemAfter = itemAfter
  dragState.handleIndex = handleIndex
  dragState.initialSizeItemBefore = itemBefore.getBoundingClientRect().width
  dragState.initialSizeItemAfter = itemAfter.getBoundingClientRect().width
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
  window.removeEventListener('pointermove', pointerMove)
  window.removeEventListener('pointerup', stopDragging)
  activeHandleId.value = ''
  if (lazy) {
    update()
    if (teleportHandle)
      dragState.handleEl!.style.transform =
        direction === 'horizontal' ? 'translateX(50%)' : 'translateY(50%)'
    else
      dragState.handleEl!.style.transform =
        direction === 'horizontal' ? 'translateX(0)' : 'translateY(0)'
  }
  dragState.delta = 0
}

function update() {
  if (!dragState.itemBefore || !dragState.itemAfter) return

  const itemBeforeMinSize = Number(
    dragState.itemBefore.getAttribute('data-panel-item-min'),
  )
  let itemBeforeNewWidth = dragState.initialSizeItemBefore + dragState.delta
  if (!isNaN(itemBeforeMinSize) && itemBeforeNewWidth <= itemBeforeMinSize)
    itemBeforeNewWidth = itemBeforeMinSize

  const itemAfterMinSize = Number(
    dragState.itemAfter.getAttribute('data-panel-item-min'),
  )
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
  teleportHandle,
  activeHandleId,
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
