# pm install -S -D -g 有什么区别
## 1. `npm install module_name -S`    即    npm install module_name --save    写入`dependencies`

## 2. `npm install module_name -D`    即    npm install module_name --save-dev 写入`devDependencies`

## 3. `npm install module_name -g` 全局安装(命令行使用)

## 4. `npm install module_name` 本地安装(将安装包放在 ./node_modules 下)



dependencies与devDependencies有什么区别呢？

`devDependencies 里面的插件只用于开发环境，不用于生产环境`

`dependencies 是需要发布到生产环境的`

有点儿不好理解，别怕，举个例子就好：

开发需要使用gulp构建你的开发和本地运行环境,这时你就要放到dependencies里。gulp是你用来压缩代码，打包等需要的工具，程序实际运行的时候并不需要，所以放到dev里就ok了。

你写程序要用element-ui,生产环境运行项目时肯定要用到element-ui,这时element-ui就应该安装到dependencies中去。

作者：itxing
链接：https://www.jianshu.com/p/2e7f3b69e51e
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


[利用npm安装/删除/查看包信息](https://www.cnblogs.com/jing-tian/p/11281773.html)