<script lang="ts" setup>
interface SwitchLabel {
  checked: string
  unchecked: string
}

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    label?: SwitchLabel
    activeColor?: string
    inActiveColor?: string
    width?: string
    height?: string
    margin?: string
  }>(),
  {
    modelValue: false,
    activeColor: '#36a829',
    inActiveColor: '#bfcbd9',
    width: '50px',
    height: '24px',
    margin: '3px',
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', payload: boolean): void
}>()

const internalValue = useInternalValue(props, 'modelValue', emit)
const toggle = () => (internalValue.value = !internalValue.value)

const styleVars = reactive({
  sWidth: props.width,
  sHeight: props.height,
  sInActiveColor: props.inActiveColor,
  sActiveColor: props.activeColor,
  sMargin: props.margin,
})
</script>

<template>
  <button
    role="switch"
    type="button"
    class="toggle-button"
    :aria-pressed="internalValue"
    @click="toggle"
  >
    <template v-if="label">
      <span v-if="internalValue" data-test="label">
        <slot name="checked">
          {{ label.checked }}
        </slot>
      </span>
      <span v-else data-test="label">
        <slot>
          {{ label.unchecked }}
        </slot>
      </span>
    </template>
  </button>
</template>

<style scoped>
.toggle-button {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  transition: background 0.3s;
  user-select: none;
  width: v-bind('styleVars.sWidth');
  height: v-bind('styleVars.sHeight');
  border-radius: 999px;
}

.toggle-button:hover,
.toggle-button:focus {
  box-shadow: 0 0 0.5rem v-bind('styleVars.sInActiveColor');
  outline: none;
}

.toggle-button[aria-pressed='true']:hover,
.toggle-button[aria-pressed='true']:focus {
  box-shadow: 0 0 0.5rem v-bind('styleVars.sActiveColor');
}

.toggle-button span {
  position: absolute;
  top: 0;
  font-weight: 600;
  color: #fff;
  pointer-events: none;
  line-height: v-bind('styleVars.sHeight');
  height: v-bind('styleVars.sHeight');
  font-size: 10px;
}

.toggle-button[aria-pressed='false'] span {
  right: 10px;
}

.toggle-button[aria-pressed='true'] span {
  left: 10px;
}

.toggle-button[aria-pressed='true'] {
  background: v-bind('styleVars.sActiveColor');
}

.toggle-button[aria-pressed='false'] {
  background: v-bind('styleVars.sInActiveColor');
}

.toggle-button::before {
  content: '';
  position: absolute;
  display: block;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 20;
  transform: translate(
    v-bind('styleVars.sMargin'),
    v-bind('styleVars.sMargin')
  );
  transition: transform 0.3s;
  border-radius: 100%;
  background-color: #fff;
  width: calc(v-bind('styleVars.sHeight') - (2 * v-bind('styleVars.sMargin')));
  height: calc(v-bind('styleVars.sHeight') - (2 * v-bind('styleVars.sMargin')));
}

.toggle-button[aria-pressed='true']::before {
  transform: translate(
    calc(
      v-bind('styleVars.sWidth') - v-bind('styleVars.sHeight') +
        v-bind('styleVars.sMargin')
    ),
    v-bind('styleVars.sMargin')
  );
}

/* Reduced motion */
@media screen and (prefers-reduced-motion: reduce) {
  .toggle-button,
  .toggle-button::before {
    transition: none;
  }
}

*[dir='rtl'] .toggle-button::before {
  right: 0;
  transform: translate(
    calc(-1 * v-bind('styleVars.sMargin')),
    v-bind('styleVars.sMargin')
  );
}

*[dir='rtl'] .toggle-button[aria-pressed='true']::before {
  transform: translate(
    calc(
      -1 * (v-bind('styleVars.sWidth') - v-bind('styleVars.sHeight') +
            v-bind('styleVars.sMargin'))
    ),
    v-bind('styleVars.sMargin')
  );
}

*[dir='rtl'] .toggle-button[aria-pressed='false'] span {
  left: 10px;
  right: auto;
}

*[dir='rtl'] .toggle-button[aria-pressed='true'] span {
  right: 10px;
  left: auto;
}
</style>
