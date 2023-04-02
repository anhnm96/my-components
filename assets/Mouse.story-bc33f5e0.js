import { ar as defineComponent, aC as ref, aK as onMounted, av as openBlock, aB as createElementBlock, ax as createBaseVNode, aN as Fragment, az as pushScopeId, aA as popScopeId, as as resolveComponent, at as createBlock, au as withCtx, aw as createVNode } from "./vendor-c9bd13d9.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const Blob_vue_vue_type_style_index_0_scoped_5b90bd5e_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Blob",
  setup(__props, { expose }) {
    expose();
    const blob = ref();
    onMounted(() => {
      window.onpointermove = (event) => {
        const { clientX, clientY } = event;
        blob.value.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`
          },
          { duration: 3e3, fill: "forwards" }
        );
      };
    });
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval;
    function mouseEnter(event) {
      let iteration = 0;
      clearInterval(interval);
      const el = event.target;
      const datasetValue = el.dataset.value;
      interval = setInterval(() => {
        el.innerText = el.innerText.split("").map((letter, index) => {
          if (index < iteration) {
            return datasetValue[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }).join("");
        if (iteration >= datasetValue.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    }
    const __returned__ = { blob, letters, get interval() {
      return interval;
    }, set interval(v) {
      interval = v;
    }, mouseEnter };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-5b90bd5e"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  id: "blob",
  ref: "blob"
};
const _hoisted_2 = {
  id: "blur",
  class: "grid place-items-center"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "absolute top-2 left-2" },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "block text-xl text-white underline",
      href: "https://www.poppr.be/en",
      target: "_blank",
      rel: "noopener noreferer"
    }, " Glow Effect "),
    /* @__PURE__ */ createBaseVNode("a", {
      class: "block text-xl text-white underline",
      href: "https://kprverse.com/",
      target: "_blank",
      rel: "noopener noreferer"
    }, " Text Effect ")
  ],
  -1
  /* HOISTED */
));
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createBaseVNode(
        "div",
        _hoisted_1$1,
        null,
        512
        /* NEED_PATCH */
      ),
      createBaseVNode("div", _hoisted_2, [
        _hoisted_3,
        createBaseVNode(
          "h2",
          {
            class: "text-7xl font-semibold text-white",
            "data-value": "LOOK, A BLOB",
            onMouseenter: $setup.mouseEnter
          },
          " LOOK, A BLOB ",
          32
          /* HYDRATE_EVENTS */
        )
      ])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
_sfc_main$1.__file = "components/tailwind/mouse/Blob.vue";
const Blob = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-5b90bd5e"], ["__file", "D:/projects/my-components/components/tailwind/mouse/Blob.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Mouse.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { Blob };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "relative h-screen w-screen overflow-hidden" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Mouse" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Blob" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["Blob"])
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
_sfc_main.__file = "components/tailwind/mouse/Mouse.story.vue";
const Mouse_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/tailwind/mouse/Mouse.story.vue"]]);
export {
  Mouse_story as default
};
