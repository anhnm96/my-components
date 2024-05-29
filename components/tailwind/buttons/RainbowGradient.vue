<script lang="ts" setup>
function getCursorPosition(element: HTMLElement, event: PointerEvent) {
  const rect = element.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const x = event.clientX - centerX
  const y = centerY - event.clientY
  return { x, y }
}

function pointermove(event: PointerEvent) {
  const button = event.target as HTMLElement
  const { x, y } = getCursorPosition(button, event)
  button.style.setProperty('--coord-x', x.toString())
  button.style.setProperty('--coord-y', y.toString())
}

function pointerleave(event: PointerEvent) {
  const button = event.target as HTMLElement
  button.style.setProperty('--coord-x', '0')
  button.style.setProperty('--coord-y', '0')
}
</script>

<template>
  <main>
    <div class="container">
      <div>
        <button @pointermove="pointermove" @pointerleave="pointerleave">
          <div class="inner">Cancel <span>Esc</span></div>
        </button>
        <button @pointermove="pointermove" @pointerleave="pointerleave">
          <div class="inner">Enjoy <span>Shift</span></div>
        </button>
      </div>
    </div>

    <div class="container" data-theme="dark">
      <div>
        <button @pointermove="pointermove" @pointerleave="pointerleave">
          <div class="inner">Cancel <span>Esc</span></div>
        </button>
        <button @pointermove="pointermove" @pointerleave="pointerleave">
          <div class="inner">Enjoy <span>Shift</span></div>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
@layer properties {
  @property --button-shadow-opacity {
    syntax: '<number>';
    inherits: true;
    initial-value: 0;
  }
  @property --button-shadow-spread {
    syntax: '<number>';
    inherits: true;
    initial-value: 0;
  }
  @property --button-bg-opacity {
    syntax: '<number>';
    inherits: true;
    initial-value: 0;
  }
  @property --button-after-opacity {
    syntax: '<number>';
    inherits: true;
    initial-value: 0;
  }
  @property --coord-y {
    syntax: '<number>';
    inherits: true;
    initial-value: 0;
  }
  @property --coord-x {
    syntax: '<number>';
    inherits: true;
    initial-value: 0;
  }
}

main {
  --context-bg: hsl(0deg 0% 99%);
  --bg-container: hsl(0deg 0% 96%);
  --bg-button: hsl(179deg 7% 97%);
  --color-button: hsl(359deg 1% 35%);

  --button-shadow-opacity: 0;
  --button-shadow-spread: 0;
  --button-bg-opacity: 0;
  --button-after-opacity: 0;
  --btn-border-color: transparent;
  --btn-border-size: 0;
  --btn-inner-shadow: 1;

  --container-border-color: rgb(0 0 0 / 8%);
  --container-box-shadow-color: rgb(0 0 0 / 12%);

  --timing: 0.3s;
  --transitions: --coord-y 0.075s linear, --coord-x 0.075s linear,
    --button-shadow-opacity var(--timing) ease,
    --button-shadow-spread var(--timing) ease,
    --button-bg-opacity var(--timing) ease,
    --button-after-opacity var(--timing) ease, opacity var(--timing) ease,
    box-shadow var(--timing) ease, background-image var(--timing) ease;
}

main {
  --col: 2;
  --row: 1;
  font-family: 'Inter', sans-serif;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(var(--col), 1fr);
  grid-template-rows: repeat(var(--row), 1fr);

  @media (max-width: 720px) {
    --col: 1;
    --row: 2;
  }

  & .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--context-bg);

    transform: scale(1);

    & > div {
      background: var(--bg-container);
      padding: 2em;
      border: 1px solid var(--container-border-color);
      border-radius: 0.9em;
      box-shadow: 0 6px 12px -6px var(--container-box-shadow-color);
      display: flex;
      grid-gap: 16px;
    }
  }

  & button {
    all: unset;
    --coord-y: 0;
    --coord-x: 0;

    --color-red: color(display-p3 0.95 0.06 0.02 / var(--button-bg-opacity));
    --color-orange: color(display-p3 0.97 0.61 0.07 / var(--button-bg-opacity));
    --color-olive: color(display-p3 0.83 0.87 0.04 / var(--button-bg-opacity));
    --color-lime: color(display-p3 0.31 0.89 0.05 / var(--button-bg-opacity));
    --color-teal: color(display-p3 0.12 0.88 0.88 / var(--button-bg-opacity));
    --color-tealer: color(display-p3 0.15 0.8 0.93 / var(--button-bg-opacity));
    --color-blue: color(display-p3 0.14 0.47 0.99 / var(--button-bg-opacity));
    --color-purple: color(display-p3 0.38 0.14 0.99 / var(--button-bg-opacity));
    --color-purpler: color(
      display-p3 0.73 0.04 0.94 / var(--button-bg-opacity)
    );
    --color-pink: color(display-p3 0.93 0.03 0.85 / var(--button-bg-opacity));

    @supports not (color: color(display-p3 0.93 0.03 0.85)) {
      --color-red: hsl(3 93% 48% / var(--button-bg-opacity));
      --color-orange: hsl(26 91% 52% / var(--button-bg-opacity));
      --color-olive: hsl(65 89% 46% / var(--button-bg-opacity));
      --color-lime: hsl(122 86% 48% / var(--button-bg-opacity));
      --color-teal: hsl(181 78% 50% / var(--button-bg-opacity));
      --color-tealer: hsl(193 76% 53% / var(--button-bg-opacity));
      --color-blue: hsl(219 95% 56% / var(--button-bg-opacity));
      --color-purple: hsl(269 95% 56% / var(--button-bg-opacity));
      --color-purpler: hsl(292 93% 47% / var(--button-bg-opacity));
      --color-pink: hsl(327 96% 47% / var(--button-bg-opacity));
    }

    cursor: pointer;
    color: var(--color-button);
    border-radius: 0.8em;
    font-weight: 600;
    box-shadow: 0 8px calc(var(--button-shadow-spread) * 1px) -8px rgb(0 0 0 /
          calc(var(--button-shadow-opacity) * 1%));

    border: 1px solid var(--btn-border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-color: rgb(0 0 0 / 6%);
    background-image: conic-gradient(
      from 180deg,
      var(--color-red) 0%,
      var(--color-orange) 10%,
      var(--color-olive) 20%,
      var(--color-lime) 30%,
      var(--color-teal) 40%,
      var(--color-tealer) 50%,
      var(--color-blue) 60%,
      var(--color-purple) 70%,
      var(--color-purpler) 80%,
      var(--color-pink) 90%,
      var(--color-red) 100%
    );
    background-size: calc(100% + 2px);
    background-position: -1px -1px;
    transition: var(--transitions);

    & .inner {
      padding: 0.55em 0.85em;
      background: var(--bg-button);
      border-radius: 0.7em;
      display: flex;
      align-items: center;
      justify-content: center;
      grid-gap: 12px;
      box-shadow:
        inset 0 calc(var(--btn-inner-shadow) * 2px)
          calc(var(--btn-inner-shadow) * 1px) rgb(255 255 255 / 90%),
        inset 0 calc(var(--btn-inner-shadow) * -2px)
          calc(var(--btn-inner-shadow) * 3px) rgb(0 0 0 / 3%);
    }
    &:before,
    &:after {
      pointer-events: none;
      border-radius: 0.8em;
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      transition: var(--transitions);

      background-image: conic-gradient(
        from 180deg,
        var(--color-red) 0%,
        var(--color-orange) 10%,
        var(--color-olive) 20%,
        var(--color-lime) 30%,
        var(--color-teal) 40%,
        var(--color-tealer) 50%,
        var(--color-blue) 60%,
        var(--color-purple) 70%,
        var(--color-purpler) 80%,
        var(--color-pink) 90%,
        var(--color-red) 100%
      );
    }

    &:before {
      z-index: -1;
      filter: saturate(1.2);
      display: none;
    }

    &:after {
      filter: saturate(2) blur(5px);
      transform: translate(
        calc(calc(var(--coord-x) / 1.5) * 1px),
        calc(calc(var(--coord-y) / 1.5) * -1px)
      );
      width: 180%;
      height: 180%;
      opacity: calc(var(--button-after-opacity) / 3);
    }

    & span {
      pointer-events: none;
      font-size: 0.85em;
      padding: 4px;
      border: 1px solid rgb(0 0 0 / 10%);
      border-radius: 6px;
      font-weight: 400;
    }

    &:hover {
      --button-shadow-opacity: 16;
      --button-shadow-spread: 16;
      --button-after-opacity: 0.7;
      --button-bg-opacity: 0.15;

      &:active {
        --button-shadow-opacity: 26;
        --button-shadow-spread: 26;
        --button-after-opacity: 0.9;
        --button-bg-opacity: 0.25;
      }

      transition: var(--transitions);
    }

    &:not(:hover) {
      --button-shadow-opacity: 0;
      --button-shadow-spread: 0;
      --coord-y: 0;
      --coord-x: 0;
      --button-bg-opacity: 0;
    }
  }

  /* Adjustments for the dark mode  */

  & [data-theme='dark'] {
    --context-bg: hsl(0deg 0% 8%);
    --bg-container: hsl(0deg 0% 10%);
    --bg-button: var(--bg-container);
    --color-button: hsl(0deg 0% 66%);
    --btn-border-color: rgb(255 255 255 / 5%);
    --btn-inner-shadow: 1;
    --btn-border-size: 1;
    --container-border-color: rgb(255 255 255 / 8%);
    --container-box-shadow-color: rgb(0 0 0 / 80%);

    & button {
      &:hover {
        --button-after-opacity: 0.5;
        --button-bg-opacity: 0.18;

        &:active {
          --button-after-opacity: 0.75;
          --button-bg-opacity: 0.22;
        }
      }

      & .inner {
        box-shadow:
          inset 0 calc(var(--btn-inner-shadow) * 2px)
            calc(var(--btn-inner-shadow) * 3px) rgb(255 255 255 / 1%),
          inset 0 calc(var(--btn-inner-shadow) * -2px)
            calc(var(--btn-inner-shadow) * 3px) rgb(0 0 0 / 25%);
      }
      & span {
        border: 1px solid rgb(255 255 255 / 10%);
      }
    }
  }
}
</style>
