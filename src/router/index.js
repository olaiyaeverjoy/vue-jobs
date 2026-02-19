import { createRouter, createWebHistory } from 'vue-router'
import Homeviews from '../views/Homeviews.vue'
import Jobsview from '../views/Jobsview.vue';
import NotFoundview from '../views/NotFoundview.vue';
import Jobview from '../views/Jobview.vue';
import AddJobview from '../views/AddJobview.vue';
import EditJobview from '../views/EditJobview.vue';


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
            path: '/jobs/add',
            name: 'Add Job',
            component: AddJobview,
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-jobs',
            component: EditJobview,
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