import { _ as __vitePreload } from "./GenericMountStory.vue2-739261b4.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bl as useFocus, f as watch, bm as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bn as flexsearch_bundleExports } from "./vendor-9b39e232.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-2de0b5b8.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-34a6b798.js";
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
            var _a;
            return [
              createVNode(unref(Icon), {
                icon: __props.result.icon ?? defaultIcons[__props.result.kind],
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
                ((_a = __props.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_5, [
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,40,41,42,43,44,45],"po":[0,1,2,40,41,42,43,44,45],"pot":[0,1,2,40,41,42,43,44,45],"poto":[0,1,2,40,41,42,43,44,45],"potom":[0,1,2,40,41,42,43,44,45],"k":[3,4,5,34,35,36,37,38,39,46,47,48,49,50,51,52],"kr":[3,4,5],"kre":[3,4,5],"kret":[3,4,5],"t":[6,7,8,9,10,14,15,32,33,55,56,57,58,59,60,61,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"te":[6,7,8],"tes":[6,7,8],"test":[6,7,8],"ta":[9,10,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"tat":[9,10],"tata":[9,10],"tatat":[9,10],"tatata":[9,10],"tatatap":[9,10],"tatatapl":[9,10],"tatataple":[9,10],"e":[11,12,13,53,54],"es":[11,12,13],"esp":[11,12,13],"espa":[11,12,13],"espam":[11,12,13],"espamt":[11,12,13],"espamta":[11,12,13],"espamtap":[11,12,13],"espamtapl":[11,12,13],"espamtaple":[11,12,13],"tr":[14,15,55,56,57,58,59,60,61],"tro":[14,15],"trop":[14,15],"trops":[14,15],"tropso":[14,15],"tropsom":[14,15],"tropsome":[14,15],"m":[16,17,62,63],"mo":[16,17,62,63],"mot":[16,17,62,63],"mota":[16,17],"motal":[16,17],"r":[18,19],"re":[18,19],"rep":[18,19],"repo":[18,19],"repom":[18,19],"s":[20,21,22,23,24,25,26,27,28,29,30,31],"sk":[20,21],"ske":[20,21],"skel":[20,21],"skele":[20,21],"skelet":[20,21],"skeleto":[20,21],"skeletom":[20,21],"sl":[22,23],"sle":[22,23],"slet":[22,23],"slete":[22,23],"sleter":[22,23],"st":[24,25],"ste":[24,25],"step":[24,25],"steps":[24,25],"sf":[26,27,28,29,30,31],"sfe":[26,27,28,29,30,31],"sfet":[26,27,28,29,30,31],"sfetk":[26,27,28,29,30,31],"tf":[32,33],"tfe":[32,33],"tfet":[32,33],"kl":[34,35],"klo":[34,35],"klof":[34,35],"klofe":[34,35],"klofem":[34,35],"klofemk":[34,35],"ka":[36,37,38,39,46,47,48],"kar":[36,37,38,39,46,47,48],"kart":[36,37,38,39],"karts":[36,37,38,39],"karo":[46,47,48],"karos":[46,47,48],"karose":[46,47,48],"karosel":[46,47,48],"ke":[49,50,51,52],"kek":[49,50,51,52],"kekp":[49,50,51,52],"kekpo":[49,50,51,52],"kekpos":[49,50,51,52],"em":[53,54],"emf":[53,54],"emfe":[53,54],"emfem":[53,54],"emfeme":[53,54],"emfemet":[53,54],"emfemete":[53,54],"tra":[55,56,57,58,59,60,61],"trak":[55,56,57,58,59,60,61],"mote":[62,63],"motef":[62,63],"motefe":[62,63],"motefek":[62,63],"motefeka":[62,63],"motefekat":[62,63],"motefekate":[62,63],"motefekateo":[62,63],"motefekateom":[62,63],"f":[64],"fr":[64],"fra":[64],"frap":[64],"frape":[64],"fraper":[64],"tal":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"talf":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"talfe":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"talfem":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"talfemt":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81]},{"3":[37],"pol":[1],"pols":[1],"polse":[1],"k":[2,7,28,30,53,54],"kr":[2,7],"kra":[2,7],"krat":[2,7],"krate":[2,7],"kratem":[2,7],"kratemt":[2,7],"t":[3,4,5,17,19,21,25,31,42,52,63],"tr":[3,4,5,76],"tra":[3,4,5],"trak":[3,4,5],"a":[8,43],"am":[8],"ame":[8],"amem":[8],"amema":[8],"amemat":[8],"amemate":[8],"amematet":[8],"te":[10,15,17,19,21,25,31,42,63,67],"tef":[10,15,17,19,21,25,63],"tefa":[10,15,17,19,21,25,63],"tefao":[10,15,17,19,21,25,63],"tefaol":[10,15,17,19,21,25,63],"tefaolt":[10,15,17,19,21,25,63],"f":[12,23,71,72,73,79,81],"fe":[12,79],"fer":[12],"fert":[12],"ferte":[12],"fertek":[12],"ferteka":[12],"fertekal":[12],"o":[13,39,45],"or":[13],"ore":[13],"ores":[13],"oreso":[13],"oresom":[13],"oresomt":[13],"oresomta":[13],"oresomtal":[13],"fr":[23],"fro":[23],"from":[23],"m":[27,38,44,70],"mo":[27,38,44],"mor":[27,44],"morm":[27,44],"morma":[27,44],"mormal":[27,44],"ko":[28,30,47,53,54],"kos":[28,30],"kost":[28,30],"kosto":[28,30],"kostom":[28,30],"l":[29,41,48,55,56,57,74,75],"la":[29],"lap":[29],"lape":[29],"lapel":[29],"tes":[31,42,67],"tesa":[31,42],"tesap":[31,42],"tesapl":[31,42],"tesaple":[31,42],"tesaplet":[31,42],"p":[32,33,34,35,50,51,66,68,69,77,78],"po":[32,33,68,77,78],"pos":[32,33],"pa":[34,35,51,66,69],"pak":[34,35,66],"pakr":[34,35,66],"pakro":[34,35,66],"pakrom":[34,35,66],"pakromt":[34,35,66],"3t":[37],"mom":[38],"momp":[38],"mompe":[38],"momper":[38],"of":[39],"ofe":[39],"ofer":[39],"lo":[41],"loa":[41],"loat":[41],"loate":[41],"loatem":[41],"loatemk":[41],"ar":[43],"are":[43],"area":[43],"ot":[45],"ote":[45],"oter":[45],"oters":[45],"kom":[47,53,54],"komo":[47],"komom":[47],"le":[48,55,56,57,74,75],"les":[48,55,56,57],"lest":[48,55,56,57],"pl":[50],"pla":[50],"plam":[50],"pas":[51],"pase":[51],"ta":[52],"tap":[52],"tapl":[52],"taple":[52],"komt":[53,54],"komte":[53,54],"komtem":[53,54],"komtemt":[53,54],"s":[58,59,60,61],"se":[58,59,60,61],"sem":[58,59,60,61],"semk":[58,59,60,61],"semkl":[58,59,60,61],"semkle":[58,59,60,61],"test":[67],"por":[68,77,78],"port":[68,77,78],"porte":[68,77,78],"porter":[68,77,78],"pat":[69],"pate":[69],"patem":[69],"patemk":[69],"ma":[70],"mar":[70],"mark":[70],"marke":[70],"markem":[70],"fo":[71,72,73,81],"fom":[71,72,73],"fomt":[71,72,73],"let":[74],"lete":[74],"leter":[74],"lem":[75],"leme":[75],"tro":[76],"trop":[76],"fet":[79],"e":[80],"ek":[80],"ekt":[80],"fol":[81]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"l":[4,42],"le":[4],"lef":[4],"left":[4],"r":[5,61,77],"re":[5,61],"rek":[5],"rekt":[5],"k":[8,66,67,68,81],"kr":[8],"kra":[8],"krat":[8],"krate":[8],"kratem":[8],"kratemt":[8],"e":[23,50,75],"eo":[23],"eos":[23],"eos1":[23],"eos16":[23],"f":[28,29,78],"fe":[28,29,72,78],"fet":[28,29,78],"kol":[30,66,67,68],"kolo":[30,66,67,68],"kolor":[30,66,67,68],"te":[33,43,56,60],"tef":[33],"tefa":[33],"tefao":[33],"tefaol":[33],"tefaolt":[33],"o":[35,38,54],"om":[35,54],"omt":[35,54],"omte":[35,54],"omtet":[35,54],"omtetl":[35,54],"omtetle":[35,54],"omtetlet":[35,54],"of":[38],"p":[39],"po":[39],"pop":[39],"popl":[39],"pople":[39],"s":[41,52,71,74,76],"sm":[41],"lk":[42],"t":[43],"tes":[43],"tesa":[43],"tesap":[43],"tesapl":[43],"tesaple":[43],"tesaplet":[43],"em":[50],"emp":[50],"empo":[50],"empot":[50],"se":[52,71],"sel":[52],"sele":[52],"selek":[52],"selekt":[52],"selekte":[52],"selekteo":[52],"selekteom":[52],"tem":[56,60],"temo":[56],"tre":[57],"trel":[57],"trelo":[57],"tema":[60],"temam":[60],"temame":[60],"temamek":[60],"res":[61],"rest":[61],"restr":[61],"restre":[61],"restrek":[61],"restrekt":[61],"ko":[66,67,68,81],"ses":[71],"sese":[71],"fek":[72],"fekt":[72],"fa":[73],"fam":[73],"fame":[73],"famel":[73],"famele":[73],"sp":[74],"spa":[74],"spak":[74],"spake":[74],"spakem":[74],"spakemk":[74],"ek":[75],"ekt":[75],"sa":[76],"sat":[76],"sato":[76],"satof":[76],"ra":[77],"rat":[77],"rate":[77],"rateo":[77],"rateos":[77],"kom":[81],"komf":[81],"komfe":[81],"komfek":[81]},{"to":[4,5],"so":[28],"sof":[28],"r":[29],"rt":[29],"rtl":[29],"se":[30],"ses":[30],"sese":[30],"l":[38],"le":[38],"lem":[38],"leme":[38],"lemes":[38],"k":[57],"kl":[57],"klo":[57],"klom":[57],"klome":[57],"e":[59],"em":[59],"ema":[59],"emak":[59],"emake":[59],"tro":[61],"trop":[61]},{"r":[4],"re":[4],"rek":[4],"rekt":[4],"l":[5,28,30],"le":[5],"lef":[5],"left":[5],"la":[28,30],"lap":[28,30],"lape":[28,30],"lapel":[28,30],"o":[59],"om":[59],"e":[60],"em":[60],"ema":[60],"emak":[60],"emake":[60],"f":[61],"fa":[61],"fal":[61],"falo":[61]},{"fem":[28],"tro":[59],"trop":[59]},{"ke":[28],"kek":[28],"keke":[28],"keket":[28]},{"o":[28],"om":[28],"oml":[28],"omle":[28]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "4": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "6": { "id": "components-tailwind-text-story-vue", "kind": "story" }, "7": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-0", "kind": "variant" }, "8": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-1", "kind": "variant" }, "9": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "10": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "11": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "12": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "13": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "14": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "15": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "16": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "17": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "18": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "19": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "20": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "21": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "22": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "23": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "24": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "25": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "26": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "27": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "28": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "29": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "30": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "31": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "32": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "33": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "34": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "35": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "36": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "37": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "38": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "39": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "40": { "id": "components-base-button-button-story-vue", "kind": "story" }, "41": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "42": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "43": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "44": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "45": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "46": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "47": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "48": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "49": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "50": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "51": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "52": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "53": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "54": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "55": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "56": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "57": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "58": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "59": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "60": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "61": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "62": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "63": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "64": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "65": { "id": "tailwind", "kind": "story" }, "66": { "id": "tailwind:background-color", "kind": "variant" }, "67": { "id": "tailwind:text-color", "kind": "variant" }, "68": { "id": "tailwind:border-color", "kind": "variant" }, "69": { "id": "tailwind:padding", "kind": "variant" }, "70": { "id": "tailwind:margin", "kind": "variant" }, "71": { "id": "tailwind:font-size", "kind": "variant" }, "72": { "id": "tailwind:font-weight", "kind": "variant" }, "73": { "id": "tailwind:font-family", "kind": "variant" }, "74": { "id": "tailwind:letter-spacing", "kind": "variant" }, "75": { "id": "tailwind:line-height", "kind": "variant" }, "76": { "id": "tailwind:drop-shadow", "kind": "variant" }, "77": { "id": "tailwind:border-radius", "kind": "variant" }, "78": { "id": "tailwind:border-width", "kind": "variant" }, "79": { "id": "tailwind:width", "kind": "variant" }, "80": { "id": "tailwind:height", "kind": "variant" }, "81": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-91ddcb54.js"), true ? ["assets/search-docs-data-91ddcb54.js","assets/vendor-9b39e232.js"] : void 0);
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
        iconColor: story.iconColor,
        type
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
