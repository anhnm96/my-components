/// <reference types="vitest" />

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'nuxt/app': ['useState'],
        },
      ],
      dts: true, // generate TypeScript declaration
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, '**/*.cy.ts'],
  },
})
