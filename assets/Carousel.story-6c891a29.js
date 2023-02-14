import { az as defineComponent, aB as ref, aY as provide, be as useIntervalFn, aU as onMounted, b4 as onBeforeUnmount, aC as computed, au as openBlock, aG as createElementBlock, aQ as renderSlot, ay as createBaseVNode, aM as normalizeClass, aT as inject, ar as resolveComponent, as as createBlock, at as withCtx, av as createVNode, aP as renderList, aO as Fragment, a$ as createTextVNode, aR as toDisplayString } from "./vendor-be841bdf.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const CarouselKey = Symbol("Carousel");
const Carousel_vue_vue_type_style_index_0_scoped_f9ce7289_lang = "";
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
    const dragging = ref(false);
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
    const eventMoveType = ref("");
    const eventEndType = ref("");
    function pointerStart(e) {
      var _a, _b;
      dragging.value = true;
      if (e.pointerType === "mouse") {
        eventMoveType.value = "pointermove";
        eventEndType.value = "pointerup";
      } else {
        eventMoveType.value = "touchmove";
        eventEndType.value = "touchend";
      }
      (_a = elRef.value) == null ? void 0 : _a.classList.remove("scroll-snap");
      slideX.value = (_b = elRef.value) == null ? void 0 : _b.scrollLeft;
      startX.value = e.clientX;
      window.addEventListener(eventMoveType.value, pointerMove);
      window.addEventListener(eventEndType.value, pointerUp);
    }
    function pointerMove(e) {
      const x = e.touches ? (e.changedTouches[0] || e.touches[0]).clientX : e.clientX;
      delta.value = startX.value - x;
      elRef.value.scrollLeft = slideX.value + delta.value;
    }
    function pointerUp() {
      dragging.value = false;
      window.removeEventListener(eventMoveType.value, pointerMove);
      window.removeEventListener(eventEndType.value, pointerUp);
      if (delta.value !== 0) {
        const signCheck = Math.sign(delta.value);
        const results = Math.round(Math.abs(delta.value / itemWidth.value) + 0.15);
        scrollTo(activeIndex.value + signCheck * results);
        delta.value = 0;
      }
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
    function onScrollFinished() {
      if (dragging.value)
        return;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const newIndex = Math.round(elRef.value.scrollLeft / itemWidth.value);
        activeIndex.value = newIndex;
        elRef.value.classList.add("scroll-snap");
      }, 100);
    }
    onMounted(() => {
      var _a;
      scrollTo(activeIndex.value);
      (_a = elRef.value) == null ? void 0 : _a.addEventListener("scroll", onScrollFinished);
    });
    onBeforeUnmount(() => {
      var _a;
      window.removeEventListener(eventMoveType.value, pointerMove);
      window.removeEventListener(eventEndType.value, pointerUp);
      (_a = elRef.value) == null ? void 0 : _a.removeEventListener("scroll", onScrollFinished);
    });
    const itemsToShow = computed(() => {
      if (!elRef.value)
        return 0;
      return Math.round(elRef.value.getBoundingClientRect().width / itemWidth.value);
    });
    function scrollTo(index) {
      var _a;
      if (index === items.value.length || itemsToShow.value > 1 && index > items.value.length - itemsToShow.value) {
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
      (_a = elRef.value) == null ? void 0 : _a.scrollTo({
        left: index * itemWidth.value,
        behavior: "smooth"
      });
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
        scrollTo(0);
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
    const __returned__ = { props, dragging, activeIndex, elRef, startX, slideX, delta, itemWidth, items, addItem, eventMoveType, eventEndType, pointerStart, pointerMove, pointerUp, get intervalFn() {
      return intervalFn;
    }, set intervalFn(v) {
      intervalFn = v;
    }, mouseEnter, mouseLeave, get scrollTimeout() {
      return scrollTimeout;
    }, set scrollTimeout(v) {
      scrollTimeout = v;
    }, onScrollFinished, itemsToShow, scrollTo, hasPrev, hasNext, prev, next, refresh, get observer() {
      return observer;
    }, set observer(v) {
      observer = v;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      onMouseenter: $setup.mouseEnter,
      onMouseleave: $setup.mouseLeave
    },
    [
      renderSlot(_ctx.$slots, "header", {
        prev: $setup.prev,
        next: $setup.next
      }, void 0, true),
      createBaseVNode(
        "div",
        {
          ref: "elRef",
          class: normalizeClass(["carousel scroll-snap", $props.itemsClass]),
          onPointerdown: $setup.pointerStart
        },
        [
          renderSlot(_ctx.$slots, "default", {
            activeIndex: $setup.activeIndex,
            scrollTo: $setup.scrollTo
          }, void 0, true)
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      )
    ],
    32
    /* HYDRATE_EVENTS */
  );
}
_sfc_main$2.__file = "components/base/carousel/Carousel.vue";
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-f9ce7289"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/base/carousel/Carousel.vue"]]);
const CarouselItem_vue_vue_type_style_index_0_scoped_3e74529a_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  setup(__props, { expose }) {
    expose();
    const { addItem } = inject(CarouselKey);
    const itemRef = ref();
    onMounted(() => {
      addItem(itemRef.value);
    });
    const __returned__ = { addItem, itemRef };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  ref: "itemRef",
  class: "carousel-item"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1$1,
    [
      renderSlot(_ctx.$slots, "default")
    ],
    512
    /* NEED_PATCH */
  );
}
_sfc_main$1.__file = "components/base/carousel/CarouselItem.vue";
const CarouselItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3e74529a"], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/base/carousel/CarouselItem.vue"]]);
const Carousel_story_vue_vue_type_style_index_0_lang = "";
const block0 = (Comp) => {
  Comp.doc = "<p>Carousel which supports horizontal scroll</p>\n";
};
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
        title: "Ngủ Ngon"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/0/a/e/f/0aef849d584c7e995073617f53b9ac24.jpg",
        title: "Tình Yêu"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/e/6/8/0/e680570f74b3497c95d96f6ba6db7b07.jpg",
        title: "Giai Điệu Buồn"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/4/d/f/4/4df44f0a15edb254717c383cf256b193.jpg",
        title: "Chơi Game"
      },
      {
        thumbnail: "https://photo-zmp3.zadn.vn/cover/e/3/d/4/e3d43659c6dc756f87f4e44220313f92.jpg",
        title: "Du lịch"
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
        title: "Thư Giãn"
      }
    ];
    const __returned__ = { colors, items, Carousel, CarouselItem };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "pointer-events-none absolute top-1/2 flex w-full -translate-y-1/2 justify-between" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "flex justify-between text-white" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "h2",
  { class: "text-lg font-bold" },
  "Top 100 hits",
  -1
  /* HOISTED */
);
const _hoisted_6 = { class: "flex items-center space-x-2" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["onClick"];
const _hoisted_9 = {
  class: "relative bg-gray-400",
  style: { "padding-bottom": "56.25%" }
};
const _hoisted_10 = ["src", "alt"];
const _hoisted_11 = { class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-red-500" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Carousel" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "common" }, {
        default: withCtx(() => [
          createVNode($setup["Carousel"], { class: "relative" }, {
            default: withCtx(({ scrollTo, activeIndex }) => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList($setup.colors, (color, index) => {
                  return createVNode($setup["CarouselItem"], {
                    key: color,
                    class: normalizeClass([
                      `item-${color} basis-full select-none py-4 text-center text-white`
                    ])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(index) + " - " + toDisplayString(activeIndex),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["class"]);
                }),
                64
                /* STABLE_FRAGMENT */
              )),
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("button", {
                  class: "pointer-events-auto h-10 w-10 rounded-full bg-gray-300 bg-opacity-50",
                  onClick: ($event) => scrollTo(activeIndex - 1)
                }, " < ", 8, _hoisted_2),
                createBaseVNode("button", {
                  class: "pointer-events-auto h-10 w-10 rounded-full bg-gray-300 bg-opacity-50",
                  onClick: ($event) => scrollTo(activeIndex + 1)
                }, " > ", 8, _hoisted_3)
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
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
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList($setup.items, (item, index) => {
                  return createVNode(
                    $setup["CarouselItem"],
                    {
                      key: item.title,
                      class: "w-1/3 select-none px-3 md:w-1/4 lg:w-1/5 xl:w-1/6"
                    },
                    {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_9, [
                          createBaseVNode("img", {
                            class: "absolute inset-0 rounded",
                            src: item.thumbnail,
                            alt: item.title
                          }, null, 8, _hoisted_10),
                          createBaseVNode(
                            "span",
                            _hoisted_11,
                            toDisplayString(`${index} - ${activeIndex}`),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
_sfc_main.__file = "components/base/carousel/Carousel.story.vue";
const Carousel_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/anhnm21/Desktop/ma/my-components/components/base/carousel/Carousel.story.vue"]]);
export {
  Carousel_story as default
};
