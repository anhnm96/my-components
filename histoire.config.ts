import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { HstNuxt } from '@histoire/plugin-nuxt'

export default defineConfig({
  plugins: [HstVue(), HstNuxt()],
  routerMode: 'hash',
  vite: {
    base: '/my-components/',
    server: {
      port: 4000,
    },
    mode: 'histoire',
  },
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
