// 引入两个函数
import {   
    createRouter,                     // 新建路由实例
    createWebHashHistory,             // 配置内部使用的hash模式的路由，也就是url上会通过#来区分
} from 'vue-router'
// 引入两个组件：Home、About：根据不同的访问地址/和/home去渲染不同地组件，最后返回router
import Home from '../pages/home.vue'    
import About from '../pages/about.vue'

const routers = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router