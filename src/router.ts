import IndexPage from './pages/IndexPage.vue';
import WorksPage from './pages/WorksPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: IndexPage },
  { path: '/works', component: WorksPage },
  { path: '/contacts', component: ContactsPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;