// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//引入ui框架iView
/*
* 如果在。babelrc文件中，配置liView的按需引入，那就不需要在main.js中引入iView。
* 某个组件需要使用iView的某个模块，就在这个组件中，按需引入这个模块即可。
*
* 如果在main.js中，引入了iView，那就不需要在.babelrc文件中，配置iView的按需加载，相当于做了全局的引入。
* 如果做了全局的引入就可以在当前项目的仁义组件中直接使用。
* */
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//开启iView
Vue.use(iView);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  iView,
  components: { App },
  template: '<App/>'
});
