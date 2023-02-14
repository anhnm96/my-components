<script setup lang="ts">
defineProps<{ list: any[] }>()
</script>

<template>
  <div class="marquee">
    <div class="marquee-group">
      <slot v-for="(item, index) in list" :index="index" :item="item" />
    </div>
    <!-- set aria-hidden to hide the duplicated list for screen readers -->
    <div aria-hidden="true" class="marquee-group">
      <slot v-for="item in list" :item="item" />
    </div>
  </div>
</template>

<style scoped>
.marquee {
  --gap: 2rem;
  --duration: 15s;
  --start: translateX(0);
  --end: translateX(calc(-100% - var(--gap)));
  --from: var(--start);
  --to: var(--end);

  @apply flex overflow-hidden;
  gap: var(--gap);
}
.marquee-group {
  @apply flex flex-shrink-0 items-center justify-around;
  min-width: 100%;
  gap: var(--gap);
  animation: scroll-x var(--duration) linear infinite;
}

.marquee:hover .marquee-group {
  animation-play-state: paused;
}

*[dir='rtl'] {
  --end: translateX(calc(100% + var(--gap)));
}

.marquee.reverse {
  --from: var(--end);
  --to: var(--start);
}

@keyframes scroll-x {
  from {
    transform: var(--from);
  }
  to {
    transform: var(--to);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-group {
    animation-play-state: paused;
  }
}
</style>
