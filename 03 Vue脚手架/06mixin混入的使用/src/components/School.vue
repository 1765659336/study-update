<template>
  <div class="school">
    <h1>{{msg}}</h1>
		<h2>{{str}}</h2>
		<h2>{{glo}}</h2>
		<button @click="btn">！！！</button>
  </div>
</template>
<script>
import { hunhe1 } from '../mixin.js'
export default {
  name: "School",
  data() {
    return {
      msg: "School组件"
    };
	},
	mixins:[hunhe1]
};
</script>
<style>
.school {
  background-color: skyblue;
}
</style>
