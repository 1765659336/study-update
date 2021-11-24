### **VUE 复制内容至剪切板(两种使用方法)**

复制内容至剪切板使用的是插`件'vue-clipboard2'`,通过官方文档会发现共有两种使用方式。

**第一种方式与大多数文章类似，只粘贴代码：**

```
<template>
 <div class="container">
  <input type="text" v-model="message">
  <button type="button"
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">Copy!</button>
 </div>
</template>
<script>
 export default {
  data() {
   return {
    message: 'Copy These Text',
   }
  },
  methods: {
   onCopy: function (e) {
    alert('You just copied: ' + e.text)
   },
   onError: function (e) {
    console.log(e)
    alert('Failed to copy texts')
   }
  }
 }
</script>
```

这种使用方式直接将变量内容复制至剪切板，暂时没有找到处理数据后再复制的方式，这时就需要使用第二种方式。

### **第二种方式：**

```
<template>
 <div class="container">
  <input type="text" v-model="message">
  <button type="button" @click="doCopy('add me!')">Copy!</button>
 </div>
</template>
<script>
 export default {
  data() {
   return {
    message: 'Copy These Text'
   }
  },
  methods: {
   dataProcessing (val) {
    this.message = this.message + ' ' + val
   },
   doCopy: function (val) {
    this.dataProcessing(val)
    this.$copyText(this.message).then(function (e) {
     alert('Copied')
     console.log(e)
    }, function (e) {
     alert('Can not copy')
     console.log(e)
    })
   }
  }
 }
</script>
```

通过这段示例代码能看到，复制动作使用的是VUE响应函数方式，这就为复制前控制数据提供了可能！

**下面在看下vue实现复制内容到剪贴板功能，具体内容如下所示：**

注： 依赖第三方插件 clipboard

#### **一、安装插件**

```
npm install vue-clipboard2 --save
```

#### **二、全局注入（main.js）**

```
import VueClipboard from ``'vue-clipboard2'``Vue.use(VueClipboard)
```

#### **三、使用**

```html
<ul class="file-list">
 <li v-for="(f, index) of files" :key="index">
 <span>[文件{{index + 1}}] {{f}}</span>
 <span class="copy-btn" v-clipboard:copy="f" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</span>
 </li>
</ul>
// 复制成功时的回调函数
onCopy (e) {
 this.$message.success("内容已复制到剪切板！")
},
// 复制失败时的回调函数
onError (e) {
 this.$message.error("抱歉，复制失败！")
}
```
