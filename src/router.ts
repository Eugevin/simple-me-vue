import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./pages/IndexPage.vue') },
  { path: '/skills', component: () => import('./pages/SkillsPage.vue') },
  { path: '/works', component: () => import('./pages/WorksPage.vue') },
  { path: '/contacts', component: () => import('./pages/ContactsPage.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('./pages/NotFoundPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
