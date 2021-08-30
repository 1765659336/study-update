import Vue from 'vue'
import App from './App'
// 引入插件
Vue.config.productionTipc = false
// Vue.prototype = VueComponent.__proto__.propotype
// 给Vue的原型上添加东西，到时候所有的VueComponent都是通过Vue 去调用extend方法 return 一个new VueComponent()创建出来的
// 所以所有的VueComponent可以拿到Vue原型上的所有东西
new Vue({
	render: h => h(App),
	beforeCreate(){
		Vue.prototype.$bus = this
	}
}).$mount('#app')