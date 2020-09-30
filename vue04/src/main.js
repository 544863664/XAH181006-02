// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入外部封装的指令js文件
// require('./utils/directives');
//导入也可以使用import导入其他文件中的其他js文件
import './utils/directives';

//导入路由配置
import router from './router';

//导入状态管理
// import store from './vuex/store';
import store from './components/store/index';

//引入iView
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  iView,
  components: { App },
  template: '<App/>'
});
