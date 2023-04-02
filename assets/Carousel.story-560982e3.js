import { ar as defineComponent, aW as inject, aC as ref, aK as onMounted, av as openBlock, aB as createElementBlock, aD as renderSlot, aV as watch, aX as useTransition, aU as computed, at as createBlock, au as withCtx, aY as normalizeStyle, aI as resolveDynamicComponent, aZ as provide, a_ as useIntervalFn, a$ as onBeforeUnmount, ax as createBaseVNode, aH as normalizeClass, aw as createVNode, aN as Fragment, aO as renderList, aG as Transition, aT as withModifiers, aF as createCommentVNode, az as pushScopeId, aA as popScopeId, as as resolveComponent, ay as createTextVNode, aE as toDisplayString } from "./vendor-c9bd13d9.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const CarouselKey = Symbol("Carousel");
const CarouselItem_vue_vue_type_style_index_0_scoped_f78923cf_lang = "";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$2 = {
  ref: "itemRef",
  class: "carousel-item"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1$2,
    [
      renderSlot(_ctx.$slots, "default")
    ],
    512
    /* NEED_PATCH */
  );
}
_sfc_main$4.__file = "components/custom/carousel/CarouselItem.vue";
const CarouselItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-f78923cf"], ["__file", "D:/projects/my-components/components/custom/carousel/CarouselItem.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VMotion",
  props: {
    as: { type: String, required: false, default: "div" },
    animate: { type: null, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const stateArr = ref([]);
    function objectToVector(obj) {
      const values = Object.values(obj);
      const vector = values.map(
        (value) => typeof value === "string" ? parseFloat(value) : value
      );
      return vector;
    }
    watch(
      () => props.animate,
      (val) => {
        if (!val)
          return;
        stateArr.value = objectToVector(val);
      },
      { immediate: true }
    );
    const transition = useTransition(stateArr, {
      duration: 400,
      transition: [0.4, 0, 0.2, 1]
    });
    function getSuffix(str) {
      const match = str.match(/^(.*?)([^\d]*)$/);
      return match ? match[2] : "";
    }
    function vectorToObject(vector, obj) {
      const keys = Object.keys(obj);
      const newObj = {};
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        let value = vector[i];
        if (typeof obj[key] === "string") {
          const suffix = getSuffix(obj[key]);
          if (suffix) {
            value = `${value}${suffix}`;
          }
        }
        newObj[key] = value;
      }
      return newObj;
    }
    const style = computed(() => {
      return vectorToObject(transition.value, props.animate);
    });
    const __returned__ = { props, stateArr, objectToVector, transition, getSuffix, vectorToObject, style };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.as), {
    style: normalizeStyle($setup.style)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["style"]);
}
_sfc_main$3.__file = "components/custom/motion/VMotion.vue";
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "D:/projects/my-components/components/custom/motion/VMotion.vue"]]);
const Carousel_vue_vue_type_style_index_0_scoped_aaedb532_lang = "";
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
      var _a;
      dragging.value = true;
      if (e.pointerType === "mouse") {
        eventMoveType.value = "pointermove";
        eventEndType.value = "pointerup";
      } else {
        eventMoveType.value = "touchmove";
        eventEndType.value = "touchend";
      }
      (_a = elRef.value) == null ? void 0 : _a.classList.remove("scroll-snap");
      elRef.value.scrollLeft = elRef.value.scrollLeft;
      slideX.value = elRef.value.scrollLeft;
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
      } else {
        scrollTo(activeIndex.value);
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
        if (!dragging.value)
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
      clearTimeout(scrollTimeout);
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
_sfc_main$2.__file = "components/custom/carousel/Carousel.vue";
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-aaedb532"], ["__file", "D:/projects/my-components/components/custom/carousel/Carousel.vue"]]);
const img1 = "/my-components/images/1.jpeg";
const img2 = "/my-components/images/2.jpeg";
const img3 = "/my-components/images/3.jpeg";
const img4 = "/my-components/images/4.jpeg";
const img5 = "/my-components/images/5.jpeg";
const img6 = "/my-components/images/6.jpeg";
const Gallery_vue_vue_type_style_index_0_scoped_573b99e0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Gallery",
  setup(__props, { expose }) {
    expose();
    const images = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      `${img1}?1`,
      `${img2}?1`,
      `${img3}?1`,
      `${img4}?1`,
      `${img5}?1`,
      `${img6}?1`,
      `${img1}?2`,
      `${img2}?2`,
      `${img3}?2`,
      `${img4}?2`,
      `${img5}?2`,
      `${img6}?2`,
      `${img1}?3`,
      `${img2}?3`,
      `${img3}?3`,
      `${img4}?3`,
      `${img5}?3`,
      `${img6}?3`
    ];
    const collapsedAspectRatio = 1 / 3;
    const fullAspectRatio = 3 / 2;
    const margin = 12;
    const gap = 2;
    const variants = {
      active: {
        aspectRatio: fullAspectRatio,
        marginLeft: margin,
        marginRight: margin,
        opacity: 1
      },
      inactive: {
        aspectRatio: collapsedAspectRatio,
        marginLeft: 0,
        marginRight: 0,
        opacity: 0.5
      }
    };
    const __returned__ = { images, collapsedAspectRatio, fullAspectRatio, margin, gap, variants };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-573b99e0"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "relative h-screen bg-black" };
const _hoisted_2$1 = { class: "mx-auto flex h-full max-w-7xl flex-col justify-center" };
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "svg",
  {
    class: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor"
  },
  [
    /* @__PURE__ */ createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5L8.25 12l7.5-7.5"
    })
  ],
  -1
  /* HOISTED */
));
const _hoisted_6$1 = [
  _hoisted_5$1
];
const _hoisted_7$1 = ["onClick"];
const _hoisted_8$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "svg",
  {
    class: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor"
  },
  [
    /* @__PURE__ */ createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    })
  ],
  -1
  /* HOISTED */
));
const _hoisted_9$1 = [
  _hoisted_8$1
];
const _hoisted_10$1 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CarouselItem = CarouselItem;
  const _component_VMotion = __nuxt_component_1;
  const _component_Carousel = Carousel;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createVNode(_component_Carousel, null, {
        default: withCtx(({ scrollTo, activeIndex }) => [
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList($setup.images, (image) => {
              return createVNode(
                _component_CarouselItem,
                {
                  key: image,
                  class: "w-full"
                },
                {
                  default: withCtx(() => [
                    createBaseVNode("img", {
                      class: "aspect-[3/2] object-cover",
                      src: image
                    }, null, 8, _hoisted_3$1)
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
          )),
          createVNode(
            Transition,
            { name: "custom-fade" },
            {
              default: withCtx(() => [
                activeIndex > 0 ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-70 transition-opacity duration-300 hover:opacity-100",
                  onClick: ($event) => scrollTo(activeIndex - 1),
                  onPointerdown: _cache[0] || (_cache[0] = withModifiers(() => {
                  }, ["stop"]))
                }, _hoisted_6$1, 40, _hoisted_4$1)) : createCommentVNode("v-if", true)
              ]),
              _: 2
              /* DYNAMIC */
            },
            1024
            /* DYNAMIC_SLOTS */
          ),
          createVNode(
            Transition,
            { name: "custom-fade" },
            {
              default: withCtx(() => [
                activeIndex + 1 < $setup.images.length ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-70 transition-opacity duration-300 hover:opacity-100",
                  onClick: ($event) => scrollTo(activeIndex + 1),
                  onPointerdown: _cache[1] || (_cache[1] = withModifiers(() => {
                  }, ["stop"]))
                }, _hoisted_9$1, 40, _hoisted_7$1)) : createCommentVNode("v-if", true)
              ]),
              _: 2
              /* DYNAMIC */
            },
            1024
            /* DYNAMIC_SLOTS */
          ),
          createBaseVNode(
            "div",
            {
              class: "absolute inset-x-0 bottom-6 flex h-14 justify-center overflow-hidden",
              onPointerdown: _cache[2] || (_cache[2] = withModifiers(() => {
              }, ["stop"]))
            },
            [
              createBaseVNode(
                "div",
                {
                  style: normalizeStyle({
                    aspectRatio: $setup.fullAspectRatio,
                    gap: `${$setup.gap}%`,
                    transform: `translateX(-${activeIndex * 100 * ($setup.collapsedAspectRatio / $setup.fullAspectRatio) + $setup.margin + activeIndex * $setup.gap}%) translateZ(0px)`
                  }),
                  class: "flex transition-all"
                },
                [
                  (openBlock(), createElementBlock(
                    Fragment,
                    null,
                    renderList($setup.images, (image, i) => {
                      return createVNode(_component_VMotion, {
                        key: image,
                        animate: i === activeIndex ? $setup.variants.active : $setup.variants.inactive,
                        class: "shrink-0 hover:!opacity-100",
                        as: "button",
                        onClick: ($event) => scrollTo(i)
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("img", {
                            src: image,
                            class: "pointer-events-none h-full object-cover"
                          }, null, 8, _hoisted_10$1)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["animate", "onClick"]);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ],
                4
                /* STYLE */
              )
            ],
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
_sfc_main$1.__file = "components/custom/carousel/Gallery.vue";
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-573b99e0"], ["__file", "D:/projects/my-components/components/custom/carousel/Gallery.vue"]]);
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
  const _component_Gallery = __nuxt_component_0;
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
      }),
      createVNode(_component_Variant, { title: "gallery" }, {
        default: withCtx(() => [
          createVNode(_component_Gallery)
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
_sfc_main.__file = "components/custom/carousel/Carousel.story.vue";
const Carousel_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/carousel/Carousel.story.vue"]]);
export {
  Carousel_story as default
};
