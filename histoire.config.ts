import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { HstNuxt } from '@histoire/plugin-nuxt'

export default defineConfig({
  plugins: [HstVue(), HstNuxt()],
  vite: {
    base: '/my-components/',
    server: {
      port: 4000,
    },
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
        title: 'Tailwind',
        include: (file) => file.path.includes('tailwind'),
      },
    ],
  },
})
