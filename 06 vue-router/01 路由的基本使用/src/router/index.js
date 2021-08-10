import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'

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