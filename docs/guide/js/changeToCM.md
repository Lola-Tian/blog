---
title: '像素与长度单位cm的换算方法'
tags:
 - 
---

### 1、像素px与长度单位cm的换算方法
```js
changeUnit() {
    // 在页面创建一个1cm宽的元素，然后等待出结果
    const div = document.createElement('div')
    div.id = 'cm'
    div.style.width = '1cm'
    document.querySelector('body').appendChild(div)
    // 原生方法获取浏览器对元素的计算值
    const cm1 = document.getElementById('cm').getBoundingClientRect()
    console.log(cm1.width, 'width')
    return cm1.width
  },
//最后计算得出结果
this.cardWidth = this.changeUnit() * 3
console.log(this.cardWidth, 'cardWidth')
```

示例如下：

<img src="./imgs/cm.png" ><br/>

