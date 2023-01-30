<script>
import { ref } from 'vue'

export default {
  props: {
    onClose: {
      type: Function,
      default: () => {},
    },
  },
  setup() {
    const show = ref(true)
    const payload = ref()

    function onSelect(value) {
      payload.value = value
      show.value = false
    }

    return {
      show,
      onSelect,
      payload,
    }
  },
}
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
    @after-leave="onClose(payload)"
  >
    <div
      v-if="show"
      class="pointer-events-auto max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0 pt-0.5">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt="img"
            />
          </div>
          <div class="ml-3 flex-1">
            <p class="text-sm font-medium text-gray-900">Emilia Gates</p>
            <p class="mt-1 text-sm text-gray-500">
              Sent you an invite to connect.
            </p>
            <div class="mt-4 flex">
              <button
                type="button"
                class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                @click="onSelect('accept')"
              >
                Accept
              </button>
              <button
                type="button"
                class="ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                @click="onSelect('decline')"
              >
                Decline
              </button>
            </div>
          </div>
          <div class="ml-4 flex flex-shrink-0">
            <button
              class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              @click="onSelect('decline')"
            >
              <span class="sr-only">Close</span>
              <svg
                ria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
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
    </div>
  </transition>
</template>
