// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
// 配置公共URL

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 全局配置请求拦截器
axios.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token = sessionStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
      // Authorization 是后端给的参数
    }
    return config
  },
  error => {
    return Promise.reject(error)
  })

// 全局配置响应拦截器
axios.interceptors.response.use((response) => {
  if (response.config.url !== '') {
    console.log(response)
    // 判断后端返回status信息，进行处理，token后端设置的有过期时间，必须处理
    if (response.data.status === -6) {
      alert('身份过期跳转到登录页面')
      window.location = '/login'
    }
  }
  return response
}, (error) => {
  // 返回错误码,自行定义,根据项目需求和实际情况
  return Promise.reject(error)
}
)
