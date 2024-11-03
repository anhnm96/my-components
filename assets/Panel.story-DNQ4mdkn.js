import { aD as defineComponent, at as ref, b6 as reactive, bk as useId, aZ as provide, bl as useLocalStorage, aO as onMounted, as as _export_sfc, aw as openBlock, ax as createBlock, ay as withCtx, az as renderSlot, aC as resolveDynamicComponent, aY as inject, av as computed, aB as normalizeClass, aA as normalizeStyle, bm as useTemplateRef, aG as createBaseVNode, aV as mergeProps, bn as Teleport, aE as resolveComponent, aF as createVNode, aM as createTextVNode } from "./vendor-MhOJwlZn.js";
const PanelGroupKey = Symbol("PanelGroup");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PanelGroup",
  props: {
    as: { type: String, required: false, default: "div" },
    direction: { type: String, required: false, default: "horizontal" },
    teleportHandle: { type: Boolean, required: false },
    autoSaveId: { type: String, required: false },
    lazy: { type: Boolean, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const directionMap = {
      vertical: "height",
      horizontal: "width"
    };
    const directionValue = directionMap[__props.direction];
    const axisMap = {
      vertical: "Y",
      horizontal: "X"
    };
    const axis = axisMap[__props.direction];
    const items = ref([]);
    function addItem(item) {
      items.value.push(item);
    }
    function getHandlePanelElements(handleEl) {
      const handles = Array.from(
        document.querySelectorAll(
          `[data-panel-group-id="${groupId}"][data-panel-handle-id]`
        )
      );
      const handleIndex = handles.indexOf(handleEl);
      const nextHandleEl = handles[handleIndex + 1];
      const itemBefore = items.value[handleIndex];
      const itemAfter = items.value[handleIndex + 1];
      return [itemBefore, itemAfter, handleIndex, nextHandleEl];
    }
    const reactiveState = reactive({
      dragging: false,
      itemBeforeId: "",
      itemAfterId: "",
      activeHandleId: ""
    });
    const dragState = {
      startPos: 0,
      delta: 0,
      itemBefore: void 0,
      itemAfter: void 0,
      initialSizeItemBefore: 0,
      initialSizeItemAfter: 0,
      handleIndex: -1,
      handleOffset: 0,
      handleEl: null,
      nextHandleEl: void 0
    };
    function startDragging(e, handleEl, handleId) {
      reactiveState.dragging = true;
      dragState.startPos = e[`client${axis}`];
      dragState.handleEl = handleEl;
      reactiveState.activeHandleId = handleId;
      const [itemBefore, itemAfter, handleIndex, nextHandleEl] = getHandlePanelElements(handleEl);
      dragState.itemBefore = itemBefore;
      dragState.itemAfter = itemAfter;
      dragState.handleIndex = handleIndex;
      dragState.nextHandleEl = nextHandleEl;
      dragState.initialSizeItemBefore = itemBefore.getBoundingClientRect()[directionValue];
      dragState.initialSizeItemAfter = itemAfter.getBoundingClientRect()[directionValue];
      reactiveState.itemBeforeId = itemBefore.dataset.panelItemId;
      reactiveState.itemAfterId = itemAfter.dataset.panelItemId;
      if (__props.teleportHandle) {
        dragState.handleOffset = handleEl.getBoundingClientRect()[directionValue] / 2;
      }
      window.addEventListener("pointermove", pointerMove);
      window.addEventListener("pointerup", stopDragging);
    }
    function pointerMove(e) {
      dragState.delta = e[`client${axis}`] - dragState.startPos;
      if (__props.lazy)
        dragState.handleEl.style.transform = `translate${axis}(${dragState.delta + dragState.handleOffset}px)`;
      else update();
    }
    function stopDragging() {
      reactiveState.dragging = false;
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerup", stopDragging);
      reactiveState.activeHandleId = "";
      if (__props.lazy) update();
      dragState.delta = 0;
    }
    function update() {
      if (!dragState.itemBefore || !dragState.itemAfter) return;
      const itemBeforeMinSize = Number(
        dragState.itemBefore.dataset.panelItemMinSize
      );
      const itemBeforeMaxSize = Number(
        dragState.itemBefore.dataset.panelItemMaxSize
      );
      let itemBeforeNewSize = dragState.initialSizeItemBefore + dragState.delta;
      if (!isNaN(itemBeforeMinSize) && itemBeforeNewSize <= itemBeforeMinSize)
        itemBeforeNewSize = itemBeforeMinSize;
      else if (!isNaN(itemBeforeMaxSize) && itemBeforeNewSize >= itemBeforeMaxSize) {
        itemBeforeNewSize = itemBeforeMaxSize;
      }
      const totalSize = dragState.initialSizeItemBefore + dragState.initialSizeItemAfter;
      const itemAfterMinSize = Number(dragState.itemAfter.dataset.panelItemMinSize);
      const itemAfterMaxSize = Number(dragState.itemAfter.dataset.panelItemMaxSize);
      let itemAfterNewSize = totalSize - itemBeforeNewSize;
      if (!isNaN(itemAfterMinSize) && itemAfterNewSize <= itemAfterMinSize) {
        itemAfterNewSize = itemAfterMinSize;
        itemBeforeNewSize = totalSize - itemAfterNewSize;
      } else if (!isNaN(itemAfterMaxSize) && itemAfterNewSize >= itemAfterMaxSize) {
        itemAfterNewSize = itemAfterMaxSize;
        itemBeforeNewSize = totalSize - itemAfterNewSize;
      }
      dragState.itemBefore.style[directionValue] = `${itemBeforeNewSize}px`;
      dragState.itemAfter.style[directionValue] = `${itemAfterNewSize}px`;
      dragState.handleEl.ariaValueNow = `${itemBeforeNewSize}px`;
      if (dragState.nextHandleEl)
        dragState.nextHandleEl.ariaValueNow = `${itemAfterNewSize}px`;
      if (__props.autoSaveId) {
        sizes.value[dragState.handleIndex] = `${itemBeforeNewSize}px`;
        sizes.value[dragState.handleIndex + 1] = `${itemAfterNewSize}px`;
      }
    }
    const groupId = useId();
    provide(PanelGroupKey, {
      addItem,
      groupId,
      direction: __props.direction,
      directionValue,
      teleportHandle: __props.teleportHandle,
      state: reactiveState,
      startDragging,
      stopDragging,
      getHandlePanelElements
    });
    let sizes = ref([]);
    if (__props.autoSaveId) sizes = useLocalStorage(__props.autoSaveId, [], { initOnMounted: true });
    onMounted(() => {
      const handles = Array.from(
        document.querySelectorAll(
          `[data-panel-group-id="${groupId}"][data-panel-handle-id]`
        )
      );
      if (sizes.value.length)
        items.value.forEach((item, index) => {
          item.style[directionValue] = sizes.value[index];
          if (handles[index])
            handles[index].ariaValueNow = `${sizes.value[index]}px`;
        });
      else
        requestAnimationFrame(() => {
          items.value.forEach((item) => {
            const size = `${item.getBoundingClientRect()[directionValue]}px`;
            sizes.value.push(size);
          });
          items.value.forEach((item, index) => {
            item.style[directionValue] = sizes.value[index];
            if (handles[index])
              handles[index].ariaValueNow = `${sizes.value[index]}px`;
          });
        });
    });
    const __returned__ = { PanelGroupKey, directionMap, directionValue, axisMap, axis, items, addItem, getHandlePanelElements, reactiveState, dragState, startDragging, pointerMove, stopDragging, update, groupId, get sizes() {
      return sizes;
    }, set sizes(v) {
      sizes = v;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.as), {
    "data-panel-group-id": $setup.groupId,
    "data-panel-direction": $props.direction
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["data-panel-group-id", "data-panel-direction"]);
}
_sfc_main$3.__file = "components/custom/panels/PanelGroup.vue";
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "D:/projects/my-components/components/custom/panels/PanelGroup.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Panel",
  props: {
    as: { type: String, required: false, default: "div" },
    minSize: { type: Number, required: false },
    maxSize: { type: Number, required: false },
    defaultSize: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const { addItem, state, directionValue } = inject(PanelGroupKey);
    const panelRef = ref();
    onMounted(() => {
      panelRef.value.style[directionValue] = __props.defaultSize;
      addItem(panelRef.value);
    });
    const panelId = useId();
    const isActive = computed(
      () => state.itemBeforeId === panelId || state.itemAfterId === panelId
    );
    const __returned__ = { addItem, state, directionValue, panelRef, panelId, isActive };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.as), {
    id: $setup.panelId,
    ref: "panelRef",
    "data-panel-item-id": $setup.panelId,
    "data-panel-item-min-size": $props.minSize,
    "data-panel-item-max-size": $props.maxSize,
    class: normalizeClass(["panel-item relative", $setup.isActive && "panel-item--active"]),
    style: normalizeStyle({
      "--direction-value": $setup.directionValue
    })
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["id", "data-panel-item-id", "data-panel-item-min-size", "data-panel-item-max-size", "class", "style"]);
}
_sfc_main$2.__file = "components/custom/panels/Panel.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-dae98f99"], ["__file", "D:/projects/my-components/components/custom/panels/Panel.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "PanelHandle",
  props: {
    draggingCls: { type: String, required: false, default: "bg-gray-400" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const handleId = useId();
    const handleRef = useTemplateRef("handle");
    const {
      groupId,
      teleportHandle,
      direction,
      state,
      startDragging,
      getHandlePanelElements
    } = inject(PanelGroupKey);
    const targetPanel = ref();
    onMounted(() => {
      if (!handleRef.value) {
        throw new Error(
          `Could not init PanelHandle onMounted in PanelGroup ${groupId}`
        );
      }
      const [itemBefore] = getHandlePanelElements(handleRef.value);
      targetPanel.value = `[data-panel-item-id="${itemBefore.dataset.panelItemId}"]`;
      handleRef.value.setAttribute("aria-controls", itemBefore.id);
      handleRef.value.ariaValueMin = itemBefore.dataset.panelItemMinSize || null;
      handleRef.value.ariaValueMax = itemBefore.dataset.panelItemMaxSize || null;
    });
    function pointerStart(e) {
      startDragging(e, handleRef.value, handleId);
    }
    const isActive = computed(() => handleId === state.activeHandleId);
    const __returned__ = { handleId, handleRef, groupId, teleportHandle, direction, state, startDragging, getHandlePanelElements, targetPanel, pointerStart, isActive };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["data-panel-group-id", "data-panel-handle-id"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, {
    disabled: !$setup.targetPanel || !$setup.teleportHandle,
    to: $setup.targetPanel
  }, [
    createBaseVNode("div", mergeProps(_ctx.$attrs, {
      ref: "handle",
      role: "separator",
      tabindex: "0",
      class: ["touch-action-none z-10 select-none", [
        $setup.teleportHandle && "absolute right-0 top-0",
        $setup.isActive && $props.draggingCls,
        $setup.direction === "horizontal" ? "cursor-col-resize" : "cursor-row-resize"
      ]],
      style: {
        transform: $setup.teleportHandle ? $setup.direction === "horizontal" ? "translateX(50%)" : "translateY(50%)" : ""
      },
      "data-panel-group-id": $setup.groupId,
      "data-panel-handle-id": $setup.handleId,
      onPointerdown: $setup.pointerStart
    }), "   ", 16, _hoisted_1$1)
  ], 8, ["disabled", "to"]);
}
_sfc_main$1.__file = "components/custom/panels/PanelHandle.vue";
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/projects/my-components/components/custom/panels/PanelHandle.vue"]]);
const _sfc_main = {};
const _hoisted_1 = { class: "w-full text-gray-100" };
function _sfc_render(_ctx, _cache) {
  const _component_Panel = __nuxt_component_0;
  const _component_PanelHandle = __nuxt_component_1;
  const _component_PanelGroup = __nuxt_component_2;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Resizable Panels" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Horizontal" }, {
        default: withCtx(() => [
          createVNode(_component_PanelGroup, { class: "flex h-40 text-gray-100" }, {
            default: withCtx(() => [
              createVNode(_component_Panel, {
                "default-size": "20%",
                "min-size": 150,
                "max-size": 300,
                class: "flex flex-grow flex-col items-center justify-center rounded bg-slate-600"
              }, {
                default: withCtx(() => _cache[0] || (_cache[0] = [
                  createBaseVNode(
                    "p",
                    null,
                    "left",
                    -1
                    /* HOISTED */
                  ),
                  createBaseVNode(
                    "p",
                    null,
                    "(min 150, max 300)",
                    -1
                    /* HOISTED */
                  ),
                  createBaseVNode(
                    "p",
                    null,
                    "(default 20%)",
                    -1
                    /* HOISTED */
                  )
                ])),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_PanelHandle, { class: "w-2" }),
              createVNode(_component_Panel, {
                "default-size": "40%",
                "min-size": 150,
                class: "flex flex-grow flex-col items-center justify-center rounded bg-slate-600"
              }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createBaseVNode(
                    "p",
                    null,
                    "middle",
                    -1
                    /* HOISTED */
                  ),
                  createBaseVNode(
                    "p",
                    null,
                    "(min 150)",
                    -1
                    /* HOISTED */
                  ),
                  createBaseVNode(
                    "p",
                    null,
                    "(default 40%)",
                    -1
                    /* HOISTED */
                  )
                ])),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_PanelHandle, { class: "w-2" }),
              createVNode(_component_Panel, {
                "default-size": "40%",
                "min-size": 150,
                "max-size": 300,
                class: "flex flex-grow flex-col items-center justify-center rounded bg-slate-600"
              }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createBaseVNode(
                    "p",
                    null,
                    "right",
                    -1
                    /* HOISTED */
                  ),
                  createBaseVNode(
                    "p",
                    null,
                    "(min 150, max 300)",
                    -1
                    /* HOISTED */
                  ),
                  createBaseVNode(
                    "p",
                    null,
                    "(default 40%)",
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
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Vertical" }, {
        default: withCtx(() => [
          createVNode(_component_PanelGroup, {
            direction: "vertical",
            class: "flex h-60 flex-grow flex-col text-gray-100"
          }, {
            default: withCtx(() => [
              createVNode(_component_Panel, {
                "default-size": "20%",
                "min-size": 50,
                class: "grid flex-grow place-items-center rounded bg-slate-600"
              }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode(" top (min 50) ")
                ])),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_PanelHandle, { class: "h-2 flex-shrink-0" }),
              createVNode(_component_Panel, {
                "default-size": "40%",
                "min-size": 50,
                class: "grid flex-grow place-items-center rounded bg-slate-600"
              }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode(" middle (min 50) ")
                ])),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_PanelHandle, { class: "h-2 flex-shrink-0" }),
              createVNode(_component_Panel, {
                "default-size": "40%",
                "min-size": 50,
                class: "grid flex-grow place-items-center rounded bg-slate-600"
              }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode(" bottom (min 50) ")
                ])),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Nested layout" }, {
        default: withCtx(() => [
          createVNode(_component_PanelGroup, { class: "mt-4 flex h-40 text-gray-100" }, {
            default: withCtx(() => [
              createVNode(_component_Panel, {
                "min-size": 150,
                class: "grid flex-grow place-items-center rounded bg-slate-600"
              }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode(" left ")
                ])),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_PanelHandle, { class: "w-2" }),
              createVNode(_component_Panel, {
                "min-size": 150,
                class: "flex-grow"
              }, {
                default: withCtx(() => [
                  createVNode(_component_PanelGroup, {
                    direction: "vertical",
                    class: "flex h-full flex-col"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Panel, {
                        "min-size": 50,
                        class: "grid flex-grow place-items-center rounded bg-slate-600"
                      }, {
                        default: withCtx(() => _cache[7] || (_cache[7] = [
                          createTextVNode(" top ")
                        ])),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(_component_PanelHandle, { class: "h-2 flex-shrink-0" }),
                      createVNode(_component_Panel, {
                        "min-size": 50,
                        class: "flex-grow rounded bg-slate-600"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_PanelGroup, {
                            direction: "horizontal",
                            class: "flex h-full"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Panel, {
                                "min-size": 50,
                                class: "grid flex-grow place-items-center rounded bg-slate-600"
                              }, {
                                default: withCtx(() => _cache[8] || (_cache[8] = [
                                  createTextVNode(" left ")
                                ])),
                                _: 1
                                /* STABLE */
                              }),
                              createVNode(_component_PanelHandle, { class: "w-2 bg-slate-700" }),
                              createVNode(_component_Panel, {
                                "min-size": 50,
                                class: "grid flex-grow place-items-center rounded bg-slate-600"
                              }, {
                                default: withCtx(() => _cache[9] || (_cache[9] = [
                                  createTextVNode(" right ")
                                ])),
                                _: 1
                                /* STABLE */
                              })
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_PanelHandle, { class: "w-2" }),
              createVNode(_component_Panel, {
                "min-size": 150,
                class: "grid flex-grow place-items-center rounded bg-slate-600"
              }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode(" right ")
                ])),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Table columns / lazy update" }, {
        default: withCtx(() => [
          createBaseVNode("table", _hoisted_1, [
            _cache[14] || (_cache[14] = createBaseVNode(
              "colgroup",
              null,
              [
                createBaseVNode("col", {
                  span: "3",
                  class: "border border-gray-400"
                })
              ],
              -1
              /* HOISTED */
            )),
            createBaseVNode("thead", null, [
              createVNode(_component_PanelGroup, {
                lazy: "",
                "teleport-handle": "",
                as: "tr"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Panel, {
                    as: "th",
                    "min-size": 150,
                    style: { "width": "200px" }
                  }, {
                    default: withCtx(() => _cache[11] || (_cache[11] = [
                      createTextVNode("Company")
                    ])),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_PanelHandle, { class: "w-2" }),
                  createVNode(_component_Panel, {
                    as: "th",
                    "min-size": 150,
                    style: { "width": "300px" }
                  }, {
                    default: withCtx(() => _cache[12] || (_cache[12] = [
                      createTextVNode("Contact")
                    ])),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_PanelHandle, { class: "w-2" }),
                  createVNode(_component_Panel, {
                    "min-size": 100,
                    as: "th"
                  }, {
                    default: withCtx(() => _cache[13] || (_cache[13] = [
                      createTextVNode("Country")
                    ])),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _cache[15] || (_cache[15] = createBaseVNode(
              "tbody",
              null,
              [
                createBaseVNode("tr", null, [
                  createBaseVNode("td", null, "Alfreds Futterkiste"),
                  createBaseVNode("td", null, "Maria Anders"),
                  createBaseVNode("td", null, "Germany")
                ]),
                createBaseVNode("tr", null, [
                  createBaseVNode("td", null, "Centro comercial Moctezuma"),
                  createBaseVNode("td", null, "Francisco Chang"),
                  createBaseVNode("td", null, "Mexico")
                ])
              ],
              -1
              /* HOISTED */
            ))
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
_sfc_main.__file = "components/custom/panels/Panel.story.vue";
const Panel_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/panels/Panel.story.vue"]]);
export {
  Panel_story as default
};
