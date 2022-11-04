<script setup lang="ts">
// https://www.youtube.com/watch?v=AVMNjbKdU1M&ab_channel=LearnVue

const target = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target)
const cardTransform = computed(() => {
  const MAX_ROTATION = 6
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2) // handles x-axis
  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2) // handles y-axis
  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<template>
  <div
    ref="target"
    class="max-w-[400px] mx-auto p-8 rounded shadow-2xl bg-charcoal-600 card text-white"
  >
    <h1 class="mb-2 text-2xl font-bold">B.S. Meeting Notes 🥴</h1>
    <section class="flex items-center">
      <img
        src="https://learnvue.co/img/matt-maribojoc.png"
        class="w-8 h-8 mr-4 rounded"
      />
      <h2 class="font-2xl">@mattmaribojoc</h2>
    </section>
    <p class="mt-4">
      Organic growth beef up, and shotgun approach note for the previous submit:
      Can you ballpark the cost per unit for me. Conversational content reach
      out, what's the status on the deliverables for eow?
    </p>
  </div>
</template>

<style scoped>
.card {
  transform: v-bind('cardTransform');
  transition: transform 0.25s ease-out;
}
</style>
