<script lang="ts">
interface PanelGroupContext {
  addItem: (item: HTMLDivElement) => void
  update: (srcEl: HTMLElement, delta: number) => void
}

export const PanelGroupKey: InjectionKey<PanelGroupContext> =
  Symbol('PanelGrop')
</script>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    as?: string
  }>(),
  { as: 'div' },
)

const items = ref<HTMLElement[]>([])
function addItem(item: HTMLElement) {
  items.value.push(item)
}

function update(srcEl: HTMLElement, newWidth: number) {
  const index = items.value.indexOf(srcEl)
  srcEl.style.width = `${newWidth}px`
  const nextEl = items.value[index + 1]
  nextEl.style.width = ''
  requestAnimationFrame(() => {
    srcEl.style.width = `${srcEl.getBoundingClientRect().width}px`
    nextEl.style.width = `${nextEl.getBoundingClientRect().width}px`
  })
}

provide(PanelGroupKey, { addItem, update })
</script>

<template>
  <component :is="as">
    <slot />
  </component>
</template>
