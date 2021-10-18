<template>
  <div>{{count}}</div>
  <div>{{double}}</div>
  <button @click="$store.state.count++">错误修改count+1</button>
  <button @click="add">同步修改</button>
  <button @click="asyncAdd">异步修改</button>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "App",
  setup() {
    const store = useStore();
    console.log(store);
    const add = function(){
      store.commit('add',1);
    }
    const asyncAdd = function(){
      store.dispatch('asyncAdd',2);
    }
    return {
      count: computed(() => {return store.state.count}),
      double: computed(()=>{return store.getters.double}),
      add,
      asyncAdd
    };
  }
};
</script>

<style lang="scss" scoped>
</style>