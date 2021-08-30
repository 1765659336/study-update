import Vue from 'vue'
import App from './App'
// 引入插件
import plug from './plugin'
Vue.config.productionTipc = false
Vue.use(plug)
new Vue({
	render: h => h(App)
}).$mount('#app')