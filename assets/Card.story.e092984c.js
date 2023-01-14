import { ar as defineComponent, aR as useCssVars, aA as ref, a$ as useMouseInElement, aF as computed, aS as unref, av as openBlock, aG as createElementBlock, aY as createStaticVNode, as as resolveComponent, at as createBlock, au as withCtx, aw as createVNode } from "./vendor.aa0959a2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cdc0426e.js";
const _3dCard_vue_vue_type_style_index_0_scoped_68c0d066_lang = "";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "3d-card",
  setup(__props, { expose }) {
    expose();
    useCssVars((_ctx) => ({
      "68c0d066-cardTransform": unref(cardTransform)
    }));
    const target = ref(null);
    const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);
    const cardTransform = computed(() => {
      const MAX_ROTATION = 6;
      const rX = (MAX_ROTATION / 2 - elementY.value / elementHeight.value * MAX_ROTATION).toFixed(2);
      const rY = (elementX.value / elementWidth.value * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2);
      return isOutside.value ? "" : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    });
    const __returned__ = { target, elementX, elementY, isOutside, elementHeight, elementWidth, cardTransform };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = {
  ref: "target",
  class: "card mx-auto max-w-[400px] rounded bg-charcoal-600 p-8 text-white shadow-2xl"
};
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<h1 class="mb-2 text-2xl font-bold" data-v-68c0d066>B.S. Meeting Notes \u{1F974}</h1><section class="flex items-center" data-v-68c0d066><img src="https://learnvue.co/img/matt-maribojoc.png" class="mr-4 h-8 w-8 rounded" data-v-68c0d066><h2 class="font-2xl" data-v-68c0d066>@mattmaribojoc</h2></section><p class="mt-4" data-v-68c0d066> Organic growth beef up, and shotgun approach note for the previous submit: Can you ballpark the cost per unit for me. Conversational content reach out, what&#39;s the status on the deliverables for eow? </p>', 3);
const _hoisted_5 = [
  _hoisted_2$2
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, _hoisted_5, 512);
}
_sfc_main$3.__file = "components/tailwind/cards/3d-card.vue";
const ThreeDCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-68c0d066"], ["__file", "D:/projects/my-components/components/tailwind/cards/3d-card.vue"]]);
const LineClamp_vue_vue_type_style_index_0_scoped_5e89f949_lang = "";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LineClamp",
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "card-container" };
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<div class="wrapper text-gray-200" data-v-5e89f949><section class="intro" data-v-5e89f949><h1 class="text-xl" data-v-5e89f949>A dive into <code data-v-5e89f949>line-clamp</code></h1><p class="mt-2" data-v-5e89f949> It hasn&#39;t been standardized yet, so we need to prfix it, and it takes a few extra properties you&#39;ve probably never heard of before, but it could be really useful! </p></section><section data-v-5e89f949><div class="even-columns" data-v-5e89f949><div class="card" data-v-5e89f949><img src="https://images.unsplash.com/photo-1665243066869-1f27e948de5f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxMTQ0Nzc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=700" alt="" data-v-5e89f949><h2 class="card__title" data-v-5e89f949>A quick example</h2><p class="card__preview-text" data-v-5e89f949> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloribus. </p><button class="btn" data-v-5e89f949>Continue reading</button></div><div class="card" data-v-5e89f949><img src="https://images.unsplash.com/photo-1665243066869-1f27e948de5f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxMTQ0Nzc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=700" alt="" data-v-5e89f949><h2 class="card__title" data-v-5e89f949>A quick example</h2><p class="card__preview-text" data-v-5e89f949> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, nemo! consectetur adipisicing elit. Qui, doloribus. </p><button class="btn" data-v-5e89f949>Continue reading</button></div><div class="card" data-v-5e89f949><img src="https://images.unsplash.com/photo-1665243066869-1f27e948de5f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxMTQ0Nzc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=700" alt="" data-v-5e89f949><h2 class="card__title" data-v-5e89f949>A quick example</h2><p class="card__preview-text" data-v-5e89f949> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit officiis tempore dicta, sed illo sint nobis non odit soluta sit. amet consectetur adipisicing elit. Qui, doloribus. </p><button class="btn" data-v-5e89f949>Continue reading</button></div></div></section></div>', 1);
const _hoisted_3 = [
  _hoisted_2$1
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_3);
}
_sfc_main$2.__file = "components/tailwind/cards/LineClamp.vue";
const LineClamp = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-5e89f949"], ["__file", "D:/projects/my-components/components/tailwind/cards/LineClamp.vue"]]);
const _sfc_main$1 = {};
const _hoisted_1 = { class: "relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308"><div class="group relative mx-auto max-w-sm cursor-pointer overflow-hidden rounded-lg bg-white px-10 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"><span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span><div class="relative z-10 mx-auto max-w-md"><span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path></svg></span><div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90"><p> Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online. </p></div><div class="pt-5 text-base font-semibold leading-7"><p><a href="https://tailwindcss.com/docs" class="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs \u2192</a></p></div></div></div>', 2);
const _hoisted_4 = [
  _hoisted_2
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_4);
}
_sfc_main$1.__file = "components/tailwind/cards/Bubble.vue";
const Bubble = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/projects/my-components/components/tailwind/cards/Bubble.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { ThreeDCard, LineClamp, Bubble };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Cards" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "3d card" }, {
        default: withCtx(() => [
          createVNode($setup["ThreeDCard"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Number of lines" }, {
        default: withCtx(() => [
          createVNode($setup["LineClamp"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Hover bubble" }, {
        default: withCtx(() => [
          createVNode($setup["Bubble"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/tailwind/cards/Card.story.vue";
const Card_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/tailwind/cards/Card.story.vue"]]);
export {
  Card_story as default
};
