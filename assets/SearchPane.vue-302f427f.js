import { _ as __vitePreload } from "./GenericMountStory.vue2-9e0156f8.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bm as useFocus, f as watch, bn as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bo as flexsearch_bundleExports } from "./vendor-c237071b.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-be3ae17d.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-0e80ebb9.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1,"99":1,"100":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,3,4,8,9,10,11,12,13],"po":[0,1,2,3,4,8,9,10,11,12,13],"pot":[0,1,2,3,4,8,9,10,11,12,13],"poto":[0,1,2,3,4,8,9,10,11,12,13],"potom":[0,1,2,3,4,8,9,10,11,12,13],"k":[5,6,7,14,15,16,17,18,19,22,23,24,25,52,53,54,63,64,65,66],"kr":[5,6,7],"kre":[5,6,7],"kret":[5,6,7],"ke":[14,15,16,17,18,19],"kek":[14,15,16,17,18,19],"kekp":[14,15,16,17,18,19],"kekpo":[14,15,16,17,18,19],"kekpos":[14,15,16,17,18,19],"t":[20,21,31,32,50,51,67,68,69,70,71,72,73,74,75,76,77,78,79,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"tr":[20,21,73,74,75,76,77,78,79],"tro":[20,21],"trop":[20,21],"trops":[20,21],"tropso":[20,21],"tropsom":[20,21],"tropsome":[20,21],"ka":[22,23,24,25,63,64,65,66],"kar":[22,23,24,25,63,64,65,66],"karo":[22,23,24,25],"karos":[22,23,24,25],"karose":[22,23,24,25],"karosel":[22,23,24,25],"e":[26,27,28,29,30,33,34],"es":[26,27,28,29,30],"esp":[26,27,28,29,30],"espa":[26,27,28,29,30],"espam":[26,27,28,29,30],"espamt":[26,27,28,29,30],"espamta":[26,27,28,29,30],"espamtap":[26,27,28,29,30],"espamtapl":[26,27,28,29,30],"espamtaple":[26,27,28,29,30],"ta":[31,32,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"tat":[31,32],"tata":[31,32],"tatat":[31,32],"tatata":[31,32],"tatatap":[31,32],"tatatapl":[31,32],"tatataple":[31,32],"em":[33,34],"emf":[33,34],"emfe":[33,34],"emfem":[33,34],"emfeme":[33,34],"emfemet":[33,34],"emfemete":[33,34],"m":[35,36,37,38,39,40,41,44,45,80,81],"ma":[35,36,37,38,39,40,41],"mar":[35,36,37,38,39,40,41],"mark":[35,36,37,38,39,40,41],"marko":[35,36,37,38,39,40,41],"r":[42,43],"re":[42,43],"rep":[42,43],"repo":[42,43],"repom":[42,43],"mo":[44,45,80,81],"mot":[44,45,80,81],"mota":[44,45],"motal":[44,45],"s":[46,47,48,49,55,56,57,58,59,60,61,62],"sk":[46,47],"ske":[46,47],"skel":[46,47],"skele":[46,47],"skelet":[46,47],"skeleto":[46,47],"skeletom":[46,47],"sl":[48,49],"sle":[48,49],"slet":[48,49],"slete":[48,49],"sleter":[48,49],"tf":[50,51],"tfe":[50,51],"tfet":[50,51],"kl":[52,53,54],"klo":[52,53,54],"klof":[52,53,54],"klofe":[52,53,54],"klofem":[52,53,54],"klofemk":[52,53,54],"st":[55,56],"ste":[55,56],"step":[55,56],"steps":[55,56],"sf":[57,58,59,60,61,62],"sfe":[57,58,59,60,61,62],"sfet":[57,58,59,60,61,62],"sfetk":[57,58,59,60,61,62],"kart":[63,64,65,66],"karts":[63,64,65,66],"te":[67,68,69,70,71,72],"tes":[67,68,69,70,71,72],"test":[67,68,69,70,71,72],"tra":[73,74,75,76,77,78,79],"trak":[73,74,75,76,77,78,79],"mote":[80,81],"motef":[80,81],"motefe":[80,81],"motefek":[80,81],"motefeka":[80,81],"motefekat":[80,81],"motefekate":[80,81],"motefekateo":[80,81],"motefekateom":[80,81],"f":[82],"fr":[82],"fra":[82],"frap":[82],"frape":[82],"fraper":[82],"l":[83],"la":[83],"las":[83],"lase":[83],"tal":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"talf":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"talfe":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"talfem":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],"talfemt":[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]},{"3":[64],"pol":[1],"pols":[1],"polse":[1],"k":[2,3,4,33,34,59,61,68],"kr":[2,3,4,68],"kra":[2,3,68],"krat":[2,3,68],"krate":[2,3,68],"kratem":[2,3,68],"kratemt":[2,3,68],"kre":[4],"kret":[4],"t":[5,6,7,10,17,19,43,45,47,56,62,81],"tr":[5,6,7,95],"tra":[5,6,7],"trak":[5,6,7],"l":[9,24,60,73,74,75,93,94],"lo":[9],"loa":[9],"loat":[9],"loate":[9],"loatem":[9],"loatemk":[9],"te":[10,21,32,43,45,47,56,62,81,86],"tes":[10,62,86],"tesa":[10,62],"tesap":[10,62],"tesapl":[10,62],"tesaple":[10,62],"tesaplet":[10,62],"a":[11,69],"ar":[11],"are":[11],"area":[11],"m":[12,58,65,71,89],"mo":[12,37,38,40,58,65],"mor":[12,38,40,58],"morm":[12,38,40,58],"morma":[12,38,40,58],"mormal":[12,38,40,58],"o":[13,28,66],"ot":[13],"ote":[13],"oter":[13],"oters":[13],"p":[15,16,18,50,51,52,53,54,85,87,88,96,97],"pl":[15],"pla":[15],"plam":[15],"pa":[16,18,52,53,54,85,88],"pas":[16,18],"pase":[16,18],"ta":[17,19],"tap":[17,19],"tapl":[17,19],"taple":[17,19],"tef":[21,32,43,45,47,56,81],"tefa":[21,32,43,45,47,56,81],"tefao":[21,32,43,45,47,56,81],"tefaol":[21,32,43,45,47,56,81],"tefaolt":[21,32,43,45,47,56,81],"ko":[23,33,34,59,61],"kom":[23,33,34],"komo":[23],"komom":[23],"le":[24,73,74,75,93,94],"les":[24,73,74,75],"lest":[24,73,74,75],"kal":[25],"kale":[25],"kaler":[25],"kalere":[25],"f":[27,36,49,90,91,92,98,100],"fe":[27,36,98],"fer":[27],"fert":[27],"ferte":[27],"fertek":[27],"ferteka":[27],"fertekal":[27],"or":[28],"ore":[28],"ores":[28],"oreso":[28],"oresom":[28],"oresomt":[28],"oresomta":[28],"oresomtal":[28],"r":[29,30,39,41,72],"re":[29,30,39,41],"res":[29,30],"rese":[29,30],"reses":[29,30],"resesa":[29,30],"resesap":[29,30],"resesapl":[29,30],"resesaple":[29,30],"komt":[33,34],"komte":[33,34],"komtem":[33,34],"komtemt":[33,34],"fea":[36],"feat":[36],"feato":[36],"feator":[36],"featore":[36],"featores":[36],"ref":[39,41],"refe":[39,41],"refer":[39,41],"refers":[39,41],"referse":[39,41],"fr":[49],"fro":[49],"from":[49],"po":[50,51,87,96,97],"pos":[50,51],"pak":[52,53,54,85],"pakr":[52,53,54,85],"pakro":[52,53,54,85],"pakrom":[52,53,54,85],"pakromt":[52,53,54,85],"kos":[59,61],"kost":[59,61],"kosto":[59,61],"kostom":[59,61],"la":[60],"lap":[60],"lape":[60],"lapel":[60],"3t":[64],"mom":[65],"momp":[65],"mompe":[65],"momper":[65],"of":[66],"ofe":[66],"ofer":[66],"am":[69],"ame":[69],"amem":[69],"amema":[69],"amemat":[69],"amemate":[69],"amematet":[69],"s":[70,76,77,78,79],"sl":[70],"sle":[70],"slet":[70],"slete":[70],"ma":[71,89],"mak":[71],"make":[71],"makek":[71],"ro":[72],"rot":[72],"rota":[72],"rotat":[72],"rotate":[72],"se":[76,77,78,79],"sem":[76,77,78,79],"semk":[76,77,78,79],"semkl":[76,77,78,79],"semkle":[76,77,78,79],"test":[86],"por":[87,96,97],"port":[87,96,97],"porte":[87,96,97],"porter":[87,96,97],"pat":[88],"pate":[88],"patem":[88],"patemk":[88],"mar":[89],"mark":[89],"marke":[89],"markem":[89],"fo":[90,91,92,100],"fom":[90,91,92],"fomt":[90,91,92],"let":[93],"lete":[93],"leter":[93],"lem":[94],"leme":[94],"tro":[95],"trop":[95],"fet":[98],"e":[99],"ek":[99],"ekt":[99],"fol":[100]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"s":[3,9,17,19,90,93,95],"sa":[3,95],"sat":[3,95],"sato":[3,95],"satof":[3,95],"t":[4,11,30,53,54],"tr":[4],"tra":[4],"trak":[4],"l":[6,10],"le":[6],"lef":[6],"left":[6],"r":[7,40,79,96],"re":[7,79],"rek":[7],"rekt":[7],"sm":[9],"lk":[10],"te":[11,30,51,53,74,78],"tes":[11,30],"tesa":[11],"tesap":[11],"tesapl":[11],"tesaple":[11],"tesaplet":[11],"e":[15,49,94],"em":[15],"emp":[15],"empo":[15],"empot":[15],"se":[17,19,90],"sel":[17,19],"sele":[17,19],"selek":[17,19],"selekt":[17,19],"selekte":[17,19],"selekteo":[17,19],"selekteom":[17,19],"p":[29,66],"pa":[29],"pam":[29],"pame":[29],"pamel":[29],"test":[30],"o":[34,65,70],"om":[34],"omt":[34],"omte":[34],"omtet":[34],"omtetl":[34],"omtetle":[34],"omtetlet":[34],"k":[37,69,85,86,87,100],"ka":[37],"kap":[37],"rt":[40,41],"rtl":[40,41],"eo":[49],"eos":[49],"eos1":[49],"eos16":[49],"tef":[51],"tefa":[51],"tefao":[51],"tefaol":[51],"tefaolt":[51],"tet":[53],"tetl":[53],"ta":[54],"tar":[54],"tark":[54],"f":[59,60,97],"fe":[59,60,91,97],"fet":[59,60,97],"kol":[61,85,86,87],"kolo":[61,85,86,87],"kolor":[61,85,86,87],"of":[65],"po":[66],"pop":[66],"popl":[66],"pople":[66],"kr":[69],"kra":[69],"krat":[69],"krate":[69],"kratem":[69],"kratemt":[69],"op":[70],"tem":[74,78],"temo":[74],"tre":[75],"trel":[75],"trelo":[75],"tema":[78],"temam":[78],"temame":[78],"temamek":[78],"res":[79],"rest":[79],"restr":[79],"restre":[79],"restrek":[79],"restrekt":[79],"ko":[85,86,87,100],"ses":[90],"sese":[90],"fek":[91],"fekt":[91],"fa":[92],"fam":[92],"fame":[92],"famel":[92],"famele":[92],"sp":[93],"spa":[93],"spak":[93],"spake":[93],"spakem":[93],"spakemk":[93],"ek":[94],"ekt":[94],"ra":[96],"rat":[96],"rate":[96],"rateo":[96],"rateos":[96],"kom":[100],"komf":[100],"komfe":[100],"komfek":[100]},{"to":[6,7],"m":[18,19],"mo":[18,19],"mot":[18,19],"mote":[18,19],"moteo":[18,19],"moteom":[18,19],"ko":[37],"kos":[37],"kost":[37],"kosto":[37],"kostom":[37],"so":[59],"sof":[59],"r":[60],"rt":[60],"rtl":[60],"se":[61],"ses":[61],"sese":[61],"l":[65],"le":[65],"lem":[65],"leme":[65],"lemes":[65],"k":[75],"kl":[75],"klo":[75],"klom":[75],"klome":[75],"e":[77],"em":[77],"ema":[77],"emak":[77],"emake":[77],"tro":[79],"trop":[79]},{"r":[6],"re":[6],"rek":[6],"rekt":[6],"l":[7,59,61],"le":[7],"lef":[7],"left":[7],"a":[37],"am":[37],"ame":[37],"amem":[37],"amema":[37],"amemat":[37],"amemate":[37],"amemateo":[37],"amemateom":[37],"la":[59,61],"lap":[59,61],"lape":[59,61],"lapel":[59,61],"o":[77],"om":[77],"e":[78],"em":[78],"ema":[78],"emak":[78],"emake":[78],"f":[79],"fa":[79],"fal":[79],"falo":[79]},{"fem":[59],"tro":[77],"trop":[77]},{"ke":[59],"kek":[59],"keke":[59],"keket":[59]},{"o":[59],"om":[59],"oml":[59],"omle":[59]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "4": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-3", "kind": "variant" }, "5": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "6": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "7": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "8": { "id": "components-base-button-button-story-vue", "kind": "story" }, "9": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "10": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "11": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "12": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "13": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "14": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "15": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "16": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "17": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "18": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-3", "kind": "variant" }, "19": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-4", "kind": "variant" }, "20": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "21": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "22": { "id": "components-custom-carousel-carousel-story-vue", "kind": "story" }, "23": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-0", "kind": "variant" }, "24": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-1", "kind": "variant" }, "25": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-2", "kind": "variant" }, "26": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "27": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "28": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "29": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "30": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "31": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "32": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "33": { "id": "components-custom-infinite-content-infinitecontent-story-vue", "kind": "story" }, "34": { "id": "components-custom-infinite-content-infinitecontent-story-vue:components-custom-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "35": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "36": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "37": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "38": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "39": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "40": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "41": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-5", "kind": "variant" }, "42": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "43": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "44": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "45": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "46": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "47": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "48": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "49": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "50": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "51": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "52": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "53": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "54": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-1", "kind": "variant" }, "55": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "56": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "57": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "58": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "59": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "60": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "61": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "62": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "63": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "64": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "65": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "66": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "67": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "68": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "69": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "70": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "71": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-3", "kind": "variant" }, "72": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-4", "kind": "variant" }, "73": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "74": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "75": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "76": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "77": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "78": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "79": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "80": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "81": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "82": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "83": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "84": { "id": "tailwind", "kind": "story" }, "85": { "id": "tailwind:background-color", "kind": "variant" }, "86": { "id": "tailwind:text-color", "kind": "variant" }, "87": { "id": "tailwind:border-color", "kind": "variant" }, "88": { "id": "tailwind:padding", "kind": "variant" }, "89": { "id": "tailwind:margin", "kind": "variant" }, "90": { "id": "tailwind:font-size", "kind": "variant" }, "91": { "id": "tailwind:font-weight", "kind": "variant" }, "92": { "id": "tailwind:font-family", "kind": "variant" }, "93": { "id": "tailwind:letter-spacing", "kind": "variant" }, "94": { "id": "tailwind:line-height", "kind": "variant" }, "95": { "id": "tailwind:drop-shadow", "kind": "variant" }, "96": { "id": "tailwind:border-radius", "kind": "variant" }, "97": { "id": "tailwind:border-width", "kind": "variant" }, "98": { "id": "tailwind:width", "kind": "variant" }, "99": { "id": "tailwind:height", "kind": "variant" }, "100": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-17977c5b.js"), true ? ["assets/search-docs-data-17977c5b.js","assets/vendor-c237071b.js"] : void 0);
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
