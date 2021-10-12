<template>
  <div>

  </div>
</template>

<script>
import {ref,reactive,readonly,isRef,isReactive,isReadonly,isProxy} from 'vue';
export default {
  setup () {
    let num = ref(20);
    let person = reactive({
      cname: 'zhangsan',
      cage: 18
    });
    let person2 = readonly(person);// true
    console.log(isRef(num));// true
    console.log(isReactive(person));// true
    console.log(isReadonly(person2));// true
    console.log(isProxy(person),isProxy(person2));// true true
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>