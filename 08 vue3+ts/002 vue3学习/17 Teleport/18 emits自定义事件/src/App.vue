<template>
  <div>
    <Son @a="a"></Son>
    <Son @click="clg"></Son>
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
    return { a, clg };
  },
  components: {
    Son
  }
};
</script>

<style lang="scss" scoped>
</style>