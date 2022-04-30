import { createApp } from 'vue'
import App from './App.vue'

// 加载路由配置
import router from './router/index' 
createApp(App)      // 是通过 createApp 来执行 Vue 的初始化，另外不管是 Vue 生态里的东西，还是外部插件、 UI 框架，统一都是由 use 来激活初始化
    .use(router)
    .mount('#app')
