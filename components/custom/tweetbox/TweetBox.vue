<script lang="ts" setup>
interface PropsType {
  limit?: number
  modelValue: string
}
const props = withDefaults(defineProps<PropsType>(), {
  limit: 40,
})

const emit = defineEmits<{ (e: 'update:modelValue', payload: string): void }>()

const textareaRef = ref()

const valueAllowed = computed(() => {
  return props.limit ? props.modelValue.slice(0, props.limit) : props.modelValue
})
const valueExcess = computed(() => {
  return props.limit ? props.modelValue.slice(props.limit) : ''
})
const limitStatus = computed(() => {
  return (props.modelValue.length / props.limit) * 100
})
const remainingCharacters = computed(() => {
  return props.limit - props.modelValue.length
})
const textareaStyle = computed(() => {
  return getComputedStyle(textareaRef.value)
})
onMounted(() => {
  // It might be tempting to use a watcher instead of
  // triggering `textareaGrow()` in both, the `mounted()`
  // lifecycle hook and in the `updateValue()` method
  // but because watchers, which are set to run immediately,
  // are triggered before evaluating computed properties,
  // a watcher wouldn't work.
  textareaGrow()
})

function updateValue(e: Event) {
  textareaGrow()
  emit(`update:modelValue`, (e.target as HTMLInputElement).value)
}

function textareaGrow() {
  const paddingTop = parseInt(
    textareaStyle.value.getPropertyValue(`padding-top`),
    10
  )
  const paddingBottom = parseInt(
    textareaStyle.value.getPropertyValue(`padding-bottom`),
    10
  )
  const lineHeight = parseInt(
    textareaStyle.value.getPropertyValue(`line-height`),
    10
  )
  // Resetting the row count to `1` is necessary for
  // recalculating the `scrollHeight` of the textarea.
  textareaRef.value.rows = 1
  // We're calculating the inner height of the textare
  // and take this value to also calculate the number
  // of rows needed to fit the currently entered text.
  const innerHeight =
    textareaRef.value.scrollHeight - paddingTop - paddingBottom
  textareaRef.value.rows = innerHeight / lineHeight
}
</script>

<template>
  <div
    class="tweetbox"
    :class="[
      {
        'has-exceeded-limit': limitStatus > 100,
      },
    ]"
  >
    <div class="tweetbox__htmlarea" aria-hidden="true">
      <span>{{ valueAllowed }}</span>
      <span class="text-excess">{{ valueExcess }}</span>
    </div>
    <textarea
      ref="textareaRef"
      class="tweetbox__textarea"
      :value="modelValue"
      rows="1"
      @input="updateValue"
    />
    <div class="tweetbox__limit">
      <span class="tweetbox__remainingCharacters">{{
        remainingCharacters
      }}</span>
      <svg
        class="tweetbox__counter"
        viewBox="0 0 33.83098862 33.83098862"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="tweetbox__counterUnderlay"
          cx="16.91549431"
          cy="16.91549431"
          r="15.91549431"
          fill="none"
          stroke-width="2"
        />
        <circle
          class="tweetbox__counterProgress"
          :stroke-dasharray="`${limitStatus},100`"
          cx="16.91549431"
          cy="16.91549431"
          r="15.91549431"
          fill="none"
          stroke-width="4"
        />
      </svg>
    </div>
  </div>
</template>

<style>
.tweetbox {
  position: relative;
}

.tweetbox__htmlarea,
.tweetbox__textarea {
  padding: 1rem;
  padding-right: 3.75rem;
  width: 100%;
  line-height: 1.25;
  border: 2px solid transparent;
  border-radius: 0.5rem;
}

.tweetbox__htmlarea {
  position: absolute;
  height: 100%;
  background-color: #fff;
  color: transparent;
  /* word breaks behave exactly like in a textarea */
  white-space: pre-wrap;
  word-wrap: break-word;
}

.tweetbox__textarea {
  display: block;
  position: relative;
  border-color: #99dde6;
  outline: 0;
  background-color: transparent;
  resize: none;
}

.tweetbox__textarea:focus {
  border-color: #47c2d2;
}

.tweetbox .text-excess {
  background: #ffb8c2;
}

.tweetbox__limit {
  display: flex;
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  align-items: center;
}

.tweetbox__remainingCharacters {
  margin-right: 0.5rem;
  color: #657786;
  font-size: 0.75rem;
}

.has-exceeded-limit .tweetbox__remainingCharacters {
  color: #e0245e;
}

.tweetbox__counter {
  overflow: visible;
  transform: rotate(-90deg);
  transform-origin: center;
}

.tweetbox__counterUnderlay {
  stroke: #ccd6dd;
}

.tweetbox__counterProgress {
  stroke: #1da1f2;
}

.has-exceeded-limit .tweetbox__counterProgress {
  stroke: #e0245e;
  animation: counterPulse 0.3s ease-in-out;
  animation-iteration-count: 1;
}

@keyframes counterPulse {
  0% {
    stroke-width: 4;
  }
  50% {
    stroke-width: 6;
  }
  100% {
    stroke-width: 4;
  }
}
</style>
