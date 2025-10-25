const resolved__virtual_storySource_componentsTailwindTextTextStoryVue = `<script lang="ts" setup>
import SlideUp from './SlideUp.vue'
import Magic from './Magic.vue'
import Rotate from './Rotate.vue'
import Circle from './Circle.vue'
import Typewriter from './Typewriter.vue'
import ShadowGlow from './ShadowGlow.vue'
<\/script>

<template>
  <Story title="Text">
    <Variant title="Gradient">
      <p
        style="--color-one: #42d392; --color-two: #647eff"
        class="gradient-text py-2 text-5xl font-bold"
      >
        The Progressive JavaScript Framework
      </p>
    </Variant>
    <Variant title="Animated Gradient">
      <p
        style="
          --animated-gradient-color-one: #42d392;
          --animated-gradient-color-two: #647eff;
          background-clip: text;
        "
        class="animated-gradient-text-demo py-2 text-5xl font-bold"
      >
        The Progressive JavaScript Framework
      </p>
    </Variant>
    <Variant title="Shadow Glow">
      <ShadowGlow />
    </Variant>
    <Variant title="Slide Up">
      <SlideUp />
    </Variant>
    <Variant title="Magic">
      <Magic />
    </Variant>
    <Variant title="Rotate">
      <div class="py-2">
        <Rotate />
      </div>
    </Variant>
    <Variant title="Circle">
      <Circle />
    </Variant>
    <Variant title="Typewriter">
      <Typewriter
        text="Hello, my name is Kevin."
        class="text-xl font-semibold text-white"
      />
    </Variant>
  </Story>
</template>

<style>
/* animated gradient text */
.animated-gradient-text-demo {
  --bg-size: 400%;
  --color-one: var(--animated-gradient-color-one);
  --color-two: var(--animated-gradient-color-two);
  background: linear-gradient(
      90deg,
      var(--color-one),
      var(--color-two),
      var(--color-one)
    )
    0 0 / 400% 100%;
  animation: move-bg 8s infinite linear;
  color: transparent;
  background-clip: text;
}

@keyframes move-bg {
  to {
    background-position: 400% 0;
  }
}
</style>
`;
export {
  resolved__virtual_storySource_componentsTailwindTextTextStoryVue as default
};
