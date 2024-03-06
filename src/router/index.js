import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Behavior',
      component: () => import('../views/Behavior.vue'),
    },
    {
      path: '/story',
      name: 'story',
      component: () => import('../views/story.vue'),
    },
    {
      path: '/photo',
      name: 'photo',
      component: () => import('../views/photo.vue'),
    },
    {
      path: '/crisis',
      name: 'crisis',
      component: () => import('../views/crisis.vue'),
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
