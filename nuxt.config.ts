// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - Nuxt',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
    
  },
  components: [
    {
      path: '~/components', 
      pathPrefix: false,
    },
  ],

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
