---
title: '简易任务队列'

tags:
 - 
---
``` js
  class Ren {
    _tasks = [];//存放任务队列
    constructor() { }
    then(ms, cb) {//执行函数，添加回调和事件
      this._tasks.push({ ms, cb });//添加函数到任务队列
      return this//支持链式调用
    }
    start() {
      if (this._tasks.length) {
        const { ms, cb } = this._tasks[0];//取出来第一个。并且结构
        setTimeout(() => {
          cb.apply(this);
          this._tasks.shift();
          if (this._tasks.length) {
            this.start();
          }
        }, ms)
      }
    }
  }
  new Ren().then(1000, () => {
    console.log('第一次', Date.now())
  }).then(2000, () => {
    console.log('第二次', Date.now())
  }).start()
```