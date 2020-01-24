const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')  // 非 js 的文件打包成一个静态文件 因为该文件可能要做 浏览器缓存 或者是 通过js 写入浏览器

// isDev = 这个变量是否为 true，启动脚本的时候设置的这些环境变量全部存在于 process.env 这个对象中
const isDev = process.env.NODE_ENV ==='development'

const config = {
  target: 'web', // webpack-dev-server 加上这个选项 代表是跑在服务端的项目 编译目标是 web 平台
  // mode: 'development', // Set 'mode' option to 'development' or 'production'
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      // style-loader 把css加载入html, css-loader 负责读取css格式的文件
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // css 预处理器: style-loader加载css <-- css-loader读取css <-- stylus-loader读取stylus转化css
      // webpack 的 loader 就是这么一层一层,往上扔的
      {
        test: /\.styl/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            /* 使用 stylus-loader，会自动生成 sourceMap，
            但是 stylus-loader 也会帮我们生成 sourceMap ， 这个选项设置为 true ，
            让我们直接使用，之前生成的 sourceMap 让他 编译效率更快 不设置的话，
            postcss-loader 会给我们一个提醒
            */
            sourceMap: true, 
          }
        }, 'stylus-loader']
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            /* 
              这里 loader 采用对象方式书写，因为每个loader都可以写配置项
              url-loader 可以帮我们把图片改成 base64代码 
              把代码直接写在我们的js内容中，而不用生成一个新的文件, 对于小图片可以减少http请求
              其实是封装了 file-loader( 去读取文件->重新换名字->换地方保存的步骤)
              只是当小于1024(我们的设定值)就把图片转换成 base64 代码，插入js文件 
            */
            loader: 'url-loader',
            options: {
              limit: 1024, // 指定大小
              // [文件名].[扩展名] 适配所有文件名字,且能随意设定更改，如改成下方：'[name]-aaa.[ext]'  
              name: '[name]-aaa.[ext]',
              outputPath: 'assets/img/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      /* 
        webpack 编译时 以及页面上自己写的 js 代码可以引用到
        Vue React 会区分环境打包 build-dust 里面有非常多不同版本的 Vue 的代码
        加上双引号 因为 webpack 编译的时候 会编译成 process.env.NODE_ENV === development ,
        然而 development 变量我们没有定义过，会报错
      */
      'process.env': {
        NODE_ENV : isDev?'"development"':'"production"'
      }
    }),
    new VueLoaderPlugin(),
    new HtmlPlugin()
  ]
}

  /* 
  跑npm的时候设置一个环境变量，标识目前是开发环境还是生产环境
  安装一个 cross-env 的包 设置环境变量 
           |<-指令->| |<----环境变量---->|
  "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",

  防止平台不同 为了每个平台都去配置一个指令

  没有安装 cross-env
  "build": "webpack --config webpack.config.js",
  "dev": "webpack-dev-server --config webpack.config.js"

  安装了 cross-env
  "build": "cross-env NODE_ENV=production  webpack --config webpack.config.js",
  "dev": "cross-env NODE_ENV=development  webpack-dev-server --config webpack.config.js"
 */
if (isDev) {
  /*
    个是帮我们在页面上调试代码的，
    因为我们使用的是 .vue的文件开发模式写的是ES6的代码，
    这些代码在浏览器中无法直接运行，这些代码都是编译过的我们没法看懂，
    所以使用的方式是 利用 sourceMap 进行代码的映射，这样在浏览器中
    看到的还是我们正常写的代码，这样调试比较顺眼，这个功能，webpack
    已经帮我们提供了，常用的配置是 #cheap-moudle-eval-source-map
    因为有不同的sourcemap的映射值 cheap-moudle-eval-source-map
    不同的模式有不同的优点
    source-map 映射代码和编译后代码的关系，但是效率低文件大，导致webpack编译满，调试就很慢
    eval 代码乱，行对应不齐
    官方推荐上面配置 效率和准确性都比较高

  */
  config.devtool = '#cheap-moudle-eval-source-map'
  // 改配置
  // webpack-dev-server 就是在 config 上增加一个 devServer 的配置(只有在 webpack2 开始有)
  config.devServer = {
    port:'8000',
    host: '0.0.0.0', 
    /*
      好处：通过 127.0.0.1 访问，也能通过本机的内网 IP 访问，
      通过 IP访问可以在别人的电脑上访问我们这台电脑，
      或者调试手机页面的时候，手机访问电脑
      有编译错诶就显示到网页上
    */
    overlay:{
      errors: true,
    },  
     /*
     因为我们做的是单页应用，单页应用会做很多的前端路由，做前端路由的时候，
     我们页面请求进来的地址不定是我们的index.html这个地址
     把webpack没有做映射的地址都映射到一个入口index.html上面
     */ 
    // historyFallback :{

    // },
    open: true,  // 启动时候自动打开页面
    /*
      hotmodule replacement,在我们开发单页应用的时候我们页面上会有很多的数据
      如果我们每一次一改代码整个页面刷新
      就会导致整个页面上面的数据都没了，我们需要重新操作一遍，数据才会回来
      作用是，我们改了当前页面的一个组件的代码，它会只渲染该组件的代码，而不会整个重新渲染
    */
    hot: true
  }
  // 添加插件的配置
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(), // 启动模型热更新的插件
    /*
      其实还需要书写整个页面热加载的过程的逻辑
      处理我们具体的热加载的代码是我们自己去定的
      但是我们这里使用的是Vue，在vue-loader中已经
      把详细处理的功能写好了
      我们不需要重复书写
    */
    new webpack.NoEmitOnErrorsPlugin()  // 这个插件虽然不重要，但是起到减少不需要信息的展示作用
  )
}

module.exports = config