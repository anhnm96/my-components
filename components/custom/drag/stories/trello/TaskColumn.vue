<script>
import DragDrop from '../../DragItem.vue'
export default {
  components: { DragDrop },
  props: {
    item: {
      type: Object,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
  },
  emits: ['dragEnter', 'remove'],
  methods: {
    dragEnter($event) {
      this.$emit('dragEnter', $event)
    },
  },
}
</script>

<template>
  <DragDrop
    tag="li"
    :draggable="true"
    :data-transfer="{
      type: 'task',
      columnIndex,
      taskIndex,
      value: item,
    }"
    @remove="$emit('remove', $event)"
    @drag-enter="dragEnter"
  >
    <div class="block rounded-md bg-white p-5 shadow">
      <div class="flex justify-between">
        <p class="text-sm font-semibold leading-snug text-gray-900">
          {{ item.title }}
        </p>
        <span class="flex-shrink-0">
          <img class="h-6 w-6 rounded-full" :src="item.avatar" alt="avatar" />
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
  </DragDrop>
</template>

<style></style>
