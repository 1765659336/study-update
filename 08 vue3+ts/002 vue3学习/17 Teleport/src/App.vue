<template>
  <div class="bca">
    <div>我是APP组件</div>
    <Son></Son>
  </div>
</template>

<script>
import Son from './components/Son.vue';
export default {
  name: "App",
  setup () {
    

    return {}
  },
  components: {
    Son
  }
}
</script>

<style scoped>
  .bca {
    border: 1px solid red;
    padding: 50px;
  }
</style>