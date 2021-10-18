import { createStore } from "vuex";

export default createStore({
  // 严格模式，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
  // 不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
  strict: true,
  state: {
    //组件中的data
    count: 0
  },
  getters: {
    //vuex4.0没有实现计算属性的功能
    double(state){
      return state.count * 2
    }
  },
  mutations: {
    // “同步”更改状态
    add(state,payload){
      state.count += payload;
    }
  },
  actions: {
    // 可以调用其他的action，或者调用mutations
    asyncAdd(a,payload){
      console.log(a);
      setTimeout(() => {
        a.commit('add',payload);
      }, 2000);
    }
  },
  modules: {}
});
// 在action中更改状态不合法，一般是在action中做逻辑
// 流程：dispatch(action) => commit(mutation) => 修改状态
