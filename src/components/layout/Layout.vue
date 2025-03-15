<template>
  <div class="app-layout">
    <SideBar class="sidebar" />
    <div class="main-content">
      <Header class="header" />
      <div class="content-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from './SideBar.vue'
import Header from './Header.vue'
</script>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: var(--bg-color);
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
}

.header {
  position: sticky;
  top: 0;
  z-index: 5;
  width: 100%;
}

.content-container {
  flex: 1;
  padding: var(--content-padding);
  background-color: var(--bg-color);
  overflow-x: hidden;
  transition: padding var(--transition-normal), background-color var(--transition-normal);
}

/* 媒体查询 - 平板设备 */
@media (max-width: 992px) {
  .content-container {
    padding: var(--content-padding);
  }
}

/* 媒体查询 - 移动设备 */
@media (max-width: 768px) {
  .main-content {
    margin-left: var(--sidebar-width);
  }
  
  .content-container {
    padding: var(--content-padding);
  }
}
</style>