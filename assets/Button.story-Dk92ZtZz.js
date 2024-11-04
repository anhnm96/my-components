import { _ as __nuxt_component_0 } from "./Button-BdI-QjyY.js";
import { as as _export_sfc, aw as openBlock, aH as createElementBlock, aD as defineComponent, aG as createBaseVNode, aM as createTextVNode, aE as resolveComponent, ax as createBlock, ay as withCtx, aF as createVNode } from "./vendor-DNJAtGl5.js";
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "btn btn-xl button-glow" };
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_1$2, "Hover");
}
_sfc_main$2.__file = "components/tailwind/buttons/GlowEffect.vue";
const GlowEffect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-afd7ed1a"], ["__file", "D:/projects/my-components/components/tailwind/buttons/GlowEffect.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RainbowGradient",
  setup(__props, { expose: __expose }) {
    __expose();
    function getCursorPosition(element, event) {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = event.clientX - centerX;
      const y = centerY - event.clientY;
      return { x, y };
    }
    function pointermove(event) {
      const button = event.target;
      const { x, y } = getCursorPosition(button, event);
      button.style.setProperty("--coord-x", x.toString());
      button.style.setProperty("--coord-y", y.toString());
    }
    function pointerleave(event) {
      const button = event.target;
      button.style.setProperty("--coord-x", "0");
      button.style.setProperty("--coord-y", "0");
    }
    const __returned__ = { getCursorPosition, pointermove, pointerleave };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "container" };
const _hoisted_2$1 = {
  class: "container",
  "data-theme": "dark"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", null, [
    createBaseVNode("div", _hoisted_1$1, [
      createBaseVNode("div", null, [
        createBaseVNode(
          "button",
          {
            onPointermove: $setup.pointermove,
            onPointerleave: $setup.pointerleave
          },
          _cache[0] || (_cache[0] = [
            createBaseVNode(
              "div",
              { class: "inner" },
              [
                createTextVNode("Cancel "),
                createBaseVNode("span", null, "Esc")
              ],
              -1
              /* HOISTED */
            )
          ]),
          32
          /* NEED_HYDRATION */
        ),
        createBaseVNode(
          "button",
          {
            onPointermove: $setup.pointermove,
            onPointerleave: $setup.pointerleave
          },
          _cache[1] || (_cache[1] = [
            createBaseVNode(
              "div",
              { class: "inner" },
              [
                createTextVNode("Enjoy "),
                createBaseVNode("span", null, "Shift")
              ],
              -1
              /* HOISTED */
            )
          ]),
          32
          /* NEED_HYDRATION */
        )
      ])
    ]),
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", null, [
        createBaseVNode(
          "button",
          {
            onPointermove: $setup.pointermove,
            onPointerleave: $setup.pointerleave
          },
          _cache[2] || (_cache[2] = [
            createBaseVNode(
              "div",
              { class: "inner" },
              [
                createTextVNode("Cancel "),
                createBaseVNode("span", null, "Esc")
              ],
              -1
              /* HOISTED */
            )
          ]),
          32
          /* NEED_HYDRATION */
        ),
        createBaseVNode(
          "button",
          {
            onPointermove: $setup.pointermove,
            onPointerleave: $setup.pointerleave
          },
          _cache[3] || (_cache[3] = [
            createBaseVNode(
              "div",
              { class: "inner" },
              [
                createTextVNode("Enjoy "),
                createBaseVNode("span", null, "Shift")
              ],
              -1
              /* HOISTED */
            )
          ]),
          32
          /* NEED_HYDRATION */
        )
      ])
    ])
  ]);
}
_sfc_main$1.__file = "components/tailwind/buttons/RainbowGradient.vue";
const RainbowGradient = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-305d337f"], ["__file", "D:/projects/my-components/components/tailwind/buttons/RainbowGradient.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button.story",
  setup(__props, { expose: __expose }) {
    __expose();
    function download(e) {
      const btn = e.target;
      btn.classList.add("clicked");
      btn.textContent = "";
      setTimeout(() => {
        btn.classList.remove("clicked");
        setTimeout(() => {
          btn.textContent = "Download";
        }, 200);
      }, 3e3);
    }
    const __returned__ = { download, GlowEffect, RainbowGradient };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "p-14" };
const _hoisted_2 = { class: "p-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_BaseButton = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Button",
    layout: { type: "grid", width: "300px" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Pulse" }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode(
            "div",
            { class: "p-4" },
            [
              createBaseVNode("button", { class: "btn-pulse rounded-md bg-blue-400 px-6 py-2 text-sm font-semibold text-white" }, " Buy now ")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Gradient Border" }, {
        default: withCtx(() => _cache[1] || (_cache[1] = [
          createBaseVNode(
            "button",
            { class: "btn-disco relative overflow-hidden rounded-md px-8 py-4 will-change-transform" },
            [
              createBaseVNode("span", { class: "absolute inset-[2px] -z-[1] rounded bg-black" }),
              createBaseVNode("span", { class: "text-neutral-400" }, "Button")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Gradient Shadow" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_BaseButton, { class: "border-gradient before:transition-animation relative isolate rounded-lg border-2 border-solid border-transparent text-base before:absolute before:-inset-4 before:z-[-1] before:rounded-lg before:bg-gradient-to-r before:from-[#6658fe] before:via-[#9f6afe] before:to-[#b79dfe] before:opacity-0 before:blur-sm hover:before:opacity-75 hover:before:blur-xl" }, {
              default: withCtx(() => _cache[2] || (_cache[2] = [
                createTextVNode(" Hover me ")
              ])),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Grid Track" }, {
        default: withCtx(() => _cache[3] || (_cache[3] = [
          createBaseVNode(
            "div",
            { class: "p-4" },
            [
              createBaseVNode("button", { class: "grid-btn" }, [
                createBaseVNode("span", null, [
                  createBaseVNode("span", { "aria-hidden": "true" }, [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      viewBox: "0 0 10 15"
                    }, [
                      createBaseVNode("path", {
                        d: "M 10 0 L 10 5 L 5 5 L 0 0 Z M 0 5 L 5 5 L 10 10 L 5 10 L 5 15 L 0 10 Z",
                        fill: "currentColor"
                      })
                    ])
                  ]),
                  createBaseVNode("span", null, "Framer Button"),
                  createBaseVNode("span", { "aria-hidden": "true" }, [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      })
                    ])
                  ])
                ])
              ])
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Download" }, {
        default: withCtx(() => [
          createBaseVNode("div", { class: "pb-2 pt-4 text-center" }, [
            createBaseVNode("button", {
              class: "download-btn",
              onClick: $setup.download
            }, "Download")
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Glow Effect" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["GlowEffect"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Rainbow Gradient",
        "responsive-disabled": ""
      }, {
        default: withCtx(() => [
          createVNode($setup["RainbowGradient"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/tailwind/Button.story.vue";
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d87d186e"], ["__file", "D:/projects/my-components/components/tailwind/Button.story.vue"]]);
export {
  Button_story as default
};
