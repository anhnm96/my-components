import { au as openBlock, aA as createElementBlock, ay as pushScopeId, az as popScopeId, aw as createBaseVNode, aB as defineComponent, aO as onMounted, ax as createTextVNode, bh as createStaticVNode, ar as resolveComponent, as as createBlock, at as withCtx, av as createVNode } from "./vendor-33f7b9d9.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const SlideUp_vue_vue_type_style_index_0_scoped_3d544dc9_lang = "";
const _sfc_main$2 = {};
const _withScopeId = (n) => (pushScopeId("data-v-3d544dc9"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "text-5xl" };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
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
  _hoisted_2$2,
  _hoisted_3,
  _hoisted_4,
  _hoisted_5
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("h2", _hoisted_1$2, _hoisted_6);
}
_sfc_main$2.__file = "components/tailwind/text/SlideUp.vue";
const SlideUp = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-3d544dc9"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/tailwind/text/SlideUp.vue"]]);
const Magic_vue_vue_type_style_index_0_scoped_22e917f2_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Magic",
  setup(__props, { expose }) {
    expose();
    let index = 0;
    const interval = 1e3;
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const animate = (star) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
      star.style.animation = "none";
      star.offsetHeight;
      star.style.animation = "";
    };
    onMounted(() => {
      for (const star of document.getElementsByClassName("magic-star")) {
        setTimeout(() => {
          animate(star);
          setInterval(() => animate(star), 1e3);
        }, index++ * (interval / 3));
      }
    });
    const __returned__ = { get index() {
      return index;
    }, set index(v) {
      index = v;
    }, interval, rand, animate };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "bg-black" };
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<span class="magic" data-v-22e917f2><span class="magic-star" data-v-22e917f2><svg viewBox="0 0 512 512" data-v-22e917f2><path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" data-v-22e917f2></path></svg></span><span class="magic-star" data-v-22e917f2><svg viewBox="0 0 512 512" data-v-22e917f2><path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" data-v-22e917f2></path></svg></span><span class="magic-star" data-v-22e917f2><svg viewBox="0 0 512 512" data-v-22e917f2><path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" data-v-22e917f2></path></svg></span><span class="magic-text" data-v-22e917f2>don&#39;t even know</span></span>', 1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h1", _hoisted_1$1, [
    createTextVNode(" Sometimes I'll start a line of code and I "),
    _hoisted_2$1,
    createTextVNode(" where it's going. ")
  ]);
}
_sfc_main$1.__file = "components/tailwind/text/Magic.vue";
const Magic = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-22e917f2"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/tailwind/text/Magic.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Text.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { SlideUp, Magic };
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
      }),
      createVNode(_component_Variant, { title: "Magic" }, {
        default: withCtx(() => [
          createVNode($setup["Magic"])
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
