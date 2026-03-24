// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    baseURL: '/lcd/',
    head: {
      title: 'СТРОИМ ИЗ CLT | Дома из CLT панелей',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Современные дома из CLT панелей под ключ. Проектирование, производство и монтаж.' }
      ]
    }
  },
  css: ['~/assets/css/animations.css', '~/assets/css/mobile.css'],
  nitro: {
    preset: 'static',
    staticAssets: {
      dir: './dist'
    }
  },
  routeRules: {
    '/**': { prerender: true }
  }
})
