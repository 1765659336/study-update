<template>
  <div>
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
    <input type="text">
  </div>
</template>
<script>
export default {
  name:'NewsComponent',
  beforeDestroy() {
    console.log('About中的News组件即将被销毁')
  },
}
</script>