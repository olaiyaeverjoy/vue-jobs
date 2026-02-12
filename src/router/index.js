import { createRouter, createWebHistory } from 'vue-router'
import Homeviews from '../views/Homeviews.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '/',
            component:Homeviews,
        },
    ],
});

export default router;