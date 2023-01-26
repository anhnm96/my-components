import { au as openBlock, aB as createElementBlock, ay as createBaseVNode, az as defineComponent, aC as ref, aD as renderSlot, aE as toDisplayString, aF as createCommentVNode, av as createVNode, aG as normalizeClass, ar as resolveComponent, as as createBlock, at as withCtx, aH as createTextVNode } from "./vendor.a79b1064.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$2 = {};
const _hoisted_1$2 = {
  class: "animate-spin text-white",
  "aria-hidden": "true",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$2
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$1);
}
_sfc_main$2.__file = "components/base/Spinner.vue";
const Spinner = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/base/Spinner.vue"]]);
const Button_vue_vue_type_style_index_0_scoped_b4ce9510_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    loading: { type: Boolean, required: false, default: false },
    loadingMsg: { type: String, required: false, default: "processing, wait..." }
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
const _hoisted_1$1 = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
};
const _hoisted_2$1 = {
  key: 0,
  class: "sr-only",
  "aria-live": "assertive"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    ref: "btnRef",
    class: normalizeClass(["btn", [$props.loading && "!pointer-events-none !text-transparent"]]),
    onClick: $setup.click
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true),
    $props.loading ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
      $props.loadingMsg ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString($props.loadingMsg), 1)) : createCommentVNode("v-if", true),
      createVNode($setup["Spinner"])
    ])) : createCommentVNode("v-if", true)
  ], 2);
}
_sfc_main$1.__file = "components/base/button/Button.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-b4ce9510"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/base/button/Button.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button.story",
  setup(__props, { expose }) {
    expose();
    const loading = ref(false);
    function click() {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 1e3);
    }
    const __returned__ = { loading, click };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "https://css-tricks.com/making-disabled-buttons-more-inclusive/",
  rel: "noreferrer noopener",
  class: "mb-2 block text-white"
}, "Here's why we need aria-disabled button! ", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", null, "Normal", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "flex",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "space-x-2 space-y-2" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "btn btn-link" }, "Link"),
  /* @__PURE__ */ createBaseVNode("button", { class: "btn btn-outline" }, "Test"),
  /* @__PURE__ */ createBaseVNode("button", { class: "btn btn-outline btn-info" }, "Test"),
  /* @__PURE__ */ createBaseVNode("button", { class: "btn btn-outline btn-success" }, "Test"),
  /* @__PURE__ */ createBaseVNode("button", { class: "btn btn-ghost" }, "Ghost")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseButton = __nuxt_component_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Button",
    layout: { type: "grid", width: "300px" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Loading-sm" }, {
        default: withCtx(() => [
          createVNode(_component_BaseButton, {
            class: "btn-sm rounded bg-purple-600 px-2 py-1 text-white",
            loading: ""
          }, {
            default: withCtx(() => [
              createTextVNode(" Button ")
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Disabled-lg" }, {
        default: withCtx(() => [
          createVNode(_component_BaseButton, {
            class: "btn-lg rounded bg-green-600 px-2 py-1 text-white",
            disabled: ""
          }, {
            default: withCtx(() => [
              createTextVNode(" Disabled ")
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "aria-disabled" }, {
        default: withCtx(() => [
          _hoisted_1,
          createVNode(_component_BaseButton, {
            class: "btn-xl rounded bg-blue-600 px-2 py-1 text-white",
            "aria-disabled": "true"
          }, {
            default: withCtx(() => [
              createTextVNode(" aira-disabled ")
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Normal" }, {
        default: withCtx(() => [
          createVNode(_component_BaseButton, {
            class: "space-x-1 rounded bg-red-600 px-2 py-1 text-white",
            loading: $setup.loading,
            onClick: $setup.click
          }, {
            default: withCtx(() => [
              _hoisted_2,
              _hoisted_3
            ]),
            _: 1
          }, 8, ["loading"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "others" }, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/base/button/Button.story.vue";
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/base/button/Button.story.vue"]]);
export {
  Button_story as default
};
