import { az as defineComponent, as as createBlock, at as withCtx, aA as resolveDynamicComponent, au as openBlock, aw as pushScopeId, ax as popScopeId, ay as createBaseVNode } from "./vendor-d61fed03.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const GridTrack_story_vue_vue_type_style_index_0_scoped_f575c53b_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GridTrack.story",
  setup(__props, { expose }) {
    expose();
    const story = "Story";
    const variant = "Variant";
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
      href: "https://twitter.com/bramus/",
      title: "Bramus on Twitter"
    }, [
      /* @__PURE__ */ createBaseVNode("img", {
        alt: "Profile image for Bramus",
        class: "avatar",
        decoding: "async",
        height: "96",
        loading: "lazy",
        sizes: "(min-width: 96px) 96px, calc(100vw - 48px)",
        src: "https://web-dev.imgix.net/image/AeNB0cHNDkYPUYzDuv8gInYA9rY2/CQMqvg5UkY4weDnJij3b.jpeg?auto=format",
        width: "96"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://twitter.com/jh3yy/",
      title: "Jhey on Twitter"
    }, [
      /* @__PURE__ */ createBaseVNode("img", {
        alt: "Profile image for Jhey Tompkins",
        class: "avatar",
        decoding: "async",
        height: "96",
        loading: "lazy",
        sizes: "(min-width: 96px) 96px, calc(100vw - 48px)",
        src: "https://web-dev.imgix.net/image/Dyx9FwYgMyNqy1kMGx8Orz6q0qC3/JjwUlxDMTmjyFEvBC8wG.jpeg?auto=format",
        width: "96"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://twitter.com/una/",
      title: "Una on Twitter"
    }, [
      /* @__PURE__ */ createBaseVNode("img", {
        alt: "Profile image for Una Kravets",
        class: "avatar",
        decoding: "async",
        height: "96",
        loading: "lazy",
        sizes: "(min-width: 96px) 96px, calc(100vw - 48px)",
        src: "https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?auto=format",
        width: "96"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://twitter.com/argyleink/",
      title: "Adam on Twitter"
    }, [
      /* @__PURE__ */ createBaseVNode("img", {
        alt: "Profile image for Adam Argyle",
        class: "avatar",
        decoding: "async",
        height: "96",
        loading: "lazy",
        sizes: "(min-width: 96px) 96px, calc(100vw - 48px)",
        src: "https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format",
        width: "96"
      })
    ])
  ],
  -1
  /* HOISTED */
));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "bg-[#030507] py-2 px-4" },
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
const GridTrack_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f575c53b"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/tailwind/GridTrack.story.vue"]]);
export {
  GridTrack_story as default
};
