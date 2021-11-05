export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PEEYESEM HYUNDAI',
    titleTemplate: '%s - PEEYESEM HYUNDAI',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'PEEYESEM HYUNDAI' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon5.ico' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#002c5f', throttle: 200, height: '3px', css: true },


  env: {
    baseUrl: 'https://site.peeyesyemhyundai.co.in/'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/app.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/plugin.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    fallback: true
  },
  router: {
    extendRoutes (routes) {
      routes.push({name: 'singlecar', path: '/cars/:model', component: 'pages/cars/index.vue'})
      routes.push({name: 'singleblog', path: '/blog/:singleblog', component: 'pages/blog/singleblog.vue'})
      routes.push({name: 'news-event', path: '/news-events/:news', component: 'pages/news-events/news.vue'})
    }
  }
}
