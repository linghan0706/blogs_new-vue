<template>
  <a-menu
    class="sidebar"
    :inline-collapsed="true"
    :selected-keys="[activeIndex]"
    mode="inline"
    theme="light">
    <div class="logo">
      <div class="logo-icon">Tools</div>
    </div>
    
    <a-menu-item key="1" @click="router.push('/')">
      <template #icon><HomeOutlined /></template>
      <span>{{ $t('sidebar.dashboard') }}</span>
    </a-menu-item>
    
    <a-menu-item key="2" @click="router.push('/home')">
      <template #icon><LineChartOutlined /></template>
      <span>{{ $t('sidebar.home') }}</span>
    </a-menu-item>
    
    <a-menu-item key="3" @click="router.push('/tools')">
      <template #icon><AppstoreOutlined /></template>
      <span>{{ $t('sidebar.projects') }}</span>
    </a-menu-item>
    
    <a-menu-item key="4" @click="router.push('/chat')">
      <template #icon><MessageOutlined /></template>
      <span>Chat</span>
    </a-menu-item>
    
    <div class="user-profile">
      <a-avatar :size="40" :src="userAvatar">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </div>
  </a-menu>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { HomeOutlined, LineChartOutlined, AppstoreOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons-vue'

const route = useRoute()
const router = useRouter()
const activeIndex = ref('1')
const userAvatar = ref('')

// 根据当前路由路径设置激活的菜单项
const setActiveIndex = (path) => {
  switch (path) {
    case '/':
      activeIndex.value = '1'
      break
    case '/home':
      activeIndex.value = '2'
      break
    case '/tools':
      activeIndex.value = '3'
      break
    case '/chat':
      activeIndex.value = '4'
      break
    default:
      activeIndex.value = '1'
  }
}

// 监听路由变化
watch(() => route.path, (newPath) => {
  setActiveIndex(newPath)
})

// 组件挂载时设置初始激活项
onMounted(() => {
  setActiveIndex(route.path)
})
</script>

<style scoped>
.sidebar {
  width: var(--sidebar-width);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(var(--space-md), 3vw, var(--space-lg)) 0;
  background-color: var(--card-bg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  position: relative;
  z-index: 100;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  /* 添加硬件加速，减少重排 */
  transform: translateZ(0);
  will-change: transform;
  /* 确保宽度固定 */
  box-sizing: content-box;
}

@media (max-width: 768px) {
  .sidebar {
    width: clamp(60px, 15vw, var(--sidebar-width));
  }

  .logo-icon {
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  }

  :deep(.ant-menu-item) {
    padding: clamp(8px, 2vw, 12px) !important;
    font-size: clamp(0.9rem, 2.5vw, 1rem);
  }

  .user-profile {
    padding: clamp(8px, 2vw, 12px);
  }

  :deep(.ant-avatar) {
    width: clamp(32px, 8vw, 40px) !important;
    height: clamp(32px, 8vw, 40px) !important;
  }
}

@media (max-width: 480px) {
  .sidebar {
    width: 50px;
  }

  :deep(.ant-menu-item) {
    padding: 6px !important;
    min-height: 40px;
  }
}

.logo {
  margin-bottom: var(--space-xl);
  transition: all var(--transition-normal);
  cursor: pointer;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: var(--font-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.logo-icon:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.user-profile {
  margin-top: auto;
  margin-bottom: var(--space-lg);
  padding: var(--space-sm);
  border-radius: 50%;
  transition: all var(--transition-fast);
}

.user-profile:hover {
  background-color: var(--primary-light);
  transform: scale(1.05);
}

:deep(.ant-menu) {
  border-right: none !important;
  background-color: transparent;
}

:deep(.ant-menu-item) {
  height: 48px;
  margin: var(--space-xs) 0;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 var(--space-md);
  transition: background-color var(--transition-fast), color var(--transition-fast);
  margin-left: 0 !important;
  margin-right: 0 !important;
  width: 90% !important;
  /* 添加硬件加速，减少重排 */
  transform: translateZ(0);
  will-change: transform, background-color;
  /* 确保字体不会导致尺寸变化 */
  font-weight: 500;
}

:deep(.ant-menu-item .anticon) {
  font-size: 20px;
  margin-right: var(--space-sm);
  transition: transform var(--transition-fast), color var(--transition-fast);
  /* 添加固定宽度和高度 */
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.ant-menu-item:hover) {
  background-color: var(--primary-light);
  color: var(--primary-color);
}

:deep(.ant-menu-item:hover .anticon) {
  transform: scale(1.1);
  color: var(--primary-color);
}

:deep(.ant-menu-item.ant-menu-item-selected) {
  background-color: var(--primary-light);
  color: var(--primary-color);
  font-weight: 500;
  /* 添加宽度固定，防止字体粗细变化导致宽度变化 */
  width: 90% !important;
  /* 添加transform硬件加速，减少重排 */
  transform: translateZ(0);
  will-change: transform, background-color;
}

:deep(.ant-menu-inline-collapsed) {
  width: 100%;
}

:deep(.ant-menu-title-content) {
  margin-inline-start: var(--space-sm) !important;
}
</style>