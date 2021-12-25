// remote模块学习，在渲染进程里面使用Electron

let btn = document.querySelector("#btn");
const { remote } = require("electron")
const { BrowserWindow, Menu, shell } = remote;

window.onload = function() {
    btn.onclick = () => {
        newWin = new BrowserWindow({
                height: 500,
                width: 500,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false
                }
            })
            // newWin.webContents.openDevTools()
        newWin.loadFile("index.html")
        newWin.on("closed", () => {
            newWin = null;
        })
    }
}
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

const ahref = document.querySelector("#ahref");
ahref.onclick = function(e) {
    e.preventDefault();
    // const href = this.href;
    // const href = e.target.href;
    const href = this.getAttribute("href")
    console.log(href);
    shell.openExternal(href)
}

let btnSon = document.querySelector("#btnSon");
btnSon.onclick = function(e) {
    // window.open("https://jspang.com")
    window.open("./popup.html");
}

// 接收子窗口传递的数据
window.addEventListener("message", (msg) => {
    let context = document.querySelector("#context");
    context.innerHTML = JSON.stringify(msg);
})