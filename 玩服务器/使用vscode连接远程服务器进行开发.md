`原文地址:https://zhuanlan.zhihu.com/p/412736012?ADUIN=1765659336&ADSESSION=1637888058&ADTAG=CLIENT.QQ.5845_.0&ADPUBNO=27178`

### 1.安装SSH

```
推荐安装git，git自带ssh
```

### 2.安装vscode插件

```
安装 Remote - SSH 插件
```

### 3.生成ssh密钥

```js
ssh-keygen -t rsa -C "1765659336@qq.com"
// 输入密码，记住控制台不显示，直接输，再确认输入一次(建议回车)
```

`错误示范`

不要输入密码，直接回车就行，不然后面连接服务器的时候，每次都需要输入这个密钥的密码

![image-20211126091353824](%E4%BD%BF%E7%94%A8vscode%E8%BF%9E%E6%8E%A5%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E8%A1%8C%E5%BC%80%E5%8F%91.assets/image-20211126091353824.png)

记住这个密码，这个密码是生成的ssh密钥的密码，后面会用到，我们称为”密钥密码“吧

### 4.找到生成的ssh密钥并配置到远程服务器中

```
// 本机生成的ssh文件路径一般为C:\Users\"computerUsername"
// 服务器根目录，不一定非要是 /.ssh 路径，可以是自己的用户目录，类似这样：/root/.ssh
// 找到公钥文件 tangyanssh.pub ，复制到远程服务器 根目录 的 .ssh 文件夹中。
```

![image-20211126102518988](%E4%BD%BF%E7%94%A8vscode%E8%BF%9E%E6%8E%A5%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E8%A1%8C%E5%BC%80%E5%8F%91.assets/image-20211126102518988.png)

ps: xftp显示隐藏文件，工具-->选项-->显示隐藏文件![image-20211126102617310](%E4%BD%BF%E7%94%A8vscode%E8%BF%9E%E6%8E%A5%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E8%A1%8C%E5%BC%80%E5%8F%91.assets/image-20211126102617310.png)

### 5.生成 authorized_keys 文件。这样后续在使用 Remote 插件时，不需要密码，就可以直接登录到服务器。

```js
ssh serverUsername@ip或者是域名 // 本机执行然后再输入服务器密码见下图1
//进入服务器.ssh文件夹下，生成authorized_keys
//切记不要写成cat id_rsa.pub > authorized_key 这样会进行覆盖，把之前配置的ssh密钥覆盖
//也可以选择使用xftp右键文件使用记事本编辑进行复制粘贴见下图2
cat id_rsa.pub >> authorized_key
//在 cmd 窗口，再次尝试如下看是否需要密码见下图4
ssh serverUsername@ip -i “路径(找到自己私钥的文件路径见下图3)”
```

![image-20211126103555704](%E4%BD%BF%E7%94%A8vscode%E8%BF%9E%E6%8E%A5%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E8%A1%8C%E5%BC%80%E5%8F%91.assets/image-20211126103555704.png)

![image-20211126103847336](%E4%BD%BF%E7%94%A8vscode%E8%BF%9E%E6%8E%A5%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E8%A1%8C%E5%BC%80%E5%8F%91.assets/image-20211126103847336.png)

![image-20211126104708500](%E4%BD%BF%E7%94%A8vscode%E8%BF%9E%E6%8E%A5%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E8%A1%8C%E5%BC%80%E5%8F%91.assets/image-20211126104708500.png)

![image-20211126110404685](%E4%BD%BF%E7%94%A8vscode%E8%BF%9E%E6%8E%A5%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E8%A1%8C%E5%BC%80%E5%8F%91.assets/image-20211126110404685.png)

### 6.配置vscode插件的配置文件

1、点击左侧的 “远程资源管理器” 图标，点击右上角的小齿轮（设置）

![img](https://pic1.zhimg.com/80/v2-6e836793e32938ddc345c5504086bf34_720w.jpg)

2、在弹出来的窗口中，选择第一个 config 文件打开，参考下图，填写对应信息

![img](https://pic4.zhimg.com/80/v2-19ec5d23c9d044f7385fc95e279e6bbb_720w.jpg)

（1）参考上述配置，释义如下

```text
# Read more about SSH config files: https://linux.die.net/man/5/ssh_config
Host tangyanServer
    HostName 113.125.2.185
    User root
    Port 22
    IdentityFile "C:\Users\dell\tangyan"
```

- Host ：连接的主机名称，可自定义；
- Hostname ：远程主机的 IP 地址；
- User ：用于登录远程主机的用户名；
- Port ：用于登录远程主机的端口，SSH 默认为 22 ；
- IdentityFile ：本地的私钥文件 id_rsa 路径；

（2）如果需要连接多个远程服务器，可参考如上内容，配置多个即可；

```text
Host <远程主机名称1>
    HostName <远程主机1 IP>
    User <用户名1>
    Port <ssh端口，默认22>
    IdentityFile <本机SSH私钥路径>
    ForwardAgent yes <VSCode 自己添加的，不用管>
Host <远程主机名称2>
    HostName <远程主机2 IP>
    User <用户名2>
    Port <ssh端口，默认22>
    IdentityFile <本机SSH私钥路径>
    ForwardAgent yes <VSCode 自己添加的，不用管>
```

### 7.连接测试

![image-20211126113302454](%E4%BD%BF%E7%94%A8vscode%E8%BF%9E%E6%8E%A5%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E8%A1%8C%E5%BC%80%E5%8F%91.assets/image-20211126113302454.png)

点击进行连接，连接成功左下角会出现主机名如下

![image-20211126113357237](%E4%BD%BF%E7%94%A8vscode%E8%BF%9E%E6%8E%A5%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E8%A1%8C%E5%BC%80%E5%8F%91.assets/image-20211126113357237.png)