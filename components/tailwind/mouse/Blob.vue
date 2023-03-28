<script setup lang="ts">
const blob = ref()

onMounted(() => {
  window.onpointermove = (event) => {
    const { clientX, clientY } = event

    blob.value.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: 'forwards' }
    )
  }
})

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let interval: NodeJS.Timeout
function mouseEnter(event: MouseEvent) {
  let iteration = 0

  clearInterval(interval)
  const el = event.target as HTMLElement
  const datasetValue = el.dataset.value as string
  interval = setInterval(() => {
    el.innerText = el.innerText
      .split('')
      .map((letter, index) => {
        if (index < iteration) {
          return datasetValue[index]
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join('')

    if (iteration >= datasetValue.length) {
      clearInterval(interval)
    }

    iteration += 1 / 3
  }, 30)
}
</script>

<template>
  <div id="blob" ref="blob"></div>
  <div id="blur" class="grid place-items-center">
    <div class="absolute top-2 left-2">
      <a
        class="block text-xl text-white underline"
        href="https://www.poppr.be/en"
        target="_blank"
        rel="noopener noreferer"
      >
        Glow Effect
      </a>
      <a
        class="block text-xl text-white underline"
        href="https://kprverse.com/"
        target="_blank"
        rel="noopener noreferer"
      >
        Text Effect
      </a>
    </div>
    <h2
      class="text-7xl font-semibold text-white"
      data-value="LOOK, A BLOB"
      @mouseenter="mouseEnter"
    >
      LOOK, A BLOB
    </h2>
  </div>
</template>

<style scoped>
#blob {
  background-color: white;
  height: 34vmax;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: linear-gradient(to right, aquamarine, mediumpurple);
  animation: rotate 20s infinite;
  opacity: 0.8;
}

#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(12vmax);
}

@keyframes rotate {
  from {
    rotate: 0deg;
  }

  50% {
    scale: 1 1.5;
  }

  to {
    rotate: 360deg;
  }
}
</style>
