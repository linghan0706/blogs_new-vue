<template>
  <div class="chat-container">
    <el-card class="chat-card">
      <div class="chat-header">
        <el-avatar :size="48" :src="options.botAvatarImg" />
        <span class="chat-title">Chat </span>
      </div>
      <div class="chat-messages" ref="messageList">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.agent === 'user' ? 'message-sent' : 'message-received']">
          <el-avatar :size="48" :src="message.agent === 'user' ? options.userAvatarImg : options.botAvatarImg" />
          <div class="message-content">
            <p>{{ message.text }}</p>
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
import { ref } from 'vue'
import { Position } from '@element-plus/icons-vue'
import { sendChatMessage } from '../components/until/axios.ts'

const messages = ref([])
const inputMessage = ref('')
const messageList = ref(null)
const isLoading = ref(false)
const options = ref({
  botAvatarImg: 'https://th.bing.com/th/id/OIP.Jt2Tm0SO9yukZS409L-4HwHaHa?rs=1&pid=ImgDetMain',
  userAvatarImg: 'https://th.bing.com/th/id/OIP.QCSl2q8gy1VcXOZ9feaP6gHaEo?w=309&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  inputPlaceholder: '请输入消息...'
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
    const response = await sendChatMessage([{ role: 'user', content: userMessage }])
    
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
}

.chat-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 10px;
}

.chat-title {
  font-size: 16px;
  font-weight: 500;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.message {
  display: flex;
  gap: 15px;
  max-width: 80%;
}

.message-sent {
  flex-direction: row-reverse;
  align-self: flex-end;
}

.message-content {
  background: var(--el-color-primary-light-9);
  padding: 10px 15px;
  border-radius: 10px;
}

.message-sent .message-content {
  background: var(--el-color-primary);
  color: white;
}

.chat-input {
  padding: 20px;
  border-top: 1px solid #eee;
}
</style>