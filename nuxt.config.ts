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
        },
        {
          src: "https://apis.google.com/js/platform.js",
          defer: true,
          async: true
        }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  css: [
    '~/assets/base.css',
    '~/assets/pre.css'
  ],
  plugins: [
    {
      src: "@/plugins/aos", mode: "client"
    }
  ]
})
