<template>
  <div>
    <div>{{num}}</div>
    <button @click="()=>{num++}">+</button>
  </div>
</template>

<script>
import {customRef} from 'vue';
export default {
  setup () {
    function myRef(value){
      return customRef((zhuizong,gengxing)=>{
        return {
          get(){
            zhuizong();
            return value;
          },
          set(newValue){
            console.log('我知道你改啦');
            value = newValue;
            gengxing()
          }
        }
      })
    }

    let num = myRef(0);
    return {
      num
    }
  }
}
</script>

<style lang="scss" scoped>

</style>