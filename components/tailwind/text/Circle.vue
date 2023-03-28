<template>
  <div class="font-bold">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
    >
      <defs>
        <clipPath id="imageClipPath">
          <circle cx="250" cy="250" r="120.05" fill="#FFFFFF" />
        </clipPath>
        <path
          id="textcircle1"
          class="origin-center scale-[1.02]"
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
        ></path>
        <path
          id="textcircle2"
          class="origin-center scale-[1.17]"
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
        ></path>
      </defs>
      <linearGradient id="text-gradient" x1="0" y1="0" x2="100%" y2="100%">
        <stop stop-color="#42d392" offset="10%" />
        <stop stop-color="#647eff" offset="90%" />
      </linearGradient>
      <text
        class="origin-center animate-spin text-2xl tracking-widest"
        style="animation-duration: 30s"
        dy="70"
        textLength="1220"
        fill="url(#text-gradient)"
      >
        <textPath xlink:href="#textcircle1">
          Minh Anh Nguyen • Front-End Developer •
        </textPath>
      </text>
      <text
        class="gradient-text origin-center animate-spin text-2xl tracking-widest opacity-90"
        style="animation-duration: 25s; animation-direction: reverse"
        dy="70"
        textLength="1220"
        fill="url(#text-gradient)"
        clip-path="url(#textcircle2)"
      >
        <textPath xlink:href="#textcircle2">
          HTML5 • CSS3 • TAILWINDCSS • TYPECRIPT • VUE • NUXT • VITEST •
        </textPath>
      </text>
      <image
        href="https://avatars.githubusercontent.com/u/20680172?v=4"
        clip-path="url(#imageClipPath)"
        width="240"
        height="240"
        x="130"
        y="130"
      />
    </svg>
  </div>
</template>
