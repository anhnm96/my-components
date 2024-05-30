const __vite__fileDeps=["assets/default-CipBu_Ll.js","assets/vendor-BdBYoA5y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import { bx as useNuxtApp, by as hasInjectionContext, aZ as inject, bz as withQuery, bA as hasProtocol, bB as toRef, bC as createError$1, bD as $fetch$1, b8 as getCurrentInstance, bE as parse, bF as defineNuxtPlugin, bG as executeAsync, bH as shallowRef, bI as destr, at as ref, bJ as shallowReactive, b7 as reactive, bK as withoutBase, bL as useRuntimeConfig, av as computed, aD as defineComponent, bM as h, bN as isReadonly, bO as isEqual, bP as stringifyParsedURL, bQ as stringifyQuery, bR as parseURL, bS as parseQuery, bT as joinURL, bU as LazyIcon, bV as LazyIconCSS, bW as createConsola, bX as consola, _ as __vitePreload, bY as unhead_eyEy7315Kx, as as _export_sfc, aw as openBlock, ax as createBlock, bb as normalizeProps, bc as guardReactiveProps, R as defineAsyncComponent, a_ as provide, bZ as onErrorCaptured, ay as withCtx, aC as resolveDynamicComponent, b_ as Suspense, b$ as onServerPrefetch, c0 as createSSRApp, bs as createApp, c1 as createNuxtApp, c2 as applyPlugins, b2 as nextTick } from "./vendor-BdBYoA5y.js";
import { b as baseURL } from "./paths-0PYN6WaE.js";
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
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  const isExternal = hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
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
    {
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
  return router.push(to);
};
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
  error.value = null;
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
const componentIslands = true;
const devRootDir = "D:/projects/my-components";
const vueAppRootContainer = "#nuxt-test";
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
      state: {},
      head: {
        link: [],
        style: []
      },
      ...result
    };
  };
}
const revive_payload_client_GiN6zK8Twp = defineNuxtPlugin({
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
  const url = parseURL(fullPath.toString());
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
const router_q2ENMhHUzQ = defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  setup(nuxtApp) {
    const initialURL = withoutBase(window.location.pathname, useRuntimeConfig().app.baseURL) + window.location.search + window.location.hash;
    const routes = [];
    const hooks = {
      "navigate:before": [],
      "resolve:before": [],
      "navigate:after": [],
      error: []
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
const chunk_reload_client_Gmch4rU1RO = defineNuxtPlugin({
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
const dev_server_logs_aDnOHAIJ59 = defineNuxtPlugin((nuxtApp) => {
  {
    const logger = createConsola({
      formatOptions: {
        colors: true,
        date: true
      }
    });
    const hydrationLogs = /* @__PURE__ */ new Set();
    consola.wrapConsole();
    consola.addReporter({
      log(logObj) {
        try {
          hydrationLogs.add(JSON.stringify(logObj.args));
        } catch {
        }
      }
    });
    nuxtApp.hook("dev:ssr-logs", (logs) => {
      for (const log of logs) {
        try {
          if (!hydrationLogs.size || !hydrationLogs.has(JSON.stringify(log.args))) {
            logger.log(normalizeServerLog({ ...log }));
          }
        } catch {
          logger.log(normalizeServerLog({ ...log }));
        }
      }
    });
    nuxtApp.hooks.hook("app:suspense:resolve", () => consola.restoreAll());
    nuxtApp.hooks.hookOnce("dev:ssr-logs", () => hydrationLogs.clear());
  }
  nuxtApp.hooks.hook("app:suspense:resolve", async () => {
    var _a;
    if (typeof window !== "undefined") {
      const content = (_a = document.getElementById("__NUXT_LOGS__")) == null ? void 0 : _a.textContent;
      const logs = content ? parse(content, nuxtApp._payloadRevivers) : [];
      await nuxtApp.hooks.callHook("dev:ssr-logs", logs);
    }
  });
});
function normalizeFilenames(stack) {
  stack = (stack == null ? void 0 : stack.split("\n")[0]) || "";
  stack = stack.replace(`${devRootDir}/`, "");
  stack = stack.replace(/:\d+:\d+\)?$/, "");
  return stack;
}
function normalizeServerLog(log) {
  log.additional = normalizeFilenames(log.stack);
  log.tag = "ssr";
  delete log.stack;
  return log;
}
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
      requestIdleCallback(callback);
    });
  } else {
    requestIdleCallback(callback);
  }
};
const layouts = {
  default: () => __vitePreload(() => import("./default-CipBu_Ll.js"), true ? __vite__mapDeps([0,1]) : void 0).then((m) => m.default || m)
};
const check_if_layout_used_aUlzpn6ync = defineNuxtPlugin({
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
      if (binding.arg === "parent")
        targetEl = el.parentElement;
      targetEl.__ClickOutsideHandler__ = (event) => {
        if (!(targetEl === event.target || targetEl.contains(event.target))) {
          binding.value(event);
        }
      };
      document.body.addEventListener("click", targetEl.__ClickOutsideHandler__);
    },
    beforeUnmount(el, binding) {
      let targetEl = el;
      if (binding.arg === "parent")
        targetEl = el.parentElement;
      document.body.removeEventListener(
        "click",
        targetEl.__ClickOutsideHandler__
      );
    }
  });
});
const findFocusable = (element, programmatic = false) => {
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
};
let initialFocusedElement;
let onKeyDown;
const beforeMount = (el, { value = true }) => {
  if (value) {
    initialFocusedElement = document.activeElement;
    let focusable = findFocusable(el);
    let focusableProg = findFocusable(el, true);
    if (!!focusable && focusable.length > 0) {
      onKeyDown = (event) => {
        focusable = findFocusable(el);
        focusableProg = findFocusable(el, true);
        if (!focusable)
          return;
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
};
const mounted = (el) => {
  el.focus();
};
const beforeUnmount = (el) => {
  initialFocusedElement.focus();
  el.removeEventListener("keydown", onKeyDown);
};
const trapFocus_dw8OYE3K7w = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("trapFocus", {
    beforeMount,
    mounted,
    beforeUnmount
  });
});
const plugins = [
  revive_payload_client_GiN6zK8Twp,
  unhead_eyEy7315Kx,
  router_q2ENMhHUzQ,
  componentsplugin_KR1HBZs4kY,
  chunk_reload_client_Gmch4rU1RO,
  dev_server_logs_aDnOHAIJ59,
  check_if_layout_used_aUlzpn6ync,
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
    const _Error404 = defineAsyncComponent(() => __vitePreload(() => import("./vendor-BdBYoA5y.js").then((n) => n.c7), true ? [] : void 0).then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => __vitePreload(() => import("./vendor-BdBYoA5y.js").then((n) => n.c8), true ? [] : void 0).then((r) => r.default || r));
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
const ErrorComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/projects/my-components/node_modules/.pnpm/nuxt@3.11.2_@types+node@20.5.1_@unocss+reset@0.59.4_eslint@8.57.0_floating-vue@5.2.2_typescri_v2bbjnkjvea6uf35og75i5ehpm/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
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
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      if (isNuxtError(err) && (err.fatal || err.unhandled)) {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = false;
    const __returned__ = { IslandRenderer, nuxtApp, onResolve, url, SingleRenderer, results, error, islandContext, defineAsyncComponent, onErrorCaptured, onServerPrefetch, provide, get useNuxtApp() {
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Suspense, { onResolve: $setup.onResolve }, {
    default: withCtx(() => [
      $setup.error ? (openBlock(), createBlock($setup["ErrorComponent"], {
        key: 0,
        error: $setup.error
      }, null, 8, ["error"])) : $setup.islandContext ? (openBlock(), createBlock($setup["IslandRenderer"], {
        key: 1,
        context: $setup.islandContext
      }, null, 8, ["context"])) : $setup.SingleRenderer ? (openBlock(), createBlock(resolveDynamicComponent($setup.SingleRenderer), { key: 2 })) : (openBlock(), createBlock($setup["AppComponent"], { key: 3 }))
    ]),
    _: 1
    /* STABLE */
  }, 8, ["onResolve"]);
}
const RootComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/node_modules/.pnpm/nuxt@3.11.2_@types+node@20.5.1_@unocss+reset@0.59.4_eslint@8.57.0_floating-vue@5.2.2_typescri_v2bbjnkjvea6uf35og75i5ehpm/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
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
      ((_a = window.__NUXT__) == null ? void 0 : _a.serverRendered) || ((_b = document.getElementById("__NUXT_DATA__")) == null ? void 0 : _b.dataset.ssr) === "true"
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
