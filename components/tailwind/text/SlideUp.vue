<template>
  <h2 class="text-5xl">
    <span class="word">Explore&nbsp;</span>
    <span class="word">CSS&nbsp;</span>
    <span class="word">With&nbsp;</span>
    <span class="word">Me</span>
  </h2>
</template>

<style scoped>
.word {
  color: transparent;
  font-weight: 900;
  text-shadow: 0 1.5em 0.25px var(--slate-700);
  animation: moveUp 250ms ease-in-out 1 both;

  /* CSS variable for text-color */
  --text-color: #de3163;
}

.word:nth-child(2) {
  animation-delay: 150ms;

  --text-color: #6495ed;
}

.word:nth-child(3) {
  animation-delay: 300ms;

  --text-color: #00ee76;
}

.word:nth-child(4) {
  animation-delay: 450ms;

  --text-color: #ff7f50;
}

@keyframes moveUp {
  100% {
    text-shadow: 0 0 0.25px var(--text-color);
  }
}
</style>
