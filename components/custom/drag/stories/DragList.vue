<script lang="ts" setup>
import DragList from '../DragList.vue'

const list = ref([
  'vue',
  'ReactiveX',
  'Drag and Drop',
  'react',
  'preact',
  'golang',
  'docker',
])

const items = ref([1, 2, 3, 4, 5, 6, 7])
</script>

<template>
  <div class="flex">
    <div>
      <p>Drag with handle</p>
      <DragList v-model:list="list" handle=".handle">
        <template #default="{ item, index }">
          <p class="p-2 font-normal shadow">
            <button class="handle">&#9776;</button>
            <span class="p-2">{{ item }} - {{ index }}</span>
          </p>
        </template>
        <template #placeholder-move>
          <div style="border: 1px solid green; height: 1px" />
        </template>
        <template #placeholder-add>
          <div style="border: 1px solid green; height: 1px" />
        </template>
      </DragList>
    </div>
    <div>
      <p>&nbsp;placeholder move & add |</p>
      <DragList v-model:list="items">
        <template #default="{ item, index, gg }">
          <p class="p-2 font-normal shadow">
            {{ item }} - {{ index }} {{ gg }}
          </p>
        </template>
        <template #placeholder-move> moving </template>
        <template #placeholder-add="{ data }">
          {{ data.value }}
        </template>
      </DragList>
    </div>
    <div>
      <p>&nbsp;placeholder add only |</p>
      <DragList v-model:list="list" mode="cut" name="fade">
        <template #default="{ item, index }">
          <p class="p-2 font-normal shadow">{{ item }} - {{ index }}</p>
        </template>
        <template #placeholder-add>
          <p class="p-2 font-normal shadow">test</p>
        </template>
      </DragList>
    </div>
    <div>
      <p>&nbsp;Placeholder move only |</p>
      <DragList v-model:list="list">
        <template #default="{ item, index, inProgress }">
          <p class="p-2 font-normal shadow" :class="{ ghost: inProgress }">
            {{ item }} - {{ index }}
          </p>
        </template>
        <template #placeholder-move="{ data }">
          <p
            class="border-light-blue-500 border-2 border-dashed p-2 font-normal shadow"
          >
            {{ data.value }} - {{ data.index }}
          </p>
        </template>
        <!-- <template #drag-image="{data, width, height}">
                <p class="p-2 font-normal shadow border-2 border-green-300 rounded-md" :style="{width: width + 6 + 'px', height: height + 6 +'px'}">
                  :)) - {{ data.value }}
                </p>
              </template> -->
      </DragList>
    </div>
    <div>
      <p>&nbsp;drag image |</p>
      <DragList
        v-model:list="items"
        :accept-data="({ value }) => typeof value === 'number'"
      >
        <template #default="{ item, index }">
          <p class="p-2 font-normal shadow">{{ item }} - {{ index }}</p>
        </template>
        <template #placeholder-move>
          <p class="p-2 font-normal shadow">move</p>
        </template>
        <template #placeholder-add="{ data }">
          <p class="p-2 font-normal shadow">
            {{ data.value }}
          </p>
        </template>
        <template #drag-image>
          <p class="p-2 font-normal shadow">hehe</p>
        </template>
      </DragList>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0 !important;
}
</style>
