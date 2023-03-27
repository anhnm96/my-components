<script setup lang="ts">
const tocLinks = [
  {
    id: 'overview',
    depth: 2,
    text: 'Overview',
    children: [
      {
        id: 'philosophy',
        depth: 3,
        text: 'Philosophy',
      },
    ],
  },
  {
    id: 'block-elements',
    depth: 2,
    text: 'Block Elements',
    children: [
      {
        id: 'paragraphs-and-line-breaks',
        depth: 3,
        text: 'Paragraphs and Line Breaks',
      },
      {
        id: 'headers',
        depth: 3,
        text: 'Headers',
      },
      {
        id: 'blockquotes',
        depth: 3,
        text: 'Blockquotes',
      },
    ],
  },
  {
    id: 'this-is-a-header',
    depth: 2,
    text: 'This is a header.',
    children: [
      {
        id: 'lists',
        depth: 3,
        text: 'Lists',
      },
      {
        id: 'code-blocks',
        depth: 3,
        text: 'Code Blocks',
      },
    ],
  },
  {
    id: 'span-elements',
    depth: 2,
    text: 'Span Elements',
    children: [
      {
        id: 'links',
        depth: 3,
        text: 'Links',
      },
      {
        id: 'emphasis',
        depth: 3,
        text: 'Emphasis',
      },
      {
        id: 'code',
        depth: 3,
        text: 'Code',
      },
    ],
  },
]

const container = ref()
const marker = ref()
useActiveAnchor(container, marker)
</script>

<template>
  <nav ref="container" class="sidebar fixed right-0 w-[160px] flex-shrink-0">
    <div class="content sticky top-[120px]">
      <div
        ref="marker"
        class="absolute left-0 h-[1em] w-1 rounded bg-green-500 transition-all duration-200"
      ></div>
      <ul class="ml-0 pl-4">
        <li
          v-for="{ id, text, children } in tocLinks"
          :id="`toc-${id}`"
          :key="id"
          class="ml-0 mb-2 cursor-pointer list-none text-sm last:mb-0"
        >
          {{ text }}
          <ul v-if="children" class="my-2 ml-3">
            <li
              v-for="{ id: childId, text: childText } in children"
              :key="childId"
            >
              <a
                :id="`${childId}`"
                :href="`#${childId}`"
                class="outline-link ml-0 mb-2 cursor-pointer list-none text-xs last:mb-0"
              >
                {{ childText }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
.active {
  @apply font-bold;
}
</style>
