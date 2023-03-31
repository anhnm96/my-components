<script setup lang="ts">
type DynamicStyle = {
  [K in keyof CSSStyleDeclaration]: { [K2 in K]: string | number }
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
function objectToVector(obj: Record<string, string | number>): number[] {
  const values = Object.values(obj)
  const vector = values.map((value) =>
    typeof value === 'string' ? parseFloat(value) : value
  )
  return vector
}
watch(
  () => props.animate,
  (val) => {
    if (!val) return
    stateArr.value = objectToVector(val)
  },
  { immediate: true }
)

const transition = useTransition(stateArr, {
  duration: 400,
  transition: [0.4, 0, 0.2, 1],
})

function getSuffix(str: string): string {
  const match = str.match(/^(.*?)([^\d]*)$/)
  return match ? match[2] : ''
}

function vectorToObject(
  vector: number[],
  obj: Record<string, string | number>
): Record<string, string | number> {
  const keys = Object.keys(obj)
  const newObj: DynamicStyle = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i] as keyof DynamicStyle
    let value: string | number = vector[i]
    if (typeof obj[key] === 'string') {
      const suffix = getSuffix(obj[key] as string)
      if (suffix) {
        value = `${value}${suffix}`
      }
    }
    newObj[key] = value
  }
  return newObj
}

const style = computed(() => {
  return vectorToObject(transition.value, props.animate)
})
</script>

<template>
  <component :is="as" :style="style"><slot /></component>
</template>
