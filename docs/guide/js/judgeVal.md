---
title: '快速判断数组中每个对象同一属性值是否相同（3种方法）'
tags:
 - 
---

### 1、快速判断数组中每个对象同一属性值是否相同（3种方法）
1、findIndex() 方法
返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
```js
 var ticketArr=[
	 {
	 name:'大师傅',
	 isshow:false
	 },
	 {
	 name:'的风格',
	 isshow:false
	 }
 ]
 if(ticketArr.findIndex(target=>target.isshow === true)==-1){
 	console.log('验证通过')
 }else {
 	console.log('验证不通过')
 }
```
2、find() 方法
用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined
```js
 var ticketArr=[
	 {
	 name:'大师傅',
	 isshow:false
	 },
	 {
	 name:'的风格',
	 isshow:false
	 }
 ]
if(ticketArr.find(target=>target.isshow === true) === undefined){
     console.log('验证通过')
 }else {
     console.log('验证不通过')
 }
```
3、every() 方法
检测数组 ticketArr 的所有元素 的isshow是否都为false
```js
 var ticketArr=[
	 {
	 name:'大师傅',
	 isshow:false
	 },
	 {
	 name:'的风格',
	 isshow:false
	 }
 ]
 if(ticketArr.find(target=>target.isshow === false)){
      console.log('验证通过')
 }else {
     console.log('验证不通过')
}
```

