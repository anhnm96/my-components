<script lang="ts" setup></script>

<template>
  <div class="bg-slate-700">
    <div
      class="mx-auto flex w-full max-w-3xl flex-1 overflow-hidden text-slate-600"
    >
      <div class="z-0 flex-1 overflow-y-scroll">
        <header class="flex h-20">
          <div
            class="mx-auto flex w-full max-w-3xl items-center justify-between px-8"
          >
            <p
              class="flex origin-left items-center text-xl font-semibold uppercase"
            >
              <span
                class="-ml-1.5 inline-block -rotate-90 text-[10px] leading-[0]"
              >
                The
              </span>
              <span class="-ml-1 text-2xl tracking-[-.075em]">
                Daily Bugle
              </span>
            </p>
            <nav class="flex space-x-4 text-xs font-medium text-slate-400">
              <a href="#">News</a>
              <a href="#">Sports</a>
              <a href="#">Culture</a>
            </nav>
          </div>
        </header>

        <main class="px-8 pt-8">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
