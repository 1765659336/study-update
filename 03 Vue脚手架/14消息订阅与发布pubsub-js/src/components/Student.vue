<template>
  <div class="Student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男"
    };
  },
  methods:{
    getSchoolName(value){
      console.log(value);
    }
  },
  mounted() {
    // this.$bus.$on('getSchoolName',value => {
    //   console.log(this.name + '在' + value + '读书');
    // })
    this.pubsubGSN = pubsub.subscribe('getSchoolName',(msgName,data) => {
      // 一定要使用箭头函数的形式，不然this指向就是undefined,或者将回调函数写在methodes中
      console.log('感谢'+ msgName + '发布者的发布');
      console.log(this.name + '在' + data + '读书');
    })
  },
  beforeDestroy() {
    // this.$bus.$off('getSchoolName')
    pubsub.unsubsctibe(this.pubsubGSN)
  },
};
</script>
<style scoped lang="less">
.Student {
  background-color: pink;
}
</style>
