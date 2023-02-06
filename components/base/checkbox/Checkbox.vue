<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    rootClasses?: string
    modelValue?: string | number | boolean | any[]
  }>(),
  {
    modelValue: false,
  }
)

const emit = defineEmits(['update:modelValue'])

const labelRef = ref()
const inputRef = ref()

const _value = ref(props.modelValue)
const computedValue = computed({
  get() {
    return _value.value
  },
  set(value: any) {
    _value.value = value
    emit('update:modelValue', _value.value)
  },
})
watch(
  () => props.modelValue,
  (newVal) => {
    _value.value = newVal
  }
)

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
  <label
    ref="labelRef"
    :class="rootClasses"
    @click.stop="focus"
    @keydown.prevent.enter="labelRef.click()"
  >
    <input
      v-bind="$attrs"
      ref="inputRef"
      v-model="computedValue"
      type="checkbox"
      @click.stop
    />
    <slot />
  </label>
</template>
