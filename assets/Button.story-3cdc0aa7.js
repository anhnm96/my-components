import { ar as resolveComponent, as as createBlock, at as withCtx, au as openBlock, av as createVNode, aw as pushScopeId, ax as popScopeId, ay as createBaseVNode } from "./vendor-58dc2a1a.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const Button_story_vue_vue_type_style_index_0_scoped_d87d186e_lang = "";
const _sfc_main = {};
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
function _sfc_render(_ctx, _cache) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Button",
    layout: { type: "grid" }
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
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/tailwind/Button.story.vue";
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d87d186e"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/tailwind/Button.story.vue"]]);
export {
  Button_story as default
};
