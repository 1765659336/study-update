<template>
  <div class="school">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  name: "School",
  data() {
    return {
      msg: "School组件"
    };
	},
};
</script>
<style>
.school {
  background-color: skyblue;
}
</style>
