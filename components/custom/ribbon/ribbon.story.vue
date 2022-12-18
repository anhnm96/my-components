<script lang="ts" setup>
import Ribbon from './index.vue'
</script>

<template>
  <Story title="Ribbon">
    <div class="p-8">
      <div class="relative mx-auto h-72 w-80 rounded-xl bg-white shadow-xl">
        <Ribbon size="small">Small</Ribbon>
        <Ribbon size="large">Not Small</Ribbon>
        <Ribbon size="large" position="top-left" color="green">Top left</Ribbon>
        <Ribbon position="bottom-left" color="purple">Bottom left</Ribbon>
        <Ribbon position="bottom-right" color="cyan">Bottom right</Ribbon>
      </div>
    </div>
  </Story>
</template>
