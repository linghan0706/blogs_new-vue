<template>
  <div class="schedule-card card-shadow">
    <div class="card-header">
      <div class="schedule-header">
        <h3 class="schedule-title">{{ $t('schedule.title') }}</h3>
      </div>
    </div>
    
    <div class="calendar">
      <div class="calendar-header">
        <span>{{ currentMonth }}</span>
      </div>
      <div class="calendar-body">
        <div class="weekdays">
          <div v-for="day in weekdays" :key="day" class="weekday">{{ day }}</div>
        </div>
        <div class="days">
          <div v-for="(day, index) in calendarDays" :key="index" class="day-cell" :class="{
            'current-month': day.currentMonth,
            'today': isToday(day.fullDate),
            'other-month': !day.currentMonth
          }">
            <div class="calendar-day">
              <p>{{ day.day }}</p>
              <div v-if="hasEvent(day.fullDate)" class="event-indicator">
                <span class="tag" :class="'tag-' + getEventType(day.fullDate)" :title="getEventName(day.fullDate)">{{ getEventName(day.fullDate) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const events = ref([
  { date: '2023-10-15', nameKey: 'schedule.events.makanyukApp', type: 'warning' },
  { date: '2023-10-16', nameKey: 'schedule.events.foodConcept', type: 'success' },
  { date: '2023-10-19', nameKey: 'schedule.events.websiteDesign', type: 'primary' },
  { date: '2023-10-20', nameKey: 'schedule.events.kleponIo', type: 'info' },
  { date: '2023-10-22', nameKey: 'schedule.events.newWebApp', type: 'danger' },
])

const weekdays = ['日', '一', '二', '三', '四', '五', '六']
const currentDate = new Date()
const currentMonth = computed(() => {
  const options = { year: 'numeric', month: 'long' }
  return currentDate.toLocaleDateString('zh-CN', options)
})

const calendarDays = computed(() => {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  
  // 获取当月第一天
  const firstDay = new Date(year, month, 1)
  // 获取当月最后一天
  const lastDay = new Date(year, month + 1, 0)
  
  // 获取当月第一天是星期几
  const firstDayOfWeek = firstDay.getDay()
  // 获取当月天数
  const daysInMonth = lastDay.getDate()
  
  // 获取上个月最后几天
  const prevMonthLastDay = new Date(year, month, 0).getDate()
  
  const days = []
  
  // 添加上个月的最后几天
  for (let i = 0; i < firstDayOfWeek; i++) {
    const day = prevMonthLastDay - firstDayOfWeek + i + 1
    const prevMonth = month === 0 ? 11 : month - 1
    const prevYear = month === 0 ? year - 1 : year
    days.push({
      day,
      currentMonth: false,
      fullDate: `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    })
  }
  
  // 添加当月的天数
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      currentMonth: true,
      fullDate: `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
    })
  }
  
  // 添加下个月的开始几天，补满6行
  const remainingDays = 42 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    const nextMonth = month === 11 ? 0 : month + 1
    const nextYear = month === 11 ? year + 1 : year
    days.push({
      day: i,
      currentMonth: false,
      fullDate: `${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
    })
  }
  
  return days
})

const isToday = (date) => {
  const today = new Date()
  return date === `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
}

const hasEvent = (date) => {
  return events.value.some(event => event.date === date)
}

const getEventName = (date) => {
  const event = events.value.find(event => event.date === date)
  return event ? t(event.nameKey) : ''
}

const getEventType = (date) => {
  const event = events.value.find(event => event.date === date)
  return event ? event.type : ''
}
</script>

<style scoped>
.schedule-card {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  margin: 16px;
}

.card-shadow {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-shadow:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.card-header {
  padding: 20px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background: linear-gradient(to right, #f8f9fa, #ffffff);
}

.schedule-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.schedule-title {
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  letter-spacing: 0.5px;
}

.calendar {
  padding: 20px;
}

.calendar-header {
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 24px;
  text-transform: capitalize;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: 600;
  color: #5c6b7a;
  margin-bottom: 16px;
  padding: 8px 0;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.day-cell {
  padding: 8px;
  text-align: center;
  height: 70px;
  border-radius: 8px;
  color: #5c6b7a;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
  background-color: #fff;
}

.day-cell:hover {
  background-color: #f8f9fa;
  transform: scale(1.02);
}

.day-cell.current-month {
  color: #2c3e50;
}

.day-cell.other-month {
  opacity: 0.4;
  background-color: #fafbfc;
}

.day-cell.today {
  background-color: #e3f2fd;
  font-weight: 700;
  border: 2px solid #2196f3;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.15);
}

.calendar-day {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.calendar-day p {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
}

.event-indicator {
  margin-top: 6px;
  display: flex;
  justify-content: center;
}

.tag {
  display: inline-block;
  padding: 4px 8px;
  font-size: 11px;
  border-radius: 6px;
  font-weight: 600;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

.tag-warning {
  background-color: #fff3e0;
  color: #f57c00;
  border: 1px solid rgba(245, 124, 0, 0.2);
}

.tag-success {
  background-color: #e8f5e9;
  color: #2e7d32;
  border: 1px solid rgba(46, 125, 50, 0.2);
}

.tag-primary {
  background-color: #e8eaf6;
  color: #3f51b5;
  border: 1px solid rgba(63, 81, 181, 0.2);
}

.tag-info {
  background-color: #e3f2fd;
  color: #1976d2;
  border: 1px solid rgba(25, 118, 210, 0.2);
}

.tag-danger {
  background-color: #ffebee;
  color: #d32f2f;
  border: 1px solid rgba(211, 47, 47, 0.2);
}
</style>