<template>
  <div class="team-members card-shadow">
    <div class="card-header">
      <div class="section-header">
        <h3 class="section-title">{{ $t('teamMember.title') }}</h3>
        <div class="section-actions">
          <div class="button-group">
            <button class="action-button">
              <svg viewBox="0 0 1024 1024" width="16" height="16">
                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9 0.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" fill="currentColor"></path>
              </svg>
            </button>
            <button class="action-button">
              <svg viewBox="0 0 1024 1024" width="16" height="16">
                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" fill="currentColor"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="scrollbar-container">
      <ul class="members-list">
        <li v-for="(member, index) in members" :key="index" class="member-item">
          <div :class="['member-avatar', 'member-avatar-' + (index % 4 + 1)]">
            {{ member.name.charAt(0) }}
          </div>
          <div class="member-info">
            <h4 class="member-name">{{ member.name }}</h4>
            <p class="member-role">{{ $t(member.roleKey) }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 设计成员信息
const members = ref([
  { name: 'lin07 ', roleKey: 'Web开发' },
  // { name: '', roleKey: 'teamMember.roles.developer' },
  // { name: '', roleKey: 'teamMember.roles.animator' },
  // { name: 'Kathryn Murphy', roleKey: 'teamMember.roles.uxResearcher' },
])
</script>

<style scoped>
.team-members {
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

.section-actions {
  display: flex;
  align-items: center;
}

.button-group {
  display: flex;
  gap: 5px;
}

.action-button {
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
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: #f0f2f5;
}

.scrollbar-container {
  max-height: 300px;
  overflow-y: auto;
  padding: 0 20px;
}

.members-list {
  list-style: none;
  padding: 0;
  margin: 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.member-info {
  margin-left: 12px;
}

.member-name {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #1a1d1f;
}

.member-role {
  font-size: 12px;
  color: #6f767e;
  margin: 0;
}

.member-avatar-1 {
  background-color: #ffcfd2;
  color: #ef4444;
}

.member-avatar-2 {
  background-color: #d9f2ff;
  color: #0ca5e9;
}

.member-avatar-3 {
  background-color: #e0ecff;
  color: #4361ee;
}

.member-avatar-4 {
  background-color: #ffe8d9;
  color: #ff7d00;
}
</style>