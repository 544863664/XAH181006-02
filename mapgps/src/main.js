import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


window.Vue = Vue
require('http://oss.lbssoft.com/lbsmap/lbsmap-0.6.3.min.js')
Vue.use(VueAxios, axios)

Vue.config.productionTip = false


setTimeout(function () {
	new Vue({
		render: h => h(App),
	}).$mount('#app')
}, 500)


