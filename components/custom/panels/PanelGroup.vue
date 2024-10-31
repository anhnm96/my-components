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
    handleEl?: HTMLElement,
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
  handleEl?: HTMLElement,
): [HTMLElement, HTMLElement, number] {
  const handles = Array.from(
    document.querySelectorAll(
      `[data-panel-group-id="${groupId}"] [data-panel-handle-id]`,
    ),
  )
  const handleIndex = handles.indexOf(handleEl || activeHandleEl!)

  const itemBefore = items.value[handleIndex]
  const itemAfter = items.value[handleIndex + 1]
  return [itemBefore, itemAfter, handleIndex]
}

let startX: number
const delta = ref(0)
let activeHandleEl: HTMLElement | null
const activeHandleId = ref()
let handleOffset = 0
let initialSizeItemBefore: number
let initialSizeItemAfter: number
function startDragging(
  e: PointerEvent,
  handleEl: HTMLElement,
  handleId: string,
) {
  activeHandleEl = handleEl
  activeHandleId.value = handleId
  const [itemBefore, itemAfter] = getHandlePanelElements()
  initialSizeItemBefore = itemBefore.getBoundingClientRect().width
  initialSizeItemAfter = itemAfter.getBoundingClientRect().width
  startX = e.clientX
  if (teleportHandle) {
    handleOffset = activeHandleEl.getBoundingClientRect().width / 2
  }
  window.addEventListener('pointermove', pointerMove)
  window.addEventListener('pointerup', stopDragging)
}

function pointerMove(e: any) {
  delta.value = e.clientX - startX
  if (lazy)
    activeHandleEl!.style.transform = `translateX(${delta.value + handleOffset}px)`
  else update()
}

function stopDragging() {
  window.removeEventListener('pointermove', pointerMove)
  window.removeEventListener('pointerup', stopDragging)
  activeHandleId.value = ''
  if (delta.value === 0) return
  if (lazy) update()
  // reset
  if (teleportHandle)
    activeHandleEl!.style.transform =
      direction === 'horizontal' ? 'translateX(50%)' : 'translateY(50%)'
  else
    activeHandleEl!.style.transform =
      direction === 'horizontal' ? 'translateX(0)' : 'translateY(0)'
  activeHandleEl = null
  delta.value = 0
}

function update() {
  const [itemBefore, itemAfter, handleIndex] = getHandlePanelElements()
  let itemBeforeNewWidth = initialSizeItemBefore + delta.value
  const itemBeforeMinSize = itemBefore.getAttribute('data-panel-item-min')
  if (
    itemBeforeMinSize !== undefined &&
    itemBeforeNewWidth <= Number(itemBeforeMinSize)
  )
    itemBeforeNewWidth = Number(itemBeforeMinSize)

  const itemAfterMinSize = itemAfter.getAttribute('data-panel-item-min')
  const totalWidth = initialSizeItemBefore + initialSizeItemAfter
  let itemAfterNewWidth = totalWidth - itemBeforeNewWidth
  if (
    itemAfterMinSize !== undefined &&
    itemAfterNewWidth <= Number(itemAfterMinSize)
  ) {
    itemAfterNewWidth = Number(itemAfterMinSize)
    itemBeforeNewWidth = totalWidth - itemAfterNewWidth
  }

  itemBefore.style.width = `${itemBeforeNewWidth}px`
  itemAfter.style.width = `${itemAfterNewWidth}px`
  if (autoSaveId) {
    sizes.value[handleIndex] = `${itemBeforeNewWidth}px`
    sizes.value[handleIndex + 1] = `${itemAfterNewWidth}px`
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
