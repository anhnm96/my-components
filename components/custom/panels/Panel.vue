<script lang="ts" setup>
import { PanelGroupKey } from './PanelGroup.vue'

const { as = 'div', defaultSize } = defineProps<{
  as?: string
  min?: number
  defaultSize?: string
}>()

const { addItem, state, directionValue } = inject(PanelGroupKey)!

const panelRef = ref()
onMounted(() => {
  panelRef.value.style[directionValue] = defaultSize
  addItem(panelRef.value)
})

const panelId = useId()
const isActive = computed(
  () => state.itemBeforeId === panelId || state.itemAfterId === panelId,
)
</script>

<template>
  <component
    :is="as"
    ref="panelRef"
    :data-panel-item-id="panelId"
    :data-panel-item-min="min"
    class="panel-item relative"
    :class="isActive && 'panel-item--active'"
    :style="{
      '--direction-value': directionValue,
    }"
  >
    <slot />
  </component>
</template>

<style scoped>
.panel-item {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.panel-item--active {
  will-change: var(--direction-value);
}
</style>
