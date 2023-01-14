import { ar as defineComponent, as as resolveComponent, at as createBlock, au as withCtx, av as openBlock, aw as createVNode, ax as pushScopeId, ay as popScopeId, az as createBaseVNode } from "./vendor.aa0959a2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const GridTrack_story_vue_vue_type_style_index_0_scoped_f575c53b_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GridTrack.story",
  setup(__props, { expose }) {
    expose();
    const story = "div";
    const variant = "div";
    const __returned__ = { story, variant };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-f575c53b"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "avatars" }, [
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
], -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "bg-[#030507] py-2 px-4" }, [
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
], -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    is: $setup.story,
    title: "Grid Track",
    layout: { type: "grid", width: "100%" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        is: $setup.variant,
        title: "Left to right"
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        is: $setup.variant,
        title: "Right to left"
      }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/tailwind/GridTrack.story.vue";
const GridTrack_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f575c53b"], ["__file", "D:/projects/my-components/components/tailwind/GridTrack.story.vue"]]);
export {
  GridTrack_story as default
};
