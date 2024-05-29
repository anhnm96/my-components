<script setup lang="ts">
import { NavGroupKey, NavListKey } from './keys'

const props = defineProps({
  as: {
    type: String,
    default: 'div',
  },
  active: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['activated'])

const container = ref()

const context = inject(NavGroupKey)!

// current element index
const peers = inject(NavListKey)!
const index = computed(() => {
  return peers?.value ? peers.value.indexOf(container.value) : -1
})

// active item indicator
const isActive = computed(() => {
  return context.activeItem.index === index.value
})

// navlist mounted callback
watchOnce(index, () => {
  // set default element as active
  if (props.active) {
    setActive(false)
  }

  if (index.value === peers.value.length - 1) {
    context.setMounted()
  }
})

watch(context.isMounted, () => {
  // set first element as active
  if (context.activeItem.index === -1 && index.value === 0) {
    setActive(false)
  }
})

//
function setActive(event: boolean) {
  if (context.isVertical) {
    context.setActiveItem(
      index.value,
      container.value.getBoundingClientRect().height,
      container.value.offsetTop,
    )
  } else {
    context.setActiveItem(
      index.value,
      container.value.getBoundingClientRect().width,
      container.value.offsetLeft,
    )
  }

  if (event !== false) {
    setTimeout(() => emit('activated'), context.duration)
  }
}
</script>

<template>
  <component :is="as" ref="container">
    <slot :set-active="setActive" :is-active="isActive" />
  </component>
</template>
