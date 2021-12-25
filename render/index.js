const fs = require("fs");
const { dialog } = require("electron").remote
window.onload = function() {
    const btn = document.querySelector("#btn");
    const div = document.querySelector("#content");
    btn.onclick = () => {
        fs.readFile("./Readme.md", (err, data) => {
            div.innerHTML = data
        })
    }
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
}