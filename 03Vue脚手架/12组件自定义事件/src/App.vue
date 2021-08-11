<template>
	<div class="app">
		<h1>{{msg}} 传递过来的数字:{{numb}}</h1>
		<!-- 通过父传子函数，子组件通过props接收调用从而传参 -->
		<School :getSchoolName="getSchoolName"></School>
		<!-- 给Student（VueComponent）实例对象子组件传递一个自定义事件，子组件通过VueComponent.$emit()调用 -->
		<!-- <Student @atguigu.once="getStudentName"></Student> -->
		<Student @atguigu="getStudentName" @demo="demo"></Student>
		<!-- 通过ref拿到VueComponent子组件，然后直接给VueComponent通过$on绑定方法，这种方式可以处理更多的业务 -->
		<Class ref="Class"></Class>
		<!-- 给子组件绑定原生事件,这个原生事件会被绑定到子组件的根元素（div）上 -->
		<Class @click.native="Click"></Class>
	</div>
</template>

<script>
	//引入组件
	import School from './components/School'
	import Student from './components/Student'
	import Class from './components/Class'

	export default {
		name:'App',
		components:{
			School,
			Student,
			Class,
		},
		data() {
			return {
				msg:'你好啊',
				numb: 0
			}
		},
		methods: {
			getSchoolName(value){
				console.log(value)
			},
			// es6接收多个参数
			getStudentName(value,...num){
				console.log(value,)
				this.numb = num[0]
			},
			getClassName(value){
				console.log(value)
			},
			demo(){
				console.log('demo被触发了');
			},
			Click(){
				alert('给子组件绑定原生事件')
			}
		},
		mounted() {
			// this.$refs.Class就是子组件
			// $on给组件绑定自定义事件，前面是事件名，后面是事件函数
			// 可以在绑定的时候添加业务,比如三秒之后再绑定事件，页面mounted之后的三秒内无法触发这个事件
			setTimeout(()=>{
				// this.$refs.Class.$on('getClassName',this.getClassName)
				// 自定义事件只绑定一次
				// 有坑！！！！$on和$once中第二个函数参数中的this指向子组件这个函数是一个回调函数，被子组件调用
				this.$refs.Class.$once('getClassName',this.getClassName)
			},3000)
		},
	}
</script>
<style lang="less">
	.app {
		background-color: gray;
	}
</style>
