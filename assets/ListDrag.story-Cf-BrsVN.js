import { aD as defineComponent, at as ref, as as _export_sfc, aw as openBlock, aH as createElementBlock, aG as createBaseVNode, aF as createVNode, ay as withCtx, aL as toDisplayString, aM as createTextVNode, aB as normalizeClass, aE as resolveComponent, aK as createCommentVNode, aA as normalizeStyle, ax as createBlock } from "./vendor-MhOJwlZn.js";
import { _ as __nuxt_component_0 } from "./DragList-Bp44mzUG.js";
import "./DragItem-ttPHFLKr.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DragList",
  setup(__props, { expose: __expose }) {
    __expose();
    const list = ref([
      "vue",
      "ReactiveX",
      "Drag and Drop",
      "react",
      "preact",
      "golang",
      "docker"
    ]);
    const items = ref([1, 2, 3, 4, 5, 6, 7]);
    const __returned__ = { list, items, DragList: __nuxt_component_0 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "flex" };
const _hoisted_2$2 = { class: "p-2 font-normal shadow" };
const _hoisted_3$2 = { class: "p-2" };
const _hoisted_4$1 = { class: "p-2 font-normal shadow" };
const _hoisted_5$1 = { class: "p-2 font-normal shadow" };
const _hoisted_6$1 = { class: "border-light-blue-500 border-2 border-dashed p-2 font-normal shadow" };
const _hoisted_7$1 = { class: "p-2 font-normal shadow" };
const _hoisted_8$1 = { class: "p-2 font-normal shadow" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", null, [
      _cache[8] || (_cache[8] = createBaseVNode(
        "p",
        null,
        "Drag with handle",
        -1
        /* HOISTED */
      )),
      createVNode($setup["DragList"], {
        list: $setup.list,
        "onUpdate:list": _cache[0] || (_cache[0] = ($event) => $setup.list = $event),
        handle: ".handle"
      }, {
        default: withCtx(({ item, index }) => [
          createBaseVNode("p", _hoisted_2$2, [
            _cache[5] || (_cache[5] = createBaseVNode(
              "button",
              { class: "handle" },
              "☰",
              -1
              /* HOISTED */
            )),
            createBaseVNode(
              "span",
              _hoisted_3$2,
              toDisplayString(item) + " - " + toDisplayString(index),
              1
              /* TEXT */
            )
          ])
        ]),
        "placeholder-move": withCtx(() => _cache[6] || (_cache[6] = [
          createBaseVNode(
            "div",
            { style: { "border": "1px solid green", "height": "1px" } },
            null,
            -1
            /* HOISTED */
          )
        ])),
        "placeholder-add": withCtx(() => _cache[7] || (_cache[7] = [
          createBaseVNode(
            "div",
            { style: { "border": "1px solid green", "height": "1px" } },
            null,
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }, 8, ["list"])
    ]),
    createBaseVNode("div", null, [
      _cache[10] || (_cache[10] = createBaseVNode(
        "p",
        null,
        " placeholder move & add |",
        -1
        /* HOISTED */
      )),
      createVNode($setup["DragList"], {
        list: $setup.items,
        "onUpdate:list": _cache[1] || (_cache[1] = ($event) => $setup.items = $event)
      }, {
        default: withCtx(({ item, index, gg }) => [
          createBaseVNode(
            "p",
            _hoisted_4$1,
            toDisplayString(item) + " - " + toDisplayString(index) + " " + toDisplayString(gg),
            1
            /* TEXT */
          )
        ]),
        "placeholder-move": withCtx(() => _cache[9] || (_cache[9] = [
          createTextVNode(" moving ")
        ])),
        "placeholder-add": withCtx(({ data: data2 }) => [
          createTextVNode(
            toDisplayString(data2.value),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["list"])
    ]),
    createBaseVNode("div", null, [
      _cache[12] || (_cache[12] = createBaseVNode(
        "p",
        null,
        " placeholder add only |",
        -1
        /* HOISTED */
      )),
      createVNode($setup["DragList"], {
        list: $setup.list,
        "onUpdate:list": _cache[2] || (_cache[2] = ($event) => $setup.list = $event),
        mode: "cut",
        name: "fade"
      }, {
        default: withCtx(({ item, index }) => [
          createBaseVNode(
            "p",
            _hoisted_5$1,
            toDisplayString(item) + " - " + toDisplayString(index),
            1
            /* TEXT */
          )
        ]),
        "placeholder-add": withCtx(() => _cache[11] || (_cache[11] = [
          createBaseVNode(
            "p",
            { class: "p-2 font-normal shadow" },
            "test",
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }, 8, ["list"])
    ]),
    createBaseVNode("div", null, [
      _cache[13] || (_cache[13] = createBaseVNode(
        "p",
        null,
        " Placeholder move only |",
        -1
        /* HOISTED */
      )),
      createVNode($setup["DragList"], {
        list: $setup.list,
        "onUpdate:list": _cache[3] || (_cache[3] = ($event) => $setup.list = $event)
      }, {
        default: withCtx(({ item, index, inProgress }) => [
          createBaseVNode(
            "p",
            {
              class: normalizeClass(["p-2 font-normal shadow", { ghost: inProgress }])
            },
            toDisplayString(item) + " - " + toDisplayString(index),
            3
            /* TEXT, CLASS */
          )
        ]),
        "placeholder-move": withCtx(({ data: data2 }) => [
          createBaseVNode(
            "p",
            _hoisted_6$1,
            toDisplayString(data2.value) + " - " + toDisplayString(data2.index),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["list"])
    ]),
    createBaseVNode("div", null, [
      _cache[16] || (_cache[16] = createBaseVNode(
        "p",
        null,
        " drag image |",
        -1
        /* HOISTED */
      )),
      createVNode($setup["DragList"], {
        list: $setup.items,
        "onUpdate:list": _cache[4] || (_cache[4] = ($event) => $setup.items = $event),
        "accept-data": ({ value }) => typeof value === "number"
      }, {
        default: withCtx(({ item, index }) => [
          createBaseVNode(
            "p",
            _hoisted_7$1,
            toDisplayString(item) + " - " + toDisplayString(index),
            1
            /* TEXT */
          )
        ]),
        "placeholder-move": withCtx(() => _cache[14] || (_cache[14] = [
          createBaseVNode(
            "p",
            { class: "p-2 font-normal shadow" },
            "move",
            -1
            /* HOISTED */
          )
        ])),
        "placeholder-add": withCtx(({ data: data2 }) => [
          createBaseVNode(
            "p",
            _hoisted_8$1,
            toDisplayString(data2.value),
            1
            /* TEXT */
          )
        ]),
        "drag-image": withCtx(() => _cache[15] || (_cache[15] = [
          createBaseVNode(
            "p",
            { class: "p-2 font-normal shadow" },
            "hehe",
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }, 8, ["list", "accept-data"])
    ])
  ]);
}
_sfc_main$3.__file = "components/custom/drag/stories/DragList.vue";
const DragList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-35fc0e4f"], ["__file", "D:/projects/my-components/components/custom/drag/stories/DragList.vue"]]);
const _sfc_main$2 = {
  components: {
    DragList: __nuxt_component_0
  },
  props: {
    column: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      ghostItemPosition: null,
      newItem: null
    };
  },
  computed: {
    tasks: {
      set(val) {
        Object.assign(this.column, { tasks: val });
      },
      get() {
        return this.column.tasks;
      }
    }
  },
  methods: {
    remove(transferData) {
      this.ghostItemPosition = transferData;
    },
    dragEnter({ from, to }) {
      this.ghostItemPosition;
      console.log("parent");
    }
  }
};
const _hoisted_1$1 = { class: "ml-3 flex w-80 max-w-sm flex-shrink-0 flex-col rounded-md bg-gray-100" };
const _hoisted_2$1 = { class: "flex-shrink-0 px-3 pt-3 pb-1 text-sm font-medium text-gray-700" };
const _hoisted_3$1 = { class: "min-h-0 flex-1 overflow-y-auto" };
const _hoisted_4 = { class: "px-3 pt-1 pb-3" };
const _hoisted_5 = { class: "flex justify-between" };
const _hoisted_6 = { class: "text-sm font-semibold leading-snug text-gray-900" };
const _hoisted_7 = { class: "flex-shrink-0" };
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "flex items-baseline justify-between" };
const _hoisted_10 = { class: "text-sm text-gray-600" };
const _hoisted_11 = ["datetime"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DragList = __nuxt_component_0;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode(
      "h3",
      _hoisted_2$1,
      toDisplayString($props.column.name),
      1
      /* TEXT */
    ),
    createBaseVNode("div", _hoisted_3$1, [
      createBaseVNode("ul", _hoisted_4, [
        createVNode(_component_DragList, {
          list: $options.tasks,
          "onUpdate:list": _cache[0] || (_cache[0] = ($event) => $options.tasks = $event),
          group: "task",
          name: "sca",
          mode: "cut",
          "id-adapter": (item) => item._id
        }, {
          default: withCtx(({ item, index }) => [
            createBaseVNode(
              "div",
              {
                class: normalizeClass([{ "mt-3": index > 0 }, "block rounded-md bg-white p-5 shadow"])
              },
              [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode(
                    "p",
                    _hoisted_6,
                    toDisplayString(item.title),
                    1
                    /* TEXT */
                  ),
                  createBaseVNode("span", _hoisted_7, [
                    createBaseVNode("img", {
                      class: "h-6 w-6 rounded-full",
                      src: item.avatar,
                      alt: "avatar"
                    }, null, 8, _hoisted_8)
                  ])
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("time", {
                      datetime: item.date
                    }, toDisplayString(item.date), 9, _hoisted_11)
                  ]),
                  _cache[1] || (_cache[1] = createBaseVNode(
                    "div",
                    { class: "mt-2" },
                    [
                      createBaseVNode("span", { class: "inline-flex items-center rounded bg-teal-100 px-2 py-1 leading-tight" }, [
                        createBaseVNode("svg", {
                          class: "h-2 w-2 text-teal-500",
                          fill: "currentColor",
                          viewBox: "0 0 8 8"
                        }, [
                          createBaseVNode("circle", {
                            cx: "4",
                            cy: "4",
                            r: "3"
                          })
                        ]),
                        createBaseVNode("span", { class: "ml-2 text-sm font-medium text-teal-900" }, "Feature Request")
                      ])
                    ],
                    -1
                    /* HOISTED */
                  ))
                ])
              ],
              2
              /* CLASS */
            )
          ]),
          "placeholder-add": withCtx(() => _cache[2] || (_cache[2] = [
            createBaseVNode(
              "div",
              { style: { "background": "green", "height": "1px" } },
              null,
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        }, 8, ["list", "id-adapter"])
      ])
    ])
  ]);
}
_sfc_main$2.__file = "components/custom/drag/stories/trello/BoardColumn.vue";
const BoardColumn = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "D:/projects/my-components/components/custom/drag/stories/trello/BoardColumn.vue"]]);
const _sfc_main$1 = {
  components: { BoardColumn, DragList: __nuxt_component_0 },
  data() {
    return {
      sidebarOpen: false,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      data,
      draggingItem: null,
      currentEnteringTask: { taskIndex: -1, columnIndex: -1 },
      newItem: null
    };
  },
  methods: {
    onDrag(e) {
      this.draggingItem = e;
      this.currentEnteringTask = {
        taskIndex: e.taskIndex,
        columnIndex: e.columnIndex
      };
    },
    handle({ from, to }) {
      console.log("drop", from, to);
      this.data[from.fromColumnIndex].tasks;
      this.data[to.fromColumnIndex].tasks;
    },
    dragEnter(payload) {
      console.log("dragenter");
    },
    dragLeave() {
    },
    dragEnd() {
      this.newItem.classList.remove("ghost-item");
    }
  }
};
const data = [
  {
    name: "Backlog",
    tasks: [
      {
        _id: "5f2685cd5fafb24f70a7a8f5",
        title: "Minim laboris occaecat sint cillum ex tempor.",
        content: "Labore aliquip labore labore in proident aute consequat in incididunt veniam. Enim eu sunt quis ut consequat amet Lorem laboris officia velit laboris aute tempor tempor. Deserunt cillum do et est labore do consequat qui nostrud qui tempor aliquip. Lorem nostrud aute aute Lorem est adipisicing ullamco sint anim ipsum duis aliqua.\r\n",
        type: 0,
        date: "Mar 17 2020",
        name: "Donaldson Leonard",
        avatar: "https://robohash.org/Donaldson Leonard/100?format=png"
      },
      {
        _id: "5f2685cd031d99f23295846d",
        title: "Magna id aliquip dolor occaecat culpa consectetur et in cupidatat est irure esse.",
        content: "Consectetur minim nisi laboris eiusmod culpa mollit et est magna do non dolore. In culpa dolore pariatur officia esse veniam enim voluptate in consectetur. Excepteur laborum consequat magna dolore Lorem do do. Minim ut occaecat deserunt ullamco amet nisi. Elit adipisicing quis voluptate exercitation culpa ullamco occaecat aute. Lorem proident id proident consectetur elit adipisicing laboris exercitation dolore incididunt dolor laborum.\r\n",
        type: 1,
        date: "Jun 15 2020",
        name: "Wendy Sloan",
        avatar: "https://robohash.org/Wendy Sloan/100?format=png"
      },
      {
        _id: "5f2685cde8f010b912322bde",
        title: "Dolore elit sunt dolore commodo quis velit pariatur id veniam sit.",
        content: "Excepteur magna aute excepteur velit consequat esse esse dolor sunt veniam non sit nostrud. In culpa labore mollit eu eiusmod dolore amet reprehenderit sunt ea duis mollit ex labore. In deserunt aute fugiat dolore proident officia. Eiusmod minim eiusmod consectetur amet eiusmod. Ullamco cillum ut ad incididunt elit duis sit irure enim in incididunt non anim.\r\n",
        type: 1,
        date: "Jul 21 2020",
        name: "Doreen Arnold",
        avatar: "https://robohash.org/Doreen Arnold/100?format=png"
      },
      {
        _id: "5f2685cd662bff62eadb30c7",
        title: "Labore culpa laborum reprehenderit sunt aute sunt amet ipsum exercitation ex.",
        content: "Qui dolore nulla et labore ea eiusmod consectetur dolore duis in qui ipsum. Sit laboris id voluptate tempor anim eu pariatur in proident. Ullamco consequat deserunt ut tempor et enim sint veniam velit do esse. Cupidatat non esse ea consectetur.\r\n",
        type: 0,
        date: "Jun 08 2020",
        name: "Hartman Sheppard",
        avatar: "https://robohash.org/Hartman Sheppard/100?format=png"
      },
      {
        _id: "5f2685cdc9f13a0f2bb43467",
        title: "Consectetur ut tempor id quis et sunt est et cupidatat minim Lorem.",
        content: "Mollit ipsum quis sint non nisi est amet incididunt. Labore et non et in dolore amet ullamco. Lorem aliquip amet aliquip adipisicing tempor exercitation incididunt. Sit aute veniam exercitation nulla consequat et cillum nisi id sint aliquip amet ex nulla. Aute sit culpa occaecat aute magna ea et veniam anim cupidatat non aliqua.\r\n",
        type: 0,
        date: "Jul 22 2020",
        name: "Pearson Love",
        avatar: "https://robohash.org/Pearson Love/100?format=png"
      },
      {
        _id: "5f2685cdcad846a880911167",
        title: "Ad amet minim aliquip cupidatat esse culpa cupidatat sint laborum anim non.",
        content: "Enim eu do duis nostrud. Exercitation occaecat laboris incididunt pariatur consequat. Officia Lorem reprehenderit reprehenderit consequat veniam eu officia dolor. Eu consectetur culpa laborum sunt voluptate proident eu. Dolor proident in ex incididunt fugiat ex amet labore est laboris duis nulla.\r\n",
        type: 2,
        date: "Jun 23 2020",
        name: "Dickerson Sanders",
        avatar: "https://robohash.org/Dickerson Sanders/100?format=png"
      },
      {
        _id: "5f2685cd43bf38ebade6fba8",
        title: "Laborum Lorem tempor voluptate officia cillum sit eu.",
        content: "Enim labore id excepteur Lorem dolore aute deserunt deserunt. Ut do tempor sunt nostrud aute. Commodo commodo quis eiusmod deserunt laboris reprehenderit.\r\n",
        type: 2,
        date: "May 24 2020",
        name: "Aisha Christensen",
        avatar: "https://robohash.org/Aisha Christensen/100?format=png"
      },
      {
        _id: "5f2685cd270e626a874e784f",
        title: "Dolore qui exercitation cupidatat sint proident et nisi non enim.",
        content: "Pariatur sint enim ea non est. Ut esse enim ea excepteur voluptate eu in nulla aliqua labore esse labore ex. Elit duis laborum ut laboris nostrud nisi enim aliqua laborum ad commodo. Consequat est ad magna reprehenderit veniam labore enim duis et. Veniam labore consectetur sunt occaecat in ut.\r\n",
        type: 0,
        date: "Mar 06 2020",
        name: "Hinton Norton",
        avatar: "https://robohash.org/Hinton Norton/100?format=png"
      }
    ]
  },
  {
    name: "In Progress",
    tasks: [
      {
        _id: "5f2685cd5fafb24f70a7a8f5",
        title: "Minim laboris occaecat sint cillum ex tempor.",
        content: "Labore aliquip labore labore in proident aute consequat in incididunt veniam. Enim eu sunt quis ut consequat amet Lorem laboris officia velit laboris aute tempor tempor. Deserunt cillum do et est labore do consequat qui nostrud qui tempor aliquip. Lorem nostrud aute aute Lorem est adipisicing ullamco sint anim ipsum duis aliqua.\r\n",
        type: 0,
        date: "Mar 17 2020",
        name: "Donaldson Leonard",
        avatar: "https://robohash.org/Donaldson Leonard/100?format=png"
      },
      {
        _id: "5f2685cd031d99f23295846d",
        title: "Magna id aliquip dolor occaecat culpa consectetur et in cupidatat est irure esse.",
        content: "Consectetur minim nisi laboris eiusmod culpa mollit et est magna do non dolore. In culpa dolore pariatur officia esse veniam enim voluptate in consectetur. Excepteur laborum consequat magna dolore Lorem do do. Minim ut occaecat deserunt ullamco amet nisi. Elit adipisicing quis voluptate exercitation culpa ullamco occaecat aute. Lorem proident id proident consectetur elit adipisicing laboris exercitation dolore incididunt dolor laborum.\r\n",
        type: 1,
        date: "Jun 15 2020",
        name: "Wendy Sloan",
        avatar: "https://robohash.org/Wendy Sloan/100?format=png"
      },
      {
        _id: "5f2685cde8f010b912322bde",
        title: "Dolore elit sunt dolore commodo quis velit pariatur id veniam sit.",
        content: "Excepteur magna aute excepteur velit consequat esse esse dolor sunt veniam non sit nostrud. In culpa labore mollit eu eiusmod dolore amet reprehenderit sunt ea duis mollit ex labore. In deserunt aute fugiat dolore proident officia. Eiusmod minim eiusmod consectetur amet eiusmod. Ullamco cillum ut ad incididunt elit duis sit irure enim in incididunt non anim.\r\n",
        type: 1,
        date: "Jul 21 2020",
        name: "Doreen Arnold",
        avatar: "https://robohash.org/Doreen Arnold/100?format=png"
      },
      {
        _id: "5f2685cd662bff62eadb30c7",
        title: "Labore culpa laborum reprehenderit sunt aute sunt amet ipsum exercitation ex.",
        content: "Qui dolore nulla et labore ea eiusmod consectetur dolore duis in qui ipsum. Sit laboris id voluptate tempor anim eu pariatur in proident. Ullamco consequat deserunt ut tempor et enim sint veniam velit do esse. Cupidatat non esse ea consectetur.\r\n",
        type: 0,
        date: "Jun 08 2020",
        name: "Hartman Sheppard",
        avatar: "https://robohash.org/Hartman Sheppard/100?format=png"
      },
      {
        _id: "5f2685cdc9f13a0f2bb43467",
        title: "Consectetur ut tempor id quis et sunt est et cupidatat minim Lorem.",
        content: "Mollit ipsum quis sint non nisi est amet incididunt. Labore et non et in dolore amet ullamco. Lorem aliquip amet aliquip adipisicing tempor exercitation incididunt. Sit aute veniam exercitation nulla consequat et cillum nisi id sint aliquip amet ex nulla. Aute sit culpa occaecat aute magna ea et veniam anim cupidatat non aliqua.\r\n",
        type: 0,
        date: "Jul 22 2020",
        name: "Pearson Love",
        avatar: "https://robohash.org/Pearson Love/100?format=png"
      },
      {
        _id: "5f2685cdcad846a880911167",
        title: "Ad amet minim aliquip cupidatat esse culpa cupidatat sint laborum anim non.",
        content: "Enim eu do duis nostrud. Exercitation occaecat laboris incididunt pariatur consequat. Officia Lorem reprehenderit reprehenderit consequat veniam eu officia dolor. Eu consectetur culpa laborum sunt voluptate proident eu. Dolor proident in ex incididunt fugiat ex amet labore est laboris duis nulla.\r\n",
        type: 2,
        date: "Jun 23 2020",
        name: "Dickerson Sanders",
        avatar: "https://robohash.org/Dickerson Sanders/100?format=png"
      },
      {
        _id: "5f2685cd43bf38ebade6fba8",
        title: "Laborum Lorem tempor voluptate officia cillum sit eu.",
        content: "Enim labore id excepteur Lorem dolore aute deserunt deserunt. Ut do tempor sunt nostrud aute. Commodo commodo quis eiusmod deserunt laboris reprehenderit.\r\n",
        type: 2,
        date: "May 24 2020",
        name: "Aisha Christensen",
        avatar: "https://robohash.org/Aisha Christensen/100?format=png"
      },
      {
        _id: "5f2685cd270e626a874e784f",
        title: "Dolore qui exercitation cupidatat sint proident et nisi non enim.",
        content: "Pariatur sint enim ea non est. Ut esse enim ea excepteur voluptate eu in nulla aliqua labore esse labore ex. Elit duis laborum ut laboris nostrud nisi enim aliqua laborum ad commodo. Consequat est ad magna reprehenderit veniam labore enim duis et. Veniam labore consectetur sunt occaecat in ut.\r\n",
        type: 0,
        date: "Mar 06 2020",
        name: "Hinton Norton",
        avatar: "https://robohash.org/Hinton Norton/100?format=png"
      }
    ]
  },
  {
    name: "Ready for Review",
    tasks: [
      {
        _id: "5f2685cd5fafb24f70a7a8f5",
        title: "Minim laboris occaecat sint cillum ex tempor.",
        content: "Labore aliquip labore labore in proident aute consequat in incididunt veniam. Enim eu sunt quis ut consequat amet Lorem laboris officia velit laboris aute tempor tempor. Deserunt cillum do et est labore do consequat qui nostrud qui tempor aliquip. Lorem nostrud aute aute Lorem est adipisicing ullamco sint anim ipsum duis aliqua.\r\n",
        type: 0,
        date: "Mar 17 2020",
        name: "Donaldson Leonard",
        avatar: "https://robohash.org/Donaldson Leonard/100?format=png"
      },
      {
        _id: "5f2685cd031d99f23295846d",
        title: "Magna id aliquip dolor occaecat culpa consectetur et in cupidatat est irure esse.",
        content: "Consectetur minim nisi laboris eiusmod culpa mollit et est magna do non dolore. In culpa dolore pariatur officia esse veniam enim voluptate in consectetur. Excepteur laborum consequat magna dolore Lorem do do. Minim ut occaecat deserunt ullamco amet nisi. Elit adipisicing quis voluptate exercitation culpa ullamco occaecat aute. Lorem proident id proident consectetur elit adipisicing laboris exercitation dolore incididunt dolor laborum.\r\n",
        type: 1,
        date: "Jun 15 2020",
        name: "Wendy Sloan",
        avatar: "https://robohash.org/Wendy Sloan/100?format=png"
      },
      {
        _id: "5f2685cde8f010b912322bde",
        title: "Dolore elit sunt dolore commodo quis velit pariatur id veniam sit.",
        content: "Excepteur magna aute excepteur velit consequat esse esse dolor sunt veniam non sit nostrud. In culpa labore mollit eu eiusmod dolore amet reprehenderit sunt ea duis mollit ex labore. In deserunt aute fugiat dolore proident officia. Eiusmod minim eiusmod consectetur amet eiusmod. Ullamco cillum ut ad incididunt elit duis sit irure enim in incididunt non anim.\r\n",
        type: 1,
        date: "Jul 21 2020",
        name: "Doreen Arnold",
        avatar: "https://robohash.org/Doreen Arnold/100?format=png"
      },
      {
        _id: "5f2685cd662bff62eadb30c7",
        title: "Labore culpa laborum reprehenderit sunt aute sunt amet ipsum exercitation ex.",
        content: "Qui dolore nulla et labore ea eiusmod consectetur dolore duis in qui ipsum. Sit laboris id voluptate tempor anim eu pariatur in proident. Ullamco consequat deserunt ut tempor et enim sint veniam velit do esse. Cupidatat non esse ea consectetur.\r\n",
        type: 0,
        date: "Jun 08 2020",
        name: "Hartman Sheppard",
        avatar: "https://robohash.org/Hartman Sheppard/100?format=png"
      },
      {
        _id: "5f2685cdc9f13a0f2bb43467",
        title: "Consectetur ut tempor id quis et sunt est et cupidatat minim Lorem.",
        content: "Mollit ipsum quis sint non nisi est amet incididunt. Labore et non et in dolore amet ullamco. Lorem aliquip amet aliquip adipisicing tempor exercitation incididunt. Sit aute veniam exercitation nulla consequat et cillum nisi id sint aliquip amet ex nulla. Aute sit culpa occaecat aute magna ea et veniam anim cupidatat non aliqua.\r\n",
        type: 0,
        date: "Jul 22 2020",
        name: "Pearson Love",
        avatar: "https://robohash.org/Pearson Love/100?format=png"
      },
      {
        _id: "5f2685cdcad846a880911167",
        title: "Ad amet minim aliquip cupidatat esse culpa cupidatat sint laborum anim non.",
        content: "Enim eu do duis nostrud. Exercitation occaecat laboris incididunt pariatur consequat. Officia Lorem reprehenderit reprehenderit consequat veniam eu officia dolor. Eu consectetur culpa laborum sunt voluptate proident eu. Dolor proident in ex incididunt fugiat ex amet labore est laboris duis nulla.\r\n",
        type: 2,
        date: "Jun 23 2020",
        name: "Dickerson Sanders",
        avatar: "https://robohash.org/Dickerson Sanders/100?format=png"
      },
      {
        _id: "5f2685cd43bf38ebade6fba8",
        title: "Laborum Lorem tempor voluptate officia cillum sit eu.",
        content: "Enim labore id excepteur Lorem dolore aute deserunt deserunt. Ut do tempor sunt nostrud aute. Commodo commodo quis eiusmod deserunt laboris reprehenderit.\r\n",
        type: 2,
        date: "May 24 2020",
        name: "Aisha Christensen",
        avatar: "https://robohash.org/Aisha Christensen/100?format=png"
      },
      {
        _id: "5f2685cd270e626a874e784f",
        title: "Dolore qui exercitation cupidatat sint proident et nisi non enim.",
        content: "Pariatur sint enim ea non est. Ut esse enim ea excepteur voluptate eu in nulla aliqua labore esse labore ex. Elit duis laborum ut laboris nostrud nisi enim aliqua laborum ad commodo. Consequat est ad magna reprehenderit veniam labore enim duis et. Veniam labore consectetur sunt occaecat in ut.\r\n",
        type: 0,
        date: "Mar 06 2020",
        name: "Hinton Norton",
        avatar: "https://robohash.org/Hinton Norton/100?format=png"
      }
    ]
  },
  {
    name: "Done",
    tasks: [
      {
        _id: "5f2685cd5fafb24f70a7a8f5",
        title: "Minim laboris occaecat sint cillum ex tempor.",
        content: "Labore aliquip labore labore in proident aute consequat in incididunt veniam. Enim eu sunt quis ut consequat amet Lorem laboris officia velit laboris aute tempor tempor. Deserunt cillum do et est labore do consequat qui nostrud qui tempor aliquip. Lorem nostrud aute aute Lorem est adipisicing ullamco sint anim ipsum duis aliqua.\r\n",
        type: 0,
        date: "Mar 17 2020",
        name: "Donaldson Leonard",
        avatar: "https://robohash.org/Donaldson Leonard/100?format=png"
      },
      {
        _id: "5f2685cd031d99f23295846d",
        title: "Magna id aliquip dolor occaecat culpa consectetur et in cupidatat est irure esse.",
        content: "Consectetur minim nisi laboris eiusmod culpa mollit et est magna do non dolore. In culpa dolore pariatur officia esse veniam enim voluptate in consectetur. Excepteur laborum consequat magna dolore Lorem do do. Minim ut occaecat deserunt ullamco amet nisi. Elit adipisicing quis voluptate exercitation culpa ullamco occaecat aute. Lorem proident id proident consectetur elit adipisicing laboris exercitation dolore incididunt dolor laborum.\r\n",
        type: 1,
        date: "Jun 15 2020",
        name: "Wendy Sloan",
        avatar: "https://robohash.org/Wendy Sloan/100?format=png"
      },
      {
        _id: "5f2685cde8f010b912322bde",
        title: "Dolore elit sunt dolore commodo quis velit pariatur id veniam sit.",
        content: "Excepteur magna aute excepteur velit consequat esse esse dolor sunt veniam non sit nostrud. In culpa labore mollit eu eiusmod dolore amet reprehenderit sunt ea duis mollit ex labore. In deserunt aute fugiat dolore proident officia. Eiusmod minim eiusmod consectetur amet eiusmod. Ullamco cillum ut ad incididunt elit duis sit irure enim in incididunt non anim.\r\n",
        type: 1,
        date: "Jul 21 2020",
        name: "Doreen Arnold",
        avatar: "https://robohash.org/Doreen Arnold/100?format=png"
      },
      {
        _id: "5f2685cd662bff62eadb30c7",
        title: "Labore culpa laborum reprehenderit sunt aute sunt amet ipsum exercitation ex.",
        content: "Qui dolore nulla et labore ea eiusmod consectetur dolore duis in qui ipsum. Sit laboris id voluptate tempor anim eu pariatur in proident. Ullamco consequat deserunt ut tempor et enim sint veniam velit do esse. Cupidatat non esse ea consectetur.\r\n",
        type: 0,
        date: "Jun 08 2020",
        name: "Hartman Sheppard",
        avatar: "https://robohash.org/Hartman Sheppard/100?format=png"
      },
      {
        _id: "5f2685cdc9f13a0f2bb43467",
        title: "Consectetur ut tempor id quis et sunt est et cupidatat minim Lorem.",
        content: "Mollit ipsum quis sint non nisi est amet incididunt. Labore et non et in dolore amet ullamco. Lorem aliquip amet aliquip adipisicing tempor exercitation incididunt. Sit aute veniam exercitation nulla consequat et cillum nisi id sint aliquip amet ex nulla. Aute sit culpa occaecat aute magna ea et veniam anim cupidatat non aliqua.\r\n",
        type: 0,
        date: "Jul 22 2020",
        name: "Pearson Love",
        avatar: "https://robohash.org/Pearson Love/100?format=png"
      },
      {
        _id: "5f2685cdcad846a880911167",
        title: "Ad amet minim aliquip cupidatat esse culpa cupidatat sint laborum anim non.",
        content: "Enim eu do duis nostrud. Exercitation occaecat laboris incididunt pariatur consequat. Officia Lorem reprehenderit reprehenderit consequat veniam eu officia dolor. Eu consectetur culpa laborum sunt voluptate proident eu. Dolor proident in ex incididunt fugiat ex amet labore est laboris duis nulla.\r\n",
        type: 2,
        date: "Jun 23 2020",
        name: "Dickerson Sanders",
        avatar: "https://robohash.org/Dickerson Sanders/100?format=png"
      },
      {
        _id: "5f2685cd43bf38ebade6fba8",
        title: "Laborum Lorem tempor voluptate officia cillum sit eu.",
        content: "Enim labore id excepteur Lorem dolore aute deserunt deserunt. Ut do tempor sunt nostrud aute. Commodo commodo quis eiusmod deserunt laboris reprehenderit.\r\n",
        type: 2,
        date: "May 24 2020",
        name: "Aisha Christensen",
        avatar: "https://robohash.org/Aisha Christensen/100?format=png"
      },
      {
        _id: "5f2685cd270e626a874e784f",
        title: "Dolore qui exercitation cupidatat sint proident et nisi non enim.",
        content: "Pariatur sint enim ea non est. Ut esse enim ea excepteur voluptate eu in nulla aliqua labore esse labore ex. Elit duis laborum ut laboris nostrud nisi enim aliqua laborum ad commodo. Consequat est ad magna reprehenderit veniam labore enim duis et. Veniam labore consectetur sunt occaecat in ut.\r\n",
        type: 0,
        date: "Mar 06 2020",
        name: "Hinton Norton",
        avatar: "https://robohash.org/Hinton Norton/100?format=png"
      }
    ]
  }
];
const _hoisted_1 = { class: "flex h-screen" };
const _hoisted_2 = { class: "flex min-w-0 flex-1 flex-col bg-white" };
const _hoisted_3 = { class: "flex-1 overflow-auto" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BoardColumn = resolveComponent("BoardColumn");
  const _component_DragList = __nuxt_component_0;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createCommentVNode(" right-content "),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createCommentVNode(' <main class="inline-flex h-full p-3"> '),
        createCommentVNode(' <BoardColumn\n            v-for="(column, columnIndex) in data"\n            :key="columnIndex"\n            :column="column"\n            :columnIndex="columnIndex"\n          /> '),
        createVNode(_component_DragList, {
          list: $data.data,
          "onUpdate:list": _cache[0] || (_cache[0] = ($event) => $data.data = $event),
          group: "column",
          tag: "main",
          class: "inline-flex h-full p-3",
          "id-adapter": (val) => val.name
        }, {
          default: withCtx(({ item, index }) => [
            createVNode(_component_BoardColumn, {
              column: item,
              "column-index": index
            }, null, 8, ["column", "column-index"])
          ]),
          "placeholder-move": withCtx(() => _cache[1] || (_cache[1] = [
            createBaseVNode(
              "p",
              { style: { "border": "1px solid red", "background": "green", "width": "1px", "z-index": "9999", "height": "100%" } },
              null,
              -1
              /* HOISTED */
            )
          ])),
          "drag-image": withCtx(({ width }) => [
            createBaseVNode(
              "p",
              {
                style: normalizeStyle({ width: `${width}px` })
              },
              "Moving column :)",
              4
              /* STYLE */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["list", "id-adapter"]),
        createCommentVNode(" </main> ")
      ])
    ])
  ]);
}
_sfc_main$1.__file = "components/custom/drag/stories/trello/index.vue";
const Trello = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-8b99bc71"], ["__file", "D:/projects/my-components/components/custom/drag/stories/trello/index.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListDrag.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { DragList, Trello };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Drag - list" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Demo" }, {
        default: withCtx(() => [
          createVNode($setup["DragList"], { class: "bg-white" })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Trello Clone" }, {
        default: withCtx(() => [
          createVNode($setup["Trello"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/drag/stories/ListDrag.story.vue";
const ListDrag_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/drag/stories/ListDrag.story.vue"]]);
export {
  ListDrag_story as default
};
