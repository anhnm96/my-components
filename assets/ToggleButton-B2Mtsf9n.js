import { _ as __nuxt_component_0$1 } from "./Button-ChKMZVPM.js";
import { aD as defineComponent, as as _export_sfc, aw as openBlock, ax as createBlock, ay as withCtx, az as renderSlot } from "./vendor-CMJc4gfg.js";
import { u as useInternalValue } from "./index-DNEccDnl.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ToggleButton",
  props: {
    selected: { type: Boolean, required: true }
  },
  emits: ["update:selected"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const _selected = useInternalValue(props, emit, "selected");
    function toggle() {
      _selected.value = !_selected.value;
    }
    const __returned__ = { props, emit, _selected, toggle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseButton = __nuxt_component_0$1;
  return openBlock(), createBlock(_component_BaseButton, {
    class: "btn-toggle",
    "aria-pressed": $setup._selected,
    onClick: $setup.toggle
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["aria-pressed"]);
}
_sfc_main.__file = "components/custom/toggle-button/ToggleButton.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/toggle-button/ToggleButton.vue"]]);
export {
  __nuxt_component_0 as _
};
