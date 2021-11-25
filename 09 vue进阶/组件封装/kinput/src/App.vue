<template>
  <div id="app">
    <k-form :model="model">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" placeholder="请输入用户名"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input v-model="model.password" placeholder="请输入用户名"></k-input>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KInput from "./components/KInput.vue";
import KFormItem from "./components/KFormItem.vue";
import KForm from "./components/KForm.vue";

export default {
  name: "App",
  components: {
    KInput,
    KFormItem,
    KForm
  },
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
