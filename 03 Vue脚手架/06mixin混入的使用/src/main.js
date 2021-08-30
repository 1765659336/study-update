import Vue from 'vue'
import App from './App'
import { globalHunhe } from './mixin.js'

Vue.config.productionTipc = false
// 混合必须写在Vue实例之前，写在后面解析不到
Vue.mixin(globalHunhe)

new Vue({
	render: h => h(App)
}).$mount('#app')