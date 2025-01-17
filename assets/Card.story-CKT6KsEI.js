import { aD as defineComponent, bc as useCssVars, at as ref, au as useMouseInElement, av as computed, as as _export_sfc, bd as unref, aw as openBlock, aH as createElementBlock, aX as createStaticVNode, aJ as Fragment, aI as renderList, aG as createBaseVNode, aF as createVNode, aL as toDisplayString, aN as __nuxt_component_0, aE as resolveComponent, ax as createBlock, ay as withCtx } from "./vendor-CMJc4gfg.js";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "3d-card",
  setup(__props, { expose: __expose }) {
    __expose();
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
const _hoisted_1$3 = {
  ref: "target",
  class: "card mx-auto max-w-[400px] rounded bg-charcoal-600 p-8 text-white shadow-2xl"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1$3,
    _cache[0] || (_cache[0] = [
      createStaticVNode('<h1 class="mb-2 text-2xl font-bold" data-v-68c0d066>B.S. Meeting Notes 🥴</h1><section class="flex items-center" data-v-68c0d066><img src="https://learnvue.co/img/matt-maribojoc.png" class="mr-4 h-8 w-8 rounded" data-v-68c0d066><h2 class="font-2xl" data-v-68c0d066>@mattmaribojoc</h2></section><p class="mt-4" data-v-68c0d066> Organic growth beef up, and shotgun approach note for the previous submit: Can you ballpark the cost per unit for me. Conversational content reach out, what&#39;s the status on the deliverables for eow? </p>', 3)
    ]),
    512
    /* NEED_PATCH */
  );
}
_sfc_main$4.__file = "components/tailwind/cards/3d-card.vue";
const ThreeDCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-68c0d066"], ["__file", "D:/projects/my-components/components/tailwind/cards/3d-card.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LineClamp",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "card-container" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createStaticVNode('<div class="wrapper text-gray-200" data-v-5e89f949><section class="intro" data-v-5e89f949><h1 class="text-xl" data-v-5e89f949>A dive into <code data-v-5e89f949>line-clamp</code></h1><p class="mt-2" data-v-5e89f949> It hasn&#39;t been standardized yet, so we need to prfix it, and it takes a few extra properties you&#39;ve probably never heard of before, but it could be really useful! </p></section><section data-v-5e89f949><div class="even-columns" data-v-5e89f949><div class="card" data-v-5e89f949><img src="https://images.unsplash.com/photo-1665243066869-1f27e948de5f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxMTQ0Nzc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=700" alt="" data-v-5e89f949><h2 class="card__title" data-v-5e89f949>A quick example</h2><p class="card__preview-text" data-v-5e89f949> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloribus. </p><button class="btn" data-v-5e89f949>Continue reading</button></div><div class="card" data-v-5e89f949><img src="https://images.unsplash.com/photo-1665243066869-1f27e948de5f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxMTQ0Nzc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=700" alt="" data-v-5e89f949><h2 class="card__title" data-v-5e89f949>A quick example</h2><p class="card__preview-text" data-v-5e89f949> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, nemo! consectetur adipisicing elit. Qui, doloribus. </p><button class="btn" data-v-5e89f949>Continue reading</button></div><div class="card" data-v-5e89f949><img src="https://images.unsplash.com/photo-1665243066869-1f27e948de5f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjYxMTQ0Nzc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=700" alt="" data-v-5e89f949><h2 class="card__title" data-v-5e89f949>A quick example</h2><p class="card__preview-text" data-v-5e89f949> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit officiis tempore dicta, sed illo sint nobis non odit soluta sit. amet consectetur adipisicing elit. Qui, doloribus. </p><button class="btn" data-v-5e89f949>Continue reading</button></div></div></section></div>', 1)
  ]));
}
_sfc_main$3.__file = "components/tailwind/cards/LineClamp.vue";
const LineClamp = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-5e89f949"], ["__file", "D:/projects/my-components/components/tailwind/cards/LineClamp.vue"]]);
const _sfc_main$2 = {};
const _hoisted_1$1 = { class: "relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12" };
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createStaticVNode('<div class="group relative mx-auto max-w-sm cursor-pointer overflow-hidden rounded-lg bg-white px-10 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"><span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span><div class="relative z-10 mx-auto max-w-md"><span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path></svg></span><div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90"><p> Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online. </p></div><div class="pt-5 text-base font-semibold leading-7"><p><a href="https://tailwindcss.com/docs" class="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs →</a></p></div></div></div>', 1)
  ]));
}
_sfc_main$2.__file = "components/tailwind/cards/Bubble.vue";
const Bubble = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "D:/projects/my-components/components/tailwind/cards/Bubble.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Linear",
  setup(__props, { expose: __expose }) {
    __expose();
    function mouseMove(e) {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    }
    const data = [
      {
        title: "Automated workflows",
        description: "Flexible workflows that automate away your busy work",
        icon: "mdi:moon-first-quarter"
      },
      {
        title: "Git integrations",
        description: "Automatically update and close issues as you work",
        icon: "material-symbols:add-circle"
      },
      {
        title: "Notification inbox",
        description: "A dedicated inbox to update tickets directly",
        icon: "mage:inbox-notification-fill"
      },
      {
        title: "Filters and Views",
        description: "Zero in on what's important for you",
        icon: "mdi:filter-variant"
      },
      {
        title: "Labels",
        description: "Organize and standardize your issues",
        icon: "mdi:label"
      },
      {
        title: "Powerful search",
        description: "Find anything across your entire workspace",
        icon: "mdi:magnify"
      }
    ];
    const __returned__ = { mouseMove, data };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "card-content" };
const _hoisted_2 = { class: "card-image" };
const _hoisted_3 = { class: "card-info-wrapper" };
const _hoisted_4 = { class: "card-info" };
const _hoisted_5 = { class: "card-info-title" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0;
  return openBlock(), createElementBlock(
    "div",
    {
      id: "cards",
      class: "text-white",
      onMousemove: $setup.mouseMove
    },
    [
      (openBlock(), createElementBlock(
        Fragment,
        null,
        renderList($setup.data, (c) => {
          return createBaseVNode("div", {
            key: c.title,
            class: "card"
          }, [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(_component_Icon, {
                  name: c.icon
                }, null, 8, ["name"])
              ]),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode(
                      "h3",
                      null,
                      toDisplayString(c.title),
                      1
                      /* TEXT */
                    ),
                    createBaseVNode(
                      "h4",
                      null,
                      toDisplayString(c.description),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ]);
        }),
        64
        /* STABLE_FRAGMENT */
      ))
    ],
    32
    /* NEED_HYDRATION */
  );
}
_sfc_main$1.__file = "components/tailwind/cards/Linear.vue";
const Linear = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-a6142a5f"], ["__file", "D:/projects/my-components/components/tailwind/cards/Linear.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { ThreeDCard, LineClamp, Bubble, Linear };
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
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Number of lines" }, {
        default: withCtx(() => [
          createVNode($setup["LineClamp"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Hover bubble" }, {
        default: withCtx(() => [
          createVNode($setup["Bubble"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Linear hover" }, {
        default: withCtx(() => [
          createVNode($setup["Linear"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/tailwind/cards/Card.story.vue";
const Card_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/tailwind/cards/Card.story.vue"]]);
export {
  Card_story as default
};
