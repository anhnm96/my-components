<script setup lang="ts">
interface RandomRange {
  min: number
  max: number
}
const props = withDefaults(
  defineProps<{
    bgClass?: string
    cssClass?: string
    shimmerColor?: string
    auto?: boolean
    range?: RandomRange
  }>(),
  {
    bgClass: 'bg-gray-300',
    cssClass: 'rounded',
    shimmerColor: '#ffffff',
    auto: false,
    range: () => ({
      min: 20,
      max: 100,
    }),
  }
)

const shimmerStyle = computed(() => {
  const rgb = isHexColor(props.shimmerColor)
    ? hexToRgb(props.shimmerColor)
    : props.shimmerColor

  return {
    backgroundImage: `linear-gradient(90deg, rgba(${rgb}, 0) 0%, rgba(${rgb}, 0.2) 20%, rgba(${rgb}, 0.5) 60%, rgba(${rgb}, 0))`,
  }
})

const width = computed(() => {
  return `${Math.floor(
    Math.random() * (props.range.max - props.range.min) + props.range.min
  )}%`
})
</script>

<template>
  <div
    aria-hidden="true"
    class="relative overflow-hidden"
    :class="[bgClass, cssClass]"
    :style="{ width: auto === true ? width : '' }"
  >
    <div class="shimmer absolute inset-0" :style="shimmerStyle"></div>
    <slot />
  </div>
</template>

<style scoped>
.shimmer {
  transform: translateX(-100%);
  animation: shimmer 1.4s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
