var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { aB as defineComponent, aC as ref, aJ as computed, aK as watch, aL as nextTick, aM as resolveDirective, au as openBlock, aA as createElementBlock, aN as withDirectives, aO as vModelText, aw as createBaseVNode, aP as mergeProps, aQ as withKeys, aR as withModifiers, aH as normalizeClass, aS as normalizeStyle, aT as Fragment, aU as renderList, aD as renderSlot, aE as toDisplayString, aF as createCommentVNode, aV as inject, aW as onMounted, aX as throttle, aY as getCurrentInstance, aZ as reactive, a_ as provide, a$ as useRefHistory, av as createVNode, at as withCtx, b0 as createSlots, as as createBlock, ax as createTextVNode, b1 as normalizeProps, b2 as guardReactiveProps, ay as pushScopeId, az as popScopeId, ar as resolveComponent } from "./vendor-7d4065c6.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
import { _ as __nuxt_component_0$2 } from "./DragList-a36791bb.js";
import "./DragItem-478af94c.js";
const Autocomplete_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = defineComponent({
  name: "Autocomplete",
  inheritAttrs: false,
  props: {
    containerClass: {
      type: String,
      default: ""
    },
    menuClass: {
      type: String,
      default: "shadow mt-2 bg-white"
    },
    options: {
      type: Array,
      default: () => []
    },
    optionAdapter: {
      type: Function,
      default: (value) => ({
        id: value,
        label: value,
        value
      })
    },
    input: {
      type: String,
      default: void 0
    },
    selected: {
      type: [Array, String, Number, Object],
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    blurOnSelect: {
      type: Boolean,
      default: false
    },
    useFilter: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Function,
      default: (keyword, item) => item.label.toLowerCase().includes(keyword.toLowerCase())
    }
  },
  emits: ["update:input", "update:selected", "select"],
  setup(props, { emit }) {
    const timeId = Date.now();
    const show = ref(false);
    const inputEl = ref();
    const isDirty = ref(false);
    const hoverIndex = ref(0);
    const localInput = ref("");
    const useLocalValue = props.input === void 0;
    const inputValue = computed({
      set: (value) => {
        isDirty.value = true;
        if (props.useFilter)
          hoverIndex.value = 0;
        useLocalValue ? localInput.value = value : emit("update:input", value);
      },
      get: () => {
        return useLocalValue ? localInput.value : props.input;
      }
    });
    function close() {
      show.value = false;
      isDirty.value = false;
    }
    const dropdownEl = ref();
    function keyboardNavigate(direction) {
      if (show.value) {
        const step = direction === "down" ? 1 : -1;
        let nextIndex = hoverIndex.value + step;
        if (nextIndex >= props.options.length)
          nextIndex = props.options.length - 1;
        else if (nextIndex < 0)
          nextIndex = 0;
        hoverIndex.value = nextIndex;
        const list = dropdownEl.value.querySelector(".dropdown-content");
        const element = list.querySelectorAll("li:not(.is-disabled)")[nextIndex];
        if (!element)
          return;
        const visMin = list.scrollTop;
        const visMax = list.scrollTop + list.clientHeight - element.clientHeight;
        if (element.offsetTop < visMin) {
          list.scrollTop = element.offsetTop;
        } else if (element.offsetTop >= visMax) {
          list.scrollTop = element.offsetTop - list.clientHeight + element.clientHeight;
        }
      } else {
        show.value = true;
      }
    }
    const isListInViewportVertically = ref(true);
    function calcDropdownInViewportVertical() {
      nextTick(() => {
        if (dropdownEl.value === void 0)
          return;
        const rect = dropdownEl.value.getBoundingClientRect();
        isListInViewportVertically.value = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      });
    }
    watch(show, (newVal) => {
      if (newVal) {
        calcDropdownInViewportVertical();
      }
    });
    const adaptedSelects = computed(() => {
      return props.selected.map(
        (selectedOpt) => props.optionAdapter(selectedOpt)
      );
    });
    const adaptedOptions = computed(() => {
      if (!props.multiple)
        return props.options.map((option) => props.optionAdapter(option));
      return props.options.map((option) => {
        const adaptedOption = props.optionAdapter(option);
        adaptedOption.selected = adaptedSelects.value.some(
          (i) => i.id === adaptedOption.id
        );
        return adaptedOption;
      });
    });
    const filteredOptions = computed(() => {
      if (!props.useFilter || !isDirty.value)
        return adaptedOptions.value;
      return adaptedOptions.value.filter(
        (i) => props.filter(inputValue.value, i)
      );
    });
    function select(item) {
      let payload;
      if (props.multiple) {
        payload = [...props.selected];
        const foundIndex = adaptedSelects.value.length > 0 ? adaptedSelects.value.findIndex((i) => i.id === item.id) : -1;
        if (foundIndex > -1) {
          payload.splice(foundIndex, 1);
        } else {
          payload.push(item.value);
        }
      } else {
        inputValue.value = item.label;
        payload = item.value;
        if (props.blurOnSelect)
          inputEl.value.blur();
        else
          inputEl.value.focus();
        close();
      }
      emit("update:selected", payload);
      emit("select", item.value);
    }
    function safeSalect(item) {
      if (show.value) {
        select(item);
      }
    }
    return {
      timeId,
      show,
      inputEl,
      inputValue,
      close,
      hoverIndex,
      dropdownEl,
      keyboardNavigate,
      calcDropdownInViewportVertical,
      isListInViewportVertically,
      adaptedOptions,
      filteredOptions,
      select,
      safeSalect
    };
  }
});
const _hoisted_1$5 = ["aria-expanded", "aria-owns"];
const _hoisted_2$1 = ["aria-controls", "aria-activedescendant"];
const _hoisted_3$1 = ["id"];
const _hoisted_4$1 = ["id", "aria-selected", "onMouseenter"];
const _hoisted_5 = ["onClick"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createElementBlock("div", {
    role: "combobox",
    "aria-expanded": _ctx.show,
    "aria-owns": `VAutocomplete__${_ctx.timeId}--listbox`,
    "aria-haspopup": "listbox",
    class: normalizeClass(["relative", _ctx.containerClass])
  }, [
    withDirectives(createBaseVNode("input", mergeProps({
      ref: "inputEl",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.inputValue = $event),
      type: "text",
      autocomplete: "off",
      "aria-autocomplete": "list",
      "aria-controls": `VAutocomplete__${_ctx.timeId}--listbox`,
      "aria-activedescendant": `VAutocomplete__${_ctx.timeId}--opt${_ctx.hoverIndex}`
    }, _ctx.$attrs, {
      onKeyup: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.show = false, ["prevent"]), ["esc"])),
      onKeydown: [
        _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => _ctx.keyboardNavigate("down"), ["prevent"]), ["down"])),
        _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => _ctx.keyboardNavigate("up"), ["prevent"]), ["up"])),
        _cache[4] || (_cache[4] = withKeys(($event) => _ctx.safeSalect(_ctx.filteredOptions[_ctx.hoverIndex]), ["enter"])),
        _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => _ctx.safeSalect(_ctx.filteredOptions[_ctx.hoverIndex]), ["prevent"]), ["tab"]))
      ],
      onFocus: _cache[6] || (_cache[6] = ($event) => _ctx.show = true),
      onClick: _cache[7] || (_cache[7] = ($event) => _ctx.show = true)
    }), null, 16, _hoisted_2$1), [
      [vModelText, _ctx.inputValue]
    ]),
    _ctx.show ? withDirectives((openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        ref: "dropdownEl",
        class: normalizeClass(["absolute z-50 w-full", [_ctx.menuClass]]),
        style: normalizeStyle({ bottom: !_ctx.isListInViewportVertically ? "100%" : "" })
      },
      [
        createBaseVNode("ul", {
          id: `VAutocomplete__${_ctx.timeId}--listbox`,
          role: "listbox",
          class: "dropdown-content"
        }, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.filteredOptions, (item, index) => {
              return openBlock(), createElementBlock("li", {
                id: `VAutocomplete__${_ctx.timeId}--opt${index}`,
                key: index,
                role: "option",
                "aria-selected": index === _ctx.hoverIndex,
                onMouseenter: ($event) => _ctx.hoverIndex = index
              }, [
                renderSlot(_ctx.$slots, "option", {
                  item,
                  isActive: index === _ctx.hoverIndex,
                  select: _ctx.select,
                  close: _ctx.close
                }, () => [
                  createBaseVNode("div", {
                    class: normalizeClass(["block cursor-pointer select-none truncate px-4 py-2 text-left text-sm", [
                      index === _ctx.hoverIndex && "bg-gray-200 opacity-50",
                      item.selected && "bg-blue-300 text-blue-500"
                    ]]),
                    onClick: ($event) => _ctx.select(item)
                  }, toDisplayString(item.label), 11, _hoisted_5)
                ])
              ], 40, _hoisted_4$1);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 8, _hoisted_3$1)
      ],
      6
      /* CLASS, STYLE */
    )), [
      [_directive_click_outside, _ctx.close, "parent"]
    ]) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1$5);
}
_sfc_main$6.__file = "components/custom/autocomplete/Autocomplete.vue";
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/autocomplete/Autocomplete.vue"]]);
const Cell_vue_vue_type_style_index_0_scoped_dff766dd_lang = "";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Cell",
  props: {
    rowIndex: { type: Number, required: true },
    columnIndex: { type: Number, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const $cursor = inject("$cursor");
    const onSelectCell = () => {
      $cursor.selectedCell.rowIndex = props.rowIndex;
      $cursor.selectedCell.columnIndex = props.columnIndex;
    };
    const __returned__ = { props, $cursor, onSelectCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = ["data-row-index", "data-column-index"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("td", {
    "data-row-index": $props.rowIndex,
    "data-column-index": $props.columnIndex,
    class: normalizeClass([`cell-${$props.rowIndex}-${$props.columnIndex}`, "text-truncate"]),
    onMousedown: $setup.onSelectCell
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 42, _hoisted_1$4);
}
_sfc_main$5.__file = "components/custom/datatable/Cell.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-dff766dd"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/datatable/Cell.vue"]]);
const CellSelectingRegion_vue_vue_type_style_index_0_scoped_cf2d29c0_lang = "";
const _sfc_main$4 = {
  name: "CellSelectingRegion",
  setup() {
    const cursor = inject("$cursor");
    onMounted(() => {
      nextTick(() => {
        const $table = cursor.containerElementRef.value;
        let tbody;
        const onMouseMove = throttle(function(event) {
          const td = event.target.closest("td");
          if (!td.dataset.columnIndex)
            return;
          cursor.selectedRegion.end.rowIndex = parseInt(td.dataset.rowIndex);
          cursor.selectedRegion.end.columnIndex = parseInt(
            td.dataset.columnIndex
          );
        }, 20);
        $table.addEventListener("mousedown", (event) => {
          const td = event.target.closest("td");
          if (!td)
            return;
          if (!td.dataset.columnIndex) {
            return;
          }
          tbody = $table.querySelector("tbody");
          tbody.addEventListener("mousemove", onMouseMove);
          document.addEventListener("mouseup", onMouseUp);
        });
        function onMouseUp() {
          tbody.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        }
      });
    });
    const selectedCellRegionStyle = computed(() => {
      const $table = cursor.containerElementRef.value;
      const cellRegion = cursor.selectedRegion;
      const startCellClass = `.cell-${cellRegion.start.rowIndex}-${cellRegion.start.columnIndex}`;
      const endCellClass = `.cell-${cellRegion.end.rowIndex}-${cellRegion.end.columnIndex}`;
      const startCell = $table == null ? void 0 : $table.querySelector(startCellClass);
      const endCell = $table == null ? void 0 : $table.querySelector(endCellClass);
      if (!startCell || !endCell)
        return { display: "none" };
      if (startCell === endCell)
        return { display: "none" };
      let top, left, width, height;
      if (startCell.offsetLeft < endCell.offsetLeft) {
        left = startCell.offsetLeft;
        width = endCell.offsetLeft + endCell.offsetWidth - left;
      } else {
        left = endCell.offsetLeft;
        width = startCell.offsetLeft + startCell.offsetWidth - left;
      }
      if (startCell.offsetTop < endCell.offsetTop) {
        top = startCell.offsetTop;
        height = endCell.offsetTop + endCell.offsetHeight - top;
      } else {
        top = endCell.offsetTop;
        height = startCell.offsetTop + startCell.offsetHeight - top;
      }
      return {
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`
      };
    });
    return { selectedCellRegionStyle };
  }
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: "selecting-region",
      style: normalizeStyle($setup.selectedCellRegionStyle)
    },
    null,
    4
    /* STYLE */
  );
}
_sfc_main$4.__file = "components/custom/datatable/CellSelectingRegion.vue";
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-cf2d29c0"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/datatable/CellSelectingRegion.vue"]]);
const CellCursor_vue_vue_type_style_index_0_scoped_84c13675_lang = "";
const _sfc_main$3 = {
  props: {
    items: Array
  },
  emits: ["on-input"],
  setup(props) {
    const $columns = inject("$columns");
    const $cursor = inject("$cursor");
    const item = computed(() => props.items[$cursor.selectedCell.rowIndex]);
    const column = computed(() => $columns[$cursor.selectedCell.columnIndex]);
    const instance = getCurrentInstance();
    const cell = computed(() => item.value[column.value.name]);
    const onInput = (value) => instance.proxy.$parent.$emit("onInput", {
      rowIndex: $cursor.selectedCell.rowIndex,
      column: column.value,
      value
    });
    const cursorRef = ref(null);
    watch($cursor.selectedCell, async () => {
      $cursor.editing.value = false;
      requestAnimationFrame(() => {
        cursorRef.value.focus();
      });
    });
    const clickOutSide = (event) => {
      if (Number(event.target.dataset.columnIndex) === $cursor.selectedCell.columnIndex && Number(event.target.dataset.rowIndex) === $cursor.selectedCell.rowIndex)
        return;
      setEditMode(false);
    };
    const td = computed(() => {
      var _a;
      return (_a = $cursor.containerElementRef.value) == null ? void 0 : _a.querySelector(
        `.cell-${$cursor.selectedCell.rowIndex}-${$cursor.selectedCell.columnIndex}`
      );
    });
    const cursorStyle = computed(() => {
      if (!td.value) {
        return {
          display: "none"
        };
      }
      return {
        // + 2px for border
        width: `${td.value.offsetWidth + 2}px`,
        height: `${td.value.offsetHeight + 2}px`,
        top: `${td.value.offsetTop}px`,
        left: `${td.value.offsetLeft - 1}px`
      };
    });
    const inputStyle = computed(() => {
      if (!td.value) {
        return {
          display: "none"
        };
      }
      return {
        // - 2px for border
        width: `${td.value.offsetWidth - 2}px`,
        height: `${td.value.offsetHeight - 2}px`,
        "padding-left": "1px",
        "padding-right": "1px"
      };
    });
    watch($cursor.editing, async (value) => {
      if (value) {
        nextTick(() => {
          const input = cursorRef.value.querySelector("input");
          if (input) {
            for (const i of Object.keys(inputStyle.value)) {
              input.style[i] = inputStyle.value[i];
            }
            if (document.activeElement !== input)
              input.focus();
          }
        });
      }
    });
    function setEditMode(state) {
      console.log("setEdit", state);
      $cursor.editing.value = state;
    }
    function setupNavigation({ items: items2, columns }, setEditMode2) {
      function onKeyDown2(event) {
        if ($cursor.editing.value && !(event.key === "Tab" || event.key === "Enter" || event.key === "Escape")) {
          return;
        }
        if (event.ctrlKey || event.altKey || event.metaKey)
          return;
        if (event.key.length === 1) {
          if (!$cursor.editing.value) {
            setEditMode2(true);
          }
          return;
        }
        event.preventDefault();
        navigateFromEvent(event);
      }
      function navigateFromEvent(event) {
        switch (event.key) {
          case "Enter":
            if (!$cursor.editing.value) {
              setEditMode2(true);
            } else {
              const cursorMoved = moveCursorDown({ force: true });
              if (!cursorMoved)
                setEditMode2(false);
            }
            break;
          case "ArrowDown":
            moveCursorDown();
            break;
          case "ArrowUp":
            moveCursorUp();
            break;
          case "ArrowRight":
            moveCursorRight();
            break;
          case "ArrowLeft":
            moveCursorLeft();
            break;
          case "F2":
            setEditMode2(true);
            break;
          case "Escape":
            setEditMode2(false);
            break;
          case "Tab":
            if (event.ctrlKey || event.altKey)
              break;
            if (!event.shiftKey) {
              moveCursorRight({ force: true, nextLineOnEnd: true });
            } else {
              moveCursorLeft({ force: true, prevLineOnStart: true });
            }
            break;
        }
      }
      function moveCursorRight({ force = false, nextLineOnEnd = false } = {}) {
        if ($cursor.editing.value && !force)
          return;
        const nextIndex = $cursor.selectedCell.columnIndex + 1;
        if (columns.length > nextIndex) {
          $cursor.selectedCell.columnIndex = nextIndex;
        } else if (nextLineOnEnd) {
          if (moveCursorDown({ force })) {
            $cursor.selectedCell.columnIndex = 0;
          }
        }
      }
      function moveCursorLeft({ force = false, prevLineOnStart = false } = {}) {
        if ($cursor.editing.value && !force)
          return;
        const prevIndex = $cursor.selectedCell.columnIndex - 1;
        if (prevIndex >= 0) {
          $cursor.selectedCell.columnIndex = prevIndex;
        } else if (prevLineOnStart) {
          if (moveCursorUp({ force })) {
            $cursor.selectedCell.columnIndex = columns.length - 1;
          }
        }
      }
      function moveCursorDown({ force = false } = {}) {
        if ($cursor.editing.value && !force)
          return false;
        const nextIndex = $cursor.selectedCell.rowIndex + 1;
        if (items2.length > nextIndex) {
          $cursor.selectedCell.rowIndex = nextIndex;
          return true;
        }
        return false;
      }
      function moveCursorUp({ force = false } = {}) {
        if ($cursor.editing.value && !force)
          return false;
        const prevIndex = $cursor.selectedCell.rowIndex - 1;
        if (prevIndex >= 0) {
          $cursor.selectedCell.rowIndex = prevIndex;
          return true;
        }
        return false;
      }
      return { onKeyDown: onKeyDown2 };
    }
    const { onKeyDown } = setupNavigation(
      { items: props.items, columns: $columns },
      setEditMode
    );
    onMounted(() => {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(cursorRef.value);
      selection.removeAllRanges();
      selection.addRange(range);
    });
    return {
      setEditMode,
      clickOutSide,
      blur,
      onInput,
      item,
      column,
      cell,
      cursorRef,
      cursorStyle,
      editing: $cursor.editing,
      onKeyDown,
      rowIndex: $cursor.selectedCell.rowIndex
    };
  }
};
const _hoisted_1$3 = ["value"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock(
    "div",
    {
      ref: "cursorRef",
      class: "cursor",
      tabindex: "0",
      style: normalizeStyle($setup.cursorStyle),
      onKeydown: _cache[1] || (_cache[1] = (...args) => $setup.onKeyDown && $setup.onKeyDown(...args)),
      onDblclick: _cache[2] || (_cache[2] = ($event) => $setup.setEditMode(true))
    },
    [
      $setup.editing ? renderSlot(_ctx.$slots, `cell-input-${$setup.column.name}`, {
        key: 0,
        item: $setup.item,
        column: $setup.column,
        rowIndex: $setup.rowIndex,
        cell: $setup.cell,
        onInput: $setup.onInput
      }, () => [
        createBaseVNode("input", {
          type: "text",
          class: "cell-input",
          value: $setup.cell,
          onInput: _cache[0] || (_cache[0] = ($event) => $setup.onInput($event.target.value))
        }, null, 40, _hoisted_1$3)
      ], true) : createCommentVNode("v-if", true)
    ],
    36
    /* STYLE, HYDRATE_EVENTS */
  )), [
    [_directive_click_outside, $setup.clickOutSide]
  ]);
}
_sfc_main$3.__file = "components/custom/datatable/CellCursor.vue";
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-84c13675"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/datatable/CellCursor.vue"]]);
function getCsvFromClipboardData(clipboardData) {
  let pastedText;
  let isHTML = true;
  let pastedItems = [];
  try {
    pastedText = clipboardData.getData("text/html");
    if (!pastedText) {
      pastedText = clipboardData.getData("text/plain");
      isHTML = false;
    }
  } catch (e) {
    pastedText = clipboardData.getData("text");
    isHTML = false;
  }
  pastedText = pastedText.trim();
  if (isHTML) {
    const parser = new DOMParser();
    const trList = parser.parseFromString(pastedText, "text/html").querySelectorAll("tr");
    pastedItems = Array.from(trList).map(function(tr) {
      return Array.from(tr.querySelectorAll("td")).map(function(td) {
        return td.innerText;
      });
    });
  } else {
    pastedItems = pastedText.split("\n").map(function(row) {
      return row.split("	");
    });
  }
  return pastedItems;
}
class Cursor {
  constructor(containerElementRef) {
    __publicField(this, "containerElementRef");
    __publicField(this, "editing");
    __publicField(this, "selectedCell");
    __publicField(this, "selectedRegion");
    this.containerElementRef = containerElementRef;
    this.editing = ref(false);
    this.selectedCell = reactive({ rowIndex: -1, columnIndex: -1 });
    this.selectedRegion = reactive({
      start: this.selectedCell,
      end: { rowIndex: -1, columnIndex: -1 }
    });
    watch(this.selectedCell, () => {
      this.selectedRegion.end.rowIndex = -1;
      this.selectedRegion.end.columnIndex = -1;
    });
  }
}
const Menu_vue_vue_type_style_index_0_scoped_a496419d_lang = "";
const _sfc_main$2 = {
  name: "ContextMenu",
  props: {
    actions: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const instance = getCurrentInstance();
    const context = reactive({ show: false, event: { clientX: 0, clientY: 0 } });
    onMounted(() => {
      nextTick(() => {
        instance.proxy.$parent.$el.addEventListener("contextmenu", (event) => {
          event.preventDefault();
          context.show = true;
          context.event = event;
        });
      });
    });
    const handleAction = (e) => {
      console.log("action");
    };
    function hide() {
      context.show = false;
    }
    return { handleAction, context, hide };
  }
};
const _hoisted_1$2 = { role: "menu" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_outside = resolveDirective("click-outside");
  return $setup.context.show ? withDirectives((openBlock(), createElementBlock(
    "div",
    {
      key: 0,
      class: "context__container bg-white shadow-sm",
      style: normalizeStyle({
        left: `${$setup.context.event.clientX}px`,
        top: `${$setup.context.event.clientY}px`
      })
    },
    [
      createCommentVNode(' <button @click="context.show = false" class="btn-close"></button> '),
      createBaseVNode("ul", _hoisted_1$2, [
        renderSlot(_ctx.$slots, "default", { context: $setup.context }, () => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($props.actions, (action, index) => {
              return openBlock(), createElementBlock(
                "li",
                {
                  key: `menu-item-${index}`,
                  role: "menuitem",
                  class: "hover:bg-gray-400",
                  onClick: _cache[0] || (_cache[0] = (...args) => $setup.handleAction && $setup.handleAction(...args))
                },
                toDisplayString(action.label),
                1
                /* TEXT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], true)
      ])
    ],
    4
    /* STYLE */
  )), [
    [_directive_click_outside, $setup.hide]
  ]) : createCommentVNode("v-if", true);
}
_sfc_main$2.__file = "components/custom/menu/Menu.vue";
const ContextMenu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-a496419d"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/menu/Menu.vue"]]);
const DataTable_vue_vue_type_style_index_0_scoped_8a854ead_lang = "";
const _sfc_main$1 = {
  components: { DragList: __nuxt_component_0$2, Cell: __nuxt_component_0, CellCursor: __nuxt_component_3, CellSelectingRegion: __nuxt_component_2, ContextMenu },
  props: {
    items: Array,
    columns: Array,
    insertColumnOnPaste: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:items", "onInput"],
  setup(props, { emit }) {
    const tableRef = ref(null);
    const cursor = new Cursor(tableRef);
    provide("$cursor", cursor);
    provide("$columns", props.columns);
    function getOS() {
      const userAgent = window.navigator.userAgent;
      const platform = window.navigator.platform;
      const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
      const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
      const iosPlatforms = ["iPhone", "iPad", "iPod"];
      let os2 = null;
      if (macosPlatforms.includes(platform)) {
        os2 = "Mac OS";
      } else if (iosPlatforms.includes(platform)) {
        os2 = "iOS";
      } else if (windowsPlatforms.includes(platform)) {
        os2 = "Windows";
      } else if (/Android/.test(userAgent)) {
        os2 = "Android";
      } else if (!os2 && /Linux/.test(platform)) {
        os2 = "Linux";
      }
      return os2;
    }
    const os = getOS();
    const clonedItems = ref(props.items);
    const list = computed({
      get: () => props.items,
      set: (val) => emit("update:items", val)
    });
    watch(
      clonedItems,
      (val) => {
        emit("update:items", val);
      },
      { deep: true }
    );
    const itemsTracker = useRefHistory(clonedItems, { deep: true });
    const undo = (e) => {
      if (os === "Mac OS" && e.ctrlKey || os !== "Mac OS" && e.metaKey)
        return;
      itemsTracker.undo();
    };
    const redo = (e) => {
      if (os === "Mac OS" && e.ctrlKey || os !== "Mac OS" && e.metaKey)
        return;
      itemsTracker.redo();
    };
    const actions = [{ label: "Add above" }];
    const insertRow = (rowIndex, context, position = "below") => {
      const posInsert = position === "below" ? rowIndex + 1 : rowIndex;
      const newArr = [...props.items];
      newArr.splice(posInsert, 0, { ...dumpItem$1 });
      console.log(newArr.length);
      emit("update:items", newArr);
      if (position === "above")
        selectHeader("row", rowIndex + 1);
      if (context)
        context.show = false;
    };
    const insertColumn = (columnIndex, context, position = "right") => {
      console.log("insertColumn", position);
    };
    const selectHeader = (type, index) => {
      if (type === "row") {
        Object.assign(cursor.selectedCell, { rowIndex: index, columnIndex: 0 });
        nextTick(() => {
          Object.assign(cursor.selectedRegion.end, {
            rowIndex: index,
            columnIndex: props.columns.length - 1
          });
        });
      }
      if (type === "column") {
        Object.assign(cursor.selectedCell, { rowIndex: 0, columnIndex: index });
        nextTick(() => {
          Object.assign(cursor.selectedRegion.end, {
            rowIndex: props.items.length - 1,
            columnIndex: index
          });
        });
      }
    };
    const copy = (event) => {
      event.preventDefault();
      let end = null;
      if (cursor.selectedRegion.end.rowIndex === -1)
        end = cursor.selectedCell;
      else
        end = cursor.selectedRegion.end;
      const topIndex = Math.min(
        cursor.selectedRegion.start.rowIndex,
        end.rowIndex
      );
      const bottomIndex = Math.max(
        cursor.selectedRegion.start.rowIndex,
        end.rowIndex
      );
      const leftIndex = Math.min(
        cursor.selectedRegion.start.columnIndex,
        end.columnIndex
      );
      const rightIndex = Math.max(
        cursor.selectedRegion.start.columnIndex,
        end.columnIndex
      );
      const rows = [];
      for (let i = topIndex; i <= bottomIndex; i++) {
        const row = [];
        for (let j = leftIndex; j <= rightIndex; j++) {
          row.push(props.items[i][props.columns[j].name] || "");
        }
        rows.push(row);
      }
      const text = rows.map((row) => row.join("	")).join("\n");
      event.clipboardData.setData("text/plain", text);
    };
    const paste = async (event) => {
      event.preventDefault();
      const pastedItems = getCsvFromClipboardData(event.clipboardData);
      if (!pastedItems.length)
        return;
      for (let i = 0; i < pastedItems.length; i++) {
        if (cursor.selectedCell.rowIndex + i >= props.items.length) {
          insertRow(props.items.length - 1);
          await nextTick();
        }
        for (let j = 0; j < pastedItems[i].length; j++) {
          if (cursor.selectedCell.columnIndex + j >= props.columns.length) {
            break;
          }
          emit("onInput", {
            rowIndex: cursor.selectedCell.rowIndex + i,
            column: props.columns[cursor.selectedCell.columnIndex + j],
            value: pastedItems[i][j]
          });
        }
      }
    };
    return {
      list,
      itemsTracker,
      tableRef,
      undo,
      redo,
      actions,
      cursor,
      selectHeader,
      copy,
      paste,
      insertRow,
      insertColumn,
      clonedItems
    };
  }
};
const dumpItem$1 = {
  color: "",
  cutpot: "cut",
  family: "",
  grade: "",
  id: `${Math.random()}`,
  note: null,
  origin: "",
  price: null,
  product_id: "",
  quantity: null,
  unit: "",
  variety: "",
  $errors: {}
};
const _withScopeId = (n) => (pushScopeId("data-v-8a854ead"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "th",
  { class: "datatable__header" },
  null,
  -1
  /* HOISTED */
));
const _hoisted_2 = ["onMousedown"];
const _hoisted_3 = ["onMousedown"];
const _hoisted_4 = ["colspan"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Cell = __nuxt_component_0;
  const _component_DragList = __nuxt_component_0$2;
  const _component_CellSelectingRegion = __nuxt_component_2;
  const _component_CellCursor = __nuxt_component_3;
  return openBlock(), createElementBlock(
    "table",
    {
      ref: "tableRef",
      onCopy: _cache[1] || (_cache[1] = (...args) => $setup.copy && $setup.copy(...args)),
      onPaste: _cache[2] || (_cache[2] = (...args) => $setup.paste && $setup.paste(...args)),
      onKeydown: [
        _cache[3] || (_cache[3] = withKeys(withModifiers((...args) => $setup.undo && $setup.undo(...args), ["ctrl", "exact", "prevent"]), ["z"])),
        _cache[4] || (_cache[4] = withKeys(withModifiers((...args) => $setup.redo && $setup.redo(...args), ["ctrl", "shift", "prevent"]), ["z"])),
        _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => $setup.undo && $setup.undo(...args), ["meta", "exact", "prevent"]), ["z"])),
        _cache[6] || (_cache[6] = withKeys(withModifiers((...args) => $setup.redo && $setup.redo(...args), ["meta", "shift", "prevent"]), ["z"]))
      ]
    },
    [
      createCommentVNode(" `prevent` undo and redo because it\n  may make CellCursor emit on-input event\n  on some browsers "),
      createBaseVNode("thead", null, [
        createBaseVNode("tr", null, [
          _hoisted_1$1,
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($props.columns, (col, $columnIndex) => {
              return openBlock(), createElementBlock("th", {
                key: col.name,
                class: normalizeClass(`datatable__header datatable__header--${col.name}`),
                onMousedown: ($event) => $setup.selectHeader("column", $columnIndex)
              }, toDisplayString(col.name), 43, _hoisted_2);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      createVNode(_component_DragList, {
        list: $setup.clonedItems,
        "onUpdate:list": _cache[0] || (_cache[0] = ($event) => $setup.clonedItems = $event),
        tag: "tbody",
        "child-tag": "tr",
        handle: ".datatable__index",
        "id-adapter": (i) => i.id
      }, {
        default: withCtx(({ item, index }) => [
          createBaseVNode("td", {
            class: "datatable__index",
            onMousedown: ($event) => $setup.selectHeader("row", index)
          }, toDisplayString(index + 1), 41, _hoisted_3),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($props.columns, (col, $columnIndex) => {
              return openBlock(), createBlock(_component_Cell, {
                key: col.name,
                "row-index": index,
                "column-index": $columnIndex
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(item[col.name]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["row-index", "column-index"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        "placeholder-move": withCtx(() => [
          createBaseVNode("td", {
            colspan: $props.columns.length + 1,
            style: { "border": "1px solid red", "height": "2px" }
          }, null, 8, _hoisted_4)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["list", "id-adapter"]),
      createCommentVNode(` <tbody>
      <tr v-for="(item, $rowIndex) in items" :key="item.id">
        <td
          class="datatable__index"
          @mousedown="selectHeader('row', $rowIndex)"
        >
          {{ $rowIndex + 1 }}
        </td>
        <Cell
          v-for="(col, $columnIndex) in columns"
          :key="col.name"
          :row-index="$rowIndex"
          :column-index="$columnIndex"
          >{{ item[col.name] }}</Cell
        >
      </tr>
    </tbody> `),
      createVNode(_component_CellSelectingRegion),
      createVNode(_component_CellCursor, { items: $props.items }, createSlots({
        _: 2
        /* DYNAMIC */
      }, [
        renderList(Object.keys(_ctx.$slots), (name) => {
          return {
            name,
            fn: withCtx((scope) => [
              renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(scope)), void 0, true)
            ])
          };
        })
      ]), 1032, ["items"]),
      createCommentVNode(` <ContextMenu :actions="actions">
      <template #default="scope">
        <slot name="context-menu" v-bind="scope" :cursor="cursor">
          <button
            class="block w-full p-2 text-left hover:bg-gray-400"
            :disabled="scope.context.event.target.tagName === 'TH'"
            @click="
              insertRow(cursor.selectedCell.rowIndex, scope.context, 'above')
            "
          >
            Add row above
          </button>
          <button
            class="block w-full p-2 text-left hover:bg-gray-400"
            :disabled="scope.context.event.target.tagName === 'TH'"
            @click="insertRow(cursor.selectedCell.rowIndex, scope.context)"
          >
            Add row below
          </button>
          <button
            class="block w-full p-2 text-left hover:bg-gray-400"
            :disabled="scope.context.event.target.tagName === 'TD'"
            @click="
              insertColumn(
                cursor.selectedCell.columnIndex,
                scope.context,
                'left'
              )
            "
          >
            Add column left
          </button>
          <button
            class="block w-full p-2 text-left hover:bg-gray-400"
            :disabled="scope.context.event.target.tagName === 'TD'"
            @click="
              insertColumn(cursor.selectedCell.columnIndex, scope.context)
            "
          >
            Add column right
          </button>
        </slot>
      </template>
    </ContextMenu> `)
    ],
    544
    /* HYDRATE_EVENTS, NEED_PATCH */
  );
}
_sfc_main$1.__file = "components/custom/datatable/DataTable.vue";
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-8a854ead"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/datatable/DataTable.vue"]]);
const items = [
  {
    color: "red",
    cutpot: "cut",
    family: "rose",
    grade: "AA",
    id: "AIEHO6CUQACVS",
    note: null,
    origin: "korea",
    price: 111,
    product_id: "AIEHO6CTAACVQ",
    quantity: 111,
    unit: "11",
    variety: "amber",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIEQZH3YQACXW",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIEQZH32QACXY",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIEQZH33QACX2",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIEQZH35AACX4",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIEQZH36AACX6",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIEQZH36QACYA",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIEQZH37AACYC",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HEAACYQ",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIEHZ47ZAACV4",
    note: null,
    origin: "Argentina",
    price: 222,
    product_id: "AO5YGADCAADG2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIEQZH4AAACYE",
    note: null,
    origin: "Argentina",
    price: 222,
    product_id: "AO5YGADCAADG2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HFAACYS",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HGAACYU",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HGQACYW",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HHQACYY",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HIQACY2",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HJQACY4",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HKQACY6",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HMAACZA",
    note: null,
    origin: "america",
    price: 222,
    product_id: "AIEHZ47XAACV2",
    quantity: 222,
    unit: "22",
    variety: "pearl",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HNAACZC",
    note: null,
    origin: "lao",
    price: 333,
    product_id: "AIJSZPW6QACZO",
    quantity: 333,
    unit: "22",
    variety: "crystal",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HNAAC8C",
    note: null,
    origin: "lao",
    price: 333,
    product_id: "AIJSZPW6QACZO",
    quantity: 333,
    unit: "22",
    variety: "crystal",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HNAAC4C",
    note: null,
    origin: "lao",
    price: 333,
    product_id: "AIJSZPW6QACZO",
    quantity: 333,
    unit: "22",
    variety: "crystal",
    $errors: {}
  },
  {
    color: "green",
    cutpot: "cut",
    family: "rose",
    grade: "SS",
    id: "AIFT72HNAACDZ",
    note: null,
    origin: "lao",
    price: 333,
    product_id: "AIJSZPW6QACZO",
    quantity: 333,
    unit: "22",
    variety: "crystal",
    $errors: {}
  }
];
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegowina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia"
];
const DataTable_story_vue_vue_type_style_index_0_scoped_7b9106d3_lang = "";
const _sfc_main = {
  components: { DataTable: __nuxt_component_1 },
  setup() {
    const columns = ref([
      { name: "cutpot" },
      { name: "origin" },
      { name: "family", required: true, rules: "required" },
      { name: "variety", required: true, rules: "required" },
      { name: "color" },
      {
        name: "quantity",
        required: true,
        rules: "required",
        type: "number",
        help: "Sll"
      },
      { name: "unit", help: "Bn cay" },
      { name: "grade" },
      { name: "price", required: true, rules: "required", help: "Gia" },
      { name: "note", help: "Note ne" }
    ]);
    const items$1 = ref(items);
    const onTableInput = ({ rowIndex, column, value }) => {
      console.log("update", items$1.value.length, rowIndex);
      items$1.value[rowIndex][column.name] = value;
    };
    const insertRow = (rowIndex, context) => {
      items$1.value.splice(rowIndex, 0, dumpItem);
      context.show = false;
    };
    return {
      countries,
      columns,
      items: items$1,
      onTableInput,
      insertRow,
      reactive
    };
  }
};
const dumpItem = {
  color: "",
  cutpot: "cut",
  family: "",
  grade: "",
  id: `${Math.random()}`,
  note: null,
  origin: "",
  price: null,
  product_id: "",
  quantity: null,
  unit: "",
  variety: "",
  $errors: {}
};
const _hoisted_1 = { class: "min-h-screen bg-white" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Autocomplete = __nuxt_component_0$1;
  const _component_DataTable = __nuxt_component_1;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Datatable" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createCommentVNode(" @keydown.stop to prevent storybook behavior in demo "),
        createVNode(_component_DataTable, {
          items: $setup.items,
          "onUpdate:items": _cache[0] || (_cache[0] = ($event) => $setup.items = $event),
          columns: $setup.columns,
          onKeydown: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["stop"])),
          onOnInput: $setup.onTableInput
        }, {
          "cell-input-origin": withCtx(({ cell, onInput }) => [
            createVNode(_component_Autocomplete, {
              input: cell,
              options: $setup.countries,
              "use-filter": true,
              "onUpdate:input": onInput
            }, null, 8, ["input", "options", "onUpdate:input"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["items", "columns", "onOnInput"])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/datatable/DataTable.story.vue";
const DataTable_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7b9106d3"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/datatable/DataTable.story.vue"]]);
export {
  DataTable_story as default
};
