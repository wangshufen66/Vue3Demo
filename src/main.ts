import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// const prototype = app.config.globalProperties
const pinia = createPinia();
pinia.use(piniaPluginPersist);
app.use(ElementPlus)
app.use(router).use(pinia).mount('#app');


// import { createApp } from 'vue'
// import App from './App.vue'
// //导入我们的路由文件
// import Router from  './router/index'
// //导入store
// import store from './store/index'
// //导入饿了么UI组件
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
// //实用路由
// app.use(Router)
// //使用store
// console.log('store',store);

// app.use(store);
// //使用饿了么UI组件
// app.use(ElementPlus)
// app.mount('#app')
