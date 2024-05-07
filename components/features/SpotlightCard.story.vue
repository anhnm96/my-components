<script setup lang="ts">
import SpotlightCard from './SpotlightCard.vue'

const items = [
  {
    name: 'Michael Dam',
    title: 'Product Designer',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=640',
  },
  {
    name: 'Austin Distel',
    title: 'Media Giant',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=640',
  },
]
</script>

<template>
  <Story>
    <Variant title="Overlay highlight">
      <div class="flex h-screen w-screen items-center justify-center gap-8">
        <SpotlightCard
          v-for="(item, index) in items"
          :key="index"
          mode="after"
          from="rgba(255,255,255,0.1)"
          :size="400"
          class="group w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4"
        >
          <div class="relative">
            <img
              class="absolute inset-0 h-64 w-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0"
              :src="item.image"
            />

            <img
              class="relative h-64 w-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
              :src="item.image"
            />

            <div class="mt-4 px-2">
              <div class="font-medium text-white">{{ item.name }}</div>

              <div class="text-white/75">{{ item.title }}</div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </Variant>
    <Variant title="Dynamically colored border">
      <div class="flex h-screen w-screen items-center px-8">
        <SpotlightCard
          hsl
          :hsl-min="200"
          :hsl-max="280"
          :size="300"
          class="shadow-white/2.5 mx-auto max-w-sm rounded-[--radius] bg-white/10 shadow-xl [--radius:theme(borderRadius.2xl)]"
        >
          <div
            class="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-zinc-800"
          ></div>

          <!-- highlight -->
          <div
            class="absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]"
          ></div>

          <div class="relative">
            <div class="relative py-20">
              <div
                class="absolute inset-0 flex items-center justify-center [mask-image:linear-gradient(to_bottom,white,transparent)]"
              >
                <div
                  class="bg-white/2.5 absolute h-96 w-96 rounded-full shadow-xl"
                ></div>

                <div
                  class="bg-white/2.5 absolute h-[19rem] w-[19rem] rounded-full border border-white/5 shadow-xl"
                ></div>

                <div
                  class="bg-white/2.5 absolute h-56 w-56 rounded-full border border-white/10 shadow-xl"
                ></div>

                <div
                  class="bg-white/2.5 absolute h-36 w-36 rounded-full border border-dashed border-white/15 shadow-xl"
                ></div>
              </div>

              <div class="relative flex items-center justify-center">
                <div
                  class="flex h-16 w-16 rounded-full border border-white/25 bg-white/5 p-3 shadow-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-10 w-10 stroke-[1] text-zinc-200"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- description -->
            <div class="mt-6 px-8 pb-8">
              <div class="text-lg text-white">Secure authentication</div>

              <p class="mt-2 text-sm font-light leading-relaxed text-white/75">
                Unlock the future with Touch ID. Fast, secure, and uniquely
                yours, unless someone takes a copy of your finger.
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </Variant>
  </Story>
</template>
