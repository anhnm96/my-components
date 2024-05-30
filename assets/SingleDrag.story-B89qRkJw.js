import { as as _export_sfc, aE as resolveComponent, aw as openBlock, aH as createElementBlock, aG as createBaseVNode, aJ as Fragment, aI as renderList, ax as createBlock, ay as withCtx, aB as normalizeClass, aL as toDisplayString, aP as withDirectives, bd as vShow, aF as createVNode, at as ref, b7 as reactive, aD as defineComponent } from "./vendor-BdBYoA5y.js";
import { V as VDragDrop } from "./DragItem-DEyrV5ke.js";
import "./paths-0PYN6WaE.js";
const _sfc_main$3 = {
  components: { VDragDrop },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7],
      droplist: [],
      entering: false
    };
  },
  methods: {
    dragstart(e) {
      const dataTransfer = JSON.parse(e.dataTransfer.getData("text"));
      console.log("dragstart", dataTransfer);
    },
    dragend() {
      this.entering = false;
    },
    dragenter() {
      this.entering = true;
    },
    dragleave() {
      this.entering = false;
    },
    drop({ from }) {
      this.droplist.push(from.value);
    }
  }
};
const _hoisted_1$2 = { class: "flex" };
const _hoisted_2$2 = {
  class: "drag",
  style: { "border-radius": "50%" }
};
const _hoisted_3$2 = { style: { "pointer-events": "none" } };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VDragDrop = resolveComponent("VDragDrop");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1$2, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.items, (i) => {
          return openBlock(), createBlock(_component_VDragDrop, {
            key: i,
            group: "DragImgOnDrop",
            tag: "span",
            droppable: false,
            "data-transfer": { value: i },
            onDragstart: $options.dragstart,
            onDragend: $options.dragend
          }, {
            default: withCtx(({ dragging }) => [
              createBaseVNode(
                "span",
                {
                  class: normalizeClass(["drag", { ghost: dragging }])
                },
                toDisplayString(i),
                3
                /* TEXT, CLASS */
              )
            ]),
            "drag-image": withCtx(({ data }) => [
              withDirectives(createBaseVNode(
                "span",
                { class: "drag" },
                toDisplayString(data.value),
                513
                /* TEXT, NEED_PATCH */
              ), [
                [vShow, !$data.entering]
              ]),
              withDirectives(createBaseVNode(
                "span",
                _hoisted_2$2,
                "DROP",
                512
                /* NEED_PATCH */
              ), [
                [vShow, $data.entering]
              ])
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["data-transfer", "onDragstart", "onDragend"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    createVNode(_component_VDragDrop, {
      draggable: false,
      group: "DragImgOnDrop",
      "hover-class": "hovering",
      class: "copy",
      onDragenter: $options.dragenter,
      onDragleave: $options.dragleave,
      onDropped: $options.drop
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_3$2, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.droplist, (i) => {
              return openBlock(), createElementBlock(
                "span",
                { key: i },
                toDisplayString(i),
                1
                /* TEXT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onDragenter", "onDragleave", "onDropped"])
  ]);
}
_sfc_main$3.__file = "components/custom/drag/stories/DragImgOnDrop.vue";
const DragImgOnDrop = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-4525dd58"], ["__file", "D:/projects/my-components/components/custom/drag/stories/DragImgOnDrop.vue"]]);
const document = "/my-components/images/drag/document.png";
const smiley01 = "/my-components/images/drag/smiley01.png";
const smiley02 = "/my-components/images/drag/smiley02.png";
const smiley03 = "/my-components/images/drag/smiley03.png";
const smiley04 = "/my-components/images/drag/smiley04.png";
const smiley05 = "/my-components/images/drag/smiley05.png";
const smiley06 = "/my-components/images/drag/smiley06.png";
const _sfc_main$2 = {
  components: { VDragDrop },
  setup() {
    const doc = ref("doc1");
    const startPosition = reactive({});
    const totalDistance = reactive({ value: 0, lock: false });
    const idx = ref(0);
    const hasTrash = ref(false);
    const trashRef = ref(null);
    function drag(e) {
      if (startPosition.x === void 0)
        Object.assign(startPosition, { x: e.clientX, y: e.clientY });
      const { top, left, height, width } = trashRef.value.$el.getBoundingClientRect();
      const trashCenter = { x: left + width / 2, y: top + height / 2 };
      const remainingDistance = Math.sqrt(
        (trashCenter.x - e.clientX) ** 2 + (trashCenter.y - e.clientY) ** 2
      );
      if (!totalDistance.lock) {
        totalDistance.value = Math.sqrt(
          (startPosition.x - trashCenter.x) ** 2 + (startPosition.y - trashCenter.y) ** 2
        );
        totalDistance.lock = true;
      }
      const distancePercent = Math.min(
        1,
        remainingDistance / totalDistance.value
      );
      if (distancePercent < 0.1)
        idx.value = 5;
      else if (distancePercent >= 0.1 && distancePercent < 0.3)
        idx.value = 4;
      else if (distancePercent >= 0.3 && distancePercent < 0.5)
        idx.value = 3;
      else if (distancePercent >= 0.5 && distancePercent < 0.7)
        idx.value = 2;
      else if (distancePercent >= 0.7 && distancePercent < 0.9)
        idx.value = 1;
      else if (distancePercent >= 0.9)
        idx.value = 0;
    }
    function dragend() {
      startPosition.x = void 0;
      totalDistance.lock = false;
    }
    function trashDrop() {
      hasTrash.value = true;
    }
    return {
      idx,
      doc,
      hasTrash,
      drag,
      dragend,
      trashDrop,
      trashRef,
      document,
      smiley01,
      smiley02,
      smiley03,
      smiley04,
      smiley05,
      smiley06
    };
  }
};
const _hoisted_1$1 = ["src"];
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = ["src"];
const _hoisted_4 = ["src"];
const _hoisted_5 = ["src"];
const _hoisted_6 = ["src"];
const _hoisted_7 = ["src"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VDragDrop = resolveComponent("VDragDrop");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_VDragDrop, {
      ref: "trashRef",
      "hover-class": "hovering",
      class: normalizeClass([{ full: $setup.hasTrash }, "trash"]),
      onDropped: $setup.trashDrop
    }, null, 8, ["class", "onDropped"]),
    createVNode(_component_VDragDrop, {
      droppable: false,
      "data-transfer": { value: $setup.doc },
      class: "inline-block",
      onCustomdrag: $setup.drag,
      onDragend: $setup.dragend
    }, {
      "drag-image": withCtx(() => [
        withDirectives(createBaseVNode("img", {
          class: "drag-image",
          src: $setup.smiley01
        }, null, 8, _hoisted_2$1), [
          [vShow, $setup.idx === 0]
        ]),
        withDirectives(createBaseVNode("img", {
          class: "drag-image",
          src: $setup.smiley02
        }, null, 8, _hoisted_3$1), [
          [vShow, $setup.idx === 1]
        ]),
        withDirectives(createBaseVNode("img", {
          class: "drag-image",
          src: $setup.smiley03
        }, null, 8, _hoisted_4), [
          [vShow, $setup.idx === 2]
        ]),
        withDirectives(createBaseVNode("img", {
          class: "drag-image",
          src: $setup.smiley04
        }, null, 8, _hoisted_5), [
          [vShow, $setup.idx === 3]
        ]),
        withDirectives(createBaseVNode("img", {
          class: "drag-image",
          src: $setup.smiley05
        }, null, 8, _hoisted_6), [
          [vShow, $setup.idx === 4]
        ]),
        withDirectives(createBaseVNode("img", {
          class: "drag-image",
          src: $setup.smiley06
        }, null, 8, _hoisted_7), [
          [vShow, $setup.idx === 5]
        ])
      ]),
      default: withCtx(() => [
        createBaseVNode("img", {
          draggable: false,
          class: "document",
          src: $setup.document
        }, null, 8, _hoisted_1$1)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["data-transfer", "onCustomdrag", "onDragend"])
  ]);
}
_sfc_main$2.__file = "components/custom/drag/stories/DynamicDragImage.vue";
const DynamicDragImage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-71e3d058"], ["__file", "D:/projects/my-components/components/custom/drag/stories/DynamicDragImage.vue"]]);
const _sfc_main$1 = {
  components: { VDragDrop },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7],
      droplist: [],
      entering: false
    };
  },
  methods: {
    dragstart(e) {
      const dataTransfer = JSON.parse(e.dataTransfer.getData("text"));
      console.log("dragstart", dataTransfer);
    },
    dragend() {
      this.entering = false;
    },
    dragenter() {
      this.entering = true;
    },
    dragleave() {
      this.entering = false;
    },
    drop3({ from }) {
      this.droplist.push(from.value);
    }
  }
};
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = {
  class: "drag",
  style: { "border-radius": "50%" }
};
const _hoisted_3 = { style: { "pointer-events": "none" } };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VDragDrop = resolveComponent("VDragDrop");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.items, (i) => {
          return openBlock(), createBlock(_component_VDragDrop, {
            key: i,
            group: "RestrictDropable",
            tag: "span",
            droppable: false,
            "data-transfer": { value: i },
            onDragstart: $options.dragstart,
            onDragend: $options.dragend
          }, {
            default: withCtx(({ dragging }) => [
              createBaseVNode(
                "span",
                {
                  class: normalizeClass(["drag", { ghost: dragging }])
                },
                toDisplayString(i),
                3
                /* TEXT, CLASS */
              )
            ]),
            "drag-image": withCtx(({ data }) => [
              withDirectives(createBaseVNode(
                "span",
                { class: "drag" },
                toDisplayString(data.value),
                513
                /* TEXT, NEED_PATCH */
              ), [
                [vShow, !$data.entering]
              ]),
              withDirectives(createBaseVNode(
                "span",
                _hoisted_2,
                "DROP",
                512
                /* NEED_PATCH */
              ), [
                [vShow, $data.entering]
              ])
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["data-transfer", "onDragstart", "onDragend"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    createVNode(_component_VDragDrop, {
      draggable: false,
      group: "RestrictDropable",
      "hover-class": "hovering",
      class: "copy",
      "accept-data": (val) => val.value % 2 === 0,
      onDragenter: $options.dragenter,
      onDragleave: $options.dragleave,
      onDropped: $options.drop3
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.droplist, (i) => {
              return openBlock(), createElementBlock(
                "span",
                { key: i },
                toDisplayString(i),
                1
                /* TEXT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["accept-data", "onDragenter", "onDragleave", "onDropped"])
  ]);
}
_sfc_main$1.__file = "components/custom/drag/stories/RestrictDropable.vue";
const RestrictDropable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-ce248f13"], ["__file", "D:/projects/my-components/components/custom/drag/stories/RestrictDropable.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SingleDrag.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { DragImgOnDrop, DynamicDragImage, RestrictDropable };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Drag - single" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Drag Image on Drop" }, {
        default: withCtx(() => [
          createVNode($setup["DragImgOnDrop"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Dynamic Drag Image" }, {
        default: withCtx(() => [
          createVNode($setup["DynamicDragImage"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Restrict Drop Value" }, {
        default: withCtx(() => [
          createVNode($setup["RestrictDropable"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/drag/stories/SingleDrag.story.vue";
const SingleDrag_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/drag/stories/SingleDrag.story.vue"]]);
export {
  SingleDrag_story as default
};
