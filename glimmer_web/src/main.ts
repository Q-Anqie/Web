import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 通用样式引入
import '@/assets/styles/common.css'

import App from './App.vue'
import router from './router'
// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// element-plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 全局注册
const app = createApp(App)
// ==================== Element Plus 图标 全局注册 =====================
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// ==================== Pinia 全局注册 =====================
app.use(createPinia())
// ==================== Router 全局注册 =====================
app.use(router)
// ==================== Element Plus 全局注册 =====================
app.use(ElementPlus, {locale: zhCn})



// 挂载
app.mount('#app')
