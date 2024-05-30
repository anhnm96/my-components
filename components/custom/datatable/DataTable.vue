<script>
import Cell from './Cell.vue'
import CellCursor from './CellCursor.vue'
import CellSelectingRegion from './CellSelectingRegion.vue'
import { Cursor } from './useCursor'
import ContextMenu from '@/components/custom/menu/Menu.vue'
import DragList from '@/components/custom/drag/DragList.vue'

// import Tracker from '@/hooks/useTracker'
// import useTrackRef from '@/hooks/useTrackRef'

export default {
  components: { DragList, Cell, CellCursor, CellSelectingRegion, ContextMenu },
  props: {
    items: Array,
    columns: Array,
    insertColumnOnPaste: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:items', 'onInput'],
  setup(props, { emit }) {
    const tableRef = ref(null)
    const cursor = new Cursor(tableRef)
    provide('$cursor', cursor)
    provide('$columns', props.columns)

    function getOS() {
      const userAgent = window.navigator.userAgent
      const platform = window.navigator.platform
      const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
      const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
      const iosPlatforms = ['iPhone', 'iPad', 'iPod']
      let os = null

      if (macosPlatforms.includes(platform)) {
        os = 'Mac OS'
      } else if (iosPlatforms.includes(platform)) {
        os = 'iOS'
      } else if (windowsPlatforms.includes(platform)) {
        os = 'Windows'
      } else if (/Android/.test(userAgent)) {
        os = 'Android'
      } else if (!os && /Linux/.test(platform)) {
        os = 'Linux'
      }

      return os
    }
    const os = getOS()

    // const itemsTracker = new Tracker(props.items)
    // const itemsTracker = useTrackRef(props.items)
    const clonedItems = ref(props.items)
    const list = computed({
      get: () => props.items,
      set: (val) => emit('update:items', val),
    })
    watch(
      clonedItems,
      (val) => {
        emit('update:items', val)
      },
      { deep: true },
    )
    const itemsTracker = useRefHistory(clonedItems, { deep: true })
    const undo = (e) => {
      // return if ctrl.z on Mac or meta.z on other os
      if ((os === 'Mac OS' && e.ctrlKey) || (os !== 'Mac OS' && e.metaKey))
        return
      itemsTracker.undo()
      emit('update:items', clonedItems.value)
    }

    const redo = (e) => {
      // return if ctrl.shift.z on Mac or meta.shift.z on other
      if ((os === 'Mac OS' && e.ctrlKey) || (os !== 'Mac OS' && e.metaKey))
        return
      itemsTracker.redo()
      emit('update:items', clonedItems.value)
    }

    const actions = [{ label: 'Add above' }]
    const insertRow = (rowIndex, context, position = 'below') => {
      const posInsert = position === 'below' ? rowIndex + 1 : rowIndex
      const newArr = [...props.items]

      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      newArr.splice(posInsert, 0, { ...dumpItem })
      emit('update:items', newArr)

      // update focusing cursor if add row above
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      if (position === 'above') selectHeader('row', rowIndex + 1)
      if (context) context.show = false
    }

    const insertColumn = (columnIndex, context, position = 'right') => {
      console.log('insertColumn', position)
      // TODO: add column, name column
      // const posInsert = position === 'left' ? rowIndex + 1 : rowIndex
      // const newArr = [...props.items]

      // newArr.splice(posInsert, 0, dumpItem)
      // console.log(newArr.length)
      // emit('update:items', newArr)
      // nextTick(() => console.log(props.items.length))

      // // update focusing cursor if add row above
      // if (position === 'above')
      //   selectHeader('row', rowIndex + 1)
      // context.show = false
    }

    const selectHeader = (type, index) => {
      if (type === 'row') {
        // Auto focus first cell when select row
        Object.assign(cursor.selectedCell, { rowIndex: index, columnIndex: 0 })
        nextTick(() => {
          // We don't need to update selectedRegion.start because it's been updated in useCursor watch('selectedCell')
          // That's why we use nextTick to wait our watch finishes
          Object.assign(cursor.selectedRegion.end, {
            rowIndex: index,
            columnIndex: props.columns.length - 1,
          })
        })
      }
      if (type === 'column') {
        // Auto focus first cell when select column
        Object.assign(cursor.selectedCell, { rowIndex: 0, columnIndex: index })
        nextTick(() => {
          // We don't need to update selectedRegion.start because it's been updated in useCursor watch('selectedCell')
          // That's why we use nextTick to wait our watch finishes
          Object.assign(cursor.selectedRegion.end, {
            rowIndex: props.items.length - 1,
            columnIndex: index,
          })
        })
      }
    }

    function updateData({ rowIndex, column, value }) {
      console.info('updateData', { rowIndex, column, value })
      clonedItems.value[rowIndex][column.name] = value
      emit('onInput', {
        rowIndex,
        column,
        value,
      })
    }

    const copy = (event) => {
      event.preventDefault()
      let end = null
      if (cursor.selectedRegion.end.rowIndex === -1) end = cursor.selectedCell
      else end = cursor.selectedRegion.end
      const topIndex = Math.min(
        cursor.selectedRegion.start.rowIndex,
        end.rowIndex,
      )
      const bottomIndex = Math.max(
        cursor.selectedRegion.start.rowIndex,
        end.rowIndex,
      )
      const leftIndex = Math.min(
        cursor.selectedRegion.start.columnIndex,
        end.columnIndex,
      )
      const rightIndex = Math.max(
        cursor.selectedRegion.start.columnIndex,
        end.columnIndex,
      )

      // Get the data to copy into clipboard
      const rows = []
      for (let i = topIndex; i <= bottomIndex; i++) {
        const row = []
        for (let j = leftIndex; j <= rightIndex; j++) {
          // if value is null then push ''
          row.push(props.items[i][props.columns[j].name] || '')
        }
        rows.push(row)
      }

      // Build text version
      const text = rows.map((row) => row.join('\t')).join('\n')
      event.clipboardData.setData('text/plain', text)
    }

    const paste = async (event) => {
      event.preventDefault()
      const pastedItems = getCsvFromClipboardData(event.clipboardData)
      if (!pastedItems.length) return

      // Start firing input events
      for (let i = 0; i < pastedItems.length; i++) {
        // Insert new row if necessary
        if (cursor.selectedCell.rowIndex + i >= props.items.length) {
          insertRow(props.items.length - 1)
          await nextTick()
        }
        for (let j = 0; j < pastedItems[i].length; j++) {
          if (cursor.selectedCell.columnIndex + j >= props.columns.length) {
            break
          }
          updateData({
            rowIndex: cursor.selectedCell.rowIndex + i,
            column: props.columns[cursor.selectedCell.columnIndex + j],
            value: pastedItems[i][j],
          })
        }
      }
    }
    return {
      list,
      itemsTracker,
      tableRef,
      undo,
      redo,
      actions,
      cursor,
      selectHeader,
      copy,
      paste,
      insertRow,
      insertColumn,
      clonedItems,
      updateData,
    }
  },
}

const dumpItem = {
  color: '',
  cutpot: 'cut',
  family: '',
  grade: '',
  id: `${Math.random()}`,
  note: null,
  origin: '',
  price: null,
  product_id: '',
  quantity: null,
  unit: '',
  variety: '',
  $errors: {},
}
</script>

<template>
  <table
    ref="tableRef"
    @copy="copy"
    @paste="paste"
    @keydown.ctrl.z.exact.prevent="undo"
    @keydown.ctrl.shift.z.prevent="redo"
    @keydown.meta.z.exact.prevent="undo"
    @keydown.meta.shift.z.prevent="redo"
  >
    <!-- `prevent` undo and redo because it
  may make CellCursor emit on-input event
  on some browsers -->
    <thead>
      <tr>
        <th class="datatable__header" />
        <th
          v-for="(col, $columnIndex) in columns"
          :key="col.name"
          :class="`datatable__header datatable__header--${col.name}`"
          @mousedown="selectHeader('column', $columnIndex)"
        >
          {{ col.name }}
        </th>
      </tr>
    </thead>
    <DragList
      v-model:list="clonedItems"
      tag="tbody"
      child-tag="tr"
      handle=".datatable__index"
      :id-adapter="(i) => i.id"
    >
      <template #default="{ item, index }">
        <td class="datatable__index" @mousedown="selectHeader('row', index)">
          {{ index + 1 }}
        </td>
        <Cell
          v-for="(col, $columnIndex) in columns"
          :key="col.name"
          :row-index="index"
          :column-index="$columnIndex"
        >
          {{ item[col.name] }}
        </Cell>
      </template>
      <template #placeholder-move>
        <td
          :colspan="columns.length + 1"
          style="border: 1px solid red; height: 2px"
        />
      </template>
    </DragList>
    <!-- <tbody>
      <tr v-for="(item, $rowIndex) in items" :key="item.id">
        <td
          class="datatable__index"
          @mousedown="selectHeader('row', $rowIndex)"
        >
          {{ $rowIndex + 1 }}
        </td>
        <Cell
          v-for="(col, $columnIndex) in columns"
          :key="col.name"
          :row-index="$rowIndex"
          :column-index="$columnIndex"
          >{{ item[col.name] }}</Cell
        >
      </tr>
    </tbody> -->
    <CellSelectingRegion />
    <CellCursor :items="items" @input="updateData">
      <!-- Pass-through all slots to cell-input component. -->
      <!-- May filter later to only pass cell-input* slots -->
      <template v-for="name of Object.keys($slots)" #[name]="scope">
        <slot :name="name" v-bind="scope" />
      </template>
    </CellCursor>
    <!-- <ContextMenu :actions="actions">
      <template #default="scope">
        <slot name="context-menu" v-bind="scope" :cursor="cursor">
          <button
            class="block w-full p-2 text-left hover:bg-gray-400"
            :disabled="scope.context.event.target.tagName === 'TH'"
            @click="
              insertRow(cursor.selectedCell.rowIndex, scope.context, 'above')
            "
          >
            Add row above
          </button>
          <button
            class="block w-full p-2 text-left hover:bg-gray-400"
            :disabled="scope.context.event.target.tagName === 'TH'"
            @click="insertRow(cursor.selectedCell.rowIndex, scope.context)"
          >
            Add row below
          </button>
          <button
            class="block w-full p-2 text-left hover:bg-gray-400"
            :disabled="scope.context.event.target.tagName === 'TD'"
            @click="
              insertColumn(
                cursor.selectedCell.columnIndex,
                scope.context,
                'left'
              )
            "
          >
            Add column left
          </button>
          <button
            class="block w-full p-2 text-left hover:bg-gray-400"
            :disabled="scope.context.event.target.tagName === 'TD'"
            @click="
              insertColumn(cursor.selectedCell.columnIndex, scope.context)
            "
          >
            Add column right
          </button>
        </slot>
      </template>
    </ContextMenu> -->
  </table>
</template>

<style scoped>
table {
  text-align: center;
  border-collapse: collapse;
  position: relative;
  table-layout: fixed;
  width: 100%;
}

table,
th,
td {
  border: 1px solid gray;
}
.datatable__index,
.datatable__header {
  user-select: none;
  background-color: rgb(235, 235, 235);
  @apply py-2 text-sm font-semibold uppercase tracking-wider text-gray-900;
}

.datatable__header:first-child {
  width: 3%;
}

button:disabled {
  @apply cursor-not-allowed italic text-gray-400;
}
</style>
