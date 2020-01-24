
console.log('=======');
console.log('2'+2);  // string 22
console.log(+'2'+2); // +就是转成数字格式 4
console.log('2-2'); // string 2-2
console.log('=======');
console.log(new Date());  // 2019-12-06T14:56:00.494Z
console.log(+new Date()); //+就是转成数字格式,日期转化成 unix时间戳
console.log("typeof -'2'======="); // 隐式转换
console.log(typeof (-'不管你写什么')); // number
console.log(typeof -'1+1'); // number
console.log('=======');

var f = false ;

var result = f / 0  // NaN 相当于 false转化成0  0/0
console.log(result);  // NaN 相当于 false转化成0  0/0
if(result){
  console.log(result * 2 + '2' + 4) // 224 string
} else {
  console.log(!result * 2 + '2' + 4)
}

console.log('=======');
console.log(typeof(null == undefined)); // boolean
console.log(typeof(Number('12.3px')));  // number
console.log(typeof(0===''));  // boolean
console.log(typeof(function(){return 'a'})); // function
console.log(typeof(num)); // undefined
console.log(typeof([1, 2, 3])); // object
console.log(typeof typeof(3 * '4'));  // string
