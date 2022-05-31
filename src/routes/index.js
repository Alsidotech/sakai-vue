import {createRouter, createWebHistory} from 'vue-router';
import authRoutes from './auth.routes';
import appRoutes from './app.routes';

const routes = [
    appRoutes,
    authRoutes,
    {
        path: '/error',
        name: 'error',
        component: () => import(/* webpackChunkName: "error" */ '../pages/Error.vue')
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import(/* webpackChunkName: "404" */ '../pages/NotFound.vue')
    },
    {
        path: '/access',
        name: 'access',
        component: () => import(/* webpackChunkName: "access" */ '../pages/Access.vue')
    }
];

const index = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
});

export default index;
