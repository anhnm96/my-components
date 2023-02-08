import { _ as __vitePreload } from "./GenericMountStory.vue2-6d30d8ba.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bl as useFocus, f as watch, bm as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bn as flexsearch_bundleExports } from "./vendor-a8ddc900.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-e18e354d.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-8980a932.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,41,42,43,44,45,46],"po":[0,1,2,41,42,43,44,45,46],"pot":[0,1,2,41,42,43,44,45,46],"poto":[0,1,2,41,42,43,44,45,46],"potom":[0,1,2,41,42,43,44,45,46],"k":[3,4,5,32,33,34,37,38,39,40,49,50,51,52,53,54],"kr":[3,4,5],"kre":[3,4,5],"kret":[3,4,5],"t":[6,7,8,9,10,11,12,35,36,55,56,57,58,59,60,61,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"te":[6,7,8],"tes":[6,7,8],"test":[6,7,8],"ta":[9,10,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"tat":[9,10],"tata":[9,10],"tatat":[9,10],"tatata":[9,10],"tatatap":[9,10],"tatatapl":[9,10],"tatataple":[9,10],"tr":[11,12,55,56,57,58,59,60,61],"tro":[11,12],"trop":[11,12],"trops":[11,12],"tropso":[11,12],"tropsom":[11,12],"tropsome":[11,12],"e":[13,14,15,47,48],"es":[13,14,15],"esp":[13,14,15],"espa":[13,14,15],"espam":[13,14,15],"espamt":[13,14,15],"espamta":[13,14,15],"espamtap":[13,14,15],"espamtapl":[13,14,15],"espamtaple":[13,14,15],"m":[16,17,62,63],"mo":[16,17,62,63],"mot":[16,17,62,63],"mota":[16,17],"motal":[16,17],"s":[18,19,22,23,24,25,26,27,28,29,30,31],"st":[18,19],"ste":[18,19],"step":[18,19],"steps":[18,19],"r":[20,21],"re":[20,21],"rep":[20,21],"repo":[20,21],"repom":[20,21],"sk":[22,23],"ske":[22,23],"skel":[22,23],"skele":[22,23],"skelet":[22,23],"skeleto":[22,23],"skeletom":[22,23],"sf":[24,25,26,27,28,29],"sfe":[24,25,26,27,28,29],"sfet":[24,25,26,27,28,29],"sfetk":[24,25,26,27,28,29],"sl":[30,31],"sle":[30,31],"slet":[30,31],"slete":[30,31],"sleter":[30,31],"ka":[32,33,34,51,52,53,54],"kar":[32,33,34,51,52,53,54],"karo":[32,33,34],"karos":[32,33,34],"karose":[32,33,34],"karosel":[32,33,34],"tf":[35,36],"tfe":[35,36],"tfet":[35,36],"ke":[37,38,39,40],"kek":[37,38,39,40],"kekp":[37,38,39,40],"kekpo":[37,38,39,40],"kekpos":[37,38,39,40],"em":[47,48],"emf":[47,48],"emfe":[47,48],"emfem":[47,48],"emfeme":[47,48],"emfemet":[47,48],"emfemete":[47,48],"kl":[49,50],"klo":[49,50],"klof":[49,50],"klofe":[49,50],"klofem":[49,50],"klofemk":[49,50],"kart":[51,52,53,54],"karts":[51,52,53,54],"tra":[55,56,57,58,59,60,61],"trak":[55,56,57,58,59,60,61],"mote":[62,63],"motef":[62,63],"motefe":[62,63],"motefek":[62,63],"motefeka":[62,63],"motefekat":[62,63],"motefekate":[62,63],"motefekateo":[62,63],"motefekateom":[62,63],"f":[64],"fr":[64],"fra":[64],"frap":[64],"frape":[64],"fraper":[64],"tal":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"talf":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"talfe":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"talfem":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"talfemt":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81]},{"3":[52],"pol":[1],"pols":[1],"polse":[1],"k":[2,7,26,28,47,48],"kr":[2,7],"kra":[2,7],"krat":[2,7],"krate":[2,7],"kratem":[2,7],"kratemt":[2,7],"t":[3,4,5,17,19,21,23,29,40,43,63],"tr":[3,4,5,76],"tra":[3,4,5],"trak":[3,4,5],"a":[8,44],"am":[8],"ame":[8],"amem":[8],"amema":[8],"amemat":[8],"amemate":[8],"amematet":[8],"te":[10,12,17,19,21,23,29,43,63,67],"tef":[10,12,17,19,21,23,63],"tefa":[10,12,17,19,21,23,63],"tefao":[10,12,17,19,21,23,63],"tefaol":[10,12,17,19,21,23,63],"tefaolt":[10,12,17,19,21,23,63],"f":[14,31,71,72,73,79,81],"fe":[14,79],"fer":[14],"fert":[14],"ferte":[14],"fertek":[14],"ferteka":[14],"fertekal":[14],"o":[15,46,54],"or":[15],"ore":[15],"ores":[15],"oreso":[15],"oresom":[15],"oresomt":[15],"oresomta":[15],"oresomtal":[15],"m":[25,45,53,70],"mo":[25,45,53],"mor":[25,45],"morm":[25,45],"morma":[25,45],"mormal":[25,45],"ko":[26,28,33,47,48],"kos":[26,28],"kost":[26,28],"kosto":[26,28],"kostom":[26,28],"l":[27,34,42,55,56,57,74,75],"la":[27],"lap":[27],"lape":[27],"lapel":[27],"tes":[29,43,67],"tesa":[29,43],"tesap":[29,43],"tesapl":[29,43],"tesaple":[29,43],"tesaplet":[29,43],"fr":[31],"fro":[31],"from":[31],"kom":[33,47,48],"komo":[33],"komom":[33],"le":[34,55,56,57,74,75],"les":[34,55,56,57],"lest":[34,55,56,57],"p":[35,36,38,39,49,50,66,68,69,77,78],"po":[35,36,68,77,78],"pos":[35,36],"pl":[38],"pla":[38],"plam":[38],"pa":[39,49,50,66,69],"pas":[39],"pase":[39],"ta":[40],"tap":[40],"tapl":[40],"taple":[40],"lo":[42],"loa":[42],"loat":[42],"loate":[42],"loatem":[42],"loatemk":[42],"ar":[44],"are":[44],"area":[44],"ot":[46],"ote":[46],"oter":[46],"oters":[46],"komt":[47,48],"komte":[47,48],"komtem":[47,48],"komtemt":[47,48],"pak":[49,50,66],"pakr":[49,50,66],"pakro":[49,50,66],"pakrom":[49,50,66],"pakromt":[49,50,66],"3t":[52],"mom":[53],"momp":[53],"mompe":[53],"momper":[53],"of":[54],"ofe":[54],"ofer":[54],"s":[58,59,60,61],"se":[58,59,60,61],"sem":[58,59,60,61],"semk":[58,59,60,61],"semkl":[58,59,60,61],"semkle":[58,59,60,61],"test":[67],"por":[68,77,78],"port":[68,77,78],"porte":[68,77,78],"porter":[68,77,78],"pat":[69],"pate":[69],"patem":[69],"patemk":[69],"ma":[70],"mar":[70],"mark":[70],"marke":[70],"markem":[70],"fo":[71,72,73,81],"fom":[71,72,73],"fomt":[71,72,73],"let":[74],"lete":[74],"leter":[74],"lem":[75],"leme":[75],"tro":[76],"trop":[76],"fet":[79],"e":[80],"ek":[80],"ekt":[80],"fol":[81]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"l":[4,43],"le":[4],"lef":[4],"left":[4],"r":[5,61,77],"re":[5,61],"rek":[5],"rekt":[5],"k":[8,66,67,68,81],"kr":[8],"kra":[8],"krat":[8],"krate":[8],"kratem":[8],"kratemt":[8],"f":[26,27,78],"fe":[26,27,72,78],"fet":[26,27,78],"kol":[28,66,67,68],"kolo":[28,66,67,68],"kolor":[28,66,67,68],"e":[31,38,75],"eo":[31],"eos":[31],"eos1":[31],"eos16":[31],"te":[36,44,56,60],"tef":[36],"tefa":[36],"tefao":[36],"tefaol":[36],"tefaolt":[36],"em":[38],"emp":[38],"empo":[38],"empot":[38],"s":[40,42,71,74,76],"se":[40,71],"sel":[40],"sele":[40],"selek":[40],"selekt":[40],"selekte":[40],"selekteo":[40],"selekteom":[40],"sm":[42],"lk":[43],"t":[44],"tes":[44],"tesa":[44],"tesap":[44],"tesapl":[44],"tesaple":[44],"tesaplet":[44],"o":[48,50,53],"om":[48,50],"omt":[48,50],"omte":[48,50],"omtet":[48,50],"omtetl":[48,50],"omtetle":[48,50],"omtetlet":[48,50],"of":[53],"p":[54],"po":[54],"pop":[54],"popl":[54],"pople":[54],"tem":[56,60],"temo":[56],"tre":[57],"trel":[57],"trelo":[57],"tema":[60],"temam":[60],"temame":[60],"temamek":[60],"res":[61],"rest":[61],"restr":[61],"restre":[61],"restrek":[61],"restrekt":[61],"ko":[66,67,68,81],"ses":[71],"sese":[71],"fek":[72],"fekt":[72],"fa":[73],"fam":[73],"fame":[73],"famel":[73],"famele":[73],"sp":[74],"spa":[74],"spak":[74],"spake":[74],"spakem":[74],"spakemk":[74],"ek":[75],"ekt":[75],"sa":[76],"sat":[76],"sato":[76],"satof":[76],"ra":[77],"rat":[77],"rate":[77],"rateo":[77],"rateos":[77],"kom":[81],"komf":[81],"komfe":[81],"komfek":[81]},{"to":[4,5],"so":[26],"sof":[26],"r":[27],"rt":[27],"rtl":[27],"se":[28],"ses":[28],"sese":[28],"l":[53],"le":[53],"lem":[53],"leme":[53],"lemes":[53],"k":[57],"kl":[57],"klo":[57],"klom":[57],"klome":[57],"e":[59],"em":[59],"ema":[59],"emak":[59],"emake":[59],"tro":[61],"trop":[61]},{"r":[4],"re":[4],"rek":[4],"rekt":[4],"l":[5,26,28],"le":[5],"lef":[5],"left":[5],"la":[26,28],"lap":[26,28],"lape":[26,28],"lapel":[26,28],"o":[59],"om":[59],"e":[60],"em":[60],"ema":[60],"emak":[60],"emake":[60],"f":[61],"fa":[61],"fal":[61],"falo":[61]},{"fem":[26],"tro":[59],"trop":[59]},{"ke":[26],"kek":[26],"keke":[26],"keket":[26]},{"o":[26],"om":[26],"oml":[26],"omle":[26]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "4": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "6": { "id": "components-tailwind-text-story-vue", "kind": "story" }, "7": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-0", "kind": "variant" }, "8": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-1", "kind": "variant" }, "9": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "10": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "11": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "12": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "13": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "14": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "15": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "16": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "17": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "18": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "19": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "20": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "21": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "22": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "23": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "24": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "25": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "26": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "27": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "28": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "29": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "30": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "31": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "32": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "33": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "34": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "35": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "36": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "37": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "38": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "39": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "40": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "41": { "id": "components-base-button-button-story-vue", "kind": "story" }, "42": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "43": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "44": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "45": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "46": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "47": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "48": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "49": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "50": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "51": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "52": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "53": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "54": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "55": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "56": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "57": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "58": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "59": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "60": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "61": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "62": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "63": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "64": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "65": { "id": "tailwind", "kind": "story" }, "66": { "id": "tailwind:background-color", "kind": "variant" }, "67": { "id": "tailwind:text-color", "kind": "variant" }, "68": { "id": "tailwind:border-color", "kind": "variant" }, "69": { "id": "tailwind:padding", "kind": "variant" }, "70": { "id": "tailwind:margin", "kind": "variant" }, "71": { "id": "tailwind:font-size", "kind": "variant" }, "72": { "id": "tailwind:font-weight", "kind": "variant" }, "73": { "id": "tailwind:font-family", "kind": "variant" }, "74": { "id": "tailwind:letter-spacing", "kind": "variant" }, "75": { "id": "tailwind:line-height", "kind": "variant" }, "76": { "id": "tailwind:drop-shadow", "kind": "variant" }, "77": { "id": "tailwind:border-radius", "kind": "variant" }, "78": { "id": "tailwind:border-width", "kind": "variant" }, "79": { "id": "tailwind:width", "kind": "variant" }, "80": { "id": "tailwind:height", "kind": "variant" }, "81": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-af953998.js"), true ? ["assets/search-docs-data-af953998.js","assets/vendor-a8ddc900.js"] : void 0);
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
