<template>
  <div class="row">
    <!-- 展示搜索到的用户信息 -->
    <div class="card" v-for="user in info.users" :key="user.login" v-show="info.users.length">
      <p>点击头像前往用户主页</p>
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px">
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 欢迎 -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 加载 -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 报错 -->
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: ""
      }
    };
  },
  mounted() {
    this.$bus.$on("updateListData", infoObj => {
      // 同名属性，后面的会替换前面的
      // 多个对象属性拼接常用的方法
      this.info = {...this.info,...infoObj};
    });
  }
};
</script>
<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
