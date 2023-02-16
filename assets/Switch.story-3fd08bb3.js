import { az as defineComponent, ba as useCssVars, b2 as reactive, bb as unref, au as openBlock, aD as createElementBlock, aP as Fragment, aE as renderSlot, aC as createTextVNode, aF as toDisplayString, aG as createCommentVNode, aB as ref, ar as resolveComponent, as as createBlock, at as withCtx, av as createVNode, ay as createBaseVNode } from "./vendor-96bbaf09.js";
import { u as useInternalValue } from "./index-2c75ad23.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const Switch_vue_vue_type_style_index_0_scoped_1d1a5bb9_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  props: {
    modelValue: { type: Boolean, required: false, default: false },
    label: { type: Object, required: false },
    activeColor: { type: String, required: false, default: "#36a829" },
    inActiveColor: { type: String, required: false, default: "#bfcbd9" },
    width: { type: String, required: false, default: "50px" },
    height: { type: String, required: false, default: "24px" },
    margin: { type: String, required: false, default: "3px" }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    useCssVars((_ctx) => ({
      "1d1a5bb9-styleVars.sWidth": unref(styleVars).sWidth,
      "1d1a5bb9-styleVars.sHeight": unref(styleVars).sHeight,
      "1d1a5bb9-styleVars.sInActiveColor": unref(styleVars).sInActiveColor,
      "1d1a5bb9-styleVars.sActiveColor": unref(styleVars).sActiveColor,
      "1d1a5bb9-styleVars.sMargin": unref(styleVars).sMargin
    }));
    const internalValue = useInternalValue(props, "modelValue", emit);
    const toggle = () => internalValue.value = !internalValue.value;
    const styleVars = reactive({
      sWidth: props.width,
      sHeight: props.height,
      sInActiveColor: props.inActiveColor,
      sActiveColor: props.activeColor,
      sMargin: props.margin
    });
    const __returned__ = { props, emit, internalValue, toggle, styleVars };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["aria-pressed"];
const _hoisted_2$1 = {
  key: 0,
  "data-test": "label"
};
const _hoisted_3$1 = {
  key: 1,
  "data-test": "label"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    role: "switch",
    type: "button",
    class: "toggle-button",
    "aria-pressed": $setup.internalValue,
    onClick: $setup.toggle
  }, [
    $props.label ? (openBlock(), createElementBlock(
      Fragment,
      { key: 0 },
      [
        $setup.internalValue ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "checked", {}, () => [
            createTextVNode(
              toDisplayString($props.label.checked),
              1
              /* TEXT */
            )
          ], true)
        ])) : (openBlock(), createElementBlock("span", _hoisted_3$1, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(
              toDisplayString($props.label.unchecked),
              1
              /* TEXT */
            )
          ], true)
        ]))
      ],
      64
      /* STABLE_FRAGMENT */
    )) : createCommentVNode("v-if", true)
  ], 8, _hoisted_1$1);
}
_sfc_main$1.__file = "components/custom/switch/Switch.vue";
const Switch = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-1d1a5bb9"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/switch/Switch.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Switch.story",
  setup(__props, { expose }) {
    expose();
    const switchState = ref(false);
    const __returned__ = { switchState, Switch };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "p-2 text-center" };
const _hoisted_2 = { class: "p-2 text-center" };
const _hoisted_3 = { class: "p-2 text-center" };
const _hoisted_4 = {
  id: "lb",
  dir: "rtl",
  class: "inline-flex gap-1"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Hodor or not?",
  -1
  /* HOISTED */
);
const _hoisted_6 = { class: "p-2 text-center" };
const _hoisted_7 = { class: "p-2 text-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Switch",
    layout: { type: "grid", width: "350px" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "normal" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["Switch"], { label: { checked: "asd", unchecked: "zxc" } })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "custom width, show label when checked only" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["Switch"], {
              modelValue: $setup.switchState,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.switchState = $event),
              "active-color": "#bb99cc",
              width: "100px",
              label: { checked: "only left label", unchecked: "" }
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "label with rtl" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("label", _hoisted_4, [
              createVNode($setup["Switch"], {
                id: "btn",
                modelValue: $setup.switchState,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.switchState = $event),
                "aria-labelledby": "lb btn",
                "active-color": "#fe877b",
                "in-active-color": "#be3e61",
                width: "200px",
                height: "40px",
                label: { checked: "Holdd the door?", unchecked: "Hodor" }
              }, null, 8, ["modelValue"]),
              _hoisted_5
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "custom color, size, label" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_6, [
            createVNode($setup["Switch"], {
              modelValue: $setup.switchState,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.switchState = $event),
              "active-color": "linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",
              margin: "6px",
              "in-active-color": "linear-gradient(to left, #0cebeb, #20e3b2, #29ffc6)",
              width: "200px",
              height: "40px",
              label: { checked: "Holdd the door?", unchecked: "Hodor" }
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "disabled" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_7, [
            createVNode($setup["Switch"], {
              modelValue: $setup.switchState,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.switchState = $event),
              disabled: ""
            }, null, 8, ["modelValue"])
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
_sfc_main.__file = "components/custom/switch/Switch.story.vue";
const Switch_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/switch/Switch.story.vue"]]);
export {
  Switch_story as default
};
