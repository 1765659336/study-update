import Vue from 'vue'
import App from './App'
// 引入插件
Vue.config.productionTipc = false
new Vue({
	render: h => h(App),
}).$mount('#app')