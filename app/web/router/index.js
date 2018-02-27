import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: () => import('../component/app/index')
    }
  ]
});

export default router;
