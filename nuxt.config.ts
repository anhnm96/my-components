// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  typescript: { shim: false },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  components: {
    dirs: [
      {
        path: '~/components/base',
        extensions: ['vue'],
        prefix: 'base',
        ignore: ['**/*.story.vue'],
      },
      {
        path: '~/components/custom',
        extensions: ['vue'],
        ignore: ['**/stories/*', '**/*.story.vue'],
        pathPrefix: false,
      },
    ],
  },
  imports: {
    dirs: ['composables/*/index.{ts,js,mjs,mts}'],
  },
})
