/*
* 配置路由：
*   1.引入路由模块
*   2.使用Vue.use（）函数调用vue-router
*   3.配置路由
*   4.将路由添加到跟组件实例化
*   5.router-link, router-view
* */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter); //开启路由服务

//导入其余子文件中的路由配置
import router_set_1 from './router_set_1';
import router_set_2 from './router_set_2';
import router_set_3 from './router_set_3';
import router_set_4 from './router_set_4';
import router_set_5 from './router_set_5';
import router_set_6 from './router_set_6';
import router_set_7 from './router_set_7';
import router_set_8 from './router_set_8';
import Detail from '../components/12_router/Detail';
import router_test from './router_test';

//导入组件
import Notfound from '@/components/4_router/404';

//配置路由
//从vue-router类中实例化一个对象并将其导出
export default new VueRouter({
  //当前项目的路由配置列表
  routes: [
    /*{
    path: '/',
    redirect: '/docs' //为某些跟路径设置默认路由
  },*/
    {
    path: '*',
    component: Notfound
  },{
      path: '/detail/:id',
      component: Detail
    },
    ...router_set_1,
    ...router_set_2,
    ...router_set_3,
    ...router_set_4,
    ...router_set_5,
    // ...router_set_6,
    ...router_set_7,
    ...router_set_8,
    ...router_test,

  ],
  //锚点
  mode: 'history',
});
