import { X as defineAsyncComponent, Y as Comp10, Z as useDark, _ as useToggle, f as watch, $ as markRaw, R as reactive, d as defineComponent, k as ref, a0 as watchEffect, o as openBlock, c as createBlock, m as mergeProps, a1 as resolveDynamicComponent, q as createCommentVNode } from "./vendor.aa0959a2.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/my-components/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./GridTrack.story.807e724f.js"), true ? ["assets/GridTrack.story.807e724f.js","assets/vendor.aa0959a2.js","assets/plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./Carousel.story.a660fcfd.js"), true ? ["assets/Carousel.story.a660fcfd.js","assets/vendor.aa0959a2.js","assets/plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./InfiniteContent.story.f2675a4e.js"), true ? ["assets/InfiniteContent.story.f2675a4e.js","assets/vendor.aa0959a2.js","assets/plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./Expandable.story.1d7098a8.js"), true ? ["assets/Expandable.story.1d7098a8.js","assets/vendor.aa0959a2.js","assets/plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./Ribbon.story.fa3c4527.js"), true ? ["assets/Ribbon.story.fa3c4527.js","assets/vendor.aa0959a2.js","assets/plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp5 = defineAsyncComponent(() => __vitePreload(() => import("./Steps.story.6199eb96.js"), true ? ["assets/Steps.story.6199eb96.js","assets/vendor.aa0959a2.js","assets/plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp6 = defineAsyncComponent(() => __vitePreload(() => import("./Switch.story.cdac5537.js"), true ? ["assets/Switch.story.cdac5537.js","assets/vendor.aa0959a2.js","assets/plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp7 = defineAsyncComponent(() => __vitePreload(() => import("./TweetBox.story.4a8b20f9.js"), true ? ["assets/TweetBox.story.4a8b20f9.js","assets/vendor.aa0959a2.js","assets/plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp8 = defineAsyncComponent(() => __vitePreload(() => import("./GlowingBackground.story.3597bfaf.js"), true ? ["assets/GlowingBackground.story.3597bfaf.js","assets/vendor.aa0959a2.js","assets/plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp9 = defineAsyncComponent(() => __vitePreload(() => import("./Card.story.e092984c.js"), true ? ["assets/Card.story.e092984c.js","assets/vendor.aa0959a2.js","assets/plugin-vue_export-helper.cdc0426e.js"] : void 0));
let files = [
  { "id": "components-tailwind-gridtrack-story-vue", "path": ["Grid Track"], "filePath": "components/tailwind/GridTrack.story.vue", "story": { "id": "components-tailwind-gridtrack-story-vue", "title": "Grid Track", "group": null, "layout": { "type": "grid", "width": "100%" }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "components-tailwind-gridtrack-story-vue-0", "title": "Left to right", "icon": null, "iconColor": null }, { "id": "components-tailwind-gridtrack-story-vue-1", "title": "Right to left", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./resolved__virtual_story-source_components-tailwind-gridtrack-story-vue.53f99779.js"), true ? [] : void 0) },
  { "id": "components-base-carousel-carousel-story-vue", "path": ["Carousel"], "filePath": "components/base/carousel/Carousel.story.vue", "story": { "id": "components-base-carousel-carousel-story-vue", "title": "Carousel", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "components-base-carousel-carousel-story-vue-0", "title": "common", "icon": null, "iconColor": null }, { "id": "components-base-carousel-carousel-story-vue-1", "title": "list", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./resolved__virtual_story-source_components-base-carousel-carousel-story-vue.125a026f.js"), true ? [] : void 0) },
  { "id": "components-base-infinite-content-infinitecontent-story-vue", "path": ["Infinite Content"], "filePath": "components/base/infinite-content/InfiniteContent.story.vue", "story": { "id": "components-base-infinite-content-infinitecontent-story-vue", "title": "Infinite Content", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "components-base-infinite-content-infinitecontent-story-vue-0", "title": "untitled", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./resolved__virtual_story-source_components-base-infinite-content-infinitecontent-story-vue.2725cd2f.js"), true ? [] : void 0) },
  { "id": "components-custom-expandable-expandable-story-vue", "path": ["Expandable"], "filePath": "components/custom/expandable/Expandable.story.vue", "story": { "id": "components-custom-expandable-expandable-story-vue", "title": "Expandable", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "components-custom-expandable-expandable-story-vue-0", "title": "Vertical", "icon": null, "iconColor": null }, { "id": "components-custom-expandable-expandable-story-vue-1", "title": "Horizontal", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./resolved__virtual_story-source_components-custom-expandable-expandable-story-vue.ba5604b1.js"), true ? [] : void 0) },
  { "id": "components-custom-ribbon-ribbon-story-vue", "path": ["Ribbon"], "filePath": "components/custom/ribbon/Ribbon.story.vue", "story": { "id": "components-custom-ribbon-ribbon-story-vue", "title": "Ribbon", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./resolved__virtual_story-source_components-custom-ribbon-ribbon-story-vue.f28502cf.js"), true ? [] : void 0) },
  { "id": "components-custom-steps-steps-story-vue", "path": ["Steps"], "filePath": "components/custom/steps/Steps.story.vue", "story": { "id": "components-custom-steps-steps-story-vue", "title": "Steps", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 5, component: Comp5, source: () => __vitePreload(() => import("./resolved__virtual_story-source_components-custom-steps-steps-story-vue.7edd060a.js"), true ? [] : void 0) },
  { "id": "components-custom-switch-switch-story-vue", "path": ["Switch"], "filePath": "components/custom/switch/Switch.story.vue", "story": { "id": "components-custom-switch-switch-story-vue", "title": "Switch", "group": null, "layout": { "type": "grid", "width": "350px" }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "components-custom-switch-switch-story-vue-0", "title": "normal", "icon": null, "iconColor": null }, { "id": "components-custom-switch-switch-story-vue-1", "title": "custom width, show label when checked only", "icon": null, "iconColor": null }, { "id": "components-custom-switch-switch-story-vue-2", "title": "label with rtl", "icon": null, "iconColor": null }, { "id": "components-custom-switch-switch-story-vue-3", "title": "custom color, size, label", "icon": null, "iconColor": null }, { "id": "components-custom-switch-switch-story-vue-4", "title": "disabled", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 6, component: Comp6, source: () => __vitePreload(() => import("./resolved__virtual_story-source_components-custom-switch-switch-story-vue.5f3daa0b.js"), true ? [] : void 0) },
  { "id": "components-custom-tweetbox-tweetbox-story-vue", "path": ["TweetBox"], "filePath": "components/custom/tweetbox/TweetBox.story.vue", "story": { "id": "components-custom-tweetbox-tweetbox-story-vue", "title": "TweetBox", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 7, component: Comp7, source: () => __vitePreload(() => import("./resolved__virtual_story-source_components-custom-tweetbox-tweetbox-story-vue.eb2a3dd7.js"), true ? [] : void 0) },
  { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "path": ["Glowing Background"], "filePath": "components/tailwind/backgrounds/GlowingBackground.story.vue", "story": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "title": "Glowing Background", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "components-tailwind-backgrounds-glowingbackground-story-vue-0", "title": "untitled", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 8, component: Comp8, source: () => __vitePreload(() => import("./resolved__virtual_story-source_components-tailwind-backgrounds-glowingbackground-story-vue.4d7802dd.js"), true ? [] : void 0) },
  { "id": "components-tailwind-cards-card-story-vue", "path": ["Cards"], "filePath": "components/tailwind/cards/Card.story.vue", "story": { "id": "components-tailwind-cards-card-story-vue", "title": "Cards", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "components-tailwind-cards-card-story-vue-0", "title": "3d card", "icon": null, "iconColor": null }, { "id": "components-tailwind-cards-card-story-vue-1", "title": "Number of lines", "icon": null, "iconColor": null }, { "id": "components-tailwind-cards-card-story-vue-2", "title": "Hover bubble", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 9, component: Comp9, source: () => __vitePreload(() => import("./resolved__virtual_story-source_components-tailwind-cards-card-story-vue.0962144b.js"), true ? [] : void 0) },
  { "id": "tailwind", "path": ["Tailwind"], "filePath": "D:/projects/my-components/node_modules/.histoire/plugins/builtin_tailwind-tokens/Tailwind.story.js", "story": { "id": "tailwind", "title": "Tailwind", "group": "design-system", "layout": { "type": "single", "iframe": false }, "icon": "mdi:tailwind", "docsOnly": false, "variants": [{ "id": "background-color", "title": "Background Color", "icon": "carbon:color-palette" }, { "id": "text-color", "title": "Text Color", "icon": "carbon:text-color" }, { "id": "border-color", "title": "Border Color", "icon": "carbon:color-palette" }, { "id": "padding", "title": "Padding", "icon": "carbon:area" }, { "id": "margin", "title": "Margin", "icon": "carbon:area" }, { "id": "font-size", "title": "Font Size", "icon": "carbon:text-font" }, { "id": "font-weight", "title": "Font Weight", "icon": "carbon:text-font" }, { "id": "font-family", "title": "Font Family", "icon": "carbon:text-font" }, { "id": "letter-spacing", "title": "Letter Spacing", "icon": "carbon:text-font" }, { "id": "line-height", "title": "Line Height", "icon": "carbon:text-font" }, { "id": "drop-shadow", "title": "Drop Shadow", "icon": "carbon:shape-except" }, { "id": "border-radius", "title": "Border Radius", "icon": "carbon:condition-wait-point" }, { "id": "border-width", "title": "Border Width", "icon": "carbon:checkbox" }, { "id": "width", "title": "Width", "icon": "carbon:pan-horizontal" }, { "id": "height", "title": "Height", "icon": "carbon:pan-vertical" }, { "id": "full-config", "title": "Full Config", "icon": "carbon:code" }] }, "supportPluginId": "vanilla", "index": 10, component: Comp10, source: () => __vitePreload(() => import("./resolved__virtual_story-source_tailwind.940c8274.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Tailwind", "index": 10 }] }, { "group": true, "title": "Base", "children": [{ "title": "Carousel", "index": 1 }, { "title": "Infinite Content", "index": 2 }] }, { "group": true, "title": "Custom", "children": [{ "title": "Expandable", "index": 3 }, { "title": "Ribbon", "index": 4 }, { "title": "Steps", "index": 5 }, { "title": "Switch", "index": 6 }, { "title": "TweetBox", "index": 7 }] }, { "group": true, "title": "Tailwind", "children": [{ "title": "Cards", "index": 9 }, { "title": "Glowing Background", "index": 8 }, { "title": "Grid Track", "index": 0 }] }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "D:/projects/my-components/node_modules/.pnpm/histoire@0.11.9/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" } }, { "name": "@histoire/plugin-nuxt" }], "outDir": "D:/projects/my-components/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "design-system", "title": "Design System" }, { "title": "Base" }, { "title": "Custom" }, { "title": "Tailwind" }] }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "history", "vite": { "define": { "true": true, "false": false, "true": true, "false": false }, "resolve": { "alias": { "~~": "D:/projects/my-components", "@@": "D:/projects/my-components", "~": "D:/projects/my-components", "@": "D:/projects/my-components", "assets": "D:/projects/my-components/assets", "public": "D:/projects/my-components/public", "#app": "D:/projects/my-components/node_modules/.pnpm/nuxt@3.0.0_ha6vam6werchizxrnqvarmz2zu/node_modules/nuxt/dist/app", "vue-demi": "D:/projects/my-components/node_modules/.pnpm/nuxt@3.0.0_ha6vam6werchizxrnqvarmz2zu/node_modules/nuxt/dist/app/compat/vue-demi", "@vue/composition-api": "D:/projects/my-components/node_modules/.pnpm/nuxt@3.0.0_ha6vam6werchizxrnqvarmz2zu/node_modules/nuxt/dist/app/compat/capi", "#head": "D:/projects/my-components/node_modules/.pnpm/nuxt@3.0.0_ha6vam6werchizxrnqvarmz2zu/node_modules/nuxt/dist/head/runtime", "#imports": "D:/projects/my-components/.nuxt/imports", "#build/plugins": "D:/projects/my-components/.nuxt/plugins/client", "#build": "D:/projects/my-components/.nuxt", "web-streams-polyfill/ponyfill/es2018": "unenv/runtime/mock/empty", "abort-controller": "unenv/runtime/mock/empty", "#internal/nitro": "D:/projects/my-components/.nuxt/nitro.client.mjs", "#components": "D:/projects/my-components/.nuxt/components.client.mjs" }, "extensions": [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"], "dedupe": ["vue"] }, "plugins": [{ "name": "nuxt:composable-keys", "enforce": "post" }, { "name": "replace" }, { "name": "virtual" }, { "name": "unctx:transfrom", "enforce": "post" }, { "name": "nuxt:tailwindcss" }, { "name": "nuxt:pages-macros-transform", "enforce": "post", "vite": { "handleHotUpdate": { "order": "pre" } }, "handleHotUpdate": { "order": "pre" } }, { "name": "nuxt:imports-transform", "enforce": "post" }, { "name": "vite:vue" }, { "name": "vite:vue-jsx" }, { "name": "nuxt:components-loader", "enforce": "post" }], "css": { "postcss": { "plugins": [{ "postcssPlugin": "postcss-import" }, { "postcssPlugin": "postcss-url" }, { "postcssPlugin": "tailwindcss/nesting" }, { "postcssPlugin": "postcss-custom-properties" }, { "postcssPlugin": "tailwindcss", "plugins": [null] }, { "postcssPlugin": "autoprefixer", "options": {} }] } }, "publicDir": "D:/projects/my-components/public", "optimizeDeps": { "include": ["vue", "vue-router"], "exclude": ["vue-demi", "@vueuse/core", "@vueuse/shared", "@vueuse/components", "@vueuse/motion", "@vueuse/firebase", "@vueuse/rxjs", "@vueuse/sound", "@vueuse/math"], "entries": ["D:/projects/my-components/node_modules/.pnpm/nuxt@3.0.0_ha6vam6werchizxrnqvarmz2zu/node_modules/nuxt/dist/app/entry.mjs"] }, "vue": { "reactivityTransform": false, "isProduction": false, "template": { "compilerOptions": {} } }, "base": "/my-components/", "server": { "port": 4e3 }, "mode": "histoire" }, "viteIgnorePlugins": [], "setupCode": ["import 'D:/projects/my-components/assets/css/tailwind.css'"] };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
const isDark = useDark({ valueDark: "htw-dark" });
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        Object.assign(result.story, {
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        });
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor.aa0959a2.js").then((n) => n.b3), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor.aa0959a2.js").then((n) => n.b4), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  toggleDark as t
};