<script lang="ts" setup>
const props = defineProps<{ selected: boolean }>()

const emit = defineEmits<{
  'update:selected': [value: boolean]
}>()
const _selected = useInternalValue(props, emit, 'selected')

function toggle() {
  _selected.value = !_selected.value
}
</script>

<template>
  <BaseButton class="btn-toggle" :aria-pressed="_selected" @click="toggle">
    <slot />
  </BaseButton>
</template>
