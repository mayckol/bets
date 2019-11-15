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
            {path: '/chat', component: () => import('pages/adm/Chat.vue'), name: 'chat'},
            {path: '/permissions', component: () => import('pages/adm/Permissions.vue'), name: 'permissions'}
        ]
    },
    {
        path: '/dashboard',
        component: () => import('layouts/UserLayout.vue'),
        children: [
            {path: '/', component: () => import('pages/user/HomeUser.vue'), name: 'dashboard'},
            {path: '/matches', component: () => import('pages/user/Matches.vue'), name: 'matches'},
            {path: '/bets', component: () => import('pages/user/Bets.vue'), name: 'bets'},
            {path: '/get-last-matches', component: () => import('pages/user/Bets.vue'), name: 'lastMatches'}
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
