<template>
    <div class="bc">
      <div>我是Sun组件</div>
      <Popup></Popup>
    </div>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  name: "Sun",
  setup() {
    return {};
  },
  components: {
    Popup
  }
};
</script>

<style scoped>
.bc {
  border: 1px solid pink;
  padding: 50px;
}
</style>