<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h2>当前求和结果放大十倍是: {{bigSum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
    /* increment() {
			this.$store.commit("INCREMENT",this.n)
    },
    decrement() {
      this.$store.commit("DECREMENT",this.n)
    }, */

    // 会自动接收页面中{{increment}}接收的参数，如果页面中不传，那么会接收到event事件参数
    ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}),

    /* incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.n);
    } */
    // ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'})
    // 如果函数名和后面的通信参数相同可以使用数组
    ...mapActions(['incrementOdd','incrementWait'])
  }
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
