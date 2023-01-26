import { _ as __vitePreload } from "./GenericMountStory.vue_vue_type_script_setup_true_lang.3d64ba9d.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, b4 as useFocus, f as watch, b5 as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, b6 as flexsearch_bundle } from "./vendor.a79b1064.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main.b8b59f84.js";
import { B as BaseEmpty } from "./BaseEmpty.75595b04.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,9,10,11,12,13,14],"po":[0,1,2,9,10,11,12,13,14],"pot":[0,1,2,9,10,11,12,13,14],"poto":[0,1,2,9,10,11,12,13,14],"potom":[0,1,2,9,10,11,12,13,14],"k":[3,4,5,15,16,17,37,38,39,40,41,42],"kr":[3,4,5],"kre":[3,4,5],"kret":[3,4,5],"t":[6,7,8,35,36,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],"te":[6,7,8],"tes":[6,7,8],"test":[6,7,8],"ka":[15,16,17,39,40,41,42],"kar":[15,16,17,39,40,41,42],"karo":[15,16,17],"karos":[15,16,17],"karose":[15,16,17],"karosel":[15,16,17],"e":[18,19,20,21,22],"em":[18,19],"emf":[18,19],"emfe":[18,19],"emfem":[18,19],"emfeme":[18,19],"emfemet":[18,19],"emfemete":[18,19],"es":[20,21,22],"esp":[20,21,22],"espa":[20,21,22],"espam":[20,21,22],"espamt":[20,21,22],"espamta":[20,21,22],"espamtap":[20,21,22],"espamtapl":[20,21,22],"espamtaple":[20,21,22],"r":[23,24],"re":[23,24],"rep":[23,24],"repo":[23,24],"repom":[23,24],"s":[25,26,27,28,29,30,31,32,33,34],"sl":[25,26],"sle":[25,26],"slet":[25,26],"slete":[25,26],"sleter":[25,26],"st":[27,28],"ste":[27,28],"step":[27,28],"steps":[27,28],"sf":[29,30,31,32,33,34],"sfe":[29,30,31,32,33,34],"sfet":[29,30,31,32,33,34],"sfetk":[29,30,31,32,33,34],"tf":[35,36],"tfe":[35,36],"tfet":[35,36],"kl":[37,38],"klo":[37,38],"klof":[37,38],"klofe":[37,38],"klofem":[37,38],"klofemk":[37,38],"kart":[39,40,41,42],"karts":[39,40,41,42],"f":[43],"fr":[43],"fra":[43],"frap":[43],"frape":[43],"fraper":[43],"ta":[44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],"tal":[44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],"talf":[44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],"talfe":[44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],"talfem":[44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],"talfemt":[44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]},{"3":[40],"pol":[1],"pols":[1],"polse":[1],"k":[2,7,18,19,31,33],"kr":[2,7],"kra":[2,7],"krat":[2,7],"krate":[2,7],"kratem":[2,7],"kratemt":[2,7],"t":[3,4,5,11,24,28,34],"tr":[3,4,5,55],"tra":[3,4,5],"trak":[3,4,5],"a":[8,12],"am":[8],"ame":[8],"amem":[8],"amema":[8],"amemat":[8],"amemate":[8],"amematet":[8],"l":[10,17,32,53,54],"lo":[10],"loa":[10],"loat":[10],"loate":[10],"loatem":[10],"loatemk":[10],"te":[11,24,28,34,46],"tes":[11,34,46],"tesa":[11,34],"tesap":[11,34],"tesapl":[11,34],"tesaple":[11,34],"tesaplet":[11,34],"ar":[12],"are":[12],"area":[12],"m":[13,30,41,49],"mo":[13,30,41],"mor":[13,30],"morm":[13,30],"morma":[13,30],"mormal":[13,30],"o":[14,22,42],"ot":[14],"ote":[14],"oter":[14],"oters":[14],"ko":[16,18,19,31,33],"kom":[16,18,19],"komo":[16],"komom":[16],"le":[17,53,54],"les":[17],"lest":[17],"komt":[18,19],"komte":[18,19],"komtem":[18,19],"komtemt":[18,19],"f":[21,26,50,51,52,58,60],"fe":[21,58],"fer":[21],"fert":[21],"ferte":[21],"fertek":[21],"ferteka":[21],"fertekal":[21],"or":[22],"ore":[22],"ores":[22],"oreso":[22],"oresom":[22],"oresomt":[22],"oresomta":[22],"oresomtal":[22],"tef":[24,28],"tefa":[24,28],"tefao":[24,28],"tefaol":[24,28],"tefaolt":[24,28],"fr":[26],"fro":[26],"from":[26],"kos":[31,33],"kost":[31,33],"kosto":[31,33],"kostom":[31,33],"la":[32],"lap":[32],"lape":[32],"lapel":[32],"p":[35,36,37,38,45,47,48,56,57],"po":[35,36,47,56,57],"pos":[35,36],"pa":[37,38,45,48],"pak":[37,38,45],"pakr":[37,38,45],"pakro":[37,38,45],"pakrom":[37,38,45],"pakromt":[37,38,45],"3t":[40],"mom":[41],"momp":[41],"mompe":[41],"momper":[41],"of":[42],"ofe":[42],"ofer":[42],"test":[46],"por":[47,56,57],"port":[47,56,57],"porte":[47,56,57],"porter":[47,56,57],"pat":[48],"pate":[48],"patem":[48],"patemk":[48],"ma":[49],"mar":[49],"mark":[49],"marke":[49],"markem":[49],"fo":[50,51,52,60],"fom":[50,51,52],"fomt":[50,51,52],"let":[53],"lete":[53],"leter":[53],"lem":[54],"leme":[54],"tro":[55],"trop":[55],"fet":[58],"e":[59],"ek":[59],"ekt":[59],"fol":[60]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"l":[4,11],"le":[4],"lef":[4],"left":[4],"r":[5,56],"re":[5],"rek":[5],"rekt":[5],"k":[8,45,46,47,60],"kr":[8],"kra":[8],"krat":[8],"krate":[8],"kratem":[8],"kratemt":[8],"s":[10,50,53,55],"sm":[10],"lk":[11],"t":[12],"te":[12,36],"tes":[12],"tesa":[12],"tesap":[12],"tesapl":[12],"tesaple":[12],"tesaplet":[12],"o":[19,38,41],"om":[19,38],"omt":[19,38],"omte":[19,38],"omtet":[19,38],"omtetl":[19,38],"omtetle":[19,38],"omtetlet":[19,38],"e":[26,54],"eo":[26],"eos":[26],"eos1":[26],"eos16":[26],"f":[31,32,57],"fe":[31,32,51,57],"fet":[31,32,57],"kol":[33,45,46,47],"kolo":[33,45,46,47],"kolor":[33,45,46,47],"tef":[36],"tefa":[36],"tefao":[36],"tefaol":[36],"tefaolt":[36],"of":[41],"p":[42],"po":[42],"pop":[42],"popl":[42],"pople":[42],"ko":[45,46,47,60],"se":[50],"ses":[50],"sese":[50],"fek":[51],"fekt":[51],"fa":[52],"fam":[52],"fame":[52],"famel":[52],"famele":[52],"sp":[53],"spa":[53],"spak":[53],"spake":[53],"spakem":[53],"spakemk":[53],"ek":[54],"ekt":[54],"sa":[55],"sat":[55],"sato":[55],"satof":[55],"ra":[56],"rat":[56],"rate":[56],"rateo":[56],"rateos":[56],"kom":[60],"komf":[60],"komfe":[60],"komfek":[60]},{"to":[4,5],"so":[31],"sof":[31],"r":[32],"rt":[32],"rtl":[32],"se":[33],"ses":[33],"sese":[33],"l":[41],"le":[41],"lem":[41],"leme":[41],"lemes":[41]},{"r":[4],"re":[4],"rek":[4],"rekt":[4],"l":[5,31,33],"le":[5],"lef":[5],"left":[5],"la":[31,33],"lap":[31,33],"lape":[31,33],"lapel":[31,33]},{"fem":[31]},{"ke":[31],"kek":[31],"keke":[31],"keket":[31]},{"o":[31],"om":[31],"oml":[31],"omle":[31]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "4": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "6": { "id": "components-tailwind-text-story-vue", "kind": "story" }, "7": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-0", "kind": "variant" }, "8": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-1", "kind": "variant" }, "9": { "id": "components-base-button-button-story-vue", "kind": "story" }, "10": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "11": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "12": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "13": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "14": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "15": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "16": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "17": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "18": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "19": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "20": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "21": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "22": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "23": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "24": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "25": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "26": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "27": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "28": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "29": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "30": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "31": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "32": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "33": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "34": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "35": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "36": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "37": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "38": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "39": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "40": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "41": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "42": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "43": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "44": { "id": "tailwind", "kind": "story" }, "45": { "id": "tailwind:background-color", "kind": "variant" }, "46": { "id": "tailwind:text-color", "kind": "variant" }, "47": { "id": "tailwind:border-color", "kind": "variant" }, "48": { "id": "tailwind:padding", "kind": "variant" }, "49": { "id": "tailwind:margin", "kind": "variant" }, "50": { "id": "tailwind:font-size", "kind": "variant" }, "51": { "id": "tailwind:font-weight", "kind": "variant" }, "52": { "id": "tailwind:font-family", "kind": "variant" }, "53": { "id": "tailwind:letter-spacing", "kind": "variant" }, "54": { "id": "tailwind:line-height", "kind": "variant" }, "55": { "id": "tailwind:drop-shadow", "kind": "variant" }, "56": { "id": "tailwind:border-radius", "kind": "variant" }, "57": { "id": "tailwind:border-width", "kind": "variant" }, "58": { "id": "tailwind:width", "kind": "variant" }, "59": { "id": "tailwind:height", "kind": "variant" }, "60": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.4fd9d850.js"), true ? ["assets/search-docs-data.4fd9d850.js","assets/vendor.a79b1064.js"] : void 0);
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
