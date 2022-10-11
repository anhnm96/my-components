import { defineConfig } from 'histoire'
import { HstNuxt } from '@histoire/plugin-nuxt'

export default defineConfig({
  plugins: [HstNuxt()],
  vite: {
    base: '/my-components/',
  },
  tree: {
    groups: [
      {
        title: 'Components',
        include: (file) => file.path.includes('base'),
      },
      {
        title: 'Tailwind',
        include: (file) => file.path.includes('tailwind'),
      },
    ],
  },
})
