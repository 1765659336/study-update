<template>
	<div>
		<img src="./assets/logo.png">
		<School></School>
		<Student></Student>
		<h1>{{ 'abcdefg' | mySlice }}</h1>
		<h1>{{glo}}</h1>
		<input type="text" v-fbind:value="number">
		<button @click="btn">+1</button>
	</div>
</template>

<script>
	//引入组件
	import School from './components/School'
	import Student from './components/Student'

	export default {
		name:'App',
		components:{
			School,
			Student,
		},
		data(){
			return {
				number:1
			}
		},
		methods:{
			btn(){
				// Vue.prototype上添加了$fnc方法，因此this也就是
				// VueComponent实例对象的__proto__上面就有$fnc方法
				console.log(this);
				this.number = this.$fnc(this.number)
			}
		}
	}
</script>
