let path = ''

const hostname = 'http://jo.joy.com.tw/action/jenga/'

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
      { rel: 'icon', type: 'image/x-icon', href: hostname + '/favicon.ico' }
    ]
  },

  css: ['~/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/client', mode: 'client' },
  ],

  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [ 
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },

  server: {
    port: 3300 // default: 3000
  },

  router:{
    base: hostname,
  },
}
