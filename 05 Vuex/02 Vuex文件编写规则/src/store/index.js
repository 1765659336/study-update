import Vuex from 'vuex'
import Vue from 'vue'

// --------- Vuex原理的三剑客
const actions = {}
const mutations = {}
const state = {}
// ---------

// 在这里声明使用插件，而不在main.js中引用
/* 因为在main.js中引用，模块化的代码执行顺序是先执行import外部模块代码，在执行自己模块的代码，在main.js中引用该store/index.js模块时，
没有先声明Vuex,那么在执行import store from './store' 时解析到调用了new Vuex.Store,但是main.js中的使用插件Vue.use(Vuex)代码执行在import后面*/
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  state,
});