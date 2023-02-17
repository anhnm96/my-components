import { az as defineComponent, aH as ref, av as createVNode, ba as Motion, bc as spring, aQ as mergeProps, au as openBlock, aB as createElementBlock, ay as createBaseVNode, aF as normalizeClass, bd as createStaticVNode, ar as resolveComponent, as as createBlock, at as withCtx } from "./vendor-d1442346.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Steps",
  setup(__props, {
    expose
  }) {
    expose();
    const step = ref(1);
    function setStep(s) {
      step.value = s;
    }
    const CheckIcon = (props) => {
      const draw = (progress) => ({
        // This property makes the line "draw" in when animated
        strokeDashoffset: 1 - progress,
        // Each line will be hidden until it starts drawing
        // to fix a bug in Safari where the line can be
        // partially visible even when progress is at 0
        visibility: "visible"
      });
      return createVNode("svg", mergeProps(props, {
        "fill": "none",
        "viewBox": "0 0 24 24",
        "stroke": "currentColor",
        "stroke-width": "3"
      }), [createVNode(Motion, {
        "tag": "path",
        "initial": {
          strokeDasharray: 1,
          strokeDashoffset: 1
        },
        "animate": draw(1),
        "transition": {
          delay: 0.2,
          easing: spring({
            stiffness: 400,
            damping: 90
          }),
          duration: 0.3
        },
        "pathLength": "1",
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "d": "M5 13l4 4L19 7"
      }, null)]);
    };
    const Step = (props) => {
      const status = props.currentStep === props.step ? "active" : props.currentStep < props.step ? "inactive" : "complete";
      const variants = {
        inactive: {
          backgroundColor: "var(--white)",
          borderColor: "var(--slate-200)",
          color: "var(--slate-400)"
        },
        active: {
          backgroundColor: "var(--white)",
          borderColor: "var(--blue-500)",
          color: "var(--blue-500)"
        },
        complete: {
          backgroundColor: "var(--blue-500)",
          borderColor: "var(--blue-500)",
          color: "var(--blue-500)"
        }
      };
      const backgroundVariants = {
        inactive: {},
        active: {
          scale: 1,
          transition: {
            delay: 0,
            duration: 0.2
          }
        },
        complete: {
          scale: 1.25
        }
      };
      return createVNode("div", {
        "className": "relative"
      }, [createVNode(Motion, {
        "animate": backgroundVariants[status],
        "transition": {
          duration: 0.6,
          delay: 0.2,
          type: "tween",
          ease: "circOut"
        },
        "className": "absolute inset-0 rounded-full bg-blue-200"
      }, null), createVNode(Motion, {
        "animate": variants[status],
        "transition": {
          duration: 0.2
        },
        "className": "relative flex  h-10 w-10 items-center justify-center rounded-full border-2 font-semibold"
      }, {
        default: () => [createVNode("div", {
          "className": "flex items-center justify-center"
        }, [status === "complete" ? createVNode(CheckIcon, {
          "class": "h-6 w-6 text-white"
        }, null) : createVNode("span", null, [props.step])])]
      })]);
    };
    Step.props = ["currentStep", "step"];
    const __returned__ = {
      step,
      setStep,
      CheckIcon,
      Step
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex min-h-[500px] items-center bg-gradient-to-br from-slate-700 to-slate-900" };
const _hoisted_2 = { class: "mx-auto w-full max-w-md rounded-2xl bg-white" };
const _hoisted_3 = { class: "flex justify-between rounded p-8" };
const _hoisted_4 = { class: "px-8 pb-8" };
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div><div class="mt-2 h-6 w-40 rounded bg-slate-100"></div><div class="mt-4 space-y-2"><div class="h-4 w-5/6 rounded bg-slate-100"></div><div class="h-4 rounded bg-slate-100"></div><div class="h-4 w-4/6 rounded bg-slate-100"></div></div></div>', 1);
const _hoisted_6 = { class: "mt-10 flex justify-between" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createVNode($setup["Step"], {
          step: 1,
          "current-step": $setup.step
        }, null, 8, ["current-step"]),
        createVNode($setup["Step"], {
          step: 2,
          "current-step": $setup.step
        }, null, 8, ["current-step"]),
        createVNode($setup["Step"], {
          step: 3,
          "current-step": $setup.step
        }, null, 8, ["current-step"]),
        createVNode($setup["Step"], {
          step: 4,
          "current-step": $setup.step
        }, null, 8, ["current-step"])
      ]),
      createBaseVNode("div", _hoisted_4, [
        _hoisted_5,
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("button", {
            class: "rounded px-2 py-1 text-slate-400 hover:text-slate-700",
            onClick: _cache[0] || (_cache[0] = () => $setup.setStep($setup.step < 2 ? $setup.step : $setup.step - 1))
          }, " Back "),
          createBaseVNode(
            "button",
            {
              class: normalizeClass(["bg flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-blue-600 active:bg-blue-700", [$setup.step > 4 && "pointer-events-none opacity-50"]]),
              onClick: _cache[1] || (_cache[1] = () => $setup.setStep($setup.step > 4 ? $setup.step : $setup.step + 1))
            },
            " Continue ",
            2
            /* CLASS */
          )
        ])
      ])
    ])
  ]);
}
_sfc_main$1.__file = "components/custom/steps/Steps.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/steps/Steps.vue"]]);
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Steps = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Steps" }, {
    default: withCtx(() => [
      createVNode(_component_Steps)
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/steps/Steps.story.vue";
const Steps_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/steps/Steps.story.vue"]]);
export {
  Steps_story as default
};
