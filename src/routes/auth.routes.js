export default {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ '../pages/user'),
    redirect: '/user/login',
    children: [
        {
            path: 'login',
            component: () => import(/* webpackChunkName: "login" */ '../pages/user/Login.vue')
        },
        {
            path: 'landing',
            component: () => import(/* webpackChunkName: "landing" */ '../pages/user/LandingDemo.vue')
        },
    ]
}
