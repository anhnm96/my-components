import { _ as __nuxt_component_0 } from "./Button-b923a949.js";
import { az as defineComponent, aB as ref, ar as resolveComponent, as as createBlock, at as withCtx, au as openBlock, av as createVNode, aC as createTextVNode, ay as createBaseVNode } from "./vendor-671bda3b.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
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
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "a",
  {
    href: "https://css-tricks.com/making-disabled-buttons-more-inclusive/",
    rel: "noreferrer noopener",
    class: "mb-2 block text-white"
  },
  "Here's why we need aria-disabled button! ",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Normal",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "svg",
  {
    class: "flex",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  },
  [
    /* @__PURE__ */ createBaseVNode("path", {
      fill: "currentColor",
      d: "M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "space-x-2 space-y-2" },
  [
    /* @__PURE__ */ createBaseVNode("button", { class: "btn btn-link" }, "Link"),
    /* @__PURE__ */ createBaseVNode("button", { class: "btn btn-outline" }, "Test"),
    /* @__PURE__ */ createBaseVNode("button", { class: "btn btn-outline btn-info" }, "Test"),
    /* @__PURE__ */ createBaseVNode("button", { class: "btn btn-outline btn-success" }, "Test"),
    /* @__PURE__ */ createBaseVNode("button", { class: "btn btn-ghost" }, "Ghost")
  ],
  -1
  /* HOISTED */
);
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
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
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
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
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
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
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
            /* STABLE */
          }, 8, ["loading"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "others" }, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/base/button/Button.story.vue";
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/base/button/Button.story.vue"]]);
export {
  Button_story as default
};
