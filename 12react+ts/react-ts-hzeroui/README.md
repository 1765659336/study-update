## 参考资料

[hzero-ui 官网](https://open.hand-china.com/hzero-ui/docs/react/introduce-cn)
[react-router5 官网](https://v5.reactrouter.com/web/guides/quick-start)

## 创建项目

```
yarn create react-app react-ts-hzeroui --template typescript
yarn add  hzero-ui
yarn add antd
yarn add axios
yarn add react-router-dom@5.2.1 @types/react-router-dom
```

## 怎么将 antd 组件库的全局样式添加到项目中

```
在全外层组件index.tsx的样式文件index.css头部引入antd的样式文件
@import '~antd/dist/antd.css';
```

## 使用表单组件时，表单验证控制台报警告

```js
/* index.js:1 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of DomWrapper which is inside StrictMode. Instead, add a ref directly to the element you want to reference
将react严格模式关闭即可,在idnex.tsx将React.StrictMode删除 */
ReactDOM.render(
  // React.StrictMode开启严格模式
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

## 网络请求跨域，使用代理服务器
```js
// 安装依赖 yarn add http-proxy-middleware
```