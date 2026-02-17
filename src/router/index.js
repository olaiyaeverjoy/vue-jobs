import { createRouter, createWebHistory } from 'vue-router'
import Homeviews from '../views/Homeviews.vue'
import Jobsview from '../views/Jobsview.vue';
import NotFoundview from '../views/NotFoundview.vue';
import Jobview from '../views/Jobview.vue';


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
            name: 'job',
            component:Jobsview,
        },
        {
            path: '/jobs/:id',
            name: 'jobs',
            component: Jobview,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundview,
        }
    ],
});

export default router;