<template>
  <div class="header">
    <el-input
      class="search-bar"
      :placeholder="$t('header.search')"
      prefix-icon="Search"
      v-model="searchText"
    />
    <div class="header-right">
      <el-dropdown @command="handleLanguageChange">
        <div class="language-selector">
          <span class="flag">{{ currentLang === 'zh' ? '🇨🇳' : '🇬🇧' }}</span>
          <span>{{ currentLang === 'zh' ? '中文' : 'English' }}</span>
          <el-icon class="el-icon--right"><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="en">English</el-dropdown-item>
            <el-dropdown-item command="zh">中文</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      
      <el-badge is-dot class="notification-badge">
        <el-icon size="20"><Bell /></el-icon>
      </el-badge>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Search, ArrowDown, Bell } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

// 初始化i18n
const { locale } = useI18n()
const searchText = ref('')

// 计算当前语言
const currentLang = computed(() => locale.value)

/**
 * 切换语言的处理函数
 * @param {string} lang - 语言代码 ('en'|'zh')
 */
const handleLanguageChange = (lang) => {
  // 设置i18n的locale
  locale.value = lang
  // 保存到本地存储，以便下次访问时保持语言设置
  localStorage.setItem('language', lang)
  // 显示切换成功的消息
  ElMessage({
    message: lang === 'zh' ? '已切换到中文' : 'Switched to English',
    type: 'success'
  })
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  padding: 0 var(--space-xl);
  background-color: var(--card-bg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.search-bar {
  max-width: 300px;
  transition: max-width var(--transition-normal), box-shadow var(--transition-fast);
  border-radius: var(--radius-md);
}

.search-bar:focus-within {
  box-shadow: var(--shadow-md);
}

.header-right {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.language-selector {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--font-sm);
  color: var(--text-primary);
  cursor: pointer;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast);
}

.language-selector:hover {
  background-color: var(--primary-light);
}

.flag {
  font-size: var(--font-md);
}

.notification-badge {
  cursor: pointer;
  padding: var(--space-xs);
  border-radius: 50%;
  transition: background-color var(--transition-fast);
}

.notification-badge:hover {
  background-color: var(--primary-light);
}

/* 媒体查询 - 平板设备 */
@media (max-width: 992px) {
  .header {
    padding: 0 var(--space-lg);
  }
  
  .search-bar {
    max-width: 250px;
  }
}

/* 媒体查询 - 移动设备 */
@media (max-width: 768px) {
  .header {
    padding: 0 var(--space-md);
    height: calc(var(--header-height) - 10px);
  }
  
  .search-bar {
    max-width: 200px;
  }
  
  .header-right {
    gap: var(--space-md);
  }
}
</style>