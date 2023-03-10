<script lang="ts" setup>
const index = ref(0)
const images = [
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/5.jpeg',
  '/images/6.jpeg',
  '/images/1.jpeg?1',
  '/images/2.jpeg?1',
  '/images/3.jpeg?1',
  '/images/4.jpeg?1',
  '/images/5.jpeg?1',
  '/images/6.jpeg?1',
  '/images/1.jpeg?2',
  '/images/2.jpeg?2',
  '/images/3.jpeg?2',
  '/images/4.jpeg?2',
  '/images/5.jpeg?2',
  '/images/6.jpeg?2',
  '/images/1.jpeg?3',
  '/images/2.jpeg?3',
  '/images/3.jpeg?3',
  '/images/4.jpeg?3',
  '/images/5.jpeg?3',
  '/images/6.jpeg?3',
]

const transition = { duration: 0.7, easing: [0.4, 0, 0.2, 1] }
// [0.32, 0.72, 0, 1
const collapsedAspectRatio = 1 / 3
const fullAspectRatio = 3 / 2
const margin = 12
const gap = 2

const variants3 = {
  active: {
    aspectRatio: fullAspectRatio,
    marginLeft: margin,
    marginRight: margin,
    opacity: 1,
  },
  inactive: {
    aspectRatio: collapsedAspectRatio,
    marginLeft: 0,
    marginRight: 0,
    opacity: 0.5,
  },
}
const variants = {
  active: {
    aspectRatio: fullAspectRatio,
    marginLeft: `${margin}%`,
    marginRight: `${margin}%`,
    opacity: 1,
  },
  inactive: {
    aspectRatio: collapsedAspectRatio,
    marginLeft: 0,
    marginRight: 0,
    opacity: 0.5,
  },
}
</script>

<template>
  <div class="relative h-screen bg-black">
    <div class="mx-auto flex h-full max-w-7xl flex-col justify-center">
      <Carousel v-slot="{ scrollTo, activeIndex }">
        <CarouselItem v-for="image in images" :key="image" class="w-full">
          <img class="aspect-[3/2] object-cover" :src="image" />
        </CarouselItem>
        <Transition name="custom-fade">
          <button
            v-if="activeIndex > 0"
            class="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-70 transition-opacity duration-300 hover:opacity-100"
            @click="scrollTo(activeIndex - 1)"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </Transition>
        <Transition name="custom-fade">
          <button
            v-if="activeIndex + 1 < images.length"
            class="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-70 transition-opacity duration-300 hover:opacity-100"
            @click="scrollTo(activeIndex + 1)"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </Transition>
        <div
          class="absolute inset-x-0 bottom-6 flex h-14 justify-center overflow-hidden"
        >
          <div
            :style="{
              aspectRatio: fullAspectRatio,
              gap: `${gap}%`,
              transform: `translateX(-${
                activeIndex * 100 * (collapsedAspectRatio / fullAspectRatio) +
                margin +
                activeIndex * gap
              }%) translateZ(0px)`,
            }"
            class="flex transition-all"
          >
            <VMotion
              v-for="(image, i) in images"
              :key="image"
              :animate="
                i === activeIndex ? variants3.active : variants3.inactive
              "
              class="shrink-0 hover:!opacity-100"
              as="button"
              @click="scrollTo(i)"
            >
              <img :src="image" class="h-full object-cover" />
            </VMotion>
          </div>
        </div>
      </Carousel>
      <div v-if="false" class="relative overflow-hidden">
        <div
          :style="{ transform: `translateX(-${index * 100}%)` }"
          class="linear flex transition-transform duration-[400ms]"
        >
          <img
            v-for="image in images"
            :key="image"
            :src="image"
            class="aspect-[3/2] object-cover"
          />
        </div>
        <Transition name="custom-fade">
          <button
            v-if="index > 0"
            class="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-70 transition-opacity duration-300 hover:opacity-100"
            @click="index--"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </Transition>
        <!-- <Presence :initial="false">
          <Motion
            v-if="index > 0"
            tag="button"
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 0.7 }"
            :exit="{ opacity: 0, pointerEvents: 'none' }"
            :transition="transition"
            class="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
            @click="index--"
          >
          </Motion>
        </Presence> -->
        <Transition name="custom-fade">
          <button
            v-if="index + 1 < images.length"
            class="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-70 transition-opacity duration-300 hover:opacity-100"
            @click="index++"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </Transition>
        <!-- <Presence :initial="false">
          <Motion
            v-if="index + 1 < images.length"
            tag="button"
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 0.7 }"
            :exit="{ opacity: 0, pointerEvents: 'none' }"
            :transition="transition"
            class="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
            @click="index++"
          >
          </Motion>
        </Presence> -->
      </div>

      <div
        v-if="false"
        class="absolute inset-x-0 bottom-6 flex h-14 justify-center overflow-hidden"
      >
        <div
          :style="{
            aspectRatio: fullAspectRatio,
            gap: `${gap}%`,
            transform: `translateX(-${
              index * 100 * (collapsedAspectRatio / fullAspectRatio) +
              margin +
              index * gap
            }%) translateZ(0px)`,
          }"
          class="flex transition-all"
        >
          <VMotion
            v-for="(image, i) in images"
            :key="image"
            :animate="i === index ? variants3.active : variants3.inactive"
            class="shrink-0 hover:!opacity-100"
            as="button"
            @click="index = i"
          >
            <img :src="image" class="h-full object-cover" />
          </VMotion>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-fade-enter-from,
.custom-fade-leave-to {
  opacity: 0;
}

.custom-fade-enter-to,
.custom-fade-leave-from {
  opacity: 0.7;
}

.custom-fade-enter-active,
.custom-fade-leave-active {
  transition: opacity 700ms ease;
}
</style>
