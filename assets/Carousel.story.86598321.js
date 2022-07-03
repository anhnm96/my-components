import { d as defineComponent, r as ref, av as provide, aw as useIntervalFn, p as onMounted, as as onBeforeUnmount, c as computed, ax as _export_sfc, a as openBlock, b as createElementBlock, f as renderSlot, e as createBaseVNode, n as normalizeClass, ay as inject, az as getCurrentInstance, q as resolveComponent, j as createBlock, k as withCtx, l as createVNode, J as renderList, F as Fragment, R as createTextVNode, t as toDisplayString } from "./vendor.161336e4.js";
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
      default: true
    },
    autoplay: {
      type: Number,
      required: false,
      validator(value) {
        return value >= 0;
      }
    },
    itemsClass: String,
    itemsToList: {
      type: Number,
      default: -1
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
    const itemWidth = ref(0);
    const items = ref([]);
    function addItem(item) {
      items.value.push(item);
    }
    provide(CarouselKey, { addItem });
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
        const results = Math.round(Math.abs(delta.value / itemWidth.value) + 0.15);
        scrollTo(activeIndex.value + signCheck * results);
        delta.value = 0;
      }
      setTimeout(() => {
        elRef.value.classList.add("scroll-snap");
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
    const itemsToShow = computed(() => {
      if (!elRef.value)
        return 0;
      return Math.round(elRef.value.getBoundingClientRect().width / itemWidth.value);
    });
    function scrollTo(index) {
      var _a;
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
      if (itemsToShow.value > 1)
        (_a = elRef.value) == null ? void 0 : _a.scrollTo({
          left: index * itemWidth.value,
          behavior: "smooth"
        });
      else
        items.value[index].scrollIntoView({ behavior: "smooth" });
      activeIndex.value = index;
    }
    const hasPrev = computed(() => {
      return activeIndex.value > 0;
    });
    const hasNext = computed(() => {
      return activeIndex.value < items.value.length - itemsToShow.value;
    });
    function prev() {
      if (items.value.length < itemsToShow.value)
        return;
      if (!hasPrev.value && props.repeat) {
        scrollTo(items.value.length - itemsToShow.value);
        return;
      }
      const gap = props.itemsToList === -1 ? itemsToShow.value : props.itemsToList;
      activeIndex.value -= gap;
      if (activeIndex.value < 0)
        activeIndex.value = 0;
      scrollTo(activeIndex.value);
    }
    function next() {
      if (items.value.length < itemsToShow.value)
        return;
      if (!hasNext.value && props.repeat) {
        activeIndex.value = 0;
        scrollTo(activeIndex.value);
        return;
      }
      const lastAllowIndex = items.value.length - itemsToShow.value;
      const gap = props.itemsToList === -1 ? itemsToShow.value : props.itemsToList;
      const nextActiveIndex = activeIndex.value + gap;
      if (nextActiveIndex > lastAllowIndex) {
        activeIndex.value = lastAllowIndex;
        scrollTo(activeIndex.value);
        return;
      }
      activeIndex.value = nextActiveIndex;
      scrollTo(activeIndex.value);
    }
    function refresh() {
      itemWidth.value = items.value[0].getBoundingClientRect().width;
      if (activeIndex.value > items.value.length - itemsToShow.value)
        activeIndex.value = items.value.length - itemsToShow.value;
      if (activeIndex.value < 0)
        activeIndex.value = 0;
      scrollTo(activeIndex.value);
    }
    let observer;
    onMounted(() => {
      observer = new ResizeObserver(refresh);
      observer.observe(elRef.value);
    });
    onBeforeUnmount(() => {
      observer.disconnect();
    });
    const __returned__ = { props, activeIndex, elRef, startX, slideX, delta, itemWidth, items, addItem, pointerStart, pointerMove, pointerUp, intervalFn, mouseEnter, mouseLeave, scrollTimeout, scrollFinished, itemsToShow, scrollTo, hasPrev, hasNext, prev, next, refresh, observer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onMouseenter: $setup.mouseEnter,
    onMouseleave: $setup.mouseLeave
  }, [
    renderSlot(_ctx.$slots, "header", {
      prev: $setup.prev,
      next: $setup.next
    }, void 0, true),
    createBaseVNode("div", {
      ref: "elRef",
      class: normalizeClass(["carousel scroll-snap", $props.itemsClass]),
      onPointerdown: $setup.pointerStart
    }, [
      renderSlot(_ctx.$slots, "default", {
        activeIndex: $setup.activeIndex,
        scrollTo: $setup.scrollTo
      }, void 0, true)
    ], 34)
  ], 32);
}
_sfc_main$2.__file = "components/base/carousel/Carousel.vue";
var Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-3fd3d40c"], ["__file", "D:/projects/my-components/components/base/carousel/Carousel.vue"]]);
var CarouselItem_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".carousel-item[data-v-3aa017bf]{flex-shrink:0;scroll-snap-align:start}.carousel-item img[data-v-3aa017bf-s]{pointer-events:none}")();
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  setup(__props, { expose }) {
    expose();
    const { addItem } = inject(CarouselKey);
    const instance = getCurrentInstance();
    onMounted(() => {
      var _a;
      addItem((_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$el);
    });
    const __returned__ = { addItem, instance };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "carousel-item" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
_sfc_main$1.__file = "components/base/carousel/CarouselItem.vue";
var CarouselItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3aa017bf"], ["__file", "D:/projects/my-components/components/base/carousel/CarouselItem.vue"]]);
var Carousel_story_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".item-red{background-color:red}.item-green{background-color:green}.item-blue{background-color:blue}.item-gray{background-color:gray}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Carousel.story",
  setup(__props, { expose }) {
    expose();
    const colors = ["red", "green", "blue", "gray"];
    const items = [
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/d/0/d/7/d0d772a6c3e35b3e768d5c3ebf644ecd.jpg",
        title: "Spa - Yoga"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/2/e/9/6/2e966bf47b1989fdff7149c7a1b0f25e.jpg",
        title: "Driving"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/d/b/5/c/db5cf069b328c7858b2d9642cc6b4529.jpg",
        title: "Workout"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/4/a/3/b/4a3b5265ee2c9e2c84f5a88194382b5d.jpg",
        title: "Ng\u1EE7 Ngon"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/0/a/e/f/0aef849d584c7e995073617f53b9ac24.jpg",
        title: "T\xECnh Y\xEAu"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/e/6/8/0/e680570f74b3497c95d96f6ba6db7b07.jpg",
        title: "Giai \u0110i\u1EC7u Bu\u1ED3n"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/4/d/f/4/4df44f0a15edb254717c383cf256b193.jpg",
        title: "Ch\u01A1i Game"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/e/3/d/4/e3d43659c6dc756f87f4e44220313f92.jpg",
        title: "Du l\u1ECBch"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/9/5/1/b/951bb18f468ea711a81a0dd28a8797d4.jpg",
        title: "Motivation"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/9/d/0/4/9d045c7d3a111975bb6920d963046dd1.jpg",
        title: "Chill"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/1/c/c/8/1cc8ae9704ae8fb7e34487ce744083a9.jpg",
        title: "Dinner"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/0/f/d/1/0fd1da7445b21a752a1c4282b06f2cf0.jpg",
        title: "Th\u01B0 Gi\xE3n"
      }
    ];
    const __returned__ = { colors, items, Carousel, CarouselItem };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "absolute top-1/2 w-full -translate-y-1/2 flex justify-between pointer-events-none" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "flex justify-between text-white" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-lg font-bold" }, "Top 100 hits", -1);
const _hoisted_6 = { class: "flex items-center space-x-2" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["onClick"];
const _hoisted_9 = {
  class: "relative bg-gray-400",
  style: { "padding-bottom": "56.25%" }
};
const _hoisted_10 = ["src", "alt"];
const _hoisted_11 = { class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-red-500 font-bold" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Carousel" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "common" }, {
        default: withCtx(() => [
          createVNode($setup["Carousel"], { class: "relative" }, {
            default: withCtx(({ scrollTo, activeIndex }) => [
              (openBlock(), createElementBlock(Fragment, null, renderList($setup.colors, (color, index) => {
                return createVNode($setup["CarouselItem"], {
                  key: color,
                  class: normalizeClass([`item-${color} text-center py-4 text-white basis-full`])
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
      }),
      createVNode(_component_Variant, { title: "list" }, {
        default: withCtx(() => [
          createVNode($setup["Carousel"], { "items-class": "mt-3 -mx-3" }, {
            header: withCtx(({ prev, next }) => [
              createBaseVNode("div", _hoisted_4, [
                _hoisted_5,
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("button", {
                    class: "inline-flex items-center p-1 focus:outline-none",
                    "aria-label": "Previous List",
                    onClick: prev
                  }, " Prev ", 8, _hoisted_7),
                  createBaseVNode("button", {
                    class: "inline-flex items-center p-1 focus:outline-none",
                    "aria-label": "Next List",
                    onClick: next
                  }, " Next ", 8, _hoisted_8)
                ])
              ])
            ]),
            default: withCtx(({ activeIndex }) => [
              (openBlock(), createElementBlock(Fragment, null, renderList($setup.items, (item, index) => {
                return createVNode($setup["CarouselItem"], {
                  key: item.title,
                  class: "w-1/4 px-3 lg:w-1/5 xl:w-1/6"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("img", {
                        class: "absolute inset-0 rounded",
                        src: item.thumbnail,
                        alt: item.title
                      }, null, 8, _hoisted_10),
                      createBaseVNode("span", _hoisted_11, toDisplayString(`${index} - ${activeIndex}`), 1)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ]),
            _: 1
          })
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
