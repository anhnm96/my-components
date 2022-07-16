<script setup lang="ts">
import Carousel from '~~/components/base/carousel/Carousel.vue'
import CarouselItem from '~~/components/base/carousel/CarouselItem.vue'
const loading = ref(false)
function click() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)
}

const c1 = ref(false)
const c2 = ref('Yes')
const checkboxGroup = ref(['Silver'])

const colors = ['red', 'green', 'blue', 'gray']

const items = [
  {
    title: 'Slide 1',
    image: 'https://picsum.photos/id/1/1230/500',
  },
  {
    title: 'Slide 2',
    image: 'https://picsum.photos/id/2/1230/500',
  },
  {
    title: 'Slide 3',
    image: 'https://picsum.photos/id/3/1230/500',
  },
  {
    title: 'Slide 4',
    image: 'https://picsum.photos/id/4/1230/500',
  },
  {
    title: 'Slide 5',
    image: 'https://picsum.photos/id/5/1230/500',
  },
  {
    title: 'Slide 6',
    image: 'https://picsum.photos/id/6/1230/500',
  },
  {
    title: 'Slide 7',
    image: 'https://picsum.photos/id/7/1230/500',
  },
]
</script>

<template>
  <div>
    <div>
      <h1 class="text-red-400">Hello world</h1>
      <BaseButton
        class="px-2 py-1 text-white bg-purple-600 rounded"
        loading
        @click="click"
      >
        Button
      </BaseButton>
      <BaseButton
        class="px-2 py-1 text-white bg-purple-600 rounded"
        disabled
        @click="click"
      >
        Disabled
      </BaseButton>
      <BaseButton
        class="px-2 py-1 text-white bg-purple-600 rounded"
        aria-disabled="true"
        @click="click"
      >
        aira-disabled
      </BaseButton>
      <BaseButton
        class="px-2 py-1 text-white bg-purple-600 rounded"
        @click="click"
      >
        Normal
      </BaseButton>
      <BaseButton
        class="items-center justify-between px-2 py-1 text-white bg-purple-600 rounded"
        :loading="loading"
        @click="click"
      >
        <span>Normal</span>
        <svg class="flex" width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"
          ></path>
        </svg>
      </BaseButton>
    </div>
    <div class="mt-5 space-x-2">
      <button class="btn bg-info">Test</button>
      <button class="btn">Test</button>
      <button class="btn bg-purple-600 btn-lg">Test</button>
      <button class="btn btn-link">Link</button>
      <button class="btn btn-outline">Test</button>
      <button class="btn btn-outline btn-info">Test</button>
      <button class="btn btn-outline btn-success">Test</button>
      <button class="btn btn-ghost">Ghost</button>
      <BaseBadge>Badge</BaseBadge>
      <BaseBadge icon>Badge</BaseBadge>
      <BaseBadge class="badge-success" icon>Badge</BaseBadge>
    </div>
    <div class="space-x-5">
      <BaseCheckbox :model-value="true">Basic</BaseCheckbox>
      <BaseCheckbox indeterminate>Indeterminate</BaseCheckbox>
      <BaseCheckbox disabled>Disabled</BaseCheckbox>
      <BaseCheckbox v-model="c1">{{ c1 }}</BaseCheckbox>
      <BaseCheckbox v-model="c2" true-value="Yes" false-value="No">
        {{ c2 }}
      </BaseCheckbox>
      <div>
        <BaseCheckbox v-model="checkboxGroup" value="Silver">
          Silver
        </BaseCheckbox>
        <BaseCheckbox v-model="checkboxGroup" value="Flint">
          Flint
        </BaseCheckbox>
        {{ checkboxGroup }}
      </div>
    </div>
    <div>
      <label><input type="radio" name="e" /> First</label>
      <label><input type="radio" name="e" /> Second</label>
      <label><input type="radio" name="e" disabled /> Disabled</label>
    </div>
    <div>
      <Carousel
        v-slot="{ scrollTo, activeIndex }"
        :initial-index="2"
        class="relative"
      >
        <CarouselItem
          v-for="(color, index) in colors"
          :key="color"
          :class="[
            `item-${color} text-center py-4 text-white basis-full select-none`,
          ]"
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
    </div>
    <div>
      <Carousel>
        <template #header="{ prev, next }">
          <div class="flex justify-between">
            <h2 class="text-lg font-bold text-primary">Top 100 hits</h2>
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
            class="basis-[25%] w-1/4 relative select-none"
          >
            <img :src="item.image" />
            <span
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-red-500 font-bold"
            >
              {{ `${index} - ${activeIndex}` }}
            </span>
          </CarouselItem>
        </template>
      </Carousel>
    </div>
  </div>
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
