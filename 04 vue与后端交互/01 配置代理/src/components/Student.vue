<template>
  <div class="fs">
		<span>{{msg}}</span>
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
.fs {
	background-color: pink;
	font-size: 20px;
}
</style>
