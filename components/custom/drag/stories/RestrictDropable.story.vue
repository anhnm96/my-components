<script>
import VDragDrop from '../DragItem.vue'
export default {
  components: { VDragDrop },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7],
      droplist: [],
      entering: false,
    }
  },
  methods: {
    dragstart(e) {
      const dataTransfer = JSON.parse(e.dataTransfer.getData('text'))
      console.log('dragstart', dataTransfer)
    },
    dragend() {
      this.entering = false
    },
    dragenter() {
      this.entering = true
    },
    dragleave() {
      this.entering = false
    },
    drop3({ from }) {
      this.droplist.push(from.value)
    },
  },
}
</script>

<template>
  <div>
    <VDragDrop
      v-for="i in items"
      :key="i"
      group="RestrictDropable"
      tag="span"
      :droppable="false"
      :data-transfer="{ value: i }"
      @dragstart="dragstart"
      @dragend="dragend"
    >
      <template #default="{ dragging }">
        <span class="drag" :class="{ ghost: dragging }">{{ i }}</span>
      </template>
      <template #drag-image="{ data }">
        <span v-show="!entering" class="drag">{{ data.value }}</span>
        <span v-show="entering" class="drag" style="border-radius: 50%"
          >DROP</span
        >
      </template>
    </VDragDrop>
    <VDragDrop
      :draggable="false"
      group="RestrictDropable"
      hover-class="hovering"
      class="copy"
      :accept-data="(val) => val.value % 2 === 0"
      @dragenter="dragenter"
      @dragleave="dragleave"
      @dropped="drop3"
    >
      <div style="pointer-events: none">
        <span v-for="i in droplist" :key="i">{{ i }}</span>
      </div>
    </VDragDrop>
  </div>
</template>

<style scoped>
.drag {
  width: 60px;
  height: 60px;
  background-color: rgb(220, 220, 255);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 0 10px;
  font-size: 20px;
  transition: all 0.5s;
}
.copy {
  margin: 20px 10px;
  border: 1px solid black;
  height: 100px;
  position: relative;
  flex: 1;
}
.copy::before {
  content: 'COPY';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.4);
  font-size: 25px;
  font-weight: bold;
}
.hovering {
  box-shadow: 0 0 2px 4px gray;
}

.drop-allowed {
  background-color: rgba(0, 255, 0, 0.2);
}

.drop-forbidden {
  background-color: rgba(255, 0, 0, 0.2);
}
</style>
