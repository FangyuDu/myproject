import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: '/',
  routes: [
    {
      path: '/',
      component: () => import('../component/app/index')
    }, {
      path: '/admin',
      component: () => import('../component/admin/index')
    }
  ]
});

export default router;
