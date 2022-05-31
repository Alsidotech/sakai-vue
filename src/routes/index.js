import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "index" */ '../App.vue'),
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '../components/Dashboard.vue')
            },
            {
                path: '/formlayout',
                name: 'formlayout',
                component: () => import(/* webpackChunkName: "forms" */ '../components/FormLayoutDemo.vue')
            },
            {
                path: '/input',
                name: 'input',
                component: () => import(/* webpackChunkName: "inputs" */ '../components/InputDemo.vue')
            },
            {
                path: '/floatlabel',
                name: 'floatlabel',
                component: () => import(/* webpackChunkName: "labels" */ '../components/FloatLabelDemo.vue')
            },
            {
                path: '/invalidstate',
                name: 'invalidstate',
                component: () => import(/* webpackChunkName: "invalid" */ '../components/InvalidStateDemo.vue')
            },
            {
                path: '/button',
                name: 'button',
                component: () => import(/* webpackChunkName: "button" */ '../components/ButtonDemo.vue')
            },
            {
                path: '/table',
                name: 'table',
                component: () => import(/* webpackChunkName: "table" */ '../components/TableDemo.vue')
            },
            {
                path: '/list',
                name: 'list',
                component: () => import(/* webpackChunkName: "list" */ '../components/ListDemo.vue')
            },
            {
                path: '/tree',
                name: 'tree',
                component: () => import(/* webpackChunkName: "tree" */ '../components/TreeDemo.vue')
            },
            {
                path: '/panel',
                name: 'panel',
                component: () => import(/* webpackChunkName: "panels" */ '../components/PanelsDemo.vue')
            },
            {
                path: '/overlay',
                name: 'overlay',
                component: () => import(/* webpackChunkName: "overlay" */ '../components/OverlayDemo.vue')
            },
            {
                path: '/media',
                name: 'media',
                component: () => import(/* webpackChunkName: "media" */ '../components/MediaDemo.vue')
            },
            {
                path: '/menu',
                component: () => import(/* webpackChunkName: "menu" */ '../components/MenuDemo.vue'),
                children: [
                    {
                        path: '',
                        component: () => import(/* webpackChunkName: "personal" */ '../components/menu/PersonalDemo.vue')
                    },
                    {
                        path: '/menu/seat',
                        component: () => import(/* webpackChunkName: "seat" */ '../components/menu/SeatDemo.vue')
                    },
                    {
                        path: '/menu/payment',
                        component: () => import(/* webpackChunkName: "payment" */ '../components/menu/PaymentDemo.vue')
                    },
                    {
                        path: '/menu/confirmation',
                        component: () => import(/* webpackChunkName: "confirm" */ '../components/menu/ConfirmationDemo.vue')
                    },
                ],
            },
            {
                path: '/messages',
                name: 'messages',
                component: () => import(/* webpackChunkName: "message" */ '../components/MessagesDemo.vue')
            },
            {
                path: '/file',
                name: 'file',
                component: () => import(/* webpackChunkName: "file" */ '../components/FileDemo.vue')
            },
            {
                path: '/chart',
                name: 'chart',
                component: () => import(/* webpackChunkName: "chart" */ '../components/ChartDemo.vue')
            },
            {
                path: '/misc',
                name: 'misc',
                component: () => import(/* webpackChunkName: "misc" */ '../components/MiscDemo.vue')
            },
            {
                path: '/crud',
                name: 'crud',
                component: () => import(/* webpackChunkName: "crud" */ '../pages/CrudDemo.vue')
            },
            {
                path: '/timeline',
                name: 'timeline',
                component: () => import(/* webpackChunkName: "timeline" */ '../pages/TimelineDemo.vue')
            },
            {
                path: '/empty',
                name: 'empty',
                component: () => import(/* webpackChunkName: "empty" */ '../components/EmptyPage.vue')
            },
            {
                path: '/documentation',
                name: 'documentation',
                component: () => import(/* webpackChunkName: "documentation" */ '../components/Documentation.vue')
            },
            {
                path: '/icons',
                name: 'icons',
                component: () => import(/* webpackChunkName: "icons" */ '../components/IconsDemo.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../pages/Login.vue')
    },
    {
        path: '/landing',
        name: 'landing',
        component: () => import(/* webpackChunkName: "landing" */ '../pages/LandingDemo.vue')
    },
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
