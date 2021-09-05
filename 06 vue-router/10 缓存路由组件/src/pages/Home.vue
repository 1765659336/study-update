<template>
  <div>
    <h2>我是Home的内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <!-- <a class="list-group-item active" href="./home-news.html">News</a> -->
        <router-link to="/home/news" class="list-group-item" class-active="active">News</router-link>
      </li>
      <li>
        <!-- <a class="list-group-item" href="./home-message.html">Message</a> -->
        <router-link to="/home/message" class="list-group-item" class-active="active">Message</router-link>
      </li>
    </ul>
    <!-- 缓存路由组件 -->
    <!-- include中传递的是组件的命名，不传include，那么所有在router-view中展示过的组件都会被缓存，不会被销毁 -->
    <!-- 缓存多个的话那么写成 :include="['a','b',...]",名称是组件名name属性值 -->
    <keep-alive include="NewsComponent">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
