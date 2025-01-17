import { N as NuxtLink } from "./components-C4F2w2BC.js";
import { as as _export_sfc, aD as defineComponent, at as ref, cc as useEventListener, aU as throttle, aw as openBlock, aH as createElementBlock, aG as createBaseVNode, aA as normalizeStyle, aF as createVNode, ay as withCtx, aM as createTextVNode, az as renderSlot, br as clamp } from "./vendor-CMJc4gfg.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  setup(__props, { expose: __expose }) {
    __expose();
    const height = ref(80);
    const opacity = ref(1);
    const bgOpacity = ref(1);
    const lastScrollTop = ref(0);
    function onScroll() {
      const current = window.scrollY;
      const diff = current - lastScrollTop.value;
      const newHeight = height.value - diff;
      height.value = clamp(newHeight, 50, 80);
      const newOpacity = opacity.value - diff * 0.1;
      opacity.value = clamp(newOpacity, 0, 1);
      bgOpacity.value = clamp(newOpacity, 0.85, 1);
      lastScrollTop.value = current <= 0 ? 0 : current;
    }
    useEventListener("scroll", throttle(onScroll, 20));
    const __returned__ = { height, opacity, bgOpacity, lastScrollTop, onScroll };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "bg-slate-700" };
const _hoisted_2 = { class: "mx-auto flex w-full flex-1 text-slate-600" };
const _hoisted_3 = { class: "z-0 flex-1" };
const _hoisted_4 = { class: "mx-auto flex w-full max-w-3xl items-center justify-between px-8" };
const _hoisted_5 = { class: "mx-auto max-w-3xl px-8 pt-20" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtLink = NuxtLink;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode(
          "header",
          {
            class: "fixed inset-x-0 z-10 flex h-20 shadow backdrop-blur-md transition-all",
            style: normalizeStyle({
              height: `${$setup.height}px`,
              backgroundColor: `rgba(255 255 255 / ${$setup.bgOpacity})`
            })
          },
          [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "flex origin-left items-center text-xl font-semibold uppercase"
              }, {
                default: withCtx(() => _cache[0] || (_cache[0] = [
                  createBaseVNode(
                    "span",
                    { class: "-ml-1.5 inline-block -rotate-90 text-[10px] leading-[0]" },
                    " The ",
                    -1
                    /* HOISTED */
                  ),
                  createBaseVNode(
                    "span",
                    { class: "-ml-1 text-2xl tracking-[-.075em]" },
                    " Daily Bugle ",
                    -1
                    /* HOISTED */
                  )
                ])),
                _: 1
                /* STABLE */
              }),
              createBaseVNode(
                "nav",
                {
                  style: normalizeStyle({ opacity: $setup.opacity }),
                  class: "flex space-x-4 text-xs font-medium text-slate-400 transition-opacity"
                },
                [
                  createVNode(_component_NuxtLink, { to: "table" }, {
                    default: withCtx(() => _cache[1] || (_cache[1] = [
                      createTextVNode("Table")
                    ])),
                    _: 1
                    /* STABLE */
                  }),
                  _cache[2] || (_cache[2] = createBaseVNode(
                    "a",
                    { href: "#" },
                    "Sports",
                    -1
                    /* HOISTED */
                  )),
                  _cache[3] || (_cache[3] = createBaseVNode(
                    "a",
                    { href: "#" },
                    "Culture",
                    -1
                    /* HOISTED */
                  ))
                ],
                4
                /* STYLE */
              )
            ])
          ],
          4
          /* STYLE */
        ),
        createBaseVNode("main", _hoisted_5, [
          renderSlot(_ctx.$slots, "default")
        ])
      ])
    ])
  ]);
}
_sfc_main.__file = "layouts/default.vue";
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/layouts/default.vue"]]);
export {
  _default as default
};
