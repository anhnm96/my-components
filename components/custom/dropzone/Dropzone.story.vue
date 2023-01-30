<script lang="ts" setup>
const files = ref<any>([])
function remove(index: number) {
  files.value.splice(index, 1)
  // this.resetInput()
}
</script>

<template>
  <Story title="Dropzone">
    <Dropzone v-model:files="files" class="bg-white">
      <div class="wrapper">
        <div v-for="(file, index) in files" :key="file.name" class="content">
          <img
            v-if="file.type.includes('image')"
            class="mx-1 h-20"
            :src="file.url"
            :alt="file.name"
          />
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p>{{ file.name }}</p>
          <button class="relative bg-red-400" @click.stop="remove(index)">
            Remove
          </button>
        </div>
      </div>
    </Dropzone>
  </Story>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: flex-end;
  flex-flow: row wrap;
  background: white;
}
.wrapper .content {
  flex: 0 0 100px;
}
.wrapper p {
  text-overflow: ellipsis;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
}
</style>
