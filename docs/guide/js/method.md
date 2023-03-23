---
title: '常用方法'
tags:
 - 
---

## (1).rem布局
```js
//封装设置rem的方法
function setREM(){
	//建议 设置UI设计图宽度尺寸 （以1920为例）
	const whdef = 100/1920;
	//获取浏览器可见区域宽度
	const wW = document.documentElement.clientWidth || document.body.clientWidth;
	//以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
	const rem = wW * whdef;
	//设置字体值  (当屏幕宽度为1920时，font-size = 100px 即1rem = 100px)
	document.documentElement.style.fontSize = rem + 'px'
}
//先首次调用
window.onload = function () {
	setREM();
}	
//设置监听浏览器窗口变化函数  动态改变font-size的值
window.onresize = function(){
	setREM();
}
```

## (2).时间转换

```js
/**
 * @param {(Object|string|number)} time
 * @param {string} cFormat 格式
 * @returns {string}
 */
function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'undefined' || time === null || time === 'null') {
    return ''
  } else if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
```

## (3).下载文件
```js
/**
 * @param {Blob} obj 数据流
 * @param {string} suffix 文件格式
 * @param {string} name 文件名称
 */
function downloadFile(obj, suffix, name) {
  const fileName = parseTime(new Date()) + '-' + name + '.' + suffix
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(new Blob([obj]))
  link.download = fileName
  link.click()
  // 释放内存
  window.URL.revokeObjectURL(link.href)
}
```

## 侧边栏路由过滤
```js
/**
 * 适用于配置管理后台项目的侧边栏，切配置的code权限码
 * @param {Array} sidebar 侧边栏配置路由列表
 * @param {Array} permissionRouterList 权限路由列表
 */
function sidebarRouter(permissionRouterList, sidebar) {
  permissionRouterList.forEach((item) => {
    sidebar.forEach((v) => {
      if (item.code === v.code || v.code === 'admin') {
        v.hidden = false
        if (v.children && v.children.length > 0) {
          sidebarRouter(permissionRouterList, v.children)
        }
      }
    })
  })
  return sidebar
}
```