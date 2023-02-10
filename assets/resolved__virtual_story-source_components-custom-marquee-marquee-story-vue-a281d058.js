const resolved__virtual_storySource_componentsCustomMarqueeMarqueeStoryVue = `<script setup lang="ts">
const marqueeList = ref([
  { text: 1, color: 'red' },
  { text: 2, color: 'purple' },
  { text: 3, color: 'blue' },
  { text: 4, color: 'green' },
  { text: 5, color: 'yellow' },
])
<\/script>

<template>
  <Story title="Marquee">
    <Marquee
      v-slot="{ item }"
      :list="marqueeList"
      style="--gap: 0rem; --duration: 15s"
    >
      <div
        class="m-auto w-full py-2 text-center text-white"
        :class="[\`bg-\${item.color}-500\`]"
      >
        {{ item.text }}
      </div>
    </Marquee>
    <Marquee v-slot="{ item }" :list="marqueeList" class="mt-4">
      <div
        class="w-full rounded py-2 text-center text-white"
        :class="[\`bg-\${item.color}-500\`]"
      >
        {{ item.text }}
      </div>
    </Marquee>
  </Story>
</template>
`;
export {
  resolved__virtual_storySource_componentsCustomMarqueeMarqueeStoryVue as default
};
