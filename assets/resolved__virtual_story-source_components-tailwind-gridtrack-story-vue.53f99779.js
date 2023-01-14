const __resolved__virtual_storySource_componentsTailwindGridtrackStoryVue = `<script lang="ts" setup>
const story = 'div'
const variant = 'div'
<\/script>

<template>
  <Story
    :is="story"
    title="Grid Track"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant :is="variant" title="Left to right">
      <div class="avatars">
        <a href="https://twitter.com/bramus/" title="Bramus on Twitter"
          ><img
            alt="Profile image for Bramus"
            class="avatar"
            decoding="async"
            height="96"
            loading="lazy"
            sizes="(min-width: 96px) 96px, calc(100vw - 48px)"
            src="https://web-dev.imgix.net/image/AeNB0cHNDkYPUYzDuv8gInYA9rY2/CQMqvg5UkY4weDnJij3b.jpeg?auto=format"
            width="96"
        /></a>
        <a href="https://twitter.com/jh3yy/" title="Jhey on Twitter"
          ><img
            alt="Profile image for Jhey Tompkins"
            class="avatar"
            decoding="async"
            height="96"
            loading="lazy"
            sizes="(min-width: 96px) 96px, calc(100vw - 48px)"
            src="https://web-dev.imgix.net/image/Dyx9FwYgMyNqy1kMGx8Orz6q0qC3/JjwUlxDMTmjyFEvBC8wG.jpeg?auto=format"
            width="96"
        /></a>
        <a href="https://twitter.com/una/" title="Una on Twitter"
          ><img
            alt="Profile image for Una Kravets"
            class="avatar"
            decoding="async"
            height="96"
            loading="lazy"
            sizes="(min-width: 96px) 96px, calc(100vw - 48px)"
            src="https://web-dev.imgix.net/image/admin/c4bzyDkOZ9MhBaqp0HfW.jpg?auto=format"
            width="96"
        /></a>
        <a href="https://twitter.com/argyleink/" title="Adam on Twitter"
          ><img
            alt="Profile image for Adam Argyle"
            class="avatar"
            decoding="async"
            height="96"
            loading="lazy"
            sizes="(min-width: 96px) 96px, calc(100vw - 48px)"
            src="https://web-dev.imgix.net/image/admin/jdQIxAJrGuFOtwmuDfIn.jpg?auto=format"
            width="96"
        /></a>
      </div>
    </Variant>
    <Variant :is="variant" title="Right to left">
      <div class="bg-[#030507] py-2 px-4">
        <ul class="track-list" style="--count: 4">
          <li style="--index: 1" class="track-item">
            <button class="track-btn">
              <span> Socials</span>
            </button>
          </li>
          <li style="--index: 2" class="track-item">
            <button class="track-btn">
              <span> Twitter </span>
            </button>
          </li>
          <li style="--index: 3" class="track-item">
            <button class="track-btn">
              <span> Mastodon </span>
            </button>
          </li>
          <li style="--index: 4" class="track-item">
            <button class="track-btn">
              <span> CodePen </span>
            </button>
          </li>
        </ul>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.avatars {
  --gap: 0.35em;
  --avatar-size: 5em;
  --overlap-size: 2em;
  /* Best to keep lower than --avatar-size so that there is still some overlap on hover */
  --hover-overlap-size: 4em;
  --border-size: 0.4em;
  /* Value is automatically updated based on the number of children. See :has() below. Does not work in Firefox though. */
  --num-children: 4;
  --num-children-1: calc(var(--num-children) - 1);

  background: var(--color-avatars-background);
  border-radius: var(--avatar-size);

  display: grid;
  gap: var(--gap);
  padding: var(--gap);
  margin: 0 auto;

  grid-auto-flow: column;
  grid-template-columns: repeat(
    var(--num-children),
    var(--grid-cell-size-to-use)
  );
  /* 	grid-auto-columns: var(--grid-cell-size-to-use); */
  width: calc(
    var(--grid-cell-size-to-use) * var(--num-children-1) + var(--gap) *
      var(--num-children) + var(--avatar-size) + var(--border-size)
  );
  transition: all ease-in-out 0.25s;

  border: calc(var(--border-size) / 2) solid rgb(0 0 0 / 0.3);
}

.avatars {
  --grid-cell-size-to-use: var(--overlap-size);
}

:is( /* Wrapped in an :is() to not break Firefox which does not support :has() */
  .avatars:hover,
  .avatars:not(hover):has(> :focus) /* Also grow when tabbing into the list */
) {
  --grid-cell-size-to-use: var(--hover-overlap-size, var(--avatar-size));
}

.avatars > * {
  width: var(--avatar-size);
  aspect-ratio: 1;
  height: auto;

  clip-path: circle(calc(var(--avatar-size) / 2 + var(--border-size) * 2));
  outline: none;
}

.avatars img {
  width: 100%;
  height: auto;

  --border-color: var(--color-core-primary);
  outline: var(--border-size) solid var(--border-color);
  outline-offset: calc(
    var(--border-size) * -2 + 1px
  ); /* 1px extra to cater for rounding errors */

  border: var(--border-size) solid var(--color-avatars-background);
  border-radius: var(--avatar-size);

  transition: all ease-in-out 0.15s;
}

.avatars :is(:hover, :focus) > img {
  --border-color: var(--color-core-tertiary);
  scale: 1.1;
}

/* Update --num-children based on the number of children .avatars has */
.avatars:where(:has(> *:nth-of-type(1):last-child)) {
  --num-children: 1;
}
.avatars:where(:has(> *:nth-of-type(2):last-child)) {
  --num-children: 2;
}
.avatars:where(:has(> *:nth-of-type(3):last-child)) {
  --num-children: 3;
}
.avatars:where(:has(> *:nth-of-type(4):last-child)) {
  --num-children: 4;
}
.avatars:where(:has(> *:nth-of-type(5):last-child)) {
  --num-children: 5;
}

.track-list {
  padding: 0;
  display: inline-grid;
  grid-auto-flow: column;
  list-style-type: none;
  grid-template-columns: auto repeat(3, calc((var(--active, 0) * 130px) + 10px));
  transition: grid-template-columns 0.35s cubic-bezier(0.5, 0.75, 0.75, 1.25);
}

.track-list:is(:focus-within, :hover) {
  --active: 1;
}

.track-item {
  display: grid;
  justify-content: end;
  z-index: calc(var(--count) - var(--index));
}

.track-btn {
  background: hsl(0 0% 60% / 0.18);
  @apply inline-block rounded-full px-5 py-2 backdrop-blur-2xl;
  transition: color 0.2s, background 0.2s;
  color: #f8f9fa;
}

/* li:is(:nth-of-type(2), :nth-of-type(3), :nth-of-type(4)) */
.track-item:not(:nth-of-type(1)) .track-btn:is(:hover, :focus) {
  /* @apply bg-slate-100 text-gray-500; */
  background-color: #f8f9fa;
  color: #030507;
}

.track-item:not(:nth-of-type(1)) span {
  opacity: var(--active, 0);
}
</style>
`;
export {
  __resolved__virtual_storySource_componentsTailwindGridtrackStoryVue as default
};
