<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router'
const pageQuery = useRouteQuery<string>('page', '1')
const currentPage = computed({
  set(val: number) {
    pageQuery.value = `${val}`
  },
  get() {
    return parseInt(pageQuery.value)
  },
})
const total = ref()
const route = useRoute()
watch(
  currentPage,
  (val) => {
    console.log('fetch', route.path, route.query, val)
    total.value = 100
  },
  { immediate: true }
)
</script>

<template>
  <div>
    Pagination
    <Pagination
      v-if="total"
      v-model:current-page="currentPage"
      :total="total"
      :per-page="20"
    />
  </div>
</template>
