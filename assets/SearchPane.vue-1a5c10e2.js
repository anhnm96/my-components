import { _ as __vitePreload } from "./GenericMountStory.vue2-17e4f321.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bl as useFocus, f as watch, bm as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bn as flexsearch_bundleExports } from "./vendor-ef711c3e.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-0cccb3d3.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-59b5ec5c.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,3,4,8,9,10,11,12,13],"po":[0,1,2,3,4,8,9,10,11,12,13],"pot":[0,1,2,3,4,8,9,10,11,12,13],"poto":[0,1,2,3,4,8,9,10,11,12,13],"potom":[0,1,2,3,4,8,9,10,11,12,13],"k":[5,6,7,14,15,16,17,18,19,20,21,22,59,60,61,62,63,64,65],"kr":[5,6,7],"kre":[5,6,7],"kret":[5,6,7],"ka":[14,15,16,62,63,64,65],"kar":[14,15,16,62,63,64,65],"karo":[14,15,16],"karos":[14,15,16],"karose":[14,15,16],"karosel":[14,15,16],"ke":[17,18,19,20,21,22],"kek":[17,18,19,20,21,22],"kekp":[17,18,19,20,21,22],"kekpo":[17,18,19,20,21,22],"kekpos":[17,18,19,20,21,22],"e":[23,24,29,30,31,32,33],"em":[23,24],"emf":[23,24],"emfe":[23,24],"emfem":[23,24],"emfeme":[23,24],"emfemet":[23,24],"emfemete":[23,24],"t":[25,26,27,28,57,58,66,67,68,69,70,71,72,73,74,75,76,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97],"ta":[25,26,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97],"tat":[25,26],"tata":[25,26],"tatat":[25,26],"tatata":[25,26],"tatatap":[25,26],"tatatapl":[25,26],"tatataple":[25,26],"tr":[27,28,70,71,72,73,74,75,76],"tro":[27,28],"trop":[27,28],"trops":[27,28],"tropso":[27,28],"tropsom":[27,28],"tropsome":[27,28],"es":[29,30,31,32,33],"esp":[29,30,31,32,33],"espa":[29,30,31,32,33],"espam":[29,30,31,32,33],"espamt":[29,30,31,32,33],"espamta":[29,30,31,32,33],"espamtap":[29,30,31,32,33],"espamtapl":[29,30,31,32,33],"espamtaple":[29,30,31,32,33],"m":[34,35,36,37,38,39,40,41,42,77,78],"ma":[34,35,36,37,38,39,40],"mar":[34,35,36,37,38,39,40],"mark":[34,35,36,37,38,39,40],"marko":[34,35,36,37,38,39,40],"mo":[41,42,77,78],"mot":[41,42,77,78],"mota":[41,42],"motal":[41,42],"r":[43,44],"re":[43,44],"rep":[43,44],"repo":[43,44],"repom":[43,44],"s":[45,46,47,48,49,50,51,52,53,54,55,56],"sk":[45,46],"ske":[45,46],"skel":[45,46],"skele":[45,46],"skelet":[45,46],"skeleto":[45,46],"skeletom":[45,46],"sl":[47,48],"sle":[47,48],"slet":[47,48],"slete":[47,48],"sleter":[47,48],"st":[49,50],"ste":[49,50],"step":[49,50],"steps":[49,50],"sf":[51,52,53,54,55,56],"sfe":[51,52,53,54,55,56],"sfet":[51,52,53,54,55,56],"sfetk":[51,52,53,54,55,56],"tf":[57,58],"tfe":[57,58],"tfet":[57,58],"kl":[59,60,61],"klo":[59,60,61],"klof":[59,60,61],"klofe":[59,60,61],"klofem":[59,60,61],"klofemk":[59,60,61],"kart":[62,63,64,65],"karts":[62,63,64,65],"te":[66,67,68,69],"tes":[66,67,68,69],"test":[66,67,68,69],"tra":[70,71,72,73,74,75,76],"trak":[70,71,72,73,74,75,76],"mote":[77,78],"motef":[77,78],"motefe":[77,78],"motefek":[77,78],"motefeka":[77,78],"motefekat":[77,78],"motefekate":[77,78],"motefekateo":[77,78],"motefekateom":[77,78],"f":[79],"fr":[79],"fra":[79],"frap":[79],"frape":[79],"fraper":[79],"l":[80],"la":[80],"las":[80],"lase":[80],"tal":[81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97],"talf":[81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97],"talfe":[81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97],"talfem":[81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97],"talfemt":[81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97]},{"3":[63],"pol":[1],"pols":[1],"polse":[1],"k":[2,3,4,23,24,53,55,67],"kr":[2,3,4,67],"kra":[2,3,67],"krat":[2,3,67],"krate":[2,3,67],"kratem":[2,3,67],"kratemt":[2,3,67],"kre":[4],"kret":[4],"t":[5,6,7,10,20,22,42,44,46,50,56,78],"tr":[5,6,7,92],"tra":[5,6,7],"trak":[5,6,7],"l":[9,16,54,70,71,72,90,91],"lo":[9],"loa":[9],"loat":[9],"loate":[9],"loatem":[9],"loatemk":[9],"te":[10,26,28,42,44,46,50,56,78,83],"tes":[10,56,83],"tesa":[10,56],"tesap":[10,56],"tesapl":[10,56],"tesaple":[10,56],"tesaplet":[10,56],"a":[11,68],"ar":[11],"are":[11],"area":[11],"m":[12,52,64,86],"mo":[12,36,37,39,52,64],"mor":[12,37,39,52],"morm":[12,37,39,52],"morma":[12,37,39,52],"mormal":[12,37,39,52],"o":[13,31,65],"ot":[13],"ote":[13],"oter":[13],"oters":[13],"ko":[15,23,24,53,55],"kom":[15,23,24],"komo":[15],"komom":[15],"le":[16,70,71,72,90,91],"les":[16,70,71,72],"lest":[16,70,71,72],"p":[18,19,21,57,58,59,60,61,82,84,85,93,94],"pl":[18],"pla":[18],"plam":[18],"pa":[19,21,59,60,61,82,85],"pas":[19,21],"pase":[19,21],"ta":[20,22],"tap":[20,22],"tapl":[20,22],"taple":[20,22],"komt":[23,24],"komte":[23,24],"komtem":[23,24],"komtemt":[23,24],"tef":[26,28,42,44,46,50,78],"tefa":[26,28,42,44,46,50,78],"tefao":[26,28,42,44,46,50,78],"tefaol":[26,28,42,44,46,50,78],"tefaolt":[26,28,42,44,46,50,78],"f":[30,35,48,87,88,89,95,97],"fe":[30,35,95],"fer":[30],"fert":[30],"ferte":[30],"fertek":[30],"ferteka":[30],"fertekal":[30],"or":[31],"ore":[31],"ores":[31],"oreso":[31],"oresom":[31],"oresomt":[31],"oresomta":[31],"oresomtal":[31],"r":[32,33,38,40],"re":[32,33,38,40],"res":[32,33],"rese":[32,33],"reses":[32,33],"resesa":[32,33],"resesap":[32,33],"resesapl":[32,33],"resesaple":[32,33],"fea":[35],"feat":[35],"feato":[35],"feator":[35],"featore":[35],"featores":[35],"ref":[38,40],"refe":[38,40],"refer":[38,40],"refers":[38,40],"referse":[38,40],"fr":[48],"fro":[48],"from":[48],"kos":[53,55],"kost":[53,55],"kosto":[53,55],"kostom":[53,55],"la":[54],"lap":[54],"lape":[54],"lapel":[54],"po":[57,58,84,93,94],"pos":[57,58],"pak":[59,60,61,82],"pakr":[59,60,61,82],"pakro":[59,60,61,82],"pakrom":[59,60,61,82],"pakromt":[59,60,61,82],"3t":[63],"mom":[64],"momp":[64],"mompe":[64],"momper":[64],"of":[65],"ofe":[65],"ofer":[65],"am":[68],"ame":[68],"amem":[68],"amema":[68],"amemat":[68],"amemate":[68],"amematet":[68],"s":[69,73,74,75,76],"sl":[69],"sle":[69],"slet":[69],"slete":[69],"se":[73,74,75,76],"sem":[73,74,75,76],"semk":[73,74,75,76],"semkl":[73,74,75,76],"semkle":[73,74,75,76],"test":[83],"por":[84,93,94],"port":[84,93,94],"porte":[84,93,94],"porter":[84,93,94],"pat":[85],"pate":[85],"patem":[85],"patemk":[85],"ma":[86],"mar":[86],"mark":[86],"marke":[86],"markem":[86],"fo":[87,88,89,97],"fom":[87,88,89],"fomt":[87,88,89],"let":[90],"lete":[90],"leter":[90],"lem":[91],"leme":[91],"tro":[92],"trop":[92],"fet":[95],"e":[96],"ek":[96],"ekt":[96],"fol":[97]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"s":[3,9,20,22,87,90,92],"sa":[3,92],"sat":[3,92],"sato":[3,92],"satof":[3,92],"t":[4,11,33,60,61],"tr":[4],"tra":[4],"trak":[4],"l":[6,10],"le":[6],"lef":[6],"left":[6],"r":[7,39,76,93],"re":[7,76],"rek":[7],"rekt":[7],"sm":[9],"lk":[10],"te":[11,33,58,60,71,75],"tes":[11,33],"tesa":[11],"tesap":[11],"tesapl":[11],"tesaple":[11],"tesaplet":[11],"e":[18,48,91],"em":[18],"emp":[18],"empo":[18],"empot":[18],"se":[20,22,87],"sel":[20,22],"sele":[20,22],"selek":[20,22],"selekt":[20,22],"selekte":[20,22],"selekteo":[20,22],"selekteom":[20,22],"o":[24,64,69],"om":[24],"omt":[24],"omte":[24],"omtet":[24],"omtetl":[24],"omtetle":[24],"omtetlet":[24],"p":[32,65],"pa":[32],"pam":[32],"pame":[32],"pamel":[32],"test":[33],"k":[36,68,82,83,84,97],"ka":[36],"kap":[36],"rt":[39,40],"rtl":[39,40],"eo":[48],"eos":[48],"eos1":[48],"eos16":[48],"f":[53,54,94],"fe":[53,54,88,94],"fet":[53,54,94],"kol":[55,82,83,84],"kolo":[55,82,83,84],"kolor":[55,82,83,84],"tef":[58],"tefa":[58],"tefao":[58],"tefaol":[58],"tefaolt":[58],"tet":[60],"tetl":[60],"ta":[61],"tar":[61],"tark":[61],"of":[64],"po":[65],"pop":[65],"popl":[65],"pople":[65],"kr":[68],"kra":[68],"krat":[68],"krate":[68],"kratem":[68],"kratemt":[68],"op":[69],"tem":[71,75],"temo":[71],"tre":[72],"trel":[72],"trelo":[72],"tema":[75],"temam":[75],"temame":[75],"temamek":[75],"res":[76],"rest":[76],"restr":[76],"restre":[76],"restrek":[76],"restrekt":[76],"ko":[82,83,84,97],"ses":[87],"sese":[87],"fek":[88],"fekt":[88],"fa":[89],"fam":[89],"fame":[89],"famel":[89],"famele":[89],"sp":[90],"spa":[90],"spak":[90],"spake":[90],"spakem":[90],"spakemk":[90],"ek":[91],"ekt":[91],"ra":[93],"rat":[93],"rate":[93],"rateo":[93],"rateos":[93],"kom":[97],"komf":[97],"komfe":[97],"komfek":[97]},{"to":[6,7],"m":[21,22],"mo":[21,22],"mot":[21,22],"mote":[21,22],"moteo":[21,22],"moteom":[21,22],"ko":[36],"kos":[36],"kost":[36],"kosto":[36],"kostom":[36],"so":[53],"sof":[53],"r":[54],"rt":[54],"rtl":[54],"se":[55],"ses":[55],"sese":[55],"l":[64],"le":[64],"lem":[64],"leme":[64],"lemes":[64],"k":[72],"kl":[72],"klo":[72],"klom":[72],"klome":[72],"e":[74],"em":[74],"ema":[74],"emak":[74],"emake":[74],"tro":[76],"trop":[76]},{"r":[6],"re":[6],"rek":[6],"rekt":[6],"l":[7,53,55],"le":[7],"lef":[7],"left":[7],"a":[36],"am":[36],"ame":[36],"amem":[36],"amema":[36],"amemat":[36],"amemate":[36],"amemateo":[36],"amemateom":[36],"la":[53,55],"lap":[53,55],"lape":[53,55],"lapel":[53,55],"o":[74],"om":[74],"e":[75],"em":[75],"ema":[75],"emak":[75],"emake":[75],"f":[76],"fa":[76],"fal":[76],"falo":[76]},{"fem":[53],"tro":[74],"trop":[74]},{"ke":[53],"kek":[53],"keke":[53],"keket":[53]},{"o":[53],"om":[53],"oml":[53],"omle":[53]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "4": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-3", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "6": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "7": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "8": { "id": "components-base-button-button-story-vue", "kind": "story" }, "9": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "10": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "11": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "12": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "13": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "14": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "15": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "16": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "17": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "18": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "19": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "20": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "21": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-3", "kind": "variant" }, "22": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-4", "kind": "variant" }, "23": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "24": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "25": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "26": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "27": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "28": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "29": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "30": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "31": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "32": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "33": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "34": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "35": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "36": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "37": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "38": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "39": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "40": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-5", "kind": "variant" }, "41": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "42": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "43": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "44": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "45": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "46": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "47": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "48": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "49": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "50": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "51": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "52": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "53": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "54": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "55": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "56": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "57": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "58": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "59": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "60": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "61": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-1", "kind": "variant" }, "62": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "63": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "64": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "65": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "66": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "67": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "68": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "69": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "70": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "71": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "72": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "73": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "74": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "75": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "76": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "77": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "78": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "79": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "80": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "81": { "id": "tailwind", "kind": "story" }, "82": { "id": "tailwind:background-color", "kind": "variant" }, "83": { "id": "tailwind:text-color", "kind": "variant" }, "84": { "id": "tailwind:border-color", "kind": "variant" }, "85": { "id": "tailwind:padding", "kind": "variant" }, "86": { "id": "tailwind:margin", "kind": "variant" }, "87": { "id": "tailwind:font-size", "kind": "variant" }, "88": { "id": "tailwind:font-weight", "kind": "variant" }, "89": { "id": "tailwind:font-family", "kind": "variant" }, "90": { "id": "tailwind:letter-spacing", "kind": "variant" }, "91": { "id": "tailwind:line-height", "kind": "variant" }, "92": { "id": "tailwind:drop-shadow", "kind": "variant" }, "93": { "id": "tailwind:border-radius", "kind": "variant" }, "94": { "id": "tailwind:border-width", "kind": "variant" }, "95": { "id": "tailwind:width", "kind": "variant" }, "96": { "id": "tailwind:height", "kind": "variant" }, "97": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-66fc8c3c.js"), true ? ["assets/search-docs-data-66fc8c3c.js","assets/vendor-ef711c3e.js"] : void 0);
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
