之前说过ajax 是 async javascript and xml 
## 那么xml是什么呢
与HTML类似，但是没有预定义的标签，标签全都是自己定义的，都是成对的标签
```html
<student>
	<name>Liujie</name>
	<age>20</age>
</student>
```
但是现在已经被JSON替代了，JSON格式更加的简洁
```javascript{"name":"Liujie","age":20}```
## AJAX的特点
### AJAX的优点
1、无需刷新页面与服务器端进行通信
2、更新部分页面的内容
### AJAX的缺点
1、没有浏览历史，不能回退
2、存在跨域问题
3、seo对爬虫不友好，爬虫爬取不到页面的内容
