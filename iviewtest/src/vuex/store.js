import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        leftToggle: false,
    },
    mutations: {
      /*
      * 如果在mutations和actions中，使用解构赋值获取state中的
      * 数据，只能动态获取，不能设置（设置的值不会响应到state中）
      * 如果要设置，就接受state本身。
      * */
      setLeftToggle: (state) => {
        state.leftToggle = !state.leftToggle;
      }
    },
    strict:true
})
