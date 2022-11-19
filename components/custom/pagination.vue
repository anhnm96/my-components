<script lang="ts" setup>
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline'

const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    required: true,
  },
  perPage: {
    type: Number,
    default: 20,
  },
  rangeBefore: {
    type: Number,
    default: 1,
  },
  rangeAfter: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits(['update:currentPage', 'change'])
const pageCount = computed(() => Math.ceil(props.total / props.perPage))
const hasPrev = computed(() => {
  return props.currentPage > 1
})
const hasFirst = computed(() => {
  return props.currentPage >= 2 + props.rangeBefore
})
const hasFirstEllipsis = computed(() => {
  return props.currentPage >= props.rangeBefore + 4
})
const hasLast = computed(() => {
  return props.currentPage <= pageCount.value - (1 + props.rangeAfter)
})
const hasLastEllipsis = computed(() => {
  return props.currentPage < pageCount.value - (2 + props.rangeAfter)
})
const hasNext = computed(() => {
  return props.currentPage < pageCount.value
})
const pagesInRange = computed(() => {
  let left = Math.max(1, props.currentPage - props.rangeBefore)
  if (left - 1 === 2) {
    // Do not show the ellipsis if there is only one to hide
    left--
  }
  let right = Math.min(props.currentPage + props.rangeAfter, pageCount.value)
  if (pageCount.value - right === 2) {
    // Do not show the ellipsis if there is only one to hide
    right++
  }
  const pages = []
  for (let i = left; i <= right; i++) pages.push(getPage(i))

  return pages
})

function changePage(event: MouseEvent, pageNumber: number) {
  // Do nothing if clicking the current active page
  if (pageNumber === props.currentPage) return

  emit('update:currentPage', pageNumber)
  emit('change', pageNumber)

  // Set focus on element to keep tab order
  if (event.target) nextTick(() => (event.target as HTMLElement).focus())
}
function getPage(num: number) {
  return {
    number: num,
    isCurrent: props.currentPage === num,
    onClick: (event: MouseEvent) => changePage(event, num),
    ariaLabel:
      props.currentPage === num ? `current, page ${num}` : `page ${num}`,
  }
}
</script>

<template>
  <nav
    class="relative z-0 inline-flex space-x-3 rounded-md shadow-sm"
    aria-label="Pagination"
  >
    <button
      aria-label="previous page"
      class="btn-page"
      :disabled="!hasPrev"
      @click="changePage($event, currentPage - 1)"
    >
      <!-- <ChevronLeftIcon class="w-4 h-4" aria-hidden="true" /> -->
      &lt;
    </button>
    <button v-if="hasFirst" class="btn-page" @click="changePage($event, 1)">
      1
    </button>
    <button v-if="hasFirstEllipsis" class="btn-page">...</button>
    <!-- Pages -->
    <button
      v-for="page in pagesInRange"
      :key="page.number"
      :aria-label="page.ariaLabel"
      class="btn-page"
      :class="[page.isCurrent && 'btn-page--active']"
      @click="page.onClick"
    >
      {{ page.number }}
    </button>
    <button v-if="hasLastEllipsis" class="btn-page">...</button>
    <button
      v-if="hasLast"
      class="btn-page"
      @click="changePage($event, pageCount)"
    >
      {{ pageCount }}
    </button>
    <button
      aria-label="next page"
      :disabled="!hasNext"
      class="btn-page"
      @click="changePage($event, currentPage + 1)"
    >
      <!-- <ChevronRightIcon class="w-4 h-4" aria-hidden="true" /> -->
      &gt;
    </button>
  </nav>
</template>

<style scoped>
.btn-page {
  @apply w-9 h-9 justify-center text-gray-800 inline-flex items-center;
}

.btn-page--active {
  @apply bg-gray-100 text-gray-600 rounded-full;
}
</style>
