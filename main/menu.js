const {
    Menu,
    BrowserWindow
} = require("electron");

let template = [{
    label: "刘杰",
    submenu: [{
        label: "高",
        accelerator: "ctrl + n", // 设置快捷键
        click: () => { // 绑定点击事件
            mainWindow = new BrowserWindow({
                width: 800,
                height: 800,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false
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