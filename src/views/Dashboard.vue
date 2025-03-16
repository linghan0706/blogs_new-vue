<template>
  <div class="dashboard-content">
    <section class="dashboard-header">
      <h1 class="dashboard-title">{{ $t('dashboard.title') }}</h1>
      <div class="schedules-header">
        <h2 class="schedules-title">{{ $t('dashboard.schedule') }}</h2>
        <button class="btn btn-primary" style="border: none; padding: 1px; background-color: transparent;">{{ $t('dashboard.welcome') }}</button>
      </div>
    </section>
    
    <div class="dashboard-layout">
      <div class="projects-section">
        <div class="project-cards">
          <ProjectCard 
            type="ui-design" 
            title="UI " 
            :count="0" 
          />
          
          <ProjectCard 
            type="illustration" 
            title="Codeitem" 
            :count="0" 
          />
          
          <ProjectCard 
            type="development" 
            title="Development" 
            :count="0" 
          />
        </div>
        
        <StudioInfo class="studio-info-card" />
        
        <TeamMember class="team-member-card" />
      </div>
      
      <div class="schedule-section">
        <Schedule class="schedule-card" />
        <TaskList class="task-list-card" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '../components/dashboard/ProjectCard.vue'
import StudioInfo from '../components/dashboard/StudioInfo.vue'
import TeamMember from '../components/dashboard/TeamMember.vue'
import Schedule from '../components/dashboard/Schedule.vue'
import TaskList from '../components/dashboard/TaskList.vue'
</script>

<style scoped>
/* 仪表盘内容样式 */
.dashboard-content {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: clamp(var(--space-sm), 3vw, var(--space-md));
  background-color: var(--bg-color);
  border-radius: var(--radius-lg);
}

.dashboard-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: clamp(var(--space-sm), 2vw, var(--space-md));
  margin-bottom: clamp(var(--space-lg), 4vw, var(--space-xl));
  padding: clamp(var(--space-sm), 3vw, var(--space-md));
  background-color: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.dashboard-title {
  font-size: clamp(var(--font-lg), 4vw, var(--font-xl));
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.schedules-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(var(--space-xs), 2vw, var(--space-md));
}

.schedules-title {
  font-size: clamp(var(--font-md), 3vw, var(--font-lg));
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.view-details-btn {
  color: var(--primary-color);
  text-decoration: none;
  font-size: clamp(var(--font-xs), 2vw, var(--font-sm));
  transition: color var(--transition-fast);
  -webkit-tap-highlight-color: transparent;
}

.view-details-btn:hover {
  color: var(--primary-dark);
}

/* 仪表盘布局 */
.dashboard-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: clamp(var(--space-md), 3vw, var(--space-lg));
}

/* 项目卡片样式 */
.project-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: clamp(var(--space-md), 3vw, var(--space-lg));
  margin-bottom: clamp(var(--space-lg), 4vw, var(--space-xl));
}

@media (max-width: 992px) {
  .dashboard-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .schedules-header {
    width: 100%;
    justify-content: space-between;
  }

  .dashboard-content {
    padding-left: calc(var(--space-md) + 60px);
  }
}

@media (max-width: 480px) {
  .project-cards {
    grid-template-columns: 1fr;
  }
}

.project-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.project-icon {
  margin-bottom: 15px;
}

.icon-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ui-icon {
  background-color: #ffe8d9;
}

.illustration-icon {
  background-color: #e0ecff;
}

.development-icon {
  background-color: #d9f2ff;
}

.project-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #1a1d1f;
}

.project-count {
  font-size: 14px;
  color: #6f767e;
  margin-bottom: 15px;
}

.view-all-btn {
  background-color: #f5f5f5;
  color: #1a1d1f;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
}

/* 工作室信息样式 */
.studio-info {
  background-color: #fff;
  border-radius: 16px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.studio-logo-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e0ecff;
  margin-bottom: 15px;
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

.studio-stats {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
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

/* 团队成员样式 */
.team-members {
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1d1f;
}

.section-actions {
  display: flex;
  gap: 5px;
}

.action-btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #f0f0f0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.members-list {
  list-style: none;
}

.member-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.member-item:last-child {
  border-bottom: none;
}

.member-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 12px;
}

.member-avatar-1 {
  background-color: #ffcfd2;
}

.member-avatar-2 {
  background-color: #b9fbc0;
}

.member-avatar-3 {
  background-color: #a3c4f3;
}

.member-avatar-4 {
  background-color: #cfbaf0;
}

.member-name {
  font-size: 14px;
  font-weight: 600;
  color: #1a1d1f;
  margin-bottom: 3px;
}

.member-role {
  font-size: 12px;
  color: #6f767e;
}

/* 日程表样式 */
.schedule-section {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.weekly-schedule {
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.time-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 15px;
  padding-left: 50px;
}

.time-slot {
  font-size: 12px;
  color: #6f767e;
  text-align: center;
}

.schedule-grid {
  display: grid;
  grid-template-rows: repeat(7, auto);
  gap: 15px;
}

.day-column {
  display: flex;
  align-items: center;
}

.day-label {
  width: 50px;
  font-size: 14px;
  font-weight: 500;
  color: #1a1d1f;
}

.day-events {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  position: relative;
  min-height: 40px;
}

.event {
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.makanyuk-app {
  background-color: #4361ee;
}

.food-concept {
  background-color: #2ec4b6;
}

.website-design {
  background-color: #ff9f1c;
}

.klepon-io {
  background-color: #e71d36;
}

.new-web-app {
  background-color: #4cc9f0;
}

/* 今日任务样式 */
.today-tasks {
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.task-card {
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  background-color: #f8f9fa;
  margin-bottom: 15px;
}

.task-card:last-child {
  margin-bottom: 0;
}

.task-date {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-size: 16px;
  font-weight: 500;
  color: #1a1d1f;
  margin-bottom: 5px;
}

.task-meta {
  display: flex;
  gap: 15px;
  font-size: 12px;
}

.task-category {
  color: #4361ee;
}

.task-time {
  color: #6f767e;
}

.task-action {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.chevron-right-icon {
  width: 16px;
  height: 16px;
  background-color: #8a94a6;
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}
</style>