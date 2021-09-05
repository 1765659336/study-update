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
  // 路由组件展示时调用
  activated() {
    this.timer = setInterval(()=>{
      console.log('该路由组件展示')
    })
  },
  // 路由组件销毁时调用
  deactivated() {
    clearInterval(this.timer)
  },
}
</script>