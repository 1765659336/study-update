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
				console.log(this.$refs);
				console.log(document.getElementById('school'));
			}
		},
	}
</script>
