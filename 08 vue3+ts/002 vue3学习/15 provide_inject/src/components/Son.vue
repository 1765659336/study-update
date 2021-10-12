<template>
  <div>
    <div>子组件</div>
    <div>{{sonPerson}}</div>
  </div>
</template>

<script>
import {inject} from 'vue';
export default {
  setup () {
    let sonPerson = inject('person')

    return {
      sonPerson
    }
  }
}
</script>

<style lang="scss" scoped>

</style>