<script lang="ts" setup>
import { CarouselKey } from './keys'

const { addItem } = inject(CarouselKey)!
const instance = getCurrentInstance()

onMounted(() => {
  addItem(instance?.proxy?.$el)
})
</script>

<template>
  <div class="carousel-item">
    <slot />
  </div>
</template>

<style scoped>
.carousel-item {
  scroll-snap-align: start;
  flex-shrink: 0;
}

:slotted(.carousel-item img) {
  pointer-events: none;
}
</style>
