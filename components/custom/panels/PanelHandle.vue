<script lang="ts" setup>
import { PanelGroupKey } from './PanelGroup.vue'

const handleId = useId()
const handleRef = ref()

const { direction, startDragging, getHandlePanelElements } =
  inject(PanelGroupKey)!

const targetPanel = ref<string>()
onMounted(() => {
  const [itemBefore] = getHandlePanelElements(handleRef.value)
  targetPanel.value = `[data-panel-item-id="${itemBefore.getAttribute('data-panel-item-id')}"]`
})

function pointerStart() {
  startDragging(handleRef.value)
}
</script>

<template>
  <Teleport :disabled="!targetPanel" :to="targetPanel">
    <div
      ref="handleRef"
      class="absolute right-0 top-0 z-10 w-2 select-none bg-gray-500 [[data-panel-direction='horizontal']_&]:cursor-col-resize [[data-panel-direction='vertial']_&]:cursor-row-resize"
      :style="{
        transform:
          direction === 'horizontal' ? 'translateX(50%)' : 'translateY(50%)',
      }"
      :data-panel-handle-id="handleId"
      @pointerdown="pointerStart"
    >
      &nbsp;
    </div>
  </Teleport>
</template>
