<template>
	<div>
		<img src="./assets/logo.png" alt="logo" ref="img">
		<School name="shanguigu" address="地址" :age="18"></School>
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
	}
</script>
