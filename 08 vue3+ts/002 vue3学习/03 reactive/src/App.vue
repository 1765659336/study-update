<template>
  <div>
    <h1>一个人的信息</h1>
    <h2>姓名：{{p.name}}</h2>
    <h2>年龄: {{p.age}}</h2>
    <button @click="change">改变人的信息</button>
    <h2>职业：{{p.obj.type}}</h2>
    <h2>工资：{{p.obj.salary}}</h2>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    let p = reactive({
      name: "张三",
      age: 18,
      obj: {
        type: "UI",
        salary: "40k"
      }
    });

    function change() {
      p.name = "李四";
      p.age = 20;
      p.obj.type = "前端";
      p.obj.salary = "20k";
    }

    return {
      p,
      change
    };
  }
};
</script>

<style>
</style>
