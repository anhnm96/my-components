import { as as _export_sfc, aD as defineComponent, aw as openBlock, ax as createBlock, ay as withCtx, aC as resolveDynamicComponent, aG as createBaseVNode, aH as createElementBlock, aI as renderList, aJ as Fragment } from "./vendor-BP-zCcN8.js";
const story = "Story";
const variant = "Variant";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GridTrack.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const data = [
      {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160",
        name: "Bramus",
        link: "https://x.com/bramus/"
      },
      {
        src: "https://images.unsplash.com/photo-1524159730786-4e74a1b78d7d?w=160",
        name: "Jhey Tompkins",
        link: "https://x.com/jh3yy/"
      },
      {
        src: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=160",
        name: "Una Kravets",
        link: "https://x.com/una/"
      },
      {
        src: "https://images.unsplash.com/photo-1542596594-649edbc13630?w=160",
        name: "Adam Argyle",
        link: "https://x.com/argyleink/"
      }
    ];
    const __returned__ = { story, variant, data };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "avatars",
  style: { "--color-core-primary": "#3740ff", "--color-core-tertiary": "#6001ff", "--color-core-bg": "#fff", "--color-avatars-background": "#f8f9fa" }
};
const _hoisted_2 = ["href", "title"];
const _hoisted_3 = ["alt", "src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($setup.story), {
    title: "Grid Track",
    layout: { type: "grid", width: "100%" }
  }, {
    default: withCtx(() => [
      (openBlock(), createBlock(resolveDynamicComponent($setup.variant), { title: "Left to right" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList($setup.data, (item) => {
                return createBaseVNode("a", {
                  key: item.link,
                  href: item.link,
                  title: `${item.name} on Twitter`
                }, [
                  createBaseVNode("img", {
                    alt: `Profile image for ${item.name}`,
                    class: "avatar",
                    decoding: "async",
                    height: "96",
                    loading: "lazy",
                    sizes: "(min-width: 96px) 96px, calc(100vw - 48px)",
                    src: item.src,
                    width: "96"
                  }, null, 8, _hoisted_3)
                ], 8, _hoisted_2);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      })),
      (openBlock(), createBlock(resolveDynamicComponent($setup.variant), { title: "Right to left" }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode(
            "div",
            { class: "bg-[#030507] px-4 py-2" },
            [
              createBaseVNode("ul", {
                class: "track-list",
                style: { "--count": "4" }
              }, [
                createBaseVNode("li", {
                  style: { "--index": "1" },
                  class: "track-item"
                }, [
                  createBaseVNode("button", { class: "track-btn" }, [
                    createBaseVNode("span", null, " Socials")
                  ])
                ]),
                createBaseVNode("li", {
                  style: { "--index": "2" },
                  class: "track-item"
                }, [
                  createBaseVNode("button", { class: "track-btn" }, [
                    createBaseVNode("span", null, " Twitter ")
                  ])
                ]),
                createBaseVNode("li", {
                  style: { "--index": "3" },
                  class: "track-item"
                }, [
                  createBaseVNode("button", { class: "track-btn" }, [
                    createBaseVNode("span", null, " Mastodon ")
                  ])
                ]),
                createBaseVNode("li", {
                  style: { "--index": "4" },
                  class: "track-item"
                }, [
                  createBaseVNode("button", { class: "track-btn" }, [
                    createBaseVNode("span", null, " CodePen ")
                  ])
                ])
              ])
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }))
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/tailwind/GridTrack.story.vue";
const GridTrack_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f575c53b"], ["__file", "D:/projects/my-components/components/tailwind/GridTrack.story.vue"]]);
export {
  GridTrack_story as default
};
