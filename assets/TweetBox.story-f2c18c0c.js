import { az as defineComponent, aB as ref, aM as computed, aK as onMounted, au as openBlock, aD as createElementBlock, ay as createBaseVNode, aF as toDisplayString, aH as normalizeClass, ar as resolveComponent, as as createBlock, at as withCtx, av as createVNode } from "./vendor-d61fed03.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const TweetBox_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TweetBox",
  props: {
    limit: { type: Number, required: false, default: 40 },
    modelValue: { type: String, required: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const textareaRef = ref();
    const valueAllowed = computed(() => {
      return props.limit ? props.modelValue.slice(0, props.limit) : props.modelValue;
    });
    const valueExcess = computed(() => {
      return props.limit ? props.modelValue.slice(props.limit) : "";
    });
    const limitStatus = computed(() => {
      return props.modelValue.length / props.limit * 100;
    });
    const remainingCharacters = computed(() => {
      return props.limit - props.modelValue.length;
    });
    const textareaStyle = computed(() => {
      return getComputedStyle(textareaRef.value);
    });
    onMounted(() => {
      textareaGrow();
    });
    function updateValue(e) {
      textareaGrow();
      emit(`update:modelValue`, e.target.value);
    }
    function textareaGrow() {
      const paddingTop = parseInt(
        textareaStyle.value.getPropertyValue(`padding-top`),
        10
      );
      const paddingBottom = parseInt(
        textareaStyle.value.getPropertyValue(`padding-bottom`),
        10
      );
      const lineHeight = parseInt(
        textareaStyle.value.getPropertyValue(`line-height`),
        10
      );
      textareaRef.value.rows = 1;
      const innerHeight = textareaRef.value.scrollHeight - paddingTop - paddingBottom;
      textareaRef.value.rows = innerHeight / lineHeight;
    }
    const __returned__ = { props, emit, textareaRef, valueAllowed, valueExcess, limitStatus, remainingCharacters, textareaStyle, updateValue, textareaGrow };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "tweetbox__htmlarea",
  "aria-hidden": "true"
};
const _hoisted_2 = { class: "text-excess" };
const _hoisted_3 = ["value"];
const _hoisted_4 = { class: "tweetbox__limit" };
const _hoisted_5 = { class: "tweetbox__remainingCharacters" };
const _hoisted_6 = {
  class: "tweetbox__counter",
  viewBox: "0 0 33.83098862 33.83098862",
  height: "20",
  width: "20",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "circle",
  {
    class: "tweetbox__counterUnderlay",
    cx: "16.91549431",
    cy: "16.91549431",
    r: "15.91549431",
    fill: "none",
    "stroke-width": "2"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_8 = ["stroke-dasharray"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tweetbox", [
        {
          "has-exceeded-limit": $setup.limitStatus > 100
        }
      ]])
    },
    [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode(
          "span",
          null,
          toDisplayString($setup.valueAllowed),
          1
          /* TEXT */
        ),
        createBaseVNode(
          "span",
          _hoisted_2,
          toDisplayString($setup.valueExcess),
          1
          /* TEXT */
        )
      ]),
      createBaseVNode("textarea", {
        ref: "textareaRef",
        class: "tweetbox__textarea",
        value: $props.modelValue,
        rows: "1",
        onInput: $setup.updateValue
      }, null, 40, _hoisted_3),
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode(
          "span",
          _hoisted_5,
          toDisplayString($setup.remainingCharacters),
          1
          /* TEXT */
        ),
        (openBlock(), createElementBlock("svg", _hoisted_6, [
          _hoisted_7,
          createBaseVNode("circle", {
            class: "tweetbox__counterProgress",
            "stroke-dasharray": `${$setup.limitStatus},100`,
            cx: "16.91549431",
            cy: "16.91549431",
            r: "15.91549431",
            fill: "none",
            "stroke-width": "4"
          }, null, 8, _hoisted_8)
        ]))
      ])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "components/custom/tweetbox/TweetBox.vue";
const TweetBox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/tweetbox/TweetBox.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TweetBox.story",
  setup(__props, { expose }) {
    expose();
    const text = ref("");
    const __returned__ = { text, TweetBox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "TweetBox" }, {
    default: withCtx(() => [
      createVNode($setup["TweetBox"], {
        modelValue: $setup.text,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.text = $event)
      }, null, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/custom/tweetbox/TweetBox.story.vue";
const TweetBox_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/custom/tweetbox/TweetBox.story.vue"]]);
export {
  TweetBox_story as default
};
