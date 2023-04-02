import { av as openBlock, aB as createElementBlock, az as pushScopeId, aA as popScopeId, ax as createBaseVNode, ar as defineComponent, aS as onMounted, ay as createTextVNode, aV as createStaticVNode, bm as useCssModule, aH as normalizeClass, aC as ref, at as createBlock, au as withCtx, aE as toDisplayString, aI as resolveDynamicComponent, as as resolveComponent, aw as createVNode } from "./vendor-979af273.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const SlideUp_vue_vue_type_style_index_0_scoped_3d544dc9_lang = "";
const _sfc_main$5 = {};
const _withScopeId = (n) => (pushScopeId("data-v-3d544dc9"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "text-5xl" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "word" },
  "Explore ",
  -1
  /* HOISTED */
));
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "word" },
  "CSS ",
  -1
  /* HOISTED */
));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
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
  _hoisted_2$4,
  _hoisted_3$3,
  _hoisted_4,
  _hoisted_5
];
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("h2", _hoisted_1$4, _hoisted_6);
}
_sfc_main$5.__file = "components/tailwind/text/SlideUp.vue";
const SlideUp = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-3d544dc9"], ["__file", "D:/projects/my-components/components/tailwind/text/SlideUp.vue"]]);
const Magic_vue_vue_type_style_index_0_scoped_22e917f2_lang = "";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$3 = { class: "bg-black" };
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<span class="magic" data-v-22e917f2><span class="magic-star" data-v-22e917f2><svg viewBox="0 0 512 512" data-v-22e917f2><path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" data-v-22e917f2></path></svg></span><span class="magic-star" data-v-22e917f2><svg viewBox="0 0 512 512" data-v-22e917f2><path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" data-v-22e917f2></path></svg></span><span class="magic-star" data-v-22e917f2><svg viewBox="0 0 512 512" data-v-22e917f2><path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" data-v-22e917f2></path></svg></span><span class="magic-text" data-v-22e917f2>don&#39;t even know</span></span>', 1);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h1", _hoisted_1$3, [
    createTextVNode(" Sometimes I'll start a line of code and I "),
    _hoisted_2$3,
    createTextVNode(" where it's going. ")
  ]);
}
_sfc_main$4.__file = "components/tailwind/text/Magic.vue";
const Magic = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-22e917f2"], ["__file", "D:/projects/my-components/components/tailwind/text/Magic.vue"]]);
const word = "_word_1ixop_2";
const letter = "_letter_1ixop_7";
const out = "_out_1ixop_14";
const behind = "_behind_1ixop_19";
const wisteria = "_wisteria_1ixop_28";
const belize = "_belize_1ixop_32";
const pomegranate = "_pomegranate_1ixop_36";
const green = "_green_1ixop_40";
const midnight = "_midnight_1ixop_44";
const style0 = {
  word,
  letter,
  out,
  behind,
  "in": "_in_1ixop_23",
  wisteria,
  belize,
  pomegranate,
  green,
  midnight
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Rotate",
  setup(__props, { expose }) {
    expose();
    let words;
    const wordArray = [];
    let currentWord = 0;
    const classes = useCssModule("classes");
    onMounted(() => {
      words = document.getElementsByClassName(classes.word);
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
        nw[i].className = `${classes.letter} ${classes.behind}`;
        nw[0].parentElement.style.opacity = "1";
        animateLetterIn(nw, i);
      }
      currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
    }
    function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = `${classes.letter} ${classes.out}`;
      }, i * 80);
    }
    function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = `${classes.letter} ${classes.in}`;
      }, 340 + i * 80);
    }
    function splitLetters(word2) {
      const content = word2.innerHTML;
      word2.innerHTML = "";
      const letters = [];
      for (let i = 0; i < content.length; i++) {
        const letter2 = document.createElement("span");
        letter2.className = `${classes.letter}`;
        letter2.innerHTML = content.charAt(i);
        word2.appendChild(letter2);
        letters.push(letter2);
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
    }, classes, changeWord, animateLetterOut, animateLetterIn, splitLetters };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "text-4xl font-bold text-white" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "inline-block" },
  "You are ",
  -1
  /* HOISTED */
);
const _hoisted_3$2 = { class: "inline-block align-top" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    _hoisted_2$2,
    createBaseVNode("p", _hoisted_3$2, [
      createBaseVNode(
        "span",
        {
          class: normalizeClass([$setup.classes.word, $setup.classes.wisteria])
        },
        "wonderful.",
        2
        /* CLASS */
      ),
      createBaseVNode(
        "span",
        {
          class: normalizeClass([$setup.classes.word, $setup.classes.pomegranate])
        },
        "magical.",
        2
        /* CLASS */
      ),
      createBaseVNode(
        "span",
        {
          class: normalizeClass([$setup.classes.word, $setup.classes.belize])
        },
        "bold.",
        2
        /* CLASS */
      ),
      createBaseVNode(
        "span",
        {
          class: normalizeClass([$setup.classes.word, $setup.classes.green])
        },
        "beautiful.",
        2
        /* CLASS */
      ),
      createBaseVNode(
        "span",
        {
          class: normalizeClass([$setup.classes.word, $setup.classes.midnight])
        },
        "fun.",
        2
        /* CLASS */
      )
    ])
  ]);
}
const cssModules = {
  "classes": style0
};
_sfc_main$3.__file = "components/tailwind/text/Rotate.vue";
const Rotate = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__cssModules", cssModules], ["__file", "D:/projects/my-components/components/tailwind/text/Rotate.vue"]]);
const _sfc_main$2 = {};
const _hoisted_1$1 = { class: "font-bold" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 500 500"
  },
  [
    /* @__PURE__ */ createBaseVNode("defs", null, [
      /* @__PURE__ */ createBaseVNode("clipPath", { id: "imageClipPath" }, [
        /* @__PURE__ */ createBaseVNode("circle", {
          cx: "250",
          cy: "250",
          r: "120.05",
          fill: "#FFFFFF"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("path", {
        id: "textcircle1",
        class: "origin-center scale-[1.02]",
        d: "M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
      }),
      /* @__PURE__ */ createBaseVNode("path", {
        id: "textcircle2",
        class: "origin-center scale-[1.17]",
        d: "M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("linearGradient", {
      id: "text-gradient",
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%"
    }, [
      /* @__PURE__ */ createBaseVNode("stop", {
        "stop-color": "#42d392",
        offset: "10%"
      }),
      /* @__PURE__ */ createBaseVNode("stop", {
        "stop-color": "#647eff",
        offset: "90%"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("text", {
      class: "origin-center animate-spin text-2xl tracking-widest",
      style: { "animation-duration": "30s" },
      dy: "70",
      textLength: "1220",
      fill: "url(#text-gradient)"
    }, [
      /* @__PURE__ */ createBaseVNode("textPath", { "xlink:href": "#textcircle1" }, " Minh Anh Nguyen • Front-End Developer • ")
    ]),
    /* @__PURE__ */ createBaseVNode("text", {
      class: "gradient-text origin-center animate-spin text-2xl tracking-widest opacity-90",
      style: { "animation-duration": "25s", "animation-direction": "reverse" },
      dy: "70",
      textLength: "1220",
      fill: "url(#text-gradient)",
      "clip-path": "url(#textcircle2)"
    }, [
      /* @__PURE__ */ createBaseVNode("textPath", { "xlink:href": "#textcircle2" }, " HTML5 • CSS3 • TAILWINDCSS • TYPECRIPT • VUE • NUXT • VITEST • ")
    ]),
    /* @__PURE__ */ createBaseVNode("image", {
      href: "https://avatars.githubusercontent.com/u/20680172?v=4",
      "clip-path": "url(#imageClipPath)",
      width: "240",
      height: "240",
      x: "130",
      y: "130"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_3$1);
}
_sfc_main$2.__file = "components/tailwind/text/Circle.vue";
const Circle = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "D:/projects/my-components/components/tailwind/text/Circle.vue"]]);
const Typewriter_vue_vue_type_style_index_0_scoped_4c594d03_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Typewriter",
  props: {
    as: { type: String, required: false, default: "span" },
    text: { type: String, required: true },
    speed: { type: Number, required: false, default: 100 }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const result = ref("");
    let index = 0;
    let interval;
    onMounted(() => {
      interval = setInterval(() => {
        result.value += props.text[index];
        index++;
        if (index >= props.text.length) {
          clearInterval(interval);
        }
      }, props.speed);
    });
    const __returned__ = { props, result, get index() {
      return index;
    }, set index(v) {
      index = v;
    }, get interval() {
      return interval;
    }, set interval(v) {
      interval = v;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.as), { class: "typewriter" }, {
    default: withCtx(() => [
      createTextVNode(
        toDisplayString($setup.result),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main$1.__file = "components/tailwind/text/Typewriter.vue";
const Typewriter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-4c594d03"], ["__file", "D:/projects/my-components/components/tailwind/text/Typewriter.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Text.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { SlideUp, Magic, Rotate, Circle, Typewriter };
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
      }),
      createVNode(_component_Variant, { title: "Circle" }, {
        default: withCtx(() => [
          createVNode($setup["Circle"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Typewriter" }, {
        default: withCtx(() => [
          createVNode($setup["Typewriter"], {
            text: "Hello, my name is Kevin.",
            class: "text-xl font-semibold text-white"
          })
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
const Text_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/tailwind/text/Text.story.vue"]]);
export {
  Text_story as default
};
