## 安装环境
npm init --y
cnpm install electron@8.0.0 -D
cnpm install electron@8.0.0 -g
## 打开electron
.\node_modules\.bin\electron.cmd (!在window系统中使用\符号分隔，与Linux不同)
## 运行程序
electron .
## 主进程
使用BrowserWindow模块创建主进程
```js
const electron = require("electron");

const app = electron.app; // 引用electron的app

const BrowserWindow = electron.BrowserWindow; // 窗口类引用

let mainWindow = null; // 声明打开的主窗口
app.allowRendererProcessReuse = true;
app.on("ready", () => {
  // 新建一个窗口
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    } //开启识别node程序
  })
  mainWindow.loadFile("./demo2.html") // 加载HTML静态页面
  mainWindow.on("closed", () => {
    mainWindow = null; // 取消mainWindow占用的资源
  })
})
```
## 渲染进程
使用remote模块 使渲染进程可以使用electron
```js
// remote模块学习，在渲染进程里面使用主线程
const btn = document.querySelector("#btn");
console.log(btn);
const BrowserWindow = require("electron").remote.BrowserWindow;

window.onload = function () {
  btn.onclick = () => {
    newWin = new BrowserWindow({
      height: 500,
      width: 500,
      webPreferences: {
        nodeIntegration: true
      }
    })
    newWin.loadFile("index.html")
    newWin.on("closed", () => {
      newWin = null;
    })
  }
}
```
## 修改主菜单
使用 Menu 模块 对菜单进行设置与绑定事件与设置快捷键
```js
const {
    Menu,
    BrowserWindow
} = require("electron");

let template = [{
    label: "刘杰",
    submenu: [{
        label: "高",
        accelerator: "ctrl + n",
        click: () => {
            mainWindow = new BrowserWindow({
                width: 800,
                height: 800,
                webPreferences: {
                    nodeIntegration: true
                } //开启识别node程序
            })
            mainWindow.loadFile("./demo2.html") // 加载HTML静态页面
            mainWindow.on("closed", () => {
                mainWindow = null; // 取消mainWindow占用的资源
            })
        }
    }, {
        label: "富"
    }, {
        label: "帅"
    }]
}, {
    label: "陈婷",
    submenu: [{
        label: "白"
    }, {
        label: "富"
    }, {
        label: "美"
    }]
}]

var M = Menu.buildFromTemplate(template); //将菜单配置项生成菜单

Menu.setApplicationMenu(M); //将生成的菜单设置成新的菜单
```
## 修改右键菜单
```js
const rightTemplate = [{
    label: "复制",
    accelerator: "ctrl + c", // 设置快捷键
    click: () => { // 绑定点击事件
        alert("复制")
    }
}, {
    label: "粘贴",
    accelerator: "ctrl + v", // 设置快捷键
    click: () => { // 绑定点击事件
        alert("粘贴")
    }
}]

const m = Menu.buildFromTemplate(rightTemplate);

window.addEventListener("contextmenu", function(e) {
    // 阻止默认事件
    e.preventDefault();
    // 设置右键菜单
    m.popup({ windwo: remote.getCurrentWindow() })
})
```
## 开启调试窗口
```js
    mainWindow.webContents.openDevTools()
```
## 通过链接使用外部浏览器打开
使用shell 模块调用外部浏览器
```js
const ahref = document.querySelector("#ahref");
ahref.onclick = function(e) {
    e.preventDefault();
    // const href = this.href;
    // const href = e.target.href;
    const href = this.getAttribute("href")
    console.log(href);
    shell.openExternal(href)
}
```
## 嵌入网页
使用BrowserView模块在窗口中嵌入网页
```js
 let BrowserView = electron.BrowserView
    let view = new BrowserView()
        // 窗口中内嵌网页
    mainWindow.setBrowserView(view)
        // 配置内嵌网页的位置、大小信息
    view.setBounds({ x: 0, y: 120, width: 800, height: 1000 })
        // 内嵌网页的路径
    view.webContents.loadURL("https://jspang.com");
```
## 打开子窗口
```js
let btnSon = document.querySelector("#btnSon");
btnSon.onclick = function(e) {
    // window.open("https://jspang.com")
    window.open()
}
```
## 子窗口向父窗口传递数据
```js
// 子窗口传递数据
let btn = document.querySelector("#btn");
btn.onclick = function(e) {
    // 向所有的父窗口传递数据
    window.opener.postMessage("我是子窗口传递过来的数据")
}

// 父窗口接收数据
window.addEventListener("message", (msg) => {
    let context = document.querySelector("#context");
    context.innerHTML = JSON.stringify(msg);
})
```
## 选择文件对话框
选择文件 dialog 对话框的使用
```js
let selectBaby = document.querySelector("#selectBaby");
    selectBaby.onclick = function() {
        dialog.showOpenDialog({
            title: "请选择你的媳妇",
            // 设置文件默认名,默认路径是该文件的路径
            defaultPath: "Baby",
            filters: [{ name: "img" }, { extensions: ['jpg', 'png'] }],
            buttonLabel: "媳妇~"
        }).then(result => {
            console.log(result);
            let Baby = document.querySelector("#Baby");
            Baby.setAttribute("src", result.filePaths[0])
        }).catch(err => {
            console.log(err);
        })
    }
```
## 保存文件对话框