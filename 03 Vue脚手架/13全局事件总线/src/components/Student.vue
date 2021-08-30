<template>
  <div class="Student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
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
  methods:{
    getSchoolName(value){
      console.log(value);
    }
  },
  mounted() {
    this.$bus.$on('getSchoolName',value => {
      console.log(this.name + '在' + value + '读书');
    })
  },
  beforeDestroy() {
    this.$bus.$off('getSchoolName')
  },
};
</script>
<style scoped lang="less">
.Student {
  background-color: pink;
}
</style>
