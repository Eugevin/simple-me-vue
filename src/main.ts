import { createApp } from 'vue';
import 'normalize.css';
import './styles/main.scss';
import App from './App.vue';
import router from './router.ts';
import Translate from './plugins/translate.ts';

createApp(App)
  .use(router)
  .use(Translate)
  .mount('#app')
