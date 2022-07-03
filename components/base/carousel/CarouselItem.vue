<script lang="ts" setup>
import { CarouselKey } from './keys'

const { addItem } = inject(CarouselKey)!
const instance = getCurrentInstance()

onMounted(() => {
  addItem(instance?.proxy?.$el)
})
</script>

<template>
  <div class="carousel-item initial:basis-full">
    <slot />
  </div>
</template>

<style scoped>
.carousel-item {
  scroll-snap-align: center;
  flex-shrink: 0;
}
</style>
