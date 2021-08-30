<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add">
  </div>
</template>

<script>
/* 
   npm install nanoid
   下载唯一id生成第三方插件包uuid的缩小版nanoid
   */
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    add() {
      console.log(this);
      // 如果输入框为空，不传递数据给APP组件
      if (this.title !== "") {
        const todoObj = { id: nanoid(), title: this.title, done: false };
        // 调用APP组件传递过来的接收数据的方法
        this.addEvent(todoObj);
        // 添加进去之后，清空输入框中的内容
        this.title = "";
        return
      }
      alert('不能输入为空')
    }
  },
  props: ["addEvent"]
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
