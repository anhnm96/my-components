<script lang="ts" setup>
import { PanelGroupKey } from './PanelGroup.vue'

const { as = 'div' } = defineProps<{
  as?: string
  minWidth?: number
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
    class="relative select-none"
  >
    <slot />
    <div class="absolute right-0 top-0 w-1 bg-red-500">&nbsp;</div>
  </component>
</template>
