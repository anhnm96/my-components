import { az as defineComponent, b2 as useSlots, aB as ref, aX as reactive, aC as computed, aV as throttle, au as openBlock, as as createBlock, at as withCtx, ay as createBaseVNode, aS as createCommentVNode, aG as createElementBlock, aO as Fragment, aP as renderList, a_ as createSlots, aQ as renderSlot, aJ as mergeProps, aL as withModifiers, b3 as TransitionGroup } from "./vendor-be841bdf.js";
import { D as DnDState, V as VDragDrop, a as DragListState } from "./DragItem-f99d50a4.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const DragList_vue_vue_type_style_index_0_scoped_b47a31d9_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DragList",
  props: {
    list: {
      type: Array,
      required: true
    },
    /** func to get key of drag elements */
    idAdapter: {
      type: Function,
      default: (item) => item
    },
    /** HTML tag for draglist */
    tag: {
      type: String,
      default: "div"
    },
    /** HTML tag for dragitem */
    childTag: {
      type: String,
      default: "div"
    },
    /** DragItem prop */
    handle: String,
    /** DragItem prop */
    triggerMove: String,
    group: String,
    acceptData: {
      type: Function,
      default: () => {
      }
    },
    /** if mode == 'cut', remove orginal element */
    mode: {
      type: String,
      default: "copy"
    }
  },
  emits: ["update:list"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const slots = useSlots();
    const listEl = ref();
    const listBeingDraggedOver = ref(false);
    const draggingItem = reactive({
      inProgress: false,
      originalIndex: -1,
      currentIndex: -1,
      data: null
    });
    const placeholderIndex = ref(props.list.length);
    const enteringRef = ref();
    const hasPlaceholderMoveSlot = Object.keys(slots).includes("placeholder-move");
    const hasPlaceholderAddSlot = Object.keys(slots).includes("placeholder-add");
    const showPlaceholderMove = computed(() => {
      return hasPlaceholderMoveSlot && draggingItem.inProgress && listBeingDraggedOver.value;
    });
    const showPlaceholderAdd = computed(() => {
      return hasPlaceholderAddSlot && !draggingItem.inProgress && listBeingDraggedOver.value;
    });
    const itemsBeforePlaceholder = computed(() => {
      if (!showPlaceholderMove.value && !showPlaceholderAdd.value)
        return props.list;
      return props.list.slice(0, placeholderIndex.value);
    });
    const itemsAfterPlaceholder = computed(() => {
      if (!showPlaceholderMove.value && !showPlaceholderAdd.value)
        return [];
      return props.list.slice(placeholderIndex.value);
    });
    const id = (Date.now() + Math.random()).toString(36);
    const dragstart = (e) => {
      var _a, _b;
      if (!((_a = e.target) == null ? void 0 : _a.draggable))
        return;
      const payload = JSON.parse(((_b = e.dataTransfer) == null ? void 0 : _b.getData("text")) || "");
      Object.assign(draggingItem, {
        inProgress: true,
        originalIndex: Number(payload.index),
        currentIndex: Number(payload.index),
        data: payload
      });
      DragListState.id = id;
      placeholderIndex.value = Number(payload.index);
      console.log("dragstart", `placeholderIndex: ${payload.index}`, props.list[0]);
    };
    const dummyEl = ref();
    const dragover = throttle((e) => {
      var _a;
      if (props.group !== DnDState.group || !dummyEl.value)
        return;
      const target = e.target;
      const dragItemElTarget = target.nodeType === 1 ? target.closest(".drag-container") : (_a = target.parentElement) == null ? void 0 : _a.closest(".drag-container");
      if (dragItemElTarget && !dragItemElTarget.classList.contains("drag-list--move")) {
        if (enteringRef.value !== dragItemElTarget) {
          const index = dragItemElTarget.dataset.index;
          enteringRef.value = dragItemElTarget;
          console.log(
            "over",
            dragItemElTarget,
            props.list[0],
            placeholderIndex.value,
            index,
            dragItemElTarget.dataset.index
          );
        }
        if (dragItemElTarget.dataset.index === "0") {
          const { width, height, top, left } = dragItemElTarget.getBoundingClientRect();
          const center = { x: width / 2 + left, y: height / 2 + top };
          const distanceToFirstItem = Math.sqrt(
            (center.x - e.clientX) ** 2 + (center.y - e.clientY) ** 2
          );
          const dummyElRect = dummyEl.value.getBoundingClientRect();
          const dummyCenterPosition = {
            x: dummyElRect.width / 2 + dummyElRect.left,
            y: dummyElRect.height / 2 + dummyElRect.top
          };
          const distanceToDummyEl = Math.sqrt(
            (dummyCenterPosition.x - e.clientX) ** 2 + (dummyCenterPosition.y - e.clientY) ** 2
          );
          if (distanceToDummyEl <= distanceToFirstItem) {
            placeholderIndex.value = 0;
            console.log("set 0");
          }
        }
        if (dragItemElTarget.dataset.index === "1" && itemsBeforePlaceholder.value.length === 0) {
          const { width, height, top, left } = dragItemElTarget.getBoundingClientRect();
          const center = { x: width / 2 + left, y: height / 2 + top };
          const distanceToFirstItem = Math.sqrt(
            (center.x - e.clientX) ** 2 + (center.y - e.clientY) ** 2
          );
          const dummyElRect = dummyEl.value.getBoundingClientRect();
          const dummyCenterPosition = {
            x: dummyElRect.width / 2 + dummyElRect.left,
            y: dummyElRect.height / 2 + dummyElRect.top
          };
          const distanceToDummyEl = Math.sqrt(
            (dummyCenterPosition.x - e.clientX) ** 2 + (dummyCenterPosition.y - e.clientY) ** 2
          );
          if (distanceToFirstItem < distanceToDummyEl) {
            placeholderIndex.value = 1;
            console.log("set 1");
          }
        }
      }
    }, 10);
    function dragenter(e) {
      var _a;
      if (props.list.length === 0 && !listBeingDraggedOver.value && !((_a = DnDState.ref) == null ? void 0 : _a.contains(e.target)) && DnDState.group === props.group) {
        placeholderIndex.value = 0;
        listBeingDraggedOver.value = true;
        draggingItem.data = DnDState.data;
        e.stopPropagation();
      }
    }
    const placeholderMoveEl = ref();
    const placeholderAddEl = ref();
    const inTransition = ref(false);
    function setTransitionState(val) {
      inTransition.value = val;
    }
    function dragentered({ detail: payload }) {
      var _a, _b;
      if (payload.ref.classList.contains("drag-list--move")) {
        console.log("intransition", inTransition.value);
        return;
      }
      const closestList = payload.ref.closest(".drag-list");
      if (DnDState.ref.contains(closestList)) {
        console.log("prevent bubbled from nested list");
        return;
      }
      if (!draggingItem.inProgress) {
        draggingItem.data = DnDState.data;
      }
      listBeingDraggedOver.value = true;
      if (showPlaceholderMove.value || showPlaceholderAdd.value) {
        if (!enteringRef.value)
          return;
        if (enteringRef.value === ((_a = placeholderMoveEl.value) == null ? void 0 : _a.$el) || enteringRef.value === ((_b = placeholderAddEl.value) == null ? void 0 : _b.$el)) {
          placeholderIndex.value = payload.index;
          console.log(
            "placeholder",
            placeholderIndex.value,
            payload.index,
            enteringRef.value,
            props.list[0]
          );
        } else {
          console.log(
            "# entering ph:",
            placeholderIndex.value,
            "item index:",
            payload.index,
            props.list[0]
          );
          if (placeholderIndex.value > payload.index) {
            placeholderIndex.value = payload.index + 1;
          } else {
            placeholderIndex.value = payload.index;
          }
          console.log("after enter. ph:", placeholderIndex.value);
        }
        enteringRef.value = payload.ref;
        payload.event.stopPropagation();
        return;
      }
      if (!hasPlaceholderMoveSlot && draggingItem.inProgress && draggingItem.currentIndex !== payload.index) {
        console.log("move immediate", draggingItem.currentIndex, payload.index);
        array_move(props.list, draggingItem.currentIndex, payload.index);
        draggingItem.currentIndex = payload.index;
        Object.assign(DnDState, { dropId: id });
      }
      if (!hasPlaceholderAddSlot && !draggingItem.inProgress) {
        console.warn("DragList should be provided placeholder-add slot");
      }
      payload.event.stopPropagation();
    }
    function dragend(e) {
      console.log(
        "dragend",
        e,
        props.list[0],
        DnDState.success,
        draggingItem.inProgress,
        DnDState.success && props.mode === "cut" && draggingItem.inProgress
      );
      if (draggingItem.inProgress && DnDState.success && props.mode === "cut" && DnDState.dropId !== id) {
        const clone = props.list;
        clone.splice(draggingItem.originalIndex, 1);
        emit("update:list", clone);
      }
      draggingItem.inProgress = false;
      draggingItem.originalIndex = -1;
      listBeingDraggedOver.value = false;
      enteringRef.value = null;
      placeholderIndex.value = -1;
    }
    const dataAllowed = computed(() => {
      return props.acceptData(DnDState.data);
    });
    function drop(e) {
      var _a;
      console.log(
        "drop not allowed",
        dataAllowed.value === false || DnDState.group !== props.group,
        e
      );
      if (dataAllowed.value === false || DnDState.group !== props.group)
        return;
      console.log(
        props.list[0],
        showPlaceholderMove.value,
        showPlaceholderAdd.value,
        !showPlaceholderMove.value && !showPlaceholderAdd.value
      );
      if (!showPlaceholderMove.value && !showPlaceholderAdd.value) {
        console.log("drop fail", props.list[0]);
        DnDState.success = false;
      } else {
        DnDState.success = true;
      }
      if (showPlaceholderAdd.value) {
        console.log("drop add", placeholderIndex.value, props.list[0]);
        const dataTransfer = JSON.parse(((_a = e.dataTransfer) == null ? void 0 : _a.getData("text")) || "");
        const clone = props.list;
        clone.splice(placeholderIndex.value, 0, dataTransfer.value);
        emit("update:list", clone);
        listBeingDraggedOver.value = false;
        enteringRef.value = null;
        Object.assign(DnDState, { dropId: id });
        e.stopPropagation();
      }
      if (showPlaceholderMove.value) {
        console.log(
          "drop lazy from",
          e,
          draggingItem.currentIndex,
          `to ${placeholderIndex.value}`,
          props.list[0]
        );
        if (placeholderIndex.value < draggingItem.currentIndex)
          array_move(props.list, draggingItem.currentIndex, placeholderIndex.value);
        if (placeholderIndex.value > draggingItem.currentIndex)
          array_move(
            props.list,
            draggingItem.currentIndex,
            placeholderIndex.value - 1
          );
        draggingItem.inProgress = false;
        Object.assign(DnDState, { dropId: id });
        e.stopPropagation();
      }
    }
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    function dragleave(e) {
      var _a, _b, _c;
      if (isSafari) {
        const mouseEl = document.elementFromPoint(e.clientX, e.clientY);
        const closestList2 = mouseEl && mouseEl.nodeType === 1 ? mouseEl.closest(".drag-list") : (_a = mouseEl == null ? void 0 : mouseEl.parentElement) == null ? void 0 : _a.closest(".drag-list");
        if (listBeingDraggedOver.value && (!listEl.value.$el.contains(mouseEl) || // leave to outside
        closestList2 && // leave to other el's nested list
        !DnDState.ref.contains(mouseEl) && // prevent leave to inside dragging el
        listEl.value.$el !== closestList2 && closestList2.id !== DragListState.id && // there are chances dragleave el from nested one to parent relatedTarget was original list itself
        closestList2.dataset.group === props.group)) {
          handler();
        }
        return;
      }
      const relatedTarget = e.relatedTarget;
      if (!relatedTarget)
        return;
      const closestList = relatedTarget && relatedTarget.nodeType === 1 ? relatedTarget.closest(".drag-list") : (_b = relatedTarget.parentElement) == null ? void 0 : _b.closest(".drag-list");
      if (listBeingDraggedOver.value && (!listEl.value.$el.contains(relatedTarget) || // leave to outside
      closestList && // leave to other el's nested list
      !DnDState.ref.contains(relatedTarget) && // prevent leave to inside dragging el
      listEl.value.$el !== closestList && closestList.id !== DragListState.id && // there are chances dragleave el from nested one to parent relatedTarget was original list itself
      closestList.dataset.group === props.group)) {
        console.log(
          "LEFT",
          props.list[0],
          (_c = listEl.value) == null ? void 0 : _c.$el,
          e.target,
          e.relatedTarget,
          DragListState.id
        );
        handler();
        e.stopPropagation();
      }
      function handler() {
        if (!inTransition.value && draggingItem.originalIndex > -1) {
          array_move(
            props.list,
            draggingItem.currentIndex,
            draggingItem.originalIndex
          );
          draggingItem.currentIndex = draggingItem.originalIndex;
        }
        listBeingDraggedOver.value = false;
        enteringRef.value = null;
        console.log("leave", e, showPlaceholderMove.value, props.list[0]);
      }
    }
    function array_move(arr, index1, index2) {
      if (index1 >= arr.length || index2 >= arr.length)
        return;
      const temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
      return arr;
    }
    const __returned__ = { props, emit, slots, listEl, listBeingDraggedOver, draggingItem, placeholderIndex, enteringRef, hasPlaceholderMoveSlot, hasPlaceholderAddSlot, showPlaceholderMove, showPlaceholderAdd, itemsBeforePlaceholder, itemsAfterPlaceholder, id, dragstart, dummyEl, dragover, dragenter, placeholderMoveEl, placeholderAddEl, inTransition, setTransitionState, dragentered, dragend, dataAllowed, drop, isSafari, dragleave, array_move, DragItem: VDragDrop };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: "dummy-el",
  ref: "dummyEl"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(TransitionGroup, {
    id: $setup.id,
    ref: "listEl",
    class: "drag-list",
    "move-class": "drag-list--move",
    tag: $props.tag,
    "data-group": $props.group,
    onDragleave: $setup.dragleave,
    onDragend: $setup.dragend,
    onDrop: $setup.drop,
    onDragover: $setup.dragover,
    onDragstart: _cache[0] || (_cache[0] = withModifiers(() => {
    }, ["stop"])),
    onDragenter: $setup.dragenter,
    onAnimationstart: _cache[1] || (_cache[1] = ($event) => $setup.setTransitionState(true)),
    onAnimationend: _cache[2] || (_cache[2] = ($event) => $setup.setTransitionState(false)),
    onTransitionstart: _cache[3] || (_cache[3] = ($event) => $setup.setTransitionState(true)),
    onTransitionend: _cache[4] || (_cache[4] = ($event) => $setup.setTransitionState(false))
  }, {
    default: withCtx(() => [
      createBaseVNode(
        "div",
        _hoisted_1,
        null,
        512
        /* NEED_PATCH */
      ),
      createCommentVNode(" We still add @dragstart when show placeholder because in production\n      mode DragItem in placeholder may be reused after a success drop.\n      So @dragstart may not be fired if we perform drag drop again. "),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.itemsBeforePlaceholder, (item, index) => {
          return openBlock(), createBlock($setup["DragItem"], {
            key: $props.idAdapter(item),
            "data-transfer": { index, value: item },
            "data-index": index,
            "data-group": $props.group,
            group: $props.group,
            "accept-data": $props.acceptData,
            "trigger-move": $props.triggerMove,
            handle: $props.handle,
            as: $props.childTag,
            onDragstart: $setup.dragstart,
            onDragentered: $setup.dragentered
          }, createSlots({
            _: 2
            /* DYNAMIC */
          }, [
            renderList(Object.keys(_ctx.$slots), (name) => {
              return {
                name,
                fn: withCtx((scope) => [
                  renderSlot(_ctx.$slots, name, mergeProps(scope, {
                    item,
                    index
                  }), void 0, true)
                ])
              };
            })
          ]), 1032, ["data-transfer", "data-index", "data-group", "group", "accept-data", "trigger-move", "handle", "as"]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      createCommentVNode(" @slot use for swapping inside list "),
      $setup.showPlaceholderMove ? (openBlock(), createBlock($setup["DragItem"], {
        ref: "placeholderMoveEl",
        key: "drag-item--placeholder--move",
        as: $props.childTag,
        class: "placeholder-move"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "placeholder-move", {
            data: $setup.draggingItem.data
          }, void 0, true)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["as"])) : createCommentVNode("v-if", true),
      createCommentVNode(" @slot use for swapping outside list "),
      $setup.showPlaceholderAdd ? (openBlock(), createBlock($setup["DragItem"], {
        ref: "placeholderAddEl",
        key: "drag-item--placeholder--add",
        as: $props.childTag,
        class: "placeholder-add"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "placeholder-add", {
            data: $setup.draggingItem.data
          }, void 0, true)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["as"])) : createCommentVNode("v-if", true),
      createCommentVNode(" index + 1 for placeholder "),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.itemsAfterPlaceholder, (item, index) => {
          return openBlock(), createBlock($setup["DragItem"], {
            key: $props.idAdapter(item),
            "data-transfer": {
              index: index + 1 + $setup.itemsBeforePlaceholder.length,
              value: item
            },
            "data-index": index + 1 + $setup.itemsBeforePlaceholder.length,
            "data-group": $props.group,
            group: $props.group,
            "accept-data": $props.acceptData,
            "trigger-move": $props.triggerMove,
            handle: $props.handle,
            as: $props.childTag,
            onDragstart: $setup.dragstart,
            onDragentered: $setup.dragentered
          }, createSlots({
            _: 2
            /* DYNAMIC */
          }, [
            renderList(Object.keys(_ctx.$slots), (name) => {
              return {
                name,
                fn: withCtx((scope) => [
                  renderSlot(_ctx.$slots, name, mergeProps(scope, {
                    item,
                    index: index + 1 + $setup.itemsBeforePlaceholder.length
                  }), void 0, true)
                ])
              };
            })
          ]), 1032, ["data-transfer", "data-index", "data-group", "group", "accept-data", "trigger-move", "handle", "as"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["id", "tag", "data-group", "onDragover"]);
}
_sfc_main.__file = "components/custom/drag/DragList.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b47a31d9"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/drag/DragList.vue"]]);
export {
  __nuxt_component_0 as _
};
