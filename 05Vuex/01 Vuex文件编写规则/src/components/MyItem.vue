<template>
  <li>
    <label>
      <!-- input checkout有个checkout属性决定是否勾选 -->
      <input type="checkbox" :checked="todo.done" @click="handle(todo.id)">
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props:['todo','changeState','deleteEvent'],
  methods: {
    // 修改事项的状态
    handle(id){
      this.changeState(id)
    },
    // 删除事项
    handleDelete(id){
      // confirm根据用户的交互来决定判断逻辑
      if(confirm('确定删除吗？')){
        this.deleteEvent(id)
      }
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
  display: none;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}

</style>
