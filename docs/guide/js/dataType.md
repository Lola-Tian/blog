---
title: '数据类型判断'

tags:
 - 
---
# typeof
优点：对简单数据类型友好
缺点：复杂数据类型返回的统一是object
```js
  let obj = {};
  let arr = [];
  let str = '1';
  let num = 1;
  let bol = false;
  let date = new Date();
  let reg = new RegExp();
  let SymbolType = Symbol('1')
  function test() { };
  let testType = new test()
  // console.log(typeof reg, typeof date, typeof arr, typeof obj, typeof SymbolType);//复杂数据类型打印出来的都是object，对简单数据类型友好
```
# instanceof 
优点：可以对复杂数据类型做判断
缺点：因为是从原型上去判断是否相等，所以可以人为干扰返回结果
```js

 let str1 = new String('1');
  console.log(str1 instanceof String)//true 证实 instanceof 可以在继承关系中用来判断一个实例是否属于他的父类
  console.log(reg instanceof RegExp)//复杂数据类型友好，
  console.log(Array instanceof Function)//true Array.__proto__ === Function.prototype
  console.log([] instanceof Function) 
  //false [].__proto__ === Array.prototype, 找不到会继续找__proto__, 所以应该是找到[].__proto__.__proto__, 也就是Array.prototype.__proto__而这个是Object.prototype。还是找不到的话就继续沿着__proto__走，直到为null, 而Object.prototype.__proto__就是为null了，也就是无功而返了
  //个人理解 A instanceof B    A是不是B实例化的对象  这个是通过 原型链往上找，可以手动干扰原型。所以嘞不是太友好
```
# constructor
优点：可以对复杂数据类型做判断
缺点：因为是从构造函数里判断是否相等，所以也可以人为干扰返回结果
```js

  ''.constructor == String    //true
  new Number(1).constructor == Number   //true
  new Function().constructor == Function  //true
  true.constructor == Boolean   //true
  new Date().constructor == Date  //true

  new Error().constructor == Error;    //true
  [].constructor == Array    //true
  document.constructor == HTMLDocument    //true
  window.constructor == window  //false
  console.log('abc'.constructor) //ƒ String() { [native code] }
  console.log([].constructor === Array)//true
  //同instanceof一样 构造函数的constructor也可以进行干扰，会有弊端
```
# Object.prototype.toString.call
优点:准确判断类型
缺点：硬要说就是写的太长
```js
Object.prototype.toString.call(变量)
//返回结果[object 返回是数据类型]
```
