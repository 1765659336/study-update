<template>
  <div>
    <!-- 显示label -->
    <label v-if="label">{{ label }}</label>
    <!-- 显示内部元素 -->
    <slot></slot>
    <!-- 错误提示信息 -->
    <p v-if="error" class="error">{{ error }}</p>
    <!-- {{form.model[prop]}} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: "some error",
    };
  },
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
        type: String,
        default: ""
    }
  },
};
</script>

<style scoped>
.error {
    color: red;
}
</style>