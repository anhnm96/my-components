<script setup lang="ts">
let index = 0
const interval = 1000

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const animate = (star: HTMLSpanElement) => {
  star.style.setProperty('--star-left', `${rand(-10, 100)}%`)
  star.style.setProperty('--star-top', `${rand(-40, 80)}%`)

  star.style.animation = 'none'
  // force dom reflow
  // eslint-disable-next-line no-unused-expressions
  star.offsetHeight
  star.style.animation = ''
}

onMounted(() => {
  for (const star of document.getElementsByClassName('magic-star')) {
    setTimeout(() => {
      animate(star as HTMLSpanElement)

      setInterval(() => animate(star as HTMLSpanElement), 1000)
    }, index++ * (interval / 3))
  }
})
</script>

<template>
  <h1 class="bg-black">
    Sometimes I'll start a line of code and I
    <span class="magic">
      <span class="magic-star">
        <svg viewBox="0 0 512 512">
          <path
            d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
          />
        </svg>
      </span>
      <span class="magic-star">
        <svg viewBox="0 0 512 512">
          <path
            d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
          />
        </svg>
      </span>
      <span class="magic-star">
        <svg viewBox="0 0 512 512">
          <path
            d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
          />
        </svg>
      </span>
      <span class="magic-text">don't even know</span>
    </span>
    where it's going.
  </h1>
</template>

<style scoped>
@keyframes background-pan {
  from {
    background-position: 0% center;
  }

  to {
    background-position: -200% center;
  }
}

@keyframes scale {
  from,
  to {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
}

h1 {
  --purple: rgb(123, 31, 162);
  --violet: rgb(103, 58, 183);
  --pink: rgb(244, 143, 177);

  color: white;
  font-family: 'Rubik', sans-serif;
  font-size: clamp(2em, 2vw, 4em);
  font-weight: 400;
  margin: 0px;
  padding: 20px;
  text-align: center;
}

h1 > .magic {
  display: inline-block;
  position: relative;
}

h1 > .magic > .magic-star {
  --size: clamp(20px, 1.5vw, 30px);

  animation: scale 700ms ease forwards;
  display: block;
  height: var(--size);
  left: var(--star-left);
  position: absolute;
  top: var(--star-top);
  width: var(--size);
}

h1 > .magic > .magic-star > svg {
  animation: rotate 1000ms linear infinite;
  display: block;
  opacity: 0.7;
}

h1 > .magic > .magic-star > svg > path {
  fill: var(--violet);
}

h1 > .magic > .magic-text {
  animation: background-pan 3s linear infinite;
  background: linear-gradient(
    to right,
    var(--purple),
    var(--violet),
    var(--pink),
    var(--purple)
  );
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}

/* -- YouTube Link Styles -- */

#source-link {
  top: 60px;
}

#source-link > i {
  color: rgb(94, 106, 210);
}

#yt-link {
  top: 10px;
}

#yt-link > i {
  color: rgb(239, 83, 80);
}

.meta-link {
  align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: inline-flex;
  gap: 5px;
  left: 10px;
  padding: 10px 20px;
  position: fixed;
  text-decoration: none;
  transition: background-color 600ms, border-color 600ms;
  z-index: 10000;
}

.meta-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.meta-link > i,
.meta-link > span {
  height: 20px;
  line-height: 20px;
}

.meta-link > span {
  color: white;
  font-family: 'Rubik', sans-serif;
  transition: color 600ms;
}
</style>
