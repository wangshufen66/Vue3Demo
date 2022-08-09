import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../view/Home.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../view/Home.vue'),
  },
  {
    path: '/setup',
    name: 'setup',
    component: () => import('../view/Setup.vue'),
  },
  {
    path: '/grammer',
    name: 'grammer',
    component: () => import('../view/grammer/index.vue'),
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: () => import('../view/grammer/pinia.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../view/About.vue'),
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('../components/HelloWorld.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log('to', to);
  // console.log('from', from);
  next();
  // 路由守卫逻辑

  // 通过 return ture;
  // 不通过 return false;
  // return true;
});

export default router;
