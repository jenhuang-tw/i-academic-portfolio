// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = process.env.NODE_ENV === 'production' ? '/i-academic-portfolio/' : '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: {
    enabled: process.env.NODE_ENV === 'development'
  },
  modules: ['@nuxt/icon', '@nuxt/image'],
  ssr: true,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: baseURL,
    head: {
      htmlAttrs: {
        lang: 'zh-TW',
      },
      titleTemplate: '%s - i 學檔',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'description', content: '學習歷程檔案資訊混亂無章？我們幫你整理！' },
        { name: 'keywords', content: '學習歷程檔案, 學檔, 108課綱, 108 課綱, 申請入學, 備審資料' },
        { name: 'author', content: 'Jen HUANG' },
        { name: 'DC.Creator', content: 'Jen HUANG' },
        { name: 'copyright', content: 'i 學檔：學習歷程檔案資訊統整網站' },
        { name: 'DC.Language', content: 'zh-Hant-TW' },
        {
          property: 'og:url',
          content: 'https://jenhuang-tw.github.io/i-academic-portfolio/' // 替換成你的頁面完整絕對 URL
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://jenhuang-tw.github.io/i-academic-portfolio/' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: baseURL+'icon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: baseURL+'icon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: baseURL+'icon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: baseURL+'icon/favicon-16x16.png' },
        { rel: 'manifest', href: baseURL+'icon/site.webmanifest' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      ],
      script: [
        {
          src: baseURL+'sweetalert2.all.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
  css: ['@/assets/css/general.css'],
})