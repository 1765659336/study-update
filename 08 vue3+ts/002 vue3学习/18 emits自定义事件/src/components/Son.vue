<template>
  <div>
    子组件
    <button @click="$emit('a')">a</button>
    <button @click="fn">fn</button>
  </div>
</template>

<script>
export default {
  setup(props, ctx) {
    const fn = () => {
      ctx.emit("submit", { lock: false});
    };
    return {
      fn
    };
  },
  // emits: ['a'],
  emits: {
    a: null,
    submit: payload => {
      console.log(payload);
      if (payload.lock === true) {
        // console.log("true");
        return true
      } else {
        // console.log("false");
        return false
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>