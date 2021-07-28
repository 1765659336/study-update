# First
练习git提交远程仓库和拉取代码
## 主要内容
### 汉得实习第一周作业

## 创建仓库

### 创建的仓库名和项目根目录名称尽量相同

## 生成密钥 
### 关键代码：ssh-keygen -t rsa
### 找到
```
C:\Users\dell\.ssh\id_rsa.pub
```

### 打开全选复制
### github首页右上角找到settings 再找到ssh and GPG key
### 将复制内容粘贴并随意命名

## ssh连接仓库
```
git remote add origin + ssh地址
```

###  

### origin是别名

## 拉取代码
```
git clone + ssh地址
```



##  提交代码

### git push origin + 分支名

## 分支

### 创建分支

```
git branch 创建的分支（dev）

git checkout 切换到的分支（dev)

两句合并 git checkout -b dev
```



### 查看分支

```
git branch
```



### 删除分支

```
git branch -d 需要删除的分支（dev）
```



### 合并分支

```
先切换到要被合并的分支（master），然后执行

git merge 需要合并的分支（dev）
```

## 查看所有仓库的名称和路径

```
git remote -v
```

## 修改连接仓库的路径

```
git remote set-url 仓库名 路径
```

