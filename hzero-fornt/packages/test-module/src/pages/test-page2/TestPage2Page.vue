
<template>
  <div class="hello">
    <h1>Hello Vue 3! </h1>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
// import { ref } from 'vue'
// // const { ref } = window.Vue;

export default {
  props: {
    msg: {
      default: 'VUE-TestPage2'
    },
  },
  // setup() {
  //   const count = ref(0)
  //   const inc = () => {
  //     count.value++
  //   }
  //   return {
  //     count,
  //     inc
  //   }
  // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
