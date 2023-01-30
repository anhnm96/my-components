<script lang="tsx" setup>
import type { FunctionalComponent } from 'vue'
import { Motion } from 'motion/vue'
import { spring } from 'motion'

const step = ref(1)

function setStep(s: number) {
  step.value = s
}

const CheckIcon: FunctionalComponent = (props: any) => {
  const draw = (progress: number) => ({
    // This property makes the line "draw" in when animated
    strokeDashoffset: 1 - progress,

    // Each line will be hidden until it starts drawing
    // to fix a bug in Safari where the line can be
    // partially visible even when progress is at 0
    visibility: 'visible',
  })
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="3"
    >
      <Motion
        tag="path"
        initial={{ strokeDasharray: 1, strokeDashoffset: 1 }}
        animate={draw(1)}
        transition={{
          delay: 0.2,
          easing: spring({
            stiffness: 400,
            damping: 90,
          }),
          duration: 0.3,
        }}
        pathLength="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

const Step: FunctionalComponent = (props: any) => {
  const status =
    props.currentStep === props.step
      ? 'active'
      : props.currentStep < props.step
      ? 'inactive'
      : 'complete'

  const variants = {
    inactive: {
      backgroundColor: 'var(--white)',
      borderColor: 'var(--slate-200)',
      color: 'var(--slate-400)',
    },
    active: {
      backgroundColor: 'var(--white)',
      borderColor: 'var(--blue-500)',
      color: 'var(--blue-500)',
    },
    complete: {
      backgroundColor: 'var(--blue-500)',
      borderColor: 'var(--blue-500)',
      color: 'var(--blue-500)',
    },
  }

  const backgroundVariants = {
    inactive: {},
    active: { scale: 1, transition: { delay: 0, duration: 0.2 } },
    complete: { scale: 1.25 },
  }
  return (
    <div className="relative">
      <Motion
        animate={backgroundVariants[status]}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: 'tween',
          ease: 'circOut',
        }}
        className="absolute inset-0 rounded-full bg-blue-200"
      ></Motion>
      <Motion
        animate={variants[status]}
        transition={{ duration: 0.2 }}
        className="relative flex  h-10 w-10 items-center justify-center rounded-full border-2 font-semibold"
      >
        <div className="flex items-center justify-center">
          {status === 'complete' ? (
            <CheckIcon class="h-6 w-6 text-white" />
          ) : (
            <span>{props.step}</span>
          )}
        </div>
      </Motion>
    </div>
  )
}
Step.props = ['currentStep', 'step']
</script>

<template>
  <div
    class="flex min-h-[500px] items-center bg-gradient-to-br from-slate-700 to-slate-900"
  >
    <div class="mx-auto w-full max-w-md rounded-2xl bg-white">
      <div class="flex justify-between rounded p-8">
        <Step :step="1" :current-step="step" />
        <Step :step="2" :current-step="step" />
        <Step :step="3" :current-step="step" />
        <Step :step="4" :current-step="step" />
      </div>
      <div class="px-8 pb-8">
        <div>
          <div class="mt-2 h-6 w-40 rounded bg-slate-100" />
          <div class="mt-4 space-y-2">
            <div class="h-4 w-5/6 rounded bg-slate-100" />
            <div class="h-4 rounded bg-slate-100" />
            <div class="h-4 w-4/6 rounded bg-slate-100" />
          </div>
        </div>

        <div class="mt-10 flex justify-between">
          <button
            class="rounded px-2 py-1 text-slate-400 hover:text-slate-700"
            @click="() => setStep(step < 2 ? step : step - 1)"
          >
            Back
          </button>
          <button
            class="bg flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-blue-600 active:bg-blue-700"
            :class="[step > 4 && 'pointer-events-none opacity-50']"
            @click="() => setStep(step > 4 ? step : step + 1)"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
