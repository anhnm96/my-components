<script lang="ts" setup></script>

<template>
  <Story title="Toggle|Swap Button" :layout="{ type: 'grid', width: '300px' }">
    <Variant title="Toggle">
      <div class="flex gap-2">
        <ToggleButton :selected="true">Pin</ToggleButton>
        <ToggleButton :selected="true" aria-disabled="true">Pin</ToggleButton>
      </div>
    </Variant>
    <Variant title="Swap Button">
      <div class="flex gap-2">
        <SwapButton :states="[{ id: 'On' }, { id: 'Off' }, { id: 'Auto' }]" />
        <SwapButton
          v-slot="state"
          :selected="{ id: 'moon' }"
          :states="[
            {
              id: 'sun',
              icon: 'ph:sun',
              defaultClass: 'rotate-0',
              activeClass: 'rotate-45',
              ariaLabel: 'Switch to light theme',
            },
            {
              id: 'moon',
              icon: 'ph:moon',
              defaultClass: '-rotate-45',
              activeClass: 'rotate-0',
              ariaLabel: 'Switch to dark theme',
            },
          ]"
        >
          <SwapItem v-bind="{ ...state }" size="20px" />
        </SwapButton>
        <SwapButton
          v-slot="state"
          class="rounded-full bg-opacity-50 p-2"
          :states="[
            {
              id: 'menu',
              icon: 'ph:list',
              defaultClass: '-rotate-45',
              activeClass: 'rotate-0',
              ariaLabel: 'Open menu',
            },
            {
              id: 'close',
              icon: 'ph:x',
              defaultClass: 'rotate-45',
              activeClass: 'rotate-0',
              ariaLabel: 'Close menu',
            },
          ]"
        >
          <SwapItem v-bind="{ ...state }" size="20px" />
        </SwapButton>
        <SwapButton
          v-slot="state"
          class="bg-transparent"
          style="transform-style: preserve-3d; perspective: 16em"
          :states="[
            {
              id: '😇',
              defaultClass: '[transform:rotateY(180deg)]',
              activeClass: '[transform:rotateY(0)]',
              ariaLabel: 'Open menu',
            },
            {
              id: '😈',
              defaultClass: '[transform:rotateY(-180deg)]',
              activeClass: '[transform:rotateY(0)]',
              ariaLabel: 'Close menu',
            },
          ]"
        >
          <SwapItem v-bind="{ ...state }" style="backface-visibility: hidden" />
        </SwapButton>
      </div>
    </Variant>
  </Story>
</template>
