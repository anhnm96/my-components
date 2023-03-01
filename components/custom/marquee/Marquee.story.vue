<script setup lang="ts">
const marqueeList = ref([
  { text: 1, color: 'red' },
  { text: 2, color: 'purple' },
  { text: 3, color: 'blue' },
  { text: 4, color: 'green' },
  { text: 5, color: 'yellow' },
])
const list1 = [
  'Custom attributes',
  'Chat',
  'Subtasks',
  'Dark theme',
  'Filters',
  'Inbox',
  'Smart lists',
  'Public API',
]
const list2 = [
  'Customizable shortcuts',
  'Private tasks',
  'Kanban',
  'Gantt charts',
  'Group mentions',
  'Powerful search',
  'Trash',
]
const list3 = [
  'Task forms',
  'macOS & Windows apps',
  'Command-K',
  'Spreadsheet',
  'Calendar',
  'Webhooks',
]
</script>

<template>
  <Story title="Marquee" :layout="{ type: 'grid', width: '700px' }">
    <Variant title="Features">
      <div class="relative flex flex-col gap-[2px] bg-[#f7f7f8] py-4">
        <Marquee
          v-slot="{ item }"
          :list="list1"
          style="--gap: 2px; --duration: 36s"
        >
          <div
            class="h-7 rounded-md bg-[rgba(199,199,199,.57)] px-2 text-[15px] font-medium leading-7 text-[#001834a6]"
          >
            {{ item }}
          </div>
        </Marquee>
        <Marquee
          v-slot="{ item }"
          :list="list2"
          style="--gap: 2px; --duration: 48s"
          dir="rtl"
        >
          <div
            class="h-7 rounded-md bg-[rgba(199,199,199,.57)] px-2 text-[15px] font-medium leading-7 text-[#001834a6]"
          >
            {{ item }}
          </div>
        </Marquee>
        <Marquee
          v-slot="{ item }"
          :list="list3"
          style="--gap: 2px; --duration: 56s"
        >
          <div
            class="h-7 rounded-md bg-[rgba(199,199,199,.57)] px-2 text-[15px] font-medium leading-7 text-[#001834a6]"
          >
            {{ item }}
          </div>
        </Marquee>
        <div
          class="absolute inset-0 mix-blend-overlay"
          style="
            background: radial-gradient(
              138% 2376.3% at 3.75% 80%,
              #d55ffe 0%,
              #2f8dff 53.65%,
              #15ada1 100%
            );
          "
        ></div>
      </div>
    </Variant>
    <Variant title="no gap, custom animation">
      <Marquee
        v-slot="{ item }"
        :list="marqueeList"
        style="--gap: 0rem; --duration: 25s"
      >
        <div
          class="m-auto w-full py-2 text-center text-white"
          :class="[`bg-${item.color}-500`]"
        >
          {{ item.text }}
        </div>
      </Marquee>
    </Variant>
    <Variant title="normal">
      <Marquee v-slot="{ item }" :list="marqueeList" class="mt-4">
        <div
          class="w-full rounded py-2 text-center text-white"
          :class="[`bg-${item.color}-500`]"
        >
          {{ item.text }}
        </div>
      </Marquee>
    </Variant>
    <Variant title="reverse">
      <Marquee v-slot="{ item }" :list="marqueeList" class="reverse mt-4">
        <div
          class="w-full rounded py-2 text-center text-white"
          :class="[`bg-${item.color}-500`]"
        >
          {{ item.text }}
        </div>
      </Marquee>
    </Variant>
    <Variant title="normal, rtl">
      <Marquee v-slot="{ item }" :list="marqueeList" class="mt-4" dir="rtl">
        <div
          class="w-full rounded py-2 text-center text-white"
          :class="[`bg-${item.color}-500`]"
        >
          {{ item.text }}
        </div>
      </Marquee>
    </Variant>
    <Variant title="reverse, rtl">
      <Marquee
        v-slot="{ item }"
        :list="marqueeList"
        class="reverse mt-4"
        dir="rtl"
      >
        <div
          class="w-full rounded py-2 text-center text-white"
          :class="[`bg-${item.color}-500`]"
        >
          {{ item.text }}
        </div>
      </Marquee>
    </Variant>
  </Story>
</template>
