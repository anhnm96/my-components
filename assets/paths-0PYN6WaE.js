import { bt as joinRelativeURL } from "./vendor-BdBYoA5y.js";
const appConfig = { "rootId": "nuxt-test", "baseURL": "/", "buildAssetsDir": "/_nuxt/", "cdnURL": "", "head": { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] }, "layoutTransition": false, "pageTransition": false, "viewTransition": false, "keepalive": false, "rootTag": "div", "teleportTag": "div", "teleportId": "teleports" };
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
};
{
  globalThis.__buildAssetsURL = buildAssetsURL;
  globalThis.__publicAssetsURL = publicAssetsURL;
}
export {
  baseURL as b
};
