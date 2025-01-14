<script lang="ts" setup>
import { PanelGroupKey } from './PanelGroup.vue'

const { draggingClass = 'bg-slate-400' } = defineProps<{
  draggingClass?: string
}>()

defineOptions({
  inheritAttrs: false,
})

const handleId = useId()
const handleRef = useTemplateRef<HTMLDivElement>('handle')

const {
  groupId,
  teleportHandle,
  direction,
  state,
  startDragging,
  getHandlePanelElements,
} = inject(PanelGroupKey)!

const targetPanel = ref<string>()
onMounted(() => {
  if (!handleRef.value) {
    throw new Error(
      `Could not init PanelHandle onMounted in PanelGroup ${groupId}`,
    )
  }
  const [itemBefore] = getHandlePanelElements(handleRef.value)
  targetPanel.value = `[data-panel-item-id="${itemBefore.dataset.panelItemId}"]`
  // TODO: handle hover state; resize by keyboard; touch event
  handleRef.value.setAttribute('aria-controls', itemBefore.id)
  handleRef.value.ariaValueMin = itemBefore.dataset.panelItemMinSize || null
  handleRef.value.ariaValueMax = itemBefore.dataset.panelItemMaxSize || null
})

function pointerStart(e: PointerEvent) {
  startDragging(e, handleRef.value!, handleId)
}

const isActive = computed(() => handleId === state.activeHandleId)
</script>

<template>
  <Teleport :disabled="!targetPanel || !teleportHandle" :to="targetPanel">
    <div
      v-bind="$attrs"
      ref="handle"
      role="separator"
      tabindex="0"
      class="touch-action-none z-10 select-none"
      :class="[
        teleportHandle && 'absolute right-0 top-0',
        isActive && draggingClass,
        direction === 'horizontal' ? 'cursor-col-resize' : 'cursor-row-resize',
      ]"
      :style="{
        transform: teleportHandle
          ? direction === 'horizontal'
            ? 'translateX(50%)'
            : 'translateY(50%)'
          : '',
      }"
      :data-panel-group-id="groupId"
      :data-panel-handle-id="handleId"
      @pointerdown="pointerStart"
    >
      &nbsp;
    </div>
  </Teleport>
</template>
