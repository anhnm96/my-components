<script lang="ts" setup>
defineProps<{
  id: string
  icon?: string
  defaultClass?: string
  activeClass?: string
  active: boolean
}>()
</script>

<template>
  <Icon
    v-if="icon"
    class="opacity-0"
    :class="[active ? `opacity-100 ${activeClass}` : defaultClass]"
    :name="icon"
  />
  <p
    v-else
    class="opacity-0"
    :class="[active ? `opacity-100 ${activeClass}` : defaultClass]"
  >
    {{ id }}
  </p>
</template>
