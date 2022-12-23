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
  ariaNextLabel: {
    type: String,
    default: 'next page',
  },
  ariaPreviousLabel: {
    type: String,
    default: 'previous page',
  },
  ariaPageLabel: {
    type: String,
    default: 'page',
  },
  ariaCurrentLabel: {
    type: String,
    default: 'current',
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
function getPage(number: number) {
  return {
    number,
    isCurrent: props.currentPage === number,
    onClick: (event: MouseEvent) => changePage(event, number),
    ariaLabel:
      props.currentPage === number
        ? `${props.ariaCurrentLabel}, ${props.ariaPageLabel} ${number}`
        : `${props.ariaPageLabel} ${number}`,
  }
}
</script>

<template>
  <nav
    class="relative z-0 inline-flex space-x-3 rounded-md shadow-sm"
    aria-label="pagination"
  >
    <button
      :aria-label="`${ariaPreviousLabel}, ${ariaPageLabel} ${currentPage - 1}`"
      class="btn-page"
      :disabled="!hasPrev"
      data-test="hasPrev"
      @click="changePage($event, currentPage - 1)"
    >
      <!-- <ChevronLeftIcon class="w-4 h-4" aria-hidden="true" /> -->
      &lt;
    </button>
    <button
      v-if="hasFirst"
      class="btn-page"
      :aria-label="`${props.ariaPageLabel} 1`"
      data-test="hasFirst"
      @click="changePage($event, 1)"
    >
      1
    </button>
    <button v-if="hasFirstEllipsis" class="btn-page">&hellip;</button>
    <!-- Pages -->
    <button
      v-for="page in pagesInRange"
      :key="page.number"
      :aria-label="page.ariaLabel"
      :aria-current="page.isCurrent"
      class="btn-page"
      :class="[page.isCurrent && 'btn-page--active']"
      :data-test="`page-${page.number}`"
      @click="page.onClick"
    >
      {{ page.number }}
    </button>
    <button v-if="hasLastEllipsis" class="btn-page">&hellip;</button>
    <button
      v-if="hasLast"
      class="btn-page"
      :aria-label="`${props.ariaPageLabel} ${pageCount}`"
      data-test="hasLast"
      @click="changePage($event, pageCount)"
    >
      {{ pageCount }}
    </button>
    <button
      :aria-label="`${ariaNextLabel}, ${ariaPageLabel} ${currentPage + 1}`"
      :disabled="!hasNext"
      class="btn-page"
      data-test="hasNext"
      @click="changePage($event, currentPage + 1)"
    >
      <!-- <ChevronRightIcon class="w-4 h-4" aria-hidden="true" /> -->
      &gt;
    </button>
  </nav>
</template>

<style scoped>
.btn-page {
  @apply inline-flex h-9 w-9 items-center justify-center text-gray-800;
}

.btn-page--active {
  @apply rounded-full bg-gray-100 text-gray-600;
}
</style>
