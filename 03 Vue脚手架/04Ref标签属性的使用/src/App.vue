<template>
	<div>
		<img src="./assets/logo.png" alt="logo" ref="img">
		<School ref="school"></School>
		<School id="school"></School>
		<button @click="btn">获取ref和id</button>
	</div>
</template>

<script>
	//引入组件
	import School from './components/School'

	export default {
		name:'App',
		components:{
			School,
		},
		methods: {
			btn(){
				console.log(this.$refs.img);//获取原生页面标签的真实DOM
				console.log(this.$refs.school);//VC
				console.log(document.getElementById('school'));//获取组件的真实DOM
			}
		},
	}
</script>
