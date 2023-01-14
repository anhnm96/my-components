<script lang="ts" setup>
import { pick } from 'lodash-es'

const props = withDefaults(
  defineProps<{ dimension?: 'vertical' | 'horizontal'; transition?: string }>(),
  {
    dimension: 'vertical',
    transition: 'all 300ms ease-in-out',
  }
)

const dimensions = {
  vertical: [
    'height',
    'paddingTop',
    'paddingBottom',
    'marginTop',
    'marginBottom',
  ] as const,
  horizontal: [
    'width',
    'paddingLeft',
    'paddingRight',
    'marginLeft',
    'marginRight',
  ] as const,
}

const dimensionKeys = dimensions[props.dimension]
function setClosedDimensions(element: HTMLElement) {
  dimensionKeys.forEach((key) => {
    element.style[key] = '0'
  })
}

function forceRepaint(element: HTMLElement) {
  // Force repaint to make sure the
  // animation is triggered correctly.
  // eslint-disable-next-line no-unused-expressions
  getComputedStyle(element).height
}

function enter(element: HTMLElement) {
  const computedStyles = pick(getComputedStyle(element), dimensionKeys)

  setClosedDimensions(element)
  forceRepaint(element)
  if (props.dimension === 'horizontal') {
    element.style.whiteSpace = 'nowrap'
  }
  element.style.transition = props.transition
  // Trigger the animation.
  // We use `requestAnimationFrame` because we need
  // to make sure the browser has finished
  // painting after setting the `height`
  // to `0` in the line above.
  requestAnimationFrame(() => {
    dimensionKeys.forEach((key) => {
      element.style[key] = computedStyles[key]
    })
  })
}

function afterEnter(element: HTMLElement) {
  dimensionKeys.forEach((key) => {
    element.style[key] = ''
  })
  if (props.dimension === 'horizontal') {
    element.style.whiteSpace = ''
  }
}

function leave(element: HTMLElement) {
  const mainProp = getComputedStyle(element)[dimensionKeys[0]]
  element.style[dimensionKeys[0]] = mainProp
  if (props.dimension === 'horizontal') {
    element.style.whiteSpace = 'nowrap'
  }
  forceRepaint(element)

  requestAnimationFrame(() => {
    setClosedDimensions(element)
  })
}
</script>

<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<style scoped>
* {
  will-change: v-bind(dimensionKeys[0]);
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.expand-enter-active,
.expand-leave-active {
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
}
</style>
