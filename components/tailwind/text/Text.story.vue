<script lang="ts" setup>
import SlideUp from './SlideUp.vue'
import Magic from './Magic.vue'
import Rotate from './Rotate.vue'
</script>

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
        "
        class="animated-gradient-text py-2 text-5xl font-bold"
      >
        The Progressive JavaScript Framework
      </p>
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
  </Story>
</template>
