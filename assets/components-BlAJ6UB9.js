import { aD as defineComponent, bW as h } from "./vendor-BP-zCcN8.js";
const NuxtLink = defineComponent({
  name: "NuxtLink",
  props: {
    to: [String, Object]
  },
  setup(props, ctx) {
    return () => {
      var _a, _b;
      return h("a", {
        href: typeof props.to === "string" ? props.to : "#",
        ...ctx.attrs
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]);
    };
  }
});
export {
  NuxtLink as N
};
