import { ar as defineComponent, av as openBlock, aB as createElementBlock, ax as createBaseVNode, aH as normalizeClass, at as createBlock, au as withCtx, aD as renderSlot, aS as mergeProps, aI as resolveDynamicComponent, as as resolveComponent, aw as createVNode, ay as createTextVNode } from "./vendor-c9bd13d9.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const __default__ = defineComponent({
  inheritAttrs: false
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Ribbon",
  props: {
    as: { type: String, required: false, default: "button" },
    position: { type: String, required: false, default: "top-right" },
    size: { type: String, required: false, default: "medium" },
    color: { type: String, required: false, default: "amber" }
  },
  setup(__props, { expose }) {
    expose();
    const sizeClasses = {
      small: "w-24",
      medium: "w-28",
      large: "w-36"
    };
    const positionClasses = {
      "top-left": {
        wrapper: "-top-2 -left-2",
        shadeOne: "top-0 right-0",
        shadeTwo: "bottom-0 left-0",
        banner: "bottom-0 left-0 -rotate-45 origin-bottom-left"
      },
      "top-right": {
        wrapper: "-top-2 -right-2",
        shadeOne: "top-0 left-0",
        shadeTwo: "bottom-0 right-0",
        banner: "bottom-0 right-0 rotate-45 origin-bottom-right"
      },
      "bottom-left": {
        wrapper: "-bottom-2 -left-2",
        shadeOne: "top-0 left-0",
        shadeTwo: "bottom-0 right-0",
        banner: "top-0 left-0 rotate-45 origin-top-left"
      },
      "bottom-right": {
        wrapper: "-bottom-2 -right-2",
        shadeOne: "top-0 right-0",
        shadeTwo: "bottom-0 left-0",
        banner: "top-0 right-0 -rotate-45 origin-top-right"
      }
    };
    const colorClasses = {
      amber: {
        shades: "bg-amber-500",
        banner: "bg-amber-300 text-amber-800 hover:bg-yellow-300"
      },
      green: {
        shades: "bg-green-500",
        banner: "bg-green-300 text-green-800 hover:bg-emerald-300"
      },
      purple: {
        shades: "bg-purple-500",
        banner: "bg-purple-300 text-purple-800 hover:bg-violet-300"
      },
      cyan: {
        shades: "bg-cyan-500",
        banner: "bg-cyan-300 text-cyan-800 hover:bg-sky-300"
      }
    };
    const __returned__ = { sizeClasses, positionClasses, colorClasses };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["pointer-events-none absolute aspect-square overflow-hidden rounded-sm", [$setup.sizeClasses[$props.size], $setup.positionClasses[$props.position].wrapper]])
    },
    [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(["absolute h-2 w-2", [$setup.positionClasses[$props.position].shadeOne, $setup.colorClasses[$props.color].shades]])
        },
        null,
        2
        /* CLASS */
      ),
      createBaseVNode(
        "div",
        {
          class: normalizeClass(["absolute h-2 w-2", [$setup.positionClasses[$props.position].shadeTwo, $setup.colorClasses[$props.color].shades]])
        },
        null,
        2
        /* CLASS */
      ),
      (openBlock(), createBlock(resolveDynamicComponent($props.as), mergeProps(_ctx.$attrs, {
        class: ["pointer-events-auto absolute block w-square-diagonal py-1.5 text-center text-xs font-semibold uppercase tracking-wider shadow-sm", [$setup.positionClasses[$props.position].banner, $setup.colorClasses[$props.color].banner]]
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class"]))
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "components/custom/ribbon/Ribbon.vue";
const Ribbon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/projects/my-components/components/custom/ribbon/Ribbon.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Ribbon.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { Ribbon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "p-8" };
const _hoisted_2 = { class: "relative mx-auto h-72 w-80 rounded-xl bg-white shadow-xl" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Ribbon" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode($setup["Ribbon"], { size: "small" }, {
            default: withCtx(() => [
              createTextVNode("Small")
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode($setup["Ribbon"], { size: "large" }, {
            default: withCtx(() => [
              createTextVNode("Not Small")
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode($setup["Ribbon"], {
            size: "large",
            position: "top-left",
            color: "green"
          }, {
            default: withCtx(() => [
              createTextVNode("Top left")
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode($setup["Ribbon"], {
            position: "bottom-left",
            color: "purple"
          }, {
            default: withCtx(() => [
              createTextVNode("Bottom left")
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode($setup["Ribbon"], {
            position: "bottom-right",
            color: "cyan"
          }, {
            default: withCtx(() => [
              createTextVNode("Bottom right")
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/ribbon/Ribbon.story.vue";
const Ribbon_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/ribbon/Ribbon.story.vue"]]);
export {
  Ribbon_story as default
};
