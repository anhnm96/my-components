import { aD as defineComponent, aY as inject, at as ref, aP as onMounted, as as _export_sfc, aw as openBlock, aH as createElementBlock, az as renderSlot, aZ as provide, a_ as useIntervalFn, a$ as onBeforeUnmount, av as computed, aG as createBaseVNode, aB as normalizeClass, aF as createVNode, ay as withCtx, aJ as Fragment, aI as renderList, b0 as Transition, aW as withModifiers, aK as createCommentVNode, aA as normalizeStyle, aE as resolveComponent, ax as createBlock, aL as toDisplayString } from "./vendor-BP-zCcN8.js";
import { _ as __nuxt_component_1 } from "./VMotion-CyUaF77x.js";
import "./paths-D57a4o1b.js";
const CarouselKey = Symbol("Carousel");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  setup(__props, { expose: __expose }) {
    __expose();
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
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$3.__file = "components/custom/carousel/CarouselItem.vue";
const CarouselItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-f78923cf"], ["__file", "D:/projects/my-components/components/custom/carousel/CarouselItem.vue"]]);
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
    itemsClass: {
      type: String,
      default: "overflow-x-auto w-full flex"
    },
    itemsToList: {
      type: Number,
      default: -1
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const dragging = ref(false);
    const activeIndex = ref(props.initialIndex);
    const elRef = ref();
    const startX = ref();
    const slideX = ref();
    const delta = ref(0);
    const itemWidth = ref(0);
    const itemGap = ref(0);
    const items = ref([]);
    function addItem(item) {
      items.value.push(item);
    }
    provide(CarouselKey, { addItem });
    const eventMoveType = ref("");
    const eventEndType = ref("");
    let startPosition;
    let endPosition;
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
      if (eventEndType.value === "pointerup")
        startPosition = { x: e.clientX, y: e.clientY };
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
    function pointerUp(e) {
      if (eventEndType.value === "pointerup")
        endPosition = { x: e.clientX, y: e.clientY };
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
    let paused = false;
    function onScrollFinished() {
      if (dragging.value || paused) return;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const newIndex = Math.round(
          elRef.value.scrollLeft / (itemWidth.value + itemGap.value)
        );
        activeIndex.value = newIndex;
        startPosition = { x: 0, y: 0 };
        endPosition = { x: 0, y: 0 };
        if (!dragging.value) elRef.value.classList.add("scroll-snap");
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
      if (!elRef.value) return 0;
      const { width, paddingLeft, paddingRight } = getComputedStyle(elRef.value);
      const usesableWidth = parseFloat(width) - parseFloat(paddingLeft) - parseFloat(paddingRight);
      console.log("usesableWidth", usesableWidth);
      return Math.round(
        (usesableWidth + itemGap.value) / (itemWidth.value + itemGap.value)
      );
    });
    function scrollTo(index) {
      var _a, _b;
      paused = true;
      if (index === items.value.length || itemsToShow.value > 1 && index > items.value.length - itemsToShow.value) {
        if (props.repeat || props.autoplay) index = 0;
        else return;
      } else if (index < 0) {
        if (props.repeat || props.autoplay) index = items.value.length - 1;
        else return;
      }
      clearTimeout(scrollTimeout);
      activeIndex.value = index;
      (_a = elRef.value) == null ? void 0 : _a.scrollTo({
        left: index * (itemWidth.value + itemGap.value),
        behavior: "smooth"
      });
      (_b = elRef.value) == null ? void 0 : _b.addEventListener(
        "scrollend",
        () => {
          if (!dragging.value) elRef.value.classList.add("scroll-snap");
          paused = false;
        },
        { once: true }
      );
    }
    const hasPrev = computed(() => {
      return activeIndex.value > 0;
    });
    const hasNext = computed(() => {
      return activeIndex.value < items.value.length - itemsToShow.value;
    });
    function prev() {
      if (items.value.length < itemsToShow.value) return;
      if (!hasPrev.value && props.repeat) {
        scrollTo(items.value.length - itemsToShow.value);
        return;
      }
      const gap2 = props.itemsToList === -1 ? itemsToShow.value : props.itemsToList;
      activeIndex.value -= gap2;
      if (activeIndex.value < 0) activeIndex.value = 0;
      scrollTo(activeIndex.value);
    }
    function next() {
      if (items.value.length < itemsToShow.value) return;
      if (!hasNext.value && props.repeat) {
        scrollTo(0);
        return;
      }
      const lastAllowIndex = items.value.length - itemsToShow.value;
      const gap2 = props.itemsToList === -1 ? itemsToShow.value : props.itemsToList;
      const nextActiveIndex = activeIndex.value + gap2;
      if (nextActiveIndex > lastAllowIndex) {
        activeIndex.value = lastAllowIndex;
        scrollTo(activeIndex.value);
        return;
      }
      activeIndex.value = nextActiveIndex;
      scrollTo(activeIndex.value);
    }
    function refresh() {
      var _a;
      itemWidth.value = ((_a = items.value[0]) == null ? void 0 : _a.getBoundingClientRect().width) ?? 0;
      itemGap.value = parseFloat(getComputedStyle(elRef.value).gap) || 0;
      if (activeIndex.value > items.value.length - itemsToShow.value)
        activeIndex.value = items.value.length - itemsToShow.value;
      if (activeIndex.value < 0) activeIndex.value = 0;
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
    function clickCarousel(e) {
      if ((startPosition == null ? void 0 : startPosition.x) !== (endPosition == null ? void 0 : endPosition.x) || (startPosition == null ? void 0 : startPosition.y) !== (endPosition == null ? void 0 : endPosition.y)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
    const __returned__ = { props, dragging, activeIndex, elRef, startX, slideX, delta, itemWidth, itemGap, items, addItem, eventMoveType, eventEndType, get startPosition() {
      return startPosition;
    }, set startPosition(v) {
      startPosition = v;
    }, get endPosition() {
      return endPosition;
    }, set endPosition(v) {
      endPosition = v;
    }, pointerStart, pointerMove, pointerUp, get intervalFn() {
      return intervalFn;
    }, set intervalFn(v) {
      intervalFn = v;
    }, mouseEnter, mouseLeave, get scrollTimeout() {
      return scrollTimeout;
    }, set scrollTimeout(v) {
      scrollTimeout = v;
    }, get paused() {
      return paused;
    }, set paused(v) {
      paused = v;
    }, onScrollFinished, itemsToShow, scrollTo, hasPrev, hasNext, prev, next, refresh, get observer() {
      return observer;
    }, set observer(v) {
      observer = v;
    }, clickCarousel };
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
        activeIndex: $setup.activeIndex,
        prev: $setup.prev,
        next: $setup.next,
        scrollTo: $setup.scrollTo,
        hasPrev: $setup.hasPrev,
        hasNext: $setup.hasNext
      }, void 0, true),
      createBaseVNode(
        "div",
        {
          ref: "elRef",
          class: normalizeClass(["carousel scroll-snap", $props.itemsClass]),
          onPointerdown: $setup.pointerStart,
          onClickCapture: $setup.clickCarousel
        },
        [
          renderSlot(_ctx.$slots, "default", {
            activeIndex: $setup.activeIndex,
            scrollTo: $setup.scrollTo,
            prev: $setup.prev,
            next: $setup.next
          }, void 0, true)
        ],
        34
        /* CLASS, NEED_HYDRATION */
      ),
      renderSlot(_ctx.$slots, "footer", {
        activeIndex: $setup.activeIndex,
        prev: $setup.prev,
        next: $setup.next,
        scrollTo: $setup.scrollTo,
        hasPrev: $setup.hasPrev,
        hasNext: $setup.hasNext
      }, void 0, true)
    ],
    32
    /* NEED_HYDRATION */
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
const collapsedAspectRatio = 1 / 3;
const fullAspectRatio = 3 / 2;
const margin = 12;
const gap = 2;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Gallery",
  setup(__props, { expose: __expose }) {
    __expose();
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
    const variants = {
      active: {
        aspectRatio: fullAspectRatio,
        marginLeft: `${margin}%`,
        marginRight: `${margin}%`,
        opacity: 1
      },
      inactive: {
        aspectRatio: collapsedAspectRatio,
        marginLeft: "0%",
        marginRight: "0%",
        opacity: 0.5
      }
    };
    const __returned__ = { images, collapsedAspectRatio, fullAspectRatio, margin, gap, variants };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "relative h-screen bg-black" };
const _hoisted_2$1 = { class: "mx-auto flex h-full max-w-7xl flex-col justify-center" };
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = ["onClick"];
const _hoisted_6$1 = ["src"];
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
                }, _cache[3] || (_cache[3] = [
                  createBaseVNode(
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
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M15.75 19.5L8.25 12l7.5-7.5"
                      })
                    ],
                    -1
                    /* HOISTED */
                  )
                ]), 40, _hoisted_4$1)) : createCommentVNode("v-if", true)
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
                }, _cache[4] || (_cache[4] = [
                  createBaseVNode(
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
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                      })
                    ],
                    -1
                    /* HOISTED */
                  )
                ]), 40, _hoisted_5$1)) : createCommentVNode("v-if", true)
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
                          }, null, 8, _hoisted_6$1)
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
            /* NEED_HYDRATION */
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
const block0 = (Comp) => {
  Comp.doc = "<p>Carousel which supports horizontal scroll</p>\n";
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Carousel.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const items = [
      {
        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/1/3/0/b130381bdaed5df3ddfff9549d859510.jpg",
        title: "Lofi Việt Gây Nghiện"
      },
      {
        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg",
        title: "Nhạc Lofi Chill Gây Nghiện"
      },
      {
        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
        title: "Nhạc Hoa Lời Việt Nhẹ Nhàng"
      },
      {
        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/6/1/e/e61e02571410b153d445067f22f39d36.jpg",
        title: "tâm tình lâu phai"
      },
      {
        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg",
        title: "Nhạc Chill Tâm Trạng Buồn"
      },
      {
        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/8/3/5/78355641f2001767ed62f29ef644e942.jpg",
        title: "Playlist Này Chill Phết"
      },
      {
        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/d/8/a/ad8aded71985e32997c8d09b9078dfbe.jpg",
        title: "tổng đài nhạc chill"
      },
      {
        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg",
        title: "Lofi Một Chút Thôi"
      },
      {
        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/e/c/3/1ec302e3c8013ab990729953fb8cbf7f.jpg",
        title: "Ngày Lênh Đênh"
      },
      {
        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/e/2/9/fe2964f51f4e3ede798ded5258aac857.jpg",
        title: "Nhẹ Nhàng Cùng V-Pop"
      },
      {
        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/d/e/4/bde43aa51e575864730a5cabd3b40fbe.jpg",
        title: "Nhạc Chill Ngày Nay"
      },
      {
        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/0/7/e/607ec8b9a98aae380e3cdbcae275bcb0.jpg",
        title: "Thư Giãn"
      }
    ];
    const __returned__ = { items, Carousel, CarouselItem };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "grid h-full place-items-center" };
const _hoisted_2 = { class: "text-4xl font-semibold" };
const _hoisted_3 = { class: "absolute left-0 right-0 top-1/2 flex w-full -translate-y-1/2 justify-between" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "flex justify-between px-3 text-white" };
const _hoisted_7 = { class: "flex items-center space-x-2" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "relative h-full rounded bg-gray-400" };
const _hoisted_11 = ["src", "alt"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Gallery = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Carousel" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "common" }, {
        default: withCtx(() => [
          createVNode($setup["Carousel"], { class: "relative px-[100px]" }, {
            default: withCtx(({ prev, next }) => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(6, (item) => {
                  return createVNode(
                    $setup["CarouselItem"],
                    {
                      key: item,
                      class: "h-[500px] w-[500px] basis-full select-none overflow-hidden border bg-gray-500 text-center text-white"
                    },
                    {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_1, [
                          createBaseVNode(
                            "span",
                            _hoisted_2,
                            toDisplayString(item),
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
              )),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("button", {
                  class: "h-10 w-10 rounded-full bg-gray-300 bg-opacity-50 text-white",
                  onClick: prev
                }, " < ", 8, _hoisted_4),
                createBaseVNode("button", {
                  class: "h-10 w-10 rounded-full bg-gray-300 bg-opacity-50 text-white",
                  onClick: next
                }, " > ", 8, _hoisted_5)
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
          createVNode($setup["Carousel"], { "items-class": "mt-3 overflow-x-auto w-full flex h-[250px]" }, {
            header: withCtx(({ prev, next }) => [
              createBaseVNode("div", _hoisted_6, [
                _cache[0] || (_cache[0] = createBaseVNode(
                  "h2",
                  { class: "text-lg font-bold" },
                  "Top 100 hits",
                  -1
                  /* HOISTED */
                )),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("button", {
                    class: "inline-flex items-center p-1 focus:outline-none",
                    "aria-label": "Previous List",
                    onClick: prev
                  }, " Prev ", 8, _hoisted_8),
                  createBaseVNode("button", {
                    class: "inline-flex items-center p-1 focus:outline-none",
                    "aria-label": "Next List",
                    onClick: next
                  }, " Next ", 8, _hoisted_9)
                ])
              ])
            ]),
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList($setup.items, (item) => {
                  return createVNode(
                    $setup["CarouselItem"],
                    {
                      key: item.title,
                      class: "w-1/3 select-none px-3 md:w-1/4 lg:w-1/5 xl:w-1/6",
                      "items-class": "overflow-x-auto w-full flex"
                    },
                    {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_10, [
                          createBaseVNode("img", {
                            class: "absolute inset-0 h-full w-full",
                            src: item.thumbnail,
                            alt: item.title
                          }, null, 8, _hoisted_11),
                          createCommentVNode(' <span\n                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-red-500"\n              >\n                {{ `${index} - ${activeIndex}` }}\n              </span> ')
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
if (typeof block0 === "function") block0(_sfc_main);
_sfc_main.__file = "components/custom/carousel/Carousel.story.vue";
const Carousel_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/custom/carousel/Carousel.story.vue"]]);
export {
  Carousel_story as default
};
