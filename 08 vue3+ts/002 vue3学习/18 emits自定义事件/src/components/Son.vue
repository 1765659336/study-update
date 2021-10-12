<template>
  <div>
    子组件
    <button @click="$emit('a')">a</button>
  </div>
</template>

<script>
export default {
  setup () {

    return {}
  },
  emits: ['a'],
}
</script>

<style lang="scss" scoped>

</style>