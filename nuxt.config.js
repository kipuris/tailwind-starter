export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Insurance broker template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Insurance broker',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: '',
      },
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/android-chrome-192x192.png' },
      {
        rel: 'stylesheet preload prefetch',
        as: 'style',
        href:
          'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;display=swap',
        type: 'text/css',
        crossorigin: 'anonymous',
      },
    ],
  },
  components: {
    dirs: ['~/components', '~/components/shared'],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss'],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    extractCSS: true,
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
  tailwindcss: {
    jit: true,
  },
  publicRuntimeConfig: {
    baseURL: process.env.URL || "http://localhost:3000/"
  },
}
