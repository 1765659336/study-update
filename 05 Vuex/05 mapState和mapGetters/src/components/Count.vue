<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h2>当前求和结果放大十倍是: {{bigSum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n: 1 //用户选择的数字
    };
  },
  computed:{
    // ------自己写计算属性
    // sum(){
    //   return this.$store.state.sum
    // },
    // bigSum(){
    //   return this.$store.getters.bigSum
    // }
    // ------
    // 生成计算属性对象写法
    // ...mapState({sum:'sum'}),
    // 数组写法
    ...mapState(['sum']),
    // ...mapGetters({bigSum:'bigSum'})
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
			this.$store.commit("INCREMENT",this.n)
    },
    decrement() {
      this.$store.commit("DECREMENT",this.n)
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.n);
    }
  }
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
