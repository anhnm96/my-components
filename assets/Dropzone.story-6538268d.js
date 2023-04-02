import { av as openBlock, aB as createElementBlock, aD as renderSlot, ax as createBaseVNode, aQ as withDirectives, bc as vShow, aH as normalizeClass, aT as withModifiers, ar as defineComponent, aC as ref, as as resolveComponent, at as createBlock, au as withCtx, aw as createVNode, aO as renderList, aN as Fragment, aE as toDisplayString, az as pushScopeId, aA as popScopeId } from "./vendor-c9bd13d9.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const Dropzone_vue_vue_type_style_index_0_scoped_da88257b_lang = "";
const _sfc_main$1 = {
  props: {
    files: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: "*"
    },
    maxFiles: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      inputKey: Date.now().toString(36),
      dragging: false
    };
  },
  watch: {
    "files.length": {
      handler(newVal, oldVal) {
        if (newVal < oldVal)
          this.resetInput();
      }
    }
  },
  beforeUnmount() {
    for (const file of this.files) {
      URL.revokeObjectURL(file.url);
    }
  },
  methods: {
    onChange(files) {
      if (this.accept !== "*") {
        const filesAccept = [];
        for (const file of files) {
          if (file.type.match(this.accept)) {
            filesAccept.push(file);
          }
        }
        if (filesAccept.length) {
          this.receiveFiles(filesAccept);
        }
      } else {
        this.receiveFiles(files);
      }
    },
    onDrop(e) {
      this.onChange(e.dataTransfer.files);
      this.dragging = false;
    },
    receiveFiles(files) {
      console.log(files);
      const res = [...this.files];
      for (const file of files) {
        const url = URL.createObjectURL(file);
        res.push({ url, type: file.type, name: file.name });
      }
      this.$emit("update:files", res);
    },
    resetInput() {
      this.inputKey = Date.now().toString(36);
    }
  }
};
const _hoisted_1$1 = ["for"];
const _hoisted_2$1 = { class: "mx-auto" };
const _hoisted_3$1 = ["id", "multiple", "accept"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["container", { "is-dragover": $data.dragging }])
    },
    [
      renderSlot(_ctx.$slots, "input", {
        on: {
          key: $data.inputKey,
          type: "file",
          onChange: (e) => $options.onChange(e.target.files),
          onDragenter: () => $data.dragging = true,
          onDragover: (e) => e.preventDefault(),
          onDragleave: () => $data.dragging = false,
          onDrop: (e) => {
            e.preventDefault();
            $options.onChange(e.dataTransfer.files);
            $data.dragging = false;
          }
        }
      }, () => [
        createBaseVNode("label", {
          for: `dropzone-${$data.inputKey}`,
          class: "image-message"
        }, [
          withDirectives(createBaseVNode(
            "span",
            _hoisted_2$1,
            "Drop files",
            512
            /* NEED_PATCH */
          ), [
            [vShow, $props.files.length === 0]
          ])
        ], 8, _hoisted_1$1),
        (openBlock(), createElementBlock("input", {
          id: `dropzone-${$data.inputKey}`,
          key: $data.inputKey,
          ref: "input",
          type: "file",
          class: normalizeClass(["image-input", { "is-dragover": $data.dragging }]),
          multiple: $props.multiple,
          accept: $props.accept,
          onChange: _cache[0] || (_cache[0] = ($event) => $options.onChange($event.target.files)),
          onDragenter: _cache[1] || (_cache[1] = ($event) => $data.dragging = true),
          onDragover: _cache[2] || (_cache[2] = withModifiers(() => {
          }, ["prevent"])),
          onDragleave: _cache[3] || (_cache[3] = ($event) => $data.dragging = false),
          onDrop: _cache[4] || (_cache[4] = withModifiers((...args) => $options.onDrop && $options.onDrop(...args), ["prevent"]))
        }, null, 42, _hoisted_3$1))
      ], true),
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "components/custom/dropzone/Dropzone.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-da88257b"], ["__file", "D:/projects/my-components/components/custom/dropzone/Dropzone.vue"]]);
const Dropzone_story_vue_vue_type_style_index_0_scoped_124a7b1c_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dropzone.story",
  setup(__props, { expose }) {
    expose();
    const files = ref([]);
    function remove(index) {
      files.value.splice(index, 1);
    }
    const __returned__ = { files, remove };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-124a7b1c"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "wrapper" };
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = {
  key: 1,
  class: "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "path",
  {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  null,
  -1
  /* HOISTED */
));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Dropzone = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Dropzone" }, {
    default: withCtx(() => [
      createVNode(_component_Dropzone, {
        files: $setup.files,
        "onUpdate:files": _cache[0] || (_cache[0] = ($event) => $setup.files = $event),
        class: "bg-white"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.files, (file, index) => {
                return openBlock(), createElementBlock("div", {
                  key: file.name,
                  class: "content"
                }, [
                  file.type.includes("image") ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    class: "mx-1 h-20",
                    src: file.url,
                    alt: file.name
                  }, null, 8, _hoisted_2)) : (openBlock(), createElementBlock("svg", _hoisted_3, _hoisted_5)),
                  createBaseVNode(
                    "p",
                    null,
                    toDisplayString(file.name),
                    1
                    /* TEXT */
                  ),
                  createBaseVNode("button", {
                    class: "relative bg-red-400",
                    onClick: withModifiers(($event) => $setup.remove(index), ["stop"])
                  }, " Remove ", 8, _hoisted_6)
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["files"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/dropzone/Dropzone.story.vue";
const Dropzone_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-124a7b1c"], ["__file", "D:/projects/my-components/components/custom/dropzone/Dropzone.story.vue"]]);
export {
  Dropzone_story as default
};
