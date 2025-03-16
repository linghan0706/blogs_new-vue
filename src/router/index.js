import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import Tools from '../views/Tools.vue'
import Chat from '../views/Chat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})

export default router