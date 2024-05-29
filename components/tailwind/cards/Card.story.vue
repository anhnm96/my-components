<script lang="ts" setup>
import ThreeDCard from './3d-card.vue'
import LineClamp from './LineClamp.vue'
import Bubble from './Bubble.vue'
import Linear from './Linear.vue'
</script>

<template>
  <Story title="Cards">
    <Variant title="3d card">
      <ThreeDCard />
    </Variant>
    <Variant title="Number of lines">
      <LineClamp />
    </Variant>
    <Variant title="Hover bubble">
      <Bubble />
    </Variant>
    <Variant title="Linear hover">
      <Linear />
    </Variant>
  </Story>
</template>
