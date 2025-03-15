<template>
  <div class="task-list card-shadow">
    <div class="card-header">
      <div class="section-header">
        <h3 class="section-title">{{ $t('taskList.title') }}</h3>
      </div>
    </div>
    
    <div class="scrollbar-container">
      <div v-for="(task, index) in tasks" :key="index" class="task-item">
        <div class="task-date">
          <div class="date-number">{{ task.date.day }}</div>
          <div class="date-day">{{ $t(task.date.weekdayKey) }}</div>
        </div>
        <div class="task-details">
          <h4 class="task-title">{{ $t(task.titleKey) }}</h4>
          <div class="task-meta">
            <span class="tag tag-info">{{ $t('taskList.category') }}</span>
            <span class="task-time">{{ $t(task.timeKey) }}</span>
          </div>
        </div>
        <button class="task-action">
          <svg viewBox="0 0 1024 1024" width="16" height="16">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tasks = ref([
  {
    date: { day: '23', weekdayKey: 'taskList.weekdays.monday' },
    titleKey: 'taskList.tasks.foodApp',
    timeKey: 'taskList.time.afternoon'
  },
  {
    date: { day: '25', weekdayKey: 'taskList.weekdays.wednesday' },
    titleKey: 'taskList.tasks.landingPage',
    timeKey: 'taskList.time.morning'
  }
])
</script>

<style scoped>
.task-list {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.card-shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.card-shadow:hover {
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-header {
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1d1f;
  margin: 0;
}

.scrollbar-container {
  max-height: 300px;
  overflow-y: auto;
  padding: 0 20px;
}

.task-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}

.task-item:last-child {
  border-bottom: none;
}

.task-date {
  width: 50px;
  text-align: center;
  margin-right: 15px;
}

.date-number {
  font-size: 18px;
  font-weight: 600;
  color: #1a1d1f;
}

.date-day {
  font-size: 12px;
  color: #6f767e;
}

.task-details {
  flex: 1;
}

.task-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #1a1d1f;
}

.task-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tag {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  font-weight: 500;
}

.tag-info {
  background-color: #f0f2f5;
  color: #6f767e;
}

.task-time {
  font-size: 12px;
  color: #6f767e;
}

.task-action {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: #6f767e;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s;
}

.task-action:hover {
  background-color: #f0f2f5;
}
</style>