import { at as ref, aV as throttle, aT as onMounted, aW as onUpdated, aX as onUnmounted, aD as defineComponent, as as _export_sfc, aw as openBlock, aH as createElementBlock, aG as createBaseVNode, aJ as Fragment, aI as renderList, aO as createTextVNode, aL as toDisplayString, aK as createCommentVNode, aF as createVNode, aY as createStaticVNode, aE as resolveComponent, ax as createBlock, ay as withCtx } from "./vendor-BdBYoA5y.js";
const PAGE_OFFSET = 71;
function useActiveAnchor(container, marker) {
  const isAsideEnabled = ref(true);
  const onScroll = throttle(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const links = [].slice.call(
      container.value.querySelectorAll(".outline-link")
    );
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => {
      return links.some((link) => {
        return link.hash === `#${anchor.id}` && anchor.offsetParent !== null;
      });
    });
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    if (anchors.length && isBottom) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive) {
        activateLink(hash);
        return;
      }
    }
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash !== null) {
      prevActiveLink = container.value.querySelector(
        `a[href="${decodeURIComponent(hash)}"]`
      );
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = `${activeLink.offsetTop}px`;
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAnchorTop(anchor) {
  return anchor.offsetTop - PAGE_OFFSET;
}
function isAnchorActive(index, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index === 0 && scrollTop === 0) {
    console.log(1);
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    console.log(2);
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    console.log(3);
    return [true, `#${anchor.id}`];
  }
  return [false, null];
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  setup(__props, { expose: __expose }) {
    __expose();
    const tocLinks = [
      {
        id: "overview",
        depth: 2,
        text: "Overview",
        children: [
          {
            id: "philosophy",
            depth: 3,
            text: "Philosophy"
          }
        ]
      },
      {
        id: "block-elements",
        depth: 2,
        text: "Block Elements",
        children: [
          {
            id: "paragraphs-and-line-breaks",
            depth: 3,
            text: "Paragraphs and Line Breaks"
          },
          {
            id: "headers",
            depth: 3,
            text: "Headers"
          },
          {
            id: "blockquotes",
            depth: 3,
            text: "Blockquotes"
          }
        ]
      },
      {
        id: "this-is-a-header",
        depth: 2,
        text: "This is a header.",
        children: [
          {
            id: "lists",
            depth: 3,
            text: "Lists"
          },
          {
            id: "code-blocks",
            depth: 3,
            text: "Code Blocks"
          }
        ]
      },
      {
        id: "span-elements",
        depth: 2,
        text: "Span Elements",
        children: [
          {
            id: "links",
            depth: 3,
            text: "Links"
          },
          {
            id: "emphasis",
            depth: 3,
            text: "Emphasis"
          },
          {
            id: "code",
            depth: 3,
            text: "Code"
          }
        ]
      }
    ];
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    const __returned__ = { tocLinks, container, marker };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  ref: "container",
  class: "sidebar fixed right-0 w-[160px] flex-shrink-0"
};
const _hoisted_2$1 = { class: "content sticky top-[120px]" };
const _hoisted_3 = {
  ref: "marker",
  class: "absolute left-0 h-[1em] w-1 rounded bg-green-500 transition-all duration-200"
};
const _hoisted_4 = { class: "ml-0 pl-4" };
const _hoisted_5 = ["id"];
const _hoisted_6 = {
  key: 0,
  class: "my-2 ml-3"
};
const _hoisted_7 = ["id", "href"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "nav",
    _hoisted_1$1,
    [
      createBaseVNode("div", _hoisted_2$1, [
        createBaseVNode(
          "div",
          _hoisted_3,
          null,
          512
          /* NEED_PATCH */
        ),
        createBaseVNode("ul", _hoisted_4, [
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList($setup.tocLinks, ({ id, text, children }) => {
              return createBaseVNode("li", {
                id: `toc-${id}`,
                key: id,
                class: "ml-0 mb-2 cursor-pointer list-none text-sm last:mb-0"
              }, [
                createTextVNode(
                  toDisplayString(text) + " ",
                  1
                  /* TEXT */
                ),
                children ? (openBlock(), createElementBlock("ul", _hoisted_6, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(children, ({ id: childId, text: childText }) => {
                      return openBlock(), createElementBlock("li", { key: childId }, [
                        createBaseVNode("a", {
                          id: `${childId}`,
                          href: `#${childId}`,
                          class: "outline-link ml-0 mb-2 cursor-pointer list-none text-xs last:mb-0"
                        }, toDisplayString(childText), 9, _hoisted_7)
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : createCommentVNode("v-if", true)
              ], 8, _hoisted_5);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ])
    ],
    512
    /* NEED_PATCH */
  );
}
_sfc_main$2.__file = "components/compose/active-anchor/Sidebar.vue";
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "D:/projects/my-components/components/compose/active-anchor/Sidebar.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ActiveAnchor",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { Sidebar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex text-white" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="content pr-40" data-v-d946715a><h1 id="home" class="header-anchor" data-v-d946715a>Home</h1><hr data-v-d946715a><h2 id="overview" class="header-anchor" data-v-d946715a><a href="#overview" data-v-d946715a>Overview</a></h2><h3 id="philosophy" class="header-anchor" data-v-d946715a><a href="#philosophy" data-v-d946715a>Philosophy</a></h3><p data-v-d946715a> Markdown is intended to be as easy-to-read and easy-to-write as is feasible. </p><p data-v-d946715a> Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it&#39;s been marked up with tags or formatting instructions. While Markdown&#39;s syntax has been influenced by several existing text-to-HTML filters -- including <a href="http://docutils.sourceforge.net/mirror/setext.html" rel="nofollow" data-v-d946715a>Setext</a>, <a href="http://www.aaronsw.com/2002/atx/" rel="nofollow" data-v-d946715a>atx</a>, <a href="http://textism.com/tools/textile/" rel="nofollow" data-v-d946715a>Textile</a>, <a href="http://docutils.sourceforge.net/rst.html" rel="nofollow" data-v-d946715a>reStructuredText</a>, <a href="http://www.triptico.com/software/grutatxt.html" rel="nofollow" data-v-d946715a>Grutatext</a>, and <a href="http://ettext.taint.org/doc/" rel="nofollow" data-v-d946715a>EtText</a> -- the single biggest source of inspiration for Markdown&#39;s syntax is the format of plain text email. </p><h2 id="block-elements" class="header-anchor" data-v-d946715a><a href="#block-elements" data-v-d946715a>Block Elements</a></h2><h3 id="paragraphs-and-line-breaks" class="header-anchor" data-v-d946715a><a href="#paragraphs-and-line-breaks" data-v-d946715a>Paragraphs and Line Breaks</a></h3><p data-v-d946715a> A paragraph is simply one or more consecutive lines of text, separated by one or more blank lines. (A blank line is any line that looks like a blank line -- a line containing nothing but spaces or tabs is considered blank.) Normal paragraphs should not be indented with spaces or tabs. </p><p data-v-d946715a> The implication of the &quot;one or more consecutive lines of text&quot; rule is that Markdown supports &quot;hard-wrapped&quot; text paragraphs. This differs significantly from most other text-to-HTML formatters (including Movable Type&#39;s &quot;Convert Line Breaks&quot; option) which translate every line break character in a paragraph into a tag. </p><p data-v-d946715a> When you <em data-v-d946715a>do</em> want to insert a break tag using Markdown, you end a line with two or more spaces, then type return. </p><h3 id="headers" class="header-anchor" data-v-d946715a><a href="#headers" data-v-d946715a>Headers</a></h3><p data-v-d946715a> Markdown supports two styles of headers, <span data-v-d946715a>Setext</span> <span data-v-d946715a>1</span> and <span data-v-d946715a>atx</span> <span data-v-d946715a>2</span>. </p><p data-v-d946715a> Optionally, you may &quot;close&quot; atx-style headers. This is purely cosmetic -- you can use this if you think it looks better. The closing hashes don&#39;t even need to match the number of hashes used to open the header. (The number of opening hashes determines the header level.) </p><h3 id="blockquotes" class="header-anchor" data-v-d946715a><a href="#blockquotes" data-v-d946715a>Blockquotes</a></h3><p data-v-d946715a> Markdown uses email-style characters for blockquoting. If you&#39;re familiar with quoting passages of text in an email message, then you know how to create a blockquote in Markdown. It looks best if you hard wrap the text and put a before every line: </p><blockquote data-v-d946715a><p data-v-d946715a> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. </p><p data-v-d946715a> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing. </p></blockquote><p data-v-d946715a> Markdown allows you to be lazy and only put the before the first line of a hard-wrapped paragraph: </p><blockquote data-v-d946715a><p data-v-d946715a> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. </p></blockquote><blockquote data-v-d946715a><p data-v-d946715a> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing. </p></blockquote><p data-v-d946715a> Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by adding additional levels of : </p><blockquote data-v-d946715a><p data-v-d946715a>This is the first level of quoting.</p><blockquote data-v-d946715a><p data-v-d946715a>This is nested blockquote.</p></blockquote><p data-v-d946715a>Back to the first level.</p></blockquote><p data-v-d946715a> Blockquotes can contain other Markdown elements, including headers, lists, and code blocks: </p><blockquote data-v-d946715a><h2 id="this-is-a-header" class="header-anchor" data-v-d946715a><a href="#this-is-a-header" data-v-d946715a>This is a header.</a></h2><ol data-v-d946715a><li data-v-d946715a>This is the first list item.</li><li data-v-d946715a>This is the second list item.</li></ol><p data-v-d946715a>Here&#39;s some example code:</p><pre data-v-d946715a><code data-v-d946715a>return shell_exec(&quot;echo $input | $markdown_script&quot;);\n  </code></pre></blockquote><p data-v-d946715a> Any decent text editor should make email-style quoting easy. For example, with BBEdit, you can make a selection and choose Increase Quote Level from the Text menu. </p><h3 id="lists" class="header-anchor" data-v-d946715a><a href="#lists" data-v-d946715a>Lists</a></h3><p data-v-d946715a> Markdown supports ordered (numbered) and unordered (bulleted) lists. </p><p data-v-d946715a> Unordered lists use asterisks, pluses, and hyphens -- interchangably -- as list markers: </p><ul data-v-d946715a><li data-v-d946715a>Red</li><li data-v-d946715a>Green</li><li data-v-d946715a>Blue</li></ul><p data-v-d946715a>is equivalent to:</p><ul data-v-d946715a><li data-v-d946715a>Red</li><li data-v-d946715a>Green</li><li data-v-d946715a>Blue</li></ul><p data-v-d946715a>and:</p><ul data-v-d946715a><li data-v-d946715a>Red</li><li data-v-d946715a>Green</li><li data-v-d946715a>Blue</li></ul><p data-v-d946715a>Ordered lists use numbers followed by periods:</p><ol data-v-d946715a><li data-v-d946715a>Bird</li><li data-v-d946715a>McHale</li><li data-v-d946715a>Parish</li></ol><p data-v-d946715a> It&#39;s important to note that the actual numbers you use to mark the list have no effect on the HTML output Markdown produces. The HTML Markdown produces from the above list is: </p><p data-v-d946715a>If you instead wrote the list in Markdown like this:</p><ol data-v-d946715a><li data-v-d946715a>Bird</li><li data-v-d946715a>McHale</li><li data-v-d946715a>Parish</li></ol><p data-v-d946715a>or even:</p><ol start="3" data-v-d946715a><li data-v-d946715a>Bird</li><li data-v-d946715a>McHale</li><li data-v-d946715a>Parish</li></ol><p data-v-d946715a> you&#39;d get the exact same HTML output. The point is, if you want to, you can use ordinal numbers in your ordered Markdown lists, so that the numbers in your source match the numbers in your published HTML. But if you want to be lazy, you don&#39;t have to. </p><p data-v-d946715a>To make lists look nice, you can wrap items with hanging indents:</p><ul data-v-d946715a><li data-v-d946715a> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. </li><li data-v-d946715a> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing. </li></ul><p data-v-d946715a>But if you want to be lazy, you don&#39;t have to:</p><ul data-v-d946715a><li data-v-d946715a> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. </li><li data-v-d946715a> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing. </li></ul><p data-v-d946715a> List items may consist of multiple paragraphs. Each subsequent paragraph in a list item must be indented by either 4 spaces or one tab: </p><ol data-v-d946715a><li data-v-d946715a> This is a list item with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.<br data-v-d946715a>Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. </li><li data-v-d946715a>Suspendisse id sem consectetuer libero luctus adipiscing.</li></ol><p data-v-d946715a> It looks nice if you indent every line of the subsequent paragraphs, but here again, Markdown will allow you to be lazy: </p><ul data-v-d946715a><li data-v-d946715a> This is a list item with two paragraphs. <pre data-v-d946715a><code data-v-d946715a>This is the second paragraph in the list item. You&#39;re\n  </code></pre><br data-v-d946715a>only required to indent the first line. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </li><li data-v-d946715a>Another item in the same list.</li></ul><p data-v-d946715a> To put a blockquote within a list item, the blockquote&#39;s delimiters need to be indented: </p><ul data-v-d946715a><li data-v-d946715a> A list item with a blockquote: <blockquote data-v-d946715a><p data-v-d946715a>This is a blockquote inside a list item.</p></blockquote></li></ul><p data-v-d946715a> To put a code block within a list item, the code block needs to be indented <em data-v-d946715a>twice</em> -- 8 spaces or two tabs: </p><ul data-v-d946715a><li data-v-d946715a> A list item with a code block: <pre data-v-d946715a><code data-v-d946715a>&lt;code goes here&gt;\n  </code></pre></li></ul><h3 id="code-blocks" class="header-anchor" data-v-d946715a><a href="#code-blocks" data-v-d946715a>Code Blocks</a></h3><p data-v-d946715a> Pre-formatted code blocks are used for writing about programming or markup source code. Rather than forming normal paragraphs, the lines of a code block are interpreted literally. Markdown wraps a code block in both <code data-v-d946715a>&lt;pre&gt;</code> and <code data-v-d946715a>&lt;code&gt;</code> tags. </p><p data-v-d946715a> To produce a code block in Markdown, simply indent every line of the block by at least 4 spaces or 1 tab. </p><p data-v-d946715a>This is a normal paragraph:</p><pre data-v-d946715a><code data-v-d946715a>This is a code block.\n  </code></pre><p data-v-d946715a>Here is an example of AppleScript:</p><pre data-v-d946715a><code data-v-d946715a>tell application &quot;Foo&quot;\n      beep\n  end tell\n  </code></pre><p data-v-d946715a> A code block continues until it reaches a line that is not indented (or the end of the article). </p><p data-v-d946715a> Within a code block, ampersands (<code data-v-d946715a>&amp;</code>) and angle brackets (<code data-v-d946715a>&lt;</code> and ) are automatically converted into HTML entities. This makes it very easy to include example HTML source code using Markdown -- just paste it and indent it, and Markdown will handle the hassle of encoding the ampersands and angle brackets. For example, this: </p><pre data-v-d946715a><code data-v-d946715a>&lt;div class=&quot;footer&quot;&gt;\n      &amp;copy; 2004 Foo Corporation\n  &lt;/div&gt;\n  </code></pre><p data-v-d946715a> Regular Markdown syntax is not processed within code blocks. E.g., asterisks are just literal asterisks within a code block. This means it&#39;s also easy to use Markdown to write about Markdown&#39;s own syntax. </p><pre data-v-d946715a><code data-v-d946715a>tell application &quot;Foo&quot;\n      beep\n  end tell\n  </code></pre><h2 id="span-elements" class="header-anchor" data-v-d946715a><a href="#span-elements" data-v-d946715a>Span Elements</a></h2><h3 id="links" class="header-anchor" data-v-d946715a><a href="#links" data-v-d946715a>Links</a></h3><p data-v-d946715a> Markdown supports two style of links: <em data-v-d946715a>inline</em> and <em data-v-d946715a>reference</em>. </p><p data-v-d946715a> In both styles, the link text is delimited by <span data-v-d946715a>square brackets</span>. </p><p data-v-d946715a> To create an inline link, use a set of regular parentheses immediately after the link text&#39;s closing square bracket. Inside the parentheses, put the URL where you want the link to point, along with an <em data-v-d946715a>optional</em> title for the link, surrounded in quotes. For example: </p><p data-v-d946715a> This is <a href="http://example.com/" rel="nofollow" data-v-d946715a>an example</a> inline link. </p><p data-v-d946715a><a href="http://example.net/" rel="nofollow" data-v-d946715a>This link</a> has no title attribute. </p><h3 id="emphasis" class="header-anchor" data-v-d946715a><a href="#emphasis" data-v-d946715a>Emphasis</a></h3><p data-v-d946715a> Markdown treats asterisks (<code data-v-d946715a>*</code>) and underscores (<code data-v-d946715a>_</code>) as indicators of emphasis. Text wrapped with one <code data-v-d946715a>*</code> or <code data-v-d946715a>_</code> will be wrapped with an HTML <code data-v-d946715a>&lt;em&gt;</code> tag; double <code data-v-d946715a>*</code>&#39;s or <code data-v-d946715a>_</code>&#39;s will be wrapped with an HTML <code data-v-d946715a>&lt;strong&gt;</code> tag. E.g., this input: </p><p data-v-d946715a><em data-v-d946715a>single asterisks</em></p><p data-v-d946715a><em data-v-d946715a>single underscores</em></p><p data-v-d946715a><strong data-v-d946715a>double asterisks</strong></p><p data-v-d946715a><strong data-v-d946715a>double underscores</strong></p><h3 id="code" class="header-anchor" data-v-d946715a><a href="#code" data-v-d946715a>Code</a></h3><p data-v-d946715a> To indicate a span of code, wrap it with backtick quotes (<code data-v-d946715a>`</code>). Unlike a pre-formatted code block, a code span indicates code within a normal paragraph. For example: </p><p data-v-d946715a> Use the <code data-v-d946715a>printf()</code> function. </p></div>', 1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode($setup["Sidebar"])
  ]);
}
_sfc_main$1.__file = "components/compose/active-anchor/ActiveAnchor.vue";
const ActiveAnchor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-d946715a"], ["__file", "D:/projects/my-components/components/compose/active-anchor/ActiveAnchor.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { ActiveAnchor };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "useActiveAnchor" }, {
    default: withCtx(() => [
      createVNode($setup["ActiveAnchor"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/compose/active-anchor/index.story.vue";
const index_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/projects/my-components/components/compose/active-anchor/index.story.vue"]]);
export {
  index_story as default
};
