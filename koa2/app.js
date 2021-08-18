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