<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader addEvent:="addEvent"></MyHeader>
        <MyList :todos="todos" :changeState="changeState" :deleteEvent="deleteEvent"></MyList>
        <MyFooter :todos="todos" :changeSelectAll="changeSelectAll" :delectDone="delectDone"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList.vue";

export default {
	name: "App",
  components:{MyHeader,MyFooter,MyList},
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
  methods: {
    // 接收数据的函数,添加代办事项
    addEvent(e){
      this.todos.unshift(e)
    },
     // 修改事项的状态
    changeState(id){
      this.todos.forEach(todo => {
        if(todo.id === id){
          todo.done = !todo.done
        }
      });
    },
    // 删除事项
    deleteEvent(id){
      // 过滤函数，return是过滤条件，返回一个新数组
      this.todos = this.todos.filter( todo => {
        return todo.id !== id
      })
    },
    // 全选or全不选
    changeSelectAll(checked){
      this.todos.forEach( todo => {
        return todo.done = checked
      })
    },
    // 删除已完成
    delectDone(){
      this.todos = this.todos.filter( todo => {
        return !todo.done
      })
    }
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
