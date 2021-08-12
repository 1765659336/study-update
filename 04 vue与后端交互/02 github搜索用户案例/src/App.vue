<template>
  <div id="app">
    <div class="container">
      <Search></Search>
      <List></List>
    </div>
  </div>
</template>

<script>
//引入组件
import Search from "./components/Search";
import List from "./components/List";
export default {
  name: "App",
  components: {
    Search,
    List
  }
};
</script>
<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}
</style>
