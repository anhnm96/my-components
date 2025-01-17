import { as as _export_sfc, aw as openBlock, aH as createElementBlock, aG as createBaseVNode, aD as defineComponent, at as ref, av as computed, az as renderSlot, aB as normalizeClass, ax as createBlock, ay as withCtx, aL as toDisplayString, aK as createCommentVNode, aF as createVNode, b0 as Transition, aN as __nuxt_component_0$1 } from "./vendor-CMJc4gfg.js";
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  class: "animate-spin",
  width: "1em",
  height: "1em",
  viewBox: "0 0 50 50"
};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createBaseVNode(
      "path",
      {
        fill: "currentColor",
        d: "M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4c-6-2.7-13.3-1.6-18.3 2.6c-4.8 4-7 10.5-5.6 16.6c1.3 6 6 10.9 11.9 12.5c7.1 2 13.6-1.4 17.6-7.2c-3.6 4.8-9.1 8-15.2 6.9s-11.1-5.7-12.5-11.7c-1.5-6.4 1.5-13.1 7.2-16.4c5.9-3.4 14.2-2.1 18.1 3.7c1 1.4 1.7 3.1 2 4.8c.3 1.4.2 2.9.4 4.3c.2 1.3 1.3 3 2.8 2.1c1.3-.8 1.2-2.5 1.1-3.8c0-.4.1.7 0 0"
      },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
_sfc_main$1.__file = "components/base/Spinner.vue";
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/projects/my-components/components/base/Spinner.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    loading: { type: Boolean, required: false, default: false },
    loadingMsg: { type: String, required: false, default: "processing, wait..." },
    success: { type: Boolean, required: false, default: false },
    successMsg: { type: String, required: false },
    contentClass: { type: String, required: false },
    hideStatusContent: { type: Boolean, required: false, default: false }
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const btnRef = ref();
    const isBtnUninteractive = computed(() => props.loading || props.success);
    function click(event) {
      var _a;
      const isBtnDisabled = ((_a = btnRef.value) == null ? void 0 : _a.getAttribute("aria-disabled")) === "true";
      if (isBtnDisabled || isBtnUninteractive.value) return;
      emit("click", event);
    }
    const __returned__ = { props, emit, btnRef, isBtnUninteractive, click };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2"
};
const _hoisted_2 = {
  key: 0,
  class: "sr-only",
  "aria-live": "assertive"
};
const _hoisted_3 = {
  key: 1,
  class: "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2"
};
const _hoisted_4 = {
  key: 0,
  class: "sr-only",
  "aria-live": "assertive"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseSpinner = __nuxt_component_2;
  const _component_Icon = __nuxt_component_0$1;
  return openBlock(), createElementBlock(
    "button",
    {
      ref: "btnRef",
      class: normalizeClass(["btn relative", [$setup.isBtnUninteractive && "!pointer-events-none"]]),
      onClick: $setup.click
    },
    [
      createBaseVNode(
        "span",
        {
          class: normalizeClass(["inline-flex items-center", [
            $props.contentClass,
            !$props.hideStatusContent && $setup.isBtnUninteractive && "invisible"
          ]])
        },
        [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        2
        /* CLASS */
      ),
      !$props.hideStatusContent && $setup.isBtnUninteractive ? (openBlock(), createBlock(Transition, {
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
            createVNode(_component_Icon, { name: "ic:baseline-check" })
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
  __nuxt_component_0 as _,
  __nuxt_component_2 as a
};
