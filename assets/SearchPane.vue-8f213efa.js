import { _ as __vitePreload } from "./GenericMountStory.vue2-3f9fdd21.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bm as useFocus, f as watch, bn as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bo as flexsearch_bundleExports } from "./vendor-2c81731e.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-6504776b.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-7bd683f6.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1,"99":1,"100":1,"101":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,3,4,5,15,16,17,18,19,20],"po":[0,1,2,3,4,5,15,16,17,18,19,20],"pot":[0,1,2,3,4,5,15,16,17,18,19,20],"poto":[0,1,2,3,4,5,15,16,17,18,19,20],"potom":[0,1,2,3,4,5,15,16,17,18,19,20],"k":[6,7,8,9,10,11,12,13,14,21,22,23,24,53,54,55,70,71,72,73],"kr":[6,7,8],"kre":[6,7,8],"kret":[6,7,8],"ke":[9,10,11,12,13,14],"kek":[9,10,11,12,13,14],"kekp":[9,10,11,12,13,14],"kekpo":[9,10,11,12,13,14],"kekpos":[9,10,11,12,13,14],"ka":[21,22,23,24,70,71,72,73],"kar":[21,22,23,24,70,71,72,73],"karo":[21,22,23,24],"karos":[21,22,23,24],"karose":[21,22,23,24],"karosel":[21,22,23,24],"t":[25,26,27,28,56,57,58,59,60,61,68,69,74,75,76,77,78,79,80,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101],"ta":[25,26,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101],"tat":[25,26],"tata":[25,26],"tatat":[25,26],"tatata":[25,26],"tatatap":[25,26],"tatatapl":[25,26],"tatataple":[25,26],"tr":[27,28,74,75,76,77,78,79,80],"tro":[27,28],"trop":[27,28],"trops":[27,28],"tropso":[27,28],"tropsom":[27,28],"tropsome":[27,28],"e":[29,30,31,32,33,34,35],"es":[29,30,31,32,33],"esp":[29,30,31,32,33],"espa":[29,30,31,32,33],"espam":[29,30,31,32,33],"espamt":[29,30,31,32,33],"espamta":[29,30,31,32,33],"espamtap":[29,30,31,32,33],"espamtapl":[29,30,31,32,33],"espamtaple":[29,30,31,32,33],"em":[34,35],"emf":[34,35],"emfe":[34,35],"emfem":[34,35],"emfeme":[34,35],"emfemet":[34,35],"emfemete":[34,35],"m":[36,37,38,39,40,41,42,43,44,81,82],"ma":[36,37,38,39,40,41,42],"mar":[36,37,38,39,40,41,42],"mark":[36,37,38,39,40,41,42],"marko":[36,37,38,39,40,41,42],"mo":[43,44,81,82],"mot":[43,44,81,82],"mota":[43,44],"motal":[43,44],"s":[45,46,49,50,51,52,62,63,64,65,66,67],"sk":[45,46],"ske":[45,46],"skel":[45,46],"skele":[45,46],"skelet":[45,46],"skeleto":[45,46],"skeletom":[45,46],"r":[47,48],"re":[47,48],"rep":[47,48],"repo":[47,48],"repom":[47,48],"st":[49,50],"ste":[49,50],"step":[49,50],"steps":[49,50],"sl":[51,52],"sle":[51,52],"slet":[51,52],"slete":[51,52],"sleter":[51,52],"kl":[53,54,55],"klo":[53,54,55],"klof":[53,54,55],"klofe":[53,54,55],"klofem":[53,54,55],"klofemk":[53,54,55],"te":[56,57,58,59,60,61],"tes":[56,57,58,59,60,61],"test":[56,57,58,59,60,61],"sf":[62,63,64,65,66,67],"sfe":[62,63,64,65,66,67],"sfet":[62,63,64,65,66,67],"sfetk":[62,63,64,65,66,67],"tf":[68,69],"tfe":[68,69],"tfet":[68,69],"kart":[70,71,72,73],"karts":[70,71,72,73],"tra":[74,75,76,77,78,79,80],"trak":[74,75,76,77,78,79,80],"mote":[81,82],"motef":[81,82],"motefe":[81,82],"motefek":[81,82],"motefeka":[81,82],"motefekat":[81,82],"motefekate":[81,82],"motefekateo":[81,82],"motefekateom":[81,82],"f":[83],"fr":[83],"fra":[83],"frap":[83],"frape":[83],"fraper":[83],"l":[84],"la":[84],"las":[84],"lase":[84],"tal":[85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101],"talf":[85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101],"talfe":[85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101],"talfem":[85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101],"talfemt":[85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]},{"3":[71],"pol":[1],"pols":[1],"polse":[1],"k":[2,3,4,34,35,57,64,66],"kr":[2,3,4,57],"kra":[2,3,57],"krat":[2,3,57],"krate":[2,3,57],"kratem":[2,3,57],"kratemt":[2,3,57],"kre":[4],"kret":[4],"t":[5,6,7,8,12,14,17,44,46,48,50,67,82],"to":[5],"tof":[5],"tofm":[5],"tofml":[5],"tofmlo":[5],"tofmloa":[5],"tofmloat":[5],"tr":[6,7,8,96],"tra":[6,7,8],"trak":[6,7,8],"p":[10,11,13,53,54,55,68,69,86,88,89,97,98],"pl":[10],"pla":[10],"plam":[10],"pa":[11,13,53,54,55,86,89],"pas":[11,13],"pase":[11,13],"ta":[12,14],"tap":[12,14],"tapl":[12,14],"taple":[12,14],"l":[16,23,65,74,75,76,94,95],"lo":[16],"loa":[16],"loat":[16],"loate":[16],"loatem":[16],"loatemk":[16],"te":[17,26,28,44,46,48,50,67,82,87],"tes":[17,67,87],"tesa":[17,67],"tesap":[17,67],"tesapl":[17,67],"tesaple":[17,67],"tesaplet":[17,67],"a":[18,58],"ar":[18],"are":[18],"area":[18],"m":[19,60,63,72,90],"mo":[19,38,39,41,63,72],"mor":[19,39,41,63],"morm":[19,39,41,63],"morma":[19,39,41,63],"mormal":[19,39,41,63],"o":[20,31,73],"ot":[20],"ote":[20],"oter":[20],"oters":[20],"ko":[22,34,35,64,66],"kom":[22,34,35],"komo":[22],"komom":[22],"le":[23,74,75,76,94,95],"les":[23,74,75,76],"lest":[23,74,75,76],"kal":[24],"kale":[24],"kaler":[24],"kalere":[24],"tef":[26,28,44,46,48,50,82],"tefa":[26,28,44,46,48,50,82],"tefao":[26,28,44,46,48,50,82],"tefaol":[26,28,44,46,48,50,82],"tefaolt":[26,28,44,46,48,50,82],"f":[30,37,52,91,92,93,99,101],"fe":[30,37,99],"fer":[30],"fert":[30],"ferte":[30],"fertek":[30],"ferteka":[30],"fertekal":[30],"or":[31],"ore":[31],"ores":[31],"oreso":[31],"oresom":[31],"oresomt":[31],"oresomta":[31],"oresomtal":[31],"r":[32,33,40,42,61],"re":[32,33,40,42],"res":[32,33],"rese":[32,33],"reses":[32,33],"resesa":[32,33],"resesap":[32,33],"resesapl":[32,33],"resesaple":[32,33],"komt":[34,35],"komte":[34,35],"komtem":[34,35],"komtemt":[34,35],"fea":[37],"feat":[37],"feato":[37],"feator":[37],"featore":[37],"featores":[37],"ref":[40,42],"refe":[40,42],"refer":[40,42],"refers":[40,42],"referse":[40,42],"fr":[52],"fro":[52],"from":[52],"pak":[53,54,55,86],"pakr":[53,54,55,86],"pakro":[53,54,55,86],"pakrom":[53,54,55,86],"pakromt":[53,54,55,86],"am":[58],"ame":[58],"amem":[58],"amema":[58],"amemat":[58],"amemate":[58],"amematet":[58],"s":[59,77,78,79,80],"sl":[59],"sle":[59],"slet":[59],"slete":[59],"ma":[60,90],"mak":[60],"make":[60],"makek":[60],"ro":[61],"rot":[61],"rota":[61],"rotat":[61],"rotate":[61],"kos":[64,66],"kost":[64,66],"kosto":[64,66],"kostom":[64,66],"la":[65],"lap":[65],"lape":[65],"lapel":[65],"po":[68,69,88,97,98],"pos":[68,69],"3t":[71],"mom":[72],"momp":[72],"mompe":[72],"momper":[72],"of":[73],"ofe":[73],"ofer":[73],"se":[77,78,79,80],"sem":[77,78,79,80],"semk":[77,78,79,80],"semkl":[77,78,79,80],"semkle":[77,78,79,80],"test":[87],"por":[88,97,98],"port":[88,97,98],"porte":[88,97,98],"porter":[88,97,98],"pat":[89],"pate":[89],"patem":[89],"patemk":[89],"mar":[90],"mark":[90],"marke":[90],"markem":[90],"fo":[91,92,93,101],"fom":[91,92,93],"fomt":[91,92,93],"let":[94],"lete":[94],"leter":[94],"lem":[95],"leme":[95],"tro":[96],"trop":[96],"fet":[99],"e":[100],"ek":[100],"ekt":[100],"fol":[101]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"s":[3,12,14,16,91,94,96],"sa":[3,96],"sat":[3,96],"sato":[3,96],"satof":[3,96],"t":[4,18,33,54,55],"tr":[4],"tra":[4],"trak":[4],"l":[7,17],"le":[7],"lef":[7],"left":[7],"r":[8,41,80,97],"re":[8,80],"rek":[8],"rekt":[8],"e":[10,52,95],"em":[10],"emp":[10],"empo":[10],"empot":[10],"se":[12,14,91],"sel":[12,14],"sele":[12,14],"selek":[12,14],"selekt":[12,14],"selekte":[12,14],"selekteo":[12,14],"selekteom":[12,14],"sm":[16],"lk":[17],"te":[18,33,54,69,75,79],"tes":[18,33],"tesa":[18],"tesap":[18],"tesapl":[18],"tesaple":[18],"tesaplet":[18],"p":[32,73],"pa":[32],"pam":[32],"pame":[32],"pamel":[32],"test":[33],"o":[35,59,72],"om":[35],"omt":[35],"omte":[35],"omtet":[35],"omtetl":[35],"omtetle":[35],"omtetlet":[35],"k":[38,58,86,87,88,101],"ka":[38],"kap":[38],"rt":[41,42],"rtl":[41,42],"eo":[52],"eos":[52],"eos1":[52],"eos16":[52],"tet":[54],"tetl":[54],"ta":[55],"tar":[55],"tark":[55],"kr":[58],"kra":[58],"krat":[58],"krate":[58],"kratem":[58],"kratemt":[58],"op":[59],"f":[64,65,98],"fe":[64,65,92,98],"fet":[64,65,98],"kol":[66,86,87,88],"kolo":[66,86,87,88],"kolor":[66,86,87,88],"tef":[69],"tefa":[69],"tefao":[69],"tefaol":[69],"tefaolt":[69],"of":[72],"po":[73],"pop":[73],"popl":[73],"pople":[73],"tem":[75,79],"temo":[75],"tre":[76],"trel":[76],"trelo":[76],"tema":[79],"temam":[79],"temame":[79],"temamek":[79],"res":[80],"rest":[80],"restr":[80],"restre":[80],"restrek":[80],"restrekt":[80],"ko":[86,87,88,101],"ses":[91],"sese":[91],"fek":[92],"fekt":[92],"fa":[93],"fam":[93],"fame":[93],"famel":[93],"famele":[93],"sp":[94],"spa":[94],"spak":[94],"spake":[94],"spakem":[94],"spakemk":[94],"ek":[95],"ekt":[95],"ra":[97],"rat":[97],"rate":[97],"rateo":[97],"rateos":[97],"kom":[101],"komf":[101],"komfe":[101],"komfek":[101]},{"to":[7,8],"m":[13,14],"mo":[13,14],"mot":[13,14],"mote":[13,14],"moteo":[13,14],"moteom":[13,14],"ko":[38],"kos":[38],"kost":[38],"kosto":[38],"kostom":[38],"so":[64],"sof":[64],"r":[65],"rt":[65],"rtl":[65],"se":[66],"ses":[66],"sese":[66],"l":[72],"le":[72],"lem":[72],"leme":[72],"lemes":[72],"k":[76],"kl":[76],"klo":[76],"klom":[76],"klome":[76],"e":[78],"em":[78],"ema":[78],"emak":[78],"emake":[78],"tro":[80],"trop":[80]},{"r":[7],"re":[7],"rek":[7],"rekt":[7],"l":[8,64,66],"le":[8],"lef":[8],"left":[8],"a":[38],"am":[38],"ame":[38],"amem":[38],"amema":[38],"amemat":[38],"amemate":[38],"amemateo":[38],"amemateom":[38],"la":[64,66],"lap":[64,66],"lape":[64,66],"lapel":[64,66],"o":[78],"om":[78],"e":[79],"em":[79],"ema":[79],"emak":[79],"emake":[79],"f":[80],"fa":[80],"fal":[80],"falo":[80]},{"fem":[64],"tro":[78],"trop":[78]},{"ke":[64],"kek":[64],"keke":[64],"keket":[64]},{"o":[64],"om":[64],"oml":[64],"omle":[64]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "4": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-3", "kind": "variant" }, "5": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-4", "kind": "variant" }, "6": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "7": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "8": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "9": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "10": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "11": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "12": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "13": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-3", "kind": "variant" }, "14": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-4", "kind": "variant" }, "15": { "id": "components-base-button-button-story-vue", "kind": "story" }, "16": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "17": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "18": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "19": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "20": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "21": { "id": "components-custom-carousel-carousel-story-vue", "kind": "story" }, "22": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-0", "kind": "variant" }, "23": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-1", "kind": "variant" }, "24": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-2", "kind": "variant" }, "25": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "26": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "27": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "28": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "29": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "30": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "31": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "32": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "33": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "34": { "id": "components-custom-infinite-content-infinitecontent-story-vue", "kind": "story" }, "35": { "id": "components-custom-infinite-content-infinitecontent-story-vue:components-custom-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "36": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "37": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "38": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "39": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "40": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "41": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "42": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-5", "kind": "variant" }, "43": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "44": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "45": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "46": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "47": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "48": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "49": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "50": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "51": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "52": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "53": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "54": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "55": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-1", "kind": "variant" }, "56": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "57": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "58": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "59": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "60": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-3", "kind": "variant" }, "61": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-4", "kind": "variant" }, "62": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "63": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "64": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "65": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "66": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "67": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "68": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "69": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "70": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "71": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "72": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "73": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "74": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "75": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "76": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "77": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "78": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "79": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "80": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "81": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "82": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "83": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "84": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "85": { "id": "tailwind", "kind": "story" }, "86": { "id": "tailwind:background-color", "kind": "variant" }, "87": { "id": "tailwind:text-color", "kind": "variant" }, "88": { "id": "tailwind:border-color", "kind": "variant" }, "89": { "id": "tailwind:padding", "kind": "variant" }, "90": { "id": "tailwind:margin", "kind": "variant" }, "91": { "id": "tailwind:font-size", "kind": "variant" }, "92": { "id": "tailwind:font-weight", "kind": "variant" }, "93": { "id": "tailwind:font-family", "kind": "variant" }, "94": { "id": "tailwind:letter-spacing", "kind": "variant" }, "95": { "id": "tailwind:line-height", "kind": "variant" }, "96": { "id": "tailwind:drop-shadow", "kind": "variant" }, "97": { "id": "tailwind:border-radius", "kind": "variant" }, "98": { "id": "tailwind:border-width", "kind": "variant" }, "99": { "id": "tailwind:width", "kind": "variant" }, "100": { "id": "tailwind:height", "kind": "variant" }, "101": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-d2fabea1.js"), true ? ["assets/search-docs-data-d2fabea1.js","assets/vendor-2c81731e.js"] : void 0);
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
