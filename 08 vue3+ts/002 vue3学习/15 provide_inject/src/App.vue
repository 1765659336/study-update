<template>
  <div>
    <div>父组件</div>
    <Son></Son>
  </div>
</template>

<script>
import {reactive,provide} from 'vue';
import Son from './components/Son.vue';
export default {
  setup () {
    let person = reactive({
      cname: 'zhangsan',
      cage: 18
    })

    provide('person',person)
    return {}
  },
  components: {
    Son
  }
}
</script>

<style lang="scss" scoped>

</style>