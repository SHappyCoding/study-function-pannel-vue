import { createApp } from 'vue'
import App from './App.vue'

// 加载路由配置
import router from './router/index' 
createApp(App)
    .use(router)
    .mount('#app')
