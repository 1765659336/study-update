<template>
  <div>
    <img src="./assets/logo.png">
    <School></School>
    <Student></Student>
		<button @click="sendQue">请求学生数据</button>
		<button @click="sendQue2">请求汽车数据</button>
  </div>
</template>

<script>
//引入组件
import School from "./components/School";
import Student from "./components/Student";
import axios from "axios";

export default {
  name: "App",
  components: {
    School,
    Student
	},
	methods:{
		sendQue(){
			axios.get('http://localhost:8080/atguigu/students').then(
				response => {
					console.log('请求成功',response.data);
				},error => {
					console.log('请求失败',error.message);
				}
			)
		},
		sendQue2(){
			axios.get('http://localhost:8080/demo/cars').then(
				response => {
					console.log('请求成功',response.data);
				},error => {
					console.log('请求失败',error.message);
				}
			)
		}
	}
};
</script>
<style>
.hh {
  background-color: red;
}
</style>
