import { _ as __nuxt_component_0, a as __nuxt_component_2 } from "./Button-ChKMZVPM.js";
import { as as _export_sfc, aD as defineComponent, at as ref, aE as resolveComponent, aw as openBlock, ax as createBlock, ay as withCtx, aF as createVNode, aM as createTextVNode, aG as createBaseVNode, aN as __nuxt_component_0$1 } from "./vendor-CMJc4gfg.js";
import { _ as __nuxt_component_0$2 } from "./ToggleButton-B2Mtsf9n.js";
import "./index-DNEccDnl.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const loading = ref(false);
    function click() {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 1500);
    }
    const __returned__ = { loading, click };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseButton = __nuxt_component_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Icon = __nuxt_component_0$1;
  const _component_BaseSpinner = __nuxt_component_2;
  const _component_ToggleButton = __nuxt_component_0$2;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Button",
    layout: { type: "grid", width: "300px" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Loading-sm" }, {
        default: withCtx(() => [
          createVNode(_component_BaseButton, {
            class: "btn-sm rounded bg-purple-600 px-2 py-1 text-white",
            loading: ""
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode(" Button ")
            ])),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Disabled-lg" }, {
        default: withCtx(() => [
          createVNode(_component_BaseButton, {
            class: "btn-lg rounded bg-green-600 px-2 py-1 text-white",
            disabled: ""
          }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode(" Disabled ")
            ])),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "aria-disabled" }, {
        default: withCtx(() => [
          _cache[3] || (_cache[3] = createBaseVNode(
            "a",
            {
              href: "https://css-tricks.com/making-disabled-buttons-more-inclusive/",
              rel: "noreferrer noopener",
              class: "mb-2 block text-white"
            },
            "Here's why we need aria-disabled button! ",
            -1
            /* HOISTED */
          )),
          createVNode(_component_BaseButton, {
            class: "btn-xl rounded bg-blue-600 px-2 py-1 text-white",
            "aria-disabled": "true"
          }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode(" aira-disabled ")
            ])),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Normal" }, {
        default: withCtx(() => [
          createVNode(_component_BaseButton, {
            class: "rounded bg-red-600 px-2 py-1 text-white",
            loading: $setup.loading,
            onClick: $setup.click
          }, {
            default: withCtx(() => [
              _cache[4] || (_cache[4] = createBaseVNode(
                "span",
                null,
                "Normal",
                -1
                /* HOISTED */
              )),
              createVNode(_component_Icon, {
                class: "ml-0.5 mt-px",
                name: "ph:house-line-duotone"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Hide status content" }, {
        default: withCtx(() => [
          createVNode(_component_BaseButton, {
            class: "rounded bg-indigo-600 px-2 py-1 text-white",
            loading: $setup.loading,
            "hide-status-content": "",
            onClick: $setup.click
          }, {
            default: withCtx(() => [
              _cache[5] || (_cache[5] = createBaseVNode(
                "span",
                null,
                "Icon",
                -1
                /* HOISTED */
              )),
              $setup.loading ? (openBlock(), createBlock(_component_BaseSpinner, {
                key: 0,
                class: "ml-0.5 mt-px"
              })) : (openBlock(), createBlock(_component_Icon, {
                key: 1,
                class: "ml-0.5 mt-px",
                name: "ph:house-line-duotone"
              }))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "toggle" }, {
        default: withCtx(() => [
          createVNode(_component_ToggleButton, { selected: false }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("Pin")
            ])),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "others" }, {
        default: withCtx(() => _cache[7] || (_cache[7] = [
          createBaseVNode(
            "div",
            { class: "space-x-2 space-y-2" },
            [
              createBaseVNode("button", { class: "btn btn-link" }, "Link"),
              createBaseVNode("button", { class: "btn btn-outline" }, "Test"),
              createBaseVNode("button", { class: "btn btn-outline btn-info" }, "Test"),
              createBaseVNode("button", { class: "btn btn-outline btn-success" }, "Test"),
              createBaseVNode("button", { class: "btn btn-ghost" }, "Ghost")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/base/button/Button.story.vue";
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/base/button/Button.story.vue"]]);
export {
  Button_story as default
};
