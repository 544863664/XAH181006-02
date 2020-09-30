import Vue from 'vue';
import Vuex from 'vuex'; //引入vuex

Vue.use(Vuex); //应用Vuex

//创建一个store，可以将store理解为一个全局的数据的仓库
export default new Vuex.Store({
  //响应对象
  //我们在store中的state键值对中声明可以被vue的所有组件访问的数据
  state: {
    num: 100,
    arr: [10,3,true,{},[],'hello']
  }
});


