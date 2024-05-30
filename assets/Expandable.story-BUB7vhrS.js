import { aD as defineComponent, be as useCssVars, at as ref, aT as onMounted, bf as unref, as as _export_sfc, bg as pick, aw as openBlock, ax as createBlock, ay as withCtx, az as renderSlot, b1 as Transition, aE as resolveComponent, aF as createVNode, aG as createBaseVNode, aH as createElementBlock, aK as createCommentVNode, aS as withModifiers, aO as createTextVNode } from "./vendor-BdBYoA5y.js";
import { _ as __nuxt_component_0$1 } from "./Button-CPdGK3F4.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Expandable",
  props: {
    dimension: { type: String, required: false, default: "vertical" },
    multiple: { type: Boolean, required: false },
    transition: { type: String, required: false, default: "all 300ms ease-in-out" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    useCssVars((_ctx) => ({
      "3ec9d6eb-dimensionKeys[0]": unref(dimensionKeys)[0]
    }));
    const props = __props;
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
    const currentHeight = ref(0);
    const dimensionKeys = dimensions[props.dimension];
    function setClosedDimensions(element) {
      dimensionKeys.forEach((key) => {
        if (key === "height")
          element.style[key] = `${currentHeight.value}px`;
        else
          element.style[key] = "0";
      });
    }
    function forceRepaint(element) {
      getComputedStyle(element).height;
    }
    const el = ref();
    onMounted(() => {
      if (el.value && el.value.nodeType === 1) {
        el.value.style.transition = props.transition;
        currentHeight.value = el.value.offsetHeight;
      }
    });
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
      currentHeight.value = element.offsetHeight;
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
      if (props.multiple) {
        element.style.position = "absolute";
        element.style.visibility = "hidden";
      } else {
        forceRepaint(element);
        requestAnimationFrame(() => {
          currentHeight.value = 0;
          setClosedDimensions(element);
        });
      }
    }
    const __returned__ = { props, dimensions, currentHeight, dimensionKeys, setClosedDimensions, forceRepaint, el, enter, afterEnter, leave };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(
    Transition,
    {
      ref: "el",
      name: "expand",
      onEnter: $setup.enter,
      onAfterEnter: $setup.afterEnter,
      onLeave: $setup.leave
    },
    {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
      /* FORWARDED */
    },
    512
    /* NEED_PATCH */
  );
}
_sfc_main$1.__file = "components/custom/expandable/Expandable.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3ec9d6eb"], ["__file", "D:/projects/my-components/components/custom/expandable/Expandable.vue"]]);
function sleep(ms) {
  return new Promise(
    (resolve) => setTimeout(() => {
      resolve();
    }, ms)
  );
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Expandable.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const expanded = ref(true);
    const expanded2 = ref(false);
    const status = ref("idle");
    async function submit() {
      status.value = "saving";
      await sleep(1500);
      status.value = "success";
      await sleep(1250);
      status.value = "";
    }
    const r = ref(true);
    const __returned__ = { expanded, expanded2, status, submit, r };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "font-lexend font-bold" },
  " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  -1
  /* HOISTED */
);
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
  class: "my-2 rounded-[1.125rem] bg-[#1B1829] px-4 pb-[0.8125rem] pt-2 leading-7 text-gray-400"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  " 🔥 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis distinctio! ",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  " 🔥 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit illo corporis eos aliquid voluptates aut laborum! Perspiciatis, quam laboriosam. ",
  -1
  /* HOISTED */
);
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];
const _hoisted_8 = { class: "mt-3 flex items-stretch gap-2" };
const _hoisted_9 = { class: "flex-shrink-0 basis-1/5 items-center" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "font-lexend font-bold" },
  " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  -1
  /* HOISTED */
);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = {
  key: 0,
  class: "rounded-[1.125rem] bg-[#1B1829] px-4 pb-[0.8125rem] pt-2 leading-7 text-gray-400"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  " 🔥 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis distinctio! ",
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  " 🔥 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sit illo corporis eos aliquid voluptates aut laborum! Perspiciatis, quam laboriosam. ",
  -1
  /* HOISTED */
);
const _hoisted_15 = [
  _hoisted_13,
  _hoisted_14
];
const _hoisted_16 = { class: "flex min-h-[500px] flex-col items-start bg-zinc-900 pt-28" };
const _hoisted_17 = { class: "mx-auto w-full max-w-md" };
const _hoisted_18 = { class: "overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "px-8 pt-8" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "text-lg text-white" }, "Reset password")
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = { key: 0 };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "text-sm text-zinc-400" },
  " Enter your email to get a password reset link: ",
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "mt-3" },
  [
    /* @__PURE__ */ createBaseVNode("input", {
      class: "block w-full rounded border-none text-slate-900",
      type: "email",
      required: "",
      defaultValue: "sam@buildui.com"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_23 = { class: "mt-8 text-right" };
const _hoisted_24 = { key: 1 };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "div",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "p-8 text-sm text-zinc-400" }, " Email sent! Check your inbox to continue. ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = [
  _hoisted_25
];
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "mt-8 text-sm text-zinc-500" },
  [
    /* @__PURE__ */ createBaseVNode("span", { class: "underline" }, "Reach out"),
    /* @__PURE__ */ createTextVNode(" to us if you need more help. ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_28 = { class: "p-2" };
const _hoisted_29 = { class: "rounded border border-green-500 bg-blue-400" };
const _hoisted_30 = {
  key: 0,
  class: "h-[200px] bg-red-400"
};
const _hoisted_31 = {
  key: 1,
  class: "h-[400px] bg-green-400"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Expandable = __nuxt_component_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_BaseButton = __nuxt_component_0$1;
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
              $setup.expanded ? (openBlock(), createElementBlock("div", _hoisted_4, [..._hoisted_7])) : createCommentVNode("v-if", true)
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Horizontal" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("button", {
                class: "flex w-full items-center justify-between rounded-[1.125rem] bg-[#1B1829] px-4 py-3 text-gray-100",
                onClick: _cache[1] || (_cache[1] = ($event) => $setup.expanded2 = !$setup.expanded2)
              }, [..._hoisted_11])
            ]),
            createVNode(_component_Expandable, { dimension: "horizontal" }, {
              default: withCtx(() => [
                $setup.expanded2 ? (openBlock(), createElementBlock("div", _hoisted_12, [..._hoisted_15])) : createCommentVNode("v-if", true)
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Resizable Panel" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("button", {
                class: "text-white",
                onClick: _cache[2] || (_cache[2] = ($event) => $setup.status = "idle")
              }, "Refresh"),
              createBaseVNode("div", _hoisted_18, [
                _hoisted_19,
                createVNode(_component_Expandable, {
                  multiple: "",
                  transition: "height 600ms cubic-bezier(0.33, 1.01, 0.49, 1.04), opacity 200ms 200ms ease-in"
                }, {
                  default: withCtx(() => [
                    $setup.status !== "" ? (openBlock(), createElementBlock("div", _hoisted_20, [
                      createBaseVNode("div", null, [
                        createBaseVNode(
                          "form",
                          {
                            class: "p-8",
                            onSubmit: withModifiers($setup.submit, ["prevent"])
                          },
                          [
                            _hoisted_21,
                            _hoisted_22,
                            createBaseVNode("div", _hoisted_23, [
                              createVNode(_component_BaseButton, {
                                loading: $setup.status === "saving",
                                success: $setup.status === "success",
                                class: "rounded bg-indigo-500 px-5 py-2 text-sm font-medium text-white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Email me my link ")
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["loading", "success"])
                            ])
                          ],
                          32
                          /* NEED_HYDRATION */
                        )
                      ])
                    ])) : (openBlock(), createElementBlock("div", _hoisted_24, [..._hoisted_26]))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _hoisted_27
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Resizable Test" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_28, [
            createBaseVNode("button", {
              class: "text-white",
              onClick: _cache[3] || (_cache[3] = ($event) => $setup.r = !$setup.r)
            }, "Toggle"),
            createBaseVNode("div", _hoisted_29, [
              createVNode(_component_Expandable, { multiple: "" }, {
                default: withCtx(() => [
                  $setup.r ? (openBlock(), createElementBlock("div", _hoisted_30)) : (openBlock(), createElementBlock("div", _hoisted_31))
                ]),
                _: 1
                /* STABLE */
              })
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
_sfc_main.__file = "components/custom/expandable/Expandable.story.vue";
const Expandable_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/expandable/Expandable.story.vue"]]);
export {
  Expandable_story as default
};
