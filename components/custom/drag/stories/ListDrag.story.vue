<script lang="ts" setup>
import DragList from '~~/components/custom/drag/stories/DragList.vue'
import Trello from '~~/components/custom/drag/stories/trello/index.vue'
</script>

<template>
  <Story title="Drag - list">
    <Variant title="Demo">
      <DragList class="bg-white" />
    </Variant>
    <Variant title="Trello Clone">
      <Trello />
    </Variant>
  </Story>
</template>
