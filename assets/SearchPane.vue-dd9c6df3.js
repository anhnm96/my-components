import { _ as __vitePreload } from "./GenericMountStory.vue2-c36e17dc.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, bl as useFocus, f as watch, bm as refDebounced, i as computed, K as withDirectives, a8 as vModelText, b as withKeys, D as withModifiers, bn as flexsearch_bundleExports } from "./vendor-ef711c3e.js";
import { u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, _ as _export_sfc, a as useStoryStore } from "./bundle-main-de729159.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-170d705a.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,2,3,7,8,9,10,11,12],"po":[0,1,2,3,7,8,9,10,11,12],"pot":[0,1,2,3,7,8,9,10,11,12],"poto":[0,1,2,3,7,8,9,10,11,12],"potom":[0,1,2,3,7,8,9,10,11,12],"k":[4,5,6,13,14,15,16,17,18,19,20,21,57,58,59,60,61,62],"kr":[4,5,6],"kre":[4,5,6],"kret":[4,5,6],"ka":[13,14,15,59,60,61,62],"kar":[13,14,15,59,60,61,62],"karo":[13,14,15],"karos":[13,14,15],"karose":[13,14,15],"karosel":[13,14,15],"ke":[16,17,18,19,20,21],"kek":[16,17,18,19,20,21],"kekp":[16,17,18,19,20,21],"kekpo":[16,17,18,19,20,21],"kekpos":[16,17,18,19,20,21],"e":[22,23,28,29,30,31,32],"em":[22,23],"emf":[22,23],"emfe":[22,23],"emfem":[22,23],"emfeme":[22,23],"emfemet":[22,23],"emfemete":[22,23],"t":[24,25,26,27,55,56,63,64,65,66,67,68,69,70,71,72,73,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94],"ta":[24,25,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94],"tat":[24,25],"tata":[24,25],"tatat":[24,25],"tatata":[24,25],"tatatap":[24,25],"tatatapl":[24,25],"tatataple":[24,25],"tr":[26,27,67,68,69,70,71,72,73],"tro":[26,27],"trop":[26,27],"trops":[26,27],"tropso":[26,27],"tropsom":[26,27],"tropsome":[26,27],"es":[28,29,30,31,32],"esp":[28,29,30,31,32],"espa":[28,29,30,31,32],"espam":[28,29,30,31,32],"espamt":[28,29,30,31,32],"espamta":[28,29,30,31,32],"espamtap":[28,29,30,31,32],"espamtapl":[28,29,30,31,32],"espamtaple":[28,29,30,31,32],"m":[33,34,35,36,37,38,39,40,74,75],"ma":[33,34,35,36,37,38],"mar":[33,34,35,36,37,38],"mark":[33,34,35,36,37,38],"marko":[33,34,35,36,37,38],"mo":[39,40,74,75],"mot":[39,40,74,75],"mota":[39,40],"motal":[39,40],"s":[41,42,45,46,47,48,49,50,51,52,53,54],"sk":[41,42],"ske":[41,42],"skel":[41,42],"skele":[41,42],"skelet":[41,42],"skeleto":[41,42],"skeletom":[41,42],"r":[43,44],"re":[43,44],"rep":[43,44],"repo":[43,44],"repom":[43,44],"sl":[45,46],"sle":[45,46],"slet":[45,46],"slete":[45,46],"sleter":[45,46],"st":[47,48],"ste":[47,48],"step":[47,48],"steps":[47,48],"sf":[49,50,51,52,53,54],"sfe":[49,50,51,52,53,54],"sfet":[49,50,51,52,53,54],"sfetk":[49,50,51,52,53,54],"tf":[55,56],"tfe":[55,56],"tfet":[55,56],"kl":[57,58],"klo":[57,58],"klof":[57,58],"klofe":[57,58],"klofem":[57,58],"klofemk":[57,58],"kart":[59,60,61,62],"karts":[59,60,61,62],"te":[63,64,65,66],"tes":[63,64,65,66],"test":[63,64,65,66],"tra":[67,68,69,70,71,72,73],"trak":[67,68,69,70,71,72,73],"mote":[74,75],"motef":[74,75],"motefe":[74,75],"motefek":[74,75],"motefeka":[74,75],"motefekat":[74,75],"motefekate":[74,75],"motefekateo":[74,75],"motefekateom":[74,75],"f":[76],"fr":[76],"fra":[76],"frap":[76],"frape":[76],"fraper":[76],"l":[77],"la":[77],"las":[77],"lase":[77],"tal":[78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94],"talf":[78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94],"talfe":[78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94],"talfem":[78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94],"talfemt":[78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94]},{"3":[60],"pol":[1],"pols":[1],"polse":[1],"k":[2,3,22,23,51,53,64],"kr":[2,3,64],"kra":[2,3,64],"krat":[2,3,64],"krate":[2,3,64],"kratem":[2,3,64],"kratemt":[2,3,64],"t":[4,5,6,9,19,21,40,42,44,48,54,75],"tr":[4,5,6,89],"tra":[4,5,6],"trak":[4,5,6],"l":[8,15,52,67,68,69,87,88],"lo":[8],"loa":[8],"loat":[8],"loate":[8],"loatem":[8],"loatemk":[8],"te":[9,25,27,40,42,44,48,54,75,80],"tes":[9,54,80],"tesa":[9,54],"tesap":[9,54],"tesapl":[9,54],"tesaple":[9,54],"tesaplet":[9,54],"a":[10,65],"ar":[10],"are":[10],"area":[10],"m":[11,50,61,83],"mo":[11,34,35,37,50,61],"mor":[11,35,37,50],"morm":[11,35,37,50],"morma":[11,35,37,50],"mormal":[11,35,37,50],"o":[12,30,62],"ot":[12],"ote":[12],"oter":[12],"oters":[12],"ko":[14,22,23,51,53],"kom":[14,22,23],"komo":[14],"komom":[14],"le":[15,67,68,69,87,88],"les":[15,67,68,69],"lest":[15,67,68,69],"p":[17,18,20,55,56,57,58,79,81,82,90,91],"pl":[17],"pla":[17],"plam":[17],"pa":[18,20,57,58,79,82],"pas":[18,20],"pase":[18,20],"ta":[19,21],"tap":[19,21],"tapl":[19,21],"taple":[19,21],"komt":[22,23],"komte":[22,23],"komtem":[22,23],"komtemt":[22,23],"tef":[25,27,40,42,44,48,75],"tefa":[25,27,40,42,44,48,75],"tefao":[25,27,40,42,44,48,75],"tefaol":[25,27,40,42,44,48,75],"tefaolt":[25,27,40,42,44,48,75],"f":[29,46,84,85,86,92,94],"fe":[29,92],"fer":[29],"fert":[29],"ferte":[29],"fertek":[29],"ferteka":[29],"fertekal":[29],"or":[30],"ore":[30],"ores":[30],"oreso":[30],"oresom":[30],"oresomt":[30],"oresomta":[30],"oresomtal":[30],"r":[31,32,36,38],"re":[31,32,36,38],"res":[31,32],"rese":[31,32],"reses":[31,32],"resesa":[31,32],"resesap":[31,32],"resesapl":[31,32],"resesaple":[31,32],"ref":[36,38],"refe":[36,38],"refer":[36,38],"refers":[36,38],"referse":[36,38],"fr":[46],"fro":[46],"from":[46],"kos":[51,53],"kost":[51,53],"kosto":[51,53],"kostom":[51,53],"la":[52],"lap":[52],"lape":[52],"lapel":[52],"po":[55,56,81,90,91],"pos":[55,56],"pak":[57,58,79],"pakr":[57,58,79],"pakro":[57,58,79],"pakrom":[57,58,79],"pakromt":[57,58,79],"3t":[60],"mom":[61],"momp":[61],"mompe":[61],"momper":[61],"of":[62],"ofe":[62],"ofer":[62],"am":[65],"ame":[65],"amem":[65],"amema":[65],"amemat":[65],"amemate":[65],"amematet":[65],"s":[66,70,71,72,73],"sl":[66],"sle":[66],"slet":[66],"slete":[66],"se":[70,71,72,73],"sem":[70,71,72,73],"semk":[70,71,72,73],"semkl":[70,71,72,73],"semkle":[70,71,72,73],"test":[80],"por":[81,90,91],"port":[81,90,91],"porte":[81,90,91],"porter":[81,90,91],"pat":[82],"pate":[82],"patem":[82],"patemk":[82],"ma":[83],"mar":[83],"mark":[83],"marke":[83],"markem":[83],"fo":[84,85,86,94],"fom":[84,85,86],"fomt":[84,85,86],"let":[87],"lete":[87],"leter":[87],"lem":[88],"leme":[88],"tro":[89],"trop":[89],"fet":[92],"e":[93],"ek":[93],"ekt":[93],"fol":[94]},{"por":[2],"port":[2],"porte":[2],"porter":[2],"s":[3,8,19,21,84,87,89],"sa":[3,89],"sat":[3,89],"sato":[3,89],"satof":[3,89],"l":[5,9],"le":[5],"lef":[5],"left":[5],"r":[6,37,73,90],"re":[6,73],"rek":[6],"rekt":[6],"sm":[8],"lk":[9],"t":[10,32],"te":[10,32,56,68,72],"tes":[10,32],"tesa":[10],"tesap":[10],"tesapl":[10],"tesaple":[10],"tesaplet":[10],"e":[17,46,88],"em":[17],"emp":[17],"empo":[17],"empot":[17],"se":[19,21,84],"sel":[19,21],"sele":[19,21],"selek":[19,21],"selekt":[19,21],"selekte":[19,21],"selekteo":[19,21],"selekteom":[19,21],"o":[23,58,61,66],"om":[23,58],"omt":[23,58],"omte":[23,58],"omtet":[23,58],"omtetl":[23,58],"omtetle":[23,58],"omtetlet":[23,58],"p":[31,62],"pa":[31],"pam":[31],"pame":[31],"pamel":[31],"test":[32],"k":[34,65,79,80,81,94],"ka":[34],"kap":[34],"rt":[37,38],"rtl":[37,38],"eo":[46],"eos":[46],"eos1":[46],"eos16":[46],"f":[51,52,91],"fe":[51,52,85,91],"fet":[51,52,91],"kol":[53,79,80,81],"kolo":[53,79,80,81],"kolor":[53,79,80,81],"tef":[56],"tefa":[56],"tefao":[56],"tefaol":[56],"tefaolt":[56],"of":[61],"po":[62],"pop":[62],"popl":[62],"pople":[62],"kr":[65],"kra":[65],"krat":[65],"krate":[65],"kratem":[65],"kratemt":[65],"op":[66],"tem":[68,72],"temo":[68],"tre":[69],"trel":[69],"trelo":[69],"tema":[72],"temam":[72],"temame":[72],"temamek":[72],"res":[73],"rest":[73],"restr":[73],"restre":[73],"restrek":[73],"restrekt":[73],"ko":[79,80,81,94],"ses":[84],"sese":[84],"fek":[85],"fekt":[85],"fa":[86],"fam":[86],"fame":[86],"famel":[86],"famele":[86],"sp":[87],"spa":[87],"spak":[87],"spake":[87],"spakem":[87],"spakemk":[87],"ek":[88],"ekt":[88],"ra":[90],"rat":[90],"rate":[90],"rateo":[90],"rateos":[90],"kom":[94],"komf":[94],"komfe":[94],"komfek":[94]},{"to":[5,6],"m":[20,21],"mo":[20,21],"mot":[20,21],"mote":[20,21],"moteo":[20,21],"moteom":[20,21],"ko":[34],"kos":[34],"kost":[34],"kosto":[34],"kostom":[34],"so":[51],"sof":[51],"r":[52],"rt":[52],"rtl":[52],"se":[53],"ses":[53],"sese":[53],"l":[61],"le":[61],"lem":[61],"leme":[61],"lemes":[61],"k":[69],"kl":[69],"klo":[69],"klom":[69],"klome":[69],"e":[71],"em":[71],"ema":[71],"emak":[71],"emake":[71],"tro":[73],"trop":[73]},{"r":[5],"re":[5],"rek":[5],"rekt":[5],"l":[6,51,53],"le":[6],"lef":[6],"left":[6],"a":[34],"am":[34],"ame":[34],"amem":[34],"amema":[34],"amemat":[34],"amemate":[34],"amemateo":[34],"amemateom":[34],"la":[51,53],"lap":[51,53],"lape":[51,53],"lapel":[51,53],"o":[71],"om":[71],"e":[72],"em":[72],"ema":[72],"emak":[72],"emake":[72],"f":[73],"fa":[73],"fal":[73],"falo":[73]},{"fem":[51],"tro":[71],"trop":[71]},{"ke":[51],"kek":[51],"keke":[51],"keket":[51]},{"o":[51],"om":[51],"oml":[51],"omle":[51]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "1": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "2": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "4": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "5": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "6": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "7": { "id": "components-base-button-button-story-vue", "kind": "story" }, "8": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "9": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "10": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "11": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "12": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "13": { "id": "components-base-carousel-carousel-story-vue", "kind": "story" }, "14": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-0", "kind": "variant" }, "15": { "id": "components-base-carousel-carousel-story-vue:components-base-carousel-carousel-story-vue-1", "kind": "variant" }, "16": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "17": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "18": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "19": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "20": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-3", "kind": "variant" }, "21": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-4", "kind": "variant" }, "22": { "id": "components-base-infinite-content-infinitecontent-story-vue", "kind": "story" }, "23": { "id": "components-base-infinite-content-infinitecontent-story-vue:components-base-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "24": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "25": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "26": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "27": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "28": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "29": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "30": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "31": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "32": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "33": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "34": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "35": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "36": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "37": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "38": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "39": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "40": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "41": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "42": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "43": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "44": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "45": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "46": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "47": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "48": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "49": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "50": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "51": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "52": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "53": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "54": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "55": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "56": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "57": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "58": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "59": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "60": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "61": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "62": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "63": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "64": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "65": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "66": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "67": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "68": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "69": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "70": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "71": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "72": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "73": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "74": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "75": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "76": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "77": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "78": { "id": "tailwind", "kind": "story" }, "79": { "id": "tailwind:background-color", "kind": "variant" }, "80": { "id": "tailwind:text-color", "kind": "variant" }, "81": { "id": "tailwind:border-color", "kind": "variant" }, "82": { "id": "tailwind:padding", "kind": "variant" }, "83": { "id": "tailwind:margin", "kind": "variant" }, "84": { "id": "tailwind:font-size", "kind": "variant" }, "85": { "id": "tailwind:font-weight", "kind": "variant" }, "86": { "id": "tailwind:font-family", "kind": "variant" }, "87": { "id": "tailwind:letter-spacing", "kind": "variant" }, "88": { "id": "tailwind:line-height", "kind": "variant" }, "89": { "id": "tailwind:drop-shadow", "kind": "variant" }, "90": { "id": "tailwind:border-radius", "kind": "variant" }, "91": { "id": "tailwind:border-width", "kind": "variant" }, "92": { "id": "tailwind:width", "kind": "variant" }, "93": { "id": "tailwind:height", "kind": "variant" }, "94": { "id": "tailwind:full-config", "kind": "variant" } } };
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
