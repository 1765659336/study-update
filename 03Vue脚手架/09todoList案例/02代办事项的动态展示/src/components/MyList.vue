<template>
  <ul class="todo-main">
    <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></MyItem>
  </ul>
</template>

<script>
import MyItem from './MyItem'
export default {
  name: "MyList",
  components:{MyItem},
  data() {
    return {
      todos: [
        // 负责任一点id都得是字符串，因为数字是有尽头的
        {id: '0001', title: '吃饭' , done: true},
        {id: '0002', title: '睡觉' , done: false},
        {id: '0003', title: '打豆豆' , done: false}
      ]
    }
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
