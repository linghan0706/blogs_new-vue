<template>
  <transition
    name="fade"
    mode="out-in"
    @before-leave="beforeLeave"
    @enter="enter"
    @after-enter="afterEnter"
  >
    <slot></slot>
  </transition>
</template>

<script setup>
const beforeLeave = (el) => {
  // 保存元素的原始尺寸
  const rect = el.getBoundingClientRect()
  el.style.position = 'absolute'
  el.style.width = `${rect.width}px`
  el.style.height = `${rect.height}px`
  el.style.top = '0'
  el.style.left = '0'
}

const enter = (el) => {
  // 使用绝对定位但不改变元素尺寸
  el.style.position = 'absolute'
  el.style.width = '100%'
  el.style.top = '0'
  el.style.left = '0'
}

const afterEnter = (el) => {
  // 恢复正常布局流
  el.style.position = ''
  el.style.width = ''
  el.style.height = ''
  el.style.top = ''
  el.style.left = ''
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  will-change: opacity, transform;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(20px) scale(0.98);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px) scale(0.98);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}
</style>