const resolved__virtual_storySource_componentsTailwindButtonStoryVue = `<template>
  <Story title="Button" :layout="{ type: 'grid', width: '300px' }">
    <Variant title="Pulse">
      <div class="p-4">
        <button
          class="btn-pulse rounded-md bg-blue-400 px-6 py-2 text-sm font-semibold text-white"
        >
          Buy now
        </button>
      </div>
    </Variant>
    <Variant title="Gradient Border">
      <button
        class="btn-disco relative overflow-hidden rounded-md px-8 py-4 will-change-transform"
      >
        <span class="absolute inset-[2px] -z-[1] rounded bg-black"></span>
        <span class="text-neutral-400">Button</span>
      </button>
    </Variant>
    <Variant title="Gradient Shadow">
      <div class="p-14">
        <BaseButton
          class="border-gradient before:transition-animation relative isolate rounded-lg border-2 border-solid border-transparent text-base before:absolute before:-inset-4 before:z-[-1] before:rounded-lg before:bg-gradient-to-r before:from-[#6658fe] before:via-[#9f6afe] before:to-[#b79dfe] before:opacity-0 before:blur-sm hover:before:opacity-75 hover:before:blur-xl"
        >
          Hover me
        </BaseButton>
      </div>
    </Variant>
    <Variant title="Grid Track">
      <div class="p-4">
        <button class="grid-btn">
          <span>
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 10 15"
              >
                <path
                  d="M 10 0 L 10 5 L 5 5 L 0 0 Z M 0 5 L 5 5 L 10 10 L 5 10 L 5 15 L 0 10 Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span>Framer Button</span>
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </span>
        </button>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.btn-pulse {
  animation: pulse 2s infinite;
}

.btn-disco::before {
  content: '';
  @apply absolute inset-0 aspect-square from-purple-700 via-red-500 to-amber-400;
  animation: disco 1.5s linear infinite;
  background-image: conic-gradient(var(--tw-gradient-stops));
  z-index: -1;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 theme('colors.blue.400');
  }
  50% {
    box-shadow: 0 0 0 0 theme('colors.blue.400/50');
  }
  100% {
    box-shadow: 0 0 0 12px theme('colors.blue.400/0');
  }
}
@keyframes disco {
  0% {
    transform: translateY(-25%) scale(2) rotate(0deg);
  }
  100% {
    transform: translateY(-25%) scale(2) rotate(360deg);
  }
}

.border-gradient {
  background: linear-gradient(90deg, #18181b, #18181b),
    linear-gradient(to bottom right, #6171fe, #9f6afe, #b79dfe);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}

.before\\:transition-animation:before {
  transition: opacity 1s ease-in-out, filter 1s ease-in-out;
}

.grid-btn {
  --dark: 0;
  --transition: 0.28s;
  --font-size: 1rem;
  --bg: hsl(0 0% calc((100 - (var(--dark, 0) * 100)) * 1%));
  --color: hsl(0 0% calc(var(--dark) * 100%));

  outline-color: hsl(0 0% calc(var(--dark) * 100%));
  --padding: calc(var(--font-size) * 0.75);
  cursor: pointer;
  letter-spacing: calc(var(--font-size) * 0.02);
  font-family: sans-serif;
  font-weight: bold;
  background: var(--bg);
  font-size: var(--font-size);
  border-radius: calc(var(--font-size) * 0.5);
  border: 4px solid
    hsl(
      0 0% calc((40 + (var(--dark) * 20)) * 1%) /
        calc(0.3 + (var(--hovered, 0) * 0.8))
    );
  color: var(--color);
  position: relative;
  transition: border-color var(--transition);
}

.grid-btn > span {
  background: var(--bg);
  border-radius: calc(var(--font-size) * 0.5);
  padding: calc(var(--font-size) * 0.9) calc(var(--font-size) * 1.36);
  overflow: hidden;
  display: grid;
  grid-template-columns:
    calc((var(--font-size) * 1.75) * (1 - var(--hovered, 0)))
    1fr
    calc((var(--font-size) * 1.75) * var(--hovered, 0));
  align-items: center;
  transition: grid-template-columns var(--transition);
}

.grid-btn:after {
  content: '';
  position: absolute;
  inset: calc(var(--font-size) * -0.025);
  background: hsl(0 0% calc(var(--dark) * 100%) / 0.45);
  filter: blur(calc(var(--font-size) * 0.75));
  scale: var(--hovered, 0);
  z-index: -1;
  transition: scale var(--transition);
}

.grid-btn:hover {
  --hovered: 1;
}

.grid-btn span span:nth-of-type(1) {
  padding-right: var(--padding);
  width: var(--font-size);
}

.grid-btn span span:nth-of-type(3) {
  padding-left: var(--padding);
  width: var(--font-size);
}

.grid-btn svg {
  display: inline-block;
  transition: translate var(--transition) ease-in-out,
    opacity var(--transition) ease-in-out;
}

.grid-btn:is(:focus-visible, :hover) {
  --hovered: 1;
}

.grid-btn span span:nth-of-type(3) svg {
  stroke-width: 3;
  translate: calc((1 - var(--hovered, 0)) * (var(--font-size) * 3)) 8%;
  width: calc(var(--font-size) * 1);
  opacity: var(--hovered, 0);
}

.grid-btn span span:nth-of-type(1) svg {
  stroke-width: 3;
  translate: calc(((var(--hovered, 0) * var(--font-size)) * -3) + 10%) 8%;
  width: calc(var(--font-size) * 0.8);
}
</style>
`;
export {
  resolved__virtual_storySource_componentsTailwindButtonStoryVue as default
};
