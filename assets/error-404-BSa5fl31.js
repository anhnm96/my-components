import { N as NuxtLink } from "./components-DbHI9Hm2.js";
import { as as _export_sfc, c9 as useHead, aw as openBlock, aH as createElementBlock, aG as createBaseVNode, aL as toDisplayString, aF as createVNode, ay as withCtx, aM as createTextVNode } from "./vendor-DNJAtGl5.js";
const _sfc_main = {
  __name: "error-404",
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 404
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [
        {
          children: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();`
        }
      ],
      style: [
        {
          children: `*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }`
        }
      ]
    });
    const __returned__ = { props, get useHead() {
      return useHead;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { class: "antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black" };
const _hoisted_2 = { class: "max-w-520px text-center z-20" };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = { class: "flex items-center justify-center w-full" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtLink = NuxtLink;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _cache[0] || (_cache[0] = createBaseVNode(
      "div",
      { class: "fixed left-0 right-0 spotlight z-10" },
      null,
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("h1", {
        class: "font-medium mb-8 sm:text-10xl text-8xl",
        textContent: toDisplayString($props.statusCode)
      }, null, 8, _hoisted_3),
      createBaseVNode("p", {
        class: "font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl",
        textContent: toDisplayString($props.description)
      }, null, 8, _hoisted_4),
      createBaseVNode("div", _hoisted_5, [
        createVNode(_component_NuxtLink, {
          to: "/",
          class: "cursor-pointer gradient-border px-4 py-2 sm:px-6 sm:py-3 sm:text-xl text-md"
        }, {
          default: withCtx(() => [
            createTextVNode(
              toDisplayString($props.backHome),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const error404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6c0a3551"], ["__file", "D:/projects/my-components/node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@20.5.1_eslint@8.57.1_ioredis@5.4.1_magicast@0.3_ezkkvgicvb7mq2g4d64qhvt76m/node_modules/nuxt/dist/app/components/error-404.vue"]]);
export {
  error404 as default
};
