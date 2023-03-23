---
title: 'SEO解决方案'
sidebar: auto
collapsable: true
tags:
 - 
---
## 1、百度缩略图
#### 如何在百度搜索中出现缩略图，提高图片被搜索引擎自主抓取的概率
```
1.图片的比例要尽量符合121:75，大小统一是 121*75px 的尺寸，最小不能小于 121*75px ，
  与图片的宽高尺寸有较大关系，与图片的大小没有太大关系
2.图片的alt标签尽量与网页主题相关
3.图片文字尽量多一些与主题有关的关键词，用户点击较多的图片较容易被选中
4.网站首页上部黄金位置有焦点图片
5.抓取的图片要具有一定的权重值
```

## 2、提高网站搜索排名
#### 提高网站在百度搜索引擎中的排名，会从以下三个维度综合考虑给出一个质量打分
#### <font color='red'>1.内容质量</font>
```
考量网页内容质量的维度最为重要的是：成本、内容完整、信息真实有效以及安全
• 首页：导航链接和推荐内容是否清晰、有效。
• 文章页：能否提供清晰完整的内容，图文并茂更佳。
• 问答页：是否提供了有参考价值的答案
```
#### <font color='red'>2.浏览体验</font>
```
主要从内容排版、广告影响两方面对网页进行考量：
• 排版合理，版式美观，易于阅读和浏览；
• 用户需要的内容占据网页最重要位置；
• 能够通过页面标签或页面布局十分清楚地区分出哪些是广告；
• 广告不抢占主体内容位置，不阻碍用户对主要内容的获取；
```
#### <font color='red'>3.可访问性</font>
```
主要从正常打开、权限限制、有效性三方面判断
特别注意不要有死链和主体资源失效的网页
```

## 3、vue单页SEO
我们都知道，vue单页应用对SEO不友好，打包生产的index.html的源码中，只引入了一个js文件，搜索引擎无法抓取有效数据。为此开发使用原生JS，但是比较繁琐，vue单页SEO变的尤为重要，下面介绍两种vue单页SEO的解决方案：<font color='red'>预渲染(Prerender)</font>、<font color='red'>服务端渲染(ssr)</font>

## 4、预渲染
• 适用于单个页面的SEO，比如，只要求首页SEO，废话不多说，下面是干货：

1.安装 prerender-spa-plugin、vue-meta-info 插件
```
npm i prerender-spa-plugin --save-dev
npm i vue-meta-info --save-dev
```
2.配置 vue.config.js 文件，添加以下代码
```js
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const config = {...} // 配置对象，里面的内容不一一列举了

// 添加 plugins 插件
if (process.env.NODE_ENV === 'production') { // 判断只在生产环境执行
  config.configureWebpack.plugins.push(
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/'], // 想要 seo 页面的路由地址
      renderer: new Renderer({
        inject: {
          foo: 'bar'
        },
        renderAfterTime: 5000, // 触发渲染的时间，用于获取数据后再保存渲染结果
        headless: true, // 是否打开浏览器，false 是打开。可用于 debug 检查渲染结果
        renderAfterDocumentEvent: 'render-event'
      }),
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      }
    })
  )
}
```
3.配置 MetaInfo，设置需要SEO单页的title、keyWords、description等关键字

• 在main.js中添加
```js
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)
```
• 需要SEO的文件中设置
```js
export default {
  metaInfo: {
    title: '网校-首页',
    meta: [
      {
        name: 'keyWords',
        content: '我是首页contact关键字'
      },
      {
        name: 'description',
        content: '我是首页description描述'
      }
    ]
  }
}

```

## 5、服务端渲染
• 适用于所有页面都需要SEO的项目，比如官网

<font color='red'>～未完待续～</font>