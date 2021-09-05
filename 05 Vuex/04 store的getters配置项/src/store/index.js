import Vuex from "vuex";
import Vue from "vue";

// --------- Vuex原理的三剑客
const actions = {
  incrementOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("INCREMENT",value)
    }
  },
  incrementWait(context, value) {
    setTimeout(() => {
      context.commit("INCREMENT",value)      
    }, 500);
  }
};
const mutations = {
  INCREMENT(state,value){
    state.sum += value
  },
  DECREMENT(state,value){
    state.sum -= value
  }
};
// 类似于组件中的data，数据源
const state = {
  sum:1
};
// 类似于组件的计算属性，可在多个组件中复用的计算属性
const getters = {
  bigSum(state){
    return state.sum * 10
  }
}
// ---------

// 在这里声明使用插件，而不在main.js中引用
/* 因为在main.js中引用，模块化的代码执行顺序是先执行import外部模块代码，在执行自己模块的代码，在main.js中引用该store/index.js模块时，
没有先声明Vuex,那么在执行import store from './store' 时解析到调用了new Vuex.Store,但是main.js中的使用插件Vue.use(Vuex)代码执行在import后面*/
Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
