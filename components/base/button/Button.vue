<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    loading?: boolean
    loadingMsg?: string
    success?: boolean
    successMsg?: string
  }>(),
  {
    loading: false,
    loadingMsg: 'processing, wait...',
    success: false,
  },
)
const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
}>()

const btnRef = ref<HTMLButtonElement>()
function click(event: MouseEvent) {
  const isBtnDisabled = btnRef.value?.getAttribute('aria-disabled') === 'true'
  if (isBtnDisabled || props.loading) {
    return
  }
  emit('click', event)
}
</script>

<template>
  <button
    ref="btnRef"
    class="btn"
    :class="[(loading || success) && '!pointer-events-none !text-transparent']"
    @click="click"
  >
    <slot />
    <Transition v-if="loading || success" name="fade" mode="out-in">
      <div
        v-if="loading"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <span v-if="loadingMsg" class="sr-only" aria-live="assertive">
          {{ loadingMsg }}
        </span>
        <BaseSpinner />
      </div>
      <div
        v-else-if="success"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <span v-if="successMsg" class="sr-only" aria-live="assertive">
          {{ successMsg }}
        </span>
        <Icon name="ic:baseline-check" class="text-white" />
      </div>
    </Transition>
  </button>
</template>

<style scoped>
button {
  @apply relative;
}

button:disabled,
button[aria-disabled='true'] {
  @apply cursor-not-allowed opacity-70;
}
</style>
