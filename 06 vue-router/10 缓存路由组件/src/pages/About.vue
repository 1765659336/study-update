<template>
  <div>
    <h2>我是About的内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <!-- <a class="list-group-item active" href="./home-news.html">News</a> -->
        <router-link to="/about/news" class="list-group-item" class-active="active">News</router-link>
      </li>
      <li>
        <!-- <a class="list-group-item" href="./home-message.html">Message</a> -->
        <router-link to="/about/message" class="list-group-item" class-active="active">Message</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>
