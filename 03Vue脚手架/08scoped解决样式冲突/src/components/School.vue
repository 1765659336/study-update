<template>
  <div class="school fs">
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
<style scoped>
.school {
  background-color: skyblue;
}

.fs {
  font-size: 30px;
}
</style>
