import { aD as defineComponent, av as computed, bg as useColorMode, as as _export_sfc, aw as openBlock, ax as createBlock, aB as normalizeClass, aN as __nuxt_component_0$1, at as ref, aH as createElementBlock, aA as normalizeStyle, aF as createVNode, aG as createBaseVNode, aL as toDisplayString, aK as createCommentVNode, aO as withDirectives, bf as vShow, aJ as Fragment, aI as renderList, bh as shallowRef, aE as resolveComponent, ay as withCtx } from "./vendor-CMJc4gfg.js";
const FILE_ICONS = [
  {
    match: /\.vue$/,
    icon: { name: "catppuccin:vue" }
  },
  {
    match: /nuxt\.config\.\w+$/,
    icon: { name: "catppuccin:nuxt" }
  },
  {
    match: /package\.json$/,
    icon: { name: "catppuccin:npm" }
  },
  {
    match: /\.[mc]?tsx?$/,
    icon: { name: "catppuccin:typescript" }
  },
  {
    match: /\.[mc]?jsx?$/,
    icon: { name: "catppuccin:javascript" }
  }
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FileIcon",
  props: {
    path: { type: String, required: true },
    isDirectory: { type: Boolean, required: false },
    isDirectoryOpen: { type: Boolean, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const icon = computed(() => {
      if (props.isDirectory) {
        return props.isDirectoryOpen ? { name: "catppuccin:folder-open" } : { name: "catppuccin:folder" };
      }
      for (const { match, icon: icon2 } of FILE_ICONS) {
        if (match.test(props.path)) return icon2;
      }
      return { name: "catppuccin:file" };
    });
    const colorMode = useColorMode();
    const cls = computed(() => {
      return colorMode.value === "light" ? "brightness-[.6] hue-rotate-180 invert saturate-200" : "";
    });
    const __returned__ = { FILE_ICONS, props, icon, colorMode, cls };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  return openBlock(), createBlock(_component_Icon, {
    class: normalizeClass(["scale-110", [$setup.cls]]),
    name: $setup.icon.name
  }, null, 8, ["class", "name"]);
}
_sfc_main$2.__file = "components/custom/filetree/FileIcon.vue";
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "D:/projects/my-components/components/custom/filetree/FileIcon.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FileTree",
  props: {
    selected: { type: Object, required: true },
    node: { type: Object, required: true },
    depth: { type: Number, required: false, default: 0 },
    selectDir: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false }
  },
  emits: ["update:selected"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const isFileSelected = computed(
      () => props.node.filepath === props.selected.filepath
    );
    const isDirectory = computed(() => !!props.node.nodes);
    const isDirectoryOpen = ref(true);
    const isDisabled = computed(() => props.disabled || props.node.disabled);
    function handleClick() {
      if (isDisabled.value) return;
      if (isDirectory.value) {
        isDirectoryOpen.value = !isDirectoryOpen.value;
        if (props.selectDir) emit("update:selected", props.node);
      } else if (props.node) emit("update:selected", props.node);
    }
    const __returned__ = { props, emit, isFileSelected, isDirectory, isDirectoryOpen, isDisabled, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["aria-expanded", "aria-disabled"];
const _hoisted_2 = {
  key: 1,
  class: "h-4 w-4"
};
const _hoisted_3 = { class: "ml-1" };
const _hoisted_4 = { key: 1 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  const _component_FileIcon = __nuxt_component_1;
  const _component_FileTree = __nuxt_component_0;
  return openBlock(), createElementBlock("div", null, [
    $props.node.name ? (openBlock(), createElementBlock("button", {
      key: 0,
      class: normalizeClass(["flex w-full items-center gap-1 rounded px-2 py-1 text-left text-sm", [
        $setup.isDisabled ? "cursor-default text-gray-600" : "hover:bg-gray-500 hover:bg-opacity-50",
        $setup.isFileSelected ? "bg-gray-500 bg-opacity-50 text-gray-300" : "text-gray-500"
      ]]),
      style: normalizeStyle({
        paddingLeft: `${0.2 + 0.8 * $setup.props.depth}rem`
      }),
      role: "treeitem",
      "aria-expanded": $setup.isDirectory ? $setup.isDirectoryOpen : void 0,
      "aria-disabled": $setup.isDisabled,
      onClick: $setup.handleClick
    }, [
      $setup.isDirectory ? (openBlock(), createBlock(_component_Icon, {
        key: 0,
        class: normalizeClass([$setup.isDirectoryOpen && "rotate-90", "h-4 w-4 opacity-50 transition-transform duration-300"]),
        name: "ph:caret-right"
      }, null, 8, ["class"])) : (openBlock(), createElementBlock("div", _hoisted_2)),
      createVNode(_component_FileIcon, {
        class: "h-4 w-4",
        path: $props.node.name,
        "is-directory": $setup.isDirectory,
        "is-directory-open": $setup.isDirectoryOpen
      }, null, 8, ["path", "is-directory", "is-directory-open"]),
      createBaseVNode(
        "span",
        _hoisted_3,
        toDisplayString($props.node.name),
        1
        /* TEXT */
      )
    ], 14, _hoisted_1)) : createCommentVNode("v-if", true),
    $setup.isDirectory ? withDirectives((openBlock(), createElementBlock(
      "div",
      _hoisted_4,
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($props.node.nodes, (child, index) => {
            return openBlock(), createBlock(_component_FileTree, {
              key: index,
              selected: $props.selected,
              "select-dir": $props.selectDir,
              node: child,
              depth: $props.depth + 1,
              disabled: $setup.isDisabled,
              "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => $setup.emit("update:selected", $event))
            }, null, 8, ["selected", "select-dir", "node", "depth", "disabled"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      512
      /* NEED_PATCH */
    )), [
      [vShow, $setup.isDirectoryOpen]
    ]) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$1.__file = "components/custom/filetree/FileTree.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/projects/my-components/components/custom/filetree/FileTree.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FileTree.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const filetree = {
      name: "",
      filepath: "",
      nodes: [
        { name: "app.vue", filepath: "app.vue" },
        { name: "package.json", filepath: "package.json" },
        { name: "nuxt.config.ts", filepath: "nuxt.config.ts" },
        {
          name: "pages",
          filepath: "pages",
          nodes: [
            { name: "foo.vue", filepath: "pages/foo.vue" },
            { name: "index.vue", filepath: "pages/index.vue" }
          ]
        }
      ]
    };
    function sortNodes(node) {
      if (node.nodes && node.nodes.length > 0) {
        node.nodes.sort((a, b) => {
          const isADir = a.nodes !== void 0;
          const isBDir = b.nodes !== void 0;
          if (isADir && !isBDir) return -1;
          if (!isADir && isBDir) return 1;
          return a.name.localeCompare(b.name);
        });
        node.nodes.forEach((subNode) => {
          sortNodes(subNode);
        });
      }
      return node;
    }
    sortNodes(filetree);
    const selectedFile = shallowRef({ ...filetree });
    const tree2 = {
      name: "Home",
      nodes: [
        {
          name: "Movies",
          nodes: [
            {
              name: "Action",
              nodes: [
                {
                  name: "2000s",
                  nodes: [
                    { name: "Gladiator.mp4", disabled: true },
                    { name: "The-Dark-Knight.mp4" }
                  ]
                },
                { name: "2010s", nodes: [] }
              ]
            },
            {
              name: "Comedy",
              disabled: true,
              nodes: [{ name: "2000s", nodes: [{ name: "Superbad.mp4" }] }]
            }
          ]
        },
        {
          name: "Music",
          nodes: [{ name: "Rock", nodes: [] }]
        },
        { name: "Pictures", nodes: [] },
        { name: "passwords.txt" }
      ]
    };
    function addFilepath(node, parentPath = "") {
      node.filepath = parentPath ? `${parentPath}/${node.name}` : node.name;
      if (node.nodes && node.nodes.length > 0) {
        node.nodes.forEach((subNode) => addFilepath(subNode, node.filepath));
      }
    }
    addFilepath(tree2);
    const selectedFile2 = shallowRef({ ...tree2 });
    const __returned__ = { filetree, sortNodes, selectedFile, tree2, addFilepath, selectedFile2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FileTree = __nuxt_component_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "FileTree" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Example 1" }, {
        default: withCtx(() => [
          createVNode(_component_FileTree, {
            selected: $setup.selectedFile,
            "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => $setup.selectedFile = $event),
            node: $setup.filetree,
            depth: -1,
            "select-dir": ""
          }, null, 8, ["selected"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Example 2" }, {
        default: withCtx(() => [
          createVNode(_component_FileTree, {
            selected: $setup.selectedFile2,
            "onUpdate:selected": _cache[1] || (_cache[1] = ($event) => $setup.selectedFile2 = $event),
            node: $setup.tree2,
            "select-dir": ""
          }, null, 8, ["selected"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/filetree/FileTree.story.vue";
const FileTree_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/filetree/FileTree.story.vue"]]);
export {
  FileTree_story as default
};
