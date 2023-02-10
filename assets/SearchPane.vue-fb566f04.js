import { _ as __vitePreload } from "./GenericMountStory.vue2-cb7329f1.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bl as useFocus, f as watch, bm as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bn as flexsearch_bundleExports } from "./vendor-d61fed03.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-a05960b2.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-4461abac.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,9,10,11,12,13,14],"po":[0,1,2,9,10,11,12,13,14],"pot":[0,1,2,9,10,11,12,13,14],"poto":[0,1,2,9,10,11,12,13,14],"potom":[0,1,2,9,10,11,12,13,14],"k":[3,4,5,15,16,17,18,19,20,21,51,52,53,54,55,56],"kr":[3,4,5],"kre":[3,4,5],"kret":[3,4,5],"t":[6,7,8,24,25,26,27,49,50,57,58,59,60,61,62,63,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],"te":[6,7,8],"tes":[6,7,8],"test":[6,7,8],"ka":[15,16,17,53,54,55,56],"kar":[15,16,17,53,54,55,56],"karo":[15,16,17],"karos":[15,16,17],"karose":[15,16,17],"karosel":[15,16,17],"ke":[18,19,20,21],"kek":[18,19,20,21],"kekp":[18,19,20,21],"kekpo":[18,19,20,21],"kekpos":[18,19,20,21],"e":[22,23,28,29,30],"em":[22,23],"emf":[22,23],"emfe":[22,23],"emfem":[22,23],"emfeme":[22,23],"emfemet":[22,23],"emfemete":[22,23],"ta":[24,25,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],"tat":[24,25],"tata":[24,25],"tatat":[24,25],"tatata":[24,25],"tatatap":[24,25],"tatatapl":[24,25],"tatataple":[24,25],"tr":[26,27,57,58,59,60,61,62,63],"tro":[26,27],"trop":[26,27],"trops":[26,27],"tropso":[26,27],"tropsom":[26,27],"tropsome":[26,27],"es":[28,29,30],"esp":[28,29,30],"espa":[28,29,30],"espam":[28,29,30],"espamt":[28,29,30],"espamta":[28,29,30],"espamtap":[28,29,30],"espamtapl":[28,29,30],"espamtaple":[28,29,30],"m":[31,32,33,34,64,65],"mo":[31,32,64,65],"mot":[31,32,64,65],"mota":[31,32],"motal":[31,32],"ma":[33,34],"mar":[33,34],"mark":[33,34],"marko":[33,34],"r":[35,36],"re":[35,36],"rep":[35,36],"repo":[35,36],"repom":[35,36],"s":[37,38,39,40,41,42,43,44,45,46,47,48],"sk":[37,38],"ske":[37,38],"skel":[37,38],"skele":[37,38],"skelet":[37,38],"skeleto":[37,38],"skeletom":[37,38],"sl":[39,40],"sle":[39,40],"slet":[39,40],"slete":[39,40],"sleter":[39,40],"st":[41,42],"ste":[41,42],"step":[41,42],"steps":[41,42],"sf":[43,44,45,46,47,48],"sfe":[43,44,45,46,47,48],"sfet":[43,44,45,46,47,48],"sfetk":[43,44,45,46,47,48],"tf":[49,50],"tfe":[49,50],"tfet":[49,50],"kl":[51,52],"klo":[51,52],"klof":[51,52],"klofe":[51,52],"klofem":[51,52],"klofemk":[51,52],"kart":[53,54,55,56],"karts":[53,54,55,56],"tra":[57,58,59,60,61,62,63],"trak":[57,58,59,60,61,62,63],"mote":[64,65],"motef":[64,65],"motefe":[64,65],"motefek":[64,65],"motefeka":[64,65],"motefekat":[64,65],"motefekate":[64,65],"motefekateo":[64,65],"motefekateom":[64,65],"f":[66],"fr":[66],"fra":[66],"frap":[66],"frape":[66],"fraper":[66],"l":[67],"la":[67],"las":[67],"lase":[67],"tal":[68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],"talf":[68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],"talfe":[68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],"talfem":[68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],"talfemt":[68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84]},{"3":[54],"pol":[1],"pols":[1],"polse":[1],"k":[2,7,22,23,45,47],"kr":[2,7],"kra":[2,7],"krat":[2,7],"krate":[2,7],"kratem":[2,7],"kratemt":[2,7],"t":[3,4,5,11,21,32,34,36,38,42,48,65],"tr":[3,4,5,79],"tra":[3,4,5],"trak":[3,4,5],"a":[8,12],"am":[8],"ame":[8],"amem":[8],"amema":[8],"amemat":[8],"amemate":[8],"amematet":[8],"l":[10,17,46,57,58,59,77,78],"lo":[10],"loa":[10],"loat":[10],"loate":[10],"loatem":[10],"loatemk":[10],"te":[11,25,27,32,34,36,38,42,48,65,70],"tes":[11,48,70],"tesa":[11,48],"tesap":[11,48],"tesapl":[11,48],"tesaple":[11,48],"tesaplet":[11,48],"ar":[12],"are":[12],"area":[12],"m":[13,44,55,73],"mo":[13,44,55],"mor":[13,44],"morm":[13,44],"morma":[13,44],"mormal":[13,44],"o":[14,30,56],"ot":[14],"ote":[14],"oter":[14],"oters":[14],"ko":[16,22,23,45,47],"kom":[16,22,23],"komo":[16],"komom":[16],"le":[17,57,58,59,77,78],"les":[17,57,58,59],"lest":[17,57,58,59],"p":[19,20,49,50,51,52,69,71,72,80,81],"pl":[19],"pla":[19],"plam":[19],"pa":[20,51,52,69,72],"pas":[20],"pase":[20],"ta":[21],"tap":[21],"tapl":[21],"taple":[21],"komt":[22,23],"komte":[22,23],"komtem":[22,23],"komtemt":[22,23],"tef":[25,27,32,34,36,38,42,65],"tefa":[25,27,32,34,36,38,42,65],"tefao":[25,27,32,34,36,38,42,65],"tefaol":[25,27,32,34,36,38,42,65],"tefaolt":[25,27,32,34,36,38,42,65],"f":[29,40,74,75,76,82,84],"fe":[29,82],"fer":[29],"fert":[29],"ferte":[29],"fertek":[29],"ferteka":[29],"fertekal":[29],"or":[30],"ore":[30],"ores":[30],"oreso":[30],"oresom":[30],"oresomt":[30],"oresomta":[30],"oresomtal":[30],"fr":[40],"fro":[40],"from":[40],"kos":[45,47],"kost":[45,47],"kosto":[45,47],"kostom":[45,47],"la":[46],"lap":[46],"lape":[46],"lapel":[46],"po":[49,50,71,80,81],"pos":[49,50],"pak":[51,52,69],"pakr":[51,52,69],"pakro":[51,52,69],"pakrom":[51,52,69],"pakromt":[51,52,69],"3t":[54],"mom":[55],"momp":[55],"mompe":[55],"momper":[55],"of":[56],"ofe":[56],"ofer":[56],"s":[60,61,62,63],"se":[60,61,62,63],"sem":[60,61,62,63],"semk":[60,61,62,63],"semkl":[60,61,62,63],"semkle":[60,61,62,63],"test":[70],"por":[71,80,81],"port":[71,80,81],"porte":[71,80,81],"porter":[71,80,81],"pat":[72],"pate":[72],"patem":[72],"patemk":[72],"ma":[73],"mar":[73],"mark":[73],"marke":[73],"markem":[73],"fo":[74,75,76,84],"fom":[74,75,76],"fomt":[74,75,76],"let":[77],"lete":[77],"leter":[77],"lem":[78],"leme":[78],"tro":[79],"trop":[79],"fet":[82],"e":[83],"ek":[83],"ekt":[83],"fol":[84]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"l":[4,11],"le":[4],"lef":[4],"left":[4],"r":[5,63,80],"re":[5,63],"rek":[5],"rekt":[5],"k":[8,69,70,71,84],"kr":[8],"kra":[8],"krat":[8],"krate":[8],"kratem":[8],"kratemt":[8],"s":[10,21,74,77,79],"sm":[10],"lk":[11],"t":[12],"te":[12,50,58,62],"tes":[12],"tesa":[12],"tesap":[12],"tesapl":[12],"tesaple":[12],"tesaplet":[12],"e":[19,40,78],"em":[19],"emp":[19],"empo":[19],"empot":[19],"se":[21,74],"sel":[21],"sele":[21],"selek":[21],"selekt":[21],"selekte":[21],"selekteo":[21],"selekteom":[21],"o":[23,52,55],"om":[23,52],"omt":[23,52],"omte":[23,52],"omtet":[23,52],"omtetl":[23,52],"omtetle":[23,52],"omtetlet":[23,52],"eo":[40],"eos":[40],"eos1":[40],"eos16":[40],"f":[45,46,81],"fe":[45,46,75,81],"fet":[45,46,81],"kol":[47,69,70,71],"kolo":[47,69,70,71],"kolor":[47,69,70,71],"tef":[50],"tefa":[50],"tefao":[50],"tefaol":[50],"tefaolt":[50],"of":[55],"p":[56],"po":[56],"pop":[56],"popl":[56],"pople":[56],"tem":[58,62],"temo":[58],"tre":[59],"trel":[59],"trelo":[59],"tema":[62],"temam":[62],"temame":[62],"temamek":[62],"res":[63],"rest":[63],"restr":[63],"restre":[63],"restrek":[63],"restrekt":[63],"ko":[69,70,71,84],"ses":[74],"sese":[74],"fek":[75],"fekt":[75],"fa":[76],"fam":[76],"fame":[76],"famel":[76],"famele":[76],"sp":[77],"spa":[77],"spak":[77],"spake":[77],"spakem":[77],"spakemk":[77],"ek":[78],"ekt":[78],"sa":[79],"sat":[79],"sato":[79],"satof":[79],"ra":[80],"rat":[80],"rate":[80],"rateo":[80],"rateos":[80],"kom":[84],"komf":[84],"komfe":[84],"komfek":[84]},{"to":[4,5],"so":[45],"sof":[45],"r":[46],"rt":[46],"rtl":[46],"se":[47],"ses":[47],"sese":[47],"l":[55],"le":[55],"lem":[55],"leme":[55],"lemes":[55],"k":[59],"kl":[59],"klo":[59],"klom":[59],"klome":[59],"e":[61],"em":[61],"ema":[61],"emak":[61],"emake":[61],"tro":[63],"trop":[63]},{"r":[4],"re":[4],"rek":[4],"rekt":[4],"l":[5,45,47],"le":[5],"lef":[5],"left":[5],"la":[45,47],"lap":[45,47],"lape":[45,47],"lapel":[45,47],"o":[61],"om":[61],"e":[62],"em":[62],"ema":[62],"emak":[62],"emake":[62],"f":[63],"fa":[63],"fal":[63],"falo":[63]},{"fem":[45],"tro":[61],"trop":[61]},{"ke":[45],"kek":[45],"keke":[45],"keket":[45]},{"o":[45],"om":[45],"oml":[45],"omle":[45]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "4": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "6": { "id": "components-tailwind-text-story-vue", "kind": "story" }, "7": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-0", "kind": "variant" }, "8": { "id": "components-tailwind-text-story-vue:components-tailwind-text-story-vue-1", "kind": "variant" }, "9": { "id": "components-base-button-button-story-vue", "kind": "story" }, "10": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "11": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "12": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "13": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "14": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "15": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "16": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "17": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "18": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "19": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "20": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "21": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "22": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "23": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "24": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "25": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "26": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "27": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "28": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "29": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "30": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "31": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "32": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "33": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "34": { "id": "components-custom-marquee-marquee-story-vue:_default", "kind": "variant" }, "35": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "36": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "37": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "38": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "39": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "40": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "41": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "42": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "43": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "44": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "45": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "46": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "47": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "48": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "49": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "50": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "51": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "52": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "53": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "54": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "55": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "56": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "57": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "58": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "59": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "60": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "61": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "62": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "63": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "64": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "65": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "66": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "67": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "68": { "id": "tailwind", "kind": "story" }, "69": { "id": "tailwind:background-color", "kind": "variant" }, "70": { "id": "tailwind:text-color", "kind": "variant" }, "71": { "id": "tailwind:border-color", "kind": "variant" }, "72": { "id": "tailwind:padding", "kind": "variant" }, "73": { "id": "tailwind:margin", "kind": "variant" }, "74": { "id": "tailwind:font-size", "kind": "variant" }, "75": { "id": "tailwind:font-weight", "kind": "variant" }, "76": { "id": "tailwind:font-family", "kind": "variant" }, "77": { "id": "tailwind:letter-spacing", "kind": "variant" }, "78": { "id": "tailwind:line-height", "kind": "variant" }, "79": { "id": "tailwind:drop-shadow", "kind": "variant" }, "80": { "id": "tailwind:border-radius", "kind": "variant" }, "81": { "id": "tailwind:border-width", "kind": "variant" }, "82": { "id": "tailwind:width", "kind": "variant" }, "83": { "id": "tailwind:height", "kind": "variant" }, "84": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-ac914b1c.js"), true ? ["assets/search-docs-data-ac914b1c.js","assets/vendor-d61fed03.js"] : void 0);
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
