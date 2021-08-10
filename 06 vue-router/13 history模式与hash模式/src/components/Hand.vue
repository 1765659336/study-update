<template>
  <div>
    <h1>Hand</h1>
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
    <button @click="go">go-1</button>
  </div>
</template>
<script>
export default {
  methods: {
    forward(){
      this.$router.forward()
    },
    back(){
      this.$router.back()
    },
    go(){
      this.$router.go(-1)
    }
  },
}
</script>