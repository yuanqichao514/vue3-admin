import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/views/Index.vue'

const router = createRouter({
    history: createWebHashHistory(), // hash模式
    routes: [
        {
            path: '/',
            component: Index
        }
    ]
})

export default router