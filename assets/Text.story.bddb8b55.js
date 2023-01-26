import { ar as resolveComponent, as as createBlock, at as withCtx, au as openBlock, av as createVNode, ay as createBaseVNode } from "./vendor.a79b1064.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("p", {
  style: { "--color-one": "#42d392", "--color-two": "#647eff" },
  class: "gradient-text text-5xl font-bold"
}, " The Progressive JavaScript Framework ", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", {
  style: { "--animated-gradient-color-one": "#42d392", "--animated-gradient-color-two": "#647eff" },
  class: "animated-gradient-text text-5xl font-bold"
}, " The Progressive JavaScript Framework ", -1);
function _sfc_render(_ctx, _cache) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Text" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Gradient" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Animated Gradient" }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/tailwind/Text.story.vue";
const Text_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/tailwind/Text.story.vue"]]);
export {
  Text_story as default
};
