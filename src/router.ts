import IndexPage from './pages/IndexPage.vue';
import SkillsPage from './pages/SkillsPage.vue';
import WorksPage from './pages/WorksPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: IndexPage },
  { path: '/skills', component: SkillsPage },
  { path: '/works', component: WorksPage },
  { path: '/contacts', component: ContactsPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;