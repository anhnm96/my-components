import { _ as __vitePreload } from "./GenericMountStory.vue2-f181f96e.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bo as useFocus, f as watch, bp as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bq as flexsearch_bundleExports } from "./vendor-a686512f.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-3ee0ffe2.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-a4e00d09.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1,"99":1,"100":1,"101":1,"102":1,"103":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,3,4,5,11,12,13,14,15,16],"po":[0,1,2,3,4,5,11,12,13,14,15,16],"pot":[0,1,2,3,4,5,11,12,13,14,15,16],"poto":[0,1,2,3,4,5,11,12,13,14,15,16],"potom":[0,1,2,3,4,5,11,12,13,14,15,16],"k":[6,7,8,17,18,19,20,21,22,23,24,25,26,63,64,65,66,67,68,69],"kr":[6,7,8],"kre":[6,7,8],"kret":[6,7,8],"o":[9,10],"os":[9,10],"ose":[9,10],"ke":[17,18,19,20,21,22],"kek":[17,18,19,20,21,22],"kekp":[17,18,19,20,21,22],"kekpo":[17,18,19,20,21,22],"kekpos":[17,18,19,20,21,22],"ka":[23,24,25,26,66,67,68,69],"kar":[23,24,25,26,66,67,68,69],"karo":[23,24,25,26],"karos":[23,24,25,26],"karose":[23,24,25,26],"karosel":[23,24,25,26],"t":[27,28,29,30,61,62,70,71,72,73,74,75,76,77,78,79,80,81,82,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103],"ta":[27,28,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103],"tat":[27,28],"tata":[27,28],"tatat":[27,28],"tatata":[27,28],"tatatap":[27,28],"tatatapl":[27,28],"tatataple":[27,28],"tr":[29,30,76,77,78,79,80,81,82],"tro":[29,30],"trop":[29,30],"trops":[29,30],"tropso":[29,30],"tropsom":[29,30],"tropsome":[29,30],"e":[31,32,33,34,35,45,46],"es":[31,32,33,34,35],"esp":[31,32,33,34,35],"espa":[31,32,33,34,35],"espam":[31,32,33,34,35],"espamt":[31,32,33,34,35],"espamta":[31,32,33,34,35],"espamtap":[31,32,33,34,35],"espamtapl":[31,32,33,34,35],"espamtaple":[31,32,33,34,35],"m":[36,37,38,39,40,41,42,43,44,83,84],"ma":[36,37,38,39,40,41,42],"mar":[36,37,38,39,40,41,42],"mark":[36,37,38,39,40,41,42],"marko":[36,37,38,39,40,41,42],"mo":[43,44,83,84],"mot":[43,44,83,84],"mota":[43,44],"motal":[43,44],"em":[45,46],"emf":[45,46],"emfe":[45,46],"emfem":[45,46],"emfeme":[45,46],"emfemet":[45,46],"emfemete":[45,46],"s":[47,48,49,50,51,52,55,56,57,58,59,60],"sk":[47,48],"ske":[47,48],"skel":[47,48],"skele":[47,48],"skelet":[47,48],"skeleto":[47,48],"skeletom":[47,48],"sl":[49,50],"sle":[49,50],"slet":[49,50],"slete":[49,50],"sleter":[49,50],"st":[51,52],"ste":[51,52],"step":[51,52],"steps":[51,52],"r":[53,54],"re":[53,54],"rep":[53,54],"repo":[53,54],"repom":[53,54],"sf":[55,56,57,58,59,60],"sfe":[55,56,57,58,59,60],"sfet":[55,56,57,58,59,60],"sfetk":[55,56,57,58,59,60],"tf":[61,62],"tfe":[61,62],"tfet":[61,62],"kl":[63,64,65],"klo":[63,64,65],"klof":[63,64,65],"klofe":[63,64,65],"klofem":[63,64,65],"klofemk":[63,64,65],"kart":[66,67,68,69],"karts":[66,67,68,69],"te":[70,71,72,73,74,75],"tes":[70,71,72,73,74,75],"test":[70,71,72,73,74,75],"tra":[76,77,78,79,80,81,82],"trak":[76,77,78,79,80,81,82],"mote":[83,84],"motef":[83,84],"motefe":[83,84],"motefek":[83,84],"motefeka":[83,84],"motefekat":[83,84],"motefekate":[83,84],"motefekateo":[83,84],"motefekateom":[83,84],"f":[85],"fr":[85],"fra":[85],"frap":[85],"frape":[85],"fraper":[85],"l":[86],"la":[86],"las":[86],"lase":[86],"tal":[87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103],"talf":[87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103],"talfe":[87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103],"talfem":[87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103],"talfemt":[87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103]},{"3":[67],"pol":[1],"pols":[1],"polse":[1],"k":[2,3,4,45,46,57,59,71],"kr":[2,3,4,71],"kra":[2,3,71],"krat":[2,3,71],"krate":[2,3,71],"kratem":[2,3,71],"kratemt":[2,3,71],"kre":[4],"kret":[4],"t":[5,6,7,8,13,20,22,44,48,52,54,60,84],"to":[5],"tof":[5],"tofm":[5],"tofml":[5],"tofmlo":[5],"tofmloa":[5],"tofmloat":[5],"tr":[6,7,8,98],"tra":[6,7,8],"trak":[6,7,8],"a":[9,10,14,72],"ak":[9,10],"akt":[9,10],"akte":[9,10],"aktef":[9,10],"aktefe":[9,10],"l":[12,25,58,76,77,78,96,97],"lo":[12],"loa":[12],"loat":[12],"loate":[12],"loatem":[12],"loatemk":[12],"te":[13,28,30,44,48,52,54,60,84,89],"tes":[13,60,89],"tesa":[13,60],"tesap":[13,60],"tesapl":[13,60],"tesaple":[13,60],"tesaplet":[13,60],"ar":[14],"are":[14],"area":[14],"m":[15,56,68,74,92],"mo":[15,38,39,41,56,68],"mor":[15,39,41,56],"morm":[15,39,41,56],"morma":[15,39,41,56],"mormal":[15,39,41,56],"o":[16,33,69],"ot":[16],"ote":[16],"oter":[16],"oters":[16],"p":[18,19,21,61,62,63,64,65,88,90,91,99,100],"pl":[18],"pla":[18],"plam":[18],"pa":[19,21,63,64,65,88,91],"pas":[19,21],"pase":[19,21],"ta":[20,22],"tap":[20,22],"tapl":[20,22],"taple":[20,22],"ko":[24,45,46,57,59],"kom":[24,45,46],"komo":[24],"komom":[24],"le":[25,76,77,78,96,97],"les":[25,76,77,78],"lest":[25,76,77,78],"kal":[26],"kale":[26],"kaler":[26],"kalere":[26],"tef":[28,30,44,48,52,54,84],"tefa":[28,30,44,48,52,54,84],"tefao":[28,30,44,48,52,54,84],"tefaol":[28,30,44,48,52,54,84],"tefaolt":[28,30,44,48,52,54,84],"f":[32,37,50,93,94,95,101,103],"fe":[32,37,101],"fer":[32],"fert":[32],"ferte":[32],"fertek":[32],"ferteka":[32],"fertekal":[32],"or":[33],"ore":[33],"ores":[33],"oreso":[33],"oresom":[33],"oresomt":[33],"oresomta":[33],"oresomtal":[33],"r":[34,35,40,42,75],"re":[34,35,40,42],"res":[34,35],"rese":[34,35],"reses":[34,35],"resesa":[34,35],"resesap":[34,35],"resesapl":[34,35],"resesaple":[34,35],"fea":[37],"feat":[37],"feato":[37],"feator":[37],"featore":[37],"featores":[37],"ref":[40,42],"refe":[40,42],"refer":[40,42],"refers":[40,42],"referse":[40,42],"komt":[45,46],"komte":[45,46],"komtem":[45,46],"komtemt":[45,46],"fr":[50],"fro":[50],"from":[50],"kos":[57,59],"kost":[57,59],"kosto":[57,59],"kostom":[57,59],"la":[58],"lap":[58],"lape":[58],"lapel":[58],"po":[61,62,90,99,100],"pos":[61,62],"pak":[63,64,65,88],"pakr":[63,64,65,88],"pakro":[63,64,65,88],"pakrom":[63,64,65,88],"pakromt":[63,64,65,88],"3t":[67],"mom":[68],"momp":[68],"mompe":[68],"momper":[68],"of":[69],"ofe":[69],"ofer":[69],"am":[72],"ame":[72],"amem":[72],"amema":[72],"amemat":[72],"amemate":[72],"amematet":[72],"s":[73,79,80,81,82],"sl":[73],"sle":[73],"slet":[73],"slete":[73],"ma":[74,92],"mak":[74],"make":[74],"makek":[74],"ro":[75],"rot":[75],"rota":[75],"rotat":[75],"rotate":[75],"se":[79,80,81,82],"sem":[79,80,81,82],"semk":[79,80,81,82],"semkl":[79,80,81,82],"semkle":[79,80,81,82],"test":[89],"por":[90,99,100],"port":[90,99,100],"porte":[90,99,100],"porter":[90,99,100],"pat":[91],"pate":[91],"patem":[91],"patemk":[91],"mar":[92],"mark":[92],"marke":[92],"markem":[92],"fo":[93,94,95,103],"fom":[93,94,95],"fomt":[93,94,95],"let":[96],"lete":[96],"leter":[96],"lem":[97],"leme":[97],"tro":[98],"trop":[98],"fet":[101],"e":[102],"ek":[102],"ekt":[102],"fol":[103]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"s":[3,12,20,22,93,96,98],"sa":[3,98],"sat":[3,98],"sato":[3,98],"satof":[3,98],"t":[4,14,35,64,65],"tr":[4],"tra":[4],"trak":[4],"l":[7,13],"le":[7],"lef":[7],"left":[7],"r":[8,41,82,99],"re":[8,82],"rek":[8],"rekt":[8],"am":[9,10],"amk":[9,10],"amko":[9,10],"amkor":[9,10],"sm":[12],"lk":[13],"te":[14,35,62,64,77,81],"tes":[14,35],"tesa":[14],"tesap":[14],"tesapl":[14],"tesaple":[14],"tesaplet":[14],"e":[18,50,97],"em":[18],"emp":[18],"empo":[18],"empot":[18],"se":[20,22,93],"sel":[20,22],"sele":[20,22],"selek":[20,22],"selekt":[20,22],"selekte":[20,22],"selekteo":[20,22],"selekteom":[20,22],"p":[34,69],"pa":[34],"pam":[34],"pame":[34],"pamel":[34],"test":[35],"k":[38,72,88,89,90,103],"ka":[38],"kap":[38],"rt":[41,42],"rtl":[41,42],"o":[46,68,73],"om":[46],"omt":[46],"omte":[46],"omtet":[46],"omtetl":[46],"omtetle":[46],"omtetlet":[46],"eo":[50],"eos":[50],"eos1":[50],"eos16":[50],"f":[57,58,100],"fe":[57,58,94,100],"fet":[57,58,100],"kol":[59,88,89,90],"kolo":[59,88,89,90],"kolor":[59,88,89,90],"tef":[62],"tefa":[62],"tefao":[62],"tefaol":[62],"tefaolt":[62],"tet":[64],"tetl":[64],"ta":[65],"tar":[65],"tark":[65],"of":[68],"po":[69],"pop":[69],"popl":[69],"pople":[69],"kr":[72],"kra":[72],"krat":[72],"krate":[72],"kratem":[72],"kratemt":[72],"op":[73],"tem":[77,81],"temo":[77],"tre":[78],"trel":[78],"trelo":[78],"tema":[81],"temam":[81],"temame":[81],"temamek":[81],"res":[82],"rest":[82],"restr":[82],"restre":[82],"restrek":[82],"restrekt":[82],"ko":[88,89,90,103],"ses":[93],"sese":[93],"fek":[94],"fekt":[94],"fa":[95],"fam":[95],"fame":[95],"famel":[95],"famele":[95],"sp":[96],"spa":[96],"spak":[96],"spake":[96],"spakem":[96],"spakemk":[96],"ek":[97],"ekt":[97],"ra":[99],"rat":[99],"rate":[99],"rateo":[99],"rateos":[99],"kom":[103],"komf":[103],"komfe":[103],"komfek":[103]},{"to":[7,8],"t":[10],"te":[10],"tef":[10],"tefa":[10],"tefao":[10],"tefaol":[10],"tefaolt":[10],"m":[21,22],"mo":[21,22],"mot":[21,22],"mote":[21,22],"moteo":[21,22],"moteom":[21,22],"ko":[38],"kos":[38],"kost":[38],"kosto":[38],"kostom":[38],"so":[57],"sof":[57],"r":[58],"rt":[58],"rtl":[58],"se":[59],"ses":[59],"sese":[59],"l":[68],"le":[68],"lem":[68],"leme":[68],"lemes":[68],"k":[78],"kl":[78],"klo":[78],"klom":[78],"klome":[78],"e":[80],"em":[80],"ema":[80],"emak":[80],"emake":[80],"tro":[82],"trop":[82]},{"r":[7],"re":[7],"rek":[7],"rekt":[7],"l":[8,57,59],"le":[8],"lef":[8],"left":[8],"a":[38],"am":[38],"ame":[38],"amem":[38],"amema":[38],"amemat":[38],"amemate":[38],"amemateo":[38],"amemateom":[38],"la":[57,59],"lap":[57,59],"lape":[57,59],"lapel":[57,59],"o":[80],"om":[80],"e":[81],"em":[81],"ema":[81],"emak":[81],"emake":[81],"f":[82],"fa":[82],"fal":[82],"falo":[82]},{"fem":[57],"tro":[80],"trop":[80]},{"ke":[57],"kek":[57],"keke":[57],"keket":[57]},{"o":[57],"om":[57],"oml":[57],"omle":[57]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "4": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-3", "kind": "variant" }, "5": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-4", "kind": "variant" }, "6": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "7": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "8": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "9": { "id": "components-compose-active-anchor-index-story-vue", "kind": "story" }, "10": { "id": "components-compose-active-anchor-index-story-vue:_default", "kind": "variant" }, "11": { "id": "components-base-button-button-story-vue", "kind": "story" }, "12": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "13": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "14": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "15": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "16": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "17": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "18": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "19": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "20": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "21": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-3", "kind": "variant" }, "22": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-4", "kind": "variant" }, "23": { "id": "components-custom-carousel-carousel-story-vue", "kind": "story" }, "24": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-0", "kind": "variant" }, "25": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-1", "kind": "variant" }, "26": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-2", "kind": "variant" }, "27": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "28": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "29": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "30": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "31": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "32": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "33": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "34": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "35": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "36": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "37": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "38": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "39": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "40": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "41": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "42": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-5", "kind": "variant" }, "43": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "44": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "45": { "id": "components-custom-infinite-content-infinitecontent-story-vue", "kind": "story" }, "46": { "id": "components-custom-infinite-content-infinitecontent-story-vue:components-custom-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "47": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "48": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "49": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "50": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "51": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "52": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "53": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "54": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "55": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "56": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "57": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "58": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "59": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "60": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "61": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "62": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "63": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "64": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "65": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-1", "kind": "variant" }, "66": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "67": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "68": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "69": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "70": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "71": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "72": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "73": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "74": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-3", "kind": "variant" }, "75": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-4", "kind": "variant" }, "76": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "77": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "78": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "79": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "80": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "81": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "82": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "83": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "84": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "85": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "86": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "87": { "id": "tailwind", "kind": "story" }, "88": { "id": "tailwind:background-color", "kind": "variant" }, "89": { "id": "tailwind:text-color", "kind": "variant" }, "90": { "id": "tailwind:border-color", "kind": "variant" }, "91": { "id": "tailwind:padding", "kind": "variant" }, "92": { "id": "tailwind:margin", "kind": "variant" }, "93": { "id": "tailwind:font-size", "kind": "variant" }, "94": { "id": "tailwind:font-weight", "kind": "variant" }, "95": { "id": "tailwind:font-family", "kind": "variant" }, "96": { "id": "tailwind:letter-spacing", "kind": "variant" }, "97": { "id": "tailwind:line-height", "kind": "variant" }, "98": { "id": "tailwind:drop-shadow", "kind": "variant" }, "99": { "id": "tailwind:border-radius", "kind": "variant" }, "100": { "id": "tailwind:border-width", "kind": "variant" }, "101": { "id": "tailwind:width", "kind": "variant" }, "102": { "id": "tailwind:height", "kind": "variant" }, "103": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-a87e9a03.js"), true ? ["assets/search-docs-data-a87e9a03.js","assets/vendor-a686512f.js"] : void 0);
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
