import { _ as __vitePreload } from "./GenericMountStory.vue2-851a922c.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bl as useFocus, f as watch, bm as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bn as flexsearch_bundleExports } from "./vendor-33f7b9d9.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-44507116.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-0466b78c.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,3,4,8,9,10,11,12,13],"po":[0,1,2,3,4,8,9,10,11,12,13],"pot":[0,1,2,3,4,8,9,10,11,12,13],"poto":[0,1,2,3,4,8,9,10,11,12,13],"potom":[0,1,2,3,4,8,9,10,11,12,13],"k":[5,6,7,14,15,16,17,18,19,22,23,24,51,52,53,54,63,64,65],"kr":[5,6,7],"kre":[5,6,7],"kret":[5,6,7],"ke":[14,15,16,17,18,19],"kek":[14,15,16,17,18,19],"kekp":[14,15,16,17,18,19],"kekpo":[14,15,16,17,18,19],"kekpos":[14,15,16,17,18,19],"e":[20,21,29,30,31,32,33],"em":[20,21],"emf":[20,21],"emfe":[20,21],"emfem":[20,21],"emfeme":[20,21],"emfemet":[20,21],"emfemete":[20,21],"ka":[22,23,24,51,52,53,54],"kar":[22,23,24,51,52,53,54],"karo":[22,23,24],"karos":[22,23,24],"karose":[22,23,24],"karosel":[22,23,24],"t":[25,26,27,28,61,62,66,67,68,69,70,71,72,73,74,75,76,77,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98],"tr":[25,26,71,72,73,74,75,76,77],"tro":[25,26],"trop":[25,26],"trops":[25,26],"tropso":[25,26],"tropsom":[25,26],"tropsome":[25,26],"ta":[27,28,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98],"tat":[27,28],"tata":[27,28],"tatat":[27,28],"tatata":[27,28],"tatatap":[27,28],"tatatapl":[27,28],"tatataple":[27,28],"es":[29,30,31,32,33],"esp":[29,30,31,32,33],"espa":[29,30,31,32,33],"espam":[29,30,31,32,33],"espamt":[29,30,31,32,33],"espamta":[29,30,31,32,33],"espamtap":[29,30,31,32,33],"espamtapl":[29,30,31,32,33],"espamtaple":[29,30,31,32,33],"m":[34,35,36,37,38,39,40,41,42,78,79],"ma":[34,35,36,37,38,39,40],"mar":[34,35,36,37,38,39,40],"mark":[34,35,36,37,38,39,40],"marko":[34,35,36,37,38,39,40],"mo":[41,42,78,79],"mot":[41,42,78,79],"mota":[41,42],"motal":[41,42],"r":[43,44],"re":[43,44],"rep":[43,44],"repo":[43,44],"repom":[43,44],"s":[45,46,47,48,49,50,55,56,57,58,59,60],"sk":[45,46],"ske":[45,46],"skel":[45,46],"skele":[45,46],"skelet":[45,46],"skeleto":[45,46],"skeletom":[45,46],"sl":[47,48],"sle":[47,48],"slet":[47,48],"slete":[47,48],"sleter":[47,48],"st":[49,50],"ste":[49,50],"step":[49,50],"steps":[49,50],"kart":[51,52,53,54],"karts":[51,52,53,54],"sf":[55,56,57,58,59,60],"sfe":[55,56,57,58,59,60],"sfet":[55,56,57,58,59,60],"sfetk":[55,56,57,58,59,60],"tf":[61,62],"tfe":[61,62],"tfet":[61,62],"kl":[63,64,65],"klo":[63,64,65],"klof":[63,64,65],"klofe":[63,64,65],"klofem":[63,64,65],"klofemk":[63,64,65],"te":[66,67,68,69,70],"tes":[66,67,68,69,70],"test":[66,67,68,69,70],"tra":[71,72,73,74,75,76,77],"trak":[71,72,73,74,75,76,77],"mote":[78,79],"motef":[78,79],"motefe":[78,79],"motefek":[78,79],"motefeka":[78,79],"motefekat":[78,79],"motefekate":[78,79],"motefekateo":[78,79],"motefekateom":[78,79],"f":[80],"fr":[80],"fra":[80],"frap":[80],"frape":[80],"fraper":[80],"l":[81],"la":[81],"las":[81],"lase":[81],"tal":[82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98],"talf":[82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98],"talfe":[82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98],"talfem":[82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98],"talfemt":[82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98]},{"3":[52],"pol":[1],"pols":[1],"polse":[1],"k":[2,3,4,20,21,57,59,67],"kr":[2,3,4,67],"kra":[2,3,67],"krat":[2,3,67],"krate":[2,3,67],"kratem":[2,3,67],"kratemt":[2,3,67],"kre":[4],"kret":[4],"t":[5,6,7,10,17,19,42,44,46,50,60,79],"tr":[5,6,7,93],"tra":[5,6,7],"trak":[5,6,7],"l":[9,24,58,71,72,73,91,92],"lo":[9],"loa":[9],"loat":[9],"loate":[9],"loatem":[9],"loatemk":[9],"te":[10,26,28,42,44,46,50,60,79,84],"tes":[10,60,84],"tesa":[10,60],"tesap":[10,60],"tesapl":[10,60],"tesaple":[10,60],"tesaplet":[10,60],"a":[11,68],"ar":[11],"are":[11],"area":[11],"m":[12,53,56,70,87],"mo":[12,36,37,39,53,56],"mor":[12,37,39,56],"morm":[12,37,39,56],"morma":[12,37,39,56],"mormal":[12,37,39,56],"o":[13,31,54],"ot":[13],"ote":[13],"oter":[13],"oters":[13],"p":[15,16,18,61,62,63,64,65,83,85,86,94,95],"pl":[15],"pla":[15],"plam":[15],"pa":[16,18,63,64,65,83,86],"pas":[16,18],"pase":[16,18],"ta":[17,19],"tap":[17,19],"tapl":[17,19],"taple":[17,19],"ko":[20,21,23,57,59],"kom":[20,21,23],"komt":[20,21],"komte":[20,21],"komtem":[20,21],"komtemt":[20,21],"komo":[23],"komom":[23],"le":[24,71,72,73,91,92],"les":[24,71,72,73],"lest":[24,71,72,73],"tef":[26,28,42,44,46,50,79],"tefa":[26,28,42,44,46,50,79],"tefao":[26,28,42,44,46,50,79],"tefaol":[26,28,42,44,46,50,79],"tefaolt":[26,28,42,44,46,50,79],"f":[30,35,48,88,89,90,96,98],"fe":[30,35,96],"fer":[30],"fert":[30],"ferte":[30],"fertek":[30],"ferteka":[30],"fertekal":[30],"or":[31],"ore":[31],"ores":[31],"oreso":[31],"oresom":[31],"oresomt":[31],"oresomta":[31],"oresomtal":[31],"r":[32,33,38,40],"re":[32,33,38,40],"res":[32,33],"rese":[32,33],"reses":[32,33],"resesa":[32,33],"resesap":[32,33],"resesapl":[32,33],"resesaple":[32,33],"fea":[35],"feat":[35],"feato":[35],"feator":[35],"featore":[35],"featores":[35],"ref":[38,40],"refe":[38,40],"refer":[38,40],"refers":[38,40],"referse":[38,40],"fr":[48],"fro":[48],"from":[48],"3t":[52],"mom":[53],"momp":[53],"mompe":[53],"momper":[53],"of":[54],"ofe":[54],"ofer":[54],"kos":[57,59],"kost":[57,59],"kosto":[57,59],"kostom":[57,59],"la":[58],"lap":[58],"lape":[58],"lapel":[58],"po":[61,62,85,94,95],"pos":[61,62],"pak":[63,64,65,83],"pakr":[63,64,65,83],"pakro":[63,64,65,83],"pakrom":[63,64,65,83],"pakromt":[63,64,65,83],"am":[68],"ame":[68],"amem":[68],"amema":[68],"amemat":[68],"amemate":[68],"amematet":[68],"s":[69,74,75,76,77],"sl":[69],"sle":[69],"slet":[69],"slete":[69],"ma":[70,87],"mak":[70],"make":[70],"makek":[70],"se":[74,75,76,77],"sem":[74,75,76,77],"semk":[74,75,76,77],"semkl":[74,75,76,77],"semkle":[74,75,76,77],"test":[84],"por":[85,94,95],"port":[85,94,95],"porte":[85,94,95],"porter":[85,94,95],"pat":[86],"pate":[86],"patem":[86],"patemk":[86],"mar":[87],"mark":[87],"marke":[87],"markem":[87],"fo":[88,89,90,98],"fom":[88,89,90],"fomt":[88,89,90],"let":[91],"lete":[91],"leter":[91],"lem":[92],"leme":[92],"tro":[93],"trop":[93],"fet":[96],"e":[97],"ek":[97],"ekt":[97],"fol":[98]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"s":[3,9,17,19,88,91,93],"sa":[3,93],"sat":[3,93],"sato":[3,93],"satof":[3,93],"t":[4,11,33,64,65],"tr":[4],"tra":[4],"trak":[4],"l":[6,10],"le":[6],"lef":[6],"left":[6],"r":[7,39,77,94],"re":[7,77],"rek":[7],"rekt":[7],"sm":[9],"lk":[10],"te":[11,33,62,64,72,76],"tes":[11,33],"tesa":[11],"tesap":[11],"tesapl":[11],"tesaple":[11],"tesaplet":[11],"e":[15,48,92],"em":[15],"emp":[15],"empo":[15],"empot":[15],"se":[17,19,88],"sel":[17,19],"sele":[17,19],"selek":[17,19],"selekt":[17,19],"selekte":[17,19],"selekteo":[17,19],"selekteom":[17,19],"o":[21,53,69],"om":[21],"omt":[21],"omte":[21],"omtet":[21],"omtetl":[21],"omtetle":[21],"omtetlet":[21],"p":[32,54],"pa":[32],"pam":[32],"pame":[32],"pamel":[32],"test":[33],"k":[36,68,83,84,85,98],"ka":[36],"kap":[36],"rt":[39,40],"rtl":[39,40],"eo":[48],"eos":[48],"eos1":[48],"eos16":[48],"of":[53],"po":[54],"pop":[54],"popl":[54],"pople":[54],"f":[57,58,95],"fe":[57,58,89,95],"fet":[57,58,95],"kol":[59,83,84,85],"kolo":[59,83,84,85],"kolor":[59,83,84,85],"tef":[62],"tefa":[62],"tefao":[62],"tefaol":[62],"tefaolt":[62],"tet":[64],"tetl":[64],"ta":[65],"tar":[65],"tark":[65],"kr":[68],"kra":[68],"krat":[68],"krate":[68],"kratem":[68],"kratemt":[68],"op":[69],"tem":[72,76],"temo":[72],"tre":[73],"trel":[73],"trelo":[73],"tema":[76],"temam":[76],"temame":[76],"temamek":[76],"res":[77],"rest":[77],"restr":[77],"restre":[77],"restrek":[77],"restrekt":[77],"ko":[83,84,85,98],"ses":[88],"sese":[88],"fek":[89],"fekt":[89],"fa":[90],"fam":[90],"fame":[90],"famel":[90],"famele":[90],"sp":[91],"spa":[91],"spak":[91],"spake":[91],"spakem":[91],"spakemk":[91],"ek":[92],"ekt":[92],"ra":[94],"rat":[94],"rate":[94],"rateo":[94],"rateos":[94],"kom":[98],"komf":[98],"komfe":[98],"komfek":[98]},{"to":[6,7],"m":[18,19],"mo":[18,19],"mot":[18,19],"mote":[18,19],"moteo":[18,19],"moteom":[18,19],"ko":[36],"kos":[36],"kost":[36],"kosto":[36],"kostom":[36],"l":[53],"le":[53],"lem":[53],"leme":[53],"lemes":[53],"so":[57],"sof":[57],"r":[58],"rt":[58],"rtl":[58],"se":[59],"ses":[59],"sese":[59],"k":[73],"kl":[73],"klo":[73],"klom":[73],"klome":[73],"e":[75],"em":[75],"ema":[75],"emak":[75],"emake":[75],"tro":[77],"trop":[77]},{"r":[6],"re":[6],"rek":[6],"rekt":[6],"l":[7,57,59],"le":[7],"lef":[7],"left":[7],"a":[36],"am":[36],"ame":[36],"amem":[36],"amema":[36],"amemat":[36],"amemate":[36],"amemateo":[36],"amemateom":[36],"la":[57,59],"lap":[57,59],"lape":[57,59],"lapel":[57,59],"o":[75],"om":[75],"e":[76],"em":[76],"ema":[76],"emak":[76],"emake":[76],"f":[77],"fa":[77],"fal":[77],"falo":[77]},{"fem":[57],"tro":[75],"trop":[75]},{"ke":[57],"kek":[57],"keke":[57],"keket":[57]},{"o":[57],"om":[57],"oml":[57],"omle":[57]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "4": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-3", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "6": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "7": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "8": { "id": "components-base-button-button-story-vue", "kind": "story" }, "9": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "10": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "11": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "12": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "13": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "14": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "15": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "16": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "17": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "18": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-3", "kind": "variant" }, "19": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-4", "kind": "variant" }, "20": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "21": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "22": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "23": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "24": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "25": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "26": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "27": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "28": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "29": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "30": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "31": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "32": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "33": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "34": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "35": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "36": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "37": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "38": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "39": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "40": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-5", "kind": "variant" }, "41": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "42": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "43": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "44": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "45": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "46": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "47": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "48": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "49": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "50": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "51": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "52": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "53": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "54": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "55": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "56": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "57": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "58": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "59": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "60": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "61": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "62": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "63": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "64": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "65": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-1", "kind": "variant" }, "66": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "67": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "68": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "69": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "70": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-3", "kind": "variant" }, "71": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "72": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "73": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "74": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "75": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "76": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "77": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "78": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "79": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "80": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "81": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "82": { "id": "tailwind", "kind": "story" }, "83": { "id": "tailwind:background-color", "kind": "variant" }, "84": { "id": "tailwind:text-color", "kind": "variant" }, "85": { "id": "tailwind:border-color", "kind": "variant" }, "86": { "id": "tailwind:padding", "kind": "variant" }, "87": { "id": "tailwind:margin", "kind": "variant" }, "88": { "id": "tailwind:font-size", "kind": "variant" }, "89": { "id": "tailwind:font-weight", "kind": "variant" }, "90": { "id": "tailwind:font-family", "kind": "variant" }, "91": { "id": "tailwind:letter-spacing", "kind": "variant" }, "92": { "id": "tailwind:line-height", "kind": "variant" }, "93": { "id": "tailwind:drop-shadow", "kind": "variant" }, "94": { "id": "tailwind:border-radius", "kind": "variant" }, "95": { "id": "tailwind:border-width", "kind": "variant" }, "96": { "id": "tailwind:width", "kind": "variant" }, "97": { "id": "tailwind:height", "kind": "variant" }, "98": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-a49362af.js"), true ? ["assets/search-docs-data-a49362af.js","assets/vendor-33f7b9d9.js"] : void 0);
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
