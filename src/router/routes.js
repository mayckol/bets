const routes = [
    {
        path: '/',
        component: () => import('layouts/LoginLayout.vue'),
        children: [
            {path: '', redirect: {path: '/login'}},
            {path: 'login', component: () => import('pages/auth/Login.vue'), name: 'login',},
            {path: 'register', component: () => import('pages/auth/Register.vue')}
        ]
    },
    {
        path: '/dashboard-adm',
        component: () => import('layouts/AdmLayout.vue'),
        children: [
            {path: '/', component: () => import('pages/adm/HomeAdm.vue'),name: 'dashboard-adm'},
            {path: '/chat', component: () => import('pages/adm/Chat.vue'), name: 'chat'}
        ]
    },
    {
        path: '/dashboard',
        component: () => import('layouts/UserLayout.vue'),
        children: [
            {path: '/', component: () => import('pages/user/HomeUser.vue'), name: 'dashboard'}
        ],
        meta: {
            requiresAuth: true,
        }
    },

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue')
    })
}

export default routes
