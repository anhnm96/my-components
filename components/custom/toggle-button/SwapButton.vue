<script lang="ts" setup>
interface Item {
  id: string
  icon?: string
  defaultClass?: string
  activeClass?: string
  ariaLabel?: string
}
const props = defineProps<{
  states: Item[]
  selected?: Item
}>()
const emit = defineEmits<{
  'update:selected': [value: boolean]
}>()
const _selected = useInternalValue(props, emit, 'selected', {
  defaultValue: props.states[0],
}) as Ref<Item>
const currentIndex = ref(
  props.states.findIndex((item) => item.id === _selected.value.id),
)

function toggle() {
  currentIndex.value++
  if (currentIndex.value >= props.states.length) currentIndex.value = 0
  _selected.value = props.states[currentIndex.value]
}
</script>

<template>
  <button
    class="btn relative inline-grid place-items-center [&>*]:col-start-1 [&>*]:row-start-1 [&>*]:transition-all [&>*]:duration-300"
    :aria-label="_selected.ariaLabel"
    @click="toggle"
  >
    <template v-for="state in states">
      <slot
        :id="state.id"
        :icon="state.icon"
        :default-class="state.defaultClass"
        :active-class="state.activeClass || ''"
        :active="_selected.id === state.id"
      >
        <SwapItem
          :id="state.id"
          :key="state.id"
          :icon="state.icon"
          :default-class="state.defaultClass"
          :active-class="state.activeClass || ''"
          :active="_selected.id === state.id"
        />
      </slot>
    </template>
  </button>
</template>
