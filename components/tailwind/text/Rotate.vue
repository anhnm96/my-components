<script setup lang="ts">
let words: HTMLSpanElement[]
const wordArray: Array<Array<HTMLSpanElement>> = []
let currentWord = 0
const classes = useCssModule('classes')

onMounted(() => {
  // @ts-expect-error type
  words = document.getElementsByClassName(classes.word)
  words[currentWord].style.opacity = '1'
  for (let i = 0; i < words.length; i++) {
    splitLetters(words[i])
  }
  changeWord()
  setInterval(changeWord, 4000)
})

function changeWord() {
  const cw = wordArray[currentWord]
  const nw =
    currentWord === words.length - 1 ? wordArray[0] : wordArray[currentWord + 1]
  for (let i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i)
  }

  for (let i = 0; i < nw.length; i++) {
    nw[i].className = `${classes.letter} ${classes.behind}`
    nw[0].parentElement!.style.opacity = '1'
    animateLetterIn(nw, i)
  }

  currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1
}

function animateLetterOut(cw: HTMLSpanElement[], i: number) {
  setTimeout(function () {
    cw[i].className = `${classes.letter} ${classes.out}`
  }, i * 80)
}

function animateLetterIn(nw: HTMLSpanElement[], i: number) {
  setTimeout(function () {
    nw[i].className = `${classes.letter} ${classes.in}`
  }, 340 + i * 80)
}

function splitLetters(word: Element) {
  const content = word.innerHTML
  word.innerHTML = ''
  const letters = []
  for (let i = 0; i < content.length; i++) {
    const letter = document.createElement('span')
    letter.className = `${classes.letter}`
    letter.innerHTML = content.charAt(i)
    word.appendChild(letter)
    letters.push(letter)
  }

  wordArray.push(letters)
}
</script>

<template>
  <div class="text-4xl font-bold text-white">
    <p class="inline-block">You are&nbsp;</p>
    <p class="inline-block align-top">
      <span :class="[classes.word, classes.wisteria]">wonderful.</span>
      <span :class="[classes.word, classes.pomegranate]">magical.</span>
      <span :class="[classes.word, classes.belize]">bold.</span>
      <span :class="[classes.word, classes.green]">beautiful.</span>
      <span :class="[classes.word, classes.midnight]">fun.</span>
    </p>
  </div>
</template>

<style module="classes">
.word {
  position: absolute;
  opacity: 0;
}

.letter {
  display: inline-block;
  position: relative;
  transform: translateZ(25px);
  transform-origin: 50% 50% 25px;
}

.letter.out {
  transform: rotateX(90deg);
  transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.letter.behind {
  transform: rotateX(-90deg);
}

.letter.in {
  transform: rotateX(0deg);
  transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.wisteria {
  color: #8e44ad;
}

.belize {
  color: #2980b9;
}

.pomegranate {
  color: #c0392b;
}

.green {
  color: #16a085;
}

.midnight {
  color: #276db3;
}
</style>
