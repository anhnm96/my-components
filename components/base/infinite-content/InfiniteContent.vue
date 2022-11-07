<script lang="ts" setup>
const data = ref(Array.from(Array(30).keys(), () => 'Lorem Ipsum'))
const { list, containerProps, wrapperProps } = useVirtualList(data, {
  // Keep `itemHeight` in sync with the item's row.
  itemHeight: 96,
})
useInfiniteScroll(
  containerProps.ref,
  () => {
    // load more
    data.value.push(...Array.from(Array(10).keys(), () => 'More lorem Ipsum'))
  },
  { distance: 10 } // in pixels
)
</script>

<template>
  <div class="text-gray-400">
    <div
      class="fixed p-2 text-xl rounded shadow-lg top-4 left-4 bg-green text-medium"
    >
      Loaded items: {{ data.length }}
    </div>
    <div class="h-screen p-2 rounded" v-bind="containerProps">
      <div v-bind="wrapperProps" class="max-w-sm mx-auto">
        <div
          v-for="{ index, data: dt } in list"
          :key="index"
          class="flex flex-col h-[80px] justify-center px-4 mb-4 rounded-lg bg-neutral-800 border-neutral-600"
        >
          <h2 class="mb-2 text-2xl">Item #{{ index }}</h2>
          <p class="text-sm">{{ dt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
