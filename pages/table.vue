<script lang="ts" setup>
import {
  cloneDeep,
  intersection,
  isEmpty,
  isEqual,
  isString,
  omitBy,
  pick,
} from 'lodash-es'
import { changeTracker } from '@/composables/useTracker'

interface Item {
  id: number
  cutpot: string
  origin: string
  family: string
  variety: string
  quantity: number
  note: string
}
const headers: (keyof Item)[] = [
  'cutpot',
  'origin',
  'family',
  'variety',
  'quantity',
  'note',
]

const dm = [
  {
    id: 1,
    cutpot: 'cut',
    origin: 'korea',
    family: 'rose',
    variety: 'amber',
    quantity: 111,
    note: 'memo',
  },
  {
    id: 2,
    cutpot: 'pot',
    origin: 'japan',
    family: 'rose',
    variety: 'pearl',
    quantity: 22,
    note: 'xzc',
  },
]
const panels = reactive([{ id: 1, items: dm }])
const PANEL_PROPS = [
  'title',
  'representative',
  'description',
  'items',
  'image',
  'items_order',
]
const items = ref<Item[]>(dm)
changeTracker.track(panels)
panels.forEach((i) => {
  changeTracker.track(i)
  i.items.forEach((f) => changeTracker.track(f))
})
const detail = ref()
changeTracker.track(items)
function changedProps() {
  detail.value = changeTracker.changedProps(items)
}

function changed() {
  detail.value = changeTracker.changed(items)
}

function getOriginal() {
  detail.value = changeTracker.getOriginal(items)
}

function update(index = 0) {
  const originalChanged = changeTracker.changed(panels[index])
  const changed = pick(originalChanged, PANEL_PROPS)
  // const alId = state.al.id
  const panel = panels[index]
  const panelId = panels[index].id

  if (isEmpty(changed) || !panel.id) {
    console.log({ panel, index })
    return { panel, index }
  }
  console.log('changed', changed)
  // Check change in items_order
  const originalItemsOrder = changeTracker.getOriginal(panels[index])
  const newItemsOrder = panel.items.map((item) =>
    item.id < 0 ? null : item.id
  )
  if (!isEqual(originalItemsOrder, newItemsOrder)) {
    changed.items_order = newItemsOrder
  }

  const payload = cloneDeep(changed)
  if (changed.items) {
    const productProps = ['family', 'variety', 'cutpot', 'origin']
    const items = []
    // Convert changed(created/updated) items to API-suitable format
    for (let i = 0; i < changed.items.length; i++) {
      const item = changed.items[i]
      if (item.id < 0) {
        // Remove id if creating item
        items.push(toItemForCreating(item))
        continue
      }
      // Only get changed field in item,
      // also ignored special fields starting with $
      const changedItem = omitBy(changeTracker.changed(item), (value, key) =>
        key.startsWith('$')
      )

      if (isEmpty(changedItem)) {
        continue
      }
      // If update 1 prop of product, need all required prop
      if (!isEmpty(intersection(Object.keys(changedItem), productProps))) {
        changedItem.family = item.family
        changedItem.variety = item.variety
        changedItem.cutpot = item.cutpot
        changedItem.origin = item.origin
      }
      changedItem.id = item.id
      items.push(changedItem)
    }

    payload.items = items
  }

  if (originalChanged.deletedItems) {
    originalChanged.deletedItems.forEach(({ id }: any) => {
      payload.items.push({ id, _delete: true })
    })
  }

  console.log('payload', payload)

  // let image
  // if ('image' in payload && payload.image) {
  //   image = payload.image
  //   payload.image = null
  // }
  // return api
  //   .patch(`/api/availabilitylists/${alId}/panels/${panelId}`, payload, {
  //     headers: RETURN_REP,
  //   })
  //   .then(async (res) => {
  //     if (image) {
  //       await dispatch('uploadPanelImage', { image, index, panelId })

  //       res.data.image = image
  //     }
  //     return { panel: res.data, index }
  //   })
}

function toItemForCreating(item: Item) {
  return omitBy(item, (value, key) => key === 'id' || key.startsWith('$'))
}
</script>

<template>
  <div>
    <div class="space-x-2">
      <button class="btn" @click="changedProps">Change Props</button>
      <button class="btn" @click="changed">Changed</button>
      <button class="btn" @click="getOriginal">Get Original</button>
      <button class="btn" @click="update()">Update</button>
    </div>
    <table>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td v-for="i in headers.length" :key="i">
          <!-- {{ item[headers[i - 1]] }} -->
          <input
            v-model="item[headers[Number(i) - 1]]"
            class="border"
            type="text"
          />
        </td>
      </tr>
    </table>
    {{ detail }}
  </div>
</template>

<style></style>
