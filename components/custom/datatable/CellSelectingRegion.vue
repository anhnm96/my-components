<script>
import { throttle } from 'lodash-es'
export default {
  name: 'CellSelectingRegion',
  setup() {
    const cursor = inject('$cursor')
    // Setup event onMouseDown
    onMounted(() => {
      nextTick(() => {
        const $table = cursor.containerElementRef.value
        let tbody

        const onMouseMove = throttle(function (event) {
          const td = event.target.closest('td')
          if (!td.dataset.columnIndex) return
          // cursor.selectedRegion.start.rowIndex = cursor.selectedCell.rowIndex
          // cursor.selectedRegion.start.columnIndex = cursor.selectedCell.columnIndex
          cursor.selectedRegion.end.rowIndex = parseInt(td.dataset.rowIndex)
          cursor.selectedRegion.end.columnIndex = parseInt(
            td.dataset.columnIndex
          )
        }, 20)

        $table.addEventListener('mousedown', (event) => {
          const td = event.target.closest('td')
          // Return if not found and td
          if (!td) return
          // If user didn't clicked on any regular cell, clear the cell region
          if (!td.dataset.columnIndex) {
            return
          }
          // If user right clicked on a regular cell,
          // and the cell is in the current selected region, do not clear the selected region
          // const cellRegion = selectedCellRegionRef.value
          // if (event.button === 2 && cellRegion &&
          //     inInclusiveRange(rowIndex, cellRegion.start.rowIndex, cellRegion.end.rowIndex) &&
          //     inInclusiveRange(columnIndex, cellRegion.start.columnIndex, cellRegion.end.columnIndex)
          // ) {
          //     return
          // }
          tbody = $table.querySelector('tbody')
          tbody.addEventListener('mousemove', onMouseMove)
          document.addEventListener('mouseup', onMouseUp)
        })

        function onMouseUp() {
          tbody.removeEventListener('mousemove', onMouseMove)
          document.removeEventListener('mouseup', onMouseUp)
        }
      })
    })
    // Calculate style for region
    const selectedCellRegionStyle = computed(() => {
      const $table = cursor.containerElementRef.value
      const cellRegion = cursor.selectedRegion
      const startCellClass = `.cell-${cellRegion.start.rowIndex}-${cellRegion.start.columnIndex}`
      const endCellClass = `.cell-${cellRegion.end.rowIndex}-${cellRegion.end.columnIndex}`
      const startCell = $table?.querySelector(startCellClass)
      const endCell = $table?.querySelector(endCellClass)
      // Guard if mouseover el is not cell
      if (!startCell || !endCell) return { display: 'none' }
      // If start cell and end cell is the same one, do not display
      if (startCell === endCell) return { display: 'none' }
      let top, left, width, height

      if (startCell.offsetLeft < endCell.offsetLeft) {
        left = startCell.offsetLeft
        width = endCell.offsetLeft + endCell.offsetWidth - left
      } else {
        left = endCell.offsetLeft
        width = startCell.offsetLeft + startCell.offsetWidth - left
      }

      if (startCell.offsetTop < endCell.offsetTop) {
        top = startCell.offsetTop
        height = endCell.offsetTop + endCell.offsetHeight - top
      } else {
        top = endCell.offsetTop
        height = startCell.offsetTop + startCell.offsetHeight - top
      }
      return {
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
      }
    })
    return { selectedCellRegionStyle }
  },
}

// function makeSureCellRegionStayInsideTable (selectedCellRegionRef) {
//         const $table = getTable()

//         // When the number of rows changes, make sure the selected cell region stay inside
//         watch(() => $table.rows.length, (newRowsLength) => {
//             if (selectedCellRegionRef.value?.start.rowIndex > newRowsLength - 1) {
//                 selectedCellRegionRef.value.start.rowIndex = newRowsLength - 1
//             }
//             if (selectedCellRegionRef.value?.end.rowIndex > newRowsLength - 1) {
//                 selectedCellRegionRef.value.end.rowIndex = newRowsLength - 1
//             }
//         })

//         // When the number of columns changes, make sure the selected cell region stay inside
//         watch(() => $table.columns.length, (newColumnsLength) => {
//             /* istanbul ignore next */
//             if (selectedCellRegionRef.value?.start.columnIndex > newColumnsLength - 1) {
//                 selectedCellRegionRef.value.start.columnIndex = newColumnsLength - 1
//             }
//             /* istanbul ignore next */
//             if (selectedCellRegionRef.value?.end.columnIndex > newColumnsLength - 1) {
//                 selectedCellRegionRef.value.end.columnIndex = newColumnsLength - 1
//             }
//         })
//     }
</script>

<template>
  <span class="selecting-region" :style="selectedCellRegionStyle" />
</template>

<style scoped>
.selecting-region {
  position: absolute;
  background-color: rgba(130, 244, 10, 0.26);
  pointer-events: none;
}
</style>
