<script lang="ts" setup>
import type { Cursor } from './useCursor'

const props = defineProps<{
  rowIndex: number
  columnIndex: number
}>()
const $cursor = inject('$cursor') as Cursor
function onSelectCell() {
  $cursor.selectedCell.rowIndex = props.rowIndex
  $cursor.selectedCell.columnIndex = props.columnIndex
}
</script>

<template>
  <td
    :data-row-index="rowIndex"
    :data-column-index="columnIndex"
    :class="`cell-${rowIndex}-${columnIndex}`"
    class="text-truncate"
    @mousedown="onSelectCell"
  >
    <slot />
  </td>
</template>

<style scoped>
td {
  user-select: none;
  overflow: hidden;
}

.text-truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
