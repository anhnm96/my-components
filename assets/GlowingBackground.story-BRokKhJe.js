import { aD as defineComponent, as as _export_sfc, aw as openBlock, aH as createElementBlock, aY as createStaticVNode, aM as pushScopeId, aN as popScopeId, aG as createBaseVNode, aO as createTextVNode, aE as resolveComponent, ax as createBlock, ay as withCtx, aF as createVNode } from "./vendor-BdBYoA5y.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GlowingBackground",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "bg-black px-8 py-32" };
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<div class="grid items-start justify-center gap-8"><div class="group relative"><div class="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div><button class="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black px-7 py-4 leading-none"><span class="flex items-center space-x-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 -rotate-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg><span class="pr-6 text-gray-100">Labs Release 2021.09</span></span><span class="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-100">See what&#39;s new →</span></button></div></div>', 1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [..._hoisted_3$1]);
}
_sfc_main$2.__file = "components/tailwind/backgrounds/GlowingBackground.vue";
const GlowingBackground = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "D:/projects/my-components/components/tailwind/backgrounds/GlowingBackground.vue"]]);
const _sfc_main$1 = {};
const _withScopeId = (n) => (pushScopeId("data-v-c12e63ee"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  role: "button",
  class: "glow-btn"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "glow" },
  null,
  -1
  /* HOISTED */
));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  null,
  [
    /* @__PURE__ */ createBaseVNode("span", null, "cool"),
    /* @__PURE__ */ createTextVNode("Glowing shadows")
  ],
  -1
  /* HOISTED */
));
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [..._hoisted_4]);
}
_sfc_main$1.__file = "components/tailwind/backgrounds/GlowingDark.vue";
const GlowingDark = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-c12e63ee"], ["__file", "D:/projects/my-components/components/tailwind/backgrounds/GlowingDark.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GlowingBackground.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { GlowingBackground, GlowingDark };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Glowing Background" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Titl" }, {
        default: withCtx(() => [
          createVNode($setup["GlowingBackground"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Dark" }, {
        default: withCtx(() => [
          createVNode($setup["GlowingDark"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/tailwind/backgrounds/GlowingBackground.story.vue";
const GlowingBackground_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/tailwind/backgrounds/GlowingBackground.story.vue"]]);
export {
  GlowingBackground_story as default
};
