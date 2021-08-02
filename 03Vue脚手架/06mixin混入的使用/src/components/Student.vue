<template>
  <div class="student">
		<h1>{{msg}}</h1>
		<h2>{{str}}</h2>
		<h2>{{str2}}</h2>
		<h2>{{glo}}</h2>
		<button @click="btn">！！！</button>
  </div>
</template>
<script>
import { hunhe1 , hunhe2 } from '../mixin.js'
export default {
	name: "Student",
	data(){
		return {
			msg:'Stuednt组件',
		}
	},
	mixins:[hunhe1,hunhe2],
	mounted() {
		console.log('Student中的mounted执行了');
	},
};
</script>
<style>
.student {
  background-color: pink;
}
</style>
