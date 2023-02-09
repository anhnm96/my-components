import { _ as __vitePreload } from "./GenericMountStory.vue2-195ba54f.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bl as useFocus, f as watch, bm as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bn as flexsearch_bundleExports } from "./vendor-505e07c5.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-1ff11b43.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-ca70c0ff.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,9,10,11,12,13,14],"po":[0,1,2,9,10,11,12,13,14],"pot":[0,1,2,9,10,11,12,13,14],"poto":[0,1,2,9,10,11,12,13,14],"potom":[0,1,2,9,10,11,12,13,14],"k":[3,4,5,15,16,17,18,19,20,21,43,44,45,46,53,54],"kr":[3,4,5],"kre":[3,4,5],"kret":[3,4,5],"t":[6,7,8,24,25,29,30,39,40,55,56,57,58,59,60,61,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"te":[6,7,8],"tes":[6,7,8],"test":[6,7,8],"ka":[15,16,17,43,44,45,46],"kar":[15,16,17,43,44,45,46],"karo":[15,16,17],"karos":[15,16,17],"karose":[15,16,17],"karosel":[15,16,17],"ke":[18,19,20,21],"kek":[18,19,20,21],"kekp":[18,19,20,21],"kekpo":[18,19,20,21],"kekpos":[18,19,20,21],"e":[22,23,26,27,28],"em":[22,23],"emf":[22,23],"emfe":[22,23],"emfem":[22,23],"emfeme":[22,23],"emfemet":[22,23],"emfemete":[22,23],"tr":[24,25,55,56,57,58,59,60,61],"tro":[24,25],"trop":[24,25],"trops":[24,25],"tropso":[24,25],"tropsom":[24,25],"tropsome":[24,25],"es":[26,27,28],"esp":[26,27,28],"espa":[26,27,28],"espam":[26,27,28],"espamt":[26,27,28],"espamta":[26,27,28],"espamtap":[26,27,28],"espamtapl":[26,27,28],"espamtaple":[26,27,28],"ta":[29,30,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"tat":[29,30],"tata":[29,30],"tatat":[29,30],"tatata":[29,30],"tatatap":[29,30],"tatatapl":[29,30],"tatataple":[29,30],"m":[31,32,62,63],"mo":[31,32,62,63],"mot":[31,32,62,63],"mota":[31,32],"motal":[31,32],"s":[33,34,37,38,41,42,47,48,49,50,51,52],"sk":[33,34],"ske":[33,34],"skel":[33,34],"skele":[33,34],"skelet":[33,34],"skeleto":[33,34],"skeletom":[33,34],"r":[35,36],"re":[35,36],"rep":[35,36],"repo":[35,36],"repom":[35,36],"sl":[37,38],"sle":[37,38],"slet":[37,38],"slete":[37,38],"sleter":[37,38],"tf":[39,40],"tfe":[39,40],"tfet":[39,40],"st":[41,42],"ste":[41,42],"step":[41,42],"steps":[41,42],"kart":[43,44,45,46],"karts":[43,44,45,46],"sf":[47,48,49,50,51,52],"sfe":[47,48,49,50,51,52],"sfet":[47,48,49,50,51,52],"sfetk":[47,48,49,50,51,52],"kl":[53,54],"klo":[53,54],"klof":[53,54],"klofe":[53,54],"klofem":[53,54],"klofemk":[53,54],"tra":[55,56,57,58,59,60,61],"trak":[55,56,57,58,59,60,61],"mote":[62,63],"motef":[62,63],"motefe":[62,63],"motefek":[62,63],"motefeka":[62,63],"motefekat":[62,63],"motefekate":[62,63],"motefekateo":[62,63],"motefekateom":[62,63],"f":[64],"fr":[64],"fra":[64],"frap":[64],"frape":[64],"fraper":[64],"l":[65],"la":[65],"las":[65],"lase":[65],"tal":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"talf":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"talfe":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"talfem":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"talfemt":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82]},{"3":[44],"pol":[1],"pols":[1],"polse":[1],"k":[2,7,22,23,49,51],"kr":[2,7],"kra":[2,7],"krat":[2,7],"krate":[2,7],"kratem":[2,7],"kratemt":[2,7],"t":[3,4,5,11,21,32,34,36,42,52,63],"tr":[3,4,5,77],"tra":[3,4,5],"trak":[3,4,5],"a":[8,12],"am":[8],"ame":[8],"amem":[8],"amema":[8],"amemat":[8],"amemate":[8],"amematet":[8],"l":[10,17,50,55,56,57,75,76],"lo":[10],"loa":[10],"loat":[10],"loate":[10],"loatem":[10],"loatemk":[10],"te":[11,25,30,32,34,36,42,52,63,68],"tes":[11,52,68],"tesa":[11,52],"tesap":[11,52],"tesapl":[11,52],"tesaple":[11,52],"tesaplet":[11,52],"ar":[12],"are":[12],"area":[12],"m":[13,45,48,71],"mo":[13,45,48],"mor":[13,48],"morm":[13,48],"morma":[13,48],"mormal":[13,48],"o":[14,28,46],"ot":[14],"ote":[14],"oter":[14],"oters":[14],"ko":[16,22,23,49,51],"kom":[16,22,23],"komo":[16],"komom":[16],"le":[17,55,56,57,75,76],"les":[17,55,56,57],"lest":[17,55,56,57],"p":[19,20,39,40,53,54,67,69,70,78,79],"pl":[19],"pla":[19],"plam":[19],"pa":[20,53,54,67,70],"pas":[20],"pase":[20],"ta":[21],"tap":[21],"tapl":[21],"taple":[21],"komt":[22,23],"komte":[22,23],"komtem":[22,23],"komtemt":[22,23],"tef":[25,30,32,34,36,42,63],"tefa":[25,30,32,34,36,42,63],"tefao":[25,30,32,34,36,42,63],"tefaol":[25,30,32,34,36,42,63],"tefaolt":[25,30,32,34,36,42,63],"f":[27,38,72,73,74,80,82],"fe":[27,80],"fer":[27],"fert":[27],"ferte":[27],"fertek":[27],"ferteka":[27],"fertekal":[27],"or":[28],"ore":[28],"ores":[28],"oreso":[28],"oresom":[28],"oresomt":[28],"oresomta":[28],"oresomtal":[28],"fr":[38],"fro":[38],"from":[38],"po":[39,40,69,78,79],"pos":[39,40],"3t":[44],"mom":[45],"momp":[45],"mompe":[45],"momper":[45],"of":[46],"ofe":[46],"ofer":[46],"kos":[49,51],"kost":[49,51],"kosto":[49,51],"kostom":[49,51],"la":[50],"lap":[50],"lape":[50],"lapel":[50],"pak":[53,54,67],"pakr":[53,54,67],"pakro":[53,54,67],"pakrom":[53,54,67],"pakromt":[53,54,67],"s":[58,59,60,61],"se":[58,59,60,61],"sem":[58,59,60,61],"semk":[58,59,60,61],"semkl":[58,59,60,61],"semkle":[58,59,60,61],"test":[68],"por":[69,78,79],"port":[69,78,79],"porte":[69,78,79],"porter":[69,78,79],"pat":[70],"pate":[70],"patem":[70],"patemk":[70],"ma":[71],"mar":[71],"mark":[71],"marke":[71],"markem":[71],"fo":[72,73,74,82],"fom":[72,73,74],"fomt":[72,73,74],"let":[75],"lete":[75],"leter":[75],"lem":[76],"leme":[76],"tro":[77],"trop":[77],"fet":[80],"e":[81],"ek":[81],"ekt":[81],"fol":[82]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"l":[4,11],"le":[4],"lef":[4],"left":[4],"r":[5,61,78],"re":[5,61],"rek":[5],"rekt":[5],"k":[8,67,68,69,82],"kr":[8],"kra":[8],"krat":[8],"krate":[8],"kratem":[8],"kratemt":[8],"s":[10,21,72,75,77],"sm":[10],"lk":[11],"t":[12],"te":[12,40,56,60],"tes":[12],"tesa":[12],"tesap":[12],"tesapl":[12],"tesaple":[12],"tesaplet":[12],"e":[19,38,76],"em":[19],"emp":[19],"empo":[19],"empot":[19],"se":[21,72],"sel":[21],"sele":[21],"selek":[21],"selekt":[21],"selekte":[21],"selekteo":[21],"selekteom":[21],"o":[23,45,54],"om":[23,54],"omt":[23,54],"omte":[23,54],"omtet":[23,54],"omtetl":[23,54],"omtetle":[23,54],"omtetlet":[23,54],"eo":[38],"eos":[38],"eos1":[38],"eos16":[38],"tef":[40],"tefa":[40],"tefao":[40],"tefaol":[40],"tefaolt":[40],"of":[45],"p":[46],"po":[46],"pop":[46],"popl":[46],"pople":[46],"f":[49,50,79],"fe":[49,50,73,79],"fet":[49,50,79],"kol":[51,67,68,69],"kolo":[51,67,68,69],"kolor":[51,67,68,69],"tem":[56,60],"temo":[56],"tre":[57],"trel":[57],"trelo":[57],"tema":[60],"temam":[60],"temame":[60],"temamek":[60],"res":[61],"rest":[61],"restr":[61],"restre":[61],"restrek":[61],"restrekt":[61],"ko":[67,68,69,82],"ses":[72],"sese":[72],"fek":[73],"fekt":[73],"fa":[74],"fam":[74],"fame":[74],"famel":[74],"famele":[74],"sp":[75],"spa":[75],"spak":[75],"spake":[75],"spakem":[75],"spakemk":[75],"ek":[76],"ekt":[76],"sa":[77],"sat":[77],"sato":[77],"satof":[77],"ra":[78],"rat":[78],"rate":[78],"rateo":[78],"rateos":[78],"kom":[82],"komf":[82],"komfe":[82],"komfek":[82]},{"to":[4,5],"l":[45],"le":[45],"lem":[45],"leme":[45],"lemes":[45],"so":[49],"sof":[49],"r":[50],"rt":[50],"rtl":[50],"se":[51],"ses":[51],"sese":[51],"k":[57],"kl":[57],"klo":[57],"klom":[57],"klome":[57],"e":[59],"em":[59],"ema":[59],"emak":[59],"emake":[59],"tro":[61],"trop":[61]},{"r":[4],"re":[4],"rek":[4],"rekt":[4],"l":[5,49,51],"le":[5],"lef":[5],"left":[5],"la":[49,51],"lap":[49,51],"lape":[49,51],"lapel":[49,51],"o":[59],"om":[59],"e":[60],"em":[60],"ema":[60],"emak":[60],"emake":[60],"f":[61],"fa":[61],"fal":[61],"falo":[61]},{"fem":[49],"tro":[59],"trop":[59]},{"ke":[49],"kek":[49],"keke":[49],"keket":[49]},{"o":[49],"om":[49],"oml":[49],"omle":[49]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "4": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "6": { "id": "components-tailwind-text-story-vue", "kind": "story" }, "7": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-0", "kind": "variant" }, "8": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-1", "kind": "variant" }, "9": { "id": "components-base-button-button-story-vue", "kind": "story" }, "10": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "11": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "12": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "13": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "14": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "15": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "16": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "17": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "18": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "19": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "20": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "21": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "22": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "23": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "24": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "25": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "26": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "27": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "28": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "29": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "30": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "31": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "32": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "33": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "34": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "35": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "36": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "37": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "38": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "39": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "40": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "41": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "42": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "43": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "44": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "45": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "46": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "47": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "48": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "49": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "50": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "51": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "52": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "53": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "54": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "55": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "56": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "57": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "58": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "59": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "60": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "61": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "62": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "63": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "64": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "65": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "66": { "id": "tailwind", "kind": "story" }, "67": { "id": "tailwind:background-color", "kind": "variant" }, "68": { "id": "tailwind:text-color", "kind": "variant" }, "69": { "id": "tailwind:border-color", "kind": "variant" }, "70": { "id": "tailwind:padding", "kind": "variant" }, "71": { "id": "tailwind:margin", "kind": "variant" }, "72": { "id": "tailwind:font-size", "kind": "variant" }, "73": { "id": "tailwind:font-weight", "kind": "variant" }, "74": { "id": "tailwind:font-family", "kind": "variant" }, "75": { "id": "tailwind:letter-spacing", "kind": "variant" }, "76": { "id": "tailwind:line-height", "kind": "variant" }, "77": { "id": "tailwind:drop-shadow", "kind": "variant" }, "78": { "id": "tailwind:border-radius", "kind": "variant" }, "79": { "id": "tailwind:border-width", "kind": "variant" }, "80": { "id": "tailwind:width", "kind": "variant" }, "81": { "id": "tailwind:height", "kind": "variant" }, "82": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-a590dc39.js"), true ? ["assets/search-docs-data-a590dc39.js","assets/vendor-505e07c5.js"] : void 0);
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
