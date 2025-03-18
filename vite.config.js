import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// API接口地址配置
const apiConfig = {
  baseURL: 'https://chatapi-self-two.vercel.app'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css'],
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: apiConfig.baseURL,
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  }
})
