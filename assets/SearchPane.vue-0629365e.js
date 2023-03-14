import { _ as __vitePreload } from "./GenericMountStory.vue2-600375be.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bm as useFocus, f as watch, bn as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bo as flexsearch_bundleExports } from "./vendor-7d4065c6.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-f1f314ac.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-c20bbe0d.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1,"99":1,"100":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,3,4,48,49,50,51,52,53],"po":[0,1,2,3,4,48,49,50,51,52,53],"pot":[0,1,2,3,4,48,49,50,51,52,53],"poto":[0,1,2,3,4,48,49,50,51,52,53],"potom":[0,1,2,3,4,48,49,50,51,52,53],"k":[5,6,7,10,11,12,13,54,55,56,57,58,59,60,61,62,63,64,65,66],"kr":[5,6,7],"kre":[5,6,7],"kret":[5,6,7],"t":[8,9,14,15,46,47,67,68,69,70,71,72,75,76,77,78,79,80,81,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"ta":[8,9,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"tat":[8,9],"tata":[8,9],"tatat":[8,9],"tatata":[8,9],"tatatap":[8,9],"tatatapl":[8,9],"tatataple":[8,9],"ka":[10,11,12,13,60,61,62,63],"kar":[10,11,12,13,60,61,62,63],"karo":[10,11,12,13],"karos":[10,11,12,13],"karose":[10,11,12,13],"karosel":[10,11,12,13],"tr":[14,15,75,76,77,78,79,80,81],"tro":[14,15],"trop":[14,15],"trops":[14,15],"tropso":[14,15],"tropsom":[14,15],"tropsome":[14,15],"e":[16,17,18,19,20,28,29],"es":[16,17,18,19,20],"esp":[16,17,18,19,20],"espa":[16,17,18,19,20],"espam":[16,17,18,19,20],"espamt":[16,17,18,19,20],"espamta":[16,17,18,19,20],"espamtap":[16,17,18,19,20],"espamtapl":[16,17,18,19,20],"espamtaple":[16,17,18,19,20],"m":[21,22,23,24,25,26,27,30,31,73,74],"ma":[21,22,23,24,25,26,27],"mar":[21,22,23,24,25,26,27],"mark":[21,22,23,24,25,26,27],"marko":[21,22,23,24,25,26,27],"em":[28,29],"emf":[28,29],"emfe":[28,29],"emfem":[28,29],"emfeme":[28,29],"emfemet":[28,29],"emfemete":[28,29],"mo":[30,31,73,74],"mot":[30,31,73,74],"mota":[30,31],"motal":[30,31],"r":[32,33],"re":[32,33],"rep":[32,33],"repo":[32,33],"repom":[32,33],"s":[34,35,36,37,38,39,40,41,42,43,44,45],"sk":[34,35],"ske":[34,35],"skel":[34,35],"skele":[34,35],"skelet":[34,35],"skeleto":[34,35],"skeletom":[34,35],"sl":[36,37],"sle":[36,37],"slet":[36,37],"slete":[36,37],"sleter":[36,37],"st":[38,39],"ste":[38,39],"step":[38,39],"steps":[38,39],"sf":[40,41,42,43,44,45],"sfe":[40,41,42,43,44,45],"sfet":[40,41,42,43,44,45],"sfetk":[40,41,42,43,44,45],"tf":[46,47],"tfe":[46,47],"tfet":[46,47],"ke":[54,55,56,57,58,59],"kek":[54,55,56,57,58,59],"kekp":[54,55,56,57,58,59],"kekpo":[54,55,56,57,58,59],"kekpos":[54,55,56,57,58,59],"kart":[60,61,62,63],"karts":[60,61,62,63],"kl":[64,65,66],"klo":[64,65,66],"klof":[64,65,66],"klofe":[64,65,66],"klofem":[64,65,66],"klofemk":[64,65,66],"te":[67,68,69,70,71,72],"tes":[67,68,69,70,71,72],"test":[67,68,69,70,71,72],"mote":[73,74],"motef":[73,74],"motefe":[73,74],"motefek":[73,74],"motefeka":[73,74],"motefekat":[73,74],"motefekate":[73,74],"motefekateo":[73,74],"motefekateom":[73,74],"tra":[75,76,77,78,79,80,81],"trak":[75,76,77,78,79,80,81],"f":[82],"fr":[82],"fra":[82],"frap":[82],"frape":[82],"fraper":[82],"l":[83],"la":[83],"las":[83],"lase":[83],"tal":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"talf":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"talfe":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"talfem":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"talfemt":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]},{"3":[61],"pol":[1],"pols":[1],"polse":[1],"k":[2,3,4,28,29,42,44,68],"kr":[2,3,4,68],"kra":[2,3,68],"krat":[2,3,68],"krate":[2,3,68],"kratem":[2,3,68],"kratemt":[2,3,68],"kre":[4],"kret":[4],"t":[5,6,7,31,33,35,39,45,50,57,59,74],"tr":[5,6,7,95],"tra":[5,6,7],"trak":[5,6,7],"te":[9,15,31,33,35,39,45,50,74,86],"tef":[9,15,31,33,35,39,74],"tefa":[9,15,31,33,35,39,74],"tefao":[9,15,31,33,35,39,74],"tefaol":[9,15,31,33,35,39,74],"tefaolt":[9,15,31,33,35,39,74],"ko":[11,28,29,42,44],"kom":[11,28,29],"komo":[11],"komom":[11],"l":[12,43,49,75,76,77,93,94],"le":[12,75,76,77,93,94],"les":[12,75,76,77],"lest":[12,75,76,77],"kal":[13],"kale":[13],"kaler":[13],"kalere":[13],"f":[17,22,37,90,91,92,98,100],"fe":[17,22,98],"fer":[17],"fert":[17],"ferte":[17],"fertek":[17],"ferteka":[17],"fertekal":[17],"o":[18,53,63],"or":[18],"ore":[18],"ores":[18],"oreso":[18],"oresom":[18],"oresomt":[18],"oresomta":[18],"oresomtal":[18],"r":[19,20,25,27,72],"re":[19,20,25,27],"res":[19,20],"rese":[19,20],"reses":[19,20],"resesa":[19,20],"resesap":[19,20],"resesapl":[19,20],"resesaple":[19,20],"fea":[22],"feat":[22],"feato":[22],"feator":[22],"featore":[22],"featores":[22],"mo":[23,24,26,41,52,62],"mor":[24,26,41,52],"morm":[24,26,41,52],"morma":[24,26,41,52],"mormal":[24,26,41,52],"ref":[25,27],"refe":[25,27],"refer":[25,27],"refers":[25,27],"referse":[25,27],"komt":[28,29],"komte":[28,29],"komtem":[28,29],"komtemt":[28,29],"fr":[37],"fro":[37],"from":[37],"m":[41,52,62,71,89],"kos":[42,44],"kost":[42,44],"kosto":[42,44],"kostom":[42,44],"la":[43],"lap":[43],"lape":[43],"lapel":[43],"tes":[45,50,86],"tesa":[45,50],"tesap":[45,50],"tesapl":[45,50],"tesaple":[45,50],"tesaplet":[45,50],"p":[46,47,55,56,58,64,65,66,85,87,88,96,97],"po":[46,47,87,96,97],"pos":[46,47],"lo":[49],"loa":[49],"loat":[49],"loate":[49],"loatem":[49],"loatemk":[49],"a":[51,69],"ar":[51],"are":[51],"area":[51],"ot":[53],"ote":[53],"oter":[53],"oters":[53],"pl":[55],"pla":[55],"plam":[55],"pa":[56,58,64,65,66,85,88],"pas":[56,58],"pase":[56,58],"ta":[57,59],"tap":[57,59],"tapl":[57,59],"taple":[57,59],"3t":[61],"mom":[62],"momp":[62],"mompe":[62],"momper":[62],"of":[63],"ofe":[63],"ofer":[63],"pak":[64,65,66,85],"pakr":[64,65,66,85],"pakro":[64,65,66,85],"pakrom":[64,65,66,85],"pakromt":[64,65,66,85],"am":[69],"ame":[69],"amem":[69],"amema":[69],"amemat":[69],"amemate":[69],"amematet":[69],"s":[70,78,79,80,81],"sl":[70],"sle":[70],"slet":[70],"slete":[70],"ma":[71,89],"mak":[71],"make":[71],"makek":[71],"ro":[72],"rot":[72],"rota":[72],"rotat":[72],"rotate":[72],"se":[78,79,80,81],"sem":[78,79,80,81],"semk":[78,79,80,81],"semkl":[78,79,80,81],"semkle":[78,79,80,81],"test":[86],"por":[87,96,97],"port":[87,96,97],"porte":[87,96,97],"porter":[87,96,97],"pat":[88],"pate":[88],"patem":[88],"patemk":[88],"mar":[89],"mark":[89],"marke":[89],"markem":[89],"fo":[90,91,92,100],"fom":[90,91,92],"fomt":[90,91,92],"let":[93],"lete":[93],"leter":[93],"lem":[94],"leme":[94],"tro":[95],"trop":[95],"fet":[98],"e":[99],"ek":[99],"ekt":[99],"fol":[100]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"s":[3,49,57,59,90,93,95],"sa":[3,95],"sat":[3,95],"sato":[3,95],"satof":[3,95],"t":[4,20,51,65,66],"tr":[4],"tra":[4],"trak":[4],"l":[6,50],"le":[6],"lef":[6],"left":[6],"r":[7,26,81,96],"re":[7,81],"rek":[7],"rekt":[7],"p":[19,63],"pa":[19],"pam":[19],"pame":[19],"pamel":[19],"te":[20,47,51,65,76,80],"tes":[20,51],"test":[20],"k":[23,69,85,86,87,100],"ka":[23],"kap":[23],"rt":[26,27],"rtl":[26,27],"o":[29,62,70],"om":[29],"omt":[29],"omte":[29],"omtet":[29],"omtetl":[29],"omtetle":[29],"omtetlet":[29],"e":[37,55,94],"eo":[37],"eos":[37],"eos1":[37],"eos16":[37],"f":[42,43,97],"fe":[42,43,91,97],"fet":[42,43,97],"kol":[44,85,86,87],"kolo":[44,85,86,87],"kolor":[44,85,86,87],"tef":[47],"tefa":[47],"tefao":[47],"tefaol":[47],"tefaolt":[47],"sm":[49],"lk":[50],"tesa":[51],"tesap":[51],"tesapl":[51],"tesaple":[51],"tesaplet":[51],"em":[55],"emp":[55],"empo":[55],"empot":[55],"se":[57,59,90],"sel":[57,59],"sele":[57,59],"selek":[57,59],"selekt":[57,59],"selekte":[57,59],"selekteo":[57,59],"selekteom":[57,59],"of":[62],"po":[63],"pop":[63],"popl":[63],"pople":[63],"tet":[65],"tetl":[65],"ta":[66],"tar":[66],"tark":[66],"kr":[69],"kra":[69],"krat":[69],"krate":[69],"kratem":[69],"kratemt":[69],"op":[70],"tem":[76,80],"temo":[76],"tre":[77],"trel":[77],"trelo":[77],"tema":[80],"temam":[80],"temame":[80],"temamek":[80],"res":[81],"rest":[81],"restr":[81],"restre":[81],"restrek":[81],"restrekt":[81],"ko":[85,86,87,100],"ses":[90],"sese":[90],"fek":[91],"fekt":[91],"fa":[92],"fam":[92],"fame":[92],"famel":[92],"famele":[92],"sp":[93],"spa":[93],"spak":[93],"spake":[93],"spakem":[93],"spakemk":[93],"ek":[94],"ekt":[94],"ra":[96],"rat":[96],"rate":[96],"rateo":[96],"rateos":[96],"kom":[100],"komf":[100],"komfe":[100],"komfek":[100]},{"to":[6,7],"ko":[23],"kos":[23],"kost":[23],"kosto":[23],"kostom":[23],"so":[42],"sof":[42],"r":[43],"rt":[43],"rtl":[43],"se":[44],"ses":[44],"sese":[44],"m":[58,59],"mo":[58,59],"mot":[58,59],"mote":[58,59],"moteo":[58,59],"moteom":[58,59],"l":[62],"le":[62],"lem":[62],"leme":[62],"lemes":[62],"k":[77],"kl":[77],"klo":[77],"klom":[77],"klome":[77],"e":[79],"em":[79],"ema":[79],"emak":[79],"emake":[79],"tro":[81],"trop":[81]},{"r":[6],"re":[6],"rek":[6],"rekt":[6],"l":[7,42,44],"le":[7],"lef":[7],"left":[7],"a":[23],"am":[23],"ame":[23],"amem":[23],"amema":[23],"amemat":[23],"amemate":[23],"amemateo":[23],"amemateom":[23],"la":[42,44],"lap":[42,44],"lape":[42,44],"lapel":[42,44],"o":[79],"om":[79],"e":[80],"em":[80],"ema":[80],"emak":[80],"emake":[80],"f":[81],"fa":[81],"fal":[81],"falo":[81]},{"fem":[42],"tro":[79],"trop":[79]},{"ke":[42],"kek":[42],"keke":[42],"keket":[42]},{"o":[42],"om":[42],"oml":[42],"omle":[42]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "4": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-3", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "6": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "7": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "8": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "9": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "10": { "id": "components-custom-carousel-carousel-story-vue", "kind": "story" }, "11": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-0", "kind": "variant" }, "12": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-1", "kind": "variant" }, "13": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-2", "kind": "variant" }, "14": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "15": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "16": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "17": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "18": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "19": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "20": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "21": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "22": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "23": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "24": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "25": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "26": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "27": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-5", "kind": "variant" }, "28": { "id": "components-custom-infinite-content-infinitecontent-story-vue", "kind": "story" }, "29": { "id": "components-custom-infinite-content-infinitecontent-story-vue:components-custom-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "30": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "31": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "32": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "33": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "34": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "35": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "36": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "37": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "38": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "39": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "40": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "41": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "42": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "43": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "44": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "45": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "46": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "47": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "48": { "id": "components-base-button-button-story-vue", "kind": "story" }, "49": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "50": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "51": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "52": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "53": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "54": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "55": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "56": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "57": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "58": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-3", "kind": "variant" }, "59": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-4", "kind": "variant" }, "60": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "61": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "62": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "63": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "64": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "65": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "66": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-1", "kind": "variant" }, "67": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "68": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "69": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "70": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "71": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-3", "kind": "variant" }, "72": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-4", "kind": "variant" }, "73": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "74": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "75": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "76": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "77": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "78": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "79": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "80": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "81": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "82": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "83": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "84": { "id": "tailwind", "kind": "story" }, "85": { "id": "tailwind:background-color", "kind": "variant" }, "86": { "id": "tailwind:text-color", "kind": "variant" }, "87": { "id": "tailwind:border-color", "kind": "variant" }, "88": { "id": "tailwind:padding", "kind": "variant" }, "89": { "id": "tailwind:margin", "kind": "variant" }, "90": { "id": "tailwind:font-size", "kind": "variant" }, "91": { "id": "tailwind:font-weight", "kind": "variant" }, "92": { "id": "tailwind:font-family", "kind": "variant" }, "93": { "id": "tailwind:letter-spacing", "kind": "variant" }, "94": { "id": "tailwind:line-height", "kind": "variant" }, "95": { "id": "tailwind:drop-shadow", "kind": "variant" }, "96": { "id": "tailwind:border-radius", "kind": "variant" }, "97": { "id": "tailwind:border-width", "kind": "variant" }, "98": { "id": "tailwind:width", "kind": "variant" }, "99": { "id": "tailwind:height", "kind": "variant" }, "100": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-6d271c1a.js"), true ? ["assets/search-docs-data-6d271c1a.js","assets/vendor-7d4065c6.js"] : void 0);
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
