<template>
  <div>
    <input type="number" v-model="num1">
    <input type="number" v-model="num2">
    <input type="text" v-model="person.cname">
  </div>
</template>

<script>
/* 
- watch 的套路是：既要指明监视的属性，也要指明监视的回调。
- watchEffect 的套路是：不用指明监视哪个属性，”监视的回调中用到哪个属性，那就监视哪个属性“(值的深究，不推荐使用，有坑)。
- watchEffect 有点像 computed：
  - 但 computed 注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
  - 而 watchEffect 更注重的是过程（回调函数的函数体），所以不用写返回值。
*/
import { ref, watchEffect, reactive } from "vue";
export default {
  setup() {
    let num1 = ref(1);
    let num2 = ref(2);
    let person = reactive({
      cname: "zhangsan"
    });
    watchEffect(() => {
      // 在这里有一个坑，如果num1.value + num2.value 不> 10 
      // 那么判断条件不会去判断person.cname，也就是没有用上，所以person.cname的值改变时，不会触发监听回调函数
      if (num1.value + num2.value > 10 && person.cname === "lisi") {
        console.log("大");
      } else {
        console.log("小或者不是lisi");
      }
    });
    return {
      num1,
      num2,
      person
    };
  }
};
</script>

<style lang="scss" scoped>
</style>