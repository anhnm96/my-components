<script setup lang="ts">
const loading = ref(false)
function click() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<template>
  <div>
    <h1 class="text-red-400">Hello world</h1>
    <BaseButton
      class="px-2 py-1 text-white bg-purple-600 rounded"
      loading
      @click="click"
    >
      Button
    </BaseButton>
    <BaseButton
      class="px-2 py-1 text-white bg-purple-600 rounded"
      disabled
      @click="click"
    >
      Disabled
    </BaseButton>
    <BaseButton
      class="px-2 py-1 text-white bg-purple-600 rounded"
      aria-disabled="true"
      @click="click"
    >
      aira-disabled
    </BaseButton>
    <BaseButton
      class="px-2 py-1 text-white bg-purple-600 rounded"
      @click="click"
    >
      Normal
    </BaseButton>
    <BaseButton
      class="items-center justify-between px-2 py-1 text-white bg-purple-600 rounded"
      :loading="loading"
      @click="click"
    >
      <span>Normal</span>
      <svg class="flex" width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"
        ></path>
      </svg>
    </BaseButton>
  </div>
</template>
