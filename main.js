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
                nodeIntegration: true,
                contextIsolation: false
            } //开启识别node程序
        })
        // 打开调试工具
    mainWindow.webContents.openDevTools()
    require("./main/menu.js")
        /* let BrowserView = electron.BrowserView
        let view = new BrowserView()
            // 窗口中内嵌网页
        mainWindow.setBrowserView(view)
            // 配置内嵌网页的位置、大小信息
        view.setBounds({ x: 0, y: 120, width: 800, height: 1000 })
            // 内嵌网页的路径
        view.webContents.loadURL("https://jspang.com"); */
    mainWindow.loadFile("./demo2.html") // 加载HTML静态页面
    mainWindow.on("closed", () => {
        mainWindow = null; // 取消mainWindow占用的资源
    })
})