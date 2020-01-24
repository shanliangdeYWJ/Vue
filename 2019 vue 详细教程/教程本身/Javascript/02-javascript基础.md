# **JavaScript 基础入门**


# 一. **简单易学，富有表现力 — JavaScript**

## **1** **JavaScript历史背景介绍**

![img](file:///C:\Users\ADMINI~1.PC-\AppData\Local\Temp\ksohtml\wpsE98A.tmp.png)  布兰登·艾奇（Brendan Eich，1961年～），1995年在网景公司，发明的JavaScript。

一开始JavaScript叫做LiveScript，但是由于当时Java这个语言特别火，所以为了傍大牌，就改名为JavaScript。

同时期还有其他的网页语言，比如VBScript、JScript等等，但是后来都被JavaScript打败，所以现在的浏览器中，只运行一种脚本语言就是JavaScript。



## **2** **JavaScript和ECMAScript的关系**

ECMAScript是一种由Ecma国际前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association，制定的标准。

JavaScript是由公司开发而成的，不便于其他的公司拓展和使用。所以欧洲的这个ECMA的组织，牵头制定JavaScript的标准，取名为ECMAScript。

**简单来说ECMAScript不是一门语言，而是一个标准。符合这个标准的比较常见的有：JavaScript、Action Script（Flash中用的语言）。**

ECMAScript在2015年6月，发布了ECMAScript 6版本，语言的能力更强。

## **3** **今天的JavaScript：承担更多责任**

**2003年之前，JavaScript被认为"牛皮鲜"**，用来制作页面上的广告，弹窗、漂浮的广告。什么东西让人烦，什么东西就是JavaScript开发的。所以浏览器就推出了屏蔽广告功能。

**2004年JavaScript命运开始改变了，那一年谷歌公司，开始带头使用Ajax技术了，Ajax技术就是JavaScript的一个应用**。并且，那时候人们逐渐开始提升用户体验了。

![img](file:///C:\Users\ADMINI~1.PC-\AppData\Local\Temp\ksohtml\wpsE99B.tmp.jpg) 百度的智能感应

再比如：

![img](file:///C:\Users\ADMINI~1.PC-\AppData\Local\Temp\ksohtml\wpsE99C.tmp.jpg)  网易的Ajax验证



2007年乔布斯发布了iPhone，这一年开始，用户就多了上网的途径，就是用移动设备上网。

**JavaScript在移动页面中，也是不可或缺的。**并且这一年，互联网开始标准化，按照W3C规则三层分离，人们越来越重视JavaScript了。

![img](file:///C:\Users\ADMINI~1.PC-\AppData\Local\Temp\ksohtml\wpsE99D.tmp.jpg) 聚划算的手机页面

2010年的时候，人们更加了解HTML5技术了，**HTML5推出了一个东西叫做Canvas（画布），工程师可以在Canvas上进行游戏制作，利用的就是JavaScript**。

![img](file:///C:\Users\ADMINI~1.PC-\AppData\Local\Temp\ksohtml\wpsE99E.tmp.jpg) canvas制作的水果忍者



2011年，Node.js诞生，使JavaScript能够开发服务器程序了。

![img](file:///C:\Users\ADMINI~1.PC-\AppData\Local\Temp\ksohtml\wpsE99F.tmp.jpg)



## **4** **JavaScript受欢迎且易学**

Tiobe发布了最新一期（3月份）编程语言欢迎度榜单。

![img](file:///C:\Users\ADMINI~1.PC-\AppData\Local\Temp\ksohtml\wpsE9A0.tmp.png)

JavaScript是弱类型的语言。

# 二.  **javascript的整体感知**

## **1 代码的存放位置**

用<script>标签包裹

一般放在<title>下面，如果有<style>块，则放在<style>下面

或者放在<body>内部的最后面。

但是理论上<script>可以出现在页面的任何位置。

## 2 **关于javascript代码的书写格式**

1） 适当的空行和缩进

2） 适当的注释

3） 有语义的变量名函数名等（见名知义）

4） 一行代码结束加分号

## **3 javascript对空格，换行，以及缩进不敏感**

## **4 javascript的执行顺序**

## **5 javascript中的注释**

/*

多行注释

*/



// 单行注释



<!-- -->  html

/* … */   css

# 三. **3****条语句**

## **1** **alert****(****""****)**

## **2** **console.log("")**

## 3 **prompt("");**

4 confirm()

# 四. **直接量**

字符串 用“”或’’引起来的一串数据

“hello”    “123”   ‘world’

123   123.5   -56

true   false

# 五. **数据类型**

一种弱类型的编程语言，定义变量时不区分数据类型。

## **1** **字符串：string**

## **2** **number**

# 六. **开发人员工具的使用**

# 七. **判断数据的类型**

typeof

# 八. **变量**

## **1** **什么是变量**

## **2** **声明变量：**

![img](file:///C:\Users\ADMINI~1.PC-\AppData\Local\Temp\ksohtml\wpsE9A1.tmp.jpg)

var a ;

## **2** **给变量赋值**

## **3** **变量名的注意点**

a.变量名只能由英文字母，数字，下划线以及$符号组成，并且数字不能放在名称开头。

b.变量的命名不能使用javascript中的关键字和保留字。

关键字：已经被javascript内部使用过的。

保留字：还没有被javascript内部使用，但是可能有一天会被使用到。

![img](file:///C:\Users\ADMINI~1.PC-\AppData\Local\Temp\ksohtml\wpsE9A2.tmp.jpg)

c.区分大小写。

## **4** **变量的类型**

这个变量中存储的是什么样的数据，那么这个变量就是什么样类型。

## **5** **变量之间的相互赋值**

# 九. **了解其它的数据类型**

## **1** **string**

直接量：  ‘’,  “”

变量： 存储了一个string类型的值

## **2** **number**

直接量：  123, -12, 123.4(浮点数)

变量：存储了一个number类型的值

## **3** **boolean**

## **4** **undefined**

## **5 null**

## **6 object**

# 十. **运算符**

## **1** **算术运算符**

### １.1  **+**

a.如果加号两边都是字符串，那么加号的作用是连接。

b.如果加号的两边都是数值，那么加号的作用是相加。

c.如果加号一边是字符串，那么加号的作用是连接。

​

### １.2  **-**

就是两个数值之间的减运算。

### １.3 *****

就是两个数值之间相乘

### １.4 **/**

就是两个数值之间相除,不是整除

### １.5 **%取余，取模**

### １.6 **（）**

​	改变运算符优先级

## **2** **运算的先后顺序**

先乘除后加减

## **3** **复杂的运算**

![img](file:///C:\Users\ADMINI~1.PC-\AppData\Local\Temp\ksohtml\wpsE9A3.tmp.jpg)



