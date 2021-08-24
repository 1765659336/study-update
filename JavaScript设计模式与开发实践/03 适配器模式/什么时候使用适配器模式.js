// 假设baiduMap是我们请求的API，只需要调用BaiduMap.render()就可以渲染百度地图
const baiduMap = {
  render: function(){
    return '百度地图'
  }
}

// 同理gaodeMap也是如此
const gaodeMap = {
  render: function(){
    return '高德地图'
  }
}

// 假设我们在程序设计之初因为百度和高德的渲染方法都是render，我们设计了如下代码
// 渲染地图的方法
function renderMap(obj){
  return obj.render ? obj.render() : ''
}

// 渲染高德地图
const map1 = renderMap(gaodeMap)

// 渲染百度地图
const map2 = renderMap(baiduMap)

console.log(map1,map2);//高德地图 百度地图

// 此时当我们又得到了谷歌地图的API，它的内部如下
const googleMap = {
  vray: function(){
    return '谷歌地图'
  }
}

/* 内部不再是render方法而是vary方法，此时请求来的接口与我们的接口不再符合，这时候不能改请求过来的接口（一般不行），自
己的接口如果内部业务复杂不便修改,就需要使用适配器模式了
*/
// 谷歌接口适配器
const googleMapAdapter = {
  render: googleMap.vray
}

const map3 = renderMap(googleMapAdapter)
console.log(map3);//谷歌地图