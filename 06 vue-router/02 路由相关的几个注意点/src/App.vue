<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <Hand/>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html">Home</a> -->
          <!-- router-link会被解析成a标签
            active-class指定路由被选择时，指定的类名
           -->
          <router-link to="/about" active-class="active" class="list-group-item">About</router-link>
          <router-link to="/home" active-class="active" class="list-group-item">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Hand from './components/Hand'
export default {
  components:{
    Hand
  }
}
</script>
