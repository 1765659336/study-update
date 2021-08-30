<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄: {{age}}</h2>
  <button @click="sayHello">说你好</button>
</template>

<script>
// import { h } from "vue";

export default {
  name: "App",
  // 无响应式的写法
  setup() {
    let name = "张三";
    let age = 18;

    function sayHello() {
      alert(`我叫${name},我${age}岁了，你好啊`);
    }

    // 1、返回一个对象（常用）
    return {
      name,
      age,
      sayHello
    };
    /* 
    // 2、返回一个函数
    return () => h('h1','你好') */
  }
};
</script>

<style>
</style>
