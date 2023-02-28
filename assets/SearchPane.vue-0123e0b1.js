import { _ as __vitePreload } from "./GenericMountStory.vue2-e4c94713.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bl as useFocus, f as watch, bm as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bn as flexsearch_bundleExports } from "./vendor-ef711c3e.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-04933866.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-33eb6d8e.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,3,4,8,9,10,11,12,13],"po":[0,1,2,3,4,8,9,10,11,12,13],"pot":[0,1,2,3,4,8,9,10,11,12,13],"poto":[0,1,2,3,4,8,9,10,11,12,13],"potom":[0,1,2,3,4,8,9,10,11,12,13],"k":[5,6,7,14,15,16,17,18,19,20,21,22,56,57,58,61,62,63,64],"kr":[5,6,7],"kre":[5,6,7],"kret":[5,6,7],"ka":[14,15,16,61,62,63,64],"kar":[14,15,16,61,62,63,64],"karo":[14,15,16],"karos":[14,15,16],"karose":[14,15,16],"karosel":[14,15,16],"ke":[17,18,19,20,21,22],"kek":[17,18,19,20,21,22],"kekp":[17,18,19,20,21,22],"kekpo":[17,18,19,20,21,22],"kekpos":[17,18,19,20,21,22],"e":[23,24,29,30,31,32,33],"em":[23,24],"emf":[23,24],"emfe":[23,24],"emfem":[23,24],"emfeme":[23,24],"emfemet":[23,24],"emfemete":[23,24],"t":[25,26,27,28,59,60,65,66,67,68,69,70,71,72,73,74,75,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96],"ta":[25,26,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96],"tat":[25,26],"tata":[25,26],"tatat":[25,26],"tatata":[25,26],"tatatap":[25,26],"tatatapl":[25,26],"tatataple":[25,26],"tr":[27,28,69,70,71,72,73,74,75],"tro":[27,28],"trop":[27,28],"trops":[27,28],"tropso":[27,28],"tropsom":[27,28],"tropsome":[27,28],"es":[29,30,31,32,33],"esp":[29,30,31,32,33],"espa":[29,30,31,32,33],"espam":[29,30,31,32,33],"espamt":[29,30,31,32,33],"espamta":[29,30,31,32,33],"espamtap":[29,30,31,32,33],"espamtapl":[29,30,31,32,33],"espamtaple":[29,30,31,32,33],"m":[34,35,36,37,38,39,40,41,76,77],"ma":[34,35,36,37,38,39],"mar":[34,35,36,37,38,39],"mark":[34,35,36,37,38,39],"marko":[34,35,36,37,38,39],"mo":[40,41,76,77],"mot":[40,41,76,77],"mota":[40,41],"motal":[40,41],"s":[42,43,46,47,48,49,50,51,52,53,54,55],"sk":[42,43],"ske":[42,43],"skel":[42,43],"skele":[42,43],"skelet":[42,43],"skeleto":[42,43],"skeletom":[42,43],"r":[44,45],"re":[44,45],"rep":[44,45],"repo":[44,45],"repom":[44,45],"sl":[46,47],"sle":[46,47],"slet":[46,47],"slete":[46,47],"sleter":[46,47],"st":[48,49],"ste":[48,49],"step":[48,49],"steps":[48,49],"sf":[50,51,52,53,54,55],"sfe":[50,51,52,53,54,55],"sfet":[50,51,52,53,54,55],"sfetk":[50,51,52,53,54,55],"kl":[56,57,58],"klo":[56,57,58],"klof":[56,57,58],"klofe":[56,57,58],"klofem":[56,57,58],"klofemk":[56,57,58],"tf":[59,60],"tfe":[59,60],"tfet":[59,60],"kart":[61,62,63,64],"karts":[61,62,63,64],"te":[65,66,67,68],"tes":[65,66,67,68],"test":[65,66,67,68],"tra":[69,70,71,72,73,74,75],"trak":[69,70,71,72,73,74,75],"mote":[76,77],"motef":[76,77],"motefe":[76,77],"motefek":[76,77],"motefeka":[76,77],"motefekat":[76,77],"motefekate":[76,77],"motefekateo":[76,77],"motefekateom":[76,77],"f":[78],"fr":[78],"fra":[78],"frap":[78],"frape":[78],"fraper":[78],"l":[79],"la":[79],"las":[79],"lase":[79],"tal":[80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96],"talf":[80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96],"talfe":[80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96],"talfem":[80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96],"talfemt":[80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96]},{"3":[62],"pol":[1],"pols":[1],"polse":[1],"k":[2,3,4,23,24,52,54,66],"kr":[2,3,4,66],"kra":[2,3,66],"krat":[2,3,66],"krate":[2,3,66],"kratem":[2,3,66],"kratemt":[2,3,66],"kre":[4],"kret":[4],"t":[5,6,7,10,20,22,41,43,45,49,55,77],"tr":[5,6,7,91],"tra":[5,6,7],"trak":[5,6,7],"l":[9,16,53,69,70,71,89,90],"lo":[9],"loa":[9],"loat":[9],"loate":[9],"loatem":[9],"loatemk":[9],"te":[10,26,28,41,43,45,49,55,77,82],"tes":[10,55,82],"tesa":[10,55],"tesap":[10,55],"tesapl":[10,55],"tesaple":[10,55],"tesaplet":[10,55],"a":[11,67],"ar":[11],"are":[11],"area":[11],"m":[12,51,63,85],"mo":[12,35,36,38,51,63],"mor":[12,36,38,51],"morm":[12,36,38,51],"morma":[12,36,38,51],"mormal":[12,36,38,51],"o":[13,31,64],"ot":[13],"ote":[13],"oter":[13],"oters":[13],"ko":[15,23,24,52,54],"kom":[15,23,24],"komo":[15],"komom":[15],"le":[16,69,70,71,89,90],"les":[16,69,70,71],"lest":[16,69,70,71],"p":[18,19,21,56,57,58,59,60,81,83,84,92,93],"pl":[18],"pla":[18],"plam":[18],"pa":[19,21,56,57,58,81,84],"pas":[19,21],"pase":[19,21],"ta":[20,22],"tap":[20,22],"tapl":[20,22],"taple":[20,22],"komt":[23,24],"komte":[23,24],"komtem":[23,24],"komtemt":[23,24],"tef":[26,28,41,43,45,49,77],"tefa":[26,28,41,43,45,49,77],"tefao":[26,28,41,43,45,49,77],"tefaol":[26,28,41,43,45,49,77],"tefaolt":[26,28,41,43,45,49,77],"f":[30,47,86,87,88,94,96],"fe":[30,94],"fer":[30],"fert":[30],"ferte":[30],"fertek":[30],"ferteka":[30],"fertekal":[30],"or":[31],"ore":[31],"ores":[31],"oreso":[31],"oresom":[31],"oresomt":[31],"oresomta":[31],"oresomtal":[31],"r":[32,33,37,39],"re":[32,33,37,39],"res":[32,33],"rese":[32,33],"reses":[32,33],"resesa":[32,33],"resesap":[32,33],"resesapl":[32,33],"resesaple":[32,33],"ref":[37,39],"refe":[37,39],"refer":[37,39],"refers":[37,39],"referse":[37,39],"fr":[47],"fro":[47],"from":[47],"kos":[52,54],"kost":[52,54],"kosto":[52,54],"kostom":[52,54],"la":[53],"lap":[53],"lape":[53],"lapel":[53],"pak":[56,57,58,81],"pakr":[56,57,58,81],"pakro":[56,57,58,81],"pakrom":[56,57,58,81],"pakromt":[56,57,58,81],"po":[59,60,83,92,93],"pos":[59,60],"3t":[62],"mom":[63],"momp":[63],"mompe":[63],"momper":[63],"of":[64],"ofe":[64],"ofer":[64],"am":[67],"ame":[67],"amem":[67],"amema":[67],"amemat":[67],"amemate":[67],"amematet":[67],"s":[68,72,73,74,75],"sl":[68],"sle":[68],"slet":[68],"slete":[68],"se":[72,73,74,75],"sem":[72,73,74,75],"semk":[72,73,74,75],"semkl":[72,73,74,75],"semkle":[72,73,74,75],"test":[82],"por":[83,92,93],"port":[83,92,93],"porte":[83,92,93],"porter":[83,92,93],"pat":[84],"pate":[84],"patem":[84],"patemk":[84],"ma":[85],"mar":[85],"mark":[85],"marke":[85],"markem":[85],"fo":[86,87,88,96],"fom":[86,87,88],"fomt":[86,87,88],"let":[89],"lete":[89],"leter":[89],"lem":[90],"leme":[90],"tro":[91],"trop":[91],"fet":[94],"e":[95],"ek":[95],"ekt":[95],"fol":[96]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"s":[3,9,20,22,86,89,91],"sa":[3,91],"sat":[3,91],"sato":[3,91],"satof":[3,91],"t":[4,11,33,57,58],"tr":[4],"tra":[4],"trak":[4],"l":[6,10],"le":[6],"lef":[6],"left":[6],"r":[7,38,75,92],"re":[7,75],"rek":[7],"rekt":[7],"sm":[9],"lk":[10],"te":[11,33,57,60,70,74],"tes":[11,33],"tesa":[11],"tesap":[11],"tesapl":[11],"tesaple":[11],"tesaplet":[11],"e":[18,47,90],"em":[18],"emp":[18],"empo":[18],"empot":[18],"se":[20,22,86],"sel":[20,22],"sele":[20,22],"selek":[20,22],"selekt":[20,22],"selekte":[20,22],"selekteo":[20,22],"selekteom":[20,22],"o":[24,63,68],"om":[24],"omt":[24],"omte":[24],"omtet":[24],"omtetl":[24],"omtetle":[24],"omtetlet":[24],"p":[32,64],"pa":[32],"pam":[32],"pame":[32],"pamel":[32],"test":[33],"k":[35,67,81,82,83,96],"ka":[35],"kap":[35],"rt":[38,39],"rtl":[38,39],"eo":[47],"eos":[47],"eos1":[47],"eos16":[47],"f":[52,53,93],"fe":[52,53,87,93],"fet":[52,53,93],"kol":[54,81,82,83],"kolo":[54,81,82,83],"kolor":[54,81,82,83],"tet":[57],"tetl":[57],"ta":[58],"tar":[58],"tark":[58],"tef":[60],"tefa":[60],"tefao":[60],"tefaol":[60],"tefaolt":[60],"of":[63],"po":[64],"pop":[64],"popl":[64],"pople":[64],"kr":[67],"kra":[67],"krat":[67],"krate":[67],"kratem":[67],"kratemt":[67],"op":[68],"tem":[70,74],"temo":[70],"tre":[71],"trel":[71],"trelo":[71],"tema":[74],"temam":[74],"temame":[74],"temamek":[74],"res":[75],"rest":[75],"restr":[75],"restre":[75],"restrek":[75],"restrekt":[75],"ko":[81,82,83,96],"ses":[86],"sese":[86],"fek":[87],"fekt":[87],"fa":[88],"fam":[88],"fame":[88],"famel":[88],"famele":[88],"sp":[89],"spa":[89],"spak":[89],"spake":[89],"spakem":[89],"spakemk":[89],"ek":[90],"ekt":[90],"ra":[92],"rat":[92],"rate":[92],"rateo":[92],"rateos":[92],"kom":[96],"komf":[96],"komfe":[96],"komfek":[96]},{"to":[6,7],"m":[21,22],"mo":[21,22],"mot":[21,22],"mote":[21,22],"moteo":[21,22],"moteom":[21,22],"ko":[35],"kos":[35],"kost":[35],"kosto":[35],"kostom":[35],"so":[52],"sof":[52],"r":[53],"rt":[53],"rtl":[53],"se":[54],"ses":[54],"sese":[54],"l":[63],"le":[63],"lem":[63],"leme":[63],"lemes":[63],"k":[71],"kl":[71],"klo":[71],"klom":[71],"klome":[71],"e":[73],"em":[73],"ema":[73],"emak":[73],"emake":[73],"tro":[75],"trop":[75]},{"r":[6],"re":[6],"rek":[6],"rekt":[6],"l":[7,52,54],"le":[7],"lef":[7],"left":[7],"a":[35],"am":[35],"ame":[35],"amem":[35],"amema":[35],"amemat":[35],"amemate":[35],"amemateo":[35],"amemateom":[35],"la":[52,54],"lap":[52,54],"lape":[52,54],"lapel":[52,54],"o":[73],"om":[73],"e":[74],"em":[74],"ema":[74],"emak":[74],"emake":[74],"f":[75],"fa":[75],"fal":[75],"falo":[75]},{"fem":[52],"tro":[73],"trop":[73]},{"ke":[52],"kek":[52],"keke":[52],"keket":[52]},{"o":[52],"om":[52],"oml":[52],"omle":[52]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "4": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-3", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "6": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "7": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "8": { "id": "components-base-button-button-story-vue", "kind": "story" }, "9": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "10": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "11": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "12": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "13": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "14": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "15": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "16": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "17": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "18": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "19": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "20": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "21": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-3", "kind": "variant" }, "22": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-4", "kind": "variant" }, "23": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "24": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "25": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "26": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "27": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "28": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "29": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "30": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "31": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "32": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "33": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "34": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "35": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "36": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "37": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "38": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "39": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "40": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "41": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "42": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "43": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "44": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "45": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "46": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "47": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "48": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "49": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "50": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "51": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "52": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "53": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "54": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "55": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "56": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "57": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "58": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-1", "kind": "variant" }, "59": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "60": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "61": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "62": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "63": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "64": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "65": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "66": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "67": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "68": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "69": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "70": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "71": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "72": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "73": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "74": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "75": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "76": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "77": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "78": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "79": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "80": { "id": "tailwind", "kind": "story" }, "81": { "id": "tailwind:background-color", "kind": "variant" }, "82": { "id": "tailwind:text-color", "kind": "variant" }, "83": { "id": "tailwind:border-color", "kind": "variant" }, "84": { "id": "tailwind:padding", "kind": "variant" }, "85": { "id": "tailwind:margin", "kind": "variant" }, "86": { "id": "tailwind:font-size", "kind": "variant" }, "87": { "id": "tailwind:font-weight", "kind": "variant" }, "88": { "id": "tailwind:font-family", "kind": "variant" }, "89": { "id": "tailwind:letter-spacing", "kind": "variant" }, "90": { "id": "tailwind:line-height", "kind": "variant" }, "91": { "id": "tailwind:drop-shadow", "kind": "variant" }, "92": { "id": "tailwind:border-radius", "kind": "variant" }, "93": { "id": "tailwind:border-width", "kind": "variant" }, "94": { "id": "tailwind:width", "kind": "variant" }, "95": { "id": "tailwind:height", "kind": "variant" }, "96": { "id": "tailwind:full-config", "kind": "variant" } } };
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
