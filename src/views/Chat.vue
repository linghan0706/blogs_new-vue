<template>
  <div class="chat-container">
    <el-card class="chat-card">
      <div class="chat-header">
        <el-avatar :size="48" :src="options.botAvatarImg" />
        <span class="chat-title">Chat </span>
        <el-select v-model="selectedModel" placeholder="选择模型" size="small" class="model-select">
          <el-option 
            v-for="model in availableModels" 
            :key="model.id" 
            :label="model.id" 
            :value="model.id" 
          />
        </el-select>
      </div>
      <div class="chat-messages" ref="messageList">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.agent === 'user' ? 'message-sent' : 'message-received']">
          <el-avatar :size="48" :src="message.agent === 'user' ? options.userAvatarImg : options.botAvatarImg" />
          <div class="message-content">
            <p>{{ message.text }}</p>
            <span class="message-time">{{ new Date().toLocaleTimeString() }}</span>
          </div>
        </div>
      </div>
      <div class="chat-input">
        <el-input
          v-model="inputMessage"
          :placeholder="options.inputPlaceholder"
          @keyup.enter="handleMessageSend"
        >
          <template #append>
            <el-button @click="handleMessageSend" type="primary">
              <el-icon><Position /></el-icon>
            </el-button>
          </template>
        </el-input>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Position } from '@element-plus/icons-vue'
import { sendChatMessage, getModelsList } from '../components/until/axios.ts'

// 导入图片资源
import botAvatar from '../assets/avatar/bot.jpg'
import userAvatar from '../assets/avatar/user.jpg'

const messages = ref([])
const inputMessage = ref('')
const messageList = ref(null)
const isLoading = ref(false)
const availableModels = ref([])
const selectedModel = ref('yi-lightning')
const options = ref({
  botAvatarImg: botAvatar,
  userAvatarImg: userAvatar,
  inputPlaceholder: '请输入消息...'
})

// 获取可用模型列表
onMounted(async () => {
  try {
    const response = await getModelsList()
    if (response && response.data) {
      availableModels.value = response.data
    }
  } catch (error) {
    console.error('获取模型列表失败:', error)
  }
})

const handleMessageSend = async () => {
  if (!inputMessage.value.trim() || isLoading.value) return
  
  const userMessage = inputMessage.value
  messages.value.push({
    agent: 'user',
    type: 'text',
    text: userMessage
  })
  
  inputMessage.value = ''
  scrollToBottom()
  
  try {
    isLoading.value = true
    
    // 构建聊天历史记录
    const chatHistory = messages.value.map(msg => ({
      role: msg.agent === 'user' ? 'user' : 'assistant',
      content: msg.text
    }))
    
    // 确保最后一条消息是用户消息
    if (chatHistory[chatHistory.length - 1].role !== 'user') {
      chatHistory.push({ role: 'user', content: userMessage })
    }
    
    const response = await sendChatMessage(chatHistory)
    
    messages.value.push({
      agent: 'bot',
      type: 'text',
      text: response.choices[0].message.content
    })
  } catch (error) {
    messages.value.push({
      agent: 'bot',
      type: 'text',
      text: '抱歉，出现了一些错误，请稍后重试。'
    })
    console.error('发送消息失败:', error)
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}

const scrollToBottom = () => {
  setTimeout(() => {
    if (messageList.value) {
      messageList.value.scrollTop = messageList.value.scrollHeight
    }
  }, 100)
}
</script>

<style scoped>
.chat-container {
  height: 100%;
  padding: 20px;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
}

@media screen and (max-width: 768px) {
  .chat-container {
    padding: 10px;
    padding-left: calc(var(--space-md) + 60px);
  }
}

.chat-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.chat-header {
  padding: 15px;
  border-bottom: 2px solid #e3f2fd;
  display: flex;
  align-items: center;
  gap: 15px;
  background: white;
  border-radius: 24px 24px 0 0;
}

.chat-title {
  font-size: clamp(18px, 2vw, 24px);
  font-weight: 600;
  background: linear-gradient(45deg, #2196f3, #64b5f6);
  -webkit-background-clip: text;
  color: transparent;
}

.model-select {
  margin-left: auto;
  width: 150px;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: clamp(15px, 3vw, 25px);
  display: flex;
  flex-direction: column;
  gap: clamp(15px, 2vw, 25px);
}

.message {
  display: flex;
  gap: 15px;
  max-width: min(80%, 600px);
  align-items: flex-start;
}

@media screen and (max-width: 480px) {
  .message {
    max-width: 90%;
    gap: 10px;
  }

  :deep(.el-avatar) {
    width: 48px !important;
    height: 48px !important;
    min-width: 48px !important;
    min-height: 48px !important;
    flex-shrink: 0 !important;
    border: 3px solid #fce4ec !important;
  }
}

:deep(.el-avatar) {
  border: 4px solid #e3f2fd;
  transition: transform 0.3s ease;
  object-fit: cover !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
  width: 48px !important;
  height: 48px !important;
  min-width: 48px !important;
  min-height: 48px !important;
}

:deep(.el-avatar):hover {
  transform: scale(1.1);
}

.message-sent {
  flex-direction: row-reverse;
  align-self: flex-end;
}

.message-content {
  background: #e3f2fd;
  padding: clamp(12px, 2.5vw, 20px);
  border-radius: 24px;
  word-break: break-word;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.message-content p {
  margin: 0;
  line-height: 1.6;
  font-size: 16px;
}

.message-time {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 8px;
  display: block;
}

.message-sent .message-content {
  background: linear-gradient(135deg, #2196f3, #64b5f6);
  color: white;
  border-top-right-radius: 8px;
}

.message-received .message-content {
  border-top-left-radius: 8px;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
}

.message-sent .message-time {
  color: rgba(255, 255, 255, 0.8);
}

.message {
  opacity: 0;
  transform: translateY(20px);
  animation: message-fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes message-fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.chat-input {
  padding: clamp(15px, 3vw, 25px);
  border-top: 2px solid #fce4ec;
  background: white;
  border-radius: 0 0 24px 24px;
}

:deep(.el-input__wrapper) {
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  background: #fff;
}

:deep(.el-input__inner) {
  height: 45px;
  font-size: 16px;
}

:deep(.el-input-group__append) {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background: linear-gradient(135deg, #2196f3, #64b5f6);
  border: none;
  padding: 0 20px;
}

:deep(.el-button) {
  border: none;
  background: transparent;
  color: white;
}

:deep(.el-button:hover) {
  background: transparent;
  transform: scale(1.1);
}

@media screen and (max-width: 480px) {
  :deep(.el-input-group__append) {
    padding: 0 15px;
  }
}
</style>