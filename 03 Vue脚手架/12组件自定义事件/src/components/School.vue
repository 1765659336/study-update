<template>
  <div class="School">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="sendSchoolName">发送学校名称给APP组件</button>
  </div>
</template>
<script>
export default {
	name: "School",
	data(){
		return {
			name: '尚硅谷',
			address: '北京'
		}
	},
	props:['getSchoolName'],
	methods:{
		sendSchoolName(){
			this.getSchoolName(this.name)
		}
	}
};
</script>
<style scoped lang="less">
.School {
	background-color: skyblue;
}
</style>
