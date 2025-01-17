const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-docs-data-MpmyCvd2.js","assets/vendor-CMJc4gfg.js"])))=>i.map(i=>d[i]);
import { r as ref, k as watch, c as computed, d as defineComponent, o as openBlock, b as createElementBlock, a1 as renderSlot, n as normalizeClass, m as withKeys, q as createBlock, g as unref, I as Icon, e as createVNode, f as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, ae as toRefs, af as useRouter, w as withCtx, Y as markRaw, bA as useFocus, bB as refDebounced, y as withDirectives, a8 as vModelText, a7 as withModifiers, _ as __vitePreload, bC as flexsearch_bundleExports } from "./vendor-CMJc4gfg.js";
import { u as useStoryStore } from "./story-oWJy8UA5.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-CUFICj9q.js";
import "./GenericMountStory.vue2-3G2Lxk-5.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-DCYuIyFq.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.vue2-BwN3aY4d.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[àáâãäå]"), regex_e = regex("[èéêë]"), regex_i = regex("[ìíîï]"), regex_o = regex("[òóôõöő]"), regex_u = regex("[ùúûüű]"), regex_y = regex("[ýŷÿ]"), regex_n = regex("ñ"), regex_c = regex("[çc]"), regex_s = regex("ß"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", ß: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
const charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
const language = { filter, stemmer, matcher };
function useSelection(list) {
  const selectedIndex = ref(0);
  watch(list, () => {
    selectedIndex.value = 0;
  });
  function selectNext() {
    selectedIndex.value++;
    if (selectedIndex.value > list.value.length - 1) {
      selectedIndex.value = 0;
    }
  }
  function selectPrevious() {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = list.value.length - 1;
    }
  }
  return {
    selectedIndex: computed(() => selectedIndex.value),
    selectNext,
    selectPrevious
  };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          _ctx.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleNavigate()),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => handleNavigate(), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => handleNavigate(), ["space"]))
        ]
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
const _hoisted_1$3 = ["src", "alt"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return isUrl.value ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: _ctx.icon,
        alt: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});
const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2114f510"]]);
const _hoisted_1$2 = { class: "htw-flex-1" };
const _hoisted_2 = { class: "htw-flex" };
const _hoisted_3 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_4 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchItemContent",
  props: {
    result: {},
    selected: { type: Boolean }
  },
  setup(__props) {
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant",
      command: "Command"
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseIcon, {
          icon: _ctx.result.icon ?? defaultIcons[_ctx.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !_ctx.selected ? [
              _ctx.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": _ctx.result.kind === "story",
                "htw-text-gray-500": _ctx.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": _ctx.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(_ctx.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[_ctx.result.kind]), 1)
          ]),
          ((_a = _ctx.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.result.path, (p, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "htw-flex htw-items-center htw-gap-0.5"
              }, [
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "carbon:chevron-right",
                  class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                })) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(p), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = ["data-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "ddaae392": __props.result.iconColor
    }));
    const props = __props;
    const emit = __emit;
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      action();
    });
    function action(fromClick = false) {
      if ("route" in props.result && !fromClick) {
        router.push(props.result.route);
      }
      if ("onActivate" in props.result) {
        props.result.onActivate();
      }
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        "route" in __props.result ? (openBlock(), createBlock(BaseListItemLink, {
          key: 0,
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["to", "is-active"])) : createCommentVNode("", true),
        "onActivate" in __props.result ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[1] || (_cache[1] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["is-active"])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d75a2748"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1,"99":1,"100":1,"101":1,"102":1,"103":1,"104":1,"105":1,"106":1,"107":1,"108":1,"109":1,"110":1,"111":1,"112":1,"113":1,"114":1,"115":1,"116":1,"117":1,"118":1,"119":1,"120":1,"121":1,"122":1,"123":1,"124":1,"125":1,"126":1,"127":1,"128":1,"129":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"s":[0,1,2,64,65,66,67,68,69,70,71,72,73,74,75],"sp":[0,1,2],"spo":[0,1,2],"spot":[0,1,2],"spotl":[0,1,2],"spotle":[0,1,2],"spotlek":[0,1,2],"spotlekt":[0,1,2],"p":[3,4,5,6,7,8,9,10,14,15,16,17,18,19,20,21],"po":[3,4,5,6,7,8,9,10,14,15,16,17,18,19,20,21],"pot":[3,4,5,6,7,8,9,10,14,15,16,17,18,19,20,21],"poto":[3,4,5,6,7,8,9,10,14,15,16,17,18,19,20,21],"potom":[3,4,5,6,7,8,9,10,14,15,16,17,18,19,20,21],"k":[11,12,13,22,23,24,25,26,27,30,31,32,33,84,85,86,87,88,89,90,91],"kr":[11,12,13],"kre":[11,12,13],"kret":[11,12,13],"ke":[22,23,24,25,26,27],"kek":[22,23,24,25,26,27],"kekp":[22,23,24,25,26,27],"kekpo":[22,23,24,25,26,27],"kekpos":[22,23,24,25,26,27],"o":[28,29],"os":[28,29],"ose":[28,29],"ka":[30,31,32,33,87,88,89,90,91],"kar":[30,31,32,33,87,88,89,90,91],"karo":[30,31,32,33],"karos":[30,31,32,33],"karose":[30,31,32,33],"karosel":[30,31,32,33],"t":[34,35,41,42,76,77,78,79,80,81,82,83,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129],"ta":[34,35,76,77,78,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129],"tat":[34,35],"tata":[34,35],"tatat":[34,35],"tatata":[34,35],"tatatap":[34,35],"tatatapl":[34,35],"tatataple":[34,35],"e":[36,37,38,39,40,46,47],"es":[36,37,38,39,40],"esp":[36,37,38,39,40],"espa":[36,37,38,39,40],"espam":[36,37,38,39,40],"espamt":[36,37,38,39,40],"espamta":[36,37,38,39,40],"espamtap":[36,37,38,39,40],"espamtapl":[36,37,38,39,40],"espamtaple":[36,37,38,39,40],"tr":[41,42,102,103,104,105,106,107,108],"tro":[41,42],"trop":[41,42],"trops":[41,42],"tropso":[41,42],"tropsom":[41,42],"tropsome":[41,42],"f":[43,44,45,111],"fe":[43,44,45],"fel":[43,44,45],"fele":[43,44,45],"em":[46,47],"emf":[46,47],"emfe":[46,47],"emfem":[46,47],"emfeme":[46,47],"emfemet":[46,47],"emfemete":[46,47],"m":[48,49,50,51,52,53,54,55,56,92,93,109,110],"ma":[48,49,50,51,52,53,54],"mar":[48,49,50,51,52,53,54],"mark":[48,49,50,51,52,53,54],"marko":[48,49,50,51,52,53,54],"mo":[55,56,92,93,109,110],"mot":[55,56,109,110],"mota":[55,56],"motal":[55,56],"r":[57,58,59,60,61,62,63],"re":[57,58,59,60,61,62,63],"res":[57,58,59,60,61],"rese":[57,58,59,60,61],"reses":[57,58,59,60,61],"resesa":[57,58,59,60,61],"resesap":[57,58,59,60,61],"resesapl":[57,58,59,60,61],"resesaple":[57,58,59,60,61],"rep":[62,63],"repo":[62,63],"repom":[62,63],"sk":[64,65],"ske":[64,65],"skel":[64,65],"skele":[64,65],"skelet":[64,65],"skeleto":[64,65],"skeletom":[64,65],"sl":[66,67],"sle":[66,67],"slet":[66,67],"slete":[66,67],"sleter":[66,67],"st":[68,69],"ste":[68,69],"step":[68,69],"steps":[68,69],"sf":[70,71,72,73,74,75],"sfe":[70,71,72,73,74,75],"sfet":[70,71,72,73,74,75],"sfetk":[70,71,72,73,74,75],"tap":[76,77,78],"to":[79,80,81],"tok":[79,80,81],"tokl":[79,80,81],"tokle":[79,80,81],"tf":[82,83],"tfe":[82,83],"tfet":[82,83],"kl":[84,85,86],"klo":[84,85,86],"klof":[84,85,86],"klofe":[84,85,86],"klofem":[84,85,86],"klofemk":[84,85,86],"kart":[87,88,89,90,91],"karts":[87,88,89,90,91],"mos":[92,93],"mose":[92,93],"te":[94,95,96,97,98,99,100,101],"tes":[94,95,96,97,98,99,100,101],"test":[94,95,96,97,98,99,100,101],"tra":[102,103,104,105,106,107,108],"trak":[102,103,104,105,106,107,108],"mote":[109,110],"motef":[109,110],"motefe":[109,110],"motefek":[109,110],"motefeka":[109,110],"motefekat":[109,110],"motefekate":[109,110],"motefekateo":[109,110],"motefekateom":[109,110],"fr":[111],"fra":[111],"frap":[111],"frape":[111],"fraper":[111],"l":[112],"la":[112],"las":[112],"lase":[112],"tal":[113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129],"talf":[113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129],"talfe":[113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129],"talfem":[113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129],"talfemt":[113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129]},{"3":[88],"k":[0,1,2,5,6,7,9,46,47,72,74,95,100],"ka":[0,1,2],"kar":[0,1,2],"kart":[0,1,2],"pol":[4],"pols":[4],"polse":[4],"kr":[5,6,7,95],"kra":[5,6,95],"krat":[5,6,95],"krate":[5,6,95],"kratem":[5,6,95],"kratemt":[5,6,95],"kre":[7],"kret":[7],"t":[8,11,12,13,16,20,25,27,43,44,45,56,63,65,69,75,110],"to":[8,20],"tof":[8],"tofm":[8],"tofml":[8],"tofmlo":[8],"tofmloa":[8],"tofmloat":[8],"kl":[9],"klo":[9],"klof":[9],"r":[10,39,40,52,54,99],"ra":[10],"ram":[10],"ramp":[10],"rampo":[10],"rampof":[10],"tr":[11,12,13,43,44,45,124],"tra":[11,12,13],"trak":[11,12,13],"l":[15,32,73,91,102,103,104,122,123],"lo":[15],"loa":[15],"loat":[15],"loate":[15],"loatem":[15],"loatemk":[15],"te":[16,35,42,56,63,65,69,75,110,115],"tes":[16,75,115],"tesa":[16,75],"tesap":[16,75],"tesapl":[16,75],"tesaple":[16,75],"tesaplet":[16,75],"a":[17,28,29,96],"ar":[17],"are":[17],"area":[17],"m":[18,71,78,89,98,118],"mo":[18,50,51,53,71,89],"mor":[18,51,53,71],"morm":[18,51,53,71],"morma":[18,51,53,71],"mormal":[18,51,53,71],"e":[19,128],"et":[19],"ete":[19],"tok":[20],"tokl":[20],"tokle":[20],"o":[21,38,90],"ot":[21],"ote":[21],"oter":[21],"oters":[21],"p":[23,24,26,57,58,59,60,61,77,82,83,84,85,86,93,114,116,117,125,126],"pl":[23,93],"pla":[23],"plam":[23],"pa":[24,26,57,58,59,60,61,84,85,86,114,117],"pas":[24,26],"pase":[24,26],"ta":[25,27],"tap":[25,27],"tapl":[25,27],"taple":[25,27],"ak":[28,29],"akt":[28,29],"akte":[28,29],"aktef":[28,29],"aktefe":[28,29],"ko":[31,46,47,72,74],"kom":[31,46,47],"komo":[31],"komom":[31],"le":[32,91,102,103,104,122,123],"les":[32,102,103,104],"lest":[32,102,103,104],"kal":[33],"kale":[33],"kaler":[33],"kalere":[33],"tef":[35,42,56,63,65,69,110],"tefa":[35,42,56,63,65,69,110],"tefao":[35,42,56,63,65,69,110],"tefaol":[35,42,56,63,65,69,110],"tefaolt":[35,42,56,63,65,69,110],"f":[37,49,67,119,120,121,127,129],"fe":[37,49,127],"fer":[37],"fert":[37],"ferte":[37],"fertek":[37],"ferteka":[37],"fertekal":[37],"or":[38],"ore":[38],"ores":[38],"oreso":[38],"oresom":[38],"oresomt":[38],"oresomta":[38],"oresomtal":[38],"re":[39,40,52,54],"res":[39,40],"rese":[39,40],"reses":[39,40],"resesa":[39,40],"resesap":[39,40],"resesapl":[39,40],"resesaple":[39,40],"tre":[43,44,45],"komt":[46,47],"komte":[46,47],"komtem":[46,47],"komtemt":[46,47],"fea":[49],"feat":[49],"feato":[49],"feator":[49],"featore":[49],"featores":[49],"ref":[52,54],"refe":[52,54],"refer":[52,54],"refers":[52,54],"referse":[52,54],"pam":[57,58,59,60,61],"pame":[57,58,59,60,61],"pamel":[57,58,59,60,61],"pamels":[57,58,59,60,61],"fr":[67],"fro":[67],"from":[67],"kos":[72,74],"kost":[72,74],"kosto":[72,74],"kostom":[72,74],"la":[73],"lap":[73],"lape":[73],"lapel":[73],"po":[77,82,83,116,125,126],"por":[77,116,125,126],"port":[77,116,125,126],"porte":[77,116,125,126],"porter":[77,116,125,126],"portere":[77],"porteret":[77],"ma":[78,98,118],"maf":[78],"mafe":[78],"mafek":[78],"mafeka":[78],"mafekat":[78],"mafekate":[78],"mafekateo":[78],"mafekateom":[78],"s":[79,80,81,97,105,106,107,108],"sf":[79,80,81],"sfa":[79,80,81],"sfap":[79,80,81],"pos":[82,83],"pak":[84,85,86,114],"pakr":[84,85,86,114],"pakro":[84,85,86,114],"pakrom":[84,85,86,114],"pakromt":[84,85,86,114],"3t":[88],"mom":[89],"momp":[89],"mompe":[89],"momper":[89],"of":[90],"ofe":[90],"ofer":[90],"lem":[91,123],"leme":[91,123],"lemea":[91],"lemear":[91],"plo":[93],"plop":[93],"am":[96],"ame":[96],"amem":[96],"amema":[96],"amemat":[96],"amemate":[96],"amematet":[96],"sl":[97],"sle":[97],"slet":[97],"slete":[97],"mak":[98],"make":[98],"makek":[98],"ro":[99],"rot":[99],"rota":[99],"rotat":[99],"rotate":[99],"ke":[100],"ker":[100],"kerk":[100],"kerkl":[100],"kerkle":[100],"tep":[101],"tepe":[101],"tepef":[101],"tepefr":[101],"tepefre":[101],"tepefret":[101],"tepefrete":[101],"tepefreter":[101],"se":[105,106,107,108],"sem":[105,106,107,108],"semk":[105,106,107,108],"semkl":[105,106,107,108],"semkle":[105,106,107,108],"test":[115],"pat":[117],"pate":[117],"patem":[117],"patemk":[117],"mar":[118],"mark":[118],"marke":[118],"markem":[118],"fo":[119,120,121,129],"fom":[119,120,121],"fomt":[119,120,121],"let":[122],"lete":[122],"leter":[122],"tro":[124],"trop":[124],"fet":[127],"ek":[128],"ekt":[128],"fol":[129]},{"o":[1,47,58,89,91,97],"of":[1,89,91],"ofe":[1,91],"ofer":[1,91],"oferl":[1],"oferla":[1],"t":[2,7,17,40,61,85,86],"te":[2,17,40,83,85,103,107],"tem":[2,103,107],"tema":[2,107],"temam":[2,107],"temame":[2,107],"temamek":[2,107],"temameka":[2],"temamekal":[2],"temamekale":[2],"por":[5],"port":[5],"porte":[5],"porter":[5],"s":[6,15,19,25,27,119,122,124],"sa":[6,124],"sat":[6,124],"sato":[6,124],"satof":[6,124],"tr":[7],"tra":[7],"trak":[7],"e":[9,23,44,45,67,123],"ef":[9],"efe":[9],"efek":[9],"efekt":[9],"k":[10,50,96,114,115,116,129],"kr":[10,96],"kra":[10,96],"krat":[10,96],"krate":[10,96],"kratem":[10,96],"kratemt":[10,96],"l":[12,16],"le":[12],"lef":[12],"left":[12],"r":[13,53,108,125],"re":[13,108],"rek":[13],"rekt":[13],"sm":[15],"lk":[16],"tes":[17,40],"tesa":[17],"tesap":[17],"tesapl":[17],"tesaple":[17],"tesaplet":[17],"st":[19],"sta":[19],"stat":[19],"stato":[19],"statos":[19],"em":[23],"emp":[23],"empo":[23],"empot":[23],"se":[25,27,119],"sel":[25,27],"sele":[25,27],"selek":[25,27],"selekt":[25,27],"selekte":[25,27],"selekteo":[25,27],"selekteom":[25,27],"am":[28,29],"amk":[28,29],"amko":[28,29],"amkor":[28,29],"p":[39,79,80,81,90],"pa":[39],"pam":[39],"pame":[39],"pamel":[39],"test":[40],"es":[44,45],"esa":[44,45],"esam":[44,45],"esamp":[44,45],"esampl":[44,45],"esample":[44,45],"om":[47],"omt":[47],"omte":[47],"omtet":[47],"omtetl":[47],"omtetle":[47],"omtetlet":[47],"ka":[50],"kap":[50],"rt":[53,54],"rtl":[53,54],"or":[58],"ore":[58],"ores":[58],"oreso":[58],"oresom":[58],"oresomt":[58],"oresomta":[58],"oresomtal":[58],"f":[59,72,73,126],"fe":[59,72,73,120,126],"fer":[59],"fert":[59],"ferte":[59],"fertek":[59],"ferteka":[59],"fertekal":[59],"m":[60],"me":[60],"mes":[60],"mest":[60],"meste":[60],"mestet":[60],"ta":[61,86],"tap":[61],"tapl":[61],"taple":[61],"eo":[67],"eos":[67],"eos1":[67],"eos16":[67],"fet":[72,73,126],"kol":[74,114,115,116],"kolo":[74,114,115,116],"kolor":[74,114,115,116],"taps":[77,78],"po":[79,80,81,90],"pot":[79,80,81],"poto":[79,80,81],"potom":[79,80,81],"tef":[83],"tefa":[83],"tefao":[83],"tefaol":[83],"tefaolt":[83],"tet":[85],"tetl":[85],"tar":[86],"tark":[86],"pop":[90],"popl":[90],"pople":[90],"op":[97],"temo":[103],"tre":[104],"trel":[104],"trelo":[104],"res":[108],"rest":[108],"restr":[108],"restre":[108],"restrek":[108],"restrekt":[108],"ko":[114,115,116,129],"ses":[119],"sese":[119],"fek":[120],"fekt":[120],"fa":[121],"fam":[121],"fame":[121],"famel":[121],"famele":[121],"sp":[122],"spa":[122],"spak":[122],"spake":[122],"spakem":[122],"spakemk":[122],"ek":[123],"ekt":[123],"ra":[125],"rat":[125],"rate":[125],"rateo":[125],"rateos":[125],"kom":[129],"komf":[129],"komfe":[129],"komfek":[129]},{"1":[44],"2":[45],"e":[1,106],"ek":[1],"ekl":[1],"ekle":[1],"eklek":[1],"eklekt":[1],"ko":[2,19,50,61],"kol":[2,61],"kolo":[2,61],"kolor":[2],"kolore":[2],"koloret":[2],"to":[12,13],"k":[19,61,104],"kom":[19],"komt":[19],"komte":[19],"komtem":[19],"komtemt":[19],"m":[26,27],"mo":[26,27],"mot":[26,27],"mote":[26,27],"moteo":[26,27],"moteom":[26,27],"t":[29],"te":[29],"tef":[29],"tefa":[29],"tefao":[29],"tefaol":[29],"tefaolt":[29],"kos":[50],"kost":[50],"kosto":[50],"kostom":[50],"l":[60,89],"la":[60],"lao":[60],"laot":[60],"kolom":[61],"koloms":[61],"so":[72],"sof":[72],"r":[73],"rt":[73],"rtl":[73],"se":[74],"ses":[74],"sese":[74],"le":[89],"lem":[89],"leme":[89],"lemes":[89],"kl":[104],"klo":[104],"klom":[104],"klome":[104],"em":[106],"ema":[106],"emak":[106],"emake":[106],"tro":[108],"trop":[108]},{"p":[2],"po":[2],"por":[2],"port":[2],"porte":[2],"porter":[2],"r":[12],"re":[12],"rek":[12],"rekt":[12],"l":[13,61,72,74],"le":[13],"lef":[13],"left":[13],"a":[50],"am":[50],"ame":[50],"amem":[50],"amema":[50],"amemat":[50],"amemate":[50],"amemateo":[50],"amemateom":[50],"la":[61,72,74],"las":[61],"lase":[61],"lap":[72,74],"lape":[72,74],"lapel":[72,74],"o":[106],"om":[106],"e":[107],"em":[107],"ema":[107],"emak":[107],"emake":[107],"f":[108],"fa":[108],"fal":[108],"falo":[108]},{"o":[61],"op":[61],"opt":[61],"opta":[61],"optat":[61],"optate":[61],"fem":[72],"tro":[106],"trop":[106]},{"ke":[72],"kek":[72],"keke":[72],"keket":[72]},{"o":[72],"om":[72],"oml":[72],"omle":[72]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-features-spotlightcard-story-vue", "kind": "story" }, "1": { "id": "components-features-spotlightcard-story-vue:components-features-spotlightcard-story-vue-0", "kind": "variant" }, "2": { "id": "components-features-spotlightcard-story-vue:components-features-spotlightcard-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "4": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "5": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "6": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "7": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-3", "kind": "variant" }, "8": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-4", "kind": "variant" }, "9": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-5", "kind": "variant" }, "10": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-6", "kind": "variant" }, "11": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "12": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "13": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "14": { "id": "components-base-button-button-story-vue", "kind": "story" }, "15": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "16": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "17": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "18": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "19": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "20": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-5", "kind": "variant" }, "21": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-6", "kind": "variant" }, "22": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "23": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "24": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "25": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "26": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-3", "kind": "variant" }, "27": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-4", "kind": "variant" }, "28": { "id": "components-compose-active-anchor-index-story-vue", "kind": "story" }, "29": { "id": "components-compose-active-anchor-index-story-vue:_default", "kind": "variant" }, "30": { "id": "components-custom-carousel-carousel-story-vue", "kind": "story" }, "31": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-0", "kind": "variant" }, "32": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-1", "kind": "variant" }, "33": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-2", "kind": "variant" }, "34": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "35": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "36": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "37": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "38": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "39": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "40": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "41": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "42": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "43": { "id": "components-custom-filetree-filetree-story-vue", "kind": "story" }, "44": { "id": "components-custom-filetree-filetree-story-vue:components-custom-filetree-filetree-story-vue-0", "kind": "variant" }, "45": { "id": "components-custom-filetree-filetree-story-vue:components-custom-filetree-filetree-story-vue-1", "kind": "variant" }, "46": { "id": "components-custom-infinite-content-infinitecontent-story-vue", "kind": "story" }, "47": { "id": "components-custom-infinite-content-infinitecontent-story-vue:components-custom-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "48": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "49": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "50": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "51": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "52": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "53": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "54": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-5", "kind": "variant" }, "55": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "56": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "57": { "id": "components-custom-panels-panel-story-vue", "kind": "story" }, "58": { "id": "components-custom-panels-panel-story-vue:components-custom-panels-panel-story-vue-0", "kind": "variant" }, "59": { "id": "components-custom-panels-panel-story-vue:components-custom-panels-panel-story-vue-1", "kind": "variant" }, "60": { "id": "components-custom-panels-panel-story-vue:components-custom-panels-panel-story-vue-2", "kind": "variant" }, "61": { "id": "components-custom-panels-panel-story-vue:components-custom-panels-panel-story-vue-3", "kind": "variant" }, "62": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "63": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "64": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "65": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "66": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "67": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "68": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "69": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "70": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "71": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "72": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "73": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "74": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "75": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "76": { "id": "components-custom-tab-tab-story-vue", "kind": "story" }, "77": { "id": "components-custom-tab-tab-story-vue:components-custom-tab-tab-story-vue-0", "kind": "variant" }, "78": { "id": "components-custom-tab-tab-story-vue:components-custom-tab-tab-story-vue-1", "kind": "variant" }, "79": { "id": "components-custom-toggle-button-togglebutton-story-vue", "kind": "story" }, "80": { "id": "components-custom-toggle-button-togglebutton-story-vue:components-custom-toggle-button-togglebutton-story-vue-0", "kind": "variant" }, "81": { "id": "components-custom-toggle-button-togglebutton-story-vue:components-custom-toggle-button-togglebutton-story-vue-1", "kind": "variant" }, "82": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "83": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "84": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "85": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "86": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-1", "kind": "variant" }, "87": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "88": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "89": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "90": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "91": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-3", "kind": "variant" }, "92": { "id": "components-tailwind-mouse-mouse-story-vue", "kind": "story" }, "93": { "id": "components-tailwind-mouse-mouse-story-vue:components-tailwind-mouse-mouse-story-vue-0", "kind": "variant" }, "94": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "95": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "96": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "97": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "98": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-3", "kind": "variant" }, "99": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-4", "kind": "variant" }, "100": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-5", "kind": "variant" }, "101": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-6", "kind": "variant" }, "102": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "103": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "104": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "105": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "106": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "107": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "108": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "109": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "110": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "111": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "112": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "113": { "id": "tailwind", "kind": "story" }, "114": { "id": "tailwind:background-color", "kind": "variant" }, "115": { "id": "tailwind:text-color", "kind": "variant" }, "116": { "id": "tailwind:border-color", "kind": "variant" }, "117": { "id": "tailwind:padding", "kind": "variant" }, "118": { "id": "tailwind:margin", "kind": "variant" }, "119": { "id": "tailwind:font-size", "kind": "variant" }, "120": { "id": "tailwind:font-weight", "kind": "variant" }, "121": { "id": "tailwind:font-family", "kind": "variant" }, "122": { "id": "tailwind:letter-spacing", "kind": "variant" }, "123": { "id": "tailwind:line-height", "kind": "variant" }, "124": { "id": "tailwind:drop-shadow", "kind": "variant" }, "125": { "id": "tailwind:border-radius", "kind": "variant" }, "126": { "id": "tailwind:border-width", "kind": "variant" }, "127": { "id": "tailwind:width", "kind": "variant" }, "128": { "id": "tailwind:height", "kind": "variant" }, "129": { "id": "tailwind:full-config", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-MpmyCvd2.js"), true ? __vite__mapDeps([0,1]) : void 0);
    const props = __props;
    const emit = __emit;
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundleExports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...story.file.path ?? [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const commandResults = computed(() => {
      return [];
    });
    useCommandStore();
    const results = computed(() => {
      const list = [
        ...commandResults.value,
        ...titleResults.value
      ];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const {
      selectedIndex,
      selectNext,
      selectPrevious
    } = useSelection(results);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(selectNext)(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(selectPrevious)(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !results.value.length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : results.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === unref(selectedIndex),
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
