import { u as useInternalValue } from "./index-925e0de3.js";
import { az as defineComponent, aM as computed, aB as ref, a$ as throttle, bd as Motion, be as clamp, au as openBlock, aD as createElementBlock, aE as renderSlot, av as createVNode, at as withCtx, ay as createBaseVNode, a_ as normalizeStyle, aZ as withModifiers, ar as resolveComponent, as as createBlock, aG as createCommentVNode, aF as toDisplayString } from "./vendor-671bda3b.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Slider",
  props: {
    modelValue: { type: Number, required: false, default: 0 },
    min: { type: Number, required: false, default: 0 },
    max: { type: Number, required: false, default: 100 },
    updateOnTouch: { type: Boolean, required: false, default: true },
    buffer: { type: Number, required: false, default: 12 }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const transition = { type: "spring", bounce: 0, duration: 0.3 };
    const progress = useInternalValue(props, "modelValue", emit);
    const height = 12;
    const width = computed(() => `${progress.value / props.max * 100}%`);
    const hovered = ref(false);
    const panning = ref(false);
    const state = computed(
      () => panning.value ? "panning" : hovered.value ? "hovered" : "idle"
    );
    const widthVariants = {
      idle: { width: "calc(95% - 48px)" },
      hovered: { width: "calc(100% - 48px)" },
      panning: { width: "calc(100% - 48px)" }
    };
    const progressElement = ref();
    const startPoint = ref();
    function setProgress(e) {
      startPoint.value ?? (startPoint.value = e.clientX);
      const { left, right } = progressElement.value.$el.getBoundingClientRect();
      const elWidth = progressElement.value.$el.offsetWidth;
      if (e.clientX < left && progress.value <= props.min) {
        startPoint.value = left;
        return;
      }
      if (e.clientX > right && progress.value >= props.max) {
        startPoint.value = right;
        return;
      }
      const delta = (e.clientX - startPoint.value) / elWidth * props.max;
      progress.value = clamp(progress.value + delta, props.min, props.max);
      startPoint.value = e.clientX;
    }
    const pointermove = throttle((e) => {
      setProgress(e);
    }, 10);
    function pointerdown(e) {
      if (props.updateOnTouch) {
        const elWidth = progressElement.value.$el.offsetWidth;
        const progressWidth = e.clientX - progressElement.value.$el.getBoundingClientRect().left;
        progress.value = progressWidth / elWidth * props.max;
      }
      startPoint.value = e.clientX;
      panning.value = true;
      window.addEventListener("pointermove", pointermove);
      window.addEventListener("pointerup", pointerup);
    }
    function pointerup() {
      startPoint.value = void 0;
      panning.value = false;
      window.removeEventListener("pointermove", pointermove);
      window.removeEventListener("pointerup", pointerup);
    }
    const heightVariants = {
      idle: { height: `4px` },
      hovered: { height: `${height}px` },
      panning: { height: `${height}px` }
    };
    const __returned__ = { props, emit, transition, progress, height, width, hovered, panning, state, widthVariants, progressElement, startPoint, setProgress, pointermove, pointerdown, pointerup, heightVariants, get Motion() {
      return Motion;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "h-full w-full bg-white/20" },
  null,
  -1
  /* HOISTED */
);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "left", {
      hovered: $setup.hovered,
      panning: $setup.panning
    }),
    createVNode($setup["Motion"], {
      ref: "progressElement",
      animate: $setup.widthVariants[$setup.state],
      transition: $setup.transition,
      style: normalizeStyle({
        height: `${$setup.height + $props.buffer}px`
      }),
      class: "relative flex grow-0 touch-none items-center justify-center",
      initial: false,
      onPointerenter: _cache[0] || (_cache[0] = ($event) => $setup.hovered = true),
      onPointerleave: _cache[1] || (_cache[1] = ($event) => $setup.hovered = false),
      onPointerdown: $setup.pointerdown,
      onDragstartCapture: _cache[2] || (_cache[2] = withModifiers(() => {
      }, ["stop", "prevent"]))
    }, {
      default: withCtx(() => [
        createVNode($setup["Motion"], {
          initial: false,
          animate: $setup.heightVariants[$setup.state],
          transition: $setup.transition,
          class: "relative w-full overflow-hidden rounded-full"
        }, {
          default: withCtx(() => [
            _hoisted_1$1,
            createBaseVNode(
              "div",
              {
                class: "absolute inset-0 w-[20%] bg-white",
                style: normalizeStyle({ width: $setup.width })
              },
              null,
              4
              /* STYLE */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["animate"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["animate", "style"]),
    renderSlot(_ctx.$slots, "right", {
      hovered: $setup.hovered,
      panning: $setup.panning
    })
  ]);
}
_sfc_main$1.__file = "components/custom/slider/Slider.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/slider/Slider.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Slider.story",
  setup(__props, { expose }) {
    expose();
    const progress = ref(50);
    const roundedProgress = computed(
      () => `${Math.round(progress.value / 100 * 100)}%`
    );
    const __returned__ = { progress, roundedProgress, get Motion() {
      return Motion;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex h-[800px] items-center justify-center py-16" };
const _hoisted_2 = { class: "flex h-full w-[375px] flex-col justify-center rounded-2xl bg-gray-800 py-8 px-4" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "text-center text-sm font-medium text-white" },
  " iOS 16 Slider demo ",
  -1
  /* HOISTED */
);
const _hoisted_4 = { class: "flex flex-1 flex-col items-center justify-center" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "h-4 w-4"
  },
  [
    /* @__PURE__ */ createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "{1.5}",
    stroke: "currentColor",
    class: "h-4 w-4"
  },
  [
    /* @__PURE__ */ createBaseVNode("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
    })
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Slider = __nuxt_component_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Slider" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "from ios16" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_Slider, {
                  modelValue: $setup.progress,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.progress = $event),
                  "update-on-touch": false,
                  class: "flex w-full items-center justify-center"
                }, {
                  left: withCtx(({ hovered, panning }) => [
                    createVNode($setup["Motion"], {
                      initial: false,
                      animate: {
                        color: hovered || panning ? "rgb(255,255,255)" : "rgb(120,113,108)"
                      },
                      class: "flex w-6 shrink-0 justify-start"
                    }, {
                      default: withCtx(() => [
                        _hoisted_5
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["animate"])
                  ]),
                  right: withCtx(({ hovered, panning }) => [
                    createVNode($setup["Motion"], {
                      initial: false,
                      animate: {
                        color: hovered || panning ? "rgb(255,255,255)" : "rgb(120,113,108)"
                      },
                      class: "flex w-6 shrink-0 justify-end"
                    }, {
                      default: withCtx(() => [
                        _hoisted_6
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["animate"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"]),
                createVNode($setup["Motion"], {
                  initial: false,
                  class: "mt-4 select-none text-center text-sm font-semibold tabular-nums text-white"
                }, {
                  default: withCtx(() => [
                    createCommentVNode(` :animate="{
            color: hovered || panning ? 'rgb(255,255,255)' : 'rgb(120,113,108)',
          }" `),
                    createBaseVNode(
                      "p",
                      null,
                      "progress: " + toDisplayString($setup.progress),
                      1
                      /* TEXT */
                    ),
                    createBaseVNode(
                      "p",
                      null,
                      "rounded: " + toDisplayString($setup.roundedProgress),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
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
_sfc_main.__file = "components/custom/slider/Slider.story.vue";
const Slider_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/slider/Slider.story.vue"]]);
export {
  Slider_story as default
};
