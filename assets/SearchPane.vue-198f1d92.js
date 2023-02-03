import { _ as __vitePreload } from "./GenericMountStory.vue2-587aa261.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bk as useFocus, f as watch, bl as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bm as flexsearch_bundleExports } from "./vendor-671bda3b.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-90933b24.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-4fb0d6fd.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,9,10,11,12,13,14],"po":[0,1,2,9,10,11,12,13,14],"pot":[0,1,2,9,10,11,12,13,14],"poto":[0,1,2,9,10,11,12,13,14],"potom":[0,1,2,9,10,11,12,13,14],"k":[3,4,5,15,16,17,45,46,47,48,49,50],"kr":[3,4,5],"kre":[3,4,5],"kret":[3,4,5],"t":[6,7,8,20,21,25,26,43,44,53,54,55,56,57,58,59,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77],"te":[6,7,8],"tes":[6,7,8],"test":[6,7,8],"ka":[15,16,17,47,48,49,50],"kar":[15,16,17,47,48,49,50],"karo":[15,16,17],"karos":[15,16,17],"karose":[15,16,17],"karosel":[15,16,17],"e":[18,19,22,23,24],"em":[18,19],"emf":[18,19],"emfe":[18,19],"emfem":[18,19],"emfeme":[18,19],"emfemet":[18,19],"emfemete":[18,19],"ta":[20,21,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77],"tat":[20,21],"tata":[20,21],"tatat":[20,21],"tatata":[20,21],"tatatap":[20,21],"tatatapl":[20,21],"tatataple":[20,21],"es":[22,23,24],"esp":[22,23,24],"espa":[22,23,24],"espam":[22,23,24],"espamt":[22,23,24],"espamta":[22,23,24],"espamtap":[22,23,24],"espamtapl":[22,23,24],"espamtaple":[22,23,24],"tr":[25,26,53,54,55,56,57,58,59],"tro":[25,26],"trop":[25,26],"trops":[25,26],"tropso":[25,26],"tropsom":[25,26],"tropsome":[25,26],"m":[27,28,51,52],"mo":[27,28,51,52],"mot":[27,28,51,52],"mota":[27,28],"motal":[27,28],"r":[29,30],"re":[29,30],"rep":[29,30],"repo":[29,30],"repom":[29,30],"s":[31,32,33,34,35,36,37,38,39,40,41,42],"sk":[31,32],"ske":[31,32],"skel":[31,32],"skele":[31,32],"skelet":[31,32],"skeleto":[31,32],"skeletom":[31,32],"sl":[33,34],"sle":[33,34],"slet":[33,34],"slete":[33,34],"sleter":[33,34],"st":[35,36],"ste":[35,36],"step":[35,36],"steps":[35,36],"sf":[37,38,39,40,41,42],"sfe":[37,38,39,40,41,42],"sfet":[37,38,39,40,41,42],"sfetk":[37,38,39,40,41,42],"tf":[43,44],"tfe":[43,44],"tfet":[43,44],"kl":[45,46],"klo":[45,46],"klof":[45,46],"klofe":[45,46],"klofem":[45,46],"klofemk":[45,46],"kart":[47,48,49,50],"karts":[47,48,49,50],"mote":[51,52],"motef":[51,52],"motefe":[51,52],"motefek":[51,52],"motefeka":[51,52],"motefekat":[51,52],"motefekate":[51,52],"motefekateo":[51,52],"motefekateom":[51,52],"tra":[53,54,55,56,57,58,59],"trak":[53,54,55,56,57,58,59],"f":[60],"fr":[60],"fra":[60],"frap":[60],"frape":[60],"fraper":[60],"tal":[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77],"talf":[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77],"talfe":[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77],"talfem":[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77],"talfemt":[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77]},{"3":[48],"pol":[1],"pols":[1],"polse":[1],"k":[2,7,18,19,39,41],"kr":[2,7],"kra":[2,7],"krat":[2,7],"krate":[2,7],"kratem":[2,7],"kratemt":[2,7],"t":[3,4,5,11,28,30,32,36,42,52],"tr":[3,4,5,72],"tra":[3,4,5],"trak":[3,4,5],"a":[8,12],"am":[8],"ame":[8],"amem":[8],"amema":[8],"amemat":[8],"amemate":[8],"amematet":[8],"l":[10,17,40,53,54,55,70,71],"lo":[10],"loa":[10],"loat":[10],"loate":[10],"loatem":[10],"loatemk":[10],"te":[11,21,26,28,30,32,36,42,52,63],"tes":[11,42,63],"tesa":[11,42],"tesap":[11,42],"tesapl":[11,42],"tesaple":[11,42],"tesaplet":[11,42],"ar":[12],"are":[12],"area":[12],"m":[13,38,49,66],"mo":[13,38,49],"mor":[13,38],"morm":[13,38],"morma":[13,38],"mormal":[13,38],"o":[14,24,50],"ot":[14],"ote":[14],"oter":[14],"oters":[14],"ko":[16,18,19,39,41],"kom":[16,18,19],"komo":[16],"komom":[16],"le":[17,53,54,55,70,71],"les":[17,53,54,55],"lest":[17,53,54,55],"komt":[18,19],"komte":[18,19],"komtem":[18,19],"komtemt":[18,19],"tef":[21,26,28,30,32,36,52],"tefa":[21,26,28,30,32,36,52],"tefao":[21,26,28,30,32,36,52],"tefaol":[21,26,28,30,32,36,52],"tefaolt":[21,26,28,30,32,36,52],"f":[23,34,67,68,69,75,77],"fe":[23,75],"fer":[23],"fert":[23],"ferte":[23],"fertek":[23],"ferteka":[23],"fertekal":[23],"or":[24],"ore":[24],"ores":[24],"oreso":[24],"oresom":[24],"oresomt":[24],"oresomta":[24],"oresomtal":[24],"fr":[34],"fro":[34],"from":[34],"kos":[39,41],"kost":[39,41],"kosto":[39,41],"kostom":[39,41],"la":[40],"lap":[40],"lape":[40],"lapel":[40],"p":[43,44,45,46,62,64,65,73,74],"po":[43,44,64,73,74],"pos":[43,44],"pa":[45,46,62,65],"pak":[45,46,62],"pakr":[45,46,62],"pakro":[45,46,62],"pakrom":[45,46,62],"pakromt":[45,46,62],"3t":[48],"mom":[49],"momp":[49],"mompe":[49],"momper":[49],"of":[50],"ofe":[50],"ofer":[50],"s":[56,57,58,59],"se":[56,57,58,59],"sem":[56,57,58,59],"semk":[56,57,58,59],"semkl":[56,57,58,59],"semkle":[56,57,58,59],"test":[63],"por":[64,73,74],"port":[64,73,74],"porte":[64,73,74],"porter":[64,73,74],"pat":[65],"pate":[65],"patem":[65],"patemk":[65],"ma":[66],"mar":[66],"mark":[66],"marke":[66],"markem":[66],"fo":[67,68,69,77],"fom":[67,68,69],"fomt":[67,68,69],"let":[70],"lete":[70],"leter":[70],"lem":[71],"leme":[71],"tro":[72],"trop":[72],"fet":[75],"e":[76],"ek":[76],"ekt":[76],"fol":[77]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"l":[4,11],"le":[4],"lef":[4],"left":[4],"r":[5,59,73],"re":[5,59],"rek":[5],"rekt":[5],"k":[8,62,63,64,77],"kr":[8],"kra":[8],"krat":[8],"krate":[8],"kratem":[8],"kratemt":[8],"s":[10,67,70,72],"sm":[10],"lk":[11],"t":[12],"te":[12,44,54,58],"tes":[12],"tesa":[12],"tesap":[12],"tesapl":[12],"tesaple":[12],"tesaplet":[12],"o":[19,46,49],"om":[19,46],"omt":[19,46],"omte":[19,46],"omtet":[19,46],"omtetl":[19,46],"omtetle":[19,46],"omtetlet":[19,46],"e":[34,71],"eo":[34],"eos":[34],"eos1":[34],"eos16":[34],"f":[39,40,74],"fe":[39,40,68,74],"fet":[39,40,74],"kol":[41,62,63,64],"kolo":[41,62,63,64],"kolor":[41,62,63,64],"tef":[44],"tefa":[44],"tefao":[44],"tefaol":[44],"tefaolt":[44],"of":[49],"p":[50],"po":[50],"pop":[50],"popl":[50],"pople":[50],"tem":[54,58],"temo":[54],"tre":[55],"trel":[55],"trelo":[55],"tema":[58],"temam":[58],"temame":[58],"temamek":[58],"res":[59],"rest":[59],"restr":[59],"restre":[59],"restrek":[59],"restrekt":[59],"ko":[62,63,64,77],"se":[67],"ses":[67],"sese":[67],"fek":[68],"fekt":[68],"fa":[69],"fam":[69],"fame":[69],"famel":[69],"famele":[69],"sp":[70],"spa":[70],"spak":[70],"spake":[70],"spakem":[70],"spakemk":[70],"ek":[71],"ekt":[71],"sa":[72],"sat":[72],"sato":[72],"satof":[72],"ra":[73],"rat":[73],"rate":[73],"rateo":[73],"rateos":[73],"kom":[77],"komf":[77],"komfe":[77],"komfek":[77]},{"to":[4,5],"so":[39],"sof":[39],"r":[40],"rt":[40],"rtl":[40],"se":[41],"ses":[41],"sese":[41],"l":[49],"le":[49],"lem":[49],"leme":[49],"lemes":[49],"k":[55],"kl":[55],"klo":[55],"klom":[55],"klome":[55],"e":[57],"em":[57],"ema":[57],"emak":[57],"emake":[57],"tro":[59],"trop":[59]},{"r":[4],"re":[4],"rek":[4],"rekt":[4],"l":[5,39,41],"le":[5],"lef":[5],"left":[5],"la":[39,41],"lap":[39,41],"lape":[39,41],"lapel":[39,41],"o":[57],"om":[57],"e":[58],"em":[58],"ema":[58],"emak":[58],"emake":[58],"f":[59],"fa":[59],"fal":[59],"falo":[59]},{"fem":[39],"tro":[57],"trop":[57]},{"ke":[39],"kek":[39],"keke":[39],"keket":[39]},{"o":[39],"om":[39],"oml":[39],"omle":[39]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "4": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "6": { "id": "components-tailwind-text-story-vue", "kind": "story" }, "7": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-0", "kind": "variant" }, "8": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-1", "kind": "variant" }, "9": { "id": "components-base-button-button-story-vue", "kind": "story" }, "10": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "11": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "12": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "13": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "14": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "15": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "16": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "17": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "18": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "19": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "20": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "21": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "22": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "23": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "24": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "25": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "26": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "27": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "28": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "29": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "30": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "31": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "32": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "33": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "34": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "35": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "36": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "37": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "38": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "39": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "40": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "41": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "42": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "43": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "44": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "45": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "46": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "47": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "48": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "49": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "50": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "51": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "52": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "53": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "54": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "55": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "56": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "57": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "58": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "59": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "60": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "61": { "id": "tailwind", "kind": "story" }, "62": { "id": "tailwind:background-color", "kind": "variant" }, "63": { "id": "tailwind:text-color", "kind": "variant" }, "64": { "id": "tailwind:border-color", "kind": "variant" }, "65": { "id": "tailwind:padding", "kind": "variant" }, "66": { "id": "tailwind:margin", "kind": "variant" }, "67": { "id": "tailwind:font-size", "kind": "variant" }, "68": { "id": "tailwind:font-weight", "kind": "variant" }, "69": { "id": "tailwind:font-family", "kind": "variant" }, "70": { "id": "tailwind:letter-spacing", "kind": "variant" }, "71": { "id": "tailwind:line-height", "kind": "variant" }, "72": { "id": "tailwind:drop-shadow", "kind": "variant" }, "73": { "id": "tailwind:border-radius", "kind": "variant" }, "74": { "id": "tailwind:border-width", "kind": "variant" }, "75": { "id": "tailwind:width", "kind": "variant" }, "76": { "id": "tailwind:height", "kind": "variant" }, "77": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-986a189b.js"), true ? ["assets/search-docs-data-986a189b.js","assets/vendor-671bda3b.js"] : void 0);
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
