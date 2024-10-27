<script lang="ts" setup>
import { PanelGroupKey } from './PanelGroup.vue'

const { as = 'div' } = defineProps<{
  as?: string
  min?: number
}>()

const { addItem } = inject(PanelGroupKey)!

const panelRef = ref()
onMounted(() => {
  addItem(panelRef.value)
})

const panelId = useId()
</script>

<template>
  <component
    :is="as"
    ref="panelRef"
    :data-panel-item-id="panelId"
    :data-panel-item-min="min"
    class="relative"
  >
    <slot />
  </component>
</template>
