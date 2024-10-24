<script lang="ts" setup>
import { PanelGroupKey } from './PanelGroup.vue'

const props = withDefaults(
  defineProps<{
    as?: string
    minWidth?: number
  }>(),
  { as: 'div' },
)

const { addItem, update } = inject(PanelGroupKey)!

const panelRef = ref()
onMounted(() => {
  addItem(panelRef.value)
  requestAnimationFrame(() => {
    panelRef.value.style.width = `${panelRef.value.getBoundingClientRect().width}px`
  })
})

const handleRef = ref()

const dragging = ref(false)
const startX = ref()
const delta = ref(0)
const initialWidth = ref()

function pointerStart() {
  dragging.value = true
  const rect = panelRef.value.getBoundingClientRect()
  initialWidth.value = rect.width
  startX.value = rect.right
  window.addEventListener('pointermove', pointerMove)
  window.addEventListener('pointerup', pointerUp)
}
function pointerMove(e: any) {
  delta.value = e.clientX - startX.value
  handleRef.value.style.transform = `translateX(${delta.value}px)`
}
function pointerUp() {
  let newWidth = initialWidth.value + delta.value
  if (props.minWidth !== undefined && newWidth <= props.minWidth)
    newWidth = props.minWidth
  update(panelRef.value, newWidth)
  handleRef.value.style.transform = `translateX(0px)`
  dragging.value = false
  window.removeEventListener('pointermove', pointerMove)
  window.removeEventListener('pointerup', pointerUp)
}
</script>

<template>
  <component :is="as" ref="panelRef" class="relative select-none">
    <slot />
    <div class="absolute right-0 top-0 w-1 cursor-move bg-red-500">&nbsp;</div>
    <div
      ref="handleRef"
      class="absolute right-0 top-0 w-1 cursor-move select-none bg-gray-500"
      @pointerdown="pointerStart"
    >
      &nbsp;
    </div>
  </component>
</template>
