const autoprefixer = require('autoprefixer')
// stylus 把 .styl文件编译成 css 文件
// 然后 postcss 优化 css 代码
// 优化过程通过一系列组件 
// 现在用到的是 autoprefixer(自动添加浏览器前缀 -webket，-moz，-ms，-o)
module.exports = {
  plugins: [
    autoprefixer()
  ]
}