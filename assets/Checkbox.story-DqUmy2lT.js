import { aD as defineComponent, at as ref, as as _export_sfc, aw as openBlock, aH as createElementBlock, aO as withDirectives, aP as vModelCheckbox, aG as createBaseVNode, aQ as mergeProps, az as renderSlot, aK as createCommentVNode, aB as normalizeClass, aR as withModifiers, av as computed, aS as onMounted, aT as watch, aF as createVNode, aA as normalizeStyle, aE as resolveComponent, ax as createBlock, ay as withCtx, aM as createTextVNode, aL as toDisplayString, aI as renderList, aJ as Fragment } from "./vendor-CMJc4gfg.js";
import { u as useInternalValue } from "./index-DNEccDnl.js";
import { _ as __nuxt_component_1$1 } from "./VMotion-f0o9eDdW.js";
const __default__$1 = {
  inheritAttrs: false
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  __name: "Checkbox",
  props: {
    rootClass: { type: String, required: false, default: "inline-flex space-x-2" },
    modelValue: { type: [String, Number, Boolean, Array, Set], required: false, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const value = useInternalValue(props, emit);
    const inputRef = ref();
    function focus() {
      inputRef.value.focus();
    }
    const __returned__ = { props, emit, value, inputRef, focus };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { key: 0 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass($props.rootClass),
      onClick: withModifiers($setup.focus, ["stop"])
    },
    [
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
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_1$2, [
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main$2.__file = "components/base/checkbox/Checkbox.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "D:/projects/my-components/components/base/checkbox/Checkbox.vue"]]);
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "CheckboxMotion",
  props: {
    rootClass: { type: String, required: false, default: "inline-flex gap-2" },
    rootStyle: { type: null, required: false },
    modelValue: { type: [String, Number, Boolean, Array], required: false, default: false },
    indeterminate: { type: Boolean, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const value = useInternalValue(props, emit);
    const inputRef = ref();
    function focus() {
      inputRef.value.focus();
    }
    const _value = computed(() => {
      var _a;
      value.value;
      return (_a = inputRef.value) == null ? void 0 : _a.checked;
    });
    onMounted(() => {
      inputRef.value.indeterminate = props.indeterminate;
    });
    watch(
      () => props.indeterminate,
      (val) => {
        if (inputRef.value) inputRef.value.indeterminate = val;
      }
    );
    const isIndeterminated = computed(() => {
      var _a;
      value.value;
      return (_a = inputRef.value) == null ? void 0 : _a.indeterminate;
    });
    const __returned__ = { props, emit, value, inputRef, focus, _value, isIndeterminated };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "h-4 w-4",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "3"
};
const _hoisted_2$1 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "currentColor",
  class: "h-4 w-4"
};
const _hoisted_3$1 = { key: 0 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VMotion = __nuxt_component_1$1;
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass($props.rootClass),
      onClick: withModifiers($setup.focus, ["stop"])
    },
    [
      withDirectives(createBaseVNode(
        "input",
        mergeProps(_ctx.$attrs, {
          ref: "inputRef",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
          type: "checkbox",
          class: "sr-only"
        }),
        null,
        16
        /* FULL_PROPS */
      ), [
        [vModelCheckbox, $setup.value]
      ]),
      createBaseVNode(
        "div",
        {
          style: normalizeStyle([
            {
              backgroundColor: $setup._value || $setup.isIndeterminated ? "var(--background)" : "",
              borderColor: $setup._value ? "var(--background)" : "",
              border: $setup._value || $setup.isIndeterminated ? "" : "1px solid currentColor"
            },
            $props.rootStyle
          ]),
          class: "flex h-4 w-4 items-center justify-center rounded-sm transition-all duration-200"
        },
        [
          $setup._value ? (openBlock(), createElementBlock("svg", _hoisted_1$1, [
            createVNode(_component_VMotion, {
              initial: { strokeDashoffset: 1 },
              animate: { strokeDashoffset: 0 },
              "transition-options": { delay: 125 },
              as: "path",
              pathLength: "1",
              "stroke-dasharray": "1",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M5 13l4 4L19 7"
            })
          ])) : createCommentVNode("v-if", true),
          $setup.isIndeterminated ? (openBlock(), createElementBlock("svg", _hoisted_2$1, _cache[1] || (_cache[1] = [
            createBaseVNode(
              "path",
              {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M19.5 12h-15"
              },
              null,
              -1
              /* HOISTED */
            )
          ]))) : createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$1, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "components/base/checkbox/CheckboxMotion.vue";
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-db1be4f5"], ["__file", "D:/projects/my-components/components/base/checkbox/CheckboxMotion.vue"]]);
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
      if (!_isAllChecked) checkedRows.value.push(item);
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
    else if (!isRowChecked(row)) checkedRows.value.push(row);
    else removeCheckedRow(row);
  }
  function shiftCheckRow(row, index, lastCheckedRowIndex2) {
    const subset = items.value.slice(
      Math.min(index, lastCheckedRowIndex2),
      Math.max(index, lastCheckedRowIndex2) + 1
    );
    const shouldCheck = !isRowChecked(row);
    subset.forEach((item) => {
      removeCheckedRow(item);
      if (shouldCheck) checkedRows.value.push(item);
    });
  }
  function removeCheckedRow(row) {
    const index = checkedRows.value.indexOf(row);
    if (index >= 0) checkedRows.value.splice(index, 1);
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
  setup(__props, { expose: __expose }) {
    __expose();
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
const _hoisted_1 = { class: "p-4 text-white" };
const _hoisted_2 = { class: "flex gap-2" };
const _hoisted_3 = { class: "space-x-4" };
const _hoisted_4 = { class: "rounded-lg text-white" };
const _hoisted_5 = {
  class: "w-full text-sm",
  style: { "table-layout": "auto" }
};
const _hoisted_6 = { class: "pl-6 pr-4" };
const _hoisted_7 = { class: "pl-6 pr-4 text-center" };
const _hoisted_8 = ["checked", "onClick"];
const _hoisted_9 = { class: "px-6 py-[21px]" };
const _hoisted_10 = { class: "flex space-x-4" };
const _hoisted_11 = {
  key: 0,
  class: "grid h-12 w-12 place-items-center rounded-full bg-green-400"
};
const _hoisted_12 = { class: "text-lg font-semibold text-white" };
const _hoisted_13 = ["src"];
const _hoisted_14 = { class: "flex max-w-[25ch] items-center truncate text-lg font-medium" };
const _hoisted_15 = { class: "px-4.5 w-[136px]" };
const _hoisted_16 = { class: "p-4 text-white" };
const _hoisted_17 = { class: "flex gap-2" };
const _hoisted_18 = { class: "space-x-4" };
const _hoisted_19 = { class: "rounded-lg text-white" };
const _hoisted_20 = {
  class: "w-full text-sm",
  style: { "table-layout": "auto" }
};
const _hoisted_21 = { class: "pl-6 pr-4" };
const _hoisted_22 = { class: "pl-6 pr-4 text-center" };
const _hoisted_23 = { class: "px-6 py-[21px]" };
const _hoisted_24 = { class: "flex space-x-4" };
const _hoisted_25 = {
  key: 0,
  class: "grid h-12 w-12 place-items-center rounded-full bg-green-400"
};
const _hoisted_26 = { class: "text-lg font-semibold text-white" };
const _hoisted_27 = ["src"];
const _hoisted_28 = { class: "flex max-w-[25ch] items-center truncate text-lg font-medium" };
const _hoisted_29 = { class: "px-4.5 w-[136px]" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_BaseCheckbox = __nuxt_component_0;
  const _component_BaseCheckboxMotion = __nuxt_component_1;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Checkbox" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Plain Input" }, {
        default: withCtx(() => _cache[8] || (_cache[8] = [
          createBaseVNode(
            "div",
            { class: "space-x-4 px-4 py-2 text-white" },
            [
              createBaseVNode("div", { class: "mb-4 flex gap-4" }, [
                createBaseVNode("input", {
                  type: "radio",
                  name: "group",
                  style: { "--c": "var(--danger)" }
                }),
                createBaseVNode("input", {
                  type: "radio",
                  name: "group",
                  style: { "--c": "var(--success)" }
                }),
                createBaseVNode("input", {
                  type: "radio",
                  disabled: ""
                })
              ]),
              createBaseVNode("label", { class: "space-x-2" }, [
                createBaseVNode("input", {
                  type: "checkbox",
                  indeterminate: ""
                }),
                createBaseVNode("span", null, "Indeterminate")
              ]),
              createBaseVNode("label", { class: "space-x-2" }, [
                createBaseVNode("input", {
                  type: "checkbox",
                  disabled: ""
                }),
                createBaseVNode("span", null, "Disabled")
              ]),
              createBaseVNode("label", { class: "space-x-2" }, [
                createBaseVNode("input", {
                  type: "checkbox",
                  style: { "--background": "var(--success)" }
                }),
                createBaseVNode("span", null, "Normal")
              ])
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Base Checbox" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_BaseCheckbox, {
                modelValue: $setup.names,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.names = $event),
                value: "jack",
                "root-class": "flex space-x-2"
              }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode(" jack ")
                ])),
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
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode(" john ")
                ])),
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
                default: withCtx(() => _cache[11] || (_cache[11] = [
                  createTextVNode(" mike ")
                ])),
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
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_BaseCheckbox, { indeterminate: "" }, {
                default: withCtx(() => _cache[12] || (_cache[12] = [
                  createTextVNode("Indeterminate")
                ])),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_BaseCheckbox, { disabled: "" }, {
                default: withCtx(() => _cache[13] || (_cache[13] = [
                  createTextVNode("Disabled")
                ])),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_BaseCheckbox, { "model-value": true }, {
                default: withCtx(() => _cache[14] || (_cache[14] = [
                  createTextVNode("Default true")
                ])),
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
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("table", _hoisted_5, [
              createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", _hoisted_6, [
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
                      createBaseVNode("td", _hoisted_7, [
                        createBaseVNode("input", {
                          class: "h-[18px] w-[18px]",
                          type: "checkbox",
                          checked: $setup.isRowChecked(scholar),
                          onClick: ($event) => $setup.checkRow(scholar, index, $event)
                        }, null, 8, _hoisted_8)
                      ]),
                      createBaseVNode("td", _hoisted_9, [
                        createBaseVNode("div", _hoisted_10, [
                          !scholar.photoURL ? (openBlock(), createElementBlock("div", _hoisted_11, [
                            createBaseVNode(
                              "span",
                              _hoisted_12,
                              toDisplayString(scholar.displayName.slice(0, 1)),
                              1
                              /* TEXT */
                            )
                          ])) : (openBlock(), createElementBlock("img", {
                            key: 1,
                            src: scholar.photoURL,
                            class: "h-12 w-12 rounded-full",
                            "aria-hidden": "true"
                          }, null, 8, _hoisted_13)),
                          createBaseVNode(
                            "p",
                            _hoisted_14,
                            toDisplayString(scholar.displayName),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      _cache[15] || (_cache[15] = createBaseVNode(
                        "td",
                        { class: "px-4.5" },
                        "Mike. JAK#0812",
                        -1
                        /* HOISTED */
                      )),
                      createBaseVNode(
                        "td",
                        _hoisted_15,
                        toDisplayString(scholar.game),
                        1
                        /* TEXT */
                      ),
                      _cache[16] || (_cache[16] = createBaseVNode(
                        "td",
                        { class: "px-4.5 w-[88px]" },
                        "Jan 01, 1997",
                        -1
                        /* HOISTED */
                      )),
                      _cache[17] || (_cache[17] = createBaseVNode(
                        "td",
                        { class: "px-4.5 w-[269px]" },
                        [
                          createBaseVNode("p", null, "Played time"),
                          createBaseVNode("p", null, "2310")
                        ],
                        -1
                        /* HOISTED */
                      )),
                      _cache[18] || (_cache[18] = createBaseVNode(
                        "td",
                        { class: "px-4.5 w-[141px]" },
                        "0933423847",
                        -1
                        /* HOISTED */
                      )),
                      _cache[19] || (_cache[19] = createBaseVNode(
                        "td",
                        { class: "pr-6" },
                        [
                          createBaseVNode("button", {
                            type: "button",
                            class: "ml-auto grid h-9 w-9 place-items-center rounded-xl border-2"
                          }, [
                            createBaseVNode("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "1.5",
                              stroke: "currentColor",
                              class: "h-4 w-4"
                            }, [
                              createBaseVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              }),
                              createBaseVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              })
                            ])
                          ])
                        ],
                        -1
                        /* HOISTED */
                      ))
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
      }),
      createVNode(_component_Variant, { title: "Base ChecboxMotion" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("div", _hoisted_17, [
              createVNode(_component_BaseCheckboxMotion, {
                modelValue: $setup.names,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.names = $event),
                value: "jack",
                "root-class": "flex space-x-2"
              }, {
                default: withCtx(() => _cache[20] || (_cache[20] = [
                  createTextVNode(" jack ")
                ])),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              createVNode(_component_BaseCheckboxMotion, {
                modelValue: $setup.names,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.names = $event),
                value: "john",
                "root-class": "flex space-x-2",
                "root-style": "--background: var(--purple-500)"
              }, {
                default: withCtx(() => _cache[21] || (_cache[21] = [
                  createTextVNode(" john ")
                ])),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              createVNode(_component_BaseCheckboxMotion, {
                modelValue: $setup.names,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.names = $event),
                value: "mike",
                "root-class": "flex space-x-2",
                "root-style": "--background: var(--green-500)"
              }, {
                default: withCtx(() => _cache[22] || (_cache[22] = [
                  createTextVNode(" mike ")
                ])),
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
            createBaseVNode("div", _hoisted_18, [
              createVNode(_component_BaseCheckboxMotion, { indeterminate: "" }, {
                default: withCtx(() => _cache[23] || (_cache[23] = [
                  createTextVNode("Indeterminate")
                ])),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_BaseCheckboxMotion, { disabled: "" }, {
                default: withCtx(() => _cache[24] || (_cache[24] = [
                  createTextVNode("Disabled")
                ])),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_BaseCheckboxMotion, { "model-value": true }, {
                default: withCtx(() => _cache[25] || (_cache[25] = [
                  createTextVNode("Default true")
                ])),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_BaseCheckboxMotion, {
                modelValue: $setup.customCheckboxValue,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.customCheckboxValue = $event),
                "true-value": "Yes",
                "false-value": "No",
                "root-style": "--background: var(--teal-500)"
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
      createVNode(_component_Variant, { title: "Table Selection Motion" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("table", _hoisted_20, [
              createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", _hoisted_21, [
                    createVNode(_component_BaseCheckboxMotion, {
                      class: "inline-block h-[18px] w-[18px]",
                      type: "checkbox",
                      indeterminate: $setup.hasSelected && !$setup.isAllChecked,
                      "model-value": $setup.isAllChecked,
                      onChange: $setup.checkAll
                    }, null, 8, ["indeterminate", "model-value", "onChange"])
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
                      createBaseVNode("td", _hoisted_22, [
                        createVNode(_component_BaseCheckboxMotion, {
                          class: "h-[18px] w-[18px]",
                          type: "checkbox",
                          "model-value": $setup.isRowChecked(scholar),
                          onClick: ($event) => $setup.checkRow(scholar, index, $event)
                        }, null, 8, ["model-value", "onClick"])
                      ]),
                      createBaseVNode("td", _hoisted_23, [
                        createBaseVNode("div", _hoisted_24, [
                          !scholar.photoURL ? (openBlock(), createElementBlock("div", _hoisted_25, [
                            createBaseVNode(
                              "span",
                              _hoisted_26,
                              toDisplayString(scholar.displayName.slice(0, 1)),
                              1
                              /* TEXT */
                            )
                          ])) : (openBlock(), createElementBlock("img", {
                            key: 1,
                            src: scholar.photoURL,
                            class: "h-12 w-12 rounded-full",
                            "aria-hidden": "true"
                          }, null, 8, _hoisted_27)),
                          createBaseVNode(
                            "p",
                            _hoisted_28,
                            toDisplayString(scholar.displayName),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      _cache[26] || (_cache[26] = createBaseVNode(
                        "td",
                        { class: "px-4.5" },
                        "Mike. JAK#0812",
                        -1
                        /* HOISTED */
                      )),
                      createBaseVNode(
                        "td",
                        _hoisted_29,
                        toDisplayString(scholar.game),
                        1
                        /* TEXT */
                      ),
                      _cache[27] || (_cache[27] = createBaseVNode(
                        "td",
                        { class: "px-4.5 w-[88px]" },
                        "Jan 01, 1997",
                        -1
                        /* HOISTED */
                      )),
                      _cache[28] || (_cache[28] = createBaseVNode(
                        "td",
                        { class: "px-4.5 w-[269px]" },
                        [
                          createBaseVNode("p", null, "Played time"),
                          createBaseVNode("p", null, "2310")
                        ],
                        -1
                        /* HOISTED */
                      )),
                      _cache[29] || (_cache[29] = createBaseVNode(
                        "td",
                        { class: "px-4.5 w-[141px]" },
                        "0933423847",
                        -1
                        /* HOISTED */
                      )),
                      _cache[30] || (_cache[30] = createBaseVNode(
                        "td",
                        { class: "pr-6" },
                        [
                          createBaseVNode("button", {
                            type: "button",
                            class: "ml-auto grid h-9 w-9 place-items-center rounded-xl border-2"
                          }, [
                            createBaseVNode("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "1.5",
                              stroke: "currentColor",
                              class: "h-4 w-4"
                            }, [
                              createBaseVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              }),
                              createBaseVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              })
                            ])
                          ])
                        ],
                        -1
                        /* HOISTED */
                      ))
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
const Checkbox_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/base/checkbox/Checkbox.story.vue"]]);
export {
  Checkbox_story as default
};
