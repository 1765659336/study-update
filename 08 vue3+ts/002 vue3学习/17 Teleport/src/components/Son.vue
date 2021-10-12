<template>
  <div class="bcso">
    <div>我是Son组件</div>
    <Sun></Sun>
  </div>
</template>

<script>
import Sun from './Sun.vue';
export default {
  name: "Son",
  setup () {
    

    return {}
  },
  components: {
    Sun
  }
}
</script>

<style scoped>
  .bcso {
    border: 1px solid yellow;
    padding: 50px;
  }
</style>