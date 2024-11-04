import { as as _export_sfc, at as ref, au as useMouseInElement, av as computed, aw as openBlock, ax as createBlock, ay as withCtx, az as renderSlot, aA as normalizeStyle, aB as normalizeClass, aC as resolveDynamicComponent, aD as defineComponent, aE as resolveComponent, aF as createVNode, aG as createBaseVNode, aH as createElementBlock, aI as renderList, aJ as Fragment, aK as createCommentVNode, aL as toDisplayString } from "./vendor-DNJAtGl5.js";
const _sfc_main$1 = {
  __name: "SpotlightCard",
  props: {
    as: {
      type: String,
      default: "div"
    },
    from: {
      type: String,
      default: "rgba(255,255,255,0.8)"
    },
    via: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: "transparent"
    },
    size: {
      type: Number,
      default: 350
    },
    mode: {
      type: String,
      default: "before"
    },
    hsl: {
      type: Boolean,
      default: false
    },
    hslMin: {
      type: Number,
      default: 0
    },
    hslMax: {
      type: Number,
      default: 360
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const card = ref();
    const { elementX, elementY, elementHeight, elementWidth } = useMouseInElement(card);
    const spotlightColorStops = computed(() => {
      if (props.hsl) {
        const margin = props.hslMax - props.hslMin;
        const rate = (elementY.value + elementX.value) / (elementHeight.value + elementWidth.value);
        const hue = Math.round(margin * rate + props.hslMin);
        return `hsl(${hue} 80% 70%),transparent`;
      }
      return [props.from, props.via, props.to].filter((value) => !!value).join(",");
    });
    const __returned__ = { props, card, elementX, elementY, elementHeight, elementWidth, spotlightColorStops };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.as), {
    ref: "card",
    style: normalizeStyle({
      "--x": `${$setup.elementX}px`,
      "--y": `${$setup.elementY}px`,
      "--spotlight-color-stops": $setup.spotlightColorStops,
      "--spotlight-size": `${$props.size}px`
    }),
    class: normalizeClass([{
      "before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]": $props.mode === "before",
      "after:absolute after:inset-0 after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]": $props.mode === "after"
    }, "relative transform-gpu overflow-hidden"])
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["style", "class"]);
}
_sfc_main$1.__file = "components/features/SpotlightCard.vue";
const SpotlightCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/projects/my-components/components/features/SpotlightCard.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SpotlightCard.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const items = [
      {
        name: "Michael Dam",
        title: "Product Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=640"
      },
      {
        name: "Austin Distel",
        title: "Media Giant",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=640"
      }
    ];
    const __returned__ = { items, SpotlightCard };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex h-screen w-screen items-center justify-center gap-8" };
const _hoisted_2 = { class: "relative" };
const _hoisted_3 = ["src"];
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "mt-4 px-2" };
const _hoisted_6 = { class: "font-medium text-white" };
const _hoisted_7 = { class: "text-white/75" };
const _hoisted_8 = { class: "flex h-screen w-screen items-center px-8" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, null, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Overlay highlight" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList($setup.items, (item, index) => {
                return createVNode(
                  $setup["SpotlightCard"],
                  {
                    key: index,
                    mode: "after",
                    from: "rgba(255,255,255,0.1)",
                    size: 400,
                    class: "group w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4"
                  },
                  {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_2, [
                        createBaseVNode("img", {
                          class: "absolute inset-0 h-64 w-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0",
                          src: item.image
                        }, null, 8, _hoisted_3),
                        createBaseVNode("img", {
                          class: "relative h-64 w-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0",
                          src: item.image
                        }, null, 8, _hoisted_4),
                        createBaseVNode("div", _hoisted_5, [
                          createBaseVNode(
                            "div",
                            _hoisted_6,
                            toDisplayString(item.name),
                            1
                            /* TEXT */
                          ),
                          createBaseVNode(
                            "div",
                            _hoisted_7,
                            toDisplayString(item.title),
                            1
                            /* TEXT */
                          )
                        ])
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                );
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Dynamically colored border" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_8, [
            createVNode($setup["SpotlightCard"], {
              hsl: "",
              "hsl-min": 200,
              "hsl-max": 280,
              size: 300,
              class: "shadow-white/2.5 mx-auto max-w-sm rounded-[--radius] bg-white/10 shadow-xl [--radius:theme(borderRadius.2xl)]"
            }, {
              default: withCtx(() => [
                _cache[0] || (_cache[0] = createBaseVNode(
                  "div",
                  { class: "absolute inset-px rounded-[calc(var(--radius)-1px)] bg-zinc-800" },
                  null,
                  -1
                  /* HOISTED */
                )),
                createCommentVNode(" highlight "),
                _cache[1] || (_cache[1] = createBaseVNode(
                  "div",
                  { class: "absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]" },
                  null,
                  -1
                  /* HOISTED */
                )),
                _cache[2] || (_cache[2] = createBaseVNode(
                  "div",
                  { class: "relative" },
                  [
                    createBaseVNode("div", { class: "relative py-20" }, [
                      createBaseVNode("div", { class: "absolute inset-0 flex items-center justify-center [mask-image:linear-gradient(to_bottom,white,transparent)]" }, [
                        createBaseVNode("div", { class: "bg-white/2.5 absolute h-96 w-96 rounded-full shadow-xl" }),
                        createBaseVNode("div", { class: "bg-white/2.5 absolute h-[19rem] w-[19rem] rounded-full border border-white/5 shadow-xl" }),
                        createBaseVNode("div", { class: "bg-white/2.5 absolute h-56 w-56 rounded-full border border-white/10 shadow-xl" }),
                        createBaseVNode("div", { class: "bg-white/2.5 absolute h-36 w-36 rounded-full border border-dashed border-white/15 shadow-xl" })
                      ]),
                      createBaseVNode("div", { class: "relative flex items-center justify-center" }, [
                        createBaseVNode("div", { class: "flex h-16 w-16 rounded-full border border-white/25 bg-white/5 p-3 shadow-xl" }, [
                          createBaseVNode("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: "h-10 w-10 stroke-[1] text-zinc-200"
                          }, [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                            })
                          ])
                        ])
                      ])
                    ]),
                    createCommentVNode(" description "),
                    createBaseVNode("div", { class: "mt-6 px-8 pb-8" }, [
                      createBaseVNode("div", { class: "text-lg text-white" }, "Secure authentication"),
                      createBaseVNode("p", { class: "mt-2 text-sm font-light leading-relaxed text-white/75" }, " Unlock the future with Touch ID. Fast, secure, and uniquely yours, unless someone takes a copy of your finger. ")
                    ])
                  ],
                  -1
                  /* HOISTED */
                ))
              ]),
              _: 1
              /* STABLE */
            })
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
_sfc_main.__file = "components/features/SpotlightCard.story.vue";
const SpotlightCard_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/features/SpotlightCard.story.vue"]]);
export {
  SpotlightCard_story as default
};
