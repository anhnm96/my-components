<script setup>
definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="flex">
    <!-- <BarChart /> -->
    <div class="w-[70%]">
      <h2>Weekly average temperature</h2>
      <LineChart />
    </div>
    <div class="w-[30%]">
      <h2>Days with precipitation</h2>
      <Arc />
    </div>
  </div>
</template>
