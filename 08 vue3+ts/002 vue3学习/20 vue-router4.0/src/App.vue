<script>
import { useRouter, useRoute } from "vue-router";
import { ref, watch, onBeforeRouteLeave } from "vue";
export default {
  name: "App",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const articeid = ref(0);
    console.log(route, router);
    const gotoArtice = function() {
      router.push("/about");
      console.log(route.params);
    };
    watch(route, (newValue, oldValue) => {
      console.log("route变化了", newValue, oldValue);
    });
    onBeforeRouteLeave(to, from){
    // 对路由变化做出响应...
    console.log(to.params)
    }

    return {
      gotoArtice,
      articeid
    };
  }
};
</script>

<template>
  <div>依然可以用this.$route和this.$router获取到路由器和当前路由对象</div>
  <!-- <div>{{this.$route}}</div> -->
  <div>跳转参数{{this.$route.params}}</div>
  <div>articeid的值为：{{articeid}}</div>
  <button @click="articeid++">articeid + 1</button>
  <div :style="{'margin': '50px'}">-----------</div>
  <!-- <div>{{this.$router}}</div> -->
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-link :to="'/username/1/artice/' + `${articeid}`">Go to Artice</router-link>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
