<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    rootClass?: string
    modelValue?: string | number | boolean | any[] | Set<any>
  }>(),
  {
    rootClass: 'inline-flex space-x-2',
    modelValue: false,
  }
)

const emit = defineEmits(['update:modelValue'])
const value = useInternalValue(props, 'modelValue', emit)

const inputRef = ref()
function focus() {
  // MacOS FireFox and Safari do not focus when clicked
  inputRef.value.focus()
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <label :class="rootClass" @click.stop="focus">
    <input v-bind="$attrs" ref="inputRef" v-model="value" type="checkbox" />
    <span v-if="$slots.default"><slot /></span>
  </label>
</template>
