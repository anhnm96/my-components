// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
        ignore: ['**/stories/**', '**/*.story.vue'],
        pathPrefix: false,
      },
      {
        path: '~/components/compose',
        extensions: ['vue'],
        ignore: ['**/stories/**', '**/*.story.vue'],
      },
    ],
  },
  imports: {
    dirs: ['composables/*/index.{ts,js,mjs,mts}'],
  },
})
