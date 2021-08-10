import Vue from 'vue';
import App from './App.vue';
import { Button, Row } from 'element-ui';
// Vue.component('hahaha', Button);
// Vue.component('suibianxie', Select);

// Button.name实际上就是el-button Row.name实际上就是el-row
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */
new Vue({
  el: '#app',
  render: h => h(App)
});