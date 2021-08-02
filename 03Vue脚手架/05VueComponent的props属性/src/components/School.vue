<template>
  <div class="demo">
		<h1>{{msg}}</h1>
    <h2>{{name}}</h2>
    <h2>{{address}}</h2>
    <h2>{{myAge}}</h2>
		<button @click="myAge++">点我改变年龄</button>
  </div>
</template>
<script>
export default {
	name: "School",
	data(){
		return {
			msg:'message',
			myAge: this.age
		}
	},
  props: {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
		},
		age:{
			type: Number,
			default:100
		}
	},
};
</script>
<style>
.demo {
  background-color: pink;
}
</style>
