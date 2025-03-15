<template>
  <el-menu
    class="sidebar"
    :collapse="true"
    :default-active="activeIndex"
    background-color="#fff"
    text-color="#8a94a6"
    active-text-color="#4361ee">
    <div class="logo">
      <div class="logo-icon">Tools</div>
    </div>
    
    <el-menu-item index="1" route="/">
      <el-icon><HomeFilled /></el-icon>
    </el-menu-item>
    
    <el-menu-item index="2">
      <el-icon><TrendCharts /></el-icon>
    </el-menu-item>
    
    <el-menu-item index="3">
      <el-icon><Grid /></el-icon>
    </el-menu-item>
    
    <el-menu-item index="4">
      <el-icon><User /></el-icon>
    </el-menu-item>
    
    <el-menu-item index="5">
      <el-icon><Setting /></el-icon>
    </el-menu-item>
    
    <div class="user-profile">
      <el-avatar :size="40" :src="userAvatar">
        <el-icon><User /></el-icon>
      </el-avatar>
    </div>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { HomeFilled, TrendCharts, Grid, User, Setting } from '@element-plus/icons-vue'

const route = useRoute()
const activeIndex = ref('1')
const userAvatar = ref('')
</script>

<style scoped>
.sidebar {
  width: var(--sidebar-width);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-lg) 0;
  background-color: var(--card-bg);
  box-shadow: var(--shadow-sm);
  transition: width var(--transition-normal), background-color var(--transition-normal);
}

.logo {
  margin-bottom: var(--space-xl);
  transition: margin-bottom var(--transition-normal);
}

.logo-icon {
  width: 40px;
  height: 40px;
  background-color: #4361ee;
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.user-profile {
  margin-top: auto;
  margin-bottom: 20px;
}

:deep(.el-menu-item) {
  height: 40px;
  margin-bottom: 10px;
  border-radius: 10px;
}

:deep(.el-menu-item.is-active) {
  background-color: #eef2ff;
}

:deep(.el-menu--collapse) {
  border-right: none;
}
</style>