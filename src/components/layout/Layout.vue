<template>
  <div class="app-layout">
    <SideBar class="sidebar" />
    <div class="main-content">
      <Header class="header" />
      <div class="content-container">
        <RouterTransition>
          <slot></slot>
        </RouterTransition>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from './SideBar.vue'
import Header from './Header.vue'
import RouterTransition from './RouterTransition.vue'
</script>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: var(--bg-color);
  position: relative;
  overflow-x: hidden;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: var(--sidebar-width);
  z-index: 10;
  transition: width var(--transition-normal), transform var(--transition-normal);
}

.main-content {
  flex: 1;
  margin-left: var(--sidebar-width);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: margin-left var(--transition-normal);
  width: calc(100% - var(--sidebar-width));
  padding: 12px;
}

.header {
  position: sticky;
  top: 0;
  z-index: 5;
  width: 100%;
  backdrop-filter: blur(8px);
  background-color: rgba(var(--bg-color-rgb), 0.85);
  margin-bottom: 12px;
}

.content-container {
  flex: 1;
  padding: 16px;
  background-color: var(--bg-color);
  overflow-x: hidden;
  position: relative;
  min-height: 500px; /* 确保最小高度，防止内容变化导致容器高度变化 */
  transition: padding var(--transition-normal), background-color var(--transition-normal);
  border-radius: 8px;
}

/* 媒体查询 - 平板设备 */
@media (max-width: 992px) {
  .main-content {
    padding: 8px;
  }
  
  .content-container {
    padding: 12px;
  }
}

/* 媒体查询 - 移动设备 */
@media (max-width: 768px) {
  .main-content {
    padding: 6px;
    margin-left: 0;
    width: 100%;
  }
  
  .content-container {
    padding: 8px;
  }
}
  
  .app-layout.sidebar-open .sidebar {
    transform: translateX(0);
  }
  
  .app-layout.sidebar-open .main-content {
    transform: translateX(var(--sidebar-width));
  }


</style>