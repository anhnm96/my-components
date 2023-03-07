import { _ as __vitePreload } from "./GenericMountStory.vue2-9aa31a8b.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bl as useFocus, f as watch, bm as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bn as flexsearch_bundleExports } from "./vendor-51faf694.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-1ab8deaa.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-84548f84.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1,"99":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,3,4,51,52,53,54,55,56],"po":[0,1,2,3,4,51,52,53,54,55,56],"pot":[0,1,2,3,4,51,52,53,54,55,56],"poto":[0,1,2,3,4,51,52,53,54,55,56],"potom":[0,1,2,3,4,51,52,53,54,55,56],"k":[5,6,7,42,43,44,45,46,47,48,49,50,59,60,61,62,63,64,65],"kr":[5,6,7],"kre":[5,6,7],"kret":[5,6,7],"t":[8,9,10,11,40,41,66,67,68,69,70,71,72,73,74,75,76,77,78,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"ta":[8,9,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"tat":[8,9],"tata":[8,9],"tatat":[8,9],"tatata":[8,9],"tatatap":[8,9],"tatatapl":[8,9],"tatataple":[8,9],"tr":[10,11,72,73,74,75,76,77,78],"tro":[10,11],"trop":[10,11],"trops":[10,11],"tropso":[10,11],"tropsom":[10,11],"tropsome":[10,11],"e":[12,13,14,15,16,57,58],"es":[12,13,14,15,16],"esp":[12,13,14,15,16],"espa":[12,13,14,15,16],"espam":[12,13,14,15,16],"espamt":[12,13,14,15,16],"espamta":[12,13,14,15,16],"espamtap":[12,13,14,15,16],"espamtapl":[12,13,14,15,16],"espamtaple":[12,13,14,15,16],"m":[17,18,19,20,21,22,23,24,25,79,80],"ma":[17,18,19,20,21,22,23],"mar":[17,18,19,20,21,22,23],"mark":[17,18,19,20,21,22,23],"marko":[17,18,19,20,21,22,23],"mo":[24,25,79,80],"mot":[24,25,79,80],"mota":[24,25],"motal":[24,25],"r":[26,27],"re":[26,27],"rep":[26,27],"repo":[26,27],"repom":[26,27],"s":[28,29,30,31,32,33,34,35,36,37,38,39],"sk":[28,29],"ske":[28,29],"skel":[28,29],"skele":[28,29],"skelet":[28,29],"skeleto":[28,29],"skeletom":[28,29],"sl":[30,31],"sle":[30,31],"slet":[30,31],"slete":[30,31],"sleter":[30,31],"st":[32,33],"ste":[32,33],"step":[32,33],"steps":[32,33],"sf":[34,35,36,37,38,39],"sfe":[34,35,36,37,38,39],"sfet":[34,35,36,37,38,39],"sfetk":[34,35,36,37,38,39],"tf":[40,41],"tfe":[40,41],"tfet":[40,41],"ka":[42,43,44,62,63,64,65],"kar":[42,43,44,62,63,64,65],"karo":[42,43,44],"karos":[42,43,44],"karose":[42,43,44],"karosel":[42,43,44],"ke":[45,46,47,48,49,50],"kek":[45,46,47,48,49,50],"kekp":[45,46,47,48,49,50],"kekpo":[45,46,47,48,49,50],"kekpos":[45,46,47,48,49,50],"em":[57,58],"emf":[57,58],"emfe":[57,58],"emfem":[57,58],"emfeme":[57,58],"emfemet":[57,58],"emfemete":[57,58],"kl":[59,60,61],"klo":[59,60,61],"klof":[59,60,61],"klofe":[59,60,61],"klofem":[59,60,61],"klofemk":[59,60,61],"kart":[62,63,64,65],"karts":[62,63,64,65],"te":[66,67,68,69,70,71],"tes":[66,67,68,69,70,71],"test":[66,67,68,69,70,71],"tra":[72,73,74,75,76,77,78],"trak":[72,73,74,75,76,77,78],"mote":[79,80],"motef":[79,80],"motefe":[79,80],"motefek":[79,80],"motefeka":[79,80],"motefekat":[79,80],"motefekate":[79,80],"motefekateo":[79,80],"motefekateom":[79,80],"f":[81],"fr":[81],"fra":[81],"frap":[81],"frape":[81],"fraper":[81],"l":[82],"la":[82],"las":[82],"lase":[82],"tal":[83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"talf":[83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"talfe":[83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"talfem":[83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"talfemt":[83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]},{"3":[63],"pol":[1],"pols":[1],"polse":[1],"k":[2,3,4,36,38,57,58,67],"kr":[2,3,4,67],"kra":[2,3,67],"krat":[2,3,67],"krate":[2,3,67],"kratem":[2,3,67],"kratemt":[2,3,67],"kre":[4],"kret":[4],"t":[5,6,7,25,27,29,33,39,48,50,53,80],"tr":[5,6,7,94],"tra":[5,6,7],"trak":[5,6,7],"te":[9,11,25,27,29,33,39,53,80,85],"tef":[9,11,25,27,29,33,80],"tefa":[9,11,25,27,29,33,80],"tefao":[9,11,25,27,29,33,80],"tefaol":[9,11,25,27,29,33,80],"tefaolt":[9,11,25,27,29,33,80],"f":[13,18,31,89,90,91,97,99],"fe":[13,18,97],"fer":[13],"fert":[13],"ferte":[13],"fertek":[13],"ferteka":[13],"fertekal":[13],"o":[14,56,65],"or":[14],"ore":[14],"ores":[14],"oreso":[14],"oresom":[14],"oresomt":[14],"oresomta":[14],"oresomtal":[14],"r":[15,16,21,23,71],"re":[15,16,21,23],"res":[15,16],"rese":[15,16],"reses":[15,16],"resesa":[15,16],"resesap":[15,16],"resesapl":[15,16],"resesaple":[15,16],"fea":[18],"feat":[18],"feato":[18],"feator":[18],"featore":[18],"featores":[18],"mo":[19,20,22,35,55,64],"mor":[20,22,35,55],"morm":[20,22,35,55],"morma":[20,22,35,55],"mormal":[20,22,35,55],"ref":[21,23],"refe":[21,23],"refer":[21,23],"refers":[21,23],"referse":[21,23],"fr":[31],"fro":[31],"from":[31],"m":[35,55,64,70,88],"ko":[36,38,43,57,58],"kos":[36,38],"kost":[36,38],"kosto":[36,38],"kostom":[36,38],"l":[37,44,52,72,73,74,92,93],"la":[37],"lap":[37],"lape":[37],"lapel":[37],"tes":[39,53,85],"tesa":[39,53],"tesap":[39,53],"tesapl":[39,53],"tesaple":[39,53],"tesaplet":[39,53],"p":[40,41,46,47,49,59,60,61,84,86,87,95,96],"po":[40,41,86,95,96],"pos":[40,41],"kom":[43,57,58],"komo":[43],"komom":[43],"le":[44,72,73,74,92,93],"les":[44,72,73,74],"lest":[44,72,73,74],"pl":[46],"pla":[46],"plam":[46],"pa":[47,49,59,60,61,84,87],"pas":[47,49],"pase":[47,49],"ta":[48,50],"tap":[48,50],"tapl":[48,50],"taple":[48,50],"lo":[52],"loa":[52],"loat":[52],"loate":[52],"loatem":[52],"loatemk":[52],"a":[54,68],"ar":[54],"are":[54],"area":[54],"ot":[56],"ote":[56],"oter":[56],"oters":[56],"komt":[57,58],"komte":[57,58],"komtem":[57,58],"komtemt":[57,58],"pak":[59,60,61,84],"pakr":[59,60,61,84],"pakro":[59,60,61,84],"pakrom":[59,60,61,84],"pakromt":[59,60,61,84],"3t":[63],"mom":[64],"momp":[64],"mompe":[64],"momper":[64],"of":[65],"ofe":[65],"ofer":[65],"am":[68],"ame":[68],"amem":[68],"amema":[68],"amemat":[68],"amemate":[68],"amematet":[68],"s":[69,75,76,77,78],"sl":[69],"sle":[69],"slet":[69],"slete":[69],"ma":[70,88],"mak":[70],"make":[70],"makek":[70],"ro":[71],"rot":[71],"rota":[71],"rotat":[71],"rotate":[71],"se":[75,76,77,78],"sem":[75,76,77,78],"semk":[75,76,77,78],"semkl":[75,76,77,78],"semkle":[75,76,77,78],"test":[85],"por":[86,95,96],"port":[86,95,96],"porte":[86,95,96],"porter":[86,95,96],"pat":[87],"pate":[87],"patem":[87],"patemk":[87],"mar":[88],"mark":[88],"marke":[88],"markem":[88],"fo":[89,90,91,99],"fom":[89,90,91],"fomt":[89,90,91],"let":[92],"lete":[92],"leter":[92],"lem":[93],"leme":[93],"tro":[94],"trop":[94],"fet":[97],"e":[98],"ek":[98],"ekt":[98],"fol":[99]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"s":[3,48,50,52,89,92,94],"sa":[3,94],"sat":[3,94],"sato":[3,94],"satof":[3,94],"t":[4,16,54,60,61],"tr":[4],"tra":[4],"trak":[4],"l":[6,53],"le":[6],"lef":[6],"left":[6],"r":[7,22,78,95],"re":[7,78],"rek":[7],"rekt":[7],"p":[15,65],"pa":[15],"pam":[15],"pame":[15],"pamel":[15],"te":[16,41,54,60,73,77],"tes":[16,54],"test":[16],"k":[19,68,84,85,86,99],"ka":[19],"kap":[19],"rt":[22,23],"rtl":[22,23],"e":[31,46,93],"eo":[31],"eos":[31],"eos1":[31],"eos16":[31],"f":[36,37,96],"fe":[36,37,90,96],"fet":[36,37,96],"kol":[38,84,85,86],"kolo":[38,84,85,86],"kolor":[38,84,85,86],"tef":[41],"tefa":[41],"tefao":[41],"tefaol":[41],"tefaolt":[41],"em":[46],"emp":[46],"empo":[46],"empot":[46],"se":[48,50,89],"sel":[48,50],"sele":[48,50],"selek":[48,50],"selekt":[48,50],"selekte":[48,50],"selekteo":[48,50],"selekteom":[48,50],"sm":[52],"lk":[53],"tesa":[54],"tesap":[54],"tesapl":[54],"tesaple":[54],"tesaplet":[54],"o":[58,64,69],"om":[58],"omt":[58],"omte":[58],"omtet":[58],"omtetl":[58],"omtetle":[58],"omtetlet":[58],"tet":[60],"tetl":[60],"ta":[61],"tar":[61],"tark":[61],"of":[64],"po":[65],"pop":[65],"popl":[65],"pople":[65],"kr":[68],"kra":[68],"krat":[68],"krate":[68],"kratem":[68],"kratemt":[68],"op":[69],"tem":[73,77],"temo":[73],"tre":[74],"trel":[74],"trelo":[74],"tema":[77],"temam":[77],"temame":[77],"temamek":[77],"res":[78],"rest":[78],"restr":[78],"restre":[78],"restrek":[78],"restrekt":[78],"ko":[84,85,86,99],"ses":[89],"sese":[89],"fek":[90],"fekt":[90],"fa":[91],"fam":[91],"fame":[91],"famel":[91],"famele":[91],"sp":[92],"spa":[92],"spak":[92],"spake":[92],"spakem":[92],"spakemk":[92],"ek":[93],"ekt":[93],"ra":[95],"rat":[95],"rate":[95],"rateo":[95],"rateos":[95],"kom":[99],"komf":[99],"komfe":[99],"komfek":[99]},{"to":[6,7],"ko":[19],"kos":[19],"kost":[19],"kosto":[19],"kostom":[19],"so":[36],"sof":[36],"r":[37],"rt":[37],"rtl":[37],"se":[38],"ses":[38],"sese":[38],"m":[49,50],"mo":[49,50],"mot":[49,50],"mote":[49,50],"moteo":[49,50],"moteom":[49,50],"l":[64],"le":[64],"lem":[64],"leme":[64],"lemes":[64],"k":[74],"kl":[74],"klo":[74],"klom":[74],"klome":[74],"e":[76],"em":[76],"ema":[76],"emak":[76],"emake":[76],"tro":[78],"trop":[78]},{"r":[6],"re":[6],"rek":[6],"rekt":[6],"l":[7,36,38],"le":[7],"lef":[7],"left":[7],"a":[19],"am":[19],"ame":[19],"amem":[19],"amema":[19],"amemat":[19],"amemate":[19],"amemateo":[19],"amemateom":[19],"la":[36,38],"lap":[36,38],"lape":[36,38],"lapel":[36,38],"o":[76],"om":[76],"e":[77],"em":[77],"ema":[77],"emak":[77],"emake":[77],"f":[78],"fa":[78],"fal":[78],"falo":[78]},{"fem":[36],"tro":[76],"trop":[76]},{"ke":[36],"kek":[36],"keke":[36],"keket":[36]},{"o":[36],"om":[36],"oml":[36],"omle":[36]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "4": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-3", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "6": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "7": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "8": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "9": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "10": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "11": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "12": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "13": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "14": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "15": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "16": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "17": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "18": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "19": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "20": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "21": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "22": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "23": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-5", "kind": "variant" }, "24": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "25": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "26": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "27": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "28": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "29": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "30": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "31": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "32": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "33": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "34": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "35": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "36": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "37": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "38": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "39": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "40": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "41": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "42": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "43": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "44": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "45": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "46": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "47": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "48": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "49": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-3", "kind": "variant" }, "50": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-4", "kind": "variant" }, "51": { "id": "components-base-button-button-story-vue", "kind": "story" }, "52": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "53": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "54": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "55": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "56": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "57": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "58": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "59": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "60": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "61": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-1", "kind": "variant" }, "62": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "63": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "64": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "65": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "66": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "67": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "68": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "69": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "70": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-3", "kind": "variant" }, "71": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-4", "kind": "variant" }, "72": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "73": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "74": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "75": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "76": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "77": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "78": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "79": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "80": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "81": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "82": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "83": { "id": "tailwind", "kind": "story" }, "84": { "id": "tailwind:background-color", "kind": "variant" }, "85": { "id": "tailwind:text-color", "kind": "variant" }, "86": { "id": "tailwind:border-color", "kind": "variant" }, "87": { "id": "tailwind:padding", "kind": "variant" }, "88": { "id": "tailwind:margin", "kind": "variant" }, "89": { "id": "tailwind:font-size", "kind": "variant" }, "90": { "id": "tailwind:font-weight", "kind": "variant" }, "91": { "id": "tailwind:font-family", "kind": "variant" }, "92": { "id": "tailwind:letter-spacing", "kind": "variant" }, "93": { "id": "tailwind:line-height", "kind": "variant" }, "94": { "id": "tailwind:drop-shadow", "kind": "variant" }, "95": { "id": "tailwind:border-radius", "kind": "variant" }, "96": { "id": "tailwind:border-width", "kind": "variant" }, "97": { "id": "tailwind:width", "kind": "variant" }, "98": { "id": "tailwind:height", "kind": "variant" }, "99": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-0105fc52.js"), true ? ["assets/search-docs-data-0105fc52.js","assets/vendor-51faf694.js"] : void 0);
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
