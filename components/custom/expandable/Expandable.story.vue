<script lang="ts" setup>
const expanded = ref(false)
const expanded2 = ref(false)
</script>

<template>
  <Story tite="Expandable">
    <Variant title="Vertical">
      <div>
        <button
          class="mt-3 flex w-full items-center justify-between rounded-[1.125rem] bg-[#1B1829] px-4 py-3 text-gray-100"
          @click="expanded = !expanded"
        >
          <span class="font-lexend font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </span>
          <span v-if="expanded" class="h-6 w-6" aria-hidden="true">-</span>
          <span v-else class="h-6 w-6" aria-hidden="true">+</span>
        </button>
      </div>
      <Expandable>
        <div
          v-if="expanded"
          class="my-2 rounded-[1.125rem] bg-[#1B1829] px-4 pt-2 pb-[0.8125rem] leading-7 text-gray-400"
        >
          <p>
            🔥 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas, perspiciatis distinctio!
          </p>
          <p>
            🔥 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            sit illo corporis eos aliquid voluptates aut laborum! Perspiciatis,
            quam laboriosam.
          </p>
        </div>
      </Expandable>
    </Variant>
    <Variant title="Horizontal">
      <div class="mt-3 flex items-stretch gap-2">
        <div class="flex-shrink-0 basis-1/5 items-center">
          <button
            class="flex w-full items-center justify-between rounded-[1.125rem] bg-[#1B1829] px-4 py-3 text-gray-100"
            @click="expanded2 = !expanded2"
          >
            <span class="font-lexend font-bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
          </button>
        </div>
        <Expandable dimension="horizontal">
          <div
            v-if="expanded2"
            class="rounded-[1.125rem] bg-[#1B1829] px-4 pt-2 pb-[0.8125rem] leading-7 text-gray-400"
          >
            <p>
              🔥 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas, perspiciatis distinctio!
            </p>
            <p>
              🔥 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              sit illo corporis eos aliquid voluptates aut laborum!
              Perspiciatis, quam laboriosam.
            </p>
          </div>
        </Expandable>
      </div>
    </Variant>
  </Story>
</template>
