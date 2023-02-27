import { au as openBlock, aA as createElementBlock, ay as pushScopeId, az as popScopeId, aw as createBaseVNode, aB as defineComponent, ar as resolveComponent, as as createBlock, at as withCtx, av as createVNode } from "./vendor-ef711c3e.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const SlideUp_vue_vue_type_style_index_0_scoped_3d544dc9_lang = "";
const _sfc_main$1 = {};
const _withScopeId = (n) => (pushScopeId("data-v-3d544dc9"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "text-5xl" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "word" },
  "Explore ",
  -1
  /* HOISTED */
));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "word" },
  "CSS ",
  -1
  /* HOISTED */
));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "word" },
  "With ",
  -1
  /* HOISTED */
));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "word" },
  "Me",
  -1
  /* HOISTED */
));
const _hoisted_6 = [
  _hoisted_2$1,
  _hoisted_3,
  _hoisted_4,
  _hoisted_5
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("h2", _hoisted_1$1, _hoisted_6);
}
_sfc_main$1.__file = "components/tailwind/text/SlideUp.vue";
const SlideUp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3d544dc9"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/tailwind/text/SlideUp.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Text.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { SlideUp };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  {
    style: { "--color-one": "#42d392", "--color-two": "#647eff" },
    class: "gradient-text py-2 text-5xl font-bold"
  },
  " The Progressive JavaScript Framework ",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  {
    style: { "--animated-gradient-color-one": "#42d392", "--animated-gradient-color-two": "#647eff" },
    class: "animated-gradient-text py-2 text-5xl font-bold"
  },
  " The Progressive JavaScript Framework ",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Text" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Gradient" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Animated Gradient" }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Slide Up" }, {
        default: withCtx(() => [
          createVNode($setup["SlideUp"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/tailwind/text/Text.story.vue";
const Text_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/tailwind/text/Text.story.vue"]]);
export {
  Text_story as default
};
