import { ar as defineComponent, aR as useCssVars, aS as unref, aT as pick, av as openBlock, at as createBlock, au as withCtx, aH as renderSlot, aU as Transition, aA as ref, as as resolveComponent, aw as createVNode, az as createBaseVNode, aG as createElementBlock, aV as createCommentVNode } from "./vendor.aa0959a2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cdc0426e.js";
const Expandable_vue_vue_type_style_index_0_scoped_3ec9d6eb_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Expandable",
  props: {
    dimension: { type: String, required: false, default: "vertical" },
    transition: { type: String, required: false, default: "all 300ms ease-in-out" }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    useCssVars((_ctx) => ({
      "3ec9d6eb-dimensionKeys[0]": unref(dimensionKeys)[0]
    }));
    const dimensions = {
      vertical: [
        "height",
        "paddingTop",
        "paddingBottom",
        "marginTop",
        "marginBottom"
      ],
      horizontal: [
        "width",
        "paddingLeft",
        "paddingRight",
        "marginLeft",
        "marginRight"
      ]
    };
    const dimensionKeys = dimensions[props.dimension];
    function setClosedDimensions(element) {
      dimensionKeys.forEach((key) => {
        element.style[key] = "0";
      });
    }
    function forceRepaint(element) {
      getComputedStyle(element).height;
    }
    function enter(element) {
      const computedStyles = pick(getComputedStyle(element), dimensionKeys);
      setClosedDimensions(element);
      forceRepaint(element);
      if (props.dimension === "horizontal") {
        element.style.whiteSpace = "nowrap";
      }
      element.style.transition = props.transition;
      requestAnimationFrame(() => {
        dimensionKeys.forEach((key) => {
          element.style[key] = computedStyles[key];
        });
      });
    }
    function afterEnter(element) {
      dimensionKeys.forEach((key) => {
        element.style[key] = "";
      });
      if (props.dimension === "horizontal") {
        element.style.whiteSpace = "";
      }
    }
    function leave(element) {
      const mainProp = getComputedStyle(element)[dimensionKeys[0]];
      element.style[dimensionKeys[0]] = mainProp;
      if (props.dimension === "horizontal") {
        element.style.whiteSpace = "nowrap";
      }
      forceRepaint(element);
      requestAnimationFrame(() => {
        setClosedDimensions(element);
      });
    }
    const __returned__ = { props, dimensions, dimensionKeys, setClosedDimensions, forceRepaint, enter, afterEnter, leave };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "expand",
    onEnter: $setup.enter,
    onAfterEnter: $setup.afterEnter,
    onLeave: $setup.leave
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _: 3
  });
}
_sfc_main$1.__file = "components/custom/expandable/Expandable.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3ec9d6eb"], ["__file", "D:/projects/my-components/components/custom/expandable/Expandable.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Expandable.story",
  setup(__props, { expose }) {
    expose();
    const expanded = ref(false);
    const expanded2 = ref(false);
    const __returned__ = { expanded, expanded2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("span", { class: "font-lexend font-bold" }, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ", -1);
const _hoisted_2 = {
  key: 0,
  class: "h-6 w-6",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  key: 1,
  class: "h-6 w-6",
  "aria-hidden": "true"
};
const _hoisted_4 = {
  key: 0,
  class: "my-2 rounded-[1.125rem] bg-[#1B1829] px-4 pt-2 pb-[0.8125rem] leading-7 text-gray-400"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, " \u{1F525} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis distinctio! ", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, " \u{1F525} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit illo corporis eos aliquid voluptates aut laborum! Perspiciatis, quam laboriosam. ", -1);
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];
const _hoisted_8 = { class: "mt-3 flex items-stretch gap-2" };
const _hoisted_9 = { class: "flex-shrink-0 basis-1/5 items-center" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", { class: "font-lexend font-bold" }, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ", -1);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = {
  key: 0,
  class: "rounded-[1.125rem] bg-[#1B1829] px-4 pt-2 pb-[0.8125rem] leading-7 text-gray-400"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", null, " \u{1F525} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis distinctio! ", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", null, " \u{1F525} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit illo corporis eos aliquid voluptates aut laborum! Perspiciatis, quam laboriosam. ", -1);
const _hoisted_15 = [
  _hoisted_13,
  _hoisted_14
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Expandable = __nuxt_component_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { tite: "Expandable" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Vertical" }, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            createBaseVNode("button", {
              class: "mt-3 flex w-full items-center justify-between rounded-[1.125rem] bg-[#1B1829] px-4 py-3 text-gray-100",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.expanded = !$setup.expanded)
            }, [
              _hoisted_1,
              $setup.expanded ? (openBlock(), createElementBlock("span", _hoisted_2, "-")) : (openBlock(), createElementBlock("span", _hoisted_3, "+"))
            ])
          ]),
          createVNode(_component_Expandable, null, {
            default: withCtx(() => [
              $setup.expanded ? (openBlock(), createElementBlock("div", _hoisted_4, _hoisted_7)) : createCommentVNode("v-if", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Horizontal" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("button", {
                class: "flex w-full items-center justify-between rounded-[1.125rem] bg-[#1B1829] px-4 py-3 text-gray-100",
                onClick: _cache[1] || (_cache[1] = ($event) => $setup.expanded2 = !$setup.expanded2)
              }, _hoisted_11)
            ]),
            createVNode(_component_Expandable, { dimension: "horizontal" }, {
              default: withCtx(() => [
                $setup.expanded2 ? (openBlock(), createElementBlock("div", _hoisted_12, _hoisted_15)) : createCommentVNode("v-if", true)
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/custom/expandable/Expandable.story.vue";
const Expandable_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/expandable/Expandable.story.vue"]]);
export {
  Expandable_story as default
};
