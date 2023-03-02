import { aB as defineComponent, au as openBlock, aA as createElementBlock, aw as createBaseVNode, aQ as Fragment, aP as renderList, aD as renderSlot, aF as createCommentVNode, aC as ref, ar as resolveComponent, as as createBlock, at as withCtx, av as createVNode, aE as toDisplayString, aH as normalizeClass } from "./vendor-ef711c3e.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const Marquee_vue_vue_type_style_index_0_scoped_228459f0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Marquee",
  props: {
    list: { type: Array, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "marquee" };
const _hoisted_2$1 = { class: "marquee-group" };
const _hoisted_3$1 = {
  "aria-hidden": "true",
  class: "marquee-group"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($props.list, (item, index) => {
          return renderSlot(_ctx.$slots, "default", {
            index,
            item
          }, void 0, true);
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]),
    createCommentVNode(" set aria-hidden to hide the duplicated list for screen readers "),
    createBaseVNode("div", _hoisted_3$1, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($props.list, (item) => {
          return renderSlot(_ctx.$slots, "default", { item }, void 0, true);
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ])
  ]);
}
_sfc_main$1.__file = "components/custom/marquee/Marquee.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-228459f0"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/marquee/Marquee.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Marquee.story",
  setup(__props, { expose }) {
    expose();
    const marqueeList = ref([
      { text: 1, color: "red" },
      { text: 2, color: "purple" },
      { text: 3, color: "blue" },
      { text: 4, color: "green" },
      { text: 5, color: "yellow" }
    ]);
    const list1 = [
      "Custom attributes",
      "Chat",
      "Subtasks",
      "Dark theme",
      "Filters",
      "Inbox",
      "Smart lists",
      "Public API"
    ];
    const list2 = [
      "Customizable shortcuts",
      "Private tasks",
      "Kanban",
      "Gantt charts",
      "Group mentions",
      "Powerful search",
      "Trash"
    ];
    const list3 = [
      "Task forms",
      "macOS & Windows apps",
      "Command-K",
      "Spreadsheet",
      "Calendar",
      "Webhooks"
    ];
    const __returned__ = { marqueeList, list1, list2, list3 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "relative flex flex-col gap-[2px] bg-[#f7f7f8] py-4" };
const _hoisted_2 = { class: "h-7 rounded-md bg-[rgba(199,199,199,.57)] px-2 text-[15px] font-medium leading-7 text-[#001834a6]" };
const _hoisted_3 = { class: "h-7 rounded-md bg-[rgba(199,199,199,.57)] px-2 text-[15px] font-medium leading-7 text-[#001834a6]" };
const _hoisted_4 = { class: "h-7 rounded-md bg-[rgba(199,199,199,.57)] px-2 text-[15px] font-medium leading-7 text-[#001834a6]" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "absolute inset-0 mix-blend-overlay",
    style: { "background": "radial-gradient(\n              138% 2376.3% at 3.75% 80%,\n              #d55ffe 0%,\n              #2f8dff 53.65%,\n              #15ada1 100%\n            )" }
  },
  null,
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Marquee = __nuxt_component_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Marquee",
    layout: { type: "grid", width: "700px" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Features" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_Marquee, {
              list: $setup.list1,
              style: { "--gap": "2px", "--duration": "36s" }
            }, {
              default: withCtx(({ item }) => [
                createBaseVNode(
                  "div",
                  _hoisted_2,
                  toDisplayString(item),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_Marquee, {
              list: $setup.list2,
              style: { "--gap": "2px", "--duration": "48s" },
              dir: "rtl"
            }, {
              default: withCtx(({ item }) => [
                createBaseVNode(
                  "div",
                  _hoisted_3,
                  toDisplayString(item),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_Marquee, {
              list: $setup.list3,
              style: { "--gap": "2px", "--duration": "56s" }
            }, {
              default: withCtx(({ item }) => [
                createBaseVNode(
                  "div",
                  _hoisted_4,
                  toDisplayString(item),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            _hoisted_5
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "no gap, custom animation" }, {
        default: withCtx(() => [
          createVNode(_component_Marquee, {
            list: $setup.marqueeList,
            style: { "--gap": "0rem", "--duration": "25s" }
          }, {
            default: withCtx(({ item }) => [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(["m-auto w-full py-2 text-center text-white", [`bg-${item.color}-500`]])
                },
                toDisplayString(item.text),
                3
                /* TEXT, CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["list"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "normal" }, {
        default: withCtx(() => [
          createVNode(_component_Marquee, {
            list: $setup.marqueeList,
            class: "mt-4"
          }, {
            default: withCtx(({ item }) => [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(["w-full rounded py-2 text-center text-white", [`bg-${item.color}-500`]])
                },
                toDisplayString(item.text),
                3
                /* TEXT, CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["list"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "reverse" }, {
        default: withCtx(() => [
          createVNode(_component_Marquee, {
            list: $setup.marqueeList,
            class: "reverse mt-4"
          }, {
            default: withCtx(({ item }) => [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(["w-full rounded py-2 text-center text-white", [`bg-${item.color}-500`]])
                },
                toDisplayString(item.text),
                3
                /* TEXT, CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["list"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "normal, rtl" }, {
        default: withCtx(() => [
          createVNode(_component_Marquee, {
            list: $setup.marqueeList,
            class: "mt-4",
            dir: "rtl"
          }, {
            default: withCtx(({ item }) => [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(["w-full rounded py-2 text-center text-white", [`bg-${item.color}-500`]])
                },
                toDisplayString(item.text),
                3
                /* TEXT, CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["list"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "reverse, rtl" }, {
        default: withCtx(() => [
          createVNode(_component_Marquee, {
            list: $setup.marqueeList,
            class: "reverse mt-4",
            dir: "rtl"
          }, {
            default: withCtx(({ item }) => [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(["w-full rounded py-2 text-center text-white", [`bg-${item.color}-500`]])
                },
                toDisplayString(item.text),
                3
                /* TEXT, CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["list"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/marquee/Marquee.story.vue";
const Marquee_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/marquee/Marquee.story.vue"]]);
export {
  Marquee_story as default
};
