// 组件要被引用才能看到效果
// jsx 缺点 里面不能输写 style样式，需要像下面这样引入
import '../assets/styles/footer.styl'
export default {
  /* 
  变量怎么传递，这里的 data 就是范例 
  */
  data() {
    return {
      author: 'YWJ'
    }
  },
  /* 
  template 里面的写到 render 方法 ，他会把这部分翻译成每个框架对应的函数方法
  对于 vue 来说 .vue 文件 和 .jsx 文件 最后都换转化成 render 方法
  但是转化出来的 不会叫 render 是一个叫 createElement的方法 
  每一个结点都是一个createElement方法
  id，变量  作为属性传递进去
  */
  render() {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}