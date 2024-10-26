<script lang="ts">
interface PanelGroupContext {
  addItem: (item: HTMLDivElement) => void
  direction: Direction
  startDragging: (handleEl: HTMLElement) => void
  stopDragging: () => void
  getHandlePanelElements: (handleEl?: HTMLElement) => HTMLElement[]
}

type Direction = 'vertical' | 'horizontal'

export const PanelGroupKey: InjectionKey<PanelGroupContext> =
  Symbol('PanelGroup')
</script>

<script lang="ts" setup>
const { direction = 'horizontal', as = 'div' } = defineProps<{
  as?: string
  direction?: Direction
}>()

const items = ref<HTMLElement[]>([])
function addItem(item: HTMLElement) {
  items.value.push(item)
}

function getHandlesForGroup(): HTMLElement[] {
  return Array.from(
    document.querySelectorAll(
      `[data-panel-group-id="${groupId}"] [data-panel-handle-id]`,
    ),
  )
}

function getHandlePanelElements(
  handleEl?: HTMLElement,
): [idBefore: HTMLElement, idAfter: HTMLElement] {
  const handles = getHandlesForGroup()
  const index = handles.indexOf(handleEl || activeHandleEl!)

  const idBefore = items.value[index]
  const idAfter = items.value[index + 1]
  return [idBefore, idAfter]
}

const startX = ref()
const delta = ref(0)
let activeHandleEl: HTMLElement | null
let handleOffset: number
function startDragging(handleEl: HTMLElement) {
  activeHandleEl = handleEl
  handleOffset = activeHandleEl.getBoundingClientRect().width / 2
  const [itemBefore] = getHandlePanelElements()
  startX.value = itemBefore.getBoundingClientRect().right
  window.addEventListener('pointermove', pointerMove)
  window.addEventListener('pointerup', stopDragging)
}

function pointerMove(e: any) {
  delta.value = e.clientX - startX.value
  activeHandleEl!.style.transform = `translateX(${delta.value + handleOffset}px)`
}

function stopDragging() {
  window.removeEventListener('pointermove', pointerMove)
  window.removeEventListener('pointerup', stopDragging)
  if (delta.value === 0) return
  update()
  // reset
  activeHandleEl!.style.transform =
    direction === 'horizontal' ? 'translateX(50%)' : 'translateY(50%)'
  activeHandleEl = null
  delta.value = 0
}

function update() {
  const [itemBefore, itemAfter] = getHandlePanelElements()

  const initWidth = itemBefore.getBoundingClientRect().width
  const newWidth = initWidth + delta.value
  // if (props.minWidth !== undefined && newWidth <= props.minWidth)
  //   newWidth = props.minWidth

  const initWidth2 = itemAfter.getBoundingClientRect().width
  const sum = initWidth + initWidth2
  itemBefore.style.width = `${newWidth}px`
  itemAfter.style.width = `${sum - newWidth}px`
}

const groupId = useId()
provide(PanelGroupKey, {
  direction,
  startDragging,
  stopDragging,
  addItem,
  getHandlePanelElements,
})

onMounted(() => {
  const widths: string[] = []
  requestAnimationFrame(() => {
    items.value.forEach((item) => {
      const width = `${item.getBoundingClientRect().width}px`
      widths.push(width)
    })
    items.value.forEach((item, index) => {
      item.style.width = widths[index]
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
