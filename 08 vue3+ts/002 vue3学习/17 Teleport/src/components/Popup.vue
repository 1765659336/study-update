<template>
  <div>
    <button @click="isShow = true">点我弹出框</button>
    <teleport to="body">
      <div class="popup" v-show="isShow">
        <div class="context">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <button @click="isShow = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let isShow = ref(false);

    return {
      isShow
    };
  }
};
</script>

<style scoped>
.popup {
  border: 1px solid black;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.context {
  width: 20%;
  height: 50%;
  background-color: pink;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.context > div {
  margin: 20px;
}
</style>