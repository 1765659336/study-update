<template>
  <div class="Class">
		<h2>班级名称：{{name}}</h2>
		<h2>班级人数：{{peopleNum}}</h2>
    <button @click="sendClassName">发送班级的名称给APP组件</button>
  </div>
</template>
<script>
export default {
	name: "Class",
	data(){
		return {
			name: '一班',
			peopleNum: 20
		}
  },
  methods: {
    sendClassName(){
      this.$emit('getClassName',this.name)
    }
  },
};
</script>
<style scoped lang="less">
.Class {
	background-color: yellow;
}
</style>
