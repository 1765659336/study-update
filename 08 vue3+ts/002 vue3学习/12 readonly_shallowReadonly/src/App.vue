<template>
  <div>
    <div>姓名：{{cname}}</div>
    <div>年龄：{{cage}}</div>
    <div>工资：{{salary.j.num}}</div>
    <button @click="()=>{cname += '~'}">改名</button>
    <button @click="()=>{cage++}">长大一岁</button>
    <button @click="()=>{salary.j.num+=1000}">涨薪1000</button>
  </div>
</template>

<script>
import {reactive,toRefs,readonly,shallowReadonly} from 'vue';
export default {
  setup () {
    let person = reactive({
      cname: 'zhangsan',
      cage: 18,
      salary: {
        j:{
          num: 20000
        }
      }
    })
    // 只读不让改
    // person = readonly(person);
    person = shallowReadonly(person);
    return {
      ...toRefs(person)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>