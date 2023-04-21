<template>
  <button class="btn btn-xl button-glow">Hover</button>
</template>

<style scoped>
.button-glow {
  width: 240px;
  height: 55px;
  font-weight: 600;
  display: grid;
  place-items: center;
  color: #fff;
  background: #110c32;
  position: relative;
  z-index: 0;
  border-radius: 16px;
  transition: all 0.5s;
}
.button-glow:hover {
  color: #ff9950;
}
.button-glow:before {
  content: '';
  background: linear-gradient(
    to right,
    #b881ff,
    #7ed956,
    #ff9950,
    #ed6a5e,
    #b881ff,
    #7ed956,
    #ff9950,
    #ed6a5e,
    #b881ff
  );
  position: absolute;
  background-size: 300%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 5px);
  height: calc(100% + 5px);
  opacity: 0;
  border-radius: 16px;
  animation: glow 30s alternate infinite;
  transition: opacity 0.5s ease-in-out;
}
.button-glow:active {
  background: #3f396f;
}
.button-glow:hover:before {
  opacity: 1;
}
.button-glow:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #050028;
  left: 0;
  top: 0;
  border-radius: 16px;
}
@keyframes glow {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 300% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
