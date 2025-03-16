import { createApp } from 'vue'
import App from './App.vue'

// 引入路由
import router from './router'

// 引入Ant Design Vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

// 引入Element Plus相关
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入Element Plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 引入i18n国际化插件
import i18n from './i18n'


import './assets/variables.css'
import './assets/main.css'

const app = createApp(App)

// 注册Element Plus
app.use(ElementPlus)


// 注册Ant Design Vue
app.use(Antd)
// 注册Ant Design Vue x
// app.use(AntDesignX);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.use(i18n)
app.use(router)

app.mount('#app')