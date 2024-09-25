import { createRouter, createWebHistory } from 'vue-router';


const constantRoutesChildren = [
    {
        path: '/order',
        component: () => import('@/components/order/index.vue'),
    },
    {
        path: '/goods',
        component: () => import('@/components/goods/index.vue'),
    },
]

export const constantRoutes = [
    {
        path: '/index',
        component: () => import('@/views/index.vue'),
        hidden: true,
        children:constantRoutesChildren
        
    },
    {
        path: '/',
        component: () => import('@/views/welcome.vue'),
        hidden: true,
        
    },
    {
        path: '/login',
        component: () => import('@/views/welcome.vue'),
        hidden: true,
        
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
});

export default router;