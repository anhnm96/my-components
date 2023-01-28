<script lang="ts" setup>
import DragList from '@/components/custom/drag/stories/DragList.story.vue'
import DragImgOnDrop from '@/components/custom/drag/stories/DragImgOnDrop.story.vue'
import DynamicDragImage from '@/components/custom/drag/stories/DynamicDragImage.story.vue'
import RestrictDropable from '@/components/custom/drag/stories/RestrictDropable.story.vue'
definePageMeta({ layout: false })
</script>

<template>
  <div>
    <DragList />
    <!-- <DragImgOnDrop />
    <DynamicDragImage />
    <RestrictDropable /> -->
  </div>
</template>
