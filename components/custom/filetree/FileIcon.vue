<script lang="ts">
const FILE_ICONS = [
  {
    match: /\.vue$/,
    icon: { name: 'catppuccin:vue' },
  },
  {
    match: /nuxt\.config\.\w+$/,
    icon: { name: 'catppuccin:nuxt' },
  },
  {
    match: /package\.json$/,
    icon: { name: 'catppuccin:npm' },
  },
  {
    match: /\.[mc]?tsx?$/,
    icon: { name: 'catppuccin:typescript' },
  },
  {
    match: /\.[mc]?jsx?$/,
    icon: { name: 'catppuccin:javascript' },
  },
]
</script>

<script setup lang="ts">
const props = defineProps<{
  path: string
  isDirectory?: boolean
  isDirectoryOpen?: boolean
}>()

const icon = computed(() => {
  if (props.isDirectory) {
    return props.isDirectoryOpen
      ? { name: 'catppuccin:folder-open' }
      : { name: 'catppuccin:folder' }
  }
  for (const { match, icon } of FILE_ICONS) {
    if (match.test(props.path)) return icon
  }
  return { name: 'catppuccin:file' }
})

const colorMode = useColorMode()
const cls = computed(() => {
  return colorMode.value === 'light'
    ? 'brightness-[.6] hue-rotate-180 invert saturate-200'
    : ''
})
</script>

<template>
  <Icon class="scale-110" :class="[cls]" :name="icon.name" />
</template>
