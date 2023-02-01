import { reactive } from 'vue'

const DnDState = reactive<{
  ref: HTMLElement | null
  inProgress: boolean
  data: any
  group: any
  success: boolean
  dropId: string
}>({
  ref: null,
  inProgress: false,
  data: null,
  group: null,
  success: false,
  dropId: '',
})
const DragListState = reactive({ id: '' })
export { DnDState, DragListState }
