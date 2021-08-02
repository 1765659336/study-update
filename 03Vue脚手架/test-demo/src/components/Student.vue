<template>
  <div class="student">
		<h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
	name: "Student",
	data(){
		return {
			msg:'Stuednt组件',
		}
	},
};
</script>
<style>
.student {
  background-color: pink;
}
</style>
