import { _ as __vitePreload } from "./GenericMountStory.vue_vue_type_script_setup_true_lang.a9bd6adb.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, b0 as useFocus, f as watch, b1 as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, b2 as flexsearch_bundle } from "./vendor.aa0959a2.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main.119e2c36.js";
import { B as BaseEmpty } from "./BaseEmpty.2b89f4f5.js";
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
const regex_a = regex("[\xE0\xE1\xE2\xE3\xE4\xE5]"), regex_e = regex("[\xE8\xE9\xEA\xEB]"), regex_i = regex("[\xEC\xED\xEE\xEF]"), regex_o = regex("[\xF2\xF3\xF4\xF5\xF6\u0151]"), regex_u = regex("[\xF9\xFA\xFB\xFC\u0171]"), regex_y = regex("[\xFD\u0177\xFF]"), regex_n = regex("\xF1"), regex_c = regex("[\xE7c]"), regex_s = regex("\xDF"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", \u00DF: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
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
const _hoisted_1$1 = ["data-selected"];
const _hoisted_2 = { class: "htw-flex-1" };
const _hoisted_3 = { class: "htw-flex" };
const _hoisted_4 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_5 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
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
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "beebbd52": __props.result.iconColor
    }));
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      router.push(props.result.route);
      emit("close");
    });
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        createVNode(BaseListItemLink, {
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, {
          default: withCtx(() => {
            var _a, _b;
            return [
              createVNode(unref(Icon), {
                icon: (_a = __props.result.icon) != null ? _a : defaultIcons[__props.result.kind],
                class: normalizeClass(["htw-w-4 htw-h-4", [
                  !unref(selected) ? [
                    __props.result.iconColor ? "bind-icon-color" : {
                      "htw-text-primary-500": __props.result.kind === "story",
                      "htw-text-gray-500": __props.result.kind === "variant"
                    }
                  ] : []
                ]])
              }, null, 8, ["icon", "class"]),
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createTextVNode(toDisplayString(__props.result.title) + " ", 1),
                  createBaseVNode("span", _hoisted_4, toDisplayString(kindLabels[__props.result.kind]), 1)
                ]),
                ((_b = __props.result.path) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
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
            ];
          }),
          _: 1
        }, 8, ["to", "is-active"])
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d95fcb03"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"k":[0,1,2,3,4,5,23,24,25,26,27,28],"kr":[0,1,2],"kre":[0,1,2],"kret":[0,1,2],"ka":[3,4,5,25,26,27,28],"kar":[3,4,5,25,26,27,28],"karo":[3,4,5],"karos":[3,4,5],"karose":[3,4,5],"karosel":[3,4,5],"e":[6,7,8,9,10],"em":[6,7],"emf":[6,7],"emfe":[6,7],"emfem":[6,7],"emfeme":[6,7],"emfemet":[6,7],"emfemete":[6,7],"es":[8,9,10],"esp":[8,9,10],"espa":[8,9,10],"espam":[8,9,10],"espamt":[8,9,10],"espamta":[8,9,10],"espamtap":[8,9,10],"espamtapl":[8,9,10],"espamtaple":[8,9,10],"r":[11,12],"re":[11,12],"rep":[11,12],"repo":[11,12],"repom":[11,12],"s":[13,14,15,16,17,18,19,20],"st":[13,14],"ste":[13,14],"step":[13,14],"steps":[13,14],"sf":[15,16,17,18,19,20],"sfe":[15,16,17,18,19,20],"sfet":[15,16,17,18,19,20],"sfetk":[15,16,17,18,19,20],"t":[21,22,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"tf":[21,22],"tfe":[21,22],"tfet":[21,22],"kl":[23,24],"klo":[23,24],"klof":[23,24],"klofe":[23,24],"klofem":[23,24],"klofemk":[23,24],"kart":[25,26,27,28],"karts":[25,26,27,28],"ta":[29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"tal":[29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"talf":[29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"talfe":[29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"talfem":[29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"talfemt":[29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]},{"3":[26],"t":[0,1,2,12,14,20],"tr":[0,1,2,40],"tra":[0,1,2],"trak":[0,1,2],"ko":[4,6,7,17,19],"kom":[4,6,7],"komo":[4],"komom":[4],"l":[5,18,38,39],"le":[5,38,39],"les":[5],"lest":[5],"k":[6,7,17,19],"komt":[6,7],"komte":[6,7],"komtem":[6,7],"komtemt":[6,7],"f":[9,35,36,37,43,45],"fe":[9,43],"fer":[9],"fert":[9],"ferte":[9],"fertek":[9],"ferteka":[9],"fertekal":[9],"o":[10,28],"or":[10],"ore":[10],"ores":[10],"oreso":[10],"oresom":[10],"oresomt":[10],"oresomta":[10],"oresomtal":[10],"te":[12,14,20,31],"tef":[12,14],"tefa":[12,14],"tefao":[12,14],"tefaol":[12,14],"tefaolt":[12,14],"m":[16,27,34],"mo":[16,27],"mor":[16],"morm":[16],"morma":[16],"mormal":[16],"kos":[17,19],"kost":[17,19],"kosto":[17,19],"kostom":[17,19],"la":[18],"lap":[18],"lape":[18],"lapel":[18],"tes":[20,31],"tesa":[20],"tesap":[20],"tesapl":[20],"tesaple":[20],"tesaplet":[20],"p":[21,22,23,24,30,32,33,41,42],"po":[21,22,32,41,42],"pos":[21,22],"pa":[23,24,30,33],"pak":[23,24,30],"pakr":[23,24,30],"pakro":[23,24,30],"pakrom":[23,24,30],"pakromt":[23,24,30],"3t":[26],"mom":[27],"momp":[27],"mompe":[27],"momper":[27],"of":[28],"ofe":[28],"ofer":[28],"test":[31],"por":[32,41,42],"port":[32,41,42],"porte":[32,41,42],"porter":[32,41,42],"pat":[33],"pate":[33],"patem":[33],"patemk":[33],"ma":[34],"mar":[34],"mark":[34],"marke":[34],"markem":[34],"fo":[35,36,37,45],"fom":[35,36,37],"fomt":[35,36,37],"let":[38],"lete":[38],"leter":[38],"lem":[39],"leme":[39],"tro":[40],"trop":[40],"fet":[43],"e":[44],"ek":[44],"ekt":[44],"fol":[45]},{"l":[1],"le":[1],"lef":[1],"left":[1],"r":[2,41],"re":[2],"rek":[2],"rekt":[2],"o":[7,24,27],"om":[7,24],"omt":[7,24],"omte":[7,24],"omtet":[7,24],"omtetl":[7,24],"omtetle":[7,24],"omtetlet":[7,24],"f":[17,18,42],"fe":[17,18,36,42],"fet":[17,18,42],"kol":[19,30,31,32],"kolo":[19,30,31,32],"kolor":[19,30,31,32],"te":[22],"tef":[22],"tefa":[22],"tefao":[22],"tefaol":[22],"tefaolt":[22],"of":[27],"p":[28],"po":[28],"pop":[28],"popl":[28],"pople":[28],"k":[30,31,32,45],"ko":[30,31,32,45],"s":[35,38,40],"se":[35],"ses":[35],"sese":[35],"fek":[36],"fekt":[36],"fa":[37],"fam":[37],"fame":[37],"famel":[37],"famele":[37],"sp":[38],"spa":[38],"spak":[38],"spake":[38],"spakem":[38],"spakemk":[38],"e":[39],"ek":[39],"ekt":[39],"sa":[40],"sat":[40],"sato":[40],"satof":[40],"ra":[41],"rat":[41],"rate":[41],"rateo":[41],"rateos":[41],"kom":[45],"komf":[45],"komfe":[45],"komfek":[45]},{"to":[1,2],"so":[17],"sof":[17],"r":[18],"rt":[18],"rtl":[18],"se":[19],"ses":[19],"sese":[19],"l":[27],"le":[27],"lem":[27],"leme":[27],"lemes":[27]},{"r":[1],"re":[1],"rek":[1],"rekt":[1],"l":[2,17,19],"le":[2],"lef":[2],"left":[2],"la":[17,19],"lap":[17,19],"lape":[17,19],"lapel":[17,19]},{"fem":[17]},{"ke":[17],"kek":[17],"keke":[17],"keket":[17]},{"o":[17],"om":[17],"oml":[17],"omle":[17]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "3": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "4": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "5": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "6": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "7": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "8": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "9": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "10": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "11": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "12": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "13": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "14": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "15": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "16": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "17": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "18": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "19": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "20": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "21": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "22": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "23": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "24": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "25": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "26": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "27": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "28": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "29": { "id": "tailwind", "kind": "story" }, "30": { "id": "tailwind:background-color", "kind": "variant" }, "31": { "id": "tailwind:text-color", "kind": "variant" }, "32": { "id": "tailwind:border-color", "kind": "variant" }, "33": { "id": "tailwind:padding", "kind": "variant" }, "34": { "id": "tailwind:margin", "kind": "variant" }, "35": { "id": "tailwind:font-size", "kind": "variant" }, "36": { "id": "tailwind:font-weight", "kind": "variant" }, "37": { "id": "tailwind:font-family", "kind": "variant" }, "38": { "id": "tailwind:letter-spacing", "kind": "variant" }, "39": { "id": "tailwind:line-height", "kind": "variant" }, "40": { "id": "tailwind:drop-shadow", "kind": "variant" }, "41": { "id": "tailwind:border-radius", "kind": "variant" }, "42": { "id": "tailwind:border-width", "kind": "variant" }, "43": { "id": "tailwind:width", "kind": "variant" }, "44": { "id": "tailwind:height", "kind": "variant" }, "45": { "id": "tailwind:full-config", "kind": "variant" } } };
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
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.17e0b398.js"), true ? ["assets/search-docs-data.17e0b398.js","assets/vendor.aa0959a2.js"] : void 0);
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
      return new flexsearch_bundle.exports.Document({
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
        iconColor: story.iconColor,
        type
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      var _a;
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
        path: [...(_a = story.file.path) != null ? _a : [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor,
        type
      };
    }
    const results = computed(() => {
      const list = [...titleResults.value];
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
    const selectedIndex = ref(0);
    watch(results, () => {
      selectedIndex.value = 0;
    });
    function selectNext() {
      selectedIndex.value++;
      if (selectedIndex.value > results.value.length - 1) {
        selectedIndex.value = 0;
      }
    }
    function selectPrevious() {
      selectedIndex.value--;
      if (selectedIndex.value < 0) {
        selectedIndex.value = results.value.length - 1;
      }
    }
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
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => selectNext(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => selectPrevious(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === selectedIndex.value,
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
