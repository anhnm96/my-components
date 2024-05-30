const resolved__virtual_storySource_componentsCustomSliderSliderStoryVue = `<script lang="ts" setup>
const progress = ref(50)
<\/script>

<template>
  <Story title="Slider">
    <Variant title="from ios16">
      <div class="flex h-[800px] items-center justify-center py-16">
        <div
          class="flex h-full w-[375px] flex-col justify-center rounded-2xl bg-gray-800 py-8 px-4"
        >
          <p class="text-center text-sm font-medium text-white">
            iOS 16 Slider demo
          </p>
          <div class="flex flex-1 flex-col items-center justify-center">
            <Slider
              v-model="progress"
              :update-on-touch="false"
              class="flex w-full items-center justify-center"
            >
              <template #left="{ hovered, panning }">
                <div
                  :initial="false"
                  :style="{
                    color:
                      hovered || panning
                        ? 'rgb(255,255,255)'
                        : 'rgb(120,113,108)',
                  }"
                  class="flex w-6 shrink-0 justify-start transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                    />
                  </svg>
                </div>
              </template>
              <template #right="{ hovered, panning }">
                <div
                  :style="{
                    color:
                      hovered || panning
                        ? 'rgb(255,255,255)'
                        : 'rgb(120,113,108)',
                  }"
                  class="flex w-6 shrink-0 justify-end transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="{1.5}"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                    />
                  </svg>
                </div>
              </template>
            </Slider>
            <div
              class="mt-4 select-none text-center text-sm font-semibold tabular-nums text-white"
            >
              <p>progress: {{ progress }}</p>
              <p>rounded: {{ \`\${Math.round(progress)}%\` }}</p>
            </div>
          </div>
        </div>
      </div>
    </Variant>
  </Story>
</template>
`;
export {
  resolved__virtual_storySource_componentsCustomSliderSliderStoryVue as default
};
