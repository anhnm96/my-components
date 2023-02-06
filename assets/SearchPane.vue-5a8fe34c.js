import { _ as __vitePreload } from "./GenericMountStory.vue2-b950450e.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bk as useFocus, f as watch, bl as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bm as flexsearch_bundleExports } from "./vendor-33e86c4c.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-2307fb30.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-bf08a420.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,9,10,11,12,13,14],"po":[0,1,2,9,10,11,12,13,14],"pot":[0,1,2,9,10,11,12,13,14],"poto":[0,1,2,9,10,11,12,13,14],"potom":[0,1,2,9,10,11,12,13,14],"k":[3,4,5,15,16,17,18,19,20,21,22,23,24,25,26],"kr":[3,4,5],"kre":[3,4,5],"kret":[3,4,5],"t":[6,7,8,27,28,31,32,52,53,54,55,56,57,58,59,60,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],"te":[6,7,8],"tes":[6,7,8],"test":[6,7,8],"ka":[15,16,17,21,22,23,24],"kar":[15,16,17,21,22,23,24],"karo":[15,16,17],"karos":[15,16,17],"karose":[15,16,17],"karosel":[15,16,17],"ke":[18,19,20],"kek":[18,19,20],"kekp":[18,19,20],"kekpo":[18,19,20],"kekpos":[18,19,20],"kart":[21,22,23,24],"karts":[21,22,23,24],"kl":[25,26],"klo":[25,26],"klof":[25,26],"klofe":[25,26],"klofem":[25,26],"klofemk":[25,26],"ta":[27,28,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],"tat":[27,28],"tata":[27,28],"tatat":[27,28],"tatata":[27,28],"tatatap":[27,28],"tatatapl":[27,28],"tatataple":[27,28],"e":[29,30,33,34,35],"em":[29,30],"emf":[29,30],"emfe":[29,30],"emfem":[29,30],"emfeme":[29,30],"emfemet":[29,30],"emfemete":[29,30],"tr":[31,32,54,55,56,57,58,59,60],"tro":[31,32],"trop":[31,32],"trops":[31,32],"tropso":[31,32],"tropsom":[31,32],"tropsome":[31,32],"es":[33,34,35],"esp":[33,34,35],"espa":[33,34,35],"espam":[33,34,35],"espamt":[33,34,35],"espamta":[33,34,35],"espamtap":[33,34,35],"espamtapl":[33,34,35],"espamtaple":[33,34,35],"m":[36,37,61,62],"mo":[36,37,61,62],"mot":[36,37,61,62],"mota":[36,37],"motal":[36,37],"r":[38,39],"re":[38,39],"rep":[38,39],"repo":[38,39],"repom":[38,39],"s":[40,41,42,43,44,45,46,47,48,49,50,51],"sk":[40,41],"ske":[40,41],"skel":[40,41],"skele":[40,41],"skelet":[40,41],"skeleto":[40,41],"skeletom":[40,41],"sl":[42,43],"sle":[42,43],"slet":[42,43],"slete":[42,43],"sleter":[42,43],"st":[44,45],"ste":[44,45],"step":[44,45],"steps":[44,45],"sf":[46,47,48,49,50,51],"sfe":[46,47,48,49,50,51],"sfet":[46,47,48,49,50,51],"sfetk":[46,47,48,49,50,51],"tf":[52,53],"tfe":[52,53],"tfet":[52,53],"tra":[54,55,56,57,58,59,60],"trak":[54,55,56,57,58,59,60],"mote":[61,62],"motef":[61,62],"motefe":[61,62],"motefek":[61,62],"motefeka":[61,62],"motefekat":[61,62],"motefekate":[61,62],"motefekateo":[61,62],"motefekateom":[61,62],"f":[63],"fr":[63],"fra":[63],"frap":[63],"frape":[63],"fraper":[63],"tal":[64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],"talf":[64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],"talfe":[64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],"talfem":[64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],"talfemt":[64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]},{"3":[22],"pol":[1],"pols":[1],"polse":[1],"k":[2,7,29,30,48,50],"kr":[2,7],"kra":[2,7],"krat":[2,7],"krate":[2,7],"kratem":[2,7],"kratemt":[2,7],"t":[3,4,5,11,20,37,39,41,45,51,62],"tr":[3,4,5,75],"tra":[3,4,5],"trak":[3,4,5],"a":[8,12],"am":[8],"ame":[8],"amem":[8],"amema":[8],"amemat":[8],"amemate":[8],"amematet":[8],"l":[10,17,49,54,55,56,73,74],"lo":[10],"loa":[10],"loat":[10],"loate":[10],"loatem":[10],"loatemk":[10],"te":[11,28,32,37,39,41,45,51,62,66],"tes":[11,51,66],"tesa":[11,51],"tesap":[11,51],"tesapl":[11,51],"tesaple":[11,51],"tesaplet":[11,51],"ar":[12],"are":[12],"area":[12],"m":[13,23,47,69],"mo":[13,23,47],"mor":[13,47],"morm":[13,47],"morma":[13,47],"mormal":[13,47],"o":[14,24,35],"ot":[14],"ote":[14],"oter":[14],"oters":[14],"ko":[16,29,30,48,50],"kom":[16,29,30],"komo":[16],"komom":[16],"le":[17,54,55,56,73,74],"les":[17,54,55,56],"lest":[17,54,55,56],"s":[19,57,58,59,60],"se":[19,57,58,59,60],"sem":[19,57,58,59,60],"semp":[19],"sempl":[19],"semple":[19],"ta":[20],"tap":[20],"tapl":[20],"taple":[20],"3t":[22],"mom":[23],"momp":[23],"mompe":[23],"momper":[23],"of":[24],"ofe":[24],"ofer":[24],"p":[25,26,52,53,65,67,68,76,77],"pa":[25,26,65,68],"pak":[25,26,65],"pakr":[25,26,65],"pakro":[25,26,65],"pakrom":[25,26,65],"pakromt":[25,26,65],"tef":[28,32,37,39,41,45,62],"tefa":[28,32,37,39,41,45,62],"tefao":[28,32,37,39,41,45,62],"tefaol":[28,32,37,39,41,45,62],"tefaolt":[28,32,37,39,41,45,62],"komt":[29,30],"komte":[29,30],"komtem":[29,30],"komtemt":[29,30],"f":[34,43,70,71,72,78,80],"fe":[34,78],"fer":[34],"fert":[34],"ferte":[34],"fertek":[34],"ferteka":[34],"fertekal":[34],"or":[35],"ore":[35],"ores":[35],"oreso":[35],"oresom":[35],"oresomt":[35],"oresomta":[35],"oresomtal":[35],"fr":[43],"fro":[43],"from":[43],"kos":[48,50],"kost":[48,50],"kosto":[48,50],"kostom":[48,50],"la":[49],"lap":[49],"lape":[49],"lapel":[49],"po":[52,53,67,76,77],"pos":[52,53],"semk":[57,58,59,60],"semkl":[57,58,59,60],"semkle":[57,58,59,60],"test":[66],"por":[67,76,77],"port":[67,76,77],"porte":[67,76,77],"porter":[67,76,77],"pat":[68],"pate":[68],"patem":[68],"patemk":[68],"ma":[69],"mar":[69],"mark":[69],"marke":[69],"markem":[69],"fo":[70,71,72,80],"fom":[70,71,72],"fomt":[70,71,72],"let":[73],"lete":[73],"leter":[73],"lem":[74],"leme":[74],"tro":[75],"trop":[75],"fet":[78],"e":[79],"ek":[79],"ekt":[79],"fol":[80]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"l":[4,11],"le":[4],"lef":[4],"left":[4],"r":[5,60,76],"re":[5,60],"rek":[5],"rekt":[5],"k":[8,65,66,67,80],"kr":[8],"kra":[8],"krat":[8],"krate":[8],"kratem":[8],"kratemt":[8],"s":[10,20,70,73,75],"sm":[10],"lk":[11],"t":[12,19],"te":[12,19,53,55,59],"tes":[12],"tesa":[12],"tesap":[12],"tesapl":[12],"tesaple":[12],"tesaplet":[12],"tem":[19,55,59],"temo":[19,55],"se":[20,70],"sel":[20],"sele":[20],"selek":[20],"selekt":[20],"selekte":[20],"selekteo":[20],"selekteom":[20],"o":[23,26,30],"of":[23],"p":[24],"po":[24],"pop":[24],"popl":[24],"pople":[24],"om":[26,30],"omt":[26,30],"omte":[26,30],"omtet":[26,30],"omtetl":[26,30],"omtetle":[26,30],"omtetlet":[26,30],"e":[43,74],"eo":[43],"eos":[43],"eos1":[43],"eos16":[43],"f":[48,49,77],"fe":[48,49,71,77],"fet":[48,49,77],"kol":[50,65,66,67],"kolo":[50,65,66,67],"kolor":[50,65,66,67],"tef":[53],"tefa":[53],"tefao":[53],"tefaol":[53],"tefaolt":[53],"tre":[56],"trel":[56],"trelo":[56],"tema":[59],"temam":[59],"temame":[59],"temamek":[59],"res":[60],"rest":[60],"restr":[60],"restre":[60],"restrek":[60],"restrekt":[60],"ko":[65,66,67,80],"ses":[70],"sese":[70],"fek":[71],"fekt":[71],"fa":[72],"fam":[72],"fame":[72],"famel":[72],"famele":[72],"sp":[73],"spa":[73],"spak":[73],"spake":[73],"spakem":[73],"spakemk":[73],"ek":[74],"ekt":[74],"sa":[75],"sat":[75],"sato":[75],"satof":[75],"ra":[76],"rat":[76],"rate":[76],"rateo":[76],"rateos":[76],"kom":[80],"komf":[80],"komfe":[80],"komfek":[80]},{"to":[4,5],"l":[23],"le":[23],"lem":[23],"leme":[23],"lemes":[23],"so":[48],"sof":[48],"r":[49],"rt":[49],"rtl":[49],"se":[50],"ses":[50],"sese":[50],"k":[56],"kl":[56],"klo":[56],"klom":[56],"klome":[56],"e":[58],"em":[58],"ema":[58],"emak":[58],"emake":[58],"tro":[60],"trop":[60]},{"r":[4],"re":[4],"rek":[4],"rekt":[4],"l":[5,48,50],"le":[5],"lef":[5],"left":[5],"la":[48,50],"lap":[48,50],"lape":[48,50],"lapel":[48,50],"o":[58],"om":[58],"e":[59],"em":[59],"ema":[59],"emak":[59],"emake":[59],"f":[60],"fa":[60],"fal":[60],"falo":[60]},{"fem":[48],"tro":[58],"trop":[58]},{"ke":[48],"kek":[48],"keke":[48],"keket":[48]},{"o":[48],"om":[48],"oml":[48],"omle":[48]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "4": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "6": { "id": "components-tailwind-text-story-vue", "kind": "story" }, "7": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-0", "kind": "variant" }, "8": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-1", "kind": "variant" }, "9": { "id": "components-base-button-button-story-vue", "kind": "story" }, "10": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "11": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "12": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "13": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "14": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "15": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "16": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "17": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "18": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "19": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "20": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "21": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "22": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "23": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "24": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "25": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "26": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "27": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "28": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "29": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "30": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "31": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "32": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "33": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "34": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "35": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "36": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "37": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "38": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "39": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "40": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "41": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "42": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "43": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "44": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "45": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "46": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "47": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "48": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "49": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "50": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "51": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "52": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "53": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "54": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "55": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "56": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "57": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "58": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "59": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "60": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "61": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "62": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "63": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "64": { "id": "tailwind", "kind": "story" }, "65": { "id": "tailwind:background-color", "kind": "variant" }, "66": { "id": "tailwind:text-color", "kind": "variant" }, "67": { "id": "tailwind:border-color", "kind": "variant" }, "68": { "id": "tailwind:padding", "kind": "variant" }, "69": { "id": "tailwind:margin", "kind": "variant" }, "70": { "id": "tailwind:font-size", "kind": "variant" }, "71": { "id": "tailwind:font-weight", "kind": "variant" }, "72": { "id": "tailwind:font-family", "kind": "variant" }, "73": { "id": "tailwind:letter-spacing", "kind": "variant" }, "74": { "id": "tailwind:line-height", "kind": "variant" }, "75": { "id": "tailwind:drop-shadow", "kind": "variant" }, "76": { "id": "tailwind:border-radius", "kind": "variant" }, "77": { "id": "tailwind:border-width", "kind": "variant" }, "78": { "id": "tailwind:width", "kind": "variant" }, "79": { "id": "tailwind:height", "kind": "variant" }, "80": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-e0636dec.js"), true ? ["assets/search-docs-data-e0636dec.js","assets/vendor-33e86c4c.js"] : void 0);
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
