import Vue from 'vue';
// ---- 完整引入，会徒增项目的大小，不推荐
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// ----
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});