const resolved__virtual_storySource_componentsBaseButtonButtonStoryVue = `<script lang="ts" setup>
const loading = ref(false)
function click() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
<\/script>

<template>
  <Story title="Button" :layout="{ type: 'grid', width: '300px' }">
    <Variant title="Loading-sm">
      <BaseButton
        class="btn-sm rounded bg-purple-600 px-2 py-1 text-white"
        loading
      >
        Button
      </BaseButton>
    </Variant>
    <Variant title="Disabled-lg">
      <BaseButton
        class="btn-lg rounded bg-green-600 px-2 py-1 text-white"
        disabled
      >
        Disabled
      </BaseButton>
    </Variant>
    <Variant title="aria-disabled">
      <a
        href="https://css-tricks.com/making-disabled-buttons-more-inclusive/"
        rel="noreferrer noopener"
        class="mb-2 block text-white"
        >Here's why we need aria-disabled button!
      </a>
      <BaseButton
        class="btn-xl rounded bg-blue-600 px-2 py-1 text-white"
        aria-disabled="true"
      >
        aira-disabled
      </BaseButton>
    </Variant>
    <Variant title="Normal">
      <BaseButton
        class="space-x-1 rounded bg-red-600 px-2 py-1 text-white"
        :loading="loading"
        @click="click"
      >
        <span>Normal</span>
        <svg class="flex" width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"
          ></path>
        </svg>
      </BaseButton>
    </Variant>
    <Variant title="others">
      <div class="space-x-2 space-y-2">
        <button class="btn btn-link">Link</button>
        <button class="btn btn-outline">Test</button>
        <button class="btn btn-outline btn-info">Test</button>
        <button class="btn btn-outline btn-success">Test</button>
        <button class="btn btn-ghost">Ghost</button>
      </div>
    </Variant>
  </Story>
</template>
`;
export {
  resolved__virtual_storySource_componentsBaseButtonButtonStoryVue as default
};
