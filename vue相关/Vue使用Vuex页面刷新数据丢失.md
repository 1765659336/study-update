1. 在组件的created周期里面写入监听页面刷新的方法

```js
window.addEventListener("beforeunload",()=>{
    sessionStorage.setItem("store",JSON.stringify(this.$store.state))
})
```

1. 在create下写入页面加载时读取sessionStorage里的数据

```js
if(sessionStorage.getItem("store")){
    //读取仓库的值
    this.$store.replaceState(Object.assign({},this.$store.state,JSON.par se(sessionStorage.getItem("store "))));

}
```

