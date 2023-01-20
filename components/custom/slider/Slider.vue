<script lang="ts" setup>
import { clamp } from 'lodash-es'
import { Motion } from 'motion/vue'

const props = withDefaults(
  defineProps<{
    min?: number
    max?: number
    initialHeight?: number
    updateOnTouch?: boolean
  }>(),
  {
    min: 0,
    max: 100,
    initialHeight: 4,
    updateOnTouch: true,
  }
)
// https://www.youtube.com/watch?v=TCf6E4GRTN8&ab_channel=SamSelikoff
const transition = { type: 'spring', bounce: 0, duration: 0.3 }
const progress = ref(50)
const height = 12
const buffer = 12
const width = computed(() => `${(progress.value / props.max) * 100}%`)
const roundedProgress = computed(
  () => `${Math.round((progress.value / props.max) * 100)}%`
)
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
  // if (!progressElement.value) return
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
  <div class="flex flex-1 flex-col items-center justify-center">
    <div class="flex w-full items-center justify-center">
      <Motion
        :initial="false"
        :animate="{
          color: hovered || panning ? 'rgb(255,255,255)' : 'rgb(120,113,108)',
        }"
        class="flex w-6 shrink-0 justify-start"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
          />
        </svg>
      </Motion>
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
      <Motion
        :initial="false"
        :animate="{
          color: hovered || panning ? 'rgb(255,255,255)' : 'rgb(120,113,108)',
        }"
        class="flex w-6 shrink-0 justify-end"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
          />
        </svg>
      </Motion>
    </div>
    <Motion
      :initial="false"
      :animate="{
        color: hovered || panning ? 'rgb(255,255,255)' : 'rgb(120,113,108)',
      }"
      class="mt-4 select-none text-center text-sm font-semibold tabular-nums"
    >
      {{ roundedProgress }}
    </Motion>
  </div>
</template>
