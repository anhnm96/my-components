<script setup lang="ts">
type DynamicStyle = {
  [K in keyof CSSStyleDeclaration]: { [K2 in K]: number }
}[keyof CSSStyleDeclaration]
const props = withDefaults(
  defineProps<{
    as?: string
    animate: DynamicStyle
  }>(),
  {
    as: 'div',
  }
)

const stateArr = ref<number[]>([])
watch(
  () => props.animate,
  (val) => {
    if (!val) return
    stateArr.value = []
    for (const [, value] of Object.entries(val)) {
      stateArr.value.push(value)
    }
  },
  { immediate: true }
)

const transition = useTransition(stateArr, {
  duration: 400,
  transition: [0.4, 0, 0.2, 1],
})

const style = computed(() => {
  const res: DynamicStyle = {}
  let i = 0
  for (const key in props.animate) {
    res[key as keyof DynamicStyle] = transition.value[i]
    if (key.startsWith('margin')) res[key] += '%'
    i++
  }
  return res
})
</script>

<template>
  <component :is="as" :style="style"><slot /></component>
</template>
