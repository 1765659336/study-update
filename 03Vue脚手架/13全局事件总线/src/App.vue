<template>
  <div class="app">
    <h1>{{msg}}</h1>
		<Student></Student>
		<School></School>
  </div>
</template>

<script>
//引入组件
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      msg: "你好啊"
    };
  }
};
</script>
<style lang="less">
.app {
  background-color: gray;
}
</style>
