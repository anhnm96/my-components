<template>
  <button class="btn">
    Hover Me
    <svg class="border-container">
      <rect pathLength="100" class="border-line"></rect>
    </svg>
  </button>
</template>

<style scoped>
.btn {
  font-weight: 700;
  position: relative;
  border: 0;
  background-color: #ffdd99;
  color: #5d4f0f;
  transition: background 200ms ease-in-out;
}

.border-container {
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
}

.border-line {
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke: #5d4f0f;
  stroke-width: 5px;
  stroke-dasharray: 0 100;
  transition: stroke-dasharray 750ms ease-in-out;
}

.btn:hover {
  background-color: transparent;
}

.btn:hover .border-line {
  stroke-dasharray: 100 0;
}
</style>
