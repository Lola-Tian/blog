---
title: '常用的正则表达式'
tags:
 - 
---

### 1.手机号的校验
```js
const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/

const phoneStr1 = '18886233487'
console.log(phoneReg.test(phoneStr1)) // true

const phoneStr2 = '14583016203823'
console.log(phoneReg.test(phoneStr2)) // false
```

### 2.邮箱的校验
```js
const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

const emailStrWY = '956666@163.com' // 163邮箱
const emailStrQQ = '956666@qq.com' // qq邮箱
console.log(emailReg.test(emailStrWY)) // true
console.log(emailReg.test(emailStrQQ)) // true

const noEmail = '72873213.com'
console.log(emailReg.test(noEmail)) // false
```


### 3.身份证的校验
```js
const sfzReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

const sfzOne = '142526199002080667'
console.log(sfzReg.test(sfzOne)) // true

const sfzTwo = '718381298381212183'
console.log(sfzReg.test(sfzTwo)) // false
```

### 4.URL的校验
```js
const urlReg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/

const urlOne = 'https://xixi.haha.com/xxx/xxx'
console.log(urlReg.test(urlOne)) // true

const urlTwo = 'sss://xixi.haha.com/xxx/xxx'
console.log(urlReg.test(urlTwo)) // false
```

### 5.整数的校验
```js
const intReg = /^[-+]?\d*$/

const intNum1 = 123
console.log(intReg.test(intNum1)) // true

const intNum2 = 123.1
console.log(intReg.test(intNum2)) // false
```

### 6.小数的校验
```js
const floatReg = /^[-\+]?\d+(\.\d+)?$/

const floatNum = 123.4
console.log(floatReg.test(floatNum)) // true
```

### 7.保留n位小数的校验
```js
function checkFloat(n) {
  return new RegExp(`^([1-9]+[\d]*(.[0-9]{1,${n}})?)$`)
}
// 保留2位小数
const floatReg = checkFloat(2)

const floatNum1 = 123.4
console.log(floatReg.test(floatNum1)) // true

const floatNum2 = 123.44
console.log(floatReg.test(floatNum2)) // true

const floatNum3 = 123.444
console.log(floatReg.test(floatNum3)) // false
```

### 8.只含字母的字符串

```js
const letterReg = /^[a-zA-Z]+$/

const letterStr1 = 'xixi'
console.log(letterReg.test(letterStr1)) // true

const letterStr2 = 'xixi_haha'
console.log(letterReg.test(letterStr2)) // false
```

### 9.包含中文的字符串

```js
const cnReg = /[\u4E00-\u9FA5]/

const cnStr1 = '我是haha_zhang，张哈哈'
console.log(cnReg.test(cnStr1)) // true

const cnStr2 = 'haha_zhang'
console.log(cnReg.test(cnStr2)) // false
```

### 10.日期 YYYY-MM-DD

```js
const dateReg = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/

const dateStr1 = '2021-10-10'
console.log(dateReg.test(dateStr1)) // true

const dateStr2 = '2021-01-01 1'
console.log(dateReg.test(dateStr2)) // false
```

### 11.日期 YYYY-MM-DD hh:mm:ss

```js
const dateReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/

const dateStr1 = '2021-10-10 22:11:33'
console.log(dateReg.test(dateStr1)) // true

const dateStr2 = '2021-10-10 44:'
console.log(dateReg.test(dateStr2)) // false
```