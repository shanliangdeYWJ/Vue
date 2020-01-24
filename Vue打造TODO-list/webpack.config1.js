const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')  // 非 js 的文件打包成一个静态文件 因为该文件可能要做 浏览器缓存 或者是 通过js 写入浏览器

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name]-aaa.[ext]',
            outputPath: 'assets/img/'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new HtmlPlugin()
  ],
  // // optimization: {
  // //   splitChunks: {
  // //     chunks (chunk) {
  // //       // exclude `my-excluded-chunk`
  // //       return chunk.name !== 'my-excluded-chunk';
  // //     }
  // //   }
  // // },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         name: "vendor",
  //       },
  //     },
  //   },
  //   runtimeChunk: true
  // }


}

if (isDev) {
  config.module.rules.push({
    test: /\.styl/,
    use: [
      'style-loader',
      'css-loader', {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        }
      }, 'stylus-loader']
  })
  config.devtool = '#cheap-moudle-eval-source-map'
  config.devServer = {
    port: '8000',
    host: '0.0.0.0',
    overlay: {
      errors: true,
    },
    open: true,
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
    test: /\.styl/,
    use: ExtractPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader', {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          }
        }, 'stylus-loader']
    })
  })
  config.plugins.push(
    new ExtractPlugin('styles.[chunkhash:8].css'),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // })
  )
  config.optimization = {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2, maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    },
    runtimeChunk: true
  }
}

module.exports = config