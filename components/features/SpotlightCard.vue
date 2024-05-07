<script setup>
const props = defineProps({
  as: {
    type: String,
    default: 'div',
  },
  from: {
    type: String,
    default: 'rgba(255,255,255,0.8)',
  },
  via: {
    type: String,
    default: null,
  },
  to: {
    type: String,
    default: 'transparent',
  },
  size: {
    type: Number,
    default: 350,
  },
  mode: {
    type: String,
    default: 'before',
  },
  hsl: {
    type: Boolean,
    default: false,
  },
  hslMin: {
    type: Number,
    default: 0,
  },
  hslMax: {
    type: Number,
    default: 360,
  },
})

const card = ref()
const { elementX, elementY, elementHeight, elementWidth } =
  useMouseInElement(card)

const spotlightColorStops = computed(() => {
  if (props.hsl) {
    const margin = props.hslMax - props.hslMin
    const rate =
      (elementY.value + elementX.value) /
      (elementHeight.value + elementWidth.value)
    const hue = Math.round(margin * rate + props.hslMin)

    return `hsl(${hue} 80% 70%),transparent`
  }

  return [props.from, props.via, props.to].filter((value) => !!value).join(',')
})
</script>

<template>
  <component
    :is="as"
    ref="card"
    :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
      '--spotlight-color-stops': spotlightColorStops,
      '--spotlight-size': `${size}px`,
    }"
    :class="{
      'before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]':
        mode === 'before',
      'after:absolute after:inset-0 after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]':
        mode === 'after',
    }"
    class="relative transform-gpu overflow-hidden"
  >
    <slot />
  </component>
</template>
