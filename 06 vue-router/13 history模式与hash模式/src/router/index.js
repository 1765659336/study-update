import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
// 创建一个路由器
export default new VueRouter({
  // 浏览器路径模式
  mode: history,
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
              path: 'detail',
              // 传递params参数需要占位符
              // path: 'detail/:id/:title',
              component: Detail,
              // props的第一种写法，值为对象，将对象中的所有key-value以props形式传递给Detail组件
              // props:{a:1,b:2}
              // props的第二种写法，值为布尔值，如果为true，就会把路由组件中收到的所有"""""""params"""""""参数通过props传递给路由组件
              // props:true
              // props的第三种写法，值为回调函数, vue-router调用这个函数时，传递组件上的$route参数返回值是一个对象，传递给组件的props
              props($route){
                return {id:$route.query.id,title:$route.query.title}
                // return {id:$route.params.id,title:$route.params.title}
              }
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