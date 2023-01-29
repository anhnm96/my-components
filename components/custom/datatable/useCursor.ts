import type { Ref } from 'vue'
interface Cell {
  rowIndex: number
  columnIndex: number
}
interface CellRegion {
  start: { rowIndex: number; columnIndex: number }
  end: { rowIndex: number; columnIndex: number }
}
export class Cursor {
  containerElementRef: HTMLElement
  editing: Ref<boolean>
  selectedCell: Cell
  selectedRegion: CellRegion

  constructor(containerElementRef: HTMLElement) {
    this.containerElementRef = containerElementRef
    this.editing = ref(false)
    this.selectedCell = reactive({ rowIndex: -1, columnIndex: -1 })
    this.selectedRegion = reactive({
      start: this.selectedCell,
      end: { rowIndex: -1, columnIndex: -1 },
    })

    watch(this.selectedCell, () => {
      this.selectedRegion.end.rowIndex = -1
      this.selectedRegion.end.columnIndex = -1
    })
  }
}
