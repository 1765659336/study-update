<template>
  <div class="Student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">发送学生姓名给APP组件</button>
    <button @click="unbind">解绑自定义atguigu事件</button>
    <button @click="Des">销毁Student组件</button>
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男"
    };
  },
  methods: {
    sendStudentName() {
			// 第一个参数是自定义事件名称，后面的参数为传递的数据可以传递多个
      this.$emit("atguigu", this.name,1);
      this.$emit("demo")
    },
    unbind(){
      // 解绑一个自定义事件
      // this.$off('atguigu')
      // 解绑多个自定义事件
      // this.$off(['atguigu','demo'])
      // 解绑所有的自定义事件
      this.$off()
    },
    Des(){
      // 查看官网生命周期函数图可以知道组件销毁的时候会把组件的监听和子组件的自定义事件解绑
      // 手动销毁组件，”他杀“
      this.$destroy()
    }
  }
};
</script>
<style scoped lang="less">
.Student {
  background-color: pink;
}
</style>
