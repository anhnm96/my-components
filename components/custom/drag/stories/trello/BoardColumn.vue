<script>
import DragList from '../../DragList.vue'

export default {
  components: {
    DragList,
  },
  props: {
    column: {
      type: Object,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      ghostItemPosition: null,
      newItem: null,
    }
  },
  computed: {
    tasks: {
      set(val) {
        Object.assign(this.column, { tasks: val })
      },
      get() {
        return this.column.tasks
      },
    },
  },
  methods: {
    remove(transferData) {
      this.ghostItemPosition = transferData
    },
    dragEnter({ from, to }) {
      const oldPosition = this.ghostItemPosition
      console.log('parent')
      // console.log(oldPosition.columnIndex, to.columnIndex, oldPosition.taskIndex, to.taskIndex)
      // console.log(oldPosition.taskIndex !== to.taskIndex)
      // console.log(oldPosition.columnIndex !== to.columnIndex && oldPosition.taskIndex === to.taskIndex)
      // if (oldPosition.taskIndex !== to.taskIndex || (oldPosition.columnIndex !== to.columnIndex && oldPosition.taskIndex === to.taskIndex)) {
      //   // remove current ghost item if drag enter another position
      //   if (this.ghostItemPosition)
      //     this.column.tasks.splice(oldPosition.taskIndex, 1)
      //   if (this.newItem) {
      //     this.newItem.classList.remove('ghost-item')
      //   }
      //   // add ghost item to current position
      //   this.column.tasks.splice(to.taskIndex, 0, from.value)
      //   // add class for ghost item
      //   this.newItem = this.$refs[`col${to.columnIndex}`][to.taskIndex].$el
      //   this.newItem.classList.add('ghost-item')
      //   console.log('remove', oldPosition.taskIndex, to.taskIndex)

      // }
      // this.ghostItemPosition = to
    },
  },
}
</script>

<template>
  <div
    class="ml-3 flex w-80 max-w-sm flex-shrink-0 flex-col rounded-md bg-gray-100"
  >
    <h3 class="flex-shrink-0 px-3 pt-3 pb-1 text-sm font-medium text-gray-700">
      {{ column.name }}
    </h3>
    <div class="min-h-0 flex-1 overflow-y-auto">
      <ul class="px-3 pt-1 pb-3">
        <DragList
          v-model:list="tasks"
          group="task"
          name="sca"
          mode="cut"
          :id-adapter="(item) => item._id"
        >
          <template #default="{ item, index }">
            <div
              :class="{ 'mt-3': index > 0 }"
              class="block rounded-md bg-white p-5 shadow"
            >
              <div class="flex justify-between">
                <p class="text-sm font-semibold leading-snug text-gray-900">
                  {{ item.title }}
                </p>
                <span class="flex-shrink-0">
                  <img
                    class="h-6 w-6 rounded-full"
                    :src="item.avatar"
                    alt="avatar"
                  />
                </span>
              </div>
              <div class="flex items-baseline justify-between">
                <div class="text-sm text-gray-600">
                  <time :datetime="item.date">{{ item.date }}</time>
                </div>
                <div class="mt-2">
                  <span
                    class="inline-flex items-center rounded bg-teal-100 px-2 py-1 leading-tight"
                  >
                    <svg
                      class="h-2 w-2 text-teal-500"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    <span class="ml-2 text-sm font-medium text-teal-900"
                      >Feature Request</span
                    >
                  </span>
                </div>
              </div>
            </div>
          </template>
          <template #placeholder-add>
            <div style="background: green; height: 1px" />
          </template>
        </DragList>
      </ul>
    </div>
  </div>
</template>

<style>
.sca-enter-from,
.sca-leave-to {
  opacity: 0;
  max-height: 0;
}
.sca-enter-to,
.sca-leave-from {
  max-height: 300px;
}
.sca-enter-active,
.sca-leave-active {
  transition: all 0.4s ease;
}
</style>
