<script setup lang="ts">
let currentText = ''
const textDisplay = useTemplateRef<HTMLDivElement>('textDisplay')
function handleInput(e: Event) {
  if (!textDisplay.value) return
  const newText = (e.target as HTMLTextAreaElement).value
  // Find the length of the common prefix between currentText and newText
  let i = 0
  while (
    i < currentText.length &&
    i < newText.length &&
    currentText[i] === newText[i]
  ) {
    i++
  }

  // Remove spans from the end if the new text is shorter
  while (textDisplay.value.children.length > i) {
    textDisplay.value.removeChild(textDisplay.value.lastChild!)
  }

  // Add new spans for characters added to the input
  for (let j = i; j < newText.length; j++) {
    const span = document.createElement('span')
    span.className = 'animated-text' // Optional: for styling or animation
    span.textContent = newText[j] === ' ' ? '\u00A0' : newText[j] // Handle spaces
    textDisplay.value.appendChild(span)
  }

  // Update the current text to match the new input
  currentText = newText
}
</script>

<template>
  <div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <filter
            id="bloom-filter"
            width="200%"
            height="200%"
            x="-50%"
            y="-50%"
          >
            <feComponentTransfer result="amplified">
              <feFuncR type="linear" slope="0.7" intercept="0"></feFuncR>
              <feFuncG type="linear" slope="0.7" intercept="0"></feFuncG>
              <feFuncB type="linear" slope="0.7" intercept="0"></feFuncB>
            </feComponentTransfer>
            <feColorMatrix
              in="amplified"
              type="saturate"
              values="0"
              result="desaturated"
            ></feColorMatrix>
            <feComponentTransfer in="desaturated" result="thresholded">
              <feFuncR type="table" tableValues="0,1"></feFuncR>
              <feFuncG type="table" tableValues="0,1"></feFuncG>
              <feFuncB type="table" tableValues="0,1"></feFuncB>
            </feComponentTransfer>
            <feColorMatrix
              in="thresholded"
              type="matrix"
              values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  1 0 0 0 0"
              result="alphaMask"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="alphaMask"
              operator="arithmetic"
              k1="1"
              k2="0"
              k3="0"
              k4="0"
              result="maskedSource"
            ></feComposite>
            <feComponentTransfer in="maskedSource" result="brightened">
              <feFuncR type="linear" slope="1"></feFuncR>
              <feFuncG type="linear" slope="1"></feFuncG>
              <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
            <feGaussianBlur
              in="brightened"
              stdDeviation="10"
              edgeMode="none"
              result="blurredBloom"
            ></feGaussianBlur>
            <feGaussianBlur
              in="brightened"
              stdDeviation="4"
              edgeMode="none"
              result="blurredBloom2"
            ></feGaussianBlur>
            <feComposite
              in="SourceGraphic"
              in2="blurredBloom"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="1"
              k4="0"
              result="finalBloom"
            ></feComposite>
            <feComposite
              in="finalBloom"
              in2="blurredBloom2"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="1"
              k4="0"
            ></feComposite>
          </filter>
        </defs>
      </svg>
      <textarea @input="handleInput"></textarea>
      <div ref="textDisplay" class="text-display"></div>
    </div>
    <div class="shadow-glow">Nuxt Content</div>
  </div>
</template>

<style>
/* Text display styling */
.text-display {
  margin-top: 1rem; /* mt-4 */
  color: white;
  font-size: 1.25rem; /* text-xl */
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-items: flex-start;
  width: 100%;
  filter: url(#bloom-filter);
}
/* Animated text styling */
.animated-text {
  font-weight: 600; /* font-semibold */
  font-size: 2.25rem; /* text-4xl */
  color: #06b6d4; /* text-cyan-500 */
  animation: colorChange 0.7s ease-in forwards;
}

/* Keyframe animation for text color */
@keyframes colorChange {
  from {
    color: white;
  }
  to {
    color: #06b6d4; /* text-cyan-500 */
  }
}

@property --hue {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.shadow-glow {
  @apply text-5xl uppercase tracking-wider text-white;
  text-shadow:
    1px 1px 2px #000,
    0 0 calc(3rem + 2rem * cos(var(--hue))) hsl(var(--hue) 100% 50%);
  animation: hue 5s linear infinite alternate;
}

@keyframes hue {
  to {
    --hue: 1turn;
  }
}
</style>
