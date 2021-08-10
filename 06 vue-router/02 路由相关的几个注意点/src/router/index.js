import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'

// 创建一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component: About
    },
    {
      path:'/Home',
      component: Home
    },
  ]
})