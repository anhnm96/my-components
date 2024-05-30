const resolved__virtual_storySource_componentsCustomModalModalStoryVue = `<script>
import Modal from './Modal'
export default {
  components: { Modal },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    test() {
      this.open = false
    },
  },
}
<\/script>

<template>
  <Story title="Modal">
    <div class="flex items-center justify-center">
      <div class="rounded-lg bg-white px-6 py-6 shadow-md">
        <h2
          class="border-b-2 border-gray-200 pb-4 text-2xl font-semibold leading-tight text-gray-900"
        >
          Delete account
        </h2>
        <p class="mt-4 text-gray-700">
          We'll cancel your subscription and remove all of your data from our
          servers.
        </p>
        <div class="mt-6">
          <button
            class="focus:shadow-outline rounded border border-transparent bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600 focus:outline-none"
            @click="open = true"
          >
            Delete my account
          </button>
          <Modal
            v-model="open"
            aria-labelledby="dialog-title"
            :persistent="true"
          >
            <div
              class="w-full max-w-lg rounded-lg bg-white px-6 py-6 shadow-2xl"
            >
              <h2
                id="dialog-title"
                class="border-b-2 border-gray-200 pb-4 text-2xl font-semibold leading-tight text-gray-900"
              >
                Delete account
              </h2>
              <p class="mt-4 text-gray-700">
                Are you absolutely sure you want to cancel your subscription and
                delete your account? This action cannot be undone.
              </p>
              <div class="mt-6">
                <button
                  type="button"
                  class="btn bg-red-500 font-semibold text-white hover:bg-red-600"
                  @click="open = false"
                >
                  Delete my account
                </button>
                <button
                  class="btn ml-4 border-gray-100 bg-white font-semibold text-gray-800 hover:bg-gray-100"
                  @click="open = false"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  </Story>
</template>

<style></style>
`;
export {
  resolved__virtual_storySource_componentsCustomModalModalStoryVue as default
};
