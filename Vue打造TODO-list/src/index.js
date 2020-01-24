import Vue from "vue"// 导入 vue 这个类库
import App from "./app.vue"// 新建一个挂载 Vue组件的 结点 

// 写我们的 todolist下面三个用不到所以注释掉
// import './assets/styles/test.css'
// import './assets/styles/test-stylus.styl'
// import './assets/images/dog.jpg'

// 导入样式
import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)
// 新建一个 Vue 对象 在这个Vue对象中 
// 接收一个 h 参数 这个参数实际上 是 vue中的一个create参数，ton过他把我们的App挂载到 html 里面，这里只是声明了 这个组件渲染出来的app的内容，，挂载这一步还要调用$mount(html结点)
new Vue ({
  render: (h) => h(App) 
}).$mount(root)