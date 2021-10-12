<template>
  <div>
    <button @click="changeIstrue">显示/隐藏子组件</button>
    <Son v-if="isTrue"></Son>
  </div>
</template>

<script>
import Son from './components/Son.vue';
import {ref} from 'vue';
export default {
  components:{Son},
  setup () {
    let isTrue = ref(true);
    function changeIstrue(){
      isTrue.value = !isTrue.value;
    }
    return {isTrue,changeIstrue}
  }
}
</script>

<style lang="scss" scoped>

</style>