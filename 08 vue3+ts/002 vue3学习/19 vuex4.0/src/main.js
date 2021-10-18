import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'

createApp(App).use(store).mount('#app')