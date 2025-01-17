import { _ as __nuxt_component_0$1 } from "./ToggleButton-B2Mtsf9n.js";
import { aD as defineComponent, as as _export_sfc, aw as openBlock, ax as createBlock, aB as normalizeClass, aH as createElementBlock, aL as toDisplayString, aN as __nuxt_component_0, at as ref, aJ as Fragment, aI as renderList, az as renderSlot, aE as resolveComponent, ay as withCtx, aF as createVNode, aG as createBaseVNode, aM as createTextVNode, aQ as mergeProps } from "./vendor-CMJc4gfg.js";
import { u as useInternalValue } from "./index-DNEccDnl.js";
import "./Button-ChKMZVPM.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SwapItem",
  props: {
    id: { type: String, required: true },
    icon: { type: String, required: false },
    defaultClass: { type: String, required: false },
    activeClass: { type: String, required: false },
    active: { type: Boolean, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0;
  return $props.icon ? (openBlock(), createBlock(_component_Icon, {
    key: 0,
    class: normalizeClass(["opacity-0", [$props.active ? `opacity-100 ${$props.activeClass}` : $props.defaultClass]]),
    name: $props.icon
  }, null, 8, ["class", "name"])) : (openBlock(), createElementBlock(
    "p",
    {
      key: 1,
      class: normalizeClass(["opacity-0", [$props.active ? `opacity-100 ${$props.activeClass}` : $props.defaultClass]])
    },
    toDisplayString($props.id),
    3
    /* TEXT, CLASS */
  ));
}
_sfc_main$2.__file = "components/custom/toggle-button/SwapItem.vue";
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "D:/projects/my-components/components/custom/toggle-button/SwapItem.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SwapButton",
  props: {
    states: { type: Array, required: true },
    selected: { type: Object, required: false }
  },
  emits: ["update:selected"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const _selected = useInternalValue(props, emit, "selected", {
      defaultValue: props.states[0]
    });
    const currentIndex = ref(
      props.states.findIndex((item) => item.id === _selected.value.id)
    );
    function toggle() {
      currentIndex.value++;
      if (currentIndex.value >= props.states.length) currentIndex.value = 0;
      _selected.value = props.states[currentIndex.value];
    }
    const __returned__ = { props, emit, _selected, currentIndex, toggle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["aria-label"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SwapItem = __nuxt_component_2;
  return openBlock(), createElementBlock("button", {
    class: "btn relative inline-grid place-items-center [&>*]:col-start-1 [&>*]:row-start-1 [&>*]:transition-all [&>*]:duration-300",
    "aria-label": $setup._selected.ariaLabel,
    onClick: $setup.toggle
  }, [
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($props.states, (state) => {
        return renderSlot(_ctx.$slots, "default", {
          id: state.id,
          icon: state.icon,
          defaultClass: state.defaultClass,
          activeClass: state.activeClass || "",
          active: $setup._selected.id === state.id
        }, () => [
          (openBlock(), createBlock(_component_SwapItem, {
            id: state.id,
            key: state.id,
            icon: state.icon,
            "default-class": state.defaultClass,
            "active-class": state.activeClass || "",
            active: $setup._selected.id === state.id
          }, null, 8, ["id", "icon", "default-class", "active-class", "active"]))
        ]);
      }),
      256
      /* UNKEYED_FRAGMENT */
    ))
  ], 8, _hoisted_1$1);
}
_sfc_main$1.__file = "components/custom/toggle-button/SwapButton.vue";
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/projects/my-components/components/custom/toggle-button/SwapButton.vue"]]);
const _sfc_main = {};
const _hoisted_1 = { class: "flex gap-2" };
const _hoisted_2 = { class: "flex gap-2" };
function _sfc_render(_ctx, _cache) {
  const _component_ToggleButton = __nuxt_component_0$1;
  const _component_Variant = resolveComponent("Variant");
  const _component_SwapButton = __nuxt_component_1;
  const _component_SwapItem = __nuxt_component_2;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Toggle|Swap Button",
    layout: { type: "grid", width: "300px" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Toggle" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_ToggleButton, { selected: true }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("Pin")
              ])),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_ToggleButton, {
              selected: true,
              "aria-disabled": "true"
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode("Pin")
              ])),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Swap Button" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_SwapButton, { states: [{ id: "On" }, { id: "Off" }, { id: "Auto" }] }),
            createVNode(_component_SwapButton, {
              selected: { id: "moon" },
              states: [
                {
                  id: "sun",
                  icon: "ph:sun",
                  defaultClass: "rotate-0",
                  activeClass: "rotate-45",
                  ariaLabel: "Switch to light theme"
                },
                {
                  id: "moon",
                  icon: "ph:moon",
                  defaultClass: "-rotate-45",
                  activeClass: "rotate-0",
                  ariaLabel: "Switch to dark theme"
                }
              ]
            }, {
              default: withCtx((state) => [
                createVNode(
                  _component_SwapItem,
                  mergeProps({ ...state }, { size: "20px" }),
                  null,
                  16
                  /* FULL_PROPS */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_SwapButton, {
              class: "rounded-full bg-opacity-50 p-2",
              states: [
                {
                  id: "menu",
                  icon: "ph:list",
                  defaultClass: "-rotate-45",
                  activeClass: "rotate-0",
                  ariaLabel: "Open menu"
                },
                {
                  id: "close",
                  icon: "ph:x",
                  defaultClass: "rotate-45",
                  activeClass: "rotate-0",
                  ariaLabel: "Close menu"
                }
              ]
            }, {
              default: withCtx((state) => [
                createVNode(
                  _component_SwapItem,
                  mergeProps({ ...state }, { size: "20px" }),
                  null,
                  16
                  /* FULL_PROPS */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_SwapButton, {
              class: "bg-transparent",
              style: { "transform-style": "preserve-3d", "perspective": "16em" },
              states: [
                {
                  id: "😇",
                  defaultClass: "[transform:rotateY(180deg)]",
                  activeClass: "[transform:rotateY(0)]",
                  ariaLabel: "Open menu"
                },
                {
                  id: "😈",
                  defaultClass: "[transform:rotateY(-180deg)]",
                  activeClass: "[transform:rotateY(0)]",
                  ariaLabel: "Close menu"
                }
              ]
            }, {
              default: withCtx((state) => [
                createVNode(
                  _component_SwapItem,
                  mergeProps({ ...state }, { style: { "backface-visibility": "hidden" } }),
                  null,
                  16
                  /* FULL_PROPS */
                )
              ]),
              _: 1
              /* STABLE */
            })
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
_sfc_main.__file = "components/custom/toggle-button/ToggleButton.story.vue";
const ToggleButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/toggle-button/ToggleButton.story.vue"]]);
export {
  ToggleButton_story as default
};
