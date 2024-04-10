// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // ssr: true,
  devtools: { enabled: true },

  devServer: {
    port: 8000,
  },
  
  css: [
    'vuetify/lib/styles/main.sass', 
    '@mdi/font/css/materialdesignicons.min.css', 
    '~/assets/css/main.css',
    "bootstrap/scss/bootstrap.scss",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  build: {
    transpile: ['vuetify','@heroicons/vue',
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

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    // componentNames: {
    //   Form: 'VeeForm',
    //   Field: 'VeeField',
    //   FieldArray: 'VeeFieldArray',
    //   ErrorMessage: 'VeeErrorMessage',
    // },
  },
  extends: ['@nuxt/ui-pro'],

  modules: [
   '@nuxt/ui',
   '@ant-design-vue/nuxt', 
   "@vuesax-alpha/nuxt",
   '@vee-validate/nuxt',
   '@pinia/nuxt',
  ],

  vuesaxAlpha: {
    /** Options */
  },

  runtimeConfig: {
    app: {
      api: {
        baseUrl: process.env.API_URL,
      },
    },
  },
})