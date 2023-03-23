---
title: 'Object.valueOf'

tags:
 - 
---
## ==数据类型隐式转换  
  ```js
  false 0
  true 1
  '字符串会调用valueof或则tostring 如果得不到数据就是nan'
  '对象去做比较得话，会调用对象里得valueOf方法当然也可以重写对象方法，如果valueOf得到得值不是一个数字得话，那么就会调用对象得toString方法'

let a={
i:1,
valueOf:()=>{
    console.log('执行')
return a.i++
}
}
console.log(a==1&&a==2&&a==3)//true
'所以时间对象也可以进行比较的，时间对象比较的时候也是会调用valueOf方法，时间对象重写了valueOf方法，valueOf返回的是时间对象的时间戳'

