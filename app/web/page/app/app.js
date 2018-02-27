import { sync } from 'vuex-router-sync';
import store from 'store/app';
import router from '../../router';
import app from './app.vue';
import App from 'app';
import Layout from 'component/layout/app';
import ElementUI from 'element-ui';

App.use(ElementUI);
App.component(Layout.name, Layout);
import 'element-ui/lib/theme-chalk/index.css';
sync(store, router);

export default App.init({
  base: '/app',
  ...app,
  router,
  store
});
