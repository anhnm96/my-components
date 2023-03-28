<script setup lang="ts">
import Sidebar from './Sidebar.vue'
</script>

<template>
  <div class="flex text-white">
    <div class="content pr-40">
      <h1 id="home" class="header-anchor">Home</h1>
      <hr />
      <h2 id="overview" class="header-anchor">
        <a href="#overview">Overview</a>
      </h2>
      <h3 id="philosophy" class="header-anchor">
        <a href="#philosophy">Philosophy</a>
      </h3>
      <p>
        Markdown is intended to be as easy-to-read and easy-to-write as is
        feasible.
      </p>
      <p>
        Readability, however, is emphasized above all else. A Markdown-formatted
        document should be publishable as-is, as plain text, without looking
        like it's been marked up with tags or formatting instructions. While
        Markdown's syntax has been influenced by several existing text-to-HTML
        filters -- including
        <a
          href="http://docutils.sourceforge.net/mirror/setext.html"
          rel="nofollow"
          >Setext</a
        >, <a href="http://www.aaronsw.com/2002/atx/" rel="nofollow">atx</a>,
        <a href="http://textism.com/tools/textile/" rel="nofollow">Textile</a>,
        <a href="http://docutils.sourceforge.net/rst.html" rel="nofollow"
          >reStructuredText</a
        >,
        <a href="http://www.triptico.com/software/grutatxt.html" rel="nofollow"
          >Grutatext</a
        >, and
        <a href="http://ettext.taint.org/doc/" rel="nofollow">EtText</a>
        -- the single biggest source of inspiration for Markdown's syntax is the
        format of plain text email.
      </p>
      <h2 id="block-elements" class="header-anchor">
        <a href="#block-elements">Block Elements</a>
      </h2>
      <h3 id="paragraphs-and-line-breaks" class="header-anchor">
        <a href="#paragraphs-and-line-breaks">Paragraphs and Line Breaks</a>
      </h3>
      <p>
        A paragraph is simply one or more consecutive lines of text, separated
        by one or more blank lines. (A blank line is any line that looks like a
        blank line -- a line containing nothing but spaces or tabs is considered
        blank.) Normal paragraphs should not be indented with spaces or tabs.
      </p>
      <p>
        The implication of the "one or more consecutive lines of text" rule is
        that Markdown supports "hard-wrapped" text paragraphs. This differs
        significantly from most other text-to-HTML formatters (including Movable
        Type's "Convert Line Breaks" option) which translate every line break
        character in a paragraph into a tag.
      </p>
      <p>
        When you <em>do</em> want to insert a break tag using Markdown, you end
        a line with two or more spaces, then type return.
      </p>
      <h3 id="headers" class="header-anchor">
        <a href="#headers">Headers</a>
      </h3>
      <p>
        Markdown supports two styles of headers,
        <span>Setext</span> <span>1</span> and <span>atx</span> <span>2</span>.
      </p>
      <p>
        Optionally, you may "close" atx-style headers. This is purely cosmetic
        -- you can use this if you think it looks better. The closing hashes
        don't even need to match the number of hashes used to open the header.
        (The number of opening hashes determines the header level.)
      </p>
      <h3 id="blockquotes" class="header-anchor">
        <a href="#blockquotes">Blockquotes</a>
      </h3>
      <p>
        Markdown uses email-style characters for blockquoting. If you're
        familiar with quoting passages of text in an email message, then you
        know how to create a blockquote in Markdown. It looks best if you hard
        wrap the text and put a before every line:
      </p>
      <blockquote>
        <p>
          This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
          Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
        </p>
        <p>
          Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
          id sem consectetuer libero luctus adipiscing.
        </p>
      </blockquote>
      <p>
        Markdown allows you to be lazy and only put the before the first line of
        a hard-wrapped paragraph:
      </p>
      <blockquote>
        <p>
          This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
          Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
        </p>
      </blockquote>
      <blockquote>
        <p>
          Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
          id sem consectetuer libero luctus adipiscing.
        </p>
      </blockquote>
      <p>
        Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by adding
        additional levels of :
      </p>
      <blockquote>
        <p>This is the first level of quoting.</p>
        <blockquote>
          <p>This is nested blockquote.</p>
        </blockquote>
        <p>Back to the first level.</p>
      </blockquote>
      <p>
        Blockquotes can contain other Markdown elements, including headers,
        lists, and code blocks:
      </p>
      <blockquote>
        <h2 id="this-is-a-header" class="header-anchor">
          <a href="#this-is-a-header">This is a header.</a>
        </h2>
        <ol>
          <li>This is the first list item.</li>
          <li>This is the second list item.</li>
        </ol>
        <p>Here's some example code:</p>

        <pre><code>return shell_exec("echo $input | $markdown_script");
  </code></pre>
      </blockquote>
      <p>
        Any decent text editor should make email-style quoting easy. For
        example, with BBEdit, you can make a selection and choose Increase Quote
        Level from the Text menu.
      </p>
      <h3 id="lists" class="header-anchor">
        <a href="#lists">Lists</a>
      </h3>
      <p>
        Markdown supports ordered (numbered) and unordered (bulleted) lists.
      </p>
      <p>
        Unordered lists use asterisks, pluses, and hyphens -- interchangably --
        as list markers:
      </p>
      <ul>
        <li>Red</li>
        <li>Green</li>
        <li>Blue</li>
      </ul>
      <p>is equivalent to:</p>
      <ul>
        <li>Red</li>
        <li>Green</li>
        <li>Blue</li>
      </ul>
      <p>and:</p>
      <ul>
        <li>Red</li>
        <li>Green</li>
        <li>Blue</li>
      </ul>
      <p>Ordered lists use numbers followed by periods:</p>
      <ol>
        <li>Bird</li>
        <li>McHale</li>
        <li>Parish</li>
      </ol>
      <p>
        It's important to note that the actual numbers you use to mark the list
        have no effect on the HTML output Markdown produces. The HTML Markdown
        produces from the above list is:
      </p>
      <p>If you instead wrote the list in Markdown like this:</p>
      <ol>
        <li>Bird</li>
        <li>McHale</li>
        <li>Parish</li>
      </ol>
      <p>or even:</p>
      <ol start="3">
        <li>Bird</li>
        <li>McHale</li>
        <li>Parish</li>
      </ol>
      <p>
        you'd get the exact same HTML output. The point is, if you want to, you
        can use ordinal numbers in your ordered Markdown lists, so that the
        numbers in your source match the numbers in your published HTML. But if
        you want to be lazy, you don't have to.
      </p>
      <p>To make lists look nice, you can wrap items with hanging indents:</p>
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
          hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec,
          fringilla in, laoreet vitae, risus.
        </li>
        <li>
          Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
          id sem consectetuer libero luctus adipiscing.
        </li>
      </ul>
      <p>But if you want to be lazy, you don't have to:</p>
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
          hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec,
          fringilla in, laoreet vitae, risus.
        </li>
        <li>
          Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
          id sem consectetuer libero luctus adipiscing.
        </li>
      </ul>
      <p>
        List items may consist of multiple paragraphs. Each subsequent paragraph
        in a list item must be indented by either 4 spaces or one tab:
      </p>
      <ol>
        <li>
          This is a list item with two paragraphs. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.<br />Vestibulum
          enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit
          amet nisl. Aliquam semper ipsum sit amet velit.
        </li>
        <li>Suspendisse id sem consectetuer libero luctus adipiscing.</li>
      </ol>
      <p>
        It looks nice if you indent every line of the subsequent paragraphs, but
        here again, Markdown will allow you to be lazy:
      </p>
      <ul>
        <li>
          This is a list item with two paragraphs.
          <pre><code>This is the second paragraph in the list item. You're
  </code></pre>
          <br />only required to indent the first line. Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit.
        </li>
        <li>Another item in the same list.</li>
      </ul>
      <p>
        To put a blockquote within a list item, the blockquote's delimiters need
        to be indented:
      </p>
      <ul>
        <li>
          A list item with a blockquote:
          <blockquote>
            <p>This is a blockquote inside a list item.</p>
          </blockquote>
        </li>
      </ul>
      <p>
        To put a code block within a list item, the code block needs to be
        indented <em>twice</em> -- 8 spaces or two tabs:
      </p>
      <ul>
        <li>
          A list item with a code block:
          <pre><code>&lt;code goes here&gt;
  </code></pre>
        </li>
      </ul>
      <h3 id="code-blocks" class="header-anchor">
        <a href="#code-blocks">Code Blocks</a>
      </h3>
      <p>
        Pre-formatted code blocks are used for writing about programming or
        markup source code. Rather than forming normal paragraphs, the lines of
        a code block are interpreted literally. Markdown wraps a code block in
        both
        <code>&lt;pre&gt;</code> and <code>&lt;code&gt;</code> tags.
      </p>
      <p>
        To produce a code block in Markdown, simply indent every line of the
        block by at least 4 spaces or 1 tab.
      </p>
      <p>This is a normal paragraph:</p>

      <pre><code>This is a code block.
  </code></pre>

      <p>Here is an example of AppleScript:</p>

      <pre><code>tell application "Foo"
      beep
  end tell
  </code></pre>

      <p>
        A code block continues until it reaches a line that is not indented (or
        the end of the article).
      </p>
      <p>
        Within a code block, ampersands (<code>&amp;</code>) and angle brackets
        (<code>&lt;</code> and ) are automatically converted into HTML entities.
        This makes it very easy to include example HTML source code using
        Markdown -- just paste it and indent it, and Markdown will handle the
        hassle of encoding the ampersands and angle brackets. For example, this:
      </p>

      <pre><code>&lt;div class="footer"&gt;
      &amp;copy; 2004 Foo Corporation
  &lt;/div&gt;
  </code></pre>

      <p>
        Regular Markdown syntax is not processed within code blocks. E.g.,
        asterisks are just literal asterisks within a code block. This means
        it's also easy to use Markdown to write about Markdown's own syntax.
      </p>

      <pre><code>tell application "Foo"
      beep
  end tell
  </code></pre>

      <h2 id="span-elements" class="header-anchor">
        <a href="#span-elements">Span Elements</a>
      </h2>
      <h3 id="links" class="header-anchor">
        <a href="#links">Links</a>
      </h3>
      <p>
        Markdown supports two style of links:
        <em>inline</em> and <em>reference</em>.
      </p>
      <p>
        In both styles, the link text is delimited by
        <span>square brackets</span>.
      </p>
      <p>
        To create an inline link, use a set of regular parentheses immediately
        after the link text's closing square bracket. Inside the parentheses,
        put the URL where you want the link to point, along with an
        <em>optional</em> title for the link, surrounded in quotes. For example:
      </p>
      <p>
        This is
        <a href="http://example.com/" rel="nofollow">an example</a>
        inline link.
      </p>
      <p>
        <a href="http://example.net/" rel="nofollow">This link</a>
        has no title attribute.
      </p>
      <h3 id="emphasis" class="header-anchor">
        <a href="#emphasis">Emphasis</a>
      </h3>
      <p>
        Markdown treats asterisks (<code>*</code>) and underscores
        (<code>_</code>) as indicators of emphasis. Text wrapped with one
        <code>*</code> or <code>_</code> will be wrapped with an HTML
        <code>&lt;em&gt;</code> tag; double <code>*</code>'s or <code>_</code>'s
        will be wrapped with an HTML <code>&lt;strong&gt;</code> tag. E.g., this
        input:
      </p>
      <p>
        <em>single asterisks</em>
      </p>
      <p>
        <em>single underscores</em>
      </p>
      <p>
        <strong>double asterisks</strong>
      </p>
      <p>
        <strong>double underscores</strong>
      </p>
      <h3 id="code" class="header-anchor">
        <a href="#code">Code</a>
      </h3>
      <p>
        To indicate a span of code, wrap it with backtick quotes
        (<code>`</code>). Unlike a pre-formatted code block, a code span
        indicates code within a normal paragraph. For example:
      </p>
      <p>
        Use the
        <code>printf()</code> function.
      </p>
    </div>
    <Sidebar />
  </div>
</template>

<style scoped>
h1 {
  @apply mt-10 mb-16 text-5xl;
}

h2 {
  @apply mt-2 mb-4 text-4xl;
}

h3 {
  @apply text-2xl;
}

h1,
h2,
h3 {
  @apply font-bold;
}
</style>
