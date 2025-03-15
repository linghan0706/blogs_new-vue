<template>
  <div class="studio-info card-shadow">
    <div class="studio-logo">
      <div class="studio-logo-circle">
        <svg viewBox="0 0 1024 1024" width="32" height="32">
          <path d="M894.6 313.5L639.4 58.2C610.2 29 570.5 14 529 14h-289c-41.5 0-81.2 15-110.4 44.2C100.4 87.5 85.5 127.2 85.5 168.6v686.8c0 41.5 15 81.2 44.2 110.4 29.2 29.2 68.9 44.2 110.4 44.2h454.9c41.5 0 81.2-15 110.4-44.2 29.2-29.2 44.2-68.9 44.2-110.4V424c0-41.5-15-81.2-44.2-110.4zM530.1 168.6c0-0.7 0.6-1.3 1.3-1.3h216.5c0.7 0 0.9 0.9 0.3 1.5l-215.8 215.8c-0.6 0.6-1.5 0.4-1.5-0.3V168.6z m327.4 686.8c0 13.8-5 27.1-14.7 36.8-9.7 9.7-22.9 14.7-36.8 14.7H240c-13.8 0-27.1-5-36.8-14.7-9.7-9.7-14.7-22.9-14.7-36.8V168.6c0-13.8 5-27.1 14.7-36.8 9.7-9.7 22.9-14.7 36.8-14.7h289c0.7 0 1.3 0.6 1.3 1.3v266.9c0 28.8 23.4 52.2 52.2 52.2h266.9c0.7 0 1.3 0.6 1.3 1.3v416.6z" fill="currentColor"></path>
          <path d="M603.7 644.9H240c-14.4 0-26 11.7-26 26s11.7 26 26 26h363.7c14.4 0 26-11.7 26-26s-11.7-26-26-26zM603.7 749.1H240c-14.4 0-26 11.7-26 26s11.7 26 26 26h363.7c14.4 0 26-11.7 26-26s-11.7-26-26-26z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <h3 class="studio-name">{{ $t('studioInfo.name') }}</h3>
    <p class="studio-description">{{ $t('studioInfo.description') }}</p>
    
    <div class="divider"></div>
    
    <div class="studio-stats">
      <div class="stat-item" v-for="(stat, index) in stats" :key="index">
        <h4 class="stat-value">{{ stat.value }}</h4>
        <p class="stat-label">{{ $t(stat.labelKey) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  { value: '23', labelKey: 'studioInfo.clients' },
  { value: '#2', labelKey: 'studioInfo.reputation' },
  { value: '17', labelKey: 'studioInfo.members' }
])
</script>

<style scoped>
.studio-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
}

.card-shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.card-shadow:hover {
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
}

.studio-logo {
  margin-bottom: 15px;
}

.studio-logo-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e0ecff;
  color: #4361ee;
  display: flex;
  align-items: center;
  justify-content: center;
}

.studio-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #1a1d1f;
}

.studio-description {
  font-size: 14px;
  color: #6f767e;
  margin-bottom: 20px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #f0f0f0;
  margin: 20px 0;
}

.studio-stats {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.stat-item {
  flex: 1;
}

.stat-value {
  font-size: 20px;
  font-weight: 600;
  color: #1a1d1f;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #6f767e;
}
</style>