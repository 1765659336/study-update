<template>
  <div>
    <div>姓名：{{cname}}</div>
    <div>年龄：{{cage}}</div>
    <div>工资：{{salary.j.num}}</div>
    <div>a: {{a}}</div>
    <button @click="()=>{a++}">a+1</button>
    <button @click="()=>{cname += '~'}">改名</button>
    <button @click="()=>{cage++}">长大一岁</button>
    <button @click="()=>{salary.j.num+=1000}">涨薪1000(无响应式)</button>
  </div>
</template>

<script>
import {shallowReactive,shallowRef,toRefs} from 'vue';
export default {
  setup () {
    let person = shallowReactive({
      cname: 'zhangsan',
      cage: 18,
      salary: {
        j:{
          num: 20000
        }
      }
    });
    let a = shallowRef(20);
    return {
      ...toRefs(person),
      a,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>