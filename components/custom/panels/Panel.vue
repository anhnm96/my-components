<script lang="ts" setup>
import { PanelGroupKey } from './PanelGroup.vue'

const { as = 'div', defaultSize } = defineProps<{
  as?: string
  minSize?: number
  maxSize?: number
  defaultSize?: string
  collapsible?: boolean
  collapsedSize?: number
  wrapperClass?: string
}>()

const { addItem, state, directionValue } = inject(PanelGroupKey)!

const panelRef = ref()
onMounted(() => {
  panelRef.value.style[directionValue] = defaultSize
  addItem(panelRef.value)
})

const panelId = useId()
watch(
  [() => state.itemBeforeId, () => state.itemAfterId],
  ([itemBeforeId, itemAfterId]) => {
    if (itemBeforeId === panelId || itemAfterId === panelId)
      panelRef.value.classList.add('panel-item--active')
    else panelRef.value.classList.remove('panel-item--active')
  },
)
</script>

<template>
  <component
    :is="as"
    :id="panelId"
    ref="panelRef"
    :data-panel-item-id="panelId"
    :data-panel-item-collapsible="collapsible"
    :data-panel-item-collapsed-size="collapsedSize"
    :data-panel-item-min-size="minSize"
    :data-panel-item-max-size="maxSize"
    class="relative"
    :style="{
      '--direction-value': directionValue,
    }"
  >
    <div class="h-full w-full overflow-hidden" :class="wrapperClass">
      <slot />
    </div>
  </component>
</template>

<style scoped>
.panel-item--active {
  will-change: var(--direction-value);
}
</style>
