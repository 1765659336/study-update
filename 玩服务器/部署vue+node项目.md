## 1、连接服务器

1. 购买服务器

2. 下载

  xshell官网 https://xshell.en.softonic.com/

  安装xshell，一直点击下一步下一步

3. 打开xshell,右点主页左上角文件>新建主机连接，为主机设置自定义名称，输入ip地址，点击连接，再输入用户名和密码

## 2、安装环境

### 安装node方式1

1. 查看可以安装的版本：一定要下载长期维护版本(Gallium)与之前的版本https://nodejs.org/en/download/releases/

![image-20211125111401653](%E9%83%A8%E7%BD%B2vue+node%E9%A1%B9%E7%9B%AE.assets/image-20211125111401653.png)

2. 下载压缩包：linux中使用wget下载工具下载压缩包，cd到想要存放压缩包的路径下，执行`wget https://nodejs.org/download/release/v16.13.0/node-v16.13.0.tar.gz`
3. 解压压缩包,执行`tar -xzvf node-v16.13.0.tar.gz `
4. 如果已经有python2环境直接执行`./configure.py`如果没有就执行`ls -l /usr/bin | grep python`,再执行`python3 configure.py`
5. 编译`make` `make install`，这一步需要很久，耐心等候
6. 查看是否成功安装`node -v` `npm -v`

### 安装node方式2

​		朋友服务器有yum，系统的yum源安装nodejs版本太低。如果你的系统版本比较低，gcc库版本低，编译安装的时候有可能不成功，下面是yum安装的步骤

#### 第一步：

```js
curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash
```

```js
curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash 

## Installing the NodeSource Node.js 10.x repo...


## Inspecting system...

+ rpm -q --whatprovides redhat-release || rpm -q --whatprovides centos-release || rpm -q --whatprovides cloudlinux-release || rpm -q --whatprovides sl-release
+ uname -m

## Confirming "el6-x86_64" is supported...

+ curl -sLf -o /dev/null 'https://rpm.nodesource.com/pub_10.x/el/6/x86_64/nodesource-release-el6-1.noarch.rpm'

## Downloading release setup RPM...

+ mktemp
+ curl -sL -o '/tmp/tmp.aoQY5ifb9m' 'https://rpm.nodesource.com/pub_10.x/el/6/x86_64/nodesource-release-el6-1.noarch.rpm'

## Installing release setup RPM...

+ rpm -i --nosignature --force '/tmp/tmp.aoQY5ifb9m'

## Cleaning up...

+ rm -f '/tmp/tmp.aoQY5ifb9m'

## Checking for existing installations...

+ rpm -qa 'node|npm' | grep -v nodesource

## Run `sudo yum install -y nodejs` to install Node.js 10.x and npm.
## You may also need development tools to build native addons:
     sudo yum install gcc-c++ make
## To install the Yarn package manager, run:
     curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
     sudo yum install yarn
```

#### 第二步：

```js
sudo yum -y install nodejs
```

如果以上步骤不能安装 最新版 node，执行以下命令后再执行第二步：

```js
sudo yum clean all
```

如果存在多个 nodesoucre，执行以下命令删除，然后重新执行第一第二步：

```js
sudo rm -fv /etc/yum.repos.d/nodesource*
```

### 将node配置成淘宝源

```js
npm config set registry https://registry.npm.taobao.org
```

## 3、打包项目

1. 将vue项目打包build，得到一个dist文件夹
2. 用express启动一个服务器，读取dist文件

```js
const express = require("express");
var app = express();
app.use(express.static("./dist"));
app.listen(3000, () => {
    console.log("serve start");
});
```

![image-20211125121610016](%E9%83%A8%E7%BD%B2vue+node%E9%A1%B9%E7%9B%AE.assets/image-20211125121610016.png)

## 4、部署项目

1. 将node_modules文件夹删除，通过xftp(xshell点击上方xftp图标新建文件传输)将代码发送给服务器
2. cd到package.json目录下，执行npm install,下载项目所需要的包

## 5、启动项目

### 利用 forever

forever是一个nodejs守护进程，完全由命令行操控。forever会监控nodejs服务，并在服务挂掉后进行重启。

1. 安装 forever

```js
npm install forever -g
```

2. 启动服务

```js
service forever start
```

3. 使用 forever 启动 js 文件

```js
forever start index.js
```

4. 停止 js 文件

```js
forever stop index.js
```

5. 启动js文件并输出日志文件

```js
forever start -l forever.log -o out.log -e err.log index.js
```

6. 重启js文件

```js
forever restart index.js
```

7. 查看正在运行的进程

```js
forever list
```

### pm2

是一个进程管理工具,可以用它来管理你的node进程,并查看node进程的状态,当然也支持性能监控,进程守护,负载均衡等功能

```js
npm install -g pm2
pm2 start app.js        // 启动
pm2 start app.js -i max //启动 使用所有CPU核心的集群
pm2 stop app.js         // 停止
pm2 stop all            // 停止所有
pm2 restart app.js      // 重启
pm2 restart all         // 重启所有
pm2 delete  app.js      // 关闭
```

### nodejs 自带node.js自带服务nohub，不需要安装别的包

```js
node server.js //启动
```

缺点：存在无法查询日志等问题,关闭终端后服务也就关闭了

## 遇到的问题

1. 打包之后接口跨域，前端没有设置代理，又加上request的baseURL写成了localhost写死了，客户访问项目，localhost的值是客户的主机ip地址，所以跨域了

```js
module.exports = {
    //vue-cli3.0 里面的 vue.config.js做配置
    devServer: {
        proxy: {
            '/': { //这里最好有一个 /
                target: 'http://localhost:9110', // 后台接口域名
                ws: true, //如果要代理 websockets，配置这个参数
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, //是否跨域
                // pathRewrite: { "^/ct": "" }, // 设置成这个之后就不用再发送接口的时候前面加上/ct了
            }
        }
    }
}
```

![image-20211125151459326](%E9%83%A8%E7%BD%B2vue+node%E9%A1%B9%E7%9B%AE.assets/image-20211125151459326.png)

![image-20211125151509618](%E9%83%A8%E7%BD%B2vue+node%E9%A1%B9%E7%9B%AE.assets/image-20211125151509618.png)

2. 服务器要记得开对应端口号，关防火墙
