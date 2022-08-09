import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);
// const prototype = app.config.globalProperties
const pinia = createPinia();
app.use(router).use(pinia).mount('#app');
