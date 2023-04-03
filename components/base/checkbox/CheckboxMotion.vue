<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    rootClass?: string
    rootStyle?: any
    modelValue?: string | number | boolean | any[]
    indeterminate?: boolean
  }>(),
  {
    rootClass: 'inline-flex gap-2',
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

const _value = computed(() => {
  const _v = value.value
  return inputRef.value?.checked
})

onMounted(() => {
  // can't use watch immediate because it run before
  // element is mounted
  inputRef.value.indeterminate = props.indeterminate
})

watch(
  () => props.indeterminate,
  (val) => {
    if (inputRef.value) inputRef.value.indeterminate = val
  }
)

const isIndeterminated = computed(() => {
  const _v = value.value
  return inputRef.value?.indeterminate
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <label :class="rootClass" @click.stop="focus">
    <input
      v-bind="$attrs"
      ref="inputRef"
      v-model="value"
      type="checkbox"
      class="sr-only"
    />
    <div
      :style="[
        {
          backgroundColor:
            _value || isIndeterminated ? 'var(--background)' : '',
          borderColor: _value ? 'var(--background)' : '',
          border: _value || isIndeterminated ? '' : '1px solid currentColor',
        },
        rootStyle,
      ]"
      class="flex h-4 w-4 items-center justify-center rounded-sm transition-all duration-200"
    >
      <svg
        v-if="_value"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="3"
      >
        <VMotion
          :initial="{ strokeDashoffset: 1 }"
          :animate="{ strokeDashoffset: 0 }"
          as="path"
          pathLength="1"
          stroke-dasharray="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <svg
        v-if="isIndeterminated"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
      </svg>
    </div>
    <span v-if="$slots.default"><slot /></span>
  </label>
</template>

<style scoped>
label {
  --background: var(--info);
}
</style>
