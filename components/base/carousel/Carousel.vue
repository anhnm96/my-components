<script lang="ts" setup>
import { CarouselKey } from './keys'
const props = defineProps<{
  repeat?: boolean
}>()

const activeIndex = ref(0)
const elRef = ref()
const startX = ref()
const slideX = ref()
const delta = ref(0)
// provide setup
const items = ref<HTMLDivElement[]>([])
function addItem(item: any) {
  items.value.push(item)
}

function updateActiveIndex(value: number) {
  activeIndex.value = value
}

provide(CarouselKey, {
  items,
  addItem,
  updateActiveIndex,
})

// functions
function pointerStart(e: PointerEvent) {
  elRef.value.classList.remove('scroll-snap')
  slideX.value = elRef.value.scrollLeft
  startX.value = e.clientX
  window.addEventListener('pointermove', pointerMove)
  window.addEventListener('pointerup', pointerUp)
}

function pointerMove(e: PointerEvent) {
  delta.value = startX.value - e.clientX

  const x = e.clientX
  const displaceX = x - startX.value
  elRef.value.scrollLeft = slideX.value - displaceX
}

function pointerUp() {
  window.removeEventListener('pointermove', pointerMove)
  window.removeEventListener('pointerup', pointerUp)
  if (!delta.value) return
  const signCheck = Math.sign(delta.value)
  const itemWidth = elRef.value.getBoundingClientRect().width
  const results = Math.round(Math.abs(delta.value / itemWidth) + 0.15) // Hack
  scrollTo(activeIndex.value + signCheck * results)

  delta.value = 0
  // scroll-snap may break animation
  // so we need to wait until animation end
  setTimeout(() => {
    elRef.value.classList.add('scroll-snap')
  }, 0)
}

function scrollTo(index: number) {
  if (index === items.value.length) {
    if (props.repeat) index = 0
    else return
  } else if (index < 0) {
    if (props.repeat) index = items.value.length - 1
    else return
  }
  items.value[index].scrollIntoView({ behavior: 'smooth' })
  activeIndex.value = index
}

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', pointerMove)
  window.removeEventListener('pointerup', pointerUp)
})
</script>

<template>
  <div>
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
