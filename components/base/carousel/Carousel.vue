<script lang="ts" setup>
import type { Pausable } from '@vueuse/core'
import { CarouselKey } from './keys'
const props = defineProps({
  initialIndex: {
    type: Number,
    default: 0,
  },
  repeat: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Number,
    required: false,
    validator(value: number) {
      return value >= 0
    },
  },
  itemsClass: String,
  itemsToList: {
    type: Number,
    default: -1,
  },
})

const activeIndex = ref(props.initialIndex)
const elRef = ref<HTMLElement>()
const startX = ref()
const slideX = ref()
const delta = ref(0)
const itemWidth = ref(0)
// provide setup
const items = ref<HTMLDivElement[]>([])
function addItem(item: any) {
  items.value.push(item)
}

provide(CarouselKey, { addItem })

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
    const results = Math.round(Math.abs(delta.value / itemWidth.value) + 0.15) // Hack
    scrollTo(activeIndex.value + signCheck * results)
    delta.value = 0
  }

  // scroll-snap may break animation
  // so we need to wait until animation end
  setTimeout(() => {
    elRef.value!.classList.add('scroll-snap')
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
  scrollTo(activeIndex.value)
  // this is used to update activeIndex when scrolling horizontally
  elRef.value?.addEventListener('scroll', scrollFinished)
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', pointerMove)
  window.removeEventListener('pointerup', pointerUp)
  elRef.value?.removeEventListener('scroll', scrollFinished)
})

const itemsToShow = computed(() => {
  if (!elRef.value) return 0
  return Math.round(elRef.value.getBoundingClientRect().width / itemWidth.value)
})

function scrollTo(index: number) {
  if (index === items.value.length) {
    if (props.repeat || props.autoplay) index = 0
    else return
  } else if (index < 0) {
    if (props.repeat || props.autoplay) index = items.value.length - 1
    else return
  }
  if (itemsToShow.value > 1)
    elRef.value?.scrollTo({
      left: index * itemWidth.value,
      behavior: 'smooth',
    })
  else items.value[index].scrollIntoView({ behavior: 'smooth' })
  activeIndex.value = index
}

const hasPrev = computed(() => {
  return activeIndex.value > 0
})

const hasNext = computed(() => {
  return activeIndex.value < items.value.length - itemsToShow.value
})

function prev() {
  // check if items are enough to slide
  if (items.value.length < itemsToShow.value) return
  if (!hasPrev.value && props.repeat) {
    scrollTo(items.value.length - itemsToShow.value)
    return
  }

  const gap = props.itemsToList === -1 ? itemsToShow.value : props.itemsToList
  activeIndex.value -= gap
  if (activeIndex.value < 0) activeIndex.value = 0
  scrollTo(activeIndex.value)
}

function next() {
  // check if items are enough to slide
  if (items.value.length < itemsToShow.value) return
  if (!hasNext.value && props.repeat) {
    activeIndex.value = 0
    scrollTo(activeIndex.value)
    return
  }

  const lastAllowIndex = items.value.length - itemsToShow.value
  const gap = props.itemsToList === -1 ? itemsToShow.value : props.itemsToList
  const nextActiveIndex = activeIndex.value + gap
  // make sure we don't over translateX
  if (nextActiveIndex > lastAllowIndex) {
    activeIndex.value = lastAllowIndex
    scrollTo(activeIndex.value)
    return
  }
  activeIndex.value = nextActiveIndex
  scrollTo(activeIndex.value)
}

function refresh() {
  // console.log('refresh', items.value[0])
  itemWidth.value = items.value[0].getBoundingClientRect().width
  // make sure we don't over translateX
  if (activeIndex.value > items.value.length - itemsToShow.value)
    activeIndex.value = items.value.length - itemsToShow.value
  // fallback check in case of carouselItems.length < itemsToShow
  if (activeIndex.value < 0) activeIndex.value = 0
  scrollTo(activeIndex.value)
}
let observer: ResizeObserver
onMounted(() => {
  observer = new ResizeObserver(refresh)
  observer.observe(elRef.value!)
})

onBeforeUnmount(() => {
  observer.disconnect()
})
</script>

<template>
  <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <slot name="header" :prev="prev" :next="next" />
    <div
      ref="elRef"
      class="carousel scroll-snap"
      :class="itemsClass"
      @pointerdown="pointerStart"
    >
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
