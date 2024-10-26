<script lang="ts" setup>
import { PanelGroupKey } from './PanelGroup.vue'

const handleId = useId()
const handleRef = ref()

const { direction, startDragging, getResizeHandlePanelIds } =
  inject(PanelGroupKey)!

const targetQuery = ref()
onMounted(() => {
  const [itemBefore] = getResizeHandlePanelIds(handleRef.value)
  targetQuery.value = `[data-panel-item-id="${itemBefore.getAttribute('data-panel-item-id')}"]`
})

function pointerStart() {
  startDragging(handleRef.value)
}
</script>

<template>
  <Teleport :disabled="!targetQuery" :to="targetQuery">
    <div
      ref="handleRef"
      class="absolute right-0 top-0 z-10 w-2 select-none bg-gray-500"
      :class="[
        direction === 'horizontal' ? 'cursor-col-resize' : 'cursor-row-resize',
      ]"
      :data-panel-handle-id="handleId"
      @pointerdown="pointerStart"
    >
      &nbsp;
    </div>
  </Teleport>
</template>
