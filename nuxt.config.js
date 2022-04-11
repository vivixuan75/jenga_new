let path = ''

const meta = {
  title: '佳音英語 | Tumble Tower 來玩疊疊樂!',
  desc: '來玩疊疊樂! 暢玩六國學英文',
  // img: hostname + '/share.jpg',
}

export default {
  target: 'static',

  ssr: true,

  head: {
    title: meta.title,

    htmlAttrs: {
      lang: 'zh-hant'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: meta.desc },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '預約試讀,英語補習班,兒童美語,兒童英語,幼兒美語,國小英語,國中英語,高中英語,小學英檢,全民英檢,美語安親,多益,英語啟蒙,親子共學,學英語,英語補習,美語補習,小一英語,學英語',
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['~/assets/scss/style.scss'],
  // css: ['./assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/client', mode: 'client' },
  ],

  components: true,

  buildModules: [    
  ],

  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   extractCSS: true,
  // },

  build: {
    extractCSS: true,
    babel: {
      compact: true
    },
    extend (config, ctx) {
      config.performance.maxAssetSize = 4000 * 1024
    },
    filenames: {
      app: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? ".modern" : ""}.js`
          : `[contenthash:7]${isModern ? ".modern" : ""}.js`,
      chunk: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? ".modern" : ""}.js`
          : `[name][contenthash:3]${isModern ? ".modern" : ""}.js`,
      css: ({ isDev }) => (isDev ? "[name].css" : "css/[contenthash:2].css"),
      img: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "img/[name].[contenthash:7].[ext]",
      font: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "fonts/[name].[contenthash:7].[ext]",
      video: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "videos/[name].[contenthash:7].[ext]"
    }
  },

  server: {
    port: 3300 // default: 3000
  },

  router:{
    base:path,
  }
}
