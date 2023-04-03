import { ar as defineComponent, aC as ref, aP as watch, aO as onMounted, aT as nextTick, aU as useTransition, aN as computed, av as openBlock, at as createBlock, au as withCtx, aD as renderSlot, aQ as normalizeStyle, aI as resolveDynamicComponent } from "./vendor-444c1cf7.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VMotion",
  props: {
    as: { type: String, required: false, default: "div" },
    initial: { type: null, required: false },
    animate: { type: null, required: true }
  },
  setup(__props, { expose }) {
    expose();
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
    const transition = useTransition(stateArr, {
      duration: 400,
      transition: [0.4, 0, 0.2, 1]
    });
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
    const __returned__ = { props, objectToVector, stateArr, transition, getSuffix, vectorToObject, style };
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
