<script lang="ts" setup>
import { useCheckbox } from './useCheckbox'

const scholars = [
  {
    id: '0f436c70ad54433ab25d17a6e07e5a1c',
    displayName: 'Ngô Văn Lợi',
    dateOfBirth: null,
    game: 'Axie',
    playTimes: '3 tháng',
    playTimes2: '2-3 tiếng/ngày',
    photoURL: null,
  },
  {
    id: '10c380d69c4b4a0c92d997b725d1783e',
    displayName: 'Nguyễn Bá Nam',
    dateOfBirth: null,
    game: 'Axie',
    playTimes: '3 tháng',
    playTimes2: '2-3 tiếng/ngày',
    photoURL: null,
  },
  {
    id: '1105309096564ba7af51ee3567f0f023',
    displayName: 'Lê Tấn Sang',
    dateOfBirth: null,
    game: 'Axie',
    playTimes: '3 tháng',
    playTimes2: '2-3 tiếng/ngày',
    photoURL: null,
  },
  {
    id: '184fbdeae7f341d0b43b9362b5d3399e',
    displayName: 'Do quang huy',
    dateOfBirth: null,
    game: 'Axie',
    playTimes: '3 tháng',
    playTimes2: '2-3 tiếng/ngày',
    photoURL: null,
  },
  {
    id: '0f436c70ad54433ab25d17a61e07e5a1c',
    displayName: 'Ngô Văn Lợi',
    dateOfBirth: null,
    game: 'Axie',
    playTimes: '3 tháng',
    playTimes2: '2-3 tiếng/ngày',
    photoURL: null,
  },
  {
    id: '10c380d69c4b43a0c92d997b725d1783e',
    displayName: 'Nguyễn Bá Nam',
    dateOfBirth: null,
    game: 'Axie',
    playTimes: '3 tháng',
    playTimes2: '2-3 tiếng/ngày',
    photoURL: null,
  },
  {
    id: '11053090965464ba7af51ee3567f0f023',
    displayName: 'Lê Tấn Sang',
    dateOfBirth: null,
    game: 'Axie',
    playTimes: '3 tháng',
    playTimes2: '2-3 tiếng/ngày',
    photoURL: null,
  },
  {
    id: '184fbdeae7f3451d0b43b9362b5d3399e',
    displayName: 'Do quang huy',
    dateOfBirth: null,
    game: 'Axie',
    playTimes: '3 tháng',
    playTimes2: '2-3 tiếng/ngày',
    photoURL: null,
  },
]

const { isAllChecked, checkAll, isRowChecked, checkRow, hasSelected } =
  useCheckbox(ref(scholars))

const columns = [
  {
    name: 'User',
    width: 'auto',
  },
  {
    name: 'Discord',
    width: 'w-[166px]',
  },
  {
    name: 'Game',
    width: 'w-[87px]',
  },
  {
    name: 'Date of birth',
    width: 'w-[124px]',
  },
  {
    name: 'Game experiences',
    width: 'w-[170px]',
  },
  {
    name: 'Phone',
    width: 'w-[124px]',
  },
  {
    name: 'Action',
    width: 'w-[129px]',
  },
]
</script>

<template>
  <Story title="Checkbox">
    <Variant title="Simple demo">
      <div class="space-x-4 px-4 py-2 text-white">
        <label class="space-x-2">
          <input type="checkbox" indeterminate />
          <span>Indeterminate</span>
        </label>
        <label class="space-x-2">
          <input type="checkbox" disabled />
          <span>Disabled</span>
        </label>
        <label class="space-x-2">
          <input type="checkbox" style="--background: var(--success)" />
          <span>Normal</span>
        </label>
      </div>
    </Variant>
    <Variant title="Table Selection">
      <div class="rounded-lg text-white">
        <table class="w-full text-sm" style="table-layout: auto">
          <thead>
            <tr>
              <th class="pl-6 pr-4">
                <input
                  class="inline-block h-[18px] w-[18px]"
                  type="checkbox"
                  :indeterminate="hasSelected && !isAllChecked"
                  :checked="isAllChecked"
                  @change="checkAll"
                />
              </th>
              <th
                v-for="column in columns"
                :key="column.name"
                class="px-[18px] py-[15px] text-left font-normal last:text-right first-of-type:!pl-6 last-of-type:!pr-6"
                :class="column.width"
              >
                {{ column.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(scholar, index) in scholars" :key="scholar.id">
              <td class="pl-6 pr-4 text-center">
                <input
                  class="h-[18px] w-[18px]"
                  type="checkbox"
                  :checked="isRowChecked(scholar)"
                  @click="checkRow(scholar, index, $event)"
                />
              </td>
              <td class="px-6 py-[21px]">
                <div class="flex space-x-4">
                  <div
                    v-if="!scholar.photoURL"
                    class="grid h-12 w-12 place-items-center rounded-full bg-green-400"
                  >
                    <span class="text-lg font-semibold text-white">{{
                      scholar.displayName.slice(0, 1)
                    }}</span>
                  </div>
                  <img
                    v-else
                    :src="scholar.photoURL"
                    class="h-12 w-12 rounded-full"
                    aria-hidden="true"
                  />
                  <p
                    class="flex max-w-[25ch] items-center truncate text-lg font-medium"
                  >
                    {{ scholar.displayName }}
                  </p>
                </div>
              </td>
              <td class="px-4.5">Mike. JAK#0812</td>
              <td class="px-4.5 w-[136px]">
                {{ scholar.game }}
              </td>
              <td class="px-4.5 w-[88px]">Jan 01, 1997</td>
              <td class="px-4.5 w-[269px]">
                <p>Played time</p>
                <p>2310</p>
              </td>
              <td class="px-4.5 w-[141px]">0933423847</td>
              <td class="pr-6">
                <button
                  type="button"
                  class="ml-auto grid h-9 w-9 place-items-center rounded-xl border-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Variant>
  </Story>
</template>
