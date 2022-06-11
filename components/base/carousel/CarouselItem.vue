<script lang="ts" setup>
import { CarouselKey } from './keys'

const { items, addItem, updateActiveIndex } = inject(CarouselKey)!
const instance = getCurrentInstance()
const index = ref()

onMounted(() => {
  index.value = items.value.length
  addItem(instance?.proxy?.$el)
})
</script>

<template>
  <div class="carousel-item" @mouseenter="updateActiveIndex(index)">
    <slot />
  </div>
</template>

<style scoped>
.carousel-item {
  scroll-snap-align: center;
  flex-shrink: 0;
  flex-basis: 100%;
}
</style>
