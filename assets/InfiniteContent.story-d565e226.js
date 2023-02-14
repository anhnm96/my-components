import { az as defineComponent, aB as ref, bg as useVirtualList, bh as useInfiniteScroll, au as openBlock, aG as createElementBlock, ay as createBaseVNode, aR as toDisplayString, aJ as mergeProps, aO as Fragment, aP as renderList, ar as resolveComponent, as as createBlock, at as withCtx, av as createVNode } from "./vendor-be841bdf.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InfiniteContent",
  setup(__props, { expose }) {
    expose();
    const data = ref(Array.from(Array(30).keys(), () => "Lorem Ipsum"));
    const { list, containerProps, wrapperProps } = useVirtualList(data, {
      // Keep `itemHeight` in sync with the item's row.
      itemHeight: 96
    });
    useInfiniteScroll(
      containerProps.ref,
      () => {
        data.value.push(...Array.from(Array(10).keys(), () => "More lorem Ipsum"));
      },
      { distance: 10 }
      // in pixels
    );
    const __returned__ = { data, list, containerProps, wrapperProps };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "text-gray-400" };
const _hoisted_2 = { class: "bg-green text-medium fixed top-4 left-4 rounded p-2 text-xl shadow-lg" };
const _hoisted_3 = { class: "mb-2 text-2xl" };
const _hoisted_4 = { class: "text-sm" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode(
      "div",
      _hoisted_2,
      " Loaded items: " + toDisplayString($setup.data.length),
      1
      /* TEXT */
    ),
    createBaseVNode(
      "div",
      mergeProps({ class: "h-screen rounded p-2" }, $setup.containerProps),
      [
        createBaseVNode(
          "div",
          mergeProps($setup.wrapperProps, { class: "mx-auto max-w-sm" }),
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.list, ({ index, data: dt }) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "mb-4 flex h-[80px] flex-col justify-center rounded-lg border-neutral-600 bg-neutral-800 px-4"
                }, [
                  createBaseVNode(
                    "h2",
                    _hoisted_3,
                    "Item #" + toDisplayString(index),
                    1
                    /* TEXT */
                  ),
                  createBaseVNode(
                    "p",
                    _hoisted_4,
                    toDisplayString(dt),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          16
          /* FULL_PROPS */
        )
      ],
      16
      /* FULL_PROPS */
    )
  ]);
}
_sfc_main$1.__file = "components/base/infinite-content/InfiniteContent.vue";
const InfiniteContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/base/infinite-content/InfiniteContent.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InfiniteContent.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { InfiniteContent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Infinite Content" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, null, {
        default: withCtx(() => [
          createVNode($setup["InfiniteContent"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/base/infinite-content/InfiniteContent.story.vue";
const InfiniteContent_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/base/infinite-content/InfiniteContent.story.vue"]]);
export {
  InfiniteContent_story as default
};
