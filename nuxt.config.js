export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'unidrum',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: 'xxx' },
      { name: 'facebook-domain-verification', content: 'xxx' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'sitemap', type: 'application/xml', href: 'https://localhost/sitemap.xml' }
    ],
    scripts: [
      { src: 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/firebase',
  ],

  // firebase
  firebase: {
    config: {
      apiKey: "AIzaSyB0ONaFXBjRc3gjQi8TIj-hJDXUjHHxSro",
      authDomain: "unidrum-c8a18.firebaseapp.com",
      projectId: "unidrum-c8a18",
      storageBucket: "unidrum-c8a18.appspot.com",
      messagingSenderId: "506751800458",
      appId: "1:506751800458:web:05e5e3220baa3d44edc973",
      measurementId: "G-9BNB3VEH1E"
    },
    services: {
      messaging: true,
      // messaging: {
      //   createServiceWorker: true,
      //   fcmPublicVapidKey: 'BPsR5veARXa688S5q1jkBgzwwFmsp9UH_AIXR5HM5HfLgZjUh26h-T3gcnVDrTSnN7gb6_Mx-dEoBghzt2Bz5ZA'
      // }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  //
  pwa: {
    // icon: false,
    icon: {
      source: '[srcDir]/[staticDir]/icon.svg'
    },
    // https://pwa.nuxtjs.org/
    manifest: {
      name: 'Unidrum by Gleb Rudakov',
      short_name: 'Unidrum',
      lang: 'ru',
      useWebmanifestExtension: false,

    },
    workbox: {
      skipWaiting: true
    }
  }
};
