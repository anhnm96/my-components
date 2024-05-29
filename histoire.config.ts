import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { HstNuxt } from '@histoire/plugin-nuxt'

export default defineConfig({
  plugins: [HstVue(), HstNuxt()],
  routerMode: 'hash',
  theme: {
    defaultColorScheme: 'dark',
  },
  vite: {
    base: '/my-components/',
    publicDir: './public',
    server: {
      port: 4000,
    },
    mode: 'histoire',
  },
  storyIgnored: ['**/node_modules/**', '**/dist/**'],
  tree: {
    groups: [
      {
        title: 'Base',
        include: (file) => file.path.includes('base'),
      },
      {
        title: 'Custom',
        include: (file) => file.path.includes('custom'),
      },
      {
        title: 'Composables',
        include: (file) => file.path.includes('compose'),
      },
      {
        title: 'Tailwind',
        include: (file) => file.path.includes('tailwind'),
      },
    ],
  },
})
