import axios from 'axios';

// API接口地址配置
const API_CONFIG = {
  BASE_URL: 'https://chatapi-self-two.vercel.app/api',
  ENDPOINTS: {
    CHAT_COMPLETIONS: '/chat/completions',
    MODELS: '/models'
  }
};

// 配置axios实例
const instance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 添加响应拦截器
instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // 服务器返回错误状态码
      console.error('API错误:', error.response.data);
    } else if (error.request) {
      // 请求发送失败
      console.error('网络错误:', error.request);
    } else {
      // 请求配置错误
      console.error('请求错误:', error.message);
    }
    return Promise.reject(error);
  }
);

// 测试连接
// export async function testConnection() {
//   try {
//     const response = await instance.get('/api/test');
//     console.log('连接成功:', response.data);
//     return response.data;
//   } catch (error: any) {
//     console.error('连接失败:', error.response?.data || error.message);
//     throw error;
//   }
// }

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
    
    const response = await instance.post(API_CONFIG.ENDPOINTS.CHAT_COMPLETIONS, data);
    console.log('聊天响应:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('发送消息失败:', error.response?.data || error.message);
    throw error;
  }
}

// 获取模型列表
export async function getModelsList() {
  try {
    const response = await instance.get(API_CONFIG.ENDPOINTS.MODELS);
    console.log('模型列表:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('获取模型列表失败:', error.response?.data || error.message);
    throw error;
  }
}