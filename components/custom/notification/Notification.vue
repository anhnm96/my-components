<script lang="ts">
// import {
//   CheckCircleIcon,
//   InformationCircleIcon,
//   XCircleIcon,
// } from '@heroicons/vue/outline'
// import { XIcon } from '@heroicons/vue/solid'
import type { PropType } from 'vue'
import type { Position } from './types'
import useTimer from './useTimer'

export default defineComponent({
  name: 'Simple',
  // components: {
  //   CheckCircleIcon,
  //   XIcon,
  //   InformationCircleIcon,
  //   XCircleIcon,
  // },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    onClose: {
      type: Function,
      default: () => {},
    },
    position: {
      type: String as PropType<Position>,
      default: 'top-right',
    },
    timeout: {
      type: Number,
      default: 5000,
    },
    showProgressbar: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'info',
    },
  },
  setup(props) {
    const show = ref(true)
    let positionClass
    switch (props.position) {
      case 'top-right':
        positionClass = 'top-0 right-0'
        break
      case 'top-left':
        positionClass = 'top-0 left-0'
        break
      case 'top-center':
        positionClass = 'top-0 left-1/2 transform -translate-x-1/2'
        break
      case 'bottom-right':
        positionClass = 'bottom-0 right-0'
        break
      case 'bottom-left':
        positionClass = 'bottom-0 left-0'
        break
      case 'bottom-center':
        positionClass = 'bottom-0 left-1/2 transform -translate-x-1/2'
        break
    }

    const typeStyle = reactive({ color: '', icon: '' })

    switch (props.type) {
      case 'info':
        Object.assign(typeStyle, {
          color: 'blue',
          icon: 'InformationCircleIcon',
        })
        break
      case 'warn':
        Object.assign(typeStyle, {
          color: 'yellow',
          icon: 'InformationCircleIcon',
        })
        break
      case 'success':
        Object.assign(typeStyle, { color: 'green', icon: 'CheckCircleIcon' })
        break
      case 'danger':
        Object.assign(typeStyle, { color: 'red', icon: 'XCircleIcon' })
        break
    }

    const notiEl = ref<HTMLElement>()
    let progress
    if (props.timeout > 0) {
      const {
        start,
        stop,
        progress: val,
      } = useTimer(() => (show.value = false), props.timeout)
      progress = val

      function mouseenter() {
        stop()
      }

      function mouseleave() {
        start()
      }

      onMounted(() => {
        notiEl.value?.addEventListener('mouseenter', mouseenter)
        notiEl.value?.addEventListener('mouseleave', mouseleave)
        start()
      })

      onBeforeUnmount(() => {
        notiEl.value?.removeEventListener('mouseenter', mouseenter)
        notiEl.value?.removeEventListener('mouseleave', mouseleave)
      })
    }

    return { show, positionClass, progress, notiEl, typeStyle }
  },
})
</script>

<template>
  <transition
    enter-active-class="transition duration-300 ease-out transform"
    enter-from-class="opacity-0 sm:translate-x-full"
    enter-to-class="opacity-100 sm:translate-x-0"
    leave-active-class="transition duration-200 ease-in transform"
    leave-from-class="opacity-100"
    leave-to-class="-translate-y-2 opacity-0 "
    appear
    @after-leave="() => onClose()"
  >
    <div
      v-show="show"
      ref="notiEl"
      class="pointer-events-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all"
      :class="positionClass"
    >
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <!-- <component
              :is="typeStyle.icon"
              class="h-6 w-6"
              :class="[`text-${typeStyle.color}-500`]"
              aria-hidden="true"
            /> -->
          </div>
          <div class="ml-3 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">
              {{ title }}
            </p>
            <p class="mt-1 text-sm text-gray-500">
              {{ description }}
            </p>
          </div>
          <div class="ml-4 flex flex-shrink-0">
            <button
              class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              @click="show = false"
            >
              <span class="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="showProgressbar"
        class="h-1 w-full"
        :class="[`bg-${typeStyle.color}-500`]"
        :style="{ width: `${progress}%` }"
      />
    </div>
  </transition>
</template>
