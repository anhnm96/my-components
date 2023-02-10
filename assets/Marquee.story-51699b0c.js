import { az as defineComponent, au as openBlock, aD as createElementBlock, ay as createBaseVNode, aP as Fragment, aO as renderList, aE as renderSlot, aB as ref, ar as resolveComponent, as as createBlock, at as withCtx, av as createVNode, aF as toDisplayString, aH as normalizeClass } from "./vendor-d61fed03.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const Marquee_vue_vue_type_style_index_0_scoped_228459f0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Marquee",
  props: {
    list: { type: Array, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "marquee" };
const _hoisted_2 = { class: "marquee-group" };
const _hoisted_3 = {
  "aria-hidden": "true",
  class: "marquee-group"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($props.list, (item, index) => {
          return renderSlot(_ctx.$slots, "default", {
            index,
            item
          }, void 0, true);
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]),
    createBaseVNode("div", _hoisted_3, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($props.list, (item) => {
          return renderSlot(_ctx.$slots, "default", { item }, void 0, true);
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ])
  ]);
}
_sfc_main$1.__file = "components/custom/marquee/Marquee.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-228459f0"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/marquee/Marquee.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Marquee.story",
  setup(__props, { expose }) {
    expose();
    const marqueeList = ref([
      { text: 1, color: "red" },
      { text: 2, color: "purple" },
      { text: 3, color: "blue" },
      { text: 4, color: "green" },
      { text: 5, color: "yellow" }
    ]);
    const __returned__ = { marqueeList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Marquee = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Marquee" }, {
    default: withCtx(() => [
      createVNode(_component_Marquee, {
        list: $setup.marqueeList,
        style: { "--gap": "0rem", "--duration": "15s" }
      }, {
        default: withCtx(({ item }) => [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(["m-auto w-full py-2 text-center text-white", [`bg-${item.color}-500`]])
            },
            toDisplayString(item.text),
            3
            /* TEXT, CLASS */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["list"]),
      createVNode(_component_Marquee, {
        list: $setup.marqueeList,
        class: "mt-4"
      }, {
        default: withCtx(({ item }) => [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(["w-full rounded py-2 text-center text-white", [`bg-${item.color}-500`]])
            },
            toDisplayString(item.text),
            3
            /* TEXT, CLASS */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["list"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/marquee/Marquee.story.vue";
const Marquee_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/marquee/Marquee.story.vue"]]);
export {
  Marquee_story as default
};
