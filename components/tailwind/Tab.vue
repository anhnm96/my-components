<script setup lang="ts">
const tabs = reactive([
  { id: 'world', label: 'World' },
  { id: 'ny', label: 'N.Y.' },
  { id: 'business', label: 'Business' },
  { id: 'arts', label: 'Arts' },
  { id: 'science', label: 'Science' },
])
const activeTab = ref(tabs[0].id)
</script>

<template>
  <div class="flex space-x-1">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2"
      :class="[activeTab === tab.id ? '' : 'hover:text-white/60']"
      @click="activeTab = tab.id"
    >
      <span
        v-if="activeTab === tab.id"
        v-once
        layoutId="bubble"
        class="absolute inset-0 z-10 bg-white mix-blend-difference"
        style="border-radius: 9999"
      />
      {{ tab.label }}
    </button>
  </div>
</template>
