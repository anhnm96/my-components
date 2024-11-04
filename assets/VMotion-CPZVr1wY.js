import { aD as defineComponent, at as ref, aT as watch, aS as onMounted, b1 as nextTick, b2 as useTransition, av as computed, as as _export_sfc, aw as openBlock, ax as createBlock, ay as withCtx, az as renderSlot, aA as normalizeStyle, aC as resolveDynamicComponent } from "./vendor-DNJAtGl5.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VMotion",
  props: {
    as: { type: String, required: false, default: "div" },
    initial: { type: null, required: false },
    animate: { type: null, required: true },
    transitionOptions: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    function objectToVector(obj) {
      const values = Object.values(obj);
      const vector = values.map(
        (value) => typeof value === "string" ? parseFloat(value) : value
      );
      return vector;
    }
    const stateArr = ref(
      props.initial ? objectToVector(props.initial) : []
    );
    watch(
      () => props.animate,
      (val) => {
        stateArr.value = objectToVector(val);
      },
      { immediate: !props.initial }
    );
    onMounted(async () => {
      if (props.initial) {
        await nextTick();
        stateArr.value = objectToVector(props.animate);
      }
    });
    const transitionOptions = Object.assign(
      {
        duration: 400,
        transition: [0.4, 0, 0.2, 1]
      },
      props.transitionOptions
    );
    const transition = useTransition(stateArr, transitionOptions);
    function getSuffix(str) {
      const match = str.match(/^(.*?)([^\d]*)$/);
      return match ? match[2] : "";
    }
    function vectorToObject(vector, obj) {
      const keys = Object.keys(obj);
      const newObj = {};
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        let value = vector[i];
        if (typeof obj[key] === "string") {
          const suffix = getSuffix(obj[key]);
          if (suffix) {
            value = `${value}${suffix}`;
          }
        }
        newObj[key] = value;
      }
      return newObj;
    }
    const style = computed(() => {
      return vectorToObject(transition.value, props.animate);
    });
    const __returned__ = { props, objectToVector, stateArr, transitionOptions, transition, getSuffix, vectorToObject, style };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.as), {
    style: normalizeStyle($setup.style)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["style"]);
}
_sfc_main.__file = "components/custom/motion/VMotion.vue";
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/motion/VMotion.vue"]]);
export {
  __nuxt_component_1 as _
};
