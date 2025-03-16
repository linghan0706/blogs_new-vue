import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import zh from './locales/zh.js'

// 创建i18n实例
const i18n = createI18n({
  legacy: false, // 使用组合式API
  globalInjection: true, // 全局注入$t函数
  locale: localStorage.getItem('language') || 'zh', // 默认语言，优先从本地存储获取，如果没有则使用中文
  fallbackLocale: 'en', // 备用语言
  messages: {
    en,
    zh
  },
  silentTranslationWarn: true, // 禁用翻译警告
  silentFallbackWarn: true, // 禁用回退警告
  sync: true // 同步语言切换
})

export default i18n