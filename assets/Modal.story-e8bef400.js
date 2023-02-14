import { az as defineComponent, aB as ref, aY as provide, aU as onMounted, b4 as onBeforeUnmount, aD as watch, aF as resolveDirective, aH as withDirectives, b5 as vShow, au as openBlock, aG as createElementBlock, av as createVNode, at as withCtx, aS as createCommentVNode, b9 as Transition, aJ as mergeProps, aQ as renderSlot, ar as resolveComponent, as as createBlock, ay as createBaseVNode } from "./vendor-be841bdf.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const MODAL_SYMBOL = Symbol("Modal");
const _sfc_main$1 = defineComponent({
  name: "Modal",
  inheritAttrs: false,
  props: {
    modelValue: Boolean,
    persistent: Boolean
  },
  emits: ["close", "update:modelValue"],
  setup(props, { emit }) {
    const labelledBy = ref();
    const describedBy = ref();
    provide(MODAL_SYMBOL, {
      labelledBy,
      describedBy
    });
    const showModal = ref(false);
    const showContent = ref(false);
    const backdropLeaving = ref(false);
    const cardLeaving = ref(false);
    function close() {
      showContent.value = false;
    }
    function onEscape(e) {
      if (props.modelValue && e.key === "Escape") {
        close();
      }
    }
    onMounted(() => {
      document.addEventListener("keydown", onEscape);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("keydown", onEscape);
    });
    function show() {
      showModal.value = true;
      showContent.value = true;
    }
    watch(
      () => props.modelValue,
      (newValue) => {
        if (newValue) {
          show();
        } else {
          close();
        }
      },
      { immediate: true }
    );
    watch([backdropLeaving, cardLeaving], (newValues) => {
      if (newValues[0] === false && newValues[1] === false) {
        showModal.value = false;
        emit("close");
        emit("update:modelValue", false);
      }
    });
    return {
      labelledBy,
      describedBy,
      showModal,
      showContent,
      backdropLeaving,
      cardLeaving,
      show,
      close
    };
  }
});
const _hoisted_1$1 = { class: "fixed inset-0 z-50 flex h-full w-full items-center justify-center" };
const _hoisted_2$1 = ["aria-labelledby", "aria-describedby"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_trap_focus = resolveDirective("trap-focus");
  return withDirectives((openBlock(), createElementBlock(
    "div",
    _hoisted_1$1,
    [
      createVNode(Transition, {
        "enter-active-class": "transition-all duration-150 ease-out",
        "leave-active-class": "transition-all duration-200 ease-in",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0",
        appear: "",
        onBeforeLeave: _cache[1] || (_cache[1] = ($event) => _ctx.backdropLeaving = true),
        onAfterLeave: _cache[2] || (_cache[2] = ($event) => _ctx.backdropLeaving = false)
      }, {
        default: withCtx(() => [
          _ctx.showContent ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "absolute inset-0 bg-black bg-opacity-70",
            "aria-hidden": "true",
            onClick: _cache[0] || (_cache[0] = ($event) => !_ctx.persistent && _ctx.close())
          })) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(Transition, {
        "enter-active-class": "transition-all duration-300 ease-out",
        "leave-active-class": "transition-all duration-200 ease-in",
        "enter-from-class": "scale-75 opacity-0",
        "enter-to-class": "scale-100 opacity-100",
        "leave-from-class": "scale-100 opacity-100",
        "leave-to-class": "scale-75 opacity-0",
        appear: "",
        onBeforeLeave: _cache[3] || (_cache[3] = ($event) => _ctx.cardLeaving = true),
        onAfterLeave: _cache[4] || (_cache[4] = ($event) => _ctx.cardLeaving = false)
      }, {
        default: withCtx(() => [
          _ctx.showContent ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            class: "relative",
            role: "dialog",
            "aria-modal": "true"
          }, _ctx.$attrs, {
            tabindex: -1,
            "aria-labelledby": _ctx.labelledBy,
            "aria-describedby": _ctx.describedBy
          }), [
            renderSlot(_ctx.$slots, "default", { close: _ctx.close })
          ], 16, _hoisted_2$1)), [
            [_directive_trap_focus]
          ]) : createCommentVNode("v-if", true)
        ]),
        _: 3
        /* FORWARDED */
      })
    ],
    512
    /* NEED_PATCH */
  )), [
    [vShow, _ctx.showModal]
  ]);
}
_sfc_main$1.__file = "components/custom/modal/Modal.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/modal/Modal.vue"]]);
const _sfc_main = {
  components: { Modal: __nuxt_component_0 },
  data() {
    return {
      open: false
    };
  },
  methods: {
    test() {
      this.open = false;
    }
  }
};
const _hoisted_1 = { class: "flex items-center justify-center" };
const _hoisted_2 = { class: "rounded-lg bg-white px-6 py-6 shadow-md" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h2",
  { class: "border-b-2 border-gray-200 pb-4 text-2xl font-semibold leading-tight text-gray-900" },
  " Delete account ",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "mt-4 text-gray-700" },
  " We'll cancel your subscription and remove all of your data from our servers. ",
  -1
  /* HOISTED */
);
const _hoisted_5 = { class: "mt-6" };
const _hoisted_6 = { class: "w-full max-w-lg rounded-lg bg-white px-6 py-6 shadow-2xl" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "dialog-title",
    class: "border-b-2 border-gray-200 pb-4 text-2xl font-semibold leading-tight text-gray-900"
  },
  " Delete account ",
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "mt-4 text-gray-700" },
  " Are you absolutely sure you want to cancel your subscription and delete your account? This action cannot be undone. ",
  -1
  /* HOISTED */
);
const _hoisted_9 = { class: "mt-6" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Modal = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Modal" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          _hoisted_4,
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("button", {
              class: "focus:shadow-outline rounded border border-transparent bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600 focus:outline-none",
              onClick: _cache[0] || (_cache[0] = ($event) => $data.open = true)
            }, " Delete my account "),
            createVNode(_component_Modal, {
              modelValue: $data.open,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.open = $event),
              "aria-labelledby": "dialog-title",
              persistent: true
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_6, [
                  _hoisted_7,
                  _hoisted_8,
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("button", {
                      type: "button",
                      class: "btn bg-red-500 font-semibold text-white hover:bg-red-600",
                      onClick: _cache[1] || (_cache[1] = ($event) => $data.open = false)
                    }, " Delete my account "),
                    createBaseVNode("button", {
                      class: "btn ml-4 border-gray-100 bg-white font-semibold text-gray-800 hover:bg-gray-100",
                      onClick: _cache[2] || (_cache[2] = ($event) => $data.open = false)
                    }, " Cancel ")
                  ])
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ])
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/modal/Modal.story.vue";
const Modal_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/modal/Modal.story.vue"]]);
export {
  Modal_story as default
};
