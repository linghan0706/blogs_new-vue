<template>
  <div class="tools-container">
    <h1 class="tools-title">实用工具推荐</h1>
    <div class="tools-grid">
      <div v-for="category in toolCategories" :key="category.name" class="category-section">
        <h2 class="category-title">{{ category.name }}</h2>
        <div class="tools-list">
          <a v-for="tool in category.tools" 
             :key="tool.name" 
             :href="tool.url" 
             target="_blank" 
             class="tool-card">
            <div class="tool-icon" :style="{ backgroundColor: tool.iconBg }">
              <span>{{ tool.name[0] }}</span>
            </div>
            <div class="tool-info">
              <h3 class="tool-name">{{ tool.name }}</h3>
              <p class="tool-desc">{{ tool.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const toolCategories = ref([
  {
    name: '开发工具',
    tools: [
      {
        name: 'GitHub',
        description: '全球最大的代码托管平台',
        url: 'https://github.com',
        iconBg: '#24292e'
      },
      {
        name: 'CodePen',
        description: '在线代码编辑器和前端开发环境',
        url: 'https://codepen.io',
        iconBg: '#47cf73'
      },
      {
        name: 'SQL Pub',
        description: '免费的Mysql服务',
        url: 'https://www.sqlpub.com/',
        iconBg: '#f48024'
      }
    ]
  },
  {
    name: '设计工具',
    tools: [
      {
        name: 'Figma',
        description: '专业的在线UI设计工具',
        url: 'https://www.figma.com',
        iconBg: '#1abcfe'
      },
      {
        name: 'Dribbble',
        description: '设计师作品分享平台',
        url: 'https://dribbble.com',
        iconBg: '#ea4c89'
      },
      {
        name: 'Coolors',
        description: '配色方案生成器',
        url: 'https://coolors.co',
        iconBg: '#1ac7c3'
      }
    ]
  },
  {
    name: '效率工具',
    tools: [
      {
        name: 'Notion',
        description: '多功能笔记和协作平台',
        url: 'https://www.notion.so',
        iconBg: '#000000'
      },
      {
        name: 'Trello',
        description: '项目管理和任务追踪工具',
        url: 'https://trello.com',
        iconBg: '#0079bf'
      },
      {
        name: 'Grammarly',
        description: '智能写作和语法检查工具',
        url: 'https://www.grammarly.com',
        iconBg: '#15c39a'
      }
    ]
  }
])
</script>

<style scoped>
.tools-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.tools-title {
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
}

.tools-grid {
  display: grid;
  gap: 40px;
}

.category-title {
  margin-bottom: 20px;
  color: #2c3e50;
  font-size: 1.5em;
}

.tools-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.tool-card {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.tool-icon {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
}

.tool-icon span {
  color: white;
  font-size: 1.5em;
  font-weight: bold;
}

.tool-info {
  flex-grow: 1;
}

.tool-name {
  margin: 0 0 5px;
  font-size: 1.1em;
  color: #2c3e50;
}

.tool-desc {
  margin: 0;
  font-size: 0.9em;
  color: #666;
}

@media (max-width: 768px) {
  .tools-container {
    padding: 15px;
  }

  .tools-list {
    grid-template-columns: 1fr;
  }

  .tool-card {
    padding: 15px;
  }
}
</style>