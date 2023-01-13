import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    //createRouter   vue2中是 new Vue
    history: createWebHashHistory(), //createWebHashHistory  ，v3文档 API里有 ，将模式修改 ，Vue2中是mode :history
    routes: [{
        name: '登录',
        path: '/login',
        component: () =>
            import ('../views/Login.vue'), //动态路由的写法
    }, ],
})

export default router