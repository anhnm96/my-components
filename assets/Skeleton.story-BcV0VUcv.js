import { aD as defineComponent, av as computed, as as _export_sfc, aw as openBlock, aH as createElementBlock, aG as createBaseVNode, aA as normalizeStyle, az as renderSlot, aB as normalizeClass, aE as resolveComponent, ax as createBlock, ay as withCtx, aF as createVNode, aO as createTextVNode } from "./vendor-BdBYoA5y.js";
const isHexColor = (hexColor) => {
  const hex = hexColor.replace("#", "");
  return typeof hexColor === "string" && hexColor.startsWith("#") && hex.length === 6 && !isNaN(Number(`0x${hex}`));
};
const hexToRgb = (hex) => {
  var _a;
  return `${(_a = hex.match(/\w\w/g)) == null ? void 0 : _a.map((x) => +`0x${x}`)}`;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Skeleton",
  props: {
    bgClass: { type: String, required: false, default: "bg-gray-300" },
    cssClass: { type: String, required: false, default: "rounded" },
    shimmerColor: { type: String, required: false, default: "#ffffff" },
    auto: { type: Boolean, required: false, default: false },
    range: { type: Object, required: false, default: () => ({
      min: 20,
      max: 100
    }) }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const shimmerStyle = computed(() => {
      const rgb = isHexColor(props.shimmerColor) ? hexToRgb(props.shimmerColor) : props.shimmerColor;
      return {
        backgroundImage: `linear-gradient(90deg, rgba(${rgb}, 0) 0%, rgba(${rgb}, 0.2) 20%, rgba(${rgb}, 0.5) 60%, rgba(${rgb}, 0))`
      };
    });
    const width = computed(() => {
      return `${Math.floor(
        Math.random() * (props.range.max - props.range.min) + props.range.min
      )}%`;
    });
    const __returned__ = { props, shimmerStyle, width };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      "aria-hidden": "true",
      class: normalizeClass(["relative overflow-hidden", [$props.bgClass, $props.cssClass]]),
      style: normalizeStyle({ width: $props.auto === true ? $setup.width : "" })
    },
    [
      createBaseVNode(
        "div",
        {
          class: "shimmer absolute inset-0",
          style: normalizeStyle($setup.shimmerStyle)
        },
        null,
        4
        /* STYLE */
      ),
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ],
    6
    /* CLASS, STYLE */
  );
}
_sfc_main$1.__file = "components/custom/skeleton/Skeleton.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-5b88712a"], ["__file", "D:/projects/my-components/components/custom/skeleton/Skeleton.vue"]]);
const _sfc_main = {};
const _hoisted_1 = { class: "max-w-sm rounded border border-gray-200 p-4 md:p-6" };
const _hoisted_2 = { class: "mt-4 flex items-center space-x-3" };
function _sfc_render(_ctx, _cache) {
  const _component_Skeleton = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Skeleton" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_Skeleton, { class: "mb-4 flex h-48 items-center justify-center text-gray-400" }, {
          default: withCtx(() => [
            createTextVNode(" Image ")
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_Skeleton, {
          auto: "",
          "shimmer-color": "#46CE93",
          class: "mb-4 h-2.5"
        }),
        createVNode(_component_Skeleton, {
          auto: "",
          "shimmer-color": "#46CE93",
          class: "mb-2.5 h-2"
        }),
        createVNode(_component_Skeleton, {
          auto: "",
          "shimmer-color": "#46CE93",
          class: "mb-2.5 h-2"
        }),
        createVNode(_component_Skeleton, {
          auto: "",
          "shimmer-color": "#46CE93",
          class: "h-2"
        }),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_Skeleton, {
            "shimmer-color": "#46CE93",
            class: "flex h-14 w-14 items-center justify-center text-gray-400",
            "css-class": "rounded-full"
          }, {
            default: withCtx(() => [
              createTextVNode(" Icon ")
            ]),
            _: 1
            /* STABLE */
          }),
          createBaseVNode("div", null, [
            createVNode(_component_Skeleton, { class: "mb-2 h-2.5 w-32" }),
            createVNode(_component_Skeleton, { class: "h-2 w-48" })
          ])
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/skeleton/Skeleton.story.vue";
const Skeleton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/skeleton/Skeleton.story.vue"]]);
export {
  Skeleton_story as default
};
