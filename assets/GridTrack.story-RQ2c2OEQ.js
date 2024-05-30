import { as as _export_sfc, aD as defineComponent, aw as openBlock, ax as createBlock, ay as withCtx, aC as resolveDynamicComponent, aM as pushScopeId, aN as popScopeId, aG as createBaseVNode } from "./vendor-BdBYoA5y.js";
const story = "Story";
const variant = "Variant";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GridTrack.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { story, variant };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-f575c53b"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "avatars",
    style: { "--color-core-primary": "#3740ff", "--color-core-tertiary": "#6001ff", "--color-core-bg": "#fff", "--color-avatars-background": "#f8f9fa" }
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://x.com/bramus/",
      title: "Bramus on Twitter"
    }, [
      /* @__PURE__ */ createBaseVNode("img", {
        alt: "Profile image for Bramus",
        class: "avatar",
        decoding: "async",
        height: "96",
        loading: "lazy",
        sizes: "(min-width: 96px) 96px, calc(100vw - 48px)",
        src: "https://pbs.twimg.com/profile_images/1276240813333401600/brd0hSfW_400x400.jpg",
        width: "96"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://x.com/jh3yy/",
      title: "Jhey on Twitter"
    }, [
      /* @__PURE__ */ createBaseVNode("img", {
        alt: "Profile image for Jhey Tompkins",
        class: "avatar",
        decoding: "async",
        height: "96",
        loading: "lazy",
        sizes: "(min-width: 96px) 96px, calc(100vw - 48px)",
        src: "https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg",
        width: "96"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://x.com/una/",
      title: "Una on Twitter"
    }, [
      /* @__PURE__ */ createBaseVNode("img", {
        alt: "Profile image for Una Kravets",
        class: "avatar",
        decoding: "async",
        height: "96",
        loading: "lazy",
        sizes: "(min-width: 96px) 96px, calc(100vw - 48px)",
        src: "https://pbs.twimg.com/profile_images/1587634978308997121/u7009cGe_400x400.jpg",
        width: "96"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://x.com/argyleink/",
      title: "Adam on Twitter"
    }, [
      /* @__PURE__ */ createBaseVNode("img", {
        alt: "Profile image for Adam Argyle",
        class: "avatar",
        decoding: "async",
        height: "96",
        loading: "lazy",
        sizes: "(min-width: 96px) 96px, calc(100vw - 48px)",
        src: "https://pbs.twimg.com/profile_images/1720589781476982784/P9Ld4vC5_400x400.jpg",
        width: "96"
      })
    ])
  ],
  -1
  /* HOISTED */
));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "bg-[#030507] px-4 py-2" },
  [
    /* @__PURE__ */ createBaseVNode("ul", {
      class: "track-list",
      style: { "--count": "4" }
    }, [
      /* @__PURE__ */ createBaseVNode("li", {
        style: { "--index": "1" },
        class: "track-item"
      }, [
        /* @__PURE__ */ createBaseVNode("button", { class: "track-btn" }, [
          /* @__PURE__ */ createBaseVNode("span", null, " Socials")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("li", {
        style: { "--index": "2" },
        class: "track-item"
      }, [
        /* @__PURE__ */ createBaseVNode("button", { class: "track-btn" }, [
          /* @__PURE__ */ createBaseVNode("span", null, " Twitter ")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("li", {
        style: { "--index": "3" },
        class: "track-item"
      }, [
        /* @__PURE__ */ createBaseVNode("button", { class: "track-btn" }, [
          /* @__PURE__ */ createBaseVNode("span", null, " Mastodon ")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("li", {
        style: { "--index": "4" },
        class: "track-item"
      }, [
        /* @__PURE__ */ createBaseVNode("button", { class: "track-btn" }, [
          /* @__PURE__ */ createBaseVNode("span", null, " CodePen ")
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($setup.story), {
    title: "Grid Track",
    layout: { type: "grid", width: "100%" }
  }, {
    default: withCtx(() => [
      (openBlock(), createBlock(resolveDynamicComponent($setup.variant), { title: "Left to right" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
        /* STABLE */
      })),
      (openBlock(), createBlock(resolveDynamicComponent($setup.variant), { title: "Right to left" }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
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
