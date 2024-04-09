// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // ssr: true,
  devtools: { enabled: true },

  css: [
    'vuetify/lib/styles/main.sass', 
    '@mdi/font/css/materialdesignicons.min.css', 
    '~/assets/css/main.css',
    "bootstrap/scss/bootstrap.scss",
  ],

  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  extends: ['@nuxt/ui-pro'],

  modules: [
   '@nuxt/ui',
   '@ant-design-vue/nuxt', 
   "@vuesax-alpha/nuxt",
  ],
  vuesaxAlpha: {
    /** Options */
  },
})
