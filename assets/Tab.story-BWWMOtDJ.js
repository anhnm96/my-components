import { aD as defineComponent, at as ref, aY as inject, av as computed, bt as watchOnce, aX as watch, as as _export_sfc, aw as openBlock, ax as createBlock, ay as withCtx, az as renderSlot, aC as resolveDynamicComponent, aP as onMounted, aZ as provide, b6 as reactive, bu as readonly, aH as createElementBlock, aF as createVNode, aG as createBaseVNode, aA as normalizeStyle, aK as createCommentVNode, aJ as Fragment, aI as renderList, aB as normalizeClass, aW as withModifiers, aL as toDisplayString, aV as mergeProps, bo as useTemplateRef, bv as onClickOutside, aM as createTextVNode, aN as __nuxt_component_0$2, bw as Motion, bx as _sfc_main$7, aE as resolveComponent, ba as normalizeProps, bb as guardReactiveProps } from "./vendor-BP-zCcN8.js";
const NavGroupKey = Symbol("NavGroup");
const NavListKey = Symbol("NavList");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "NavItem",
  props: {
    as: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ["activated"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const container = ref();
    const context = inject(NavGroupKey);
    const peers = inject(NavListKey);
    const index = computed(() => {
      return (peers == null ? void 0 : peers.value) ? peers.value.indexOf(container.value) : -1;
    });
    const isActive = computed(() => {
      return context.activeItem.index === index.value;
    });
    watchOnce(index, () => {
      if (props.active) {
        setActive(false);
      }
      if (index.value === peers.value.length - 1) {
        context.setMounted();
      }
    });
    watch(context.isMounted, () => {
      if (context.activeItem.index === -1 && index.value === 0) {
        setActive(false);
      }
    });
    function setActive(event) {
      if (context.isVertical) {
        context.setActiveItem(
          index.value,
          container.value.getBoundingClientRect().height,
          container.value.offsetTop
        );
      } else {
        context.setActiveItem(
          index.value,
          container.value.getBoundingClientRect().width,
          container.value.offsetLeft
        );
      }
      if (event !== false) {
        setTimeout(() => emit("activated"), context.duration);
      }
    }
    const __returned__ = { props, emit, container, context, peers, index, isActive, setActive };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(
    resolveDynamicComponent($props.as),
    { ref: "container" },
    {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {
          setActive: $setup.setActive,
          isActive: $setup.isActive
        })
      ]),
      _: 3
      /* FORWARDED */
    },
    512
    /* NEED_PATCH */
  );
}
_sfc_main$6.__file = "components/custom/tab/NavItem.vue";
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "D:/projects/my-components/components/custom/tab/NavItem.vue"]]);
const _sfc_main$5 = {
  __name: "NavList",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const container = ref();
    const children = ref([]);
    onMounted(() => {
      children.value = Array.from(container.value.children);
    });
    provide(NavListKey, children);
    const __returned__ = { container, children, get NavListKey() {
      return NavListKey;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(
    resolveDynamicComponent($props.as),
    { ref: "container" },
    {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    },
    512
    /* NEED_PATCH */
  );
}
_sfc_main$5.__file = "components/custom/tab/NavList.vue";
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "D:/projects/my-components/components/custom/tab/NavList.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NavGroup",
  props: {
    as: {
      type: String,
      default: "div"
    },
    duration: {
      type: Number,
      default: 300
    },
    vertical: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isReady = ref(false);
    const activeItem = reactive({
      index: -1,
      size: 0,
      position: 0
    });
    let previousSize = -1;
    let previousPosition = 0;
    let animated = true;
    function handleFluidMove(targetSize, targetPosition) {
      if (!animated) {
        return;
      }
      animated = false;
      if (previousSize === -1) {
        activeItem.size = targetSize;
        activeItem.position = targetPosition;
        animated = true;
      } else {
        if (targetPosition > previousPosition) {
          activeItem.size = targetSize + targetPosition - previousPosition;
          setTimeout(() => {
            activeItem.size = targetSize;
            activeItem.position = targetPosition;
            animated = true;
          }, props.duration);
        } else {
          activeItem.position = targetPosition;
          activeItem.size = previousSize + previousPosition - activeItem.position;
          setTimeout(() => {
            activeItem.size = targetSize;
            animated = true;
          }, props.duration);
        }
      }
      previousSize = targetSize;
      previousPosition = targetPosition;
    }
    function setActiveItem(index, size, position) {
      activeItem.index = index;
      if (props.fluid) {
        handleFluidMove(size, position);
      } else {
        activeItem.size = size;
        activeItem.position = position;
      }
      isReady.value = true;
    }
    const isMounted = ref(false);
    function setMounted() {
      isMounted.value = true;
    }
    provide(NavGroupKey, {
      setActiveItem,
      activeItem,
      isReady: readonly(isReady),
      setMounted,
      isMounted: readonly(isMounted),
      isFluid: props.fluid,
      isVertical: props.vertical,
      duration: props.duration
    });
    const __returned__ = { props, isReady, activeItem, get previousSize() {
      return previousSize;
    }, set previousSize(v) {
      previousSize = v;
    }, get previousPosition() {
      return previousPosition;
    }, set previousPosition(v) {
      previousPosition = v;
    }, get animated() {
      return animated;
    }, set animated(v) {
      animated = v;
    }, handleFluidMove, setActiveItem, isMounted, setMounted };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.as), null, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {
        ready: $setup.isReady,
        position: `${$setup.activeItem.position}px`,
        duration: `${$props.duration}ms`,
        size: `${$setup.activeItem.size}px`
      })
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$4.__file = "components/custom/tab/NavGroup.vue";
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "D:/projects/my-components/components/custom/tab/NavGroup.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "BorderedTabs",
  setup(__props, { expose: __expose }) {
    __expose();
    const items = [
      "Overview",
      "Integrations",
      "Activity",
      "Domains",
      "Usage",
      "Monitoring"
    ];
    function navigate() {
    }
    const __returned__ = { items, navigate };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "flex items-center justify-center" };
const _hoisted_2$2 = { class: "relative py-1" };
const _hoisted_3$1 = ["onClick"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavItem = __nuxt_component_0$1;
  const _component_NavList = __nuxt_component_1$1;
  const _component_NavGroup = __nuxt_component_2$1;
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createVNode(
      _component_NavGroup,
      mergeProps(_ctx.$attrs, {
        as: "nav",
        class: "relative rounded-2xl bg-white/5 px-4"
      }),
      {
        default: withCtx(({ ready, size, position, duration }) => [
          createBaseVNode("div", _hoisted_2$2, [
            ready ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                style: normalizeStyle({
                  "--size": size,
                  "--position": position,
                  "--duration": duration
                }),
                class: "absolute bottom-0 left-0 h-1 w-[--size] translate-x-[--position] rounded-full bg-white/25 transition-[width,transform] duration-[--duration]"
              },
              null,
              4
              /* STYLE */
            )) : createCommentVNode("v-if", true),
            createVNode(_component_NavList, {
              as: "ul",
              class: "relative flex items-stretch gap-3"
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.items, (item, index) => {
                    return createVNode(
                      _component_NavItem,
                      {
                        key: index,
                        as: "li",
                        onActivated: $setup.navigate
                      },
                      {
                        default: withCtx(({ setActive, isActive }) => [
                          createBaseVNode("a", {
                            href: "#",
                            class: normalizeClass([[
                              isActive ? "text-white" : "text-white/60 hover:text-white"
                            ], "inline-block p-4 text-sm transition"]),
                            onClick: withModifiers(setActive, ["prevent"])
                          }, toDisplayString(item), 11, _hoisted_3$1)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    );
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    )
  ]);
}
_sfc_main$3.__file = "components/custom/tab/BorderedTabs.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "D:/projects/my-components/components/custom/tab/BorderedTabs.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "NavigationTabs",
  setup(__props, { expose: __expose }) {
    __expose();
    const items = [
      "Overview",
      "Integrations",
      "Activity",
      "Domains",
      "Usage",
      "Monitoring"
    ];
    function navigate() {
    }
    const __returned__ = { items, navigate };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "flex items-center justify-center" };
const _hoisted_2$1 = { class: "relative py-1" };
const _hoisted_3 = ["onClick"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavItem = __nuxt_component_0$1;
  const _component_NavList = __nuxt_component_1$1;
  const _component_NavGroup = __nuxt_component_2$1;
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createVNode(
      _component_NavGroup,
      mergeProps(_ctx.$attrs, {
        as: "nav",
        class: "relative rounded-2xl bg-white/5 p-4"
      }),
      {
        default: withCtx(({ ready, size, position, duration }) => [
          createBaseVNode("div", _hoisted_2$1, [
            ready ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                style: normalizeStyle({
                  "--size": size,
                  "--position": position,
                  "--duration": duration
                }),
                class: "absolute inset-y-0 left-0 h-full w-[--size] translate-x-[--position] rounded-lg bg-white/10 transition-[width,transform] duration-[--duration]"
              },
              null,
              4
              /* STYLE */
            )) : createCommentVNode("v-if", true),
            createVNode(_component_NavList, {
              as: "ul",
              class: "relative flex items-stretch gap-3"
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.items, (item, index) => {
                    return createVNode(
                      _component_NavItem,
                      {
                        key: index,
                        as: "li",
                        onActivated: $setup.navigate
                      },
                      {
                        default: withCtx(({ setActive, isActive }) => [
                          createBaseVNode("a", {
                            href: "#",
                            class: normalizeClass([[
                              isActive ? "text-white" : "text-white/60 hover:text-white"
                            ], "inline-block px-4 py-1 text-sm transition"]),
                            onClick: withModifiers(setActive, ["prevent"])
                          }, toDisplayString(item), 11, _hoisted_3)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    );
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    )
  ]);
}
_sfc_main$2.__file = "components/custom/tab/NavigationTabs.vue";
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "D:/projects/my-components/components/custom/tab/NavigationTabs.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ExpandableTabs",
  props: {
    tabs: { type: Array, required: true },
    className: { type: String, required: false },
    activeColor: { type: String, required: false, default: "text-gray-400" }
  },
  emits: ["change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emits = __emit;
    const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };
    const selected = ref(null);
    const target = useTemplateRef("target");
    onClickOutside(target, () => {
      selected.value = null;
    });
    function handleSelect(index) {
      selected.value = index;
      emits("change", index);
    }
    const __returned__ = { props, emits, transition, selected, target, handleSelect };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  ref: "target",
  class: "flex flex-wrap items-center gap-2 rounded-2xl border border-gray-200 bg-white p-1 shadow-sm"
};
const _hoisted_2 = { key: 0 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$2;
  const _component_Motion = Motion;
  const _component_AnimatePresence = _sfc_main$7;
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1$1,
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.props.tabs, (tab, index) => {
          return openBlock(), createElementBlock("div", {
            key: tab.title
          }, [
            tab.type === "separator" ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createCommentVNode(" separator "),
              (openBlock(), createElementBlock("div", {
                key: `separator-${index}`,
                class: "mx-1 h-[24px] w-[1.2px] bg-gray-300",
                "aria-hidden": "true"
              }))
            ])) : (openBlock(), createBlock(_component_Motion, {
              key: tab.title,
              as: "button",
              class: normalizeClass(["flex items-center rounded-full px-2 py-2 text-sm font-medium transition-colors duration-200 ease-in-out", [$setup.selected === index ? $setup.props.activeColor : "text-gray-400"]]),
              style: normalizeStyle({
                backgroundColor: $setup.selected === index ? "#F4F4F5" : "transparent"
              }),
              initial: {
                gap: 0,
                paddingLeft: ".5rem",
                paddingRight: ".5rem"
              },
              animate: {
                gap: $setup.selected === index ? ".5rem" : 0,
                paddingLeft: $setup.selected === index ? "1rem" : ".5rem",
                paddingRight: $setup.selected === index ? "1rem" : ".5rem"
              },
              transition: $setup.transition,
              onClick: ($event) => $setup.handleSelect(index)
            }, {
              default: withCtx(() => [
                createVNode(_component_Icon, {
                  name: tab.icon,
                  class: "h-5 w-5 text-black"
                }, null, 8, ["name"]),
                createVNode(
                  _component_AnimatePresence,
                  null,
                  {
                    default: withCtx(() => [
                      $setup.selected === index ? (openBlock(), createBlock(
                        _component_Motion,
                        {
                          key: `title-${index}`,
                          as: "span",
                          initial: { width: 0, opacity: 0 },
                          animate: { width: "auto", opacity: 1 },
                          exit: { width: 0, opacity: 0 },
                          class: "overflow-hidden text-black",
                          transition: $setup.transition
                        },
                        {
                          default: withCtx(() => [
                            createTextVNode(
                              toDisplayString(tab.title),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      )) : createCommentVNode("v-if", true)
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class", "style", "animate", "onClick"]))
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    512
    /* NEED_PATCH */
  );
}
_sfc_main$1.__file = "components/custom/tab/ExpandableTabs.vue";
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/projects/my-components/components/custom/tab/ExpandableTabs.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tab.story",
  setup(__props, { expose: __expose }) {
    __expose();
    function initState() {
      return {
        fluid: false,
        duration: 300
      };
    }
    const tabs = [
      { title: "Dashboard", icon: "lucide:home", link: "/dashboard" },
      { title: "Notifications", icon: "lucide:bell", link: "/notifications" },
      { type: "separator" },
      { title: "Settings", icon: "lucide:settings", link: "/settings" },
      { title: "Support", icon: "lucide:help-circle", link: "/support" },
      { title: "Security", icon: "lucide:shield", link: "/security" }
    ];
    const __returned__ = { initState, tabs };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex justify-center gap-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BorderedTabs = __nuxt_component_0;
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_NavigationTabs = __nuxt_component_1;
  const _component_ExpandableTabs = __nuxt_component_2;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Tab",
    layout: { type: "grid", width: "100%" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Bordered Tabs",
        "init-state": $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode(
            _component_BorderedTabs,
            normalizeProps(guardReactiveProps(state)),
            null,
            16
            /* FULL_PROPS */
          )
        ]),
        controls: withCtx(({ state }) => [
          createVNode(_component_HstCheckbox, {
            modelValue: state.fluid,
            "onUpdate:modelValue": ($event) => state.fluid = $event,
            title: "Fluid"
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: state.duration,
            "onUpdate:modelValue": ($event) => state.duration = $event,
            title: "Duration",
            step: 100
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Navigation Tabs",
        "init-state": $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode(
            _component_NavigationTabs,
            normalizeProps(guardReactiveProps(state)),
            null,
            16
            /* FULL_PROPS */
          )
        ]),
        controls: withCtx(({ state }) => [
          createVNode(_component_HstCheckbox, {
            modelValue: state.fluid,
            "onUpdate:modelValue": ($event) => state.fluid = $event,
            title: "Fluid"
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: state.duration,
            "onUpdate:modelValue": ($event) => state.duration = $event,
            title: "Duration",
            step: 100
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Expandable Tabs" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_ExpandableTabs, { tabs: $setup.tabs })
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
_sfc_main.__file = "components/custom/tab/Tab.story.vue";
const Tab_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/tab/Tab.story.vue"]]);
export {
  Tab_story as default
};
