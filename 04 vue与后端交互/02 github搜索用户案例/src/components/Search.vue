<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">搜索github的用户-回车/点击搜索</h3>
    <div>
      <input type="text" placeholder="输入你要搜索的用户名" v-model="keyWord" @keyup.enter="searchUsers">&nbsp;
      <button @click="searchUsers">搜索</button>
    </div>
  </section>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      keyWord:''
    }
  },
  methods: {
    searchUsers(){
      console.log(this.keyWord)
      // 请求数据之前,点了搜索,欢迎页面不展示,加载页面展示
      this.$bus.$emit('updateListData',{isFirst:false,isLoading:true})
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          // console.log(this);
          console.log('请求成功',response.data.items);
          this.$bus.$emit('updateListData',{isLoading:false,users:response.data.items})
        },error => {
          console.log('请求失败',error.message);
          this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
        }
      )
    }
  },
};
</script>
<style>
</style>
