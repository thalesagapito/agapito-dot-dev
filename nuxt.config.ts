// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],
  image: {
    quality: 85,
  },
})
