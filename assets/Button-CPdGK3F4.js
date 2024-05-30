import { as as _export_sfc, aw as openBlock, aH as createElementBlock, aG as createBaseVNode, aD as defineComponent, at as ref, az as renderSlot, ax as createBlock, ay as withCtx, aL as toDisplayString, aK as createCommentVNode, aF as createVNode, b1 as Transition, aB as normalizeClass, bo as __nuxt_component_0$2 } from "./vendor-BdBYoA5y.js";
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  class: "animate-spin text-white",
  "aria-hidden": "true",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2Z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_3$1]);
}
_sfc_main$1.__file = "components/base/Spinner.vue";
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/projects/my-components/components/base/Spinner.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    loading: { type: Boolean, required: false, default: false },
    loadingMsg: { type: String, required: false, default: "processing, wait..." },
    success: { type: Boolean, required: false, default: false },
    successMsg: { type: String, required: false }
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const btnRef = ref();
    function click(event) {
      var _a;
      const isBtnDisabled = ((_a = btnRef.value) == null ? void 0 : _a.getAttribute("aria-disabled")) === "true";
      if (isBtnDisabled || props.loading) {
        return;
      }
      emit("click", event);
    }
    const __returned__ = { props, emit, btnRef, click };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
};
const _hoisted_2 = {
  key: 0,
  class: "sr-only",
  "aria-live": "assertive"
};
const _hoisted_3 = {
  key: 1,
  class: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
};
const _hoisted_4 = {
  key: 0,
  class: "sr-only",
  "aria-live": "assertive"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseSpinner = __nuxt_component_0$1;
  const _component_Icon = __nuxt_component_0$2;
  return openBlock(), createElementBlock(
    "button",
    {
      ref: "btnRef",
      class: normalizeClass(["btn", [($props.loading || $props.success) && "!pointer-events-none !text-transparent"]]),
      onClick: $setup.click
    },
    [
      renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.loading || $props.success ? (openBlock(), createBlock(Transition, {
        key: 0,
        name: "fade",
        mode: "out-in"
      }, {
        default: withCtx(() => [
          $props.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
            $props.loadingMsg ? (openBlock(), createElementBlock(
              "span",
              _hoisted_2,
              toDisplayString($props.loadingMsg),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true),
            createVNode(_component_BaseSpinner)
          ])) : $props.success ? (openBlock(), createElementBlock("div", _hoisted_3, [
            $props.successMsg ? (openBlock(), createElementBlock(
              "span",
              _hoisted_4,
              toDisplayString($props.successMsg),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true),
            createVNode(_component_Icon, {
              name: "ic:baseline-check",
              class: "text-white"
            })
          ])) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      })) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main.__file = "components/base/button/Button.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b4ce9510"], ["__file", "D:/projects/my-components/components/base/button/Button.vue"]]);
export {
  __nuxt_component_0 as _
};
