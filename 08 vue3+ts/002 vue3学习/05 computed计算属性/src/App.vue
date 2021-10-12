<template>
  <div>{{person.firstName}}</div>
  <div>{{person.lastName}}</div>
  <div>{{fullName}}</div>
  <div>{{fullName2}}</div>
  <button @click="fn">改变姓名</button>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    let person = reactive({
      firstName: "liu",
      lastName: "jie"
    });

    // 计算属性-简便写法
    let fullName = computed(() => {
      return person.firstName + "-" + person.lastName;
    });

    // 计算属性-完整写法
    let fullName2 = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      // 当值改变的时候，回调的函数
      set(value) {
        console.log('set执行了');
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      }
    });

    let fn = function() {
      console.log("执行了");
      console.log(fullName2.value);
      fullName2.value = "zhang-san";
    };

    return {
      fullName,
      fullName2,
      fn,
      person
    };
  }
};
</script>

<style lang="scss" scoped>
</style>