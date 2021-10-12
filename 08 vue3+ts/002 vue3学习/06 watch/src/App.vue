<template>
  <div>
    <input type="text" v-model="sum">
    <input type="text" v-model="msg">
    <input type="text" v-model="person.cname">
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue";
export default {
  setup() {
    let sum = ref("20");
    let msg = ref("msg");
    let person = reactive({
      cname: "zhangsan",
      cage: 20
    });
    // 情况一：监视ref响应式数据
    watch(sum, (newValue, oldValue) => {
      console.log("sum变化了", newValue, oldValue);
    });

    // 情况二：监视多个ref定义的响应式数据
    watch([sum, msg], (newValue, oldValue) => {
      console.log("sum或者msg改变", newValue, oldValue);
    });

    /* 情况三：监视reactive定义的响应式数据			
若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！获取的值和newValue的值一样		
若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 */
    watch(
      person,
      (newValue, oldValue) => {
        console.log("person变化了", newValue, oldValue);
      },
      { immediate: true, deep: false }
    ); //此处的deep配置不再奏效

    // 情况四：监视reactive定义的响应式数据中的某个属性名而不是属性值,必须设置deep: true
    watch(
      () => person.cname,
      (newValue, oldValue) => {
        console.log("person的cname变化了", newValue, oldValue);
      },
      { immediate: true, deep: true }
    );

    //情况五：监视reactive定义的响应式数据中的某些属性名而不是属性值
    watch(
      [() => person.cname, () => person.cage],
      (newValue, oldValue) => {
        console.log("person的cname变化了/cage变化了", newValue, oldValue);
      },
      { immediate: true, deep: true }
    );

    return {
      sum,
      msg,
      person
    };
  }
};
</script>

<style lang="scss" scoped>
</style>