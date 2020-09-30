import Vue from 'vue';
import Vuex from 'vuex'; //引入vuex

Vue.use(Vuex); //应用Vuex

//创建一个store，可以将store理解为一个全局的数据的仓库
export default new Vuex.Store({
  //响应对象
  state: {
    another: 'this is anthor',
    author: 'this is author'
  }
});


