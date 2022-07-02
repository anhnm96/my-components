import { d as defineComponent, r as ref, av as provide, aw as useIntervalFn, p as onMounted, as as onBeforeUnmount, ax as _export_sfc, a as openBlock, b as createElementBlock, e as createBaseVNode, f as renderSlot, ay as inject, az as getCurrentInstance, q as resolveComponent, j as createBlock, k as withCtx, l as createVNode, J as renderList, F as Fragment, n as normalizeClass, R as createTextVNode, t as toDisplayString } from "./vendor.15320b94.js";
const CarouselKey = Symbol("Carousel");
var Carousel_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".carousel[data-v-3fd3d40c]{-ms-overflow-style:none;display:flex;overflow-x:auto;scrollbar-width:none;width:100%}.carousel[data-v-3fd3d40c]::-webkit-scrollbar{display:none}.scroll-snap[data-v-3fd3d40c]{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}")();
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    repeat: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Number,
      required: false,
      validator(value) {
        return value >= 0;
      }
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const activeIndex = ref(props.initialIndex);
    const elRef = ref();
    const startX = ref();
    const slideX = ref();
    const delta = ref(0);
    const items = ref([]);
    function addItem(item) {
      items.value.push(item);
    }
    function updateActiveIndex(value) {
      activeIndex.value = value;
    }
    provide(CarouselKey, {
      items,
      addItem,
      updateActiveIndex
    });
    function pointerStart(e) {
      var _a, _b;
      (_a = elRef.value) == null ? void 0 : _a.classList.remove("scroll-snap");
      slideX.value = (_b = elRef.value) == null ? void 0 : _b.scrollLeft;
      startX.value = e.clientX;
      window.addEventListener("pointermove", pointerMove);
      window.addEventListener("pointerup", pointerUp);
    }
    function pointerMove(e) {
      delta.value = startX.value - e.clientX;
      const x = e.clientX;
      const displaceX = x - startX.value;
      elRef.value.scrollLeft = slideX.value - displaceX;
    }
    function pointerUp() {
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerup", pointerUp);
      if (delta.value !== 0) {
        const signCheck = Math.sign(delta.value);
        const itemWidth = elRef.value.getBoundingClientRect().width;
        const results = Math.round(Math.abs(delta.value / itemWidth) + 0.15);
        scrollTo(activeIndex.value + signCheck * results);
        delta.value = 0;
      }
      setTimeout(() => {
        elRef.value.classList.add("scroll-snap");
      }, 0);
    }
    function scrollTo(index) {
      if (index === items.value.length) {
        if (props.repeat || props.autoplay)
          index = 0;
        else
          return;
      } else if (index < 0) {
        if (props.repeat || props.autoplay)
          index = items.value.length - 1;
        else
          return;
      }
      items.value[index].scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        activeIndex.value = index;
      }, 0);
    }
    let intervalFn;
    if (props.autoplay) {
      intervalFn = useIntervalFn(() => {
        scrollTo(activeIndex.value + 1);
      }, props.autoplay);
    }
    function mouseEnter() {
      if (props.autoplay) {
        intervalFn.pause();
      }
    }
    function mouseLeave() {
      if (props.autoplay) {
        intervalFn.resume();
      }
    }
    let scrollTimeout;
    function scrollFinished() {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const newIndex = Math.round(elRef.value.scrollLeft / elRef.value.children[0].getBoundingClientRect().width);
        activeIndex.value = newIndex;
      }, 100);
    }
    onMounted(() => {
      var _a;
      scrollTo(activeIndex.value);
      (_a = elRef.value) == null ? void 0 : _a.addEventListener("scroll", scrollFinished);
    });
    onBeforeUnmount(() => {
      var _a;
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerup", pointerUp);
      (_a = elRef.value) == null ? void 0 : _a.removeEventListener("scroll", scrollFinished);
    });
    const __returned__ = { props, activeIndex, elRef, startX, slideX, delta, items, addItem, updateActiveIndex, pointerStart, pointerMove, pointerUp, scrollTo, intervalFn, mouseEnter, mouseLeave, scrollTimeout, scrollFinished };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onMouseenter: $setup.mouseEnter,
    onMouseleave: $setup.mouseLeave
  }, [
    createBaseVNode("div", {
      ref: "elRef",
      class: "carousel scroll-snap",
      onPointerdown: $setup.pointerStart
    }, [
      renderSlot(_ctx.$slots, "default", {
        activeIndex: $setup.activeIndex,
        scrollTo: $setup.scrollTo
      }, void 0, true)
    ], 544)
  ], 32);
}
_sfc_main$2.__file = "components/base/carousel/Carousel.vue";
var Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-3fd3d40c"], ["__file", "D:/projects/my-components/components/base/carousel/Carousel.vue"]]);
var CarouselItem_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".carousel-item[data-v-3aa017bf]{flex-basis:100%;flex-shrink:0;scroll-snap-align:center}")();
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  setup(__props, { expose }) {
    expose();
    const { items, addItem, updateActiveIndex } = inject(CarouselKey);
    const instance = getCurrentInstance();
    const index = ref();
    onMounted(() => {
      var _a;
      index.value = items.value.length;
      addItem((_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$el);
    });
    const __returned__ = { items, addItem, updateActiveIndex, instance, index };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "carousel-item",
    onMouseenter: _cache[0] || (_cache[0] = ($event) => $setup.updateActiveIndex($setup.index))
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 32);
}
_sfc_main$1.__file = "components/base/carousel/CarouselItem.vue";
var CarouselItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3aa017bf"], ["__file", "D:/projects/my-components/components/base/carousel/CarouselItem.vue"]]);
var Carousel_story_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".item-red{background-color:red}.item-green{background-color:green}.item-blue{background-color:blue}.item-gray{background-color:gray}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Carousel.story",
  setup(__props, { expose }) {
    expose();
    const colors = ["red", "green", "blue", "gray"];
    const __returned__ = { colors, Carousel, CarouselItem };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "absolute top-1/2 w-full -translate-y-1/2 flex justify-between pointer-events-none" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Carousel" }, {
    default: withCtx(() => [
      createVNode($setup["Carousel"], { class: "relative" }, {
        default: withCtx(({ scrollTo, activeIndex }) => [
          (openBlock(), createElementBlock(Fragment, null, renderList($setup.colors, (color, index) => {
            return createVNode($setup["CarouselItem"], {
              key: color,
              class: normalizeClass([`item-${color} text-center py-4 text-white`])
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(index) + " - " + toDisplayString(activeIndex), 1)
              ]),
              _: 2
            }, 1032, ["class"]);
          }), 64)),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("button", {
              class: "w-10 h-10 rounded-full bg-gray-300 bg-opacity-50 pointer-events-auto",
              onClick: ($event) => scrollTo(activeIndex - 1)
            }, " < ", 8, _hoisted_2),
            createBaseVNode("button", {
              class: "w-10 h-10 rounded-full bg-gray-300 bg-opacity-50 pointer-events-auto",
              onClick: ($event) => scrollTo(activeIndex + 1)
            }, " > ", 8, _hoisted_3)
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/base/carousel/Carousel.story.vue";
var Carousel_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/base/carousel/Carousel.story.vue"]]);
export { Carousel_story as default };
