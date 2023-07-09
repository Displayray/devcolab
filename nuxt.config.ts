// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/supabase"
  ],
  app: {
    head: {
      script: [
        {
          key: 'fontawesome',
          src: 'https://kit.fontawesome.com/06a3850196.js',
          defer: true
        }
      ]
    }
  },
  css: [
    '~/assets/base.css',
    '~/assets/pre.css'
  ]
})
