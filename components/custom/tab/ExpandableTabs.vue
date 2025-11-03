<script setup lang="ts">
interface Tab {
  title: string
  icon: string
  type?: never
}

interface Separator {
  type: 'separator'
  title?: never
  icon?: never
}

type TabItem = Tab | Separator

interface ExpandableTabsProps {
  tabs: TabItem[]
  className?: string
  activeColor?: string
}

const props = withDefaults(defineProps<ExpandableTabsProps>(), {
  activeColor: 'text-gray-400',
})
const emits = defineEmits<{
  (e: 'change', index: number | null): void
}>()

const transition = { delay: 0.1, type: 'spring', bounce: 0, duration: 0.6 }
const selected = ref<number | null>(null)
const target = useTemplateRef<HTMLElement>('target')

onClickOutside(target, () => {
  selected.value = null
})
function handleSelect(index: number | null) {
  selected.value = index
  emits('change', index)
}
</script>

<template>
  <div
    ref="target"
    class="flex flex-wrap items-center gap-2 rounded-2xl border border-gray-200 bg-white p-1 shadow-sm"
  >
    <div v-for="(tab, index) in props.tabs" :key="tab.title">
      <div v-if="tab.type === 'separator'">
        <!-- separator -->
        <div
          :key="`separator-${index}`"
          class="mx-1 h-[24px] w-[1.2px] bg-gray-300"
          aria-hidden="true"
        />
      </div>
      <Motion
        v-else
        :key="tab.title"
        as="button"
        class="flex items-center rounded-full px-2 py-2 text-sm font-medium transition-colors duration-200 ease-in-out"
        :class="[selected === index ? props.activeColor : 'text-gray-400']"
        :style="{
          backgroundColor: selected === index ? '#F4F4F5' : 'transparent',
        }"
        :initial="{
          gap: 0,
          paddingLeft: '.5rem',
          paddingRight: '.5rem',
        }"
        :animate="{
          gap: selected === index ? '.5rem' : 0,
          paddingLeft: selected === index ? '1rem' : '.5rem',
          paddingRight: selected === index ? '1rem' : '.5rem',
        }"
        :transition="transition"
        @click="handleSelect(index)"
      >
        <Icon :name="tab.icon" class="h-5 w-5 text-black" />
        <AnimatePresence>
          <Motion
            v-if="selected === index"
            :key="`title-${index}`"
            as="span"
            :initial="{ width: 0, opacity: 0 }"
            :animate="{ width: 'auto', opacity: 1 }"
            :exit="{ width: 0, opacity: 0 }"
            class="overflow-hidden text-black"
            :transition="transition"
          >
            {{ tab.title }}
          </Motion>
        </AnimatePresence>
      </Motion>
    </div>
  </div>
</template>
