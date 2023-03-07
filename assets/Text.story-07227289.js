import { au as openBlock, aA as createElementBlock, ay as pushScopeId, az as popScopeId, aw as createBaseVNode, aB as defineComponent, aW as onMounted, ax as createTextVNode, bd as createStaticVNode, ar as resolveComponent, as as createBlock, at as withCtx, av as createVNode } from "./vendor-51faf694.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const SlideUp_vue_vue_type_style_index_0_scoped_3d544dc9_lang = "";
const _sfc_main$3 = {};
const _withScopeId = (n) => (pushScopeId("data-v-3d544dc9"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "text-5xl" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "word" },
  "Explore ",
  -1
  /* HOISTED */
));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "word" },
  "CSS ",
  -1
  /* HOISTED */
));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "word" },
  "With ",
  -1
  /* HOISTED */
));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "word" },
  "Me",
  -1
  /* HOISTED */
));
const _hoisted_6 = [
  _hoisted_2$3,
  _hoisted_3$1,
  _hoisted_4$1,
  _hoisted_5
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("h2", _hoisted_1$3, _hoisted_6);
}
_sfc_main$3.__file = "components/tailwind/text/SlideUp.vue";
const SlideUp = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-3d544dc9"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/tailwind/text/SlideUp.vue"]]);
const Magic_vue_vue_type_style_index_0_scoped_22e917f2_lang = "";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Magic",
  setup(__props, { expose }) {
    expose();
    let index = 0;
    const interval = 1e3;
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const animate = (star) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
      star.style.animation = "none";
      star.offsetHeight;
      star.style.animation = "";
    };
    onMounted(() => {
      for (const star of document.getElementsByClassName("magic-star")) {
        setTimeout(() => {
          animate(star);
          setInterval(() => animate(star), 1e3);
        }, index++ * (interval / 3));
      }
    });
    const __returned__ = { get index() {
      return index;
    }, set index(v) {
      index = v;
    }, interval, rand, animate };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "bg-black" };
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<span class="magic" data-v-22e917f2><span class="magic-star" data-v-22e917f2><svg viewBox="0 0 512 512" data-v-22e917f2><path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" data-v-22e917f2></path></svg></span><span class="magic-star" data-v-22e917f2><svg viewBox="0 0 512 512" data-v-22e917f2><path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" data-v-22e917f2></path></svg></span><span class="magic-star" data-v-22e917f2><svg viewBox="0 0 512 512" data-v-22e917f2><path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" data-v-22e917f2></path></svg></span><span class="magic-text" data-v-22e917f2>don&#39;t even know</span></span>', 1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h1", _hoisted_1$2, [
    createTextVNode(" Sometimes I'll start a line of code and I "),
    _hoisted_2$2,
    createTextVNode(" where it's going. ")
  ]);
}
_sfc_main$2.__file = "components/tailwind/text/Magic.vue";
const Magic = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-22e917f2"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/tailwind/text/Magic.vue"]]);
const Rotate_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Rotate",
  setup(__props, { expose }) {
    expose();
    let words;
    const wordArray = [];
    let currentWord = 0;
    onMounted(() => {
      words = document.getElementsByClassName("word");
      words[currentWord].style.opacity = "1";
      for (let i = 0; i < words.length; i++) {
        splitLetters(words[i]);
      }
      changeWord();
      setInterval(changeWord, 4e3);
    });
    function changeWord() {
      const cw = wordArray[currentWord];
      const nw = currentWord === words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
      for (let i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }
      for (let i = 0; i < nw.length; i++) {
        nw[i].className = "letter behind";
        nw[0].parentElement.style.opacity = "1";
        animateLetterIn(nw, i);
      }
      currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
    }
    function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = "letter out";
      }, i * 80);
    }
    function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = "letter in";
      }, 340 + i * 80);
    }
    function splitLetters(word) {
      const content = word.innerHTML;
      word.innerHTML = "";
      const letters = [];
      for (let i = 0; i < content.length; i++) {
        const letter = document.createElement("span");
        letter.className = "letter";
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      wordArray.push(letters);
    }
    const __returned__ = { get words() {
      return words;
    }, set words(v) {
      words = v;
    }, wordArray, get currentWord() {
      return currentWord;
    }, set currentWord(v) {
      currentWord = v;
    }, changeWord, animateLetterOut, animateLetterIn, splitLetters };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "text-4xl font-bold text-white" };
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<p class="inline-block">You are </p><p class="inline-block align-top"><span class="word wisteria">wonderful.</span><span class="word pomegranate">magical.</span><span class="word belize">bold.</span><span class="word green">beautiful.</span><span class="word midnight">fun.</span></p>', 2);
const _hoisted_4 = [
  _hoisted_2$1
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_4);
}
_sfc_main$1.__file = "components/tailwind/text/Rotate.vue";
const Rotate = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/tailwind/text/Rotate.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Text.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { SlideUp, Magic, Rotate };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  {
    style: { "--color-one": "#42d392", "--color-two": "#647eff" },
    class: "gradient-text py-2 text-5xl font-bold"
  },
  " The Progressive JavaScript Framework ",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  {
    style: { "--animated-gradient-color-one": "#42d392", "--animated-gradient-color-two": "#647eff" },
    class: "animated-gradient-text py-2 text-5xl font-bold"
  },
  " The Progressive JavaScript Framework ",
  -1
  /* HOISTED */
);
const _hoisted_3 = { class: "py-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Text" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Gradient" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Animated Gradient" }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Slide Up" }, {
        default: withCtx(() => [
          createVNode($setup["SlideUp"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Magic" }, {
        default: withCtx(() => [
          createVNode($setup["Magic"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Rotate" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode($setup["Rotate"])
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
_sfc_main.__file = "components/tailwind/text/Text.story.vue";
const Text_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/tailwind/text/Text.story.vue"]]);
export {
  Text_story as default
};
