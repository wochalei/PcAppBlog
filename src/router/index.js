import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
//2. 路由配置
const routes = [

    { 
        
        path: '/', component: () => import('@/layout/index.vue'),
        children:[
            {
                path:'',
                component: () => import('@/page/index.vue')
            },
            {
                path:'details',
                name:'details',
                component: () => import('@/page/details.vue')
            },
            {
                path:'myself',
                component: () => import('@/page/myself.vue')
            },
            {
                path:'kinds',
                component: () => import('@/page/kinds.vue')
            },
        ] 


    },
    
]

// 3. 创建路由实例
const router = createRouter({
    // （1）采用hash 模式
    // history: createWebHashHistory(),
    // （2）采用 history 模式
    history: createWebHistory(),
    routes, //使用上方定义的路由配置
})

// 4. 导出router
export default router
