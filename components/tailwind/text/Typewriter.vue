<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
    text: string
    speed?: number
  }>(),
  { as: 'span', speed: 100 }
)
const result = ref('')
let index = 0
let interval: NodeJS.Timeout
onMounted(() => {
  interval = setInterval(() => {
    result.value += props.text[index]
    index++

    if (index >= props.text.length) {
      clearInterval(interval)
    }
  }, props.speed)
})
</script>

<template>
  <component :is="as" class="typewriter">{{ result }}</component>
</template>

<style scoped>
.typewriter {
  position: relative;
  width: max-content;
}

.typewriter::after {
  content: '';
  position: absolute;
  top: 0;
  right: -0.1em;
  bottom: 0;
}

.typewriter::after {
  width: 0.125em;
  background: currentColor;
  animation: blink 1000ms steps(2, start) infinite;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}
</style>
