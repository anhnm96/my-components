import { reactive } from 'vue'

const DnDState = reactive({
  ref: null,
  inProgress: false,
  data: null,
  group: null,
  success: false,
  dropId: '',
})
const DragListState = reactive({ id: '' })
export { DnDState, DragListState }
