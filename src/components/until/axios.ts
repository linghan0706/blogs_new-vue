import axios from 'axios';

// 配置axios实例
const instance = axios.create({
  baseURL: '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 测试连接
export async function testConnection() {
  try {
    const response = await instance.get('/api/test');
    console.log('连接成功:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('连接失败:', error.response?.data || error.message);
    throw error;
  }
}

// 定义消息类型
interface Message {
  role: string;
  content: string;
}

// 定义聊天请求参数类型
interface ChatRequest {
  messages: Message[];
  model: string;
  temperature?: number;
}

// 发送聊天消息
export async function sendChatMessage(messages: Message[]) {
  try {
    const data: ChatRequest = {
      messages,
      model: 'yi-lightning',
      temperature: 0.3
    };
    
    const response = await instance.post('/api/chat', data);
    console.log('聊天响应:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('发送消息失败:', error.response?.data || error.message);
    throw error;
  }
}