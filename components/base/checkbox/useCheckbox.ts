import type { Ref } from 'vue'

export function useCheckbox(items: Ref<any>) {
  const checkedRows = ref<any>([])
  const hasSelected = computed(() => checkedRows.value.length > 0)

  const lastCheckedRowIndex = ref(-1)
  const isAllChecked = computed(() => {
    return checkedRows.value.length === items.value?.length
  })

  function checkAll() {
    const _isAllChecked = isAllChecked.value
    items.value.forEach((item: any) => {
      removeCheckedRow(item)
      if (!_isAllChecked) checkedRows.value.push(item)
    })
  }

  function isRowChecked(row: any) {
    const res = checkedRows.value.includes(row)
    return res
  }

  function checkRow(row: any, index: number, event: MouseEvent) {
    const lastIndex = lastCheckedRowIndex.value
    lastCheckedRowIndex.value = index
    if (event.shiftKey && lastIndex !== -1 && index !== lastIndex)
      shiftCheckRow(row, index, lastIndex)
    else if (!isRowChecked(row)) checkedRows.value.push(row)
    else removeCheckedRow(row)
  }

  function shiftCheckRow(row: any, index: number, lastCheckedRowIndex: number) {
    // Get the subset of the list between the two indicies
    const subset = items.value.slice(
      Math.min(index, lastCheckedRowIndex),
      Math.max(index, lastCheckedRowIndex) + 1
    )
    // Determine the operation based on the state of the clicked checkbox
    const shouldCheck = !isRowChecked(row)
    subset.forEach((item: any) => {
      removeCheckedRow(item)
      if (shouldCheck) checkedRows.value.push(item)
    })
  }

  function removeCheckedRow(row: any) {
    const index = checkedRows.value.indexOf(row)
    if (index >= 0) checkedRows.value.splice(index, 1)
  }

  return {
    checkedRows,
    hasSelected,
    isAllChecked,
    checkAll,
    isRowChecked,
    checkRow,
    removeCheckedRow,
  }
}
