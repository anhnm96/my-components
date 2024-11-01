<script lang="ts" setup>
import { PanelGroupKey } from './PanelGroup.vue'

const { draggingCls = 'bg-gray-400' } = defineProps<{
  draggingCls?: string
}>()

defineOptions({
  inheritAttrs: false,
})

const handleId = useId()
const handleRef = ref()

const {
  teleportHandle,
  direction,
  state,
  startDragging,
  getHandlePanelElements,
} = inject(PanelGroupKey)!

const targetPanel = ref<string>()
onMounted(() => {
  const [itemBefore] = getHandlePanelElements(handleRef.value)
  targetPanel.value = `[data-panel-item-id="${itemBefore.getAttribute('data-panel-item-id')}"]`
})

function pointerStart(e: PointerEvent) {
  startDragging(e, handleRef.value, handleId)
}

const isActive = computed(() => handleId === state.activeHandleId)
</script>

<template>
  <Teleport :disabled="!targetPanel || !teleportHandle" :to="targetPanel">
    <div
      v-bind="$attrs"
      ref="handleRef"
      class="touch-action-none z-10 select-none [[data-panel-direction='horizontal']_&]:cursor-col-resize [[data-panel-direction='vertical']_&]:cursor-row-resize"
      :class="[
        teleportHandle && 'absolute right-0 top-0',
        isActive && draggingCls,
      ]"
      :style="{
        transform: teleportHandle
          ? direction === 'horizontal'
            ? 'translateX(50%)'
            : 'translateY(50%)'
          : '',
      }"
      :data-panel-handle-id="handleId"
      @pointerdown="pointerStart"
    >
      &nbsp;
    </div>
  </Teleport>
</template>
