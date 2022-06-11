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
      <Carousel>
        <CarouselItem
          v-for="(color, index) in colors"
          :key="color"
          :class="[`item-${color} text-center py-4 text-white`]"
        >
          {{ index }}
        </CarouselItem>
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
