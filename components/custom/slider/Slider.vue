<script lang="ts" setup>
import { clamp } from 'lodash-es'
import { Motion } from 'motion/vue'

const props = withDefaults(
  defineProps<{
    modelValue?: number
    min?: number
    max?: number
    initialHeight?: number
    updateOnTouch?: boolean
  }>(),
  {
    modelValue: 0,
    min: 0,
    max: 100,
    initialHeight: 4,
    updateOnTouch: true,
  }
)
const emit = defineEmits<{
  (e: 'update:modelValue', payload: number): void
}>()

const transition = { type: 'spring', bounce: 0, duration: 0.3 }
const progress = useInternalValue(props, 'modelValue', emit)
const height = 12
const buffer = 12
const width = computed(() => `${(progress.value / props.max) * 100}%`)

const hovered = ref(false)
const panning = ref(false)
const state = computed(() =>
  panning.value ? 'panning' : hovered.value ? 'hovered' : 'idle'
)
const widthVariants = computed(() => ({
  idle: { width: 'calc(95% - 48px)' },
  hovered: { width: 'calc(100% - 48px)' },
  panning: { width: 'calc(100% - 48px)' },
}))

const progressElement = ref()
const startPoint = ref<number>()

function setProgress(e: MouseEvent) {
  startPoint.value ??= e.clientX
  const { left, right } = progressElement.value.$el.getBoundingClientRect()
  const elWidth = progressElement.value.$el.offsetWidth
  if (
    (e.clientX < left && progress.value <= props.min) ||
    (e.clientX > right && progress.value >= props.max)
  )
    return
  const delta = ((e.clientX - startPoint.value) / elWidth) * props.max
  progress.value = clamp(progress.value + delta, props.min, props.max)
  startPoint.value = e.clientX
}

function pointermove(e: PointerEvent) {
  setProgress(e)
}

function pointerdown(e: PointerEvent) {
  if (props.updateOnTouch) {
    const elWidth = progressElement.value.$el.offsetWidth
    const progressWidth =
      e.clientX - progressElement.value.$el.getBoundingClientRect().left
    progress.value = (progressWidth / elWidth) * props.max
  }
  startPoint.value = e.clientX
  panning.value = true
  window.addEventListener('pointermove', pointermove)
  window.addEventListener('pointerup', pointerup)
}

function pointerup() {
  startPoint.value = undefined
  panning.value = false
  window.removeEventListener('pointermove', pointermove)
  window.removeEventListener('pointerup', pointerup)
}

const heightVariants = computed(() => ({
  idle: { height: `${props.initialHeight}px` },
  hovered: { height: `${height}px` },
  panning: { height: `${height}px` },
}))
</script>

<template>
  <div>
    <slot name="left" :hovered="hovered" :panning="panning" />
    <Motion
      ref="progressElement"
      :animate="widthVariants[state]"
      :transition="transition"
      :style="{
        height: `${height + buffer}px`,
      }"
      class="relative flex grow-0 touch-none items-center justify-center"
      :initial="false"
      @pointerenter="hovered = true"
      @pointerleave="hovered = false"
      @pointerdown="pointerdown"
      @dragstart.capture.stop.prevent
    >
      <Motion
        :initial="false"
        :animate="heightVariants[state]"
        :transition="transition"
        class="relative w-full overflow-hidden rounded-full"
      >
        <div class="h-full w-full bg-white/20" />
        <div class="absolute inset-0 w-[20%] bg-white" :style="{ width }" />
      </Motion>
    </Motion>
    <slot name="right" :hovered="hovered" :panning="panning" />
  </div>
</template>
