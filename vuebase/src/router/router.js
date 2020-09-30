import Vue from 'vue'
import VueRouter from 'vue-router'

//Vue对象调用VueRouter
Vue.use(VueRouter);


//导入路由配置所需要的组件
import Home from '@/views/Home'
import mynav1 from '@/views/mynav1'
import mynav2 from '@/views/mynav2'
import mynav3 from '@/views/mynav3'
import mynav4 from '@/views/mynav4'
//将从VueRouter这个类中实例化出的路由配置对象导出
export default new VueRouter({
  //当前项目能用到的有的路由的配置（数组）
  routes: [{
    path: 'Home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },{
    //当前这个路由在url中映射
    path: '/mynav1',
    name: 'mynav1',
    //当前路由切换到上面的path时，路由规定的展示区域展示的组件内容
    component: () => import('@/views/mynav1.vue'),
  },{
    path: '/mynav2',
    name: 'mynav2',
    component: () => import('@/views/mynav2.vue'),
  },{
    path: '/mynav3',
    name: 'mynav3',
    component: () => import('@/views/mynav3.vue'),
  },{
    path: '/mynav4',
    name: 'mynav4',
    component: () => import('@/views/mynav4.vue'),
  },],
});
