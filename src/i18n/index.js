import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import zh from './locales/zh.js'

// 创建i18n实例
const i18n = createI18n({
  legacy: false, // 使用组合式API
  locale: localStorage.getItem('language') || 'zh', // 默认语言，优先从本地存储获取
  fallbackLocale: 'en', // 备用语言
  messages: {
    en,
    zh
  }
})

export default i18n