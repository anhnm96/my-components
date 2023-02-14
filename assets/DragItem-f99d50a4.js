import { aX as reactive, az as defineComponent, b2 as useSlots, aB as ref, aU as onMounted, b4 as onBeforeUnmount, aC as computed, aV as throttle, aE as nextTick, au as openBlock, as as createBlock, at as withCtx, aS as createCommentVNode, aQ as renderSlot, aG as createElementBlock, aM as normalizeClass, aL as withModifiers, aA as resolveDynamicComponent } from "./vendor-be841bdf.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const DnDState = reactive({
  ref: null,
  inProgress: false,
  data: null,
  group: null,
  success: false,
  dropId: ""
});
const DragListState = reactive({ id: "" });
const DragItem_vue_vue_type_style_index_0_scoped_62ea9b2d_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DragItem",
  props: {
    as: { type: String, required: false, default: "div" },
    draggable: { type: Boolean, required: false, default: true },
    droppable: { type: Boolean, required: false, default: true },
    dataTransfer: { type: Object, required: false },
    dropEffect: { type: String, required: false, default: "move" },
    effectsAllowed: { type: String, required: false, default: "move" },
    hoverClass: { type: String, required: false, default: "drop-hover" },
    handle: { type: String, required: false },
    triggerMove: { type: String, required: false },
    group: { type: String, required: false },
    acceptData: { type: Function, required: false, default: () => {
    } },
    allowClass: { type: String, required: false, default: "drop-allowed" },
    forbiddenClass: { type: String, required: false, default: "drop-forbidden" }
  },
  emits: ["dropped"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const slots = useSlots();
    const el = ref();
    const dragging = ref(false);
    const dragImageEl = ref();
    const hasDragImageSlot = Object.keys(slots).includes("drag-image");
    const width = ref(0);
    const height = ref(0);
    let handleEl;
    const handleLock = ref(false);
    function handleMouseDown() {
      handleLock.value = false;
    }
    function handleMouseUp() {
      handleLock.value = true;
    }
    let triggerEl;
    onMounted(() => {
      const rect = el.value.getBoundingClientRect();
      width.value = rect.width;
      height.value = rect.height;
      if (props.triggerMove) {
        triggerEl = el.value.querySelector(props.triggerMove);
      }
      if (props.handle) {
        handleLock.value = true;
        handleEl = el.value.querySelector(props.handle);
        handleEl == null ? void 0 : handleEl.addEventListener("mousedown", handleMouseDown);
        handleEl == null ? void 0 : handleEl.addEventListener("mouseup", handleMouseUp);
      }
    });
    onBeforeUnmount(() => {
      handleEl == null ? void 0 : handleEl.removeEventListener("mousedown", handleMouseDown);
      handleEl == null ? void 0 : handleEl.removeEventListener("mouseup", handleMouseUp);
    });
    const dataAllowed = computed(() => {
      return props.acceptData(DnDState.data);
    });
    const clazz = computed(() => {
      if (!DnDState.inProgress || !props.droppable)
        return null;
      if (DnDState.group !== props.group)
        return null;
      if (dataAllowed.value === void 0)
        return null;
      return {
        [props.allowClass]: dataAllowed.value,
        [props.forbiddenClass]: !dataAllowed.value
      };
    });
    const documentDragover = throttle((e) => {
      e.preventDefault();
      if (!dragImageEl.value) {
        return;
      }
      dragImageEl.value.style.left = `${e.clientX}px`;
      dragImageEl.value.style.top = `${e.clientY}px`;
      el.value.dispatchEvent(new MouseEvent("customdrag", e));
    }, 20);
    function dragstart(e) {
      var _a;
      dragging.value = true;
      Object.assign(DnDState, {
        ref: el.value,
        inProgress: true,
        data: props.dataTransfer,
        group: props.group,
        success: false
      });
      if (hasDragImageSlot) {
        nextTick(() => {
          dragImageEl.value.style.position = "fixed";
          dragImageEl.value.style.transform = "translate(-50%, -50%)";
          document.addEventListener("dragover", documentDragover);
        });
        const defaultImg = new Image();
        defaultImg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        defaultImg.style.visibility = "hidden";
        (_a = e.dataTransfer) == null ? void 0 : _a.setDragImage(defaultImg, 0, 0);
      }
      if (!e.dataTransfer)
        return;
      e.dataTransfer.effectAllowed = props.effectsAllowed;
      e.dataTransfer.dropEffect = props.dropEffect;
      e.dataTransfer.setData("text", JSON.stringify(props.dataTransfer));
    }
    function dragenter(e) {
      var _a, _b;
      if (triggerEl && !triggerEl.contains(e.target)) {
        return;
      }
      if (!props.droppable || dataAllowed.value === false || DnDState.group !== props.group)
        return;
      (_a = el.value) == null ? void 0 : _a.dispatchEvent(
        new CustomEvent("dragentered", {
          detail: { event: e, ...props.dataTransfer, ref: el.value }
        })
      );
      if (props.droppable)
        (_b = el.value) == null ? void 0 : _b.classList.add(props.hoverClass);
    }
    function dragleave() {
      var _a;
      if (props.droppable) {
        (_a = el.value) == null ? void 0 : _a.classList.remove(props.hoverClass);
      }
    }
    function drop(e) {
      var _a;
      if (!props.droppable || dataAllowed.value === false || DnDState.group !== props.group)
        return;
      Object.assign(DnDState, { success: true });
      el.value.classList.remove(props.hoverClass);
      let dataTransfer = (_a = e.dataTransfer) == null ? void 0 : _a.getData("text");
      if (dataTransfer)
        dataTransfer = JSON.parse(dataTransfer);
      emit("dropped", { event: e, from: dataTransfer, to: props.dataTransfer });
      document.removeEventListener("dragover", documentDragover);
    }
    function dragend() {
      if (handleEl) {
        handleLock.value = true;
      }
      dragging.value = false;
      Object.assign(DnDState, {
        inProgress: false,
        data: null,
        group: null,
        ref: null,
        dropdId: ""
      });
      if (hasDragImageSlot)
        document.removeEventListener("dragover", documentDragover);
    }
    const __returned__ = { props, emit, slots, el, dragging, dragImageEl, hasDragImageSlot, width, height, get handleEl() {
      return handleEl;
    }, set handleEl(v) {
      handleEl = v;
    }, handleLock, handleMouseDown, handleMouseUp, get triggerEl() {
      return triggerEl;
    }, set triggerEl(v) {
      triggerEl = v;
    }, dataAllowed, clazz, documentDragover, dragstart, dragenter, dragleave, drop, dragend };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  ref: "dragImageEl",
  class: "drag-image"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.as), {
    ref: "el",
    class: normalizeClass(["drag-container", $setup.clazz]),
    draggable: $props.draggable && !$setup.handleLock,
    onDragstart: withModifiers($setup.dragstart, ["self"]),
    onDragenter: withModifiers($setup.dragenter, ["prevent"]),
    onDragover: _cache[0] || (_cache[0] = withModifiers(() => {
    }, ["prevent"])),
    onDragleave: $setup.dragleave,
    onDrop: $setup.drop,
    onDragend: $setup.dragend
  }, {
    default: withCtx(() => [
      createCommentVNode("\n      @slot default\n      @binding dragging item is being dragged status\n     "),
      renderSlot(_ctx.$slots, "default", { dragging: $setup.dragging }, void 0, true),
      $setup.dragging && $setup.hasDragImageSlot ? (openBlock(), createElementBlock(
        "div",
        _hoisted_1,
        [
          createCommentVNode("\n        @slot drag-image\n        @binding data dataTransfer passed as props\n        @binding width width of the element\n        @binding height height of the element\n       "),
          renderSlot(_ctx.$slots, "drag-image", {
            data: $props.dataTransfer,
            width: $setup.width,
            height: $setup.height
          }, void 0, true)
        ],
        512
        /* NEED_PATCH */
      )) : createCommentVNode("v-if", true)
    ]),
    _: 3
    /* FORWARDED */
  }, 40, ["class", "draggable", "onDragstart", "onDragenter"]);
}
_sfc_main.__file = "components/custom/drag/DragItem.vue";
const VDragDrop = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-62ea9b2d"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/drag/DragItem.vue"]]);
export {
  DnDState as D,
  VDragDrop as V,
  DragListState as a
};
