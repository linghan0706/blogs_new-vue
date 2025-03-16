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
  el.style.position = 'absolute'
  el.style.width = '100%'
}

const enter = (el) => {
  el.style.position = 'absolute'
  el.style.width = '100%'
}

const afterEnter = (el) => {
  el.style.position = ''
  el.style.width = ''
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(30px) scale(0.95);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px) scale(0.95);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}
</style>