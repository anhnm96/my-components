<script setup>
defineOptions({ inheritAttrs: false })
const items = [
  'Overview',
  'Integrations',
  'Activity',
  'Domains',
  'Usage',
  'Monitoring',
]

function navigate() {
  // the callback is fired once the animation is completed
  // to allow smooth transition
}
</script>

<template>
  <div class="flex items-center justify-center">
    <NavGroup
      v-slot="{ ready, size, position, duration }"
      v-bind="$attrs"
      as="nav"
      class="relative rounded-2xl bg-white/5 p-4"
    >
      <div class="relative py-1">
        <div
          v-if="ready"
          :style="{
            '--size': size,
            '--position': position,
            '--duration': duration,
          }"
          class="absolute inset-y-0 left-0 h-full w-[--size] translate-x-[--position] rounded-lg bg-white/10 transition-[width,transform] duration-[--duration]"
        />

        <NavList as="ul" class="relative flex items-stretch gap-3">
          <NavItem
            v-for="(item, index) in items"
            :key="index"
            v-slot="{ setActive, isActive }"
            as="li"
            @activated="navigate"
          >
            <a
              href="#"
              :class="[
                isActive ? 'text-white' : 'text-white/60 hover:text-white',
              ]"
              class="inline-block px-4 py-1 text-sm transition"
              @click.prevent="setActive"
            >
              {{ item }}
            </a>
          </NavItem>
        </NavList>
      </div>
    </NavGroup>
  </div>
</template>
