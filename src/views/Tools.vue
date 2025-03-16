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
  padding: clamp(15px, 3vw, 20px);
  max-width: 1200px;
  margin: 0 auto;
}

.tools-title {
  text-align: center;
  margin-bottom: clamp(20px, 5vw, 40px);
  color: #2c3e50;
  font-size: clamp(1.5rem, 4vw, 2rem);
}

.tools-grid {
  display: grid;
  gap: clamp(20px, 4vw, 40px);
}

.category-title {
  margin-bottom: clamp(15px, 3vw, 20px);
  color: #2c3e50;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
}

.tools-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: clamp(15px, 3vw, 20px);
}

.tool-card {
  display: flex;
  align-items: center;
  padding: clamp(15px, 3vw, 20px);
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
  -webkit-tap-highlight-color: transparent;
}

.tool-card:hover, .tool-card:active {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.tool-icon {
  width: clamp(40px, 8vw, 50px);
  height: clamp(40px, 8vw, 50px);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: clamp(10px, 2vw, 15px);
  flex-shrink: 0;
}

.tool-icon span {
  color: white;
  font-size: clamp(1.2em, 2.5vw, 1.5em);
  font-weight: bold;
}

.tool-info {
  flex-grow: 1;
  min-width: 0;
}

.tool-name {
  margin: 0 0 5px;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #2c3e50;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tool-desc {
  margin: 0;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .tools-container {
    padding: 15px;
    padding-left: calc(var(--sidebar-width) + 80px);
  }

  .tools-grid {
    gap: 20px;
  }

  .tools-list {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .tools-container {
    padding: 50px;
  }

  .tools-grid {
    gap: 20px;
  }

  .tool-card {
    padding: 12px;
  }

  .tool-icon {
    width: 36px;
    height: 36px;
    margin-right: 10px;
  }
}
</style>