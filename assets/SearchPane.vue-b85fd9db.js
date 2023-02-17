import { _ as __vitePreload } from "./GenericMountStory.vue2-dd546c9a.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bl as useFocus, f as watch, bm as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bn as flexsearch_bundleExports } from "./vendor-d1442346.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-3da01d99.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-03ae2db6.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,40,41,42,43,44,45],"po":[0,1,2,40,41,42,43,44,45],"pot":[0,1,2,40,41,42,43,44,45],"poto":[0,1,2,40,41,42,43,44,45],"potom":[0,1,2,40,41,42,43,44,45],"k":[3,4,5,46,47,48,49,50,51,52,55,56,57,58,59,60],"kr":[3,4,5],"kre":[3,4,5],"kret":[3,4,5],"t":[6,7,8,9,10,11,12,32,33,63,64,65,66,67,68,69,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88],"te":[6,7,8],"tes":[6,7,8],"test":[6,7,8],"tr":[9,10,63,64,65,66,67,68,69],"tro":[9,10],"trop":[9,10],"trops":[9,10],"tropso":[9,10],"tropsom":[9,10],"tropsome":[9,10],"ta":[11,12,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88],"tat":[11,12],"tata":[11,12],"tatat":[11,12],"tatata":[11,12],"tatatap":[11,12],"tatatapl":[11,12],"tatataple":[11,12],"e":[13,14,15,53,54],"es":[13,14,15],"esp":[13,14,15],"espa":[13,14,15],"espam":[13,14,15],"espamt":[13,14,15],"espamta":[13,14,15],"espamtap":[13,14,15],"espamtapl":[13,14,15],"espamtaple":[13,14,15],"m":[16,17,18,19,20,21,22,23,61,62],"ma":[16,17,18,19,20,21],"mar":[16,17,18,19,20,21],"mark":[16,17,18,19,20,21],"marko":[16,17,18,19,20,21],"mo":[22,23,61,62],"mot":[22,23,61,62],"mota":[22,23],"motal":[22,23],"s":[24,25,26,27,30,31,34,35,36,37,38,39],"sk":[24,25],"ske":[24,25],"skel":[24,25],"skele":[24,25],"skelet":[24,25],"skeleto":[24,25],"skeletom":[24,25],"sl":[26,27],"sle":[26,27],"slet":[26,27],"slete":[26,27],"sleter":[26,27],"r":[28,29],"re":[28,29],"rep":[28,29],"repo":[28,29],"repom":[28,29],"st":[30,31],"ste":[30,31],"step":[30,31],"steps":[30,31],"tf":[32,33],"tfe":[32,33],"tfet":[32,33],"sf":[34,35,36,37,38,39],"sfe":[34,35,36,37,38,39],"sfet":[34,35,36,37,38,39],"sfetk":[34,35,36,37,38,39],"ka":[46,47,48,55,56,57,58],"kar":[46,47,48,55,56,57,58],"karo":[46,47,48],"karos":[46,47,48],"karose":[46,47,48],"karosel":[46,47,48],"ke":[49,50,51,52],"kek":[49,50,51,52],"kekp":[49,50,51,52],"kekpo":[49,50,51,52],"kekpos":[49,50,51,52],"em":[53,54],"emf":[53,54],"emfe":[53,54],"emfem":[53,54],"emfeme":[53,54],"emfemet":[53,54],"emfemete":[53,54],"kart":[55,56,57,58],"karts":[55,56,57,58],"kl":[59,60],"klo":[59,60],"klof":[59,60],"klofe":[59,60],"klofem":[59,60],"klofemk":[59,60],"mote":[61,62],"motef":[61,62],"motefe":[61,62],"motefek":[61,62],"motefeka":[61,62],"motefekat":[61,62],"motefekate":[61,62],"motefekateo":[61,62],"motefekateom":[61,62],"tra":[63,64,65,66,67,68,69],"trak":[63,64,65,66,67,68,69],"f":[70],"fr":[70],"fra":[70],"frap":[70],"frape":[70],"fraper":[70],"l":[71],"la":[71],"las":[71],"lase":[71],"tal":[72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88],"talf":[72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88],"talfe":[72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88],"talfem":[72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88],"talfemt":[72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88]},{"3":[56],"pol":[1],"pols":[1],"polse":[1],"k":[2,7,36,38,53,54],"kr":[2,7],"kra":[2,7],"krat":[2,7],"krate":[2,7],"kratem":[2,7],"kratemt":[2,7],"t":[3,4,5,23,25,29,31,39,42,52,62],"tr":[3,4,5,83],"tra":[3,4,5],"trak":[3,4,5],"a":[8,43],"am":[8],"ame":[8],"amem":[8],"amema":[8],"amemat":[8],"amemate":[8],"amematet":[8],"te":[10,12,23,25,29,31,39,42,62,74],"tef":[10,12,23,25,29,31,62],"tefa":[10,12,23,25,29,31,62],"tefao":[10,12,23,25,29,31,62],"tefaol":[10,12,23,25,29,31,62],"tefaolt":[10,12,23,25,29,31,62],"f":[14,27,78,79,80,86,88],"fe":[14,86],"fer":[14],"fert":[14],"ferte":[14],"fertek":[14],"ferteka":[14],"fertekal":[14],"o":[15,45,58],"or":[15],"ore":[15],"ores":[15],"oreso":[15],"oresom":[15],"oresomt":[15],"oresomta":[15],"oresomtal":[15],"mo":[17,18,20,35,44,57],"mor":[18,20,35,44],"morm":[18,20,35,44],"morma":[18,20,35,44],"mormal":[18,20,35,44],"r":[19,21],"re":[19,21],"ref":[19,21],"refe":[19,21],"refer":[19,21],"refers":[19,21],"referse":[19,21],"fr":[27],"fro":[27],"from":[27],"p":[32,33,50,51,59,60,73,75,76,84,85],"po":[32,33,75,84,85],"pos":[32,33],"m":[35,44,57,77],"ko":[36,38,47,53,54],"kos":[36,38],"kost":[36,38],"kosto":[36,38],"kostom":[36,38],"l":[37,41,48,63,64,65,81,82],"la":[37],"lap":[37],"lape":[37],"lapel":[37],"tes":[39,42,74],"tesa":[39,42],"tesap":[39,42],"tesapl":[39,42],"tesaple":[39,42],"tesaplet":[39,42],"lo":[41],"loa":[41],"loat":[41],"loate":[41],"loatem":[41],"loatemk":[41],"ar":[43],"are":[43],"area":[43],"ot":[45],"ote":[45],"oter":[45],"oters":[45],"kom":[47,53,54],"komo":[47],"komom":[47],"le":[48,63,64,65,81,82],"les":[48,63,64,65],"lest":[48,63,64,65],"pl":[50],"pla":[50],"plam":[50],"pa":[51,59,60,73,76],"pas":[51],"pase":[51],"ta":[52],"tap":[52],"tapl":[52],"taple":[52],"komt":[53,54],"komte":[53,54],"komtem":[53,54],"komtemt":[53,54],"3t":[56],"mom":[57],"momp":[57],"mompe":[57],"momper":[57],"of":[58],"ofe":[58],"ofer":[58],"pak":[59,60,73],"pakr":[59,60,73],"pakro":[59,60,73],"pakrom":[59,60,73],"pakromt":[59,60,73],"s":[66,67,68,69],"se":[66,67,68,69],"sem":[66,67,68,69],"semk":[66,67,68,69],"semkl":[66,67,68,69],"semkle":[66,67,68,69],"test":[74],"por":[75,84,85],"port":[75,84,85],"porte":[75,84,85],"porter":[75,84,85],"pat":[76],"pate":[76],"patem":[76],"patemk":[76],"ma":[77],"mar":[77],"mark":[77],"marke":[77],"markem":[77],"fo":[78,79,80,88],"fom":[78,79,80],"fomt":[78,79,80],"let":[81],"lete":[81],"leter":[81],"lem":[82],"leme":[82],"tro":[83],"trop":[83],"fet":[86],"e":[87],"ek":[87],"ekt":[87],"fol":[88]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"l":[4,42],"le":[4],"lef":[4],"left":[4],"r":[5,20,69,84],"re":[5,69],"rek":[5],"rekt":[5],"k":[8,17,73,74,75,88],"kr":[8],"kra":[8],"krat":[8],"krate":[8],"kratem":[8],"kratemt":[8],"ka":[17],"kap":[17],"rt":[20,21],"rtl":[20,21],"e":[27,50,82],"eo":[27],"eos":[27],"eos1":[27],"eos16":[27],"te":[33,43,64,68],"tef":[33],"tefa":[33],"tefao":[33],"tefaol":[33],"tefaolt":[33],"f":[36,37,85],"fe":[36,37,79,85],"fet":[36,37,85],"kol":[38,73,74,75],"kolo":[38,73,74,75],"kolor":[38,73,74,75],"s":[41,52,78,81,83],"sm":[41],"lk":[42],"t":[43],"tes":[43],"tesa":[43],"tesap":[43],"tesapl":[43],"tesaple":[43],"tesaplet":[43],"em":[50],"emp":[50],"empo":[50],"empot":[50],"se":[52,78],"sel":[52],"sele":[52],"selek":[52],"selekt":[52],"selekte":[52],"selekteo":[52],"selekteom":[52],"o":[54,57,60],"om":[54,60],"omt":[54,60],"omte":[54,60],"omtet":[54,60],"omtetl":[54,60],"omtetle":[54,60],"omtetlet":[54,60],"of":[57],"p":[58],"po":[58],"pop":[58],"popl":[58],"pople":[58],"tem":[64,68],"temo":[64],"tre":[65],"trel":[65],"trelo":[65],"tema":[68],"temam":[68],"temame":[68],"temamek":[68],"res":[69],"rest":[69],"restr":[69],"restre":[69],"restrek":[69],"restrekt":[69],"ko":[73,74,75,88],"ses":[78],"sese":[78],"fek":[79],"fekt":[79],"fa":[80],"fam":[80],"fame":[80],"famel":[80],"famele":[80],"sp":[81],"spa":[81],"spak":[81],"spake":[81],"spakem":[81],"spakemk":[81],"ek":[82],"ekt":[82],"sa":[83],"sat":[83],"sato":[83],"satof":[83],"ra":[84],"rat":[84],"rate":[84],"rateo":[84],"rateos":[84],"kom":[88],"komf":[88],"komfe":[88],"komfek":[88]},{"to":[4,5],"ko":[17],"kos":[17],"kost":[17],"kosto":[17],"kostom":[17],"so":[36],"sof":[36],"r":[37],"rt":[37],"rtl":[37],"se":[38],"ses":[38],"sese":[38],"l":[57],"le":[57],"lem":[57],"leme":[57],"lemes":[57],"k":[65],"kl":[65],"klo":[65],"klom":[65],"klome":[65],"e":[67],"em":[67],"ema":[67],"emak":[67],"emake":[67],"tro":[69],"trop":[69]},{"r":[4],"re":[4],"rek":[4],"rekt":[4],"l":[5,36,38],"le":[5],"lef":[5],"left":[5],"a":[17],"am":[17],"ame":[17],"amem":[17],"amema":[17],"amemat":[17],"amemate":[17],"amemateo":[17],"amemateom":[17],"la":[36,38],"lap":[36,38],"lape":[36,38],"lapel":[36,38],"o":[67],"om":[67],"e":[68],"em":[68],"ema":[68],"emak":[68],"emake":[68],"f":[69],"fa":[69],"fal":[69],"falo":[69]},{"fem":[36],"tro":[67],"trop":[67]},{"ke":[36],"kek":[36],"keke":[36],"keket":[36]},{"o":[36],"om":[36],"oml":[36],"omle":[36]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "4": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "6": { "id": "components-tailwind-text-story-vue", "kind": "story" }, "7": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-0", "kind": "variant" }, "8": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-1", "kind": "variant" }, "9": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "10": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "11": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "12": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "13": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "14": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "15": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "16": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "17": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "18": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "19": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "20": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "21": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "22": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "23": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "24": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "25": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "26": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "27": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "28": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "29": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "30": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "31": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "32": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "33": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "34": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "35": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "36": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "37": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "38": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "39": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "40": { "id": "components-base-button-button-story-vue", "kind": "story" }, "41": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "42": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "43": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "44": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "45": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "46": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "47": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "48": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "49": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "50": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "51": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "52": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "53": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "54": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "55": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "56": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "57": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "58": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "59": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "60": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "61": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "62": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "63": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "64": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "65": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "66": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "67": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "68": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "69": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "70": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "71": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "72": { "id": "tailwind", "kind": "story" }, "73": { "id": "tailwind:background-color", "kind": "variant" }, "74": { "id": "tailwind:text-color", "kind": "variant" }, "75": { "id": "tailwind:border-color", "kind": "variant" }, "76": { "id": "tailwind:padding", "kind": "variant" }, "77": { "id": "tailwind:margin", "kind": "variant" }, "78": { "id": "tailwind:font-size", "kind": "variant" }, "79": { "id": "tailwind:font-weight", "kind": "variant" }, "80": { "id": "tailwind:font-family", "kind": "variant" }, "81": { "id": "tailwind:letter-spacing", "kind": "variant" }, "82": { "id": "tailwind:line-height", "kind": "variant" }, "83": { "id": "tailwind:drop-shadow", "kind": "variant" }, "84": { "id": "tailwind:border-radius", "kind": "variant" }, "85": { "id": "tailwind:border-width", "kind": "variant" }, "86": { "id": "tailwind:width", "kind": "variant" }, "87": { "id": "tailwind:height", "kind": "variant" }, "88": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-bf896898.js"), true ? ["assets/search-docs-data-bf896898.js","assets/vendor-d1442346.js"] : void 0);
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
