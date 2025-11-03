const resolved__virtual_storySource_componentsTailwindGridtrackStoryVue = `<script lang="ts" setup>
// https://play.tailwindcss.com/PsQQVdkd5t
const story = 'Story'
const variant = 'Variant'

const data = [
  {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160',
    name: 'Bramus',
    link: 'https://x.com/bramus/',
  },
  {
    src: 'https://images.unsplash.com/photo-1524159730786-4e74a1b78d7d?w=160',
    name: 'Jhey Tompkins',
    link: 'https://x.com/jh3yy/',
  },
  {
    src: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=160',
    name: 'Una Kravets',
    link: 'https://x.com/una/',
  },
  {
    src: 'https://images.unsplash.com/photo-1542596594-649edbc13630?w=160',
    name: 'Adam Argyle',
    link: 'https://x.com/argyleink/',
  },
]
<\/script>

<template>
  <component
    :is="story"
    title="Grid Track"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <component :is="variant" title="Left to right">
      <div
        class="avatars"
        style="
          --color-core-primary: #3740ff;
          --color-core-tertiary: #6001ff;
          --color-core-bg: #fff;
          --color-avatars-background: #f8f9fa;
        "
      >
        <a
          v-for="item in data"
          :key="item.link"
          :href="item.link"
          :title="\`\${item.name} on Twitter\`"
          ><img
            :alt="\`Profile image for \${item.name}\`"
            class="avatar"
            decoding="async"
            height="96"
            loading="lazy"
            sizes="(min-width: 96px) 96px, calc(100vw - 48px)"
            :src="item.src"
            width="96"
        /></a>
      </div>
    </component>
    <component :is="variant" title="Right to left">
      <div class="bg-[#030507] px-4 py-2">
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
    </component>
  </component>
</template>

<style scoped>
.avatars {
  --gap: 0.35em;
  --avatar-size: 5em;
  --overlap-size: 2em;
  --hover-overlap-size: 4em;
  /* Best to keep lower than --avatar-size so that there is still some overlap on hover */
  --border-size: 0.4em;
  --num-children: 4;
  /* Value is automatically updated based on the number of children. See :has() below. Does not work in Firefox though. */
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

:is(
  /* Wrapped in an :is() to not break Firefox which does not support :has() */
  .avatars:hover,
  .avatars:not(hover):has(> :focus)

  /* Also grow when tabbing into the list */
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
  object-fit: cover;
  aspect-ratio: 1/1;

  --border-color: var(--color-core-primary);
  outline: var(--border-size) solid var(--border-color);
  outline-offset: calc(var(--border-size) * -2 + 1px);
  /* 1px extra to cater for rounding errors */

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
  transition:
    color 0.2s,
    background 0.2s;
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
  resolved__virtual_storySource_componentsTailwindGridtrackStoryVue as default
};
