<template>
  <div>
    <Son @a="a" @submit="b"></Son>
    <Son @click="clg" @submit="b"></Son>
  </div>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  setup() {
    function a() {
      console.log("a");
    }
    function clg() {
      console.log("clg");
    }
    function b(payload) {
      console.log(payload);
    }
    return { a, clg, b };
  },
  components: {
    Son
  }
};
</script>

<style lang="scss" scoped>
</style>