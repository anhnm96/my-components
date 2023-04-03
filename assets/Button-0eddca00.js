import { av as openBlock, aB as createElementBlock, ax as createBaseVNode, ar as defineComponent, aC as ref, aD as renderSlot, at as createBlock, au as withCtx, aE as toDisplayString, aF as createCommentVNode, aw as createVNode, aG as Transition, aH as normalizeClass, az as pushScopeId, aA as popScopeId } from "./vendor-444c1cf7.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
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
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
_sfc_main$1.__file = "components/base/Spinner.vue";
const Spinner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/projects/my-components/components/base/Spinner.vue"]]);
const Button_vue_vue_type_style_index_0_scoped_b4ce9510_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    loading: { type: Boolean, required: false, default: false },
    loadingMsg: { type: String, required: false, default: "processing, wait..." },
    success: { type: Boolean, required: false, default: false },
    successMsg: { type: String, required: false }
  },
  emits: ["click"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const btnRef = ref();
    function click(event) {
      var _a;
      const isBtnDisabled = ((_a = btnRef.value) == null ? void 0 : _a.getAttribute("aria-disabled")) === "true";
      if (isBtnDisabled || props.loading) {
        return;
      }
      emit("click", event);
    }
    const __returned__ = { props, emit, btnRef, click, Spinner };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-b4ce9510"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
};
const _hoisted_2 = {
  key: 0,
  class: "sr-only",
  "aria-live": "assertive"
};
const _hoisted_3 = {
  key: 1,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
};
const _hoisted_4 = {
  key: 0,
  class: "sr-only",
  "aria-live": "assertive"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "svg",
  {
    class: "text-white",
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  },
  [
    /* @__PURE__ */ createBaseVNode("path", {
      fill: "currentColor",
      d: "M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
    })
  ],
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
            createVNode($setup["Spinner"])
          ])) : $props.success ? (openBlock(), createElementBlock("div", _hoisted_3, [
            $props.successMsg ? (openBlock(), createElementBlock(
              "span",
              _hoisted_4,
              toDisplayString($props.successMsg),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true),
            createCommentVNode(' <Icon name="ic:baseline-check" class="text-white" /> '),
            _hoisted_5
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
