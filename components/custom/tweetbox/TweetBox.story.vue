<script lang="ts" setup>
import TweetBox from './TweetBox.vue'

const text = ref('')
</script>

<template>
  <Story title="TweetBox">
    <TweetBox v-model="text" />
  </Story>
</template>
