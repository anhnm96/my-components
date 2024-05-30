<script>
export default {
  props: {
    items: Array,
  },
  emits: ['input'],
  setup(props, { emit }) {
    const $columns = inject('$columns')
    const $cursor = inject('$cursor')
    const item = computed(() => props.items[$cursor.selectedCell.rowIndex])
    const column = computed(() => $columns[$cursor.selectedCell.columnIndex])
    const cell = computed(() => item.value[column.value.name])
    const internalValue = ref(item.value[column.value.name])
    watch(
      $cursor.selectedCell,
      () => {
        internalValue.value = item.value[column.value.name]
      },
      { flush: 'post' },
    )
    function updateInternalValue(value) {
      internalValue.value = value
    }

    const editingCell = reactive({
      rowIndex: $cursor.selectedCell.rowIndex,
      columnIndex: $cursor.selectedCell.columnIndex,
    })

    watch($cursor.editing, (newVal) => {
      if (newVal) {
        editingCell.rowIndex = $cursor.selectedCell.rowIndex
        editingCell.columnIndex = $cursor.selectedCell.columnIndex
      } else {
        emit('input', {
          rowIndex: editingCell.rowIndex,
          column: $columns[editingCell.columnIndex],
          value: internalValue.value,
        })
      }
    })

    // Re-focus CellCursor if cursor updated. This is to allow interact with keyboard
    const cursorRef = ref(null)
    watch($cursor.selectedCell, async () => {
      $cursor.editing.value = false
      // Make sure the browser has finished painting updated style
      requestAnimationFrame(() => {
        cursorRef.value.focus()
      })
    })
    // Turn off edit mode when select autocomplete, clickoutside
    const clickOutSide = (event) => {
      // Because we've set pointer-events: none. Click on current
      // cell will trigger td element instead
      // so we should return in this case
      if (
        Number(event.target.dataset.columnIndex) ===
          $cursor.selectedCell.columnIndex &&
        Number(event.target.dataset.rowIndex) === $cursor.selectedCell.rowIndex
      )
        return
      setEditMode(false)
    }

    // if click on header, footer need to refocus cursor
    // watch($cursor.containerElementRef, () => $cursor.containerElementRef.value.addEventListener('click', () => console.log(cursorRef.value)))

    // style
    const td = computed(() => {
      return $cursor.containerElementRef.value?.querySelector(
        `.cell-${$cursor.selectedCell.rowIndex}-${$cursor.selectedCell.columnIndex}`,
      )
    })
    const cursorStyle = computed(() => {
      // Hide the cell when cursor is not on any cell yet
      if (!td.value) {
        return {
          display: 'none',
        }
      }
      return {
        // + 2px for border
        width: `${td.value.offsetWidth + 2}px`,
        height: `${td.value.offsetHeight + 2}px`,
        top: `${td.value.offsetTop}px`,
        left: `${td.value.offsetLeft - 1}px`,
      }
    })

    const inputStyle = computed(() => {
      // Hide the cell when cursor is not on any cell yet
      if (!td.value) {
        return {
          display: 'none',
        }
      }
      return {
        // - 2px for border
        width: `${td.value.offsetWidth - 2}px`,
        height: `${td.value.offsetHeight - 2}px`,
        'padding-left': '1px',
        'padding-right': '1px',
      }
    })
    // Focus input when $cursor.editing is true
    watch($cursor.editing, async (value) => {
      if (value) {
        nextTick(() => {
          const input = cursorRef.value.querySelector('input')
          if (input) {
            for (const i of Object.keys(inputStyle.value)) {
              input.style[i] = inputStyle.value[i]
            }
            if (document.activeElement !== input) input.focus()
          }
        })
      }
    })

    // handle keyboard
    function setEditMode(state) {
      $cursor.editing.value = state
    }

    function setupNavigation({ items, columns }, setEditMode) {
      function onKeyDown(event) {
        // We do not want to alter behavior of most keys while in edit mode.
        // Only except:
        // + Tab: to move cursor to right/left cell
        // + Enter: to move cursor to below cell
        // + Esc: to exit edit mode
        if (
          $cursor.editing.value &&
          !(
            event.key === 'Tab' ||
            event.key === 'Enter' ||
            event.key === 'Escape'
          )
        ) {
          return
        }

        // Do not intercept any key combination with modifier
        if (event.ctrlKey || event.altKey || event.metaKey) return

        // Character key events should not be prevented so user could start typing
        // when cell is not in edit mode
        if (event.key.length === 1) {
          // If the cell is not in editing mode
          if (!$cursor.editing.value) {
            // Then enable it after first character has successfully been typed in
            // setTimeout(() => setEditMode(true));
            setEditMode(true)
          }
          return
        }

        // Prevent default behavior of all keys
        event.preventDefault()

        navigateFromEvent(event)
      }

      function navigateFromEvent(event) {
        switch (event.key) {
          case 'Enter':
            // Integrate with vuetify's menuable component
            // Do not handle Enter if the menuable component is showing while in edit mode
            // if (
            //   cursor.editing &&
            //   document.querySelector(".v-menu__content.menuable__content__active")
            // ) {
            //   break;
            // }

            if (!$cursor.editing.value) {
              // If not in edit mode, enable edit mode
              setEditMode(true)
            } else {
              // If in edit mode, move cursor down
              const cursorMoved = moveCursorDown({ force: true })
              // If the cursor wasn't moved (i.e., cursor at last line), manually disable edit mode
              if (!cursorMoved) setEditMode(false)
            }
            break
          case 'ArrowDown':
            moveCursorDown()
            break
          case 'ArrowUp':
            moveCursorUp()
            break
          case 'ArrowRight':
            moveCursorRight()
            break
          case 'ArrowLeft':
            moveCursorLeft()
            break
          case 'F2':
            setEditMode(true)
            break
          case 'Escape':
            setEditMode(false)
            break
          case 'Tab':
            // Ignore Alt+Tab or Ctrl+Tab
            if (event.ctrlKey || event.altKey) break

            if (!event.shiftKey) {
              moveCursorRight({ force: true, nextLineOnEnd: true })
            } else {
              moveCursorLeft({ force: true, prevLineOnStart: true })
            }
            break
          default:
            break
        }
      }

      function moveCursorRight({ force = false, nextLineOnEnd = false } = {}) {
        if ($cursor.editing.value && !force) return
        const nextIndex = $cursor.selectedCell.columnIndex + 1
        if (columns.length > nextIndex) {
          $cursor.selectedCell.columnIndex = nextIndex
        } else if (nextLineOnEnd) {
          if (moveCursorDown({ force })) {
            $cursor.selectedCell.columnIndex = 0
          }
        }
      }

      function moveCursorLeft({ force = false, prevLineOnStart = false } = {}) {
        if ($cursor.editing.value && !force) return
        const prevIndex = $cursor.selectedCell.columnIndex - 1
        if (prevIndex >= 0) {
          $cursor.selectedCell.columnIndex = prevIndex
        } else if (prevLineOnStart) {
          if (moveCursorUp({ force })) {
            $cursor.selectedCell.columnIndex = columns.length - 1
          }
        }
      }

      function moveCursorDown({ force = false } = {}) {
        if ($cursor.editing.value && !force) return false
        const nextIndex = $cursor.selectedCell.rowIndex + 1
        if (items.length > nextIndex) {
          $cursor.selectedCell.rowIndex = nextIndex
          return true
        }

        return false
      }

      /**
       * Move the cursor up
       * @returns {boolean}
       */
      function moveCursorUp({ force = false } = {}) {
        if ($cursor.editing.value && !force) return false
        const prevIndex = $cursor.selectedCell.rowIndex - 1
        if (prevIndex >= 0) {
          $cursor.selectedCell.rowIndex = prevIndex
          return true
        }
        return false
      }

      return { onKeyDown }
    }
    const { onKeyDown } = setupNavigation(
      { items: props.items, columns: $columns },
      setEditMode,
    )
    // Chrome cannot perform @paste event on element has `user-select: none`
    // so we need to manually select element to enable @paste event
    // https://stackoverflow.com/questions/31207253/onpaste-paste-event-not-firing-for-table-on-first-few-attempts
    onMounted(() => {
      const selection = window.getSelection()
      const range = document.createRange()
      range.selectNodeContents(cursorRef.value)
      selection.removeAllRanges()
      selection.addRange(range)
    })
    return {
      setEditMode,
      clickOutSide,
      blur,
      item,
      column,
      cell,
      cursorRef,
      cursorStyle,
      editing: $cursor.editing,
      onKeyDown,
      rowIndex: $cursor.selectedCell.rowIndex,
      internalValue,
      updateInternalValue,
    }
  },
}
</script>

<template>
  <div
    ref="cursorRef"
    v-click-outside="clickOutSide"
    class="cursor"
    tabindex="0"
    :style="cursorStyle"
    @keydown="onKeyDown"
    @dblclick="setEditMode(true)"
  >
    <slot
      v-if="editing"
      :name="`cell-input-${column.name}`"
      :item="item"
      :column="column"
      :row-index="rowIndex"
      :cell="internalValue"
      :on-input="updateInternalValue"
    >
      <input
        type="text"
        class="cell-input"
        :value="internalValue"
        @input="updateInternalValue($event.target.value)"
      />
    </slot>
  </div>
</template>

<style scoped>
.cursor {
  position: absolute;
  border: 2px solid rgb(124, 179, 66);
  outline: none;
  /* // pointer-events: none;
  // & > ::v-deep * {
  //   pointer-events: initial;
  // } */
}
</style>
