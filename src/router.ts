import IndexPage from './pages/IndexPage.vue';
import WorksPage from './pages/WorksPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: IndexPage },
  { path: '/works', component: WorksPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;