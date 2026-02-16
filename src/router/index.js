import { createRouter, createWebHistory } from 'vue-router'
import Homeviews from '../views/Homeviews.vue'
import Jobsview from '../views/Jobsview.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component:Homeviews,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component:Jobsview,
        },
    ],
});

export default router;