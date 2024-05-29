<script setup>
import { NavListKey } from './keys'

defineProps({
  as: {
    type: String,
    default: 'div',
  },
})

const container = ref()

const children = ref([])

onMounted(() => {
  children.value = Array.from(container.value.children)
})

provide(NavListKey, children)
</script>

<template>
  <component :is="as" ref="container">
    <slot />
  </component>
</template>
