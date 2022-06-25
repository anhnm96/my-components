<script lang="ts" setup>
import Carousel from './Carousel.vue'
import CarouselItem from './CarouselItem.vue'

const colors = ['red', 'green', 'blue', 'gray']
</script>

<template>
  <Story title="Carousel">
    <Carousel v-slot="{ scrollTo, activeIndex }" class="relative">
      <CarouselItem
        v-for="(color, index) in colors"
        :key="color"
        :class="[`item-${color} text-center py-4 text-white`]"
      >
        {{ index }} - {{ activeIndex }}
      </CarouselItem>
      <div
        class="absolute top-1/2 w-full -translate-y-1/2 flex justify-between pointer-events-none"
      >
        <button
          class="w-10 h-10 rounded-full bg-gray-300 bg-opacity-50 pointer-events-auto"
          @click="scrollTo(activeIndex - 1)"
        >
          &lt;
        </button>
        <button
          class="w-10 h-10 rounded-full bg-gray-300 bg-opacity-50 pointer-events-auto"
          @click="scrollTo(activeIndex + 1)"
        >
          >
        </button>
      </div>
    </Carousel>
  </Story>
</template>

<style>
.item-red {
  background-color: red;
}

.item-green {
  background-color: green;
}

.item-blue {
  background-color: blue;
}

.item-gray {
  background-color: gray;
}
</style>
