<template>
  <div class="school">
    <span>{{msg}}</span>
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
  font-size: 30px;
}
</style>
