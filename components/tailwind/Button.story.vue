<template>
  <Story title="Button" :layout="{ type: 'grid' }">
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
</style>
