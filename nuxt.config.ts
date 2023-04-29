// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },

    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
  
})
