const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/default-tdo5iAu_.js","assets/components-DbHI9Hm2.js","assets/vendor-DNJAtGl5.js","assets/error-404-BSa5fl31.js","assets/error-dev-BerS_DgT.js"])))=>i.map(i=>d[i]);
import { bB as useNuxtApp, bC as hasInjectionContext, aY as inject, bD as hasProtocol, bE as isScriptProtocol, bF as withQuery, bG as toRef, bH as createError$1, bI as nuxtDefaultErrorValue, bJ as $fetch$1, b7 as getCurrentInstance, b6 as reactive, bK as parse, bL as defineNuxtPlugin, bM as executeAsync, bh as shallowRef, bN as destr, at as ref, bO as shallowReactive, bP as withoutBase, bQ as useRuntimeConfig, av as computed, aD as defineComponent, bR as h, bS as isReadonly, bT as isEqual, bU as stringifyParsedURL, bV as stringifyQuery, bW as parseQuery, bX as joinURL, bY as LazyIcon, bZ as LazyIconCSS, b_ as createConsola, b$ as devRootDir, _ as __vitePreload, c0 as unhead_1EF0XaBu18, as as _export_sfc, aw as openBlock, ax as createBlock, ba as normalizeProps, bb as guardReactiveProps, R as defineAsyncComponent, aZ as provide, c1 as onErrorCaptured, ay as withCtx, aH as createElementBlock, aC as resolveDynamicComponent, c2 as Suspense, c3 as onServerPrefetch, c4 as componentIslands, c5 as createSSRApp, bx as createApp, c6 as createNuxtApp, c7 as applyPlugins, c8 as vueAppRootContainer, b1 as nextTick } from "./vendor-DNJAtGl5.js";
import { b as baseURL } from "./paths-CLOD-_0I.js";
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (isProcessingMiddleware()) {
    console.warn("[nuxt] Calling `useRoute` within middleware may lead to misleading results. Instead, use the (to, from) arguments passed to the middleware to access the new and old routes.");
  }
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  if (options == null ? void 0 : options.open) {
    const { target = "_blank", windowFeatures = {} } = options.open;
    const features = Object.entries(windowFeatures).filter(([_, value]) => value !== void 0).map(([feature, value]) => `${feature.toLowerCase()}=${value}`).join(", ");
    open(toPath, target, features);
    return Promise.resolve();
  }
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, window.location.href);
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  if (!isExternal && inMiddleware) {
    return to;
  }
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (true) {
      nuxtApp.hooks.callHook("app:error", nuxtError);
    }
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const clearError = async (options = {}) => {
  const nuxtApp = useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await useRouter().replace(options.redirect);
  }
  error.value = nuxtDefaultErrorValue;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
async function _importPayload(payloadURL) {
  const payloadPromise = fetch(payloadURL).then((res) => res.text().then(parsePayload));
  try {
    return await payloadPromise;
  } catch (err) {
    console.warn("[nuxt] Cannot load payload ", payloadURL, err);
  }
  return null;
}
let payloadCache = null;
async function getNuxtClientPayload() {
  var _a;
  if (payloadCache) {
    return payloadCache;
  }
  const el = document.getElementById("__NUXT_DATA__");
  if (!el) {
    return {};
  }
  const inlineData = await parsePayload(el.textContent || "");
  const externalData = el.dataset.src ? await _importPayload(el.dataset.src) : void 0;
  payloadCache = {
    ...inlineData,
    ...externalData,
    ...window.__NUXT__
  };
  if ((_a = payloadCache.config) == null ? void 0 : _a.public) {
    payloadCache.config.public = reactive(payloadCache.config.public);
  }
  return payloadCache;
}
async function parsePayload(payload) {
  return await parse(payload, useNuxtApp()._payloadRevivers);
}
function definePayloadReviver(name, revive) {
  if (getCurrentInstance()) {
    console.warn("[nuxt] [definePayloadReviver] This function must be called in a Nuxt plugin that is `unshift`ed to the beginning of the Nuxt plugins array.");
  }
  {
    useNuxtApp()._payloadRevivers[name] = revive;
  }
}
const revivers = {
  NuxtError: (data) => createError(data),
  EmptyShallowRef: (data) => shallowRef(data === "_" ? void 0 : data === "0n" ? BigInt(0) : destr(data)),
  EmptyRef: (data) => ref(data === "_" ? void 0 : data === "0n" ? BigInt(0) : destr(data)),
  ShallowRef: (data) => shallowRef(data),
  ShallowReactive: (data) => shallowReactive(data),
  Ref: (data) => ref(data),
  Reactive: (data) => reactive(data)
};
{
  revivers.Island = ({ key, params, result }) => {
    const nuxtApp = useNuxtApp();
    if (!nuxtApp.isHydrating) {
      nuxtApp.payload.data[key] = nuxtApp.payload.data[key] || $fetch(`/__nuxt_island/${key}.json`, {
        responseType: "json",
        ...params ? { params } : {}
      }).then((r) => {
        nuxtApp.payload.data[key] = r;
        return r;
      });
    }
    return {
      html: "",
      ...result
    };
  };
}
const revive_payload_client_8GN7n6tPLW = defineNuxtPlugin({
  name: "nuxt:revive-payload:client",
  order: -30,
  async setup(nuxtApp) {
    let __temp, __restore;
    for (const reviver in revivers) {
      definePayloadReviver(reviver, revivers[reviver]);
    }
    Object.assign(nuxtApp.payload, ([__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(getNuxtClientPayload)), __temp = await __temp, __restore(), __temp));
    window.__NUXT__ = nuxtApp.payload;
  }
});
const globalMiddleware = [];
function getRouteFromPath(fullPath) {
  if (typeof fullPath === "object") {
    fullPath = stringifyParsedURL({
      pathname: fullPath.path || "",
      search: stringifyQuery(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = new URL(fullPath.toString(), window.location.href);
  return {
    path: url.pathname,
    fullPath,
    query: parseQuery(url.search),
    hash: url.hash,
    // stub properties for compat with vue-router
    params: {},
    name: void 0,
    matched: [],
    redirectedFrom: void 0,
    meta: {},
    href: fullPath
  };
}
const router_Ac7QMlmNCZ = defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  setup(nuxtApp) {
    const initialURL = withoutBase(window.location.pathname, useRuntimeConfig().app.baseURL) + window.location.search + window.location.hash;
    const routes = [];
    const hooks = {
      "navigate:before": [],
      "resolve:before": [],
      "navigate:after": [],
      "error": []
    };
    const registerHook = (hook, guard) => {
      hooks[hook].push(guard);
      return () => hooks[hook].splice(hooks[hook].indexOf(guard), 1);
    };
    const baseURL2 = useRuntimeConfig().app.baseURL;
    const route = reactive(getRouteFromPath(initialURL));
    async function handleNavigation(url, replace) {
      try {
        const to = getRouteFromPath(url);
        for (const middleware of hooks["navigate:before"]) {
          const result = await middleware(to, route);
          if (result === false || result instanceof Error) {
            return;
          }
          if (typeof result === "string" && result.length) {
            return handleNavigation(result, true);
          }
        }
        for (const handler of hooks["resolve:before"]) {
          await handler(to, route);
        }
        Object.assign(route, to);
        if (true) {
          window.history[replace ? "replaceState" : "pushState"]({}, "", joinURL(baseURL2, to.fullPath));
          if (!nuxtApp.isHydrating) {
            await nuxtApp.runWithContext(clearError);
          }
        }
        for (const middleware of hooks["navigate:after"]) {
          await middleware(to, route);
        }
      } catch (err) {
        if (!hooks.error.length) {
          console.warn("No error handlers registered to handle middleware errors. You can register an error handler with `router.onError()`", err);
        }
        for (const handler of hooks.error) {
          await handler(err);
        }
      }
    }
    const currentRoute = computed(() => route);
    const router = {
      currentRoute,
      isReady: () => Promise.resolve(),
      // These options provide a similar API to vue-router but have no effect
      options: {},
      install: () => Promise.resolve(),
      // Navigation
      push: (url) => handleNavigation(url, false),
      replace: (url) => handleNavigation(url, true),
      back: () => window.history.go(-1),
      go: (delta) => window.history.go(delta),
      forward: () => window.history.go(1),
      // Guards
      beforeResolve: (guard) => registerHook("resolve:before", guard),
      beforeEach: (guard) => registerHook("navigate:before", guard),
      afterEach: (guard) => registerHook("navigate:after", guard),
      onError: (handler) => registerHook("error", handler),
      // Routes
      resolve: getRouteFromPath,
      addRoute: (parentName, route2) => {
        routes.push(route2);
      },
      getRoutes: () => routes,
      hasRoute: (name) => routes.some((route2) => route2.name === name),
      removeRoute: (name) => {
        const index = routes.findIndex((route2) => route2.name === name);
        if (index !== -1) {
          routes.splice(index, 1);
        }
      }
    };
    nuxtApp.vueApp.component("RouterLink", defineComponent({
      functional: true,
      props: {
        to: {
          type: String,
          required: true
        },
        custom: Boolean,
        replace: Boolean,
        // Not implemented
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: String
      },
      setup: (props, { slots }) => {
        const navigate = () => handleNavigation(props.to, props.replace);
        return () => {
          var _a;
          const route2 = router.resolve(props.to);
          return props.custom ? (_a = slots.default) == null ? void 0 : _a.call(slots, { href: props.to, navigate, route: route2 }) : h("a", { href: props.to, onClick: (e) => {
            e.preventDefault();
            return navigate();
          } }, slots);
        };
      }
    }));
    {
      window.addEventListener("popstate", (event) => {
        const location2 = event.target.location;
        router.replace(location2.href.replace(location2.origin, ""));
      });
    }
    nuxtApp._route = route;
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    const initialLayout = nuxtApp.payload.state._layout;
    nuxtApp.hooks.hookOnce("app:created", async () => {
      router.beforeEach(async (to, from) => {
        to.meta = reactive(to.meta || {});
        if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
          to.meta.layout = initialLayout;
        }
        nuxtApp._processingMiddleware = true;
        {
          const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
          for (const middleware of middlewareEntries) {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (result === true) {
              continue;
            }
            if (result || result === false) {
              return result;
            }
          }
        }
      });
      router.afterEach(() => {
        delete nuxtApp._processingMiddleware;
      });
      await router.replace(initialURL);
      if (!isEqual(route.fullPath, initialURL)) {
        await nuxtApp.runWithContext(() => navigateTo(route.fullPath));
      }
    });
    return {
      provide: {
        route,
        router
      }
    };
  }
});
const requestIdleCallback = globalThis.requestIdleCallback || ((cb) => {
  const start = Date.now();
  const idleDeadline = {
    didTimeout: false,
    timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
  };
  return setTimeout(() => {
    cb(idleDeadline);
  }, 1);
});
const onNuxtReady = (callback) => {
  const nuxtApp = useNuxtApp();
  if (nuxtApp.isHydrating) {
    nuxtApp.hooks.hookOnce("app:suspense:resolve", () => {
      requestIdleCallback(() => callback());
    });
  } else {
    requestIdleCallback(() => callback());
  }
};
const navigation_repaint_client_LO3Mq1phYw = defineNuxtPlugin(() => {
  const router = useRouter();
  onNuxtReady(() => {
    router.beforeResolve(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 100);
        requestAnimationFrame(() => {
          setTimeout(resolve, 0);
        });
      });
    });
  });
});
function reloadNuxtApp(options = {}) {
  const path = options.path || window.location.pathname;
  let handledPath = {};
  try {
    handledPath = destr(sessionStorage.getItem("nuxt:reload") || "{}");
  } catch {
  }
  if (options.force || (handledPath == null ? void 0 : handledPath.path) !== path || (handledPath == null ? void 0 : handledPath.expires) < Date.now()) {
    try {
      sessionStorage.setItem("nuxt:reload", JSON.stringify({ path, expires: Date.now() + (options.ttl ?? 1e4) }));
    } catch {
    }
    if (options.persistState) {
      try {
        sessionStorage.setItem("nuxt:reload:state", JSON.stringify({ state: useNuxtApp().payload.state }));
      } catch {
      }
    }
    if (window.location.pathname !== path) {
      window.location.href = path;
    } else {
      window.location.reload();
    }
  }
}
const chunk_reload_client_hMjXZS1LH2 = defineNuxtPlugin({
  name: "nuxt:chunk-reload",
  setup(nuxtApp) {
    const router = useRouter();
    const config = useRuntimeConfig();
    const chunkErrors = /* @__PURE__ */ new Set();
    router.beforeEach(() => {
      chunkErrors.clear();
    });
    nuxtApp.hook("app:chunkError", ({ error }) => {
      chunkErrors.add(error);
    });
    function reloadAppAtPath(to) {
      const isHash = "href" in to && to.href[0] === "#";
      const path = isHash ? config.app.baseURL + to.href : joinURL(config.app.baseURL, to.fullPath);
      reloadNuxtApp({ path, persistState: true });
    }
    nuxtApp.hook("app:manifest:update", () => {
      router.beforeResolve(reloadAppAtPath);
    });
    router.onError((error, to) => {
      if (chunkErrors.has(error)) {
        reloadAppAtPath(to);
      }
    });
  }
});
const lazyGlobalComponents = [
  ["Icon", LazyIcon],
  ["IconCSS", LazyIconCSS]
];
const componentsplugin_KR1HBZs4kY = defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const devRevivers = {
  VNode: (data) => h(data.type, data.props),
  URL: (data) => new URL(data)
};
const dev_server_logs_FSmlGZOAkf = defineNuxtPlugin(async (nuxtApp) => {
  let __temp, __restore;
  {
    const logger = createConsola({
      formatOptions: {
        colors: true,
        date: true
      }
    });
    nuxtApp.hook("dev:ssr-logs", (logs) => {
      for (const log of logs) {
        logger.log(normalizeServerLog({ ...log }));
      }
    });
  }
  if (typeof window !== "undefined") {
    const nuxtLogsElement = document.querySelector(`[data-nuxt-logs="${nuxtApp._id}"]`);
    const content = nuxtLogsElement == null ? void 0 : nuxtLogsElement.textContent;
    const logs = content ? parse(content, { ...devRevivers, ...nuxtApp._payloadRevivers }) : [];
    [__temp, __restore] = executeAsync(() => nuxtApp.hooks.callHook("dev:ssr-logs", logs)), await __temp, __restore();
  }
});
function normalizeFilenames(stack) {
  if (!stack) {
    return "";
  }
  let message = "";
  for (const item of stack) {
    const source = item.source.replace(`${devRootDir}/`, "");
    if (item.function) {
      message += `  at ${item.function} (${source})
`;
    } else {
      message += `  at ${source}
`;
    }
  }
  return message;
}
function normalizeServerLog(log) {
  log.additional = normalizeFilenames(log.stack);
  log.tag = "ssr";
  delete log.stack;
  return log;
}
const layouts = {
  default: () => __vitePreload(() => import("./default-tdo5iAu_.js"), true ? __vite__mapDeps([0,1,2]) : void 0)
};
const check_if_layout_used_U8ZBAtDNOp = defineNuxtPlugin({
  name: "nuxt:checkIfLayoutUsed",
  setup(nuxtApp) {
    const error = useError();
    function checkIfLayoutUsed() {
      if (!error.value && !nuxtApp._isNuxtLayoutUsed && Object.keys(layouts).length > 0) {
        console.warn("[nuxt] Your project has layouts but the `<NuxtLayout />` component has not been used.");
      }
    }
    {
      onNuxtReady(checkIfLayoutUsed);
    }
  },
  env: {
    islands: false
  }
});
const clickOutside_ZB3Eg0wOVk = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("clickOutside", {
    mounted(el, binding) {
      let targetEl = el;
      if (binding.arg === "parent") targetEl = el.parentElement;
      targetEl.__ClickOutsideHandler__ = (event) => {
        if (!(targetEl === event.target || targetEl.contains(event.target))) {
          binding.value(event);
        }
      };
      requestAnimationFrame(() => {
        document.body.addEventListener("click", targetEl.__ClickOutsideHandler__);
      });
    },
    beforeUnmount(el, binding) {
      let targetEl = el;
      if (binding.arg === "parent") targetEl = el.parentElement;
      document.body.removeEventListener(
        "click",
        targetEl.__ClickOutsideHandler__
      );
    }
  });
});
function findFocusable(element, programmatic = false) {
  if (!element) {
    return null;
  }
  if (programmatic) {
    return element.querySelectorAll(`*[tabindex="-1"]`);
  }
  return element.querySelectorAll(`a[href]:not([tabindex="-1"]),
                                   area[href],
                                   input:not([disabled]),
                                   select:not([disabled]),
                                   textarea:not([disabled]),
                                   button:not([disabled]),
                                   iframe,
                                   object,
                                   embed,
                                   *[tabindex]:not([tabindex="-1"]),
                                   *[contenteditable]`);
}
let initialFocusedElement;
let onKeyDown;
function beforeMount(el, { value = true }) {
  if (value) {
    initialFocusedElement = document.activeElement;
    let focusable = findFocusable(el);
    let focusableProg = findFocusable(el, true);
    if (!!focusable && focusable.length > 0) {
      onKeyDown = (event) => {
        focusable = findFocusable(el);
        focusableProg = findFocusable(el, true);
        if (!focusable) return;
        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];
        if (event.target === firstFocusable && event.shiftKey && event.key === "Tab") {
          event.preventDefault();
          lastFocusable.focus();
        } else if ((event.target === lastFocusable || Array.from(focusableProg || []).includes(
          event.target
        )) && !event.shiftKey && event.key === "Tab") {
          event.preventDefault();
          firstFocusable.focus();
        }
      };
      el.addEventListener("keydown", onKeyDown);
    }
  }
}
function mounted(el) {
  el.focus();
}
function beforeUnmount(el) {
  initialFocusedElement.focus();
  el.removeEventListener("keydown", onKeyDown);
}
const trapFocus_dw8OYE3K7w = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("trapFocus", {
    beforeMount,
    mounted,
    beforeUnmount
  });
});
const plugins = [
  revive_payload_client_8GN7n6tPLW,
  unhead_1EF0XaBu18,
  router_Ac7QMlmNCZ,
  navigation_repaint_client_LO3Mq1phYw,
  chunk_reload_client_hMjXZS1LH2,
  componentsplugin_KR1HBZs4kY,
  dev_server_logs_FSmlGZOAkf,
  check_if_layout_used_U8ZBAtDNOp,
  clickOutside_ZB3Eg0wOVk,
  trapFocus_dw8OYE3K7w
];
function render() {
  return null;
}
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  props: {
    error: Object
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const _error = props.error;
    const stacktrace = _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = !is404 ? _error.description || `<pre>${stacktrace}</pre>` : void 0;
    const _Error404 = defineAsyncComponent(() => __vitePreload(() => import("./error-404-BSa5fl31.js"), true ? __vite__mapDeps([3,1,2]) : void 0));
    const _Error = defineAsyncComponent(() => __vitePreload(() => import("./error-dev-BerS_DgT.js"), true ? __vite__mapDeps([4,2]) : void 0));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    const __returned__ = { props, _error, stacktrace, statusCode, is404, statusMessage, description, stack, _Error404, _Error, ErrorTemplate, defineAsyncComponent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(
    $setup["ErrorTemplate"],
    normalizeProps(guardReactiveProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack })),
    null,
    16
    /* FULL_PROPS */
  );
}
const ErrorComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/projects/my-components/node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@20.5.1_eslint@8.57.1_ioredis@5.4.1_magicast@0.3_ezkkvgicvb7mq2g4d64qhvt76m/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
const _sfc_main = {
  __name: "nuxt-root",
  setup(__props, { expose: __expose }) {
    __expose();
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    const onResolve = nuxtApp.deferHydration();
    if (nuxtApp.isHydrating) {
      const removeErrorHook = nuxtApp.hooks.hookOnce("app:error", onResolve);
      useRouter().beforeEach(removeErrorHook);
    }
    const url = window.location.pathname;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    const results = nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    if (results && results.some((i) => i && "then" in i)) {
      console.error("[nuxt] Error in `vue:setup`. Callbacks must be synchronous.");
    }
    const error = useError();
    const abortRender = false;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      if (isNuxtError(err) && (err.fatal || err.unhandled)) {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = false;
    const __returned__ = { IslandRenderer, nuxtApp, onResolve, url, SingleRenderer, results, error, abortRender, islandContext, defineAsyncComponent, onErrorCaptured, onServerPrefetch, provide, get useNuxtApp() {
      return useNuxtApp;
    }, get isNuxtError() {
      return isNuxtError;
    }, get showError() {
      return showError;
    }, get useError() {
      return useError;
    }, get useRoute() {
      return useRoute;
    }, get useRouter() {
      return useRouter;
    }, get PageRouteSymbol() {
      return PageRouteSymbol;
    }, get AppComponent() {
      return render;
    }, get ErrorComponent() {
      return ErrorComponent;
    }, get componentIslands() {
      return componentIslands;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Suspense, { onResolve: $setup.onResolve }, {
    default: withCtx(() => [
      $setup.abortRender ? (openBlock(), createElementBlock("div", _hoisted_1)) : $setup.error ? (openBlock(), createBlock($setup["ErrorComponent"], {
        key: 1,
        error: $setup.error
      }, null, 8, ["error"])) : $setup.islandContext ? (openBlock(), createBlock($setup["IslandRenderer"], {
        key: 2,
        context: $setup.islandContext
      }, null, 8, ["context"])) : $setup.SingleRenderer ? (openBlock(), createBlock(resolveDynamicComponent($setup.SingleRenderer), { key: 3 })) : (openBlock(), createBlock($setup["AppComponent"], { key: 4 }))
    ]),
    _: 1
    /* STABLE */
  }, 8, ["onResolve"]);
}
const RootComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@20.5.1_eslint@8.57.1_ioredis@5.4.1_magicast@0.3_ezkkvgicvb7mq2g4d64qhvt76m/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
let entry;
{
  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept();
  }
  let vueAppPromise;
  entry = async function initApp() {
    var _a, _b;
    if (vueAppPromise) {
      return vueAppPromise;
    }
    const isSSR = Boolean(
      ((_a = window.__NUXT__) == null ? void 0 : _a.serverRendered) ?? ((_b = document.getElementById("__NUXT_DATA__")) == null ? void 0 : _b.dataset.ssr) === "true"
    );
    const vueApp = isSSR ? createSSRApp(RootComponent) : createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp });
    async function handleVueError(error) {
      await nuxt.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    vueApp.config.errorHandler = handleVueError;
    try {
      await applyPlugins(nuxt, plugins);
    } catch (err) {
      handleVueError(err);
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount(vueAppRootContainer);
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await nextTick();
    } catch (err) {
      handleVueError(err);
    }
    if (vueApp.config.errorHandler === handleVueError) {
      vueApp.config.errorHandler = void 0;
    }
    return vueApp;
  };
  vueAppPromise = entry().catch((error) => {
    console.error("Error while mounting app:", error);
    throw error;
  });
}
const entry$1 = (ssrContext) => entry(ssrContext);
export {
  entry$1 as default
};
