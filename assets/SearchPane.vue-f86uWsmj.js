const __vite__fileDeps=["assets/search-docs-data-gbqW_s5n.js","assets/vendor-BdBYoA5y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import { r as ref, k as watch, c as computed, d as defineComponent, o as openBlock, b as createElementBlock, a1 as renderSlot, n as normalizeClass, m as withKeys, q as createBlock, g as unref, I as Icon, e as createVNode, f as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, ae as toRefs, af as useRouter, w as withCtx, Y as markRaw, bu as useFocus, bv as refDebounced, y as withDirectives, a8 as vModelText, a7 as withModifiers, _ as __vitePreload, bw as flexsearch_bundleExports } from "./vendor-BdBYoA5y.js";
import { u as useStoryStore } from "./story-BLW2DcL4.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-CbV_3qOW.js";
import "./GenericMountStory.vue2-DSXYK5zS.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-CSB8Rn61.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.vue2-4s3mOCxt.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1,"99":1,"100":1,"101":1,"102":1,"103":1,"104":1,"105":1,"106":1,"107":1,"108":1,"109":1,"110":1,"111":1,"112":1,"113":1,"114":1,"115":1,"116":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"s":[0,1,2,54,55,56,57,58,59,60,61,62,63,64,65],"sp":[0,1,2],"spo":[0,1,2],"spot":[0,1,2],"spotl":[0,1,2],"spotle":[0,1,2],"spotlek":[0,1,2],"spotlekt":[0,1,2],"p":[3,4,5,6,7,8,9,10,14,15,16,17,18,19],"po":[3,4,5,6,7,8,9,10,14,15,16,17,18,19],"pot":[3,4,5,6,7,8,9,10,14,15,16,17,18,19],"poto":[3,4,5,6,7,8,9,10,14,15,16,17,18,19],"potom":[3,4,5,6,7,8,9,10,14,15,16,17,18,19],"k":[11,12,13,20,21,22,23,24,25,28,29,30,31,71,72,73,74,75,76,77,78],"kr":[11,12,13],"kre":[11,12,13],"kret":[11,12,13],"ke":[20,21,22,23,24,25],"kek":[20,21,22,23,24,25],"kekp":[20,21,22,23,24,25],"kekpo":[20,21,22,23,24,25],"kekpos":[20,21,22,23,24,25],"o":[26,27],"os":[26,27],"ose":[26,27],"ka":[28,29,30,31,74,75,76,77,78],"kar":[28,29,30,31,74,75,76,77,78],"karo":[28,29,30,31],"karos":[28,29,30,31],"karose":[28,29,30,31],"karosel":[28,29,30,31],"t":[32,33,34,35,66,67,68,69,70,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116],"ta":[32,33,66,67,68,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116],"tat":[32,33],"tata":[32,33],"tatat":[32,33],"tatata":[32,33],"tatatap":[32,33],"tatatapl":[32,33],"tatataple":[32,33],"tr":[34,35,89,90,91,92,93,94,95],"tro":[34,35],"trop":[34,35],"trops":[34,35],"tropso":[34,35],"tropsom":[34,35],"tropsome":[34,35],"e":[36,37,38,39,40,41,42],"es":[36,37,38,39,40],"esp":[36,37,38,39,40],"espa":[36,37,38,39,40],"espam":[36,37,38,39,40],"espamt":[36,37,38,39,40],"espamta":[36,37,38,39,40],"espamtap":[36,37,38,39,40],"espamtapl":[36,37,38,39,40],"espamtaple":[36,37,38,39,40],"em":[41,42],"emf":[41,42],"emfe":[41,42],"emfem":[41,42],"emfeme":[41,42],"emfemet":[41,42],"emfemete":[41,42],"m":[43,44,45,46,47,48,49,50,51,79,80,96,97],"ma":[43,44,45,46,47,48,49],"mar":[43,44,45,46,47,48,49],"mark":[43,44,45,46,47,48,49],"marko":[43,44,45,46,47,48,49],"mo":[50,51,79,80,96,97],"mot":[50,51,96,97],"mota":[50,51],"motal":[50,51],"r":[52,53],"re":[52,53],"rep":[52,53],"repo":[52,53],"repom":[52,53],"sk":[54,55],"ske":[54,55],"skel":[54,55],"skele":[54,55],"skelet":[54,55],"skeleto":[54,55],"skeletom":[54,55],"sl":[56,57],"sle":[56,57],"slet":[56,57],"slete":[56,57],"sleter":[56,57],"st":[58,59],"ste":[58,59],"step":[58,59],"steps":[58,59],"sf":[60,61,62,63,64,65],"sfe":[60,61,62,63,64,65],"sfet":[60,61,62,63,64,65],"sfetk":[60,61,62,63,64,65],"tap":[66,67,68],"tf":[69,70],"tfe":[69,70],"tfet":[69,70],"kl":[71,72,73],"klo":[71,72,73],"klof":[71,72,73],"klofe":[71,72,73],"klofem":[71,72,73],"klofemk":[71,72,73],"kart":[74,75,76,77,78],"karts":[74,75,76,77,78],"mos":[79,80],"mose":[79,80],"te":[81,82,83,84,85,86,87,88],"tes":[81,82,83,84,85,86,87,88],"test":[81,82,83,84,85,86,87,88],"tra":[89,90,91,92,93,94,95],"trak":[89,90,91,92,93,94,95],"mote":[96,97],"motef":[96,97],"motefe":[96,97],"motefek":[96,97],"motefeka":[96,97],"motefekat":[96,97],"motefekate":[96,97],"motefekateo":[96,97],"motefekateom":[96,97],"f":[98],"fr":[98],"fra":[98],"frap":[98],"frape":[98],"fraper":[98],"l":[99],"la":[99],"las":[99],"lase":[99],"tal":[100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116],"talf":[100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116],"talfe":[100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116],"talfem":[100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116],"talfemt":[100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116]},{"3":[75],"k":[0,1,2,5,6,7,9,41,42,62,64,82,87],"ka":[0,1,2],"kar":[0,1,2],"kart":[0,1,2],"pol":[4],"pols":[4],"polse":[4],"kr":[5,6,7,82],"kra":[5,6,82],"krat":[5,6,82],"krate":[5,6,82],"kratem":[5,6,82],"kratemt":[5,6,82],"kre":[7],"kret":[7],"t":[8,11,12,13,16,23,25,51,53,55,59,65,97],"to":[8],"tof":[8],"tofm":[8],"tofml":[8],"tofmlo":[8],"tofmloa":[8],"tofmloat":[8],"kl":[9],"klo":[9],"klof":[9],"r":[10,39,40,47,49,86],"ra":[10],"ram":[10],"ramp":[10],"rampo":[10],"rampof":[10],"tr":[11,12,13,111],"tra":[11,12,13],"trak":[11,12,13],"l":[15,30,63,78,89,90,91,109,110],"lo":[15],"loa":[15],"loat":[15],"loate":[15],"loatem":[15],"loatemk":[15],"te":[16,33,35,51,53,55,59,65,97,102],"tes":[16,65,102],"tesa":[16,65],"tesap":[16,65],"tesapl":[16,65],"tesaple":[16,65],"tesaplet":[16,65],"a":[17,26,27,83],"ar":[17],"are":[17],"area":[17],"m":[18,61,68,76,85,105],"mo":[18,45,46,48,61,76],"mor":[18,46,48,61],"morm":[18,46,48,61],"morma":[18,46,48,61],"mormal":[18,46,48,61],"o":[19,38,77],"ot":[19],"ote":[19],"oter":[19],"oters":[19],"p":[21,22,24,67,69,70,71,72,73,80,101,103,104,112,113],"pl":[21,80],"pla":[21],"plam":[21],"pa":[22,24,71,72,73,101,104],"pas":[22,24],"pase":[22,24],"ta":[23,25],"tap":[23,25],"tapl":[23,25],"taple":[23,25],"ak":[26,27],"akt":[26,27],"akte":[26,27],"aktef":[26,27],"aktefe":[26,27],"ko":[29,41,42,62,64],"kom":[29,41,42],"komo":[29],"komom":[29],"le":[30,78,89,90,91,109,110],"les":[30,89,90,91],"lest":[30,89,90,91],"kal":[31],"kale":[31],"kaler":[31],"kalere":[31],"tef":[33,35,51,53,55,59,97],"tefa":[33,35,51,53,55,59,97],"tefao":[33,35,51,53,55,59,97],"tefaol":[33,35,51,53,55,59,97],"tefaolt":[33,35,51,53,55,59,97],"f":[37,44,57,106,107,108,114,116],"fe":[37,44,114],"fer":[37],"fert":[37],"ferte":[37],"fertek":[37],"ferteka":[37],"fertekal":[37],"or":[38],"ore":[38],"ores":[38],"oreso":[38],"oresom":[38],"oresomt":[38],"oresomta":[38],"oresomtal":[38],"re":[39,40,47,49],"res":[39,40],"rese":[39,40],"reses":[39,40],"resesa":[39,40],"resesap":[39,40],"resesapl":[39,40],"resesaple":[39,40],"komt":[41,42],"komte":[41,42],"komtem":[41,42],"komtemt":[41,42],"fea":[44],"feat":[44],"feato":[44],"feator":[44],"featore":[44],"featores":[44],"ref":[47,49],"refe":[47,49],"refer":[47,49],"refers":[47,49],"referse":[47,49],"fr":[57],"fro":[57],"from":[57],"kos":[62,64],"kost":[62,64],"kosto":[62,64],"kostom":[62,64],"la":[63],"lap":[63],"lape":[63],"lapel":[63],"po":[67,69,70,103,112,113],"por":[67,103,112,113],"port":[67,103,112,113],"porte":[67,103,112,113],"porter":[67,103,112,113],"portere":[67],"porteret":[67],"ma":[68,85,105],"maf":[68],"mafe":[68],"mafek":[68],"mafeka":[68],"mafekat":[68],"mafekate":[68],"mafekateo":[68],"mafekateom":[68],"pos":[69,70],"pak":[71,72,73,101],"pakr":[71,72,73,101],"pakro":[71,72,73,101],"pakrom":[71,72,73,101],"pakromt":[71,72,73,101],"3t":[75],"mom":[76],"momp":[76],"mompe":[76],"momper":[76],"of":[77],"ofe":[77],"ofer":[77],"lem":[78,110],"leme":[78,110],"lemea":[78],"lemear":[78],"plo":[80],"plop":[80],"am":[83],"ame":[83],"amem":[83],"amema":[83],"amemat":[83],"amemate":[83],"amematet":[83],"s":[84,92,93,94,95],"sl":[84],"sle":[84],"slet":[84],"slete":[84],"mak":[85],"make":[85],"makek":[85],"ro":[86],"rot":[86],"rota":[86],"rotat":[86],"rotate":[86],"ke":[87],"ker":[87],"kerk":[87],"kerkl":[87],"kerkle":[87],"tep":[88],"tepe":[88],"tepef":[88],"tepefr":[88],"tepefre":[88],"tepefret":[88],"tepefrete":[88],"tepefreter":[88],"se":[92,93,94,95],"sem":[92,93,94,95],"semk":[92,93,94,95],"semkl":[92,93,94,95],"semkle":[92,93,94,95],"test":[102],"pat":[104],"pate":[104],"patem":[104],"patemk":[104],"mar":[105],"mark":[105],"marke":[105],"markem":[105],"fo":[106,107,108,116],"fom":[106,107,108],"fomt":[106,107,108],"let":[109],"lete":[109],"leter":[109],"tro":[111],"trop":[111],"fet":[114],"e":[115],"ek":[115],"ekt":[115],"fol":[116]},{"o":[1,42,76,78,84],"of":[1,76,78],"ofe":[1,78],"ofer":[1,78],"oferl":[1],"oferla":[1],"t":[2,7,17,40,72,73],"te":[2,17,40,70,72,90,94],"tem":[2,90,94],"tema":[2,94],"temam":[2,94],"temame":[2,94],"temamek":[2,94],"temameka":[2],"temamekal":[2],"temamekale":[2],"por":[5],"port":[5],"porte":[5],"porter":[5],"s":[6,15,23,25,106,109,111],"sa":[6,111],"sat":[6,111],"sato":[6,111],"satof":[6,111],"tr":[7],"tra":[7],"trak":[7],"e":[9,21,57,110],"ef":[9],"efe":[9],"efek":[9],"efekt":[9],"k":[10,45,83,101,102,103,116],"kr":[10,83],"kra":[10,83],"krat":[10,83],"krate":[10,83],"kratem":[10,83],"kratemt":[10,83],"l":[12,16],"le":[12],"lef":[12],"left":[12],"r":[13,48,95,112],"re":[13,95],"rek":[13],"rekt":[13],"sm":[15],"lk":[16],"tes":[17,40],"tesa":[17],"tesap":[17],"tesapl":[17],"tesaple":[17],"tesaplet":[17],"em":[21],"emp":[21],"empo":[21],"empot":[21],"se":[23,25,106],"sel":[23,25],"sele":[23,25],"selek":[23,25],"selekt":[23,25],"selekte":[23,25],"selekteo":[23,25],"selekteom":[23,25],"am":[26,27],"amk":[26,27],"amko":[26,27],"amkor":[26,27],"p":[39,77],"pa":[39],"pam":[39],"pame":[39],"pamel":[39],"test":[40],"om":[42],"omt":[42],"omte":[42],"omtet":[42],"omtetl":[42],"omtetle":[42],"omtetlet":[42],"ka":[45],"kap":[45],"rt":[48,49],"rtl":[48,49],"eo":[57],"eos":[57],"eos1":[57],"eos16":[57],"f":[62,63,113],"fe":[62,63,107,113],"fet":[62,63,113],"kol":[64,101,102,103],"kolo":[64,101,102,103],"kolor":[64,101,102,103],"taps":[67,68],"tef":[70],"tefa":[70],"tefao":[70],"tefaol":[70],"tefaolt":[70],"tet":[72],"tetl":[72],"ta":[73],"tar":[73],"tark":[73],"po":[77],"pop":[77],"popl":[77],"pople":[77],"op":[84],"temo":[90],"tre":[91],"trel":[91],"trelo":[91],"res":[95],"rest":[95],"restr":[95],"restre":[95],"restrek":[95],"restrekt":[95],"ko":[101,102,103,116],"ses":[106],"sese":[106],"fek":[107],"fekt":[107],"fa":[108],"fam":[108],"fame":[108],"famel":[108],"famele":[108],"sp":[109],"spa":[109],"spak":[109],"spake":[109],"spakem":[109],"spakemk":[109],"ek":[110],"ekt":[110],"ra":[112],"rat":[112],"rate":[112],"rateo":[112],"rateos":[112],"kom":[116],"komf":[116],"komfe":[116],"komfek":[116]},{"e":[1,93],"ek":[1],"ekl":[1],"ekle":[1],"eklek":[1],"eklekt":[1],"ko":[2,45],"kol":[2],"kolo":[2],"kolor":[2],"kolore":[2],"koloret":[2],"to":[12,13],"m":[24,25],"mo":[24,25],"mot":[24,25],"mote":[24,25],"moteo":[24,25],"moteom":[24,25],"t":[27],"te":[27],"tef":[27],"tefa":[27],"tefao":[27],"tefaol":[27],"tefaolt":[27],"kos":[45],"kost":[45],"kosto":[45],"kostom":[45],"so":[62],"sof":[62],"r":[63],"rt":[63],"rtl":[63],"se":[64],"ses":[64],"sese":[64],"l":[76],"le":[76],"lem":[76],"leme":[76],"lemes":[76],"k":[91],"kl":[91],"klo":[91],"klom":[91],"klome":[91],"em":[93],"ema":[93],"emak":[93],"emake":[93],"tro":[95],"trop":[95]},{"p":[2],"po":[2],"por":[2],"port":[2],"porte":[2],"porter":[2],"r":[12],"re":[12],"rek":[12],"rekt":[12],"l":[13,62,64],"le":[13],"lef":[13],"left":[13],"a":[45],"am":[45],"ame":[45],"amem":[45],"amema":[45],"amemat":[45],"amemate":[45],"amemateo":[45],"amemateom":[45],"la":[62,64],"lap":[62,64],"lape":[62,64],"lapel":[62,64],"o":[93],"om":[93],"e":[94],"em":[94],"ema":[94],"emak":[94],"emake":[94],"f":[95],"fa":[95],"fal":[95],"falo":[95]},{"fem":[62],"tro":[93],"trop":[93]},{"ke":[62],"kek":[62],"keke":[62],"keket":[62]},{"o":[62],"om":[62],"oml":[62],"omle":[62]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-features-spotlightcard-story-vue", "kind": "story" }, "1": { "id": "components-features-spotlightcard-story-vue:components-features-spotlightcard-story-vue-0", "kind": "variant" }, "2": { "id": "components-features-spotlightcard-story-vue:components-features-spotlightcard-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "4": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "5": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "6": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "7": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-3", "kind": "variant" }, "8": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-4", "kind": "variant" }, "9": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-5", "kind": "variant" }, "10": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-6", "kind": "variant" }, "11": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "12": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "13": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "14": { "id": "components-base-button-button-story-vue", "kind": "story" }, "15": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "16": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "17": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "18": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "19": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "20": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "21": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "22": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "23": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "24": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-3", "kind": "variant" }, "25": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-4", "kind": "variant" }, "26": { "id": "components-compose-active-anchor-index-story-vue", "kind": "story" }, "27": { "id": "components-compose-active-anchor-index-story-vue:_default", "kind": "variant" }, "28": { "id": "components-custom-carousel-carousel-story-vue", "kind": "story" }, "29": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-0", "kind": "variant" }, "30": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-1", "kind": "variant" }, "31": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-2", "kind": "variant" }, "32": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "33": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "34": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "35": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "36": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "37": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "38": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "39": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "40": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "41": { "id": "components-custom-infinite-content-infinitecontent-story-vue", "kind": "story" }, "42": { "id": "components-custom-infinite-content-infinitecontent-story-vue:components-custom-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "43": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "44": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "45": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "46": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "47": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "48": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "49": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-5", "kind": "variant" }, "50": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "51": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "52": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "53": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "54": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "55": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "56": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "57": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "58": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "59": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "60": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "61": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "62": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "63": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "64": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "65": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "66": { "id": "components-custom-tab-tab-story-vue", "kind": "story" }, "67": { "id": "components-custom-tab-tab-story-vue:components-custom-tab-tab-story-vue-0", "kind": "variant" }, "68": { "id": "components-custom-tab-tab-story-vue:components-custom-tab-tab-story-vue-1", "kind": "variant" }, "69": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "70": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "71": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "72": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "73": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-1", "kind": "variant" }, "74": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "75": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "76": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "77": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "78": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-3", "kind": "variant" }, "79": { "id": "components-tailwind-mouse-mouse-story-vue", "kind": "story" }, "80": { "id": "components-tailwind-mouse-mouse-story-vue:components-tailwind-mouse-mouse-story-vue-0", "kind": "variant" }, "81": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "82": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "83": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "84": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "85": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-3", "kind": "variant" }, "86": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-4", "kind": "variant" }, "87": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-5", "kind": "variant" }, "88": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-6", "kind": "variant" }, "89": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "90": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "91": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "92": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "93": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "94": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "95": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "96": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "97": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "98": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "99": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "100": { "id": "tailwind", "kind": "story" }, "101": { "id": "tailwind:background-color", "kind": "variant" }, "102": { "id": "tailwind:text-color", "kind": "variant" }, "103": { "id": "tailwind:border-color", "kind": "variant" }, "104": { "id": "tailwind:padding", "kind": "variant" }, "105": { "id": "tailwind:margin", "kind": "variant" }, "106": { "id": "tailwind:font-size", "kind": "variant" }, "107": { "id": "tailwind:font-weight", "kind": "variant" }, "108": { "id": "tailwind:font-family", "kind": "variant" }, "109": { "id": "tailwind:letter-spacing", "kind": "variant" }, "110": { "id": "tailwind:line-height", "kind": "variant" }, "111": { "id": "tailwind:drop-shadow", "kind": "variant" }, "112": { "id": "tailwind:border-radius", "kind": "variant" }, "113": { "id": "tailwind:border-width", "kind": "variant" }, "114": { "id": "tailwind:width", "kind": "variant" }, "115": { "id": "tailwind:height", "kind": "variant" }, "116": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-gbqW_s5n.js"), true ? __vite__mapDeps([0,1]) : void 0);
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
