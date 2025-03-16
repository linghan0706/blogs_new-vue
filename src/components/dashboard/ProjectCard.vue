<template>
  <div class="project-card card-shadow">
    <div class="project-icon">
      <div :class="['avatar', iconClass]">
        <svg v-if="props.type === 'ui-design'" viewBox="0 0 1024 1024" width="32" height="32">
          <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" fill="currentColor"></path>
        </svg>
        <svg v-if="props.type === 'illustration'" viewBox="0 0 1024 1024" width="32" height="32">
          <path d="M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-37.9 37.9-99.5 37.9-137.5 0-37.9-37.9-37.9-99.5 0-137.5l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0L257.9 593.5c-59.2 59.2-59.2 155.4 0 214.6 59.2 59.2 155.4 59.2 214.6 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-59.2-59.2-155.4-59.2-214.6 0L502 307.6c-3.1 3.1-3.1 8.2 0 11.3L541.6 358c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c37.9-37.9 99.5-37.9 137.5 0 37.9 37.9 37.9 99.5 0 137.5L690.3 495.6c-3.1 3.1-3.1 8.2 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c59.2-59.2 59.2-155.4 0-214.6z" fill="currentColor"></path>
        </svg>
        <svg v-if="props.type === 'development'" viewBox="0 0 1024 1024" width="32" height="32">
          <path d="M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <h3 class="project-title">{{ title }}</h3>
    <p class="project-count">{{ count }} {{ $t('projectCard.projects') }}</p>
    <button class="view-all-btn">{{ $t('projectCard.viewAll') }}</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['ui-design', 'illustration', 'development'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  }
})

const iconClass = computed(() => {
  const classes = {
    'ui-design': 'bg-orange',
    'illustration': 'bg-blue',
    'development': 'bg-cyan'
  }
  return classes[props.type] || ''
})
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-sizing: border-box;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.card-shadow {
  box-shadow: var(--shadow-sm);
}

.card-shadow:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.project-icon {
  margin-bottom: var(--space-lg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast);
}

.avatar:hover {
  transform: scale(1.1);
}

.bg-orange {
  background-color: var(--primary-light);
  color: var(--primary-color);
}

.bg-blue {
  background-color: var(--primary-light);
  color: var(--primary-color);
}

.bg-cyan {
  background-color: var(--primary-light);
  color: var(--primary-color);
}

.project-title {
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 var(--space-sm);
  line-height: 1.4;
}

.project-count {
  font-size: var(--font-sm);
  color: var(--text-secondary);
  margin: 0 0 var(--space-lg);
  line-height: 1.4;
}

.view-all-btn {
  padding: var(--space-sm) var(--space-lg);
  border: none;
  background-color: var(--primary-light);
  color: var(--primary-color);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: var(--font-sm);
  font-weight: 500;
  transition: all var(--transition-fast);
}

.view-all-btn:hover {
  background-color: var(--primary-color);
  color: var(--card-bg);
  transform: translateY(-2px);
}
</style>