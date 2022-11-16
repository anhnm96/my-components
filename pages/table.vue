<script lang="ts" setup>
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

const items = ref<Item[]>([
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
])

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
</script>

<template>
  <div>
    <div class="space-x-2">
      <button class="btn" @click="changedProps">Change Props</button>
      <button class="btn" @click="changed">Changed</button>
      <button class="btn" @click="getOriginal">Get Original</button>
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
