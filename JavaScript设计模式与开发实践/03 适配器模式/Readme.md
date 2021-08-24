## 适配器模式的定义

如果现有的接口已经能够正常工作，那我们就永远不会用上适配器模式。适配器模式是一种“亡羊补牢”的模式，没有人会在程序的设计之初就使用它。因为没有人可以完全预料到未来的事情，也许现在好好工作的接口，未来的某天却不再适用于新系统，那么我们可以用适配器模式把旧接口包装成一个新的接口，使它继续保持生命力。

```javascript
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
```

适配器模式主要用来解决两个已有接口之间不匹配的问题，它不考虑这些接口是怎样实现的，也不考虑它们将来可能会如何演化。适配器模式不需要改变已有的接口，就能够使它们协同作用。