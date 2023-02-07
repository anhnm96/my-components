import { _ as __nuxt_component_0 } from "./Button-f69e2505.js";
import { aB as ref, bj as onUnmounted, az as defineComponent, aX as reactive, aU as onMounted, b4 as onBeforeUnmount, au as openBlock, as as createBlock, at as withCtx, aH as withDirectives, ay as createBaseVNode, aM as normalizeClass, aR as toDisplayString, aG as createElementBlock, aN as normalizeStyle, aS as createCommentVNode, b5 as vShow, b9 as Transition, av as createVNode, bk as createApp, ar as resolveComponent, a$ as createTextVNode } from "./vendor-58dc2a1a.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const useTimer = (callback = () => {
}, delay) => {
  let timeoutId;
  let intervalId;
  let startTime;
  let endTime;
  let remainingTime = delay;
  const progress = ref(100);
  const clear = () => {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
  };
  const stop = () => {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    remainingTime -= Date.now() - startTime;
  };
  const start = () => {
    startTime = Date.now();
    endTime = Date.now() + remainingTime;
    intervalId = setInterval(() => {
      progress.value = (endTime - Date.now()) / delay * 100;
    }, 20);
    timeoutId = setTimeout(() => {
      callback();
      clear();
    }, remainingTime);
  };
  onUnmounted(() => {
    clear();
  });
  return { start, stop, clear, progress };
};
const _sfc_main$3 = defineComponent({
  name: "Simple",
  // components: {
  //   CheckCircleIcon,
  //   XIcon,
  //   InformationCircleIcon,
  //   XCircleIcon,
  // },
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    onClose: {
      type: Function,
      default: () => {
      }
    },
    position: {
      type: String,
      default: "top-right"
    },
    timeout: {
      type: Number,
      default: 5e3
    },
    showProgressbar: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "info"
    }
  },
  setup(props) {
    const show2 = ref(true);
    let positionClass;
    switch (props.position) {
      case "top-right":
        positionClass = "top-0 right-0";
        break;
      case "top-left":
        positionClass = "top-0 left-0";
        break;
      case "top-center":
        positionClass = "top-0 left-1/2 transform -translate-x-1/2";
        break;
      case "bottom-right":
        positionClass = "bottom-0 right-0";
        break;
      case "bottom-left":
        positionClass = "bottom-0 left-0";
        break;
      case "bottom-center":
        positionClass = "bottom-0 left-1/2 transform -translate-x-1/2";
        break;
    }
    const typeStyle = reactive({ color: "", icon: "" });
    switch (props.type) {
      case "info":
        Object.assign(typeStyle, {
          color: "blue",
          icon: "InformationCircleIcon"
        });
        break;
      case "warn":
        Object.assign(typeStyle, {
          color: "yellow",
          icon: "InformationCircleIcon"
        });
        break;
      case "success":
        Object.assign(typeStyle, { color: "green", icon: "CheckCircleIcon" });
        break;
      case "danger":
        Object.assign(typeStyle, { color: "red", icon: "XCircleIcon" });
        break;
    }
    const notiEl = ref();
    let progress;
    if (props.timeout > 0) {
      let mouseenter = function() {
        stop();
      }, mouseleave = function() {
        start();
      };
      const {
        start,
        stop,
        progress: val
      } = useTimer(() => show2.value = false, props.timeout);
      progress = val;
      onMounted(() => {
        var _a, _b;
        (_a = notiEl.value) == null ? void 0 : _a.addEventListener("mouseenter", mouseenter);
        (_b = notiEl.value) == null ? void 0 : _b.addEventListener("mouseleave", mouseleave);
        start();
      });
      onBeforeUnmount(() => {
        var _a, _b;
        (_a = notiEl.value) == null ? void 0 : _a.removeEventListener("mouseenter", mouseenter);
        (_b = notiEl.value) == null ? void 0 : _b.removeEventListener("mouseleave", mouseleave);
      });
    }
    return { show: show2, positionClass, progress, notiEl, typeStyle };
  }
});
const _hoisted_1$2 = { class: "p-4" };
const _hoisted_2$1 = { class: "flex items-start" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "flex-shrink-0" },
  [
    /* @__PURE__ */ createCommentVNode(' <component\n              :is="typeStyle.icon"\n              class="h-6 w-6"\n              :class="[`text-${typeStyle.color}-500`]"\n              aria-hidden="true"\n            /> ')
  ],
  -1
  /* HOISTED */
);
const _hoisted_4$1 = { class: "ml-3 flex-1 pt-0.5" };
const _hoisted_5$1 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_6$1 = { class: "mt-1 text-sm text-gray-500" };
const _hoisted_7$1 = { class: "ml-4 flex flex-shrink-0" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "sr-only" },
  "Close",
  -1
  /* HOISTED */
);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    class: "h-5 w-5",
    "aria-hidden": "true"
  },
  [
    /* @__PURE__ */ createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
      "clip-rule": "evenodd"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_10$1 = [
  _hoisted_8$1,
  _hoisted_9$1
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    "enter-active-class": "transition duration-300 ease-out transform",
    "enter-from-class": "opacity-0 sm:translate-x-full",
    "enter-to-class": "opacity-100 sm:translate-x-0",
    "leave-active-class": "transition duration-200 ease-in transform",
    "leave-from-class": "opacity-100",
    "leave-to-class": "-translate-y-2 opacity-0 ",
    appear: "",
    onAfterLeave: _cache[1] || (_cache[1] = () => _ctx.onClose()),
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        {
          ref: "notiEl",
          class: normalizeClass(["pointer-events-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all", _ctx.positionClass])
        },
        [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2$1, [
              _hoisted_3$1,
              createBaseVNode("div", _hoisted_4$1, [
                createBaseVNode(
                  "p",
                  _hoisted_5$1,
                  toDisplayString(_ctx.title),
                  1
                  /* TEXT */
                ),
                createBaseVNode(
                  "p",
                  _hoisted_6$1,
                  toDisplayString(_ctx.description),
                  1
                  /* TEXT */
                )
              ]),
              createBaseVNode("div", _hoisted_7$1, [
                createBaseVNode("button", {
                  class: "inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2",
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.show = false)
                }, _hoisted_10$1)
              ])
            ])
          ]),
          _ctx.showProgressbar ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              class: normalizeClass(["h-1 w-full", [`bg-${_ctx.typeStyle.color}-500`]]),
              style: normalizeStyle({ width: `${_ctx.progress}%` })
            },
            null,
            6
            /* CLASS, STYLE */
          )) : createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      ), [
        [vShow, _ctx.show]
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main$3.__file = "components/custom/notification/Notification.vue";
const Notification = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/notification/Notification.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "NotificationContainer",
  render() {
    return createVNode("div", {
      "aria-live": "assertive",
      "className": "pointer-events-none fixed inset-0 flex items-end sm:items-start"
    }, [notifications.value["top-right"].length > 0 && createVNode("div", {
      "className": "absolute right-0 top-0 flex flex-col items-end space-y-2 px-4 py-6 sm:p-6"
    }, [...notifications.value["top-right"]]), notifications.value["top-left"].length > 0 && createVNode("div", {
      "className": "absolute left-0 top-0 flex flex-col items-start space-y-2 px-4 py-6 sm:p-6"
    }, [...notifications.value["top-left"]]), notifications.value["bottom-right"].length > 0 && createVNode("div", {
      "className": "absolute right-0 bottom-0 flex flex-col items-end space-y-2 px-4 py-6 sm:p-6"
    }, [...notifications.value["bottom-right"]]), notifications.value["bottom-left"].length > 0 && createVNode("div", {
      "className": "absolute left-0 bottom-0 flex flex-col items-start space-y-2 px-4 py-6 sm:p-6"
    }, [...notifications.value["bottom-left"]])]);
  }
});
_sfc_main$2.__file = "components/custom/notification/NotificationContainer.vue";
const NotificationContainer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/notification/NotificationContainer.vue"]]);
const notifications = ref({
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": [],
  "top-center": [],
  "bottom-center": []
});
const defaultOptions = {
  type: "info",
  position: "top-right",
  timeout: 5e3,
  showProgressBar: true
};
let newId = 0;
let parentEl;
function mergeOptions(options = {}) {
  let mergedOptions = { ...defaultOptions, ...options, id: newId, key: newId };
  mergedOptions.onClose = (payload) => {
    const removeIndex = notifications.value[mergedOptions.position].findIndex(
      (n) => n.props.id === mergedOptions.id
    );
    notifications.value[mergedOptions.position][removeIndex].result(payload);
    notifications.value[mergedOptions.position].splice(removeIndex, 1);
    mergedOptions = null;
  };
  return mergedOptions;
}
function show(options, component = Notification) {
  const mergedOptions = mergeOptions(options);
  const toastVNode = createVNode(component, mergedOptions);
  notifications.value[mergedOptions.position].push(toastVNode);
  if (!parentEl) {
    parentEl = document.createElement("div");
    document.body.appendChild(parentEl);
    createApp(NotificationContainer).mount(parentEl);
  }
  newId++;
  return new Promise((resolve) => {
    toastVNode.result = resolve;
  });
}
const _sfc_main$1 = {
  props: {
    onClose: {
      type: Function,
      default: () => {
      }
    }
  },
  setup() {
    const show2 = ref(true);
    const payload = ref();
    function onSelect(value) {
      payload.value = value;
      show2.value = false;
    }
    return {
      show: show2,
      onSelect,
      payload
    };
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "pointer-events-auto max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
};
const _hoisted_2 = { class: "p-4" };
const _hoisted_3 = { class: "flex items-start" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "flex-shrink-0 pt-0.5" },
  [
    /* @__PURE__ */ createBaseVNode("img", {
      class: "h-10 w-10 rounded-full",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
      alt: "img"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = { class: "ml-3 flex-1" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "text-sm font-medium text-gray-900" },
  "Emilia Gates",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "mt-1 text-sm text-gray-500" },
  " Sent you an invite to connect. ",
  -1
  /* HOISTED */
);
const _hoisted_8 = { class: "mt-4 flex" };
const _hoisted_9 = { class: "ml-4 flex flex-shrink-0" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "sr-only" },
  "Close",
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "svg",
  {
    "ria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    class: "h-5 w-5"
  },
  [
    /* @__PURE__ */ createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
      "clip-rule": "evenodd"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_12 = [
  _hoisted_10,
  _hoisted_11
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    "enter-active-class": "transition duration-300 ease-out transform",
    "enter-from-class": "opacity-0 sm:translate-x-full",
    "enter-to-class": "opacity-100 sm:translate-x-0",
    "leave-active-class": "transition duration-200 ease-in transform",
    "leave-from-class": "opacity-100",
    "leave-to-class": "-translate-y-2 opacity-0 ",
    appear: "",
    onAfterLeave: _cache[3] || (_cache[3] = ($event) => $props.onClose($setup.payload))
  }, {
    default: withCtx(() => [
      $setup.show ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              _hoisted_7,
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("button", {
                  type: "button",
                  class: "inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                  onClick: _cache[0] || (_cache[0] = ($event) => $setup.onSelect("accept"))
                }, " Accept "),
                createBaseVNode("button", {
                  type: "button",
                  class: "ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                  onClick: _cache[1] || (_cache[1] = ($event) => $setup.onSelect("decline"))
                }, " Decline ")
              ])
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("button", {
                class: "inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                onClick: _cache[2] || (_cache[2] = ($event) => $setup.onSelect("decline"))
              }, _hoisted_12)
            ])
          ])
        ])
      ])) : createCommentVNode("v-if", true)
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main$1.__file = "components/custom/notification/stories/FriendRequest.vue";
const FriendRequesStory = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/notification/stories/FriendRequest.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Notification.story",
  setup(__props, { expose }) {
    expose();
    function showToastDanger() {
      show({
        position: "bottom-right",
        type: "danger",
        timeout: 2e3,
        title: "Attention!"
      });
    }
    async function showToastSuccess() {
      await show({
        position: "top-right",
        type: "success",
        title: "Successfully saved!",
        description: "Anyone with a link can now view this file."
      });
    }
    function showToastInfo() {
      show({
        position: "top-right",
        type: "info",
        title: "Notification Title",
        description: "This is the content of the notification"
      });
    }
    function showToastWarn() {
      show({
        position: "top-right",
        type: "warn",
        title: "Notification Title",
        description: "This is the content of the notification"
      });
    }
    async function showCustomNoti() {
      const result = await show(void 0, FriendRequesStory);
      show({
        position: "top-right",
        type: "info",
        title: "Notification Title",
        description: `Friend request ${result}`
      });
    }
    const __returned__ = { showToastDanger, showToastSuccess, showToastInfo, showToastWarn, showCustomNoti };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "mt-2 ml-2 flex flex-wrap space-x-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseButton = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Notification" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_BaseButton, {
          class: "bg-green-500",
          onClick: $setup.showToastSuccess
        }, {
          default: withCtx(() => [
            createTextVNode(" Success ")
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_BaseButton, {
          class: "bg-blue-500",
          onClick: $setup.showToastInfo
        }, {
          default: withCtx(() => [
            createTextVNode(" Info ")
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_BaseButton, {
          class: "bg-yellow-500",
          onClick: $setup.showToastWarn
        }, {
          default: withCtx(() => [
            createTextVNode(" Warning ")
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_BaseButton, {
          class: "bg-red-500",
          onClick: $setup.showToastDanger
        }, {
          default: withCtx(() => [
            createTextVNode(" Danger bottom-right ")
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_BaseButton, {
          class: "rounded-full bg-purple-500",
          onClick: $setup.showCustomNoti
        }, {
          default: withCtx(() => [
            createTextVNode(" Custom Notification ")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/notification/stories/Notification.story.vue";
const Notification_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/notification/stories/Notification.story.vue"]]);
export {
  Notification_story as default
};
