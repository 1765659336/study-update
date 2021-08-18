# koa官网
https://koa.bootcss.com/

## koa2的基本使用
### Koa2的安装
npm init -y
npm i koa --save

### 测试使用
```javascript
  const Koa = require('koa')

  const app = new Koa()

  app.use(async ctx => {
    ctx.body = 'Hello World'
  })

  app.listen(3000)
```

## koa2的脚手架
### 安装
npm i -g koa-generator
### 创建项目
koa2 myApp
### 初始化项目
cd myApp / npm install
### 启动项目
npm run dev 启动开发环境devDependencies下的nodemon

## koa-router后端路由中间件
### 安装
npm install koa-router --save
### 使用示范
```javascript
const Koa = require('koa')

const Router = require('koa-router')

const app = new Koa()

// const router = new Router()

// 可以为路由配置一个基础路径
const router = new Router({
  prefix: '/base'
})

router.get('/', async ctx => {
  ctx.body = '首页'
})

router.get('/user', async ctx => {
  ctx.body = '用户页面'
})

router.post('/user/add', async ctx => {
  ctx.body = '添加用户页面'
})

// 使用这个router中间件
app.use(router.routes())

app.listen(3000)
```

## koa2中间件
### 使用示范
```javascript
const Koa = require('koa')

const app = new Koa()

app.use(async (ctx,next) => {
  console.log('1');
  await next()
  ctx.body = 'Hello World'
  console.log('1-2');
})

app.use(async (ctx,next)=>{
  console.log('2');
  await next()
  console.log('2-2');
})

app.use((ctx) => {
  console.log('3');
})

app.listen(3000)
/* （这就是中间件的执行顺序）调用接口输出结果为:
  1
  2
  3
  2-2
  1-2
*/
```

## 接收参数
### 接收get的query参数、post的body参数、路由的url参数
```javascript
const Koa = require('koa')

const Router = require('koa-router')

const bodyparser = require('koa-bodyparser')
const app = new Koa()

// const router = new Router()

// 可以为路由配置一个基础路径
const router = new Router({
  prefix: '/base'
})

router.get('/', async ctx => {
  ctx.body = '首页'
})

router.get('/url/:id', async ctx => {
  // /:id占位，接收路由参数
  const {id} = ctx.params
  console.log(id)
  ctx.body = `首页${id}`
})

router.get('/user', async ctx => {
  // 接收get的query请求参数方式1
  // let { id } = ctx.request.query
  // 方式2 别名
  let {id} = ctx.query
  console.log(id)
  ctx.body = `用户页面${id}`
})

router.post('/user/add', async ctx => {
  // 接收post的参数需要安装一个中间件koa-bodyparser --save
  // 使用postman发送JSON请求body时，注意JSON格式的数据属性名和属性值都要使用双引号
  let {username,pwd} = ctx.request.body
  console.log(username,pwd)
  ctx.body = `添加用户${username}密码${pwd}`
})

// 使用use中间件,中间件的书写顺序很重要，这些封装好的中间件内部都调用了next方法
app.use(bodyparser())
// 使用这个router中间件
app.use(router.routes())


app.listen(3000)
```

## 发送响应
```javascript
const Koa = require('koa')

const Router = require('koa-router')

const bodyparser = require('koa-bodyparser')
const app = new Koa()

const router = new Router()

router.get('/', async ctx => {
  ctx.body = '首页'
  // ctx.body = '<h1>首页</h1>'
  /* //响应体
  ctx.body = {
    code:200,
    msg:'信息'
  } */
  /* //状态码
  ctx.status = 200 */
  /* // 响应头
  ctx.set("Allow","GET,POST") */
})

// 使用use中间件,中间件的书写顺序很重要，这些封装好的中间件内部都调用了next方法
app.use(bodyparser())
// 使用这个router中间件
app.use(router.routes())


app.listen(3000)
```

## 错误处理
### koa自带的错误处理
```javascript
const Koa = require('koa')

const Router = require('koa-router')

const bodyparser = require('koa-bodyparser')
const app = new Koa()

const router = new Router()

router.get('/', async ctx => {
  // 没有a，执行undefined.b会报错，客户端会接收到500的服务器端状态码
  // 请求不存在的路由路径，客户端会收到404的状态码
  a.b
  ctx.body = '首页'
})

router.get('/user', async ctx => {
  if(ctx.query.id > 2){
    ctx.throw(412,'先决条件失败：不存在的id')
  }
  ctx.body = {
    code: 200,
    msg: '用户'
  }
})

// 使用use中间件,中间件的书写顺序很重要，这些封装好的中间件内部都调用了next方法
app.use(bodyparser())
// 使用这个router中间件
app.use(router.routes())


app.listen(3000)
```
### 自定义错误处理中间件
```javascript
const Koa = require('koa')

const Router = require('koa-router')

const bodyparser = require('koa-bodyparser')

const app = new Koa()

const router = new Router()

// 错误捕获处理中间件
app.use(async (ctx,next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.status || error.statusCode || 500
    ctx.body = {
      errmessage:error.message
    }
  }
})

router.get('/', async ctx => {
  // 没有a，执行undefined.b会报错，客户端会接收到500的服务器端状态码
  // 请求不存在的路由路径，客户端会收到404的状态码
  a.b
  ctx.body = '首页'
})

router.get('/user', async ctx => {
  if(ctx.query.id > 2){
    ctx.throw(412,'先决条件失败：不存在的id')
  }
  ctx.body = {
    code: 200,
    msg: '用户'
  }
})

// 使用use中间件,中间件的书写顺序很重要，这些封装好的中间件内部都调用了next方法
app.use(bodyparser())
// 使用这个router中间件
app.use(router.routes())


app.listen(3000)
```
### koa-json-error错误处理中间件
#### 安装
npm i koa-json-error --save
#### 使用示范
```javascript
const Koa = require('koa')

const Router = require('koa-router')

const bodyparser = require('koa-bodyparser')

const jsonerror = require('koa-json-error')

const app = new Koa()

const router = new Router()


router.get('/', async ctx => {
  // 没有a，执行undefined.b会报错，客户端会接收到500的服务器端状态码
  // 请求不存在的路由路径，客户端会收到404的状态码
  a.b
  ctx.body = '首页'
})

router.get('/user', async ctx => {
  if(ctx.query.id > 2){
    ctx.throw(412,'先决条件失败：不存在的id')
  }
  ctx.body = {
    code: 200,
    msg: '用户'
  }
})
// 使用错误处理中间件
app.use(jsonerror())
// 使用use中间件,中间件的书写顺序很重要，这些封装好的中间件内部都调用了next方法
app.use(bodyparser())
// 使用这个router中间件
app.use(router.routes())


app.listen(3000)
```

## 后端参数校验koa-parameter
### 安装
npm i koa-parameter --save
```javascript
const Koa = require('koa')

const Router = require('koa-router')

const bodyparser = require('koa-bodyparser')

const jsonerror = require('koa-json-error')

const parameter = require('koa-parameter')
const app = new Koa()

const router = new Router()


router.get('/', async ctx => {
  // 没有a，执行undefined.b会报错，客户端会接收到500的服务器端状态码
  // 请求不存在的路由路径，客户端会收到404的状态码
  a.b
  ctx.body = '首页'
})

router.get('/user', async ctx => {
  // id参数校验，不符合会进行错误处理
  ctx.verifyParams({
    id:{
      type:'number',
      required:true
    }
  })
  if(ctx.query.id > 2){
    ctx.throw(412,'先决条件失败：不存在的id')
  }
  ctx.body = {
    code: 200,
    msg: '用户'
  }
})
// 使用错误处理中间件
app.use(jsonerror())
// 使用use中间件,中间件的书写顺序很重要，这些封装好的中间件内部都调用了next方法
app.use(bodyparser())
app.use(parameter(app))
// 使用这个router中间件
app.use(router.routes())


app.listen(3000)
```