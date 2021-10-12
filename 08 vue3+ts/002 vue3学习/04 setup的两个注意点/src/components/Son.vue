<template>
  <div>姓名：{{cname}}</div>
  <div>年龄：{{cage}}</div>
  <slot>默认值</slot>
  <button @click="$emit('fn')">执行父组件的方法</button>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["cname"],
  emits: ["fn"],
  setup(props, context) {
    console.log(this); //undefined
    console.log(props);
    console.log(context);
    console.log(context.slots);
    console.log(context.emit);
    let cname = ref(props.cname);
    let cage = ref(context.attrs.cage);
    return {
      cname,
      cage
    };
  }
};
</script>

<style lang="scss" scoped>
</style>