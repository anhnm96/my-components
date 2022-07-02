<script lang="ts" setup>
import type { Pausable } from '@vueuse/core'
import { CarouselKey } from './keys'
const props = defineProps({
  repeat: {
    type: Boolean,
    default: false,
  },
  autoplay: {
    type: Number,
    required: false,
    validator(value: number) {
      return value >= 0
    },
  },
})

const activeIndex = ref(0)
const elRef = ref<HTMLElement>()
const startX = ref()
const slideX = ref()
const delta = ref(0)
// provide setup
const items = ref<HTMLDivElement[]>([])
function addItem(item: any) {
  items.value.push(item)
}

function updateActiveIndex(value: number) {
  console.log('update', value)
  activeIndex.value = value
}

provide(CarouselKey, {
  items,
  addItem,
  updateActiveIndex,
})

// functions
function pointerStart(e: PointerEvent) {
  elRef.value?.classList.remove('scroll-snap')
  slideX.value = elRef.value?.scrollLeft
  startX.value = e.clientX
  window.addEventListener('pointermove', pointerMove)
  window.addEventListener('pointerup', pointerUp)
}

function pointerMove(e: PointerEvent) {
  delta.value = startX.value - e.clientX

  const x = e.clientX
  const displaceX = x - startX.value
  elRef.value!.scrollLeft = slideX.value - displaceX
}

function pointerUp() {
  window.removeEventListener('pointermove', pointerMove)
  window.removeEventListener('pointerup', pointerUp)
  if (delta.value !== 0) {
    const signCheck = Math.sign(delta.value)
    const itemWidth = elRef.value!.getBoundingClientRect().width
    const results = Math.round(Math.abs(delta.value / itemWidth) + 0.15) // Hack
    scrollTo(activeIndex.value + signCheck * results)
    delta.value = 0
  }

  // scroll-snap may break animation
  // so we need to wait until animation end
  setTimeout(() => {
    elRef.value!.classList.add('scroll-snap')
  }, 0)
}

function scrollTo(index: number) {
  if (index === items.value.length) {
    if (props.repeat || props.autoplay) index = 0
    else return
  } else if (index < 0) {
    if (props.repeat || props.autoplay) index = items.value.length - 1
    else return
  }
  items.value[index].scrollIntoView({ behavior: 'smooth' })
  // make sure activeIndex is updated last
  // because sometimes updateActiveIndex may
  // update it accidentally
  setTimeout(() => {
    activeIndex.value = index
  }, 0)
}

let intervalFn: Pausable
if (props.autoplay) {
  intervalFn = useIntervalFn(() => {
    scrollTo(activeIndex.value + 1)
  }, props.autoplay)
}

function mouseEnter() {
  if (props.autoplay) {
    intervalFn!.pause()
  }
}

function mouseLeave() {
  if (props.autoplay) {
    intervalFn!.resume()
  }
}

let scrollTimeout: NodeJS.Timeout
function scrollFinished() {
  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    const newIndex = Math.round(
      elRef.value!.scrollLeft /
        elRef.value!.children[0].getBoundingClientRect().width
    )
    activeIndex.value = newIndex
  }, 100)
}

onMounted(() => {
  scrollTo(0)
  // this is used to update activeIndex when scrolling horizontally
  elRef.value?.addEventListener('scroll', scrollFinished)
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', pointerMove)
  window.removeEventListener('pointerup', pointerUp)
  elRef.value?.removeEventListener('scroll', scrollFinished)
})
</script>

<template>
  <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div ref="elRef" class="carousel scroll-snap" @pointerdown="pointerStart">
      <slot :active-index="activeIndex" :scroll-to="scrollTo" />
    </div>
  </div>
</template>

<style scoped>
.carousel {
  overflow-x: auto;
  width: 100%;
  display: flex;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.carousel::-webkit-scrollbar {
  display: none;
}

.scroll-snap {
  scroll-snap-type: x mandatory;
}
</style>
