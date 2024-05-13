// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // ssr: true,
  devtools: { enabled: true },

  devServer: {
    port: 3002,
  },
  css: [
    "bootstrap/scss/bootstrap.scss",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  
  app: {
    head: {
        script: [
            {children: 'var global = window;'}
        ]
    }
},

  build: {
    transpile: [
    '@heroicons/vue',
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-brands-svg-icons',
    '@fortawesome/free-regular-svg-icons',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/vue-fontawesome'
    ],
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
   '@pinia/nuxt',
   "vuetify-nuxt-module",
  ],

  runtimeConfig: {
    app: {
      api: {
        baseUrl: process.env.API_URL,
      },
    },
  },
})