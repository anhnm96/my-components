import { _ as __nuxt_component_0 } from "./Button-890dc7e1.js";
import { ar as defineComponent, as as resolveComponent, at as createBlock, au as withCtx, av as openBlock, aw as createVNode, ax as createBaseVNode, ay as createTextVNode, az as pushScopeId, aA as popScopeId } from "./vendor-c9bd13d9.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const Button_story_vue_vue_type_style_index_0_scoped_d87d186e_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button.story",
  setup(__props, { expose }) {
    expose();
    function download(e) {
      const btn = e.target;
      btn.classList.add("clicked");
      btn.textContent = "";
      setTimeout(() => {
        btn.classList.remove("clicked");
        setTimeout(() => {
          btn.textContent = "Download";
        }, 200);
      }, 3e3);
    }
    const __returned__ = { download };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-d87d186e"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "p-4" },
  [
    /* @__PURE__ */ createBaseVNode("button", { class: "btn-pulse rounded-md bg-blue-400 px-6 py-2 text-sm font-semibold text-white" }, " Buy now ")
  ],
  -1
  /* HOISTED */
));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "button",
  { class: "btn-disco relative overflow-hidden rounded-md px-8 py-4 will-change-transform" },
  [
    /* @__PURE__ */ createBaseVNode("span", { class: "absolute inset-[2px] -z-[1] rounded bg-black" }),
    /* @__PURE__ */ createBaseVNode("span", { class: "text-neutral-400" }, "Button")
  ],
  -1
  /* HOISTED */
));
const _hoisted_3 = { class: "p-14" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "p-4" },
  [
    /* @__PURE__ */ createBaseVNode("button", { class: "grid-btn" }, [
      /* @__PURE__ */ createBaseVNode("span", null, [
        /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, [
          /* @__PURE__ */ createBaseVNode("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            viewBox: "0 0 10 15"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              d: "M 10 0 L 10 5 L 5 5 L 0 0 Z M 0 5 L 5 5 L 10 10 L 5 10 L 5 15 L 0 10 Z",
              fill: "currentColor"
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("span", null, "Framer Button"),
        /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, [
          /* @__PURE__ */ createBaseVNode("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor"
          }, [
            /* @__PURE__ */ createBaseVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            })
          ])
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_BaseButton = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Button",
    layout: { type: "grid", width: "300px" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Pulse" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Gradient Border" }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Gradient Shadow" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_BaseButton, { class: "border-gradient before:transition-animation relative isolate rounded-lg border-2 border-solid border-transparent text-base before:absolute before:-inset-4 before:z-[-1] before:rounded-lg before:bg-gradient-to-r before:from-[#6658fe] before:via-[#9f6afe] before:to-[#b79dfe] before:opacity-0 before:blur-sm hover:before:opacity-75 hover:before:blur-xl" }, {
              default: withCtx(() => [
                createTextVNode(" Hover me ")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Grid Track" }, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Download" }, {
        default: withCtx(() => [
          createBaseVNode("div", { class: "pb-2 pt-4 text-center" }, [
            createBaseVNode("button", {
              class: "download-btn",
              onClick: $setup.download
            }, "Download")
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
_sfc_main.__file = "components/tailwind/Button.story.vue";
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d87d186e"], ["__file", "D:/projects/my-components/components/tailwind/Button.story.vue"]]);
export {
  Button_story as default
};
