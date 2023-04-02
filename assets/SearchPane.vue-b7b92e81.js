import { _ as __vitePreload } from "./GenericMountStory.vue2-8e998ca9.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bo as useFocus, f as watch, bp as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bq as flexsearch_bundleExports } from "./vendor-979af273.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-4da7bbcb.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-a5cedaac.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1,"99":1,"100":1,"101":1,"102":1,"103":1,"104":1,"105":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,3,4,5,9,10,11,12,13,14],"po":[0,1,2,3,4,5,9,10,11,12,13,14],"pot":[0,1,2,3,4,5,9,10,11,12,13,14],"poto":[0,1,2,3,4,5,9,10,11,12,13,14],"potom":[0,1,2,3,4,5,9,10,11,12,13,14],"k":[6,7,8,15,16,17,18,21,22,23,24,61,62,63,64,65,66,67],"kr":[6,7,8],"kre":[6,7,8],"kret":[6,7,8],"ke":[15,16,17,18],"kek":[15,16,17,18],"kekp":[15,16,17,18],"kekpo":[15,16,17,18],"kekpos":[15,16,17,18],"o":[19,20],"os":[19,20],"ose":[19,20],"ka":[21,22,23,24,64,65,66,67],"kar":[21,22,23,24,64,65,66,67],"karo":[21,22,23,24],"karos":[21,22,23,24],"karose":[21,22,23,24],"karosel":[21,22,23,24],"t":[25,26,27,28,59,60,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105],"ta":[25,26,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105],"tat":[25,26],"tata":[25,26],"tatat":[25,26],"tatata":[25,26],"tatatap":[25,26],"tatatapl":[25,26],"tatataple":[25,26],"tr":[27,28,78,79,80,81,82,83,84],"tro":[27,28],"trop":[27,28],"trops":[27,28],"tropso":[27,28],"tropsom":[27,28],"tropsome":[27,28],"e":[29,30,31,32,33,34,35],"es":[29,30,31,32,33],"esp":[29,30,31,32,33],"espa":[29,30,31,32,33],"espam":[29,30,31,32,33],"espamt":[29,30,31,32,33],"espamta":[29,30,31,32,33],"espamtap":[29,30,31,32,33],"espamtapl":[29,30,31,32,33],"espamtaple":[29,30,31,32,33],"em":[34,35],"emf":[34,35],"emfe":[34,35],"emfem":[34,35],"emfeme":[34,35],"emfemet":[34,35],"emfemete":[34,35],"m":[36,37,38,39,40,41,42,43,44,68,69,85,86],"ma":[36,37,38,39,40,41,42],"mar":[36,37,38,39,40,41,42],"mark":[36,37,38,39,40,41,42],"marko":[36,37,38,39,40,41,42],"mo":[43,44,68,69,85,86],"mot":[43,44,85,86],"mota":[43,44],"motal":[43,44],"r":[45,46],"re":[45,46],"rep":[45,46],"repo":[45,46],"repom":[45,46],"s":[47,48,49,50,51,52,53,54,55,56,57,58],"sk":[47,48],"ske":[47,48],"skel":[47,48],"skele":[47,48],"skelet":[47,48],"skeleto":[47,48],"skeletom":[47,48],"sl":[49,50],"sle":[49,50],"slet":[49,50],"slete":[49,50],"sleter":[49,50],"st":[51,52],"ste":[51,52],"step":[51,52],"steps":[51,52],"sf":[53,54,55,56,57,58],"sfe":[53,54,55,56,57,58],"sfet":[53,54,55,56,57,58],"sfetk":[53,54,55,56,57,58],"tf":[59,60],"tfe":[59,60],"tfet":[59,60],"kl":[61,62,63],"klo":[61,62,63],"klof":[61,62,63],"klofe":[61,62,63],"klofem":[61,62,63],"klofemk":[61,62,63],"kart":[64,65,66,67],"karts":[64,65,66,67],"mos":[68,69],"mose":[68,69],"te":[70,71,72,73,74,75,76,77],"tes":[70,71,72,73,74,75,76,77],"test":[70,71,72,73,74,75,76,77],"tra":[78,79,80,81,82,83,84],"trak":[78,79,80,81,82,83,84],"mote":[85,86],"motef":[85,86],"motefe":[85,86],"motefek":[85,86],"motefeka":[85,86],"motefekat":[85,86],"motefekate":[85,86],"motefekateo":[85,86],"motefekateom":[85,86],"f":[87],"fr":[87],"fra":[87],"frap":[87],"frape":[87],"fraper":[87],"l":[88],"la":[88],"las":[88],"lase":[88],"tal":[89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105],"talf":[89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105],"talfe":[89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105],"talfem":[89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105],"talfemt":[89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105]},{"3":[65],"pol":[1],"pols":[1],"polse":[1],"k":[2,3,4,34,35,55,57,71,76],"kr":[2,3,4,71],"kra":[2,3,71],"krat":[2,3,71],"krate":[2,3,71],"kratem":[2,3,71],"kratemt":[2,3,71],"kre":[4],"kret":[4],"t":[5,6,7,8,11,18,44,46,48,52,58,86],"to":[5],"tof":[5],"tofm":[5],"tofml":[5],"tofmlo":[5],"tofmloa":[5],"tofmloat":[5],"tr":[6,7,8,100],"tra":[6,7,8],"trak":[6,7,8],"l":[10,23,56,78,79,80,98,99],"lo":[10],"loa":[10],"loat":[10],"loate":[10],"loatem":[10],"loatemk":[10],"te":[11,26,28,44,46,48,52,58,86,91],"tes":[11,58,91],"tesa":[11,58],"tesap":[11,58],"tesapl":[11,58],"tesaple":[11,58],"tesaplet":[11,58],"a":[12,19,20,72],"ar":[12],"are":[12],"area":[12],"m":[13,54,66,74,94],"mo":[13,38,39,41,54,66],"mor":[13,39,41,54],"morm":[13,39,41,54],"morma":[13,39,41,54],"mormal":[13,39,41,54],"o":[14,31,67],"ot":[14],"ote":[14],"oter":[14],"oters":[14],"p":[16,17,59,60,61,62,63,69,90,92,93,101,102],"pl":[16,69],"pla":[16],"plam":[16],"pa":[17,61,62,63,90,93],"pas":[17],"pase":[17],"ta":[18],"tap":[18],"tapl":[18],"taple":[18],"ak":[19,20],"akt":[19,20],"akte":[19,20],"aktef":[19,20],"aktefe":[19,20],"ko":[22,34,35,55,57],"kom":[22,34,35],"komo":[22],"komom":[22],"le":[23,78,79,80,98,99],"les":[23,78,79,80],"lest":[23,78,79,80],"kal":[24],"kale":[24],"kaler":[24],"kalere":[24],"tef":[26,28,44,46,48,52,86],"tefa":[26,28,44,46,48,52,86],"tefao":[26,28,44,46,48,52,86],"tefaol":[26,28,44,46,48,52,86],"tefaolt":[26,28,44,46,48,52,86],"f":[30,37,50,95,96,97,103,105],"fe":[30,37,103],"fer":[30],"fert":[30],"ferte":[30],"fertek":[30],"ferteka":[30],"fertekal":[30],"or":[31],"ore":[31],"ores":[31],"oreso":[31],"oresom":[31],"oresomt":[31],"oresomta":[31],"oresomtal":[31],"r":[32,33,40,42,75],"re":[32,33,40,42],"res":[32,33],"rese":[32,33],"reses":[32,33],"resesa":[32,33],"resesap":[32,33],"resesapl":[32,33],"resesaple":[32,33],"komt":[34,35],"komte":[34,35],"komtem":[34,35],"komtemt":[34,35],"fea":[37],"feat":[37],"feato":[37],"feator":[37],"featore":[37],"featores":[37],"ref":[40,42],"refe":[40,42],"refer":[40,42],"refers":[40,42],"referse":[40,42],"fr":[50],"fro":[50],"from":[50],"kos":[55,57],"kost":[55,57],"kosto":[55,57],"kostom":[55,57],"la":[56],"lap":[56],"lape":[56],"lapel":[56],"po":[59,60,92,101,102],"pos":[59,60],"pak":[61,62,63,90],"pakr":[61,62,63,90],"pakro":[61,62,63,90],"pakrom":[61,62,63,90],"pakromt":[61,62,63,90],"3t":[65],"mom":[66],"momp":[66],"mompe":[66],"momper":[66],"of":[67],"ofe":[67],"ofer":[67],"plo":[69],"plop":[69],"am":[72],"ame":[72],"amem":[72],"amema":[72],"amemat":[72],"amemate":[72],"amematet":[72],"s":[73,81,82,83,84],"sl":[73],"sle":[73],"slet":[73],"slete":[73],"ma":[74,94],"mak":[74],"make":[74],"makek":[74],"ro":[75],"rot":[75],"rota":[75],"rotat":[75],"rotate":[75],"ke":[76],"ker":[76],"kerk":[76],"kerkl":[76],"kerkle":[76],"tep":[77],"tepe":[77],"tepef":[77],"tepefr":[77],"tepefre":[77],"tepefret":[77],"tepefrete":[77],"tepefreter":[77],"se":[81,82,83,84],"sem":[81,82,83,84],"semk":[81,82,83,84],"semkl":[81,82,83,84],"semkle":[81,82,83,84],"test":[91],"por":[92,101,102],"port":[92,101,102],"porte":[92,101,102],"porter":[92,101,102],"pat":[93],"pate":[93],"patem":[93],"patemk":[93],"mar":[94],"mark":[94],"marke":[94],"markem":[94],"fo":[95,96,97,105],"fom":[95,96,97],"fomt":[95,96,97],"let":[98],"lete":[98],"leter":[98],"lem":[99],"leme":[99],"tro":[100],"trop":[100],"fet":[103],"e":[104],"ek":[104],"ekt":[104],"fol":[105]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"s":[3,10,18,95,98,100],"sa":[3,100],"sat":[3,100],"sato":[3,100],"satof":[3,100],"t":[4,12,33,62,63],"tr":[4],"tra":[4],"trak":[4],"l":[7,11],"le":[7],"lef":[7],"left":[7],"r":[8,41,84,101],"re":[8,84],"rek":[8],"rekt":[8],"sm":[10],"lk":[11],"te":[12,33,60,62,79,83],"tes":[12,33],"tesa":[12],"tesap":[12],"tesapl":[12],"tesaple":[12],"tesaplet":[12],"e":[16,50,99],"em":[16],"emp":[16],"empo":[16],"empot":[16],"se":[18,95],"sel":[18],"sele":[18],"selek":[18],"selekt":[18],"selekte":[18],"selekteo":[18],"selekteom":[18],"am":[19,20],"amk":[19,20],"amko":[19,20],"amkor":[19,20],"p":[32,67],"pa":[32],"pam":[32],"pame":[32],"pamel":[32],"test":[33],"o":[35,66,73],"om":[35],"omt":[35],"omte":[35],"omtet":[35],"omtetl":[35],"omtetle":[35],"omtetlet":[35],"k":[38,72,90,91,92,105],"ka":[38],"kap":[38],"rt":[41,42],"rtl":[41,42],"eo":[50],"eos":[50],"eos1":[50],"eos16":[50],"f":[55,56,102],"fe":[55,56,96,102],"fet":[55,56,102],"kol":[57,90,91,92],"kolo":[57,90,91,92],"kolor":[57,90,91,92],"tef":[60],"tefa":[60],"tefao":[60],"tefaol":[60],"tefaolt":[60],"tet":[62],"tetl":[62],"ta":[63],"tar":[63],"tark":[63],"of":[66],"po":[67],"pop":[67],"popl":[67],"pople":[67],"kr":[72],"kra":[72],"krat":[72],"krate":[72],"kratem":[72],"kratemt":[72],"op":[73],"tem":[79,83],"temo":[79],"tre":[80],"trel":[80],"trelo":[80],"tema":[83],"temam":[83],"temame":[83],"temamek":[83],"res":[84],"rest":[84],"restr":[84],"restre":[84],"restrek":[84],"restrekt":[84],"ko":[90,91,92,105],"ses":[95],"sese":[95],"fek":[96],"fekt":[96],"fa":[97],"fam":[97],"fame":[97],"famel":[97],"famele":[97],"sp":[98],"spa":[98],"spak":[98],"spake":[98],"spakem":[98],"spakemk":[98],"ek":[99],"ekt":[99],"ra":[101],"rat":[101],"rate":[101],"rateo":[101],"rateos":[101],"kom":[105],"komf":[105],"komfe":[105],"komfek":[105]},{"to":[7,8],"t":[20],"te":[20],"tef":[20],"tefa":[20],"tefao":[20],"tefaol":[20],"tefaolt":[20],"ko":[38],"kos":[38],"kost":[38],"kosto":[38],"kostom":[38],"so":[55],"sof":[55],"r":[56],"rt":[56],"rtl":[56],"se":[57],"ses":[57],"sese":[57],"l":[66],"le":[66],"lem":[66],"leme":[66],"lemes":[66],"k":[80],"kl":[80],"klo":[80],"klom":[80],"klome":[80],"e":[82],"em":[82],"ema":[82],"emak":[82],"emake":[82],"tro":[84],"trop":[84]},{"r":[7],"re":[7],"rek":[7],"rekt":[7],"l":[8,55,57],"le":[8],"lef":[8],"left":[8],"a":[38],"am":[38],"ame":[38],"amem":[38],"amema":[38],"amemat":[38],"amemate":[38],"amemateo":[38],"amemateom":[38],"la":[55,57],"lap":[55,57],"lape":[55,57],"lapel":[55,57],"o":[82],"om":[82],"e":[83],"em":[83],"ema":[83],"emak":[83],"emake":[83],"f":[84],"fa":[84],"fal":[84],"falo":[84]},{"fem":[55],"tro":[82],"trop":[82]},{"ke":[55],"kek":[55],"keke":[55],"keket":[55]},{"o":[55],"om":[55],"oml":[55],"omle":[55]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "4": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-3", "kind": "variant" }, "5": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-4", "kind": "variant" }, "6": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "7": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "8": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "9": { "id": "components-base-button-button-story-vue", "kind": "story" }, "10": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "11": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "12": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "13": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "14": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "15": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "16": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "17": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "18": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "19": { "id": "components-compose-active-anchor-index-story-vue", "kind": "story" }, "20": { "id": "components-compose-active-anchor-index-story-vue:_default", "kind": "variant" }, "21": { "id": "components-custom-carousel-carousel-story-vue", "kind": "story" }, "22": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-0", "kind": "variant" }, "23": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-1", "kind": "variant" }, "24": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-2", "kind": "variant" }, "25": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "26": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "27": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "28": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "29": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "30": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "31": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "32": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "33": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "34": { "id": "components-custom-infinite-content-infinitecontent-story-vue", "kind": "story" }, "35": { "id": "components-custom-infinite-content-infinitecontent-story-vue:components-custom-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "36": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "37": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "38": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "39": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "40": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "41": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "42": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-5", "kind": "variant" }, "43": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "44": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "45": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "46": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "47": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "48": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "49": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "50": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "51": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "52": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "53": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "54": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "55": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "56": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "57": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "58": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "59": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "60": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "61": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "62": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "63": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-1", "kind": "variant" }, "64": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "65": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "66": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "67": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "68": { "id": "components-tailwind-mouse-mouse-story-vue", "kind": "story" }, "69": { "id": "components-tailwind-mouse-mouse-story-vue:components-tailwind-mouse-mouse-story-vue-0", "kind": "variant" }, "70": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "71": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "72": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "73": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "74": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-3", "kind": "variant" }, "75": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-4", "kind": "variant" }, "76": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-5", "kind": "variant" }, "77": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-6", "kind": "variant" }, "78": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "79": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "80": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "81": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "82": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "83": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "84": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "85": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "86": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "87": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "88": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "89": { "id": "tailwind", "kind": "story" }, "90": { "id": "tailwind:background-color", "kind": "variant" }, "91": { "id": "tailwind:text-color", "kind": "variant" }, "92": { "id": "tailwind:border-color", "kind": "variant" }, "93": { "id": "tailwind:padding", "kind": "variant" }, "94": { "id": "tailwind:margin", "kind": "variant" }, "95": { "id": "tailwind:font-size", "kind": "variant" }, "96": { "id": "tailwind:font-weight", "kind": "variant" }, "97": { "id": "tailwind:font-family", "kind": "variant" }, "98": { "id": "tailwind:letter-spacing", "kind": "variant" }, "99": { "id": "tailwind:line-height", "kind": "variant" }, "100": { "id": "tailwind:drop-shadow", "kind": "variant" }, "101": { "id": "tailwind:border-radius", "kind": "variant" }, "102": { "id": "tailwind:border-width", "kind": "variant" }, "103": { "id": "tailwind:width", "kind": "variant" }, "104": { "id": "tailwind:height", "kind": "variant" }, "105": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-a4cda4a5.js"), true ? ["assets/search-docs-data-a4cda4a5.js","assets/vendor-979af273.js"] : void 0);
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
