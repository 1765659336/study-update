import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
// 创建一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component: About,
      children:[
        {
          // vue-router会自动匹配上/
          path: 'message',
          component: Message,
        },
        {
          path: 'news',
          component: News,
        }
      ]
    },
    {
      path:'/home',
      component: Home,
      children:[
        {
          // vue-router会自动匹配上/
          path: 'message',
          component: Message,
          children:[
            {
              // 简化路由跳转，相当于路径的简写形式
              name: 'detailName',
              // path: 'detail',
              // 传递params参数需要占位符
              path: 'detail/:id/:title',
              component: Detail,
            }
          ]
        },
        {
          path: 'news',
          component: News,
        }
      ]
    },
  ]
})