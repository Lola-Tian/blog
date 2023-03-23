---
title: '强制结束forEach'

tags:
 - 
---

```js
let List = [1,2,3,4,5];
  List.forEach(num=>{
       console.log(num)//1,2,3,4,5
    if(num===2) return
 
  })
   const arr = [1, 2, 3]
    try {
      arr.forEach(num => {
        console.log(num);//1,2
        if (num === 2) {
          throw new Error('结束')
        }
      })
    } catch (err) {
      console.log(err)//结束
    }
```