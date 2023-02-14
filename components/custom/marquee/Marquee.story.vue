<script setup lang="ts">
const marqueeList = ref([
  { text: 1, color: 'red' },
  { text: 2, color: 'purple' },
  { text: 3, color: 'blue' },
  { text: 4, color: 'green' },
  { text: 5, color: 'yellow' },
])
</script>

<template>
  <Story title="Marquee" :layout="{ type: 'grid', width: '700px' }">
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
