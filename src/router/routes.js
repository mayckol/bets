const routes = [
    {
        path: '/',
        component: () => import('layouts/MyLayout.vue'),
        children: [
            {path: '', component: () => import('pages/Index.vue')}
        ]
    },
    {
        path: '/home-adm',
        component: () => import('layouts/AdmLayout.vue'),
        children: [
            {path: '/', component: () => import('pages/HomeAdm.vue')}
        ]
    },
    {
        path: '/dashboard',
        component: () => import('layouts/UserLayout.vue'),
        children: [
            {path: '/', component: () => import('pages/HomeUser.vue')}
        ]
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue')
    })
}

export default routes
