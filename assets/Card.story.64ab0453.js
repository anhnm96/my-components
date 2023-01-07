import { ar as defineComponent, aT as useCssVars, as as ref, aX as useMouseInElement, ax as computed, aV as unref, ay as openBlock, az as createElementBlock, aQ as createStaticVNode, aE as resolveComponent, aF as createBlock, aG as withCtx, aH as createVNode } from "./vendor.e7409a8b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _3dCard_vue_vue_type_style_index_0_scoped_68c0d066_lang = "";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$1 = {
  ref: "target",
  class: "card mx-auto max-w-[400px] rounded bg-charcoal-600 p-8 text-white shadow-2xl"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<h1 class="mb-2 text-2xl font-bold" data-v-68c0d066>B.S. Meeting Notes \u{1F974}</h1><section class="flex items-center" data-v-68c0d066><img src="https://learnvue.co/img/matt-maribojoc.png" class="mr-4 h-8 w-8 rounded" data-v-68c0d066><h2 class="font-2xl" data-v-68c0d066>@mattmaribojoc</h2></section><p class="mt-4" data-v-68c0d066> Organic growth beef up, and shotgun approach note for the previous submit: Can you ballpark the cost per unit for me. Conversational content reach out, what&#39;s the status on the deliverables for eow? </p>', 3);
const _hoisted_5 = [
  _hoisted_2$1
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_5, 512);
}
_sfc_main$2.__file = "components/tailwind/cards/3d-card.vue";
const ThreeDCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-68c0d066"], ["__file", "D:/projects/my-components/components/tailwind/cards/3d-card.vue"]]);
const LineClamp_vue_vue_type_style_index_0_scoped_5e89f949_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LineClamp",
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "card-container" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="wrapper text-gray-200" data-v-5e89f949><section class="intro" data-v-5e89f949><h1 class="text-xl" data-v-5e89f949>A dive into <code data-v-5e89f949>line-clamp</code></h1><p class="mt-2" data-v-5e89f949> It hasn&#39;t been standardized yet, so we need to prfix it, and it takes a few extra properties you&#39;ve probably never heard of before, but it could be really useful! </p></section><section data-v-5e89f949><div class="even-columns" data-v-5e89f949><div class="card" data-v-5e89f949><img src="https://images.unsplash.com/photo-1665243066869-1f27e948de5f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxMTQ0Nzc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=700" alt="" data-v-5e89f949><h2 class="card__title" data-v-5e89f949>A quick example</h2><p class="card__preview-text" data-v-5e89f949> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloribus. </p><button class="btn" data-v-5e89f949>Continue reading</button></div><div class="card" data-v-5e89f949><img src="https://images.unsplash.com/photo-1665243066869-1f27e948de5f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxMTQ0Nzc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=700" alt="" data-v-5e89f949><h2 class="card__title" data-v-5e89f949>A quick example</h2><p class="card__preview-text" data-v-5e89f949> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, nemo! consectetur adipisicing elit. Qui, doloribus. </p><button class="btn" data-v-5e89f949>Continue reading</button></div><div class="card" data-v-5e89f949><img src="https://images.unsplash.com/photo-1665243066869-1f27e948de5f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxMTQ0Nzc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=700" alt="" data-v-5e89f949><h2 class="card__title" data-v-5e89f949>A quick example</h2><p class="card__preview-text" data-v-5e89f949> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit officiis tempore dicta, sed illo sint nobis non odit soluta sit. amet consectetur adipisicing elit. Qui, doloribus. </p><button class="btn" data-v-5e89f949>Continue reading</button></div></div></section></div>', 1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3);
}
_sfc_main$1.__file = "components/tailwind/cards/LineClamp.vue";
const LineClamp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-5e89f949"], ["__file", "D:/projects/my-components/components/tailwind/cards/LineClamp.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { ThreeDCard, LineClamp };
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
