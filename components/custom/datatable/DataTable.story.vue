<script>
import { countries, items as dataItems } from './items'
import DataTable from './DataTable.vue'
export default {
  components: { DataTable },
  setup() {
    const columns = ref([
      { name: 'cutpot' },
      { name: 'origin' },
      { name: 'family', required: true, rules: 'required' },
      { name: 'variety', required: true, rules: 'required' },
      { name: 'color' },
      {
        name: 'quantity',
        required: true,
        rules: 'required',
        type: 'number',
        help: 'Sll',
      },
      { name: 'unit', help: 'Bn cay' },
      { name: 'grade' },
      { name: 'price', required: true, rules: 'required', help: 'Gia' },
      { name: 'note', help: 'Note ne' },
    ])
    const items = ref(dataItems)
    const onTableInput = ({ rowIndex, column, value }) => {
      console.log('update', items.value.length, rowIndex)
      items.value[rowIndex][column.name] = value
    }

    const insertRow = (rowIndex, context) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      items.value.splice(rowIndex, 0, dumpItem)
      context.show = false
    }
    return {
      countries,
      columns,
      items,
      onTableInput,
      insertRow,
      reactive,
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
  <Story title="Datatable">
    <div class="min-h-screen bg-white">
      <!-- @keydown.stop to prevent storybook behavior in demo -->
      <DataTable
        v-model:items="items"
        :columns="columns"
        @keydown.stop
        @on-input="onTableInput"
      >
        <template #cell-input-origin="{ cell, onInput }">
          <Autocomplete
            :input="cell"
            :options="countries"
            :use-filter="true"
            @update:input="onInput"
          />
        </template>
        <!-- <template #context-menu="{ cursor, context }">
          <p
            class="p-2 hover:bg-gray-400"
            @click="insertRow(cursor.rowIndex.value, context)"
          >
            Add row above
          </p>
          <p
            class="p-2 hover:bg-gray-400"
            @click="insertRow(cursor.rowIndex.value + 1, context)"
          >
            Add row below
          </p>
        </template> -->
      </DataTable>
    </div>
  </Story>
</template>

<style scoped>
table {
  text-align: center;
  border-collapse: collapse;
  position: relative;
}

table,
th,
td {
  border: 1px solid gray;
}
</style>
