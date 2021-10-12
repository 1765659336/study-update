<template>
  <div>
    <div>person:{{person}}</div>
    <button @click="()=>{person.cage++}">person.age+1</button>
    <button @click="clg">输出最原始的对象</button>
    <button @click="addCar">给人添加一辆车</button>
    <button @click="changeCar">修改车的名</button>
  </div>
</template>

<script>
import { reactive, toRaw, markRaw } from "vue";
export default {
  setup() {
    let person = reactive({
      cname: "zhangsan",
      cage: 18
    });

    function clg() {
      let p = toRaw(person);
      p.cage++;
      console.log(p);
    }

    function addCar(){
      // 这样子后面可以被修改
      // person.car = {carName: '兰博基尼'};
      // 这个car对象失去了响应式，但是如果这个person对象的其它属性改变时，person.car也会变为最新的数据
      person.car = markRaw({carName: '兰博基尼'});
    }

    function changeCar(){
      person.car.carName = '法拉利';
    }

    return {
      person,
      clg,
      addCar,
      changeCar
    };
  }
};
</script>

<style lang="scss" scoped>
</style>