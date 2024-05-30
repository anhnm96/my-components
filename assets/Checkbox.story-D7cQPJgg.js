import { u as useInternalValue } from "./index-B3Q-NNkV.js";
import { aD as defineComponent, at as ref, as as _export_sfc, aw as openBlock, aH as createElementBlock, aP as withDirectives, aQ as vModelCheckbox, aG as createBaseVNode, aR as mergeProps, az as renderSlot, aK as createCommentVNode, aB as normalizeClass, aS as withModifiers, av as computed, aT as onMounted, aU as watch, aF as createVNode, aA as normalizeStyle, aM as pushScopeId, aN as popScopeId, aE as resolveComponent, ax as createBlock, ay as withCtx, aO as createTextVNode, aL as toDisplayString, aI as renderList, aJ as Fragment } from "./vendor-BdBYoA5y.js";
import { _ as __nuxt_component_1$1 } from "./VMotion-6cY7kzDE.js";
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
    const value = useInternalValue(props, "modelValue", emit);
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
        if (inputRef.value)
          inputRef.value.indeterminate = val;
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
const _withScopeId = (n) => (pushScopeId("data-v-db1be4f5"), n = n(), popScopeId(), n);
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
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 12h-15"
  },
  null,
  -1
  /* HOISTED */
));
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _hoisted_5$1 = { key: 0 };
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
          $setup.isIndeterminated ? (openBlock(), createElementBlock("svg", _hoisted_2$1, [..._hoisted_4$1])) : createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_5$1, [
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
const _hoisted_22 = { class: "p-4 text-white" };
const _hoisted_23 = { class: "flex gap-2" };
const _hoisted_24 = { class: "space-x-4" };
const _hoisted_25 = { class: "rounded-lg text-white" };
const _hoisted_26 = {
  class: "w-full text-sm",
  style: { "table-layout": "auto" }
};
const _hoisted_27 = { class: "pl-6 pr-4" };
const _hoisted_28 = { class: "pl-6 pr-4 text-center" };
const _hoisted_29 = { class: "px-6 py-[21px]" };
const _hoisted_30 = { class: "flex space-x-4" };
const _hoisted_31 = {
  key: 0,
  class: "grid h-12 w-12 place-items-center rounded-full bg-green-400"
};
const _hoisted_32 = { class: "text-lg font-semibold text-white" };
const _hoisted_33 = ["src"];
const _hoisted_34 = { class: "flex max-w-[25ch] items-center truncate text-lg font-medium" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "td",
  { class: "px-4.5" },
  "Mike. JAK#0812",
  -1
  /* HOISTED */
);
const _hoisted_36 = { class: "px-4.5 w-[136px]" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "td",
  { class: "px-4.5 w-[88px]" },
  "Jan 01, 1997",
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "td",
  { class: "px-4.5 w-[269px]" },
  [
    /* @__PURE__ */ createBaseVNode("p", null, "Played time"),
    /* @__PURE__ */ createBaseVNode("p", null, "2310")
  ],
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "td",
  { class: "px-4.5 w-[141px]" },
  "0933423847",
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
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
  const _component_BaseCheckboxMotion = __nuxt_component_1;
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
      }),
      createVNode(_component_Variant, { title: "Base ChecboxMotion" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, [
              createVNode(_component_BaseCheckboxMotion, {
                modelValue: $setup.names,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.names = $event),
                value: "jack",
                "root-class": "flex space-x-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" jack ")
                ]),
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
                default: withCtx(() => [
                  createTextVNode(" john ")
                ]),
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
            createBaseVNode("div", _hoisted_24, [
              createVNode(_component_BaseCheckboxMotion, { indeterminate: "" }, {
                default: withCtx(() => [
                  createTextVNode("Indeterminate")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_BaseCheckboxMotion, { disabled: "" }, {
                default: withCtx(() => [
                  createTextVNode("Disabled")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_BaseCheckboxMotion, { "model-value": true }, {
                default: withCtx(() => [
                  createTextVNode("Default true")
                ]),
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
          createBaseVNode("div", _hoisted_25, [
            createBaseVNode("table", _hoisted_26, [
              createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", _hoisted_27, [
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
                      createBaseVNode("td", _hoisted_28, [
                        createVNode(_component_BaseCheckboxMotion, {
                          class: "h-[18px] w-[18px]",
                          type: "checkbox",
                          "model-value": $setup.isRowChecked(scholar),
                          onClick: ($event) => $setup.checkRow(scholar, index, $event)
                        }, null, 8, ["model-value", "onClick"])
                      ]),
                      createBaseVNode("td", _hoisted_29, [
                        createBaseVNode("div", _hoisted_30, [
                          !scholar.photoURL ? (openBlock(), createElementBlock("div", _hoisted_31, [
                            createBaseVNode(
                              "span",
                              _hoisted_32,
                              toDisplayString(scholar.displayName.slice(0, 1)),
                              1
                              /* TEXT */
                            )
                          ])) : (openBlock(), createElementBlock("img", {
                            key: 1,
                            src: scholar.photoURL,
                            class: "h-12 w-12 rounded-full",
                            "aria-hidden": "true"
                          }, null, 8, _hoisted_33)),
                          createBaseVNode(
                            "p",
                            _hoisted_34,
                            toDisplayString(scholar.displayName),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      _hoisted_35,
                      createBaseVNode(
                        "td",
                        _hoisted_36,
                        toDisplayString(scholar.game),
                        1
                        /* TEXT */
                      ),
                      _hoisted_37,
                      _hoisted_38,
                      _hoisted_39,
                      _hoisted_40
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
