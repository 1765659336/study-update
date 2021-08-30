<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄: {{age}}</h2>
  <button @click="change">改变人的信息</button>
  <h2>职业：{{obj.type}}</h2>
  <h2>工资：{{obj.salary}}</h2>
  <button @click="clg">输出职业与工资</button>
</template>

<script>
import {ref} from 'vue';
export default {
  name: "App",
  setup() {
    let name = ref("张三");
    let age = ref(18);
    let obj = ref({
      type: 'UI',
      salary: '40k'
    })

    function change() {
      name.value = '李四'
      age.value = 20
    }

    function clg() {
      console.log(obj.value.type,obj.value.salary)
    }

    return {
      name,
      age,
      change,
      obj,
      clg
    };
  }
};
</script>

<style>
</style>
