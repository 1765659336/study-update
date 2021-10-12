<template>
  <h1>setup的两个注意点</h1>
  <Son cname="hahaha" :cage="18" @fn="fn">嘻嘻</Son>
  <button @click="fn">点我</button>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  name: "App",
  components: { Son },
  setup() {
    let fn = function(){
      console.log('父组件的方法');
    }
    return {
      fn
    }
  }
};
</script>
