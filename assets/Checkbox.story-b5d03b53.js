import { u as useInternalValue } from "./index-2689f9df.js";
import { az as defineComponent, aB as ref, au as openBlock, aD as createElementBlock, aQ as withDirectives, aR as vModelCheckbox, ay as createBaseVNode, aS as mergeProps, aE as renderSlot, aG as createCommentVNode, aH as normalizeClass, aT as withModifiers, aM as computed, ar as resolveComponent, as as createBlock, at as withCtx, av as createVNode, aC as createTextVNode, aF as toDisplayString, aO as renderList, aP as Fragment } from "./vendor-ac7d78fa.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Checkbox",
  props: {
    rootClass: { type: String, required: false, default: "inline-flex space-x-2" },
    modelValue: { type: [String, Number, Boolean, Array, Set], required: false, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const value = useInternalValue(props, "modelValue", emit);
    const inputRef = ref();
    function focus() {
      inputRef.value.focus();
    }
    const __returned__ = { props, emit, value, inputRef, focus };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["onClick"];
const _hoisted_2$1 = { key: 0 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass($props.rootClass),
    onClick: withModifiers($setup.focus, ["stop"])
  }, [
    withDirectives(createBaseVNode(
      "input",
      mergeProps(_ctx.$attrs, {
        ref: "inputRef",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
        type: "checkbox"
      }),
      null,
      16
      /* FULL_PROPS */
    ), [
      [vModelCheckbox, $setup.value]
    ]),
    _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1$1);
}
_sfc_main$1.__file = "components/base/checkbox/Checkbox.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/base/checkbox/Checkbox.vue"]]);
function useCheckbox(items) {
  const checkedRows = ref([]);
  const hasSelected = computed(() => checkedRows.value.length > 0);
  const lastCheckedRowIndex = ref(-1);
  const isAllChecked = computed(() => {
    var _a;
    return checkedRows.value.length === ((_a = items.value) == null ? void 0 : _a.length);
  });
  function checkAll() {
    const _isAllChecked = isAllChecked.value;
    items.value.forEach((item) => {
      removeCheckedRow(item);
      if (!_isAllChecked)
        checkedRows.value.push(item);
    });
  }
  function isRowChecked(row) {
    const res = checkedRows.value.includes(row);
    return res;
  }
  function checkRow(row, index, event) {
    const lastIndex = lastCheckedRowIndex.value;
    lastCheckedRowIndex.value = index;
    if (event.shiftKey && lastIndex !== -1 && index !== lastIndex)
      shiftCheckRow(row, index, lastIndex);
    else if (!isRowChecked(row))
      checkedRows.value.push(row);
    else
      removeCheckedRow(row);
  }
  function shiftCheckRow(row, index, lastCheckedRowIndex2) {
    const subset = items.value.slice(
      Math.min(index, lastCheckedRowIndex2),
      Math.max(index, lastCheckedRowIndex2) + 1
    );
    const shouldCheck = !isRowChecked(row);
    subset.forEach((item) => {
      removeCheckedRow(item);
      if (shouldCheck)
        checkedRows.value.push(item);
    });
  }
  function removeCheckedRow(row) {
    const index = checkedRows.value.indexOf(row);
    if (index >= 0)
      checkedRows.value.splice(index, 1);
  }
  return {
    checkedRows,
    hasSelected,
    isAllChecked,
    checkAll,
    isRowChecked,
    checkRow,
    removeCheckedRow
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Checkbox.story",
  setup(__props, { expose }) {
    expose();
    const scholars = [
      {
        id: "0f436c70ad54433ab25d17a6e07e5a1c",
        displayName: "Ngô Văn Lợi",
        dateOfBirth: null,
        game: "Axie",
        playTimes: "3 tháng",
        playTimes2: "2-3 tiếng/ngày",
        photoURL: null
      },
      {
        id: "10c380d69c4b4a0c92d997b725d1783e",
        displayName: "Nguyễn Bá Nam",
        dateOfBirth: null,
        game: "Axie",
        playTimes: "3 tháng",
        playTimes2: "2-3 tiếng/ngày",
        photoURL: null
      },
      {
        id: "1105309096564ba7af51ee3567f0f023",
        displayName: "Lê Tấn Sang",
        dateOfBirth: null,
        game: "Axie",
        playTimes: "3 tháng",
        playTimes2: "2-3 tiếng/ngày",
        photoURL: null
      },
      {
        id: "184fbdeae7f341d0b43b9362b5d3399e",
        displayName: "Do quang huy",
        dateOfBirth: null,
        game: "Axie",
        playTimes: "3 tháng",
        playTimes2: "2-3 tiếng/ngày",
        photoURL: null
      },
      {
        id: "0f436c70ad54433ab25d17a61e07e5a1c",
        displayName: "Ngô Văn Lợi",
        dateOfBirth: null,
        game: "Axie",
        playTimes: "3 tháng",
        playTimes2: "2-3 tiếng/ngày",
        photoURL: null
      },
      {
        id: "10c380d69c4b43a0c92d997b725d1783e",
        displayName: "Nguyễn Bá Nam",
        dateOfBirth: null,
        game: "Axie",
        playTimes: "3 tháng",
        playTimes2: "2-3 tiếng/ngày",
        photoURL: null
      },
      {
        id: "11053090965464ba7af51ee3567f0f023",
        displayName: "Lê Tấn Sang",
        dateOfBirth: null,
        game: "Axie",
        playTimes: "3 tháng",
        playTimes2: "2-3 tiếng/ngày",
        photoURL: null
      },
      {
        id: "184fbdeae7f3451d0b43b9362b5d3399e",
        displayName: "Do quang huy",
        dateOfBirth: null,
        game: "Axie",
        playTimes: "3 tháng",
        playTimes2: "2-3 tiếng/ngày",
        photoURL: null
      }
    ];
    const { isAllChecked, checkAll, isRowChecked, checkRow, hasSelected } = useCheckbox(ref(scholars));
    const columns = [
      {
        name: "User",
        width: "auto"
      },
      {
        name: "Discord",
        width: "w-[166px]"
      },
      {
        name: "Game",
        width: "w-[87px]"
      },
      {
        name: "Date of birth",
        width: "w-[124px]"
      },
      {
        name: "Game experiences",
        width: "w-[170px]"
      },
      {
        name: "Phone",
        width: "w-[124px]"
      },
      {
        name: "Action",
        width: "w-[129px]"
      }
    ];
    const names = ref([]);
    const customCheckboxValue = ref("Yes");
    const __returned__ = { scholars, isAllChecked, checkAll, isRowChecked, checkRow, hasSelected, columns, names, customCheckboxValue };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "space-x-4 px-4 py-2 text-white" },
  [
    /* @__PURE__ */ createBaseVNode("div", { class: "mb-4 flex gap-4" }, [
      /* @__PURE__ */ createBaseVNode("input", {
        type: "radio",
        name: "group",
        style: { "--c": "var(--danger)" }
      }),
      /* @__PURE__ */ createBaseVNode("input", {
        type: "radio",
        name: "group",
        style: { "--c": "var(--success)" }
      }),
      /* @__PURE__ */ createBaseVNode("input", {
        type: "radio",
        disabled: ""
      })
    ]),
    /* @__PURE__ */ createBaseVNode("label", { class: "space-x-2" }, [
      /* @__PURE__ */ createBaseVNode("input", {
        type: "checkbox",
        indeterminate: ""
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Indeterminate")
    ]),
    /* @__PURE__ */ createBaseVNode("label", { class: "space-x-2" }, [
      /* @__PURE__ */ createBaseVNode("input", {
        type: "checkbox",
        disabled: ""
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Disabled")
    ]),
    /* @__PURE__ */ createBaseVNode("label", { class: "space-x-2" }, [
      /* @__PURE__ */ createBaseVNode("input", {
        type: "checkbox",
        style: { "--background": "var(--success)" }
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "Normal")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = { class: "p-4 text-white" };
const _hoisted_3 = { class: "flex gap-2" };
const _hoisted_4 = { class: "space-x-4" };
const _hoisted_5 = { class: "rounded-lg text-white" };
const _hoisted_6 = {
  class: "w-full text-sm",
  style: { "table-layout": "auto" }
};
const _hoisted_7 = { class: "pl-6 pr-4" };
const _hoisted_8 = { class: "pl-6 pr-4 text-center" };
const _hoisted_9 = ["checked", "onClick"];
const _hoisted_10 = { class: "px-6 py-[21px]" };
const _hoisted_11 = { class: "flex space-x-4" };
const _hoisted_12 = {
  key: 0,
  class: "grid h-12 w-12 place-items-center rounded-full bg-green-400"
};
const _hoisted_13 = { class: "text-lg font-semibold text-white" };
const _hoisted_14 = ["src"];
const _hoisted_15 = { class: "flex max-w-[25ch] items-center truncate text-lg font-medium" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "td",
  { class: "px-4.5" },
  "Mike. JAK#0812",
  -1
  /* HOISTED */
);
const _hoisted_17 = { class: "px-4.5 w-[136px]" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "td",
  { class: "px-4.5 w-[88px]" },
  "Jan 01, 1997",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "td",
  { class: "px-4.5 w-[269px]" },
  [
    /* @__PURE__ */ createBaseVNode("p", null, "Played time"),
    /* @__PURE__ */ createBaseVNode("p", null, "2310")
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "td",
  { class: "px-4.5 w-[141px]" },
  "0933423847",
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "td",
  { class: "pr-6" },
  [
    /* @__PURE__ */ createBaseVNode("button", {
      type: "button",
      class: "ml-auto grid h-9 w-9 place-items-center rounded-xl border-2"
    }, [
      /* @__PURE__ */ createBaseVNode("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        class: "h-4 w-4"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        }),
        /* @__PURE__ */ createBaseVNode("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_BaseCheckbox = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Checkbox" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Plain Input" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Base Checbox" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_BaseCheckbox, {
                modelValue: $setup.names,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.names = $event),
                value: "jack",
                "root-class": "flex space-x-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" jack ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: $setup.names,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.names = $event),
                value: "john",
                "root-class": "flex space-x-2",
                style: { "--background": "var(--purple-500)" }
              }, {
                default: withCtx(() => [
                  createTextVNode(" john ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: $setup.names,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.names = $event),
                value: "mike",
                "root-class": "flex space-x-2",
                style: { "--background": "var(--green-500)" }
              }, {
                default: withCtx(() => [
                  createTextVNode(" mike ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              createBaseVNode(
                "span",
                null,
                toDisplayString($setup.names),
                1
                /* TEXT */
              )
            ]),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_BaseCheckbox, { indeterminate: "" }, {
                default: withCtx(() => [
                  createTextVNode("Indeterminate")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_BaseCheckbox, { disabled: "" }, {
                default: withCtx(() => [
                  createTextVNode("Disabled")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_BaseCheckbox, { "model-value": true }, {
                default: withCtx(() => [
                  createTextVNode("Default true")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_BaseCheckbox, {
                modelValue: $setup.customCheckboxValue,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.customCheckboxValue = $event),
                "true-value": "Yes",
                "false-value": "No",
                style: { "--background": "var(--teal-500)" }
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    " Custom value: " + toDisplayString($setup.customCheckboxValue),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Table Selection" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("table", _hoisted_6, [
              createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", _hoisted_7, [
                    createVNode(_component_BaseCheckbox, {
                      class: "inline-block h-[18px] w-[18px]",
                      type: "checkbox",
                      indeterminate: $setup.hasSelected && !$setup.isAllChecked,
                      checked: $setup.isAllChecked,
                      onChange: $setup.checkAll
                    }, null, 8, ["indeterminate", "checked", "onChange"])
                  ]),
                  (openBlock(), createElementBlock(
                    Fragment,
                    null,
                    renderList($setup.columns, (column) => {
                      return createBaseVNode(
                        "th",
                        {
                          key: column.name,
                          class: normalizeClass(["px-[18px] py-[15px] text-left font-normal last:text-right first-of-type:!pl-6 last-of-type:!pr-6", column.width])
                        },
                        toDisplayString(column.name),
                        3
                        /* TEXT, CLASS */
                      );
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ])
              ]),
              createBaseVNode("tbody", null, [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.scholars, (scholar, index) => {
                    return createBaseVNode("tr", {
                      key: scholar.id
                    }, [
                      createBaseVNode("td", _hoisted_8, [
                        createBaseVNode("input", {
                          class: "h-[18px] w-[18px]",
                          type: "checkbox",
                          checked: $setup.isRowChecked(scholar),
                          onClick: ($event) => $setup.checkRow(scholar, index, $event)
                        }, null, 8, _hoisted_9)
                      ]),
                      createBaseVNode("td", _hoisted_10, [
                        createBaseVNode("div", _hoisted_11, [
                          !scholar.photoURL ? (openBlock(), createElementBlock("div", _hoisted_12, [
                            createBaseVNode(
                              "span",
                              _hoisted_13,
                              toDisplayString(scholar.displayName.slice(0, 1)),
                              1
                              /* TEXT */
                            )
                          ])) : (openBlock(), createElementBlock("img", {
                            key: 1,
                            src: scholar.photoURL,
                            class: "h-12 w-12 rounded-full",
                            "aria-hidden": "true"
                          }, null, 8, _hoisted_14)),
                          createBaseVNode(
                            "p",
                            _hoisted_15,
                            toDisplayString(scholar.displayName),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      _hoisted_16,
                      createBaseVNode(
                        "td",
                        _hoisted_17,
                        toDisplayString(scholar.game),
                        1
                        /* TEXT */
                      ),
                      _hoisted_18,
                      _hoisted_19,
                      _hoisted_20,
                      _hoisted_21
                    ]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/base/checkbox/Checkbox.story.vue";
const Checkbox_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/base/checkbox/Checkbox.story.vue"]]);
export {
  Checkbox_story as default
};
