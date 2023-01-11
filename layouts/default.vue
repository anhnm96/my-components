<script lang="ts" setup>
import { clamp } from 'lodash-es'

const height = ref(80)
const opacity = ref(1)
const bgOpacity = ref(1)

const lastScrollTop = ref(0)
function onScroll() {
  const current = window.scrollY
  const diff = current - lastScrollTop.value
  const newHeight = height.value - diff
  height.value = clamp(newHeight, 50, 80)

  const newOpacity = opacity.value - diff * 0.1
  opacity.value = clamp(newOpacity, 0, 1)
  bgOpacity.value = clamp(newOpacity, 0.9, 1)
  lastScrollTop.value = current <= 0 ? 0 : current
}

useEventListener('scroll', onScroll)
</script>

<template>
  <div class="bg-slate-700">
    <div
      class="mx-auto flex w-full max-w-3xl flex-1 overflow-hidden text-slate-600"
    >
      <div class="z-0 flex-1 overflow-y-scroll">
        <header
          class="fixed inset-x-0 z-10 flex h-20 shadow backdrop-blur-md transition-all"
          :style="{
            height: `${height}px`,
            backgroundColor: `rgba(255 255 255 / ${bgOpacity})`,
          }"
        >
          <div
            class="mx-auto flex w-full max-w-3xl items-center justify-between px-8"
          >
            <p
              class="flex origin-left items-center text-xl font-semibold uppercase"
            >
              <span
                class="-ml-1.5 inline-block -rotate-90 text-[10px] leading-[0]"
              >
                The
              </span>
              <span class="-ml-1 text-2xl tracking-[-.075em]">
                Daily Bugle
              </span>
            </p>
            <nav
              :style="{ opacity }"
              class="flex space-x-4 text-xs font-medium text-slate-400 transition-opacity"
            >
              <a href="#">News</a>
              <a href="#">Sports</a>
              <a href="#">Culture</a>
            </nav>
          </div>
        </header>

        <main class="px-8 pt-8">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
