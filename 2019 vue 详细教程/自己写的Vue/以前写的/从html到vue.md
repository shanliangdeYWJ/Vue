# 常用可拆解复用组件 日期、轮播、选项卡(让他足够通用)

# 引入Vue.js 主组件和子组件都写在一个html内部
  div#app挂载 vue对象
  内部调用已注册模板(通过标签形式)

  在html中新建组件的模板


  在js中新建组件对应的js组件的对象，并且用 template 挂载 id
  设置相应的方法、数据、属性
  在 Vue 的 component是里面注册

  Vue对象 注册组件

  将来处理，怎么拆？属于每个组件的每套东西：`html(template)模板，css样式，定义(script)`打成一个包，抽离出去


# 组件通信

当拆分成Vue组件的时候，每个组件都有各自的数据，数据来自本身或者外界这里就有 通信了 
## [如下是 header 组件的内部数据通信](./组件内部传值.html)

<html>
<!-- tr 表示 行 td 表示 列 -->
<table style="margin: 0 auto">
<tr>
<!-- 左边表格开始 -->
<td>

```html



<template id="header">
  <header>
    <!-- 必须写在 header 内部 -->
    善良的YWJ TIS IS HEADER
    <!-- prevent 阻止默认行为 -->
    <a href="" 
      v-for="link in links" 
      @click.prevent="popMsg(link)">
      {{ link }}
    </a>
    <ul>
      <li v-for="v in list">
        {{ v.bname }}:
        {{ v.author }}
      </li>
    </ul>
  </header>
</template>



```
</td>
<!-- 左边表格结束 -->
<!-- 右边表格开始 -->
<td>

```js
<script>
  var myHeader = {
    template: '#header',
    // 子组件的 data 书写方式 区别于 主组件
    data(){
      return { 
        links:['AAA', 'BBB', 'CCC'],
        list:[
          {
            bname:'javascript',
            author:'yaoyao'
          },{
            bname: 'java',
            author:'yaoyao'
          }]
       }
    },
    methods:{
      popMsg(info){
        window.alert(info)
      }
    }
  };
</script>
```
</td>
<!-- 右边表格结束 -->
</tr>
</table>
</html>

# `父传子`使用 props 传递数据

>父组件包含子组件，父组件向子组件正向传递数据（父传子(正向)）

>子组件接收到后根据参数的不同，来渲染不同的内容或者执行操作

## props 是子组件的属性，(通过它，接收父组件的数据) 声明需要从父级接受的数据

## props的值：
1. 字符串(String) ['user','name'...]
2. 对象 Object  (需要验证的时候)

## 父传子 2步操作
1. 父组件告知
2. 子组件接收

## 渲染的时候 先到模型 模型到模板
## 这就是所谓的单向数据流

# 子组建数据传递父组件用自定义事件
  - 1. 系统预定义好的事件 click keyup ...
  - 2. 自定义事件

# 使用 webpack 的各种 loader 把这些组件拆分出去


公网 IP 