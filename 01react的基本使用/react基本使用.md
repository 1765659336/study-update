## react安装
npm install react react-dom

## 引入react react-dom 两个js文件
<script src="./node_modules/react/umd/react.development.js" type="text/javascript" charset="utf-8"></script>
<script src="./node_modules/react-dom/umd/react-dom.development.js" type="text/javascript" charset="utf-8"></script>

## 创建React元素
// 创建react元素
// 参数1：元素名称 参数2：元素属性 参数3及后面的参数：元素的子节点
const title = React.createElement('h1',null,'Hello React');

## 渲染React元素到页面中
// 渲染React元素
// 参数1：要渲染的React元素 参数2：挂载点
ReactDOM.render(title,document.getElementById('root'));

## 页面中的容器
<div id="root"></div>