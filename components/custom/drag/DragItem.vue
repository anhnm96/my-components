<script lang="ts" setup>
import { throttle } from 'lodash-es'
import { DnDState } from './DnDStore'
const props = withDefaults(
  defineProps<{
    /**
     * defines html tag
     */
    as?: string
    /**
     * enable/disable drag
     */
    draggable?: boolean
    /**
     * enable/disable drop
     */
    droppable?: boolean
    dataTransfer?: Record<string, any>
    dropEffect?: 'copy' | 'move' | 'link' | 'none'
    effectsAllowed?:
      | 'none'
      | 'copy'
      | 'copyLink'
      | 'copyMove'
      | 'link'
      | 'linkMove'
      | 'move'
      | 'all'
      | 'uninitialized'
    /** hover class for drop component */
    hoverClass?: string
    /** drag handle selector */
    handle?: string
    /** trigger dragenter selector */
    triggerMove?: string
    group?: string
    /** validate transferData function for drop component */
    acceptData?: Function
    /** class for drop component if accepts dragging element */
    allowClass?: string
    /** class for drop component if not accepts dragging element */
    forbiddenClass?: string
  }>(),
  {
    as: 'div',
    draggable: true,
    droppable: true,
    dropEffect: 'move',
    effectsAllowed: 'move',
    hoverClass: 'drop-hover',
    acceptData: () => {},
    allowClass: 'drop-allowed',
    forbiddenClass: 'drop-forbidden',
  }
)
const emit = defineEmits(['dropped'])
const slots = useSlots()
const el = ref<HTMLElement>()
const dragging = ref(false)
const dragImageEl = ref<HTMLElement>()
const hasDragImageSlot = Object.keys(slots).includes('drag-image')
const width = ref(0)
const height = ref(0)
// handle's stuffs
let handleEl: HTMLElement | null
const handleLock = ref(false)
function handleMouseDown() {
  handleLock.value = false
}

function handleMouseUp() {
  handleLock.value = true
}
let triggerEl: HTMLElement | null
onMounted(() => {
  // for drag-image slot
  const rect = el.value!.getBoundingClientRect()
  width.value = rect.width
  height.value = rect.height
  // handle
  if (props.triggerMove) {
    triggerEl = el.value!.querySelector(props.triggerMove)
  }
  // handle handle
  if (props.handle) {
    handleLock.value = true
    handleEl = el.value!.querySelector(props.handle)
    handleEl?.addEventListener('mousedown', handleMouseDown)
    handleEl?.addEventListener('mouseup', handleMouseUp)
  }
})
onBeforeUnmount(() => {
  // it's ok if handlEl was removed before removeEventlistener
  // leave garbage collector to do the job
  handleEl?.removeEventListener('mousedown', handleMouseDown)
  handleEl?.removeEventListener('mouseup', handleMouseUp)
})

const dataAllowed = computed(() => {
  return props.acceptData(DnDState.data)
})

// class style during dragging for drop components
const clazz = computed(() => {
  if (!DnDState.inProgress || !props.droppable) return null
  if (DnDState.group !== props.group) return null
  if (dataAllowed.value === undefined) return null
  return {
    [props.allowClass]: dataAllowed.value,
    [props.forbiddenClass]: !dataAllowed.value,
  }
})

const documentDragover = throttle((e: DragEvent) => {
  e.preventDefault()

  if (!dragImageEl.value) {
    return
  }
  dragImageEl.value!.style.left = `${e.clientX}px`
  dragImageEl.value!.style.top = `${e.clientY}px`
  // fix bug on firefox: drag event always return mouse position 0, 0
  // https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  el.value!.dispatchEvent(new MouseEvent('customdrag', e))
}, 20)

function dragstart(e: DragEvent) {
  dragging.value = true

  Object.assign(DnDState, {
    ref: el.value,
    inProgress: true,
    data: props.dataTransfer,
    group: props.group,
    success: false,
  })
  if (hasDragImageSlot) {
    // add dragover event for handling drag image position compatible with firefox
    // and prevent drag end move back animation when drop outside of dropable element
    nextTick(() => {
      dragImageEl.value!.style.position = 'fixed'
      dragImageEl.value!.style.transform = 'translate(-50%, -50%)'
      document.addEventListener('dragover', documentDragover)
    })
    // remove default drag image
    // BUG in safari: must use empty GIF image instead of creating a div element or safari will fire dragend immediately
    const defaultImg = new Image()
    defaultImg.src =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' // transparent gif, resolves issue with Safari that otherwise does not allow dragging
    defaultImg.style.visibility = 'hidden'
    e.dataTransfer?.setDragImage(defaultImg, 0, 0)
  }
  if (!e.dataTransfer) return
  e.dataTransfer.effectAllowed = props.effectsAllowed
  e.dataTransfer.dropEffect = props.dropEffect
  e.dataTransfer.setData('text', JSON.stringify(props.dataTransfer))
}
function dragenter(e: DragEvent) {
  if (triggerEl && !triggerEl.contains(e.target as Node)) {
    return
  }
  if (
    !props.droppable ||
    dataAllowed.value === false ||
    DnDState.group !== props.group
  )
    return
  // use dispatchEvent because emit causes laggy
  el.value?.dispatchEvent(
    new CustomEvent('dragentered', {
      detail: { event: e, ...props.dataTransfer, ref: el.value },
    })
  )
  // only add hoverClass on droppable components
  if (props.droppable) el.value?.classList.add(props.hoverClass)
}

function dragleave() {
  if (props.droppable) {
    // remove hover class
    // optional value in case of placeholder in drag list disappear
    el.value?.classList.remove(props.hoverClass)
  }
}

function drop(e: DragEvent) {
  if (
    !props.droppable ||
    dataAllowed.value === false ||
    DnDState.group !== props.group
  )
    return
  Object.assign(DnDState, { success: true })
  // remove hover class
  el.value!.classList.remove(props.hoverClass)
  let dataTransfer = e.dataTransfer?.getData('text')
  if (dataTransfer) dataTransfer = JSON.parse(dataTransfer)
  /** drop event */
  emit('dropped', { event: e, from: dataTransfer, to: props.dataTransfer })

  document.removeEventListener('dragover', documentDragover)
}

function dragend() {
  if (handleEl) {
    handleLock.value = true
  }
  dragging.value = false
  Object.assign(DnDState, {
    inProgress: false,
    data: null,
    group: null,
    ref: null,
    dropdId: '',
  })
  if (hasDragImageSlot)
    document.removeEventListener('dragover', documentDragover)
}
</script>

<template>
  <component
    :is="as"
    ref="el"
    class="drag-container"
    :class="clazz"
    :draggable="draggable && !handleLock"
    @dragstart.self="dragstart"
    @dragenter.prevent="dragenter"
    @dragover.prevent
    @dragleave="dragleave"
    @drop="drop"
    @dragend="dragend"
  >
    <!--
      @slot default
      @binding dragging item is being dragged status
     -->
    <slot :dragging="dragging" />
    <div
      v-if="dragging && hasDragImageSlot"
      ref="dragImageEl"
      class="drag-image"
    >
      <!--
        @slot drag-image
        @binding data dataTransfer passed as props
        @binding width width of the element
        @binding height height of the element
       -->
      <slot
        name="drag-image"
        :data="dataTransfer"
        :width="width"
        :height="height"
      />
    </div>
  </component>
</template>

<style scoped>
/* check has drag-image slot. set container relative then .drag-image absolute */
.drag-image {
  position: absolute;
  top: 0;
  left: 0;
  will-change: top, left;
  z-index: 999;
  pointer-events: none;
}
</style>
