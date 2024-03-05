import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'DefaultLayout',
    //   component: () => import('../layout/DefaultLayout.vue'),
    //   children: [
    //     {
    //       path: '/',
    //       name: 'Behavior',
    //       component: () => import('../views/Behavior.vue'),
    //     },
    //   ]
    // },
    {
      path: '/',
      name: 'Behavior',
      component: () => import('../views/Behavior.vue'),
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('../components/layouts/Header.vue'),
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('../components/layouts/Footer.vue'),
    },
  ]
})

export default router
