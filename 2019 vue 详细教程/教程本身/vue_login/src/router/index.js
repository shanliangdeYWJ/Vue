import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import cart from '@/components/cart'
import login from '@/components/login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
// 全局配置路由守卫
router.beforeEach((to, from, next) => {
  // 从sessionStorage中获取token值
  let isLogin = window.sessionStorage.getItem('token')
  if (isLogin) {
    // 如果用户信息存在则往下执行。
    next()
  } else { // 没有信息进行判断
    // 如果路由跳转登录页面继续执行
    if (to.path === '/login') {
      next()
    } else { // 没有信息也不跳转登录页面进行处理
      next('/login')
    }
  }
})
export default router
