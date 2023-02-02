<script lang="ts" setup>
import DragList from '@/components/custom/drag/stories/DragList.vue'
import DragImgOnDrop from '@/components/custom/drag/stories/DragImgOnDrop.vue'
import DynamicDragImage from '@/components/custom/drag/stories/DynamicDragImage.vue'
import RestrictDropable from '@/components/custom/drag/stories/RestrictDropable.vue'
import Trello from '@/components/custom/drag/stories/trello/index.vue'
definePageMeta({ layout: false })
</script>

<template>
  <div>
    <Trello />
    <DragList />
    <DragImgOnDrop />
    <DynamicDragImage />
    <RestrictDropable />
  </div>
</template>
