<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    loading?: boolean
    loadingMsg?: string
    success?: boolean
    successMsg?: string
    contentClass?: string
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
const isBtnUninteractive = computed(() => props.loading || props.success)
function click(event: MouseEvent) {
  const isBtnDisabled = btnRef.value?.getAttribute('aria-disabled') === 'true'
  if (isBtnDisabled || isBtnUninteractive.value) return
  emit('click', event)
}
</script>

<template>
  <button
    ref="btnRef"
    class="btn relative"
    :class="[isBtnUninteractive && '!pointer-events-none']"
    @click="click"
  >
    <span :class="['inline-flex items-center', contentClass, isBtnUninteractive && 'invisible']">
      <slot />
    </span>
    <Transition v-if="isBtnUninteractive" name="fade" mode="out-in">
      <div
        v-if="loading"
        class="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <span v-if="loadingMsg" class="sr-only" aria-live="assertive">
          {{ loadingMsg }}
        </span>
        <BaseSpinner />
      </div>
      <div
        v-else-if="success"
        class="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <span v-if="successMsg" class="sr-only" aria-live="assertive">
          {{ successMsg }}
        </span>
        <Icon name="ic:baseline-check" />
      </div>
    </Transition>
  </button>
</template>

<style scoped>
button:disabled,
button[aria-disabled='true'] {
  @apply cursor-not-allowed opacity-70;
}
</style>
