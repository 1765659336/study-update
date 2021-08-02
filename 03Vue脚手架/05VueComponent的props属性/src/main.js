import Vue from 'vue'
import App from './App'

Vue.config.productionTipc = false

new Vue({
	render: h => h(App)
}).$mount('#app')