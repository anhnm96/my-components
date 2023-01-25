<script lang="ts" setup>
import Carousel from './Carousel.vue'
import CarouselItem from './CarouselItem.vue'

const colors = ['red', 'green', 'blue', 'gray']

const items = [
  {
    thumbnail:
      'https://photo-zmp3.zadn.vn/cover/d/0/d/7/d0d772a6c3e35b3e768d5c3ebf644ecd.jpg',
    title: 'Spa - Yoga',
  },
  {
    thumbnail:
      'https://photo-zmp3.zadn.vn/cover/2/e/9/6/2e966bf47b1989fdff7149c7a1b0f25e.jpg',
    title: 'Driving',
  },
  {
    thumbnail:
      'https://photo-zmp3.zadn.vn/cover/d/b/5/c/db5cf069b328c7858b2d9642cc6b4529.jpg',
    title: 'Workout',
  },
  {
    thumbnail:
      'https://photo-zmp3.zadn.vn/cover/4/a/3/b/4a3b5265ee2c9e2c84f5a88194382b5d.jpg',
    title: 'Ngủ Ngon',
  },
  {
    thumbnail:
      'https://photo-zmp3.zadn.vn/cover/0/a/e/f/0aef849d584c7e995073617f53b9ac24.jpg',
    title: 'Tình Yêu',
  },
  {
    thumbnail:
      'https://photo-zmp3.zadn.vn/cover/e/6/8/0/e680570f74b3497c95d96f6ba6db7b07.jpg',
    title: 'Giai Điệu Buồn',
  },
  {
    thumbnail:
      'https://photo-zmp3.zadn.vn/cover/4/d/f/4/4df44f0a15edb254717c383cf256b193.jpg',
    title: 'Chơi Game',
  },
  {
    thumbnail:
      'https://photo-zmp3.zadn.vn/cover/e/3/d/4/e3d43659c6dc756f87f4e44220313f92.jpg',
    title: 'Du lịch',
  },
  {
    thumbnail:
      'https://photo-zmp3.zadn.vn/cover/9/5/1/b/951bb18f468ea711a81a0dd28a8797d4.jpg',
    title: 'Motivation',
  },
  {
    thumbnail:
      'https://photo-zmp3.zadn.vn/cover/9/d/0/4/9d045c7d3a111975bb6920d963046dd1.jpg',
    title: 'Chill',
  },
  {
    thumbnail:
      'https://photo-zmp3.zadn.vn/cover/1/c/c/8/1cc8ae9704ae8fb7e34487ce744083a9.jpg',
    title: 'Dinner',
  },
  {
    thumbnail:
      'https://photo-zmp3.zadn.vn/cover/0/f/d/1/0fd1da7445b21a752a1c4282b06f2cf0.jpg',
    title: 'Thư Giãn',
  },
]
</script>

<template>
  <Story title="Carousel">
    <Variant title="common">
      <Carousel v-slot="{ scrollTo, activeIndex }" class="relative">
        <CarouselItem
          v-for="(color, index) in colors"
          :key="color"
          :class="[
            `item-${color} basis-full select-none py-4 text-center text-white`,
          ]"
        >
          {{ index }} - {{ activeIndex }}
        </CarouselItem>
        <div
          class="pointer-events-none absolute top-1/2 flex w-full -translate-y-1/2 justify-between"
        >
          <button
            class="pointer-events-auto h-10 w-10 rounded-full bg-gray-300 bg-opacity-50"
            @click="scrollTo(activeIndex - 1)"
          >
            &lt;
          </button>
          <button
            class="pointer-events-auto h-10 w-10 rounded-full bg-gray-300 bg-opacity-50"
            @click="scrollTo(activeIndex + 1)"
          >
            >
          </button>
        </div>
      </Carousel>
    </Variant>
    <Variant title="list">
      <Carousel items-class="mt-3 -mx-3">
        <template #header="{ prev, next }">
          <div class="flex justify-between text-white">
            <h2 class="text-lg font-bold">Top 100 hits</h2>
            <div class="flex items-center space-x-2">
              <button
                class="inline-flex items-center p-1 focus:outline-none"
                aria-label="Previous List"
                @click="prev"
              >
                Prev
              </button>
              <button
                class="inline-flex items-center p-1 focus:outline-none"
                aria-label="Next List"
                @click="next"
              >
                Next
              </button>
            </div>
          </div>
        </template>
        <template #default="{ activeIndex }">
          <CarouselItem
            v-for="(item, index) in items"
            :key="item.title"
            class="w-1/3 select-none px-3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          >
            <div class="relative bg-gray-400" style="padding-bottom: 56.25%">
              <img
                class="absolute inset-0 rounded"
                :src="item.thumbnail"
                :alt="item.title"
              />
              <span
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-red-500"
              >
                {{ `${index} - ${activeIndex}` }}
              </span>
            </div>
          </CarouselItem>
        </template>
      </Carousel>
    </Variant>
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
