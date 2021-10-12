<template>
  <div>
    <div>count: {{count}}</div>
    <button @click="()=>{count++}">count+1</button>
    <div>鼠标点击的x坐标为{{Point.x}}鼠标点击的y坐标为{{Point.y}}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import usePoint from '../hooks/usePoint.js'
export default {
  setup() {
    let count = ref(0);
    let Point = usePoint();
    return { count, Point };
  }
};
</script>

<style lang="scss" scoped>
</style>