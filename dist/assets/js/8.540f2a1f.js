(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{380:function(t,s,a){t.exports=a.p+"assets/img/nuxt-13.481caa2d.png"},457:function(t,s,a){t.exports=a.p+"assets/img/nuxt-1.7ced9892.png"},458:function(t,s,a){t.exports=a.p+"assets/img/nuxt-2.8bbc7080.png"},459:function(t,s,a){t.exports=a.p+"assets/img/nuxt-3.0ded674b.png"},460:function(t,s,a){t.exports=a.p+"assets/img/nuxt-4.b3764f01.png"},461:function(t,s,a){t.exports=a.p+"assets/img/nuxt-5.1f6011cb.png"},462:function(t,s,a){t.exports=a.p+"assets/img/nuxt-6.9923c867.png"},463:function(t,s,a){t.exports=a.p+"assets/img/nuxt-7.90497c8c.png"},464:function(t,s,a){t.exports=a.p+"assets/img/nuxt-8.6d37ed99.png"},465:function(t,s,a){t.exports=a.p+"assets/img/nuxt-9.0d492e86.png"},466:function(t,s,a){t.exports=a.p+"assets/img/nuxt-10.ddc7ce91.png"},467:function(t,s,a){t.exports=a.p+"assets/img/nuxt-11.41c1369e.jpg"},468:function(t,s,a){t.exports=a.p+"assets/img/nuxt-12.e4f429f8.png"},537:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"为什么要用nuxt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用nuxt"}},[t._v("#")]),t._v(" 为什么要用nuxt")]),t._v(" "),s("p",[t._v("加载更快，更好的seo，乌拉乌拉乌拉，我放俩连接，看一下")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.zxcaedu.com/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ssr的"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jytqedu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("普通官网"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("在看打一下ssr打包之后的文件，和vue打包之后的不同")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("ssr静态打包之后index.html\n"),s("img",{attrs:{src:a(457)}}),s("br")])]),t._v(" "),s("li",[s("p",[t._v("vue打包之后index.html")])])]),t._v(" "),s("img",{attrs:{src:a(458)}}),t._v(" "),s("ul",[s("li",[t._v("ssr打包之后呢，你的那些dom元素都会预渲染出来，只是把css和dom树合并一下就完事")]),t._v(" "),s("li",[t._v("vue打包就只是一个标签，然后再从新去走渲染流程")])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.nuxtjs.cn/guide/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装教程"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),s("ul",[s("li",[t._v("vue里新建路由 这就不放图了，大家应该都知道")]),t._v(" "),s("li",[t._v("nuxt也不用放图，直接在pages页面下创建.vue后缀的页面，他会自己给你加上去到.nuxt下router.js就能看到你创建的路由了")])]),t._v(" "),s("h2",{attrs:{id:"dom还是虚拟dom没变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom还是虚拟dom没变化"}},[t._v("#")]),t._v(" dom还是虚拟dom没变化")]),t._v(" "),s("ul",[s("li",[t._v("证实一下哈 我混入一个指令来看dom\n"),s("img",{attrs:{src:a(459)}}),t._v(" "),s("img",{attrs:{src:a(460)}})])]),t._v(" "),s("p",[t._v("且可以看到，只是在打包的时候就像博客一样，个人理解他重新生成了一个html的静态文件 我写这个项目暂时没遇到过vue里能用，nuxt里不能用的(动态组件除外)")]),t._v(" "),s("h2",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),s("img",{attrs:{src:a(461)}}),t._v(" "),s("ul",[s("li",[t._v("/note/note/assets这个里边放的资源会被vue-loader优化 别的就如图了")])]),t._v(" "),s("h2",{attrs:{id:"package-json的几个命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json的几个命令"}},[t._v("#")]),t._v(" package.json的几个命令")]),t._v(" "),s("ul",[s("li",[t._v("别的和vue是一样的，但是需要注意的是他静态资源打包的时候，nuxt build 和 nuxt generate打包是有区别的")]),t._v(" "),s("li",[t._v("我只是简单的了解了一下，有兴趣的自行百度哈")]),t._v(" "),s("li",[t._v("nuxt generate 正儿八经的静态，打个比方后台给个商品列表，你打包的时候是1,2,3,4,5 过几天后台给你了5,4,3,2,1 正常来说咱们前端不用处理，但是如果你用了nuxt generate这个命令去打包， 那你就要在重新打一次包（不知道为啥，别问，我自己也试了一次，的确是这样）所以nuxt generate只适合做一些纯静态的页面例如官网！！！！！")]),t._v(" "),s("li",[t._v("nuxt build打包生成的是动态页面，当然是同样具有SEO功能。别的呜啦啦啦百度吧")]),t._v(" "),s("li",[t._v("还有个 nuxt start 是说挂个什么东西服务PM2是JavaScript运行时Node.js的进程管理器。 允许一直保持应用程序活跃，无需停机即可重新加载它们，并促进常见的Devops任务。(不知道干嘛的。我百度的)")])]),t._v(" "),s("h2",{attrs:{id:"nuxt-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-config-js"}},[t._v("#")]),t._v(" nuxt.config.js")]),t._v(" "),s("ul",[s("li",[t._v("公用配置文件，打包文件")])]),t._v(" "),s("h3",{attrs:{id:"页面公用配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面公用配置"}},[t._v("#")]),t._v(" 页面公用配置")]),t._v(" "),s("img",{attrs:{src:a(462)}}),t._v(" "),s("h3",{attrs:{id:"当前页面配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前页面配置"}},[t._v("#")]),t._v(" 当前页面配置")]),t._v(" "),s("ul",[s("li",[t._v("在当前页面的head属性中可以引入当前页面需要的文件添加你想要的配置\n"),s("img",{attrs:{src:a(463)}})])]),t._v(" "),s("h3",{attrs:{id:"引入插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入插件"}},[t._v("#")]),t._v(" 引入插件")]),t._v(" "),s("ul",[s("li",[t._v("看到配置项有个plugins 数组 他就是来配置我们引入的各种插件。")]),t._v(" "),s("li",[t._v("官网的话是这样说\n"),s("img",{attrs:{src:a(464)}})]),t._v(" "),s("li",[t._v("我是这么写 拿swiper举例要写在这个文件夹下，然后再nuxt.config.js里的plugins引入这样就能达到全局引入\n"),s("img",{attrs:{src:a(465)}})]),t._v(" "),s("li",[t._v("局部引用 拿element举例哈（踩坑项哈。单独引入element某个组件的时候要去lib文件夹下去找对应js文件）\n"),s("img",{attrs:{src:a(466)}}),t._v("\n然后就可以愉快的打包了！打包你就GG 不然你打个试试，你所有的静态资源会找不到，你asstes文件下的文件 找不到，static文件也找到，页面也跳不了，所以哈，就有了下边的配置项")])]),t._v(" "),s("h3",{attrs:{id:"打包配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包配置"}},[t._v("#")]),t._v(" 打包配置")]),t._v(" "),s("p",[t._v("其实就是正常的webpack的配置 关于asstes下被转译的文件找不到添加如下配置 添加完再去试一次哈\n"),s("img",{attrs:{src:a(467)}})]),t._v(" "),s("ul",[s("li",[t._v("解决完打包路径问题之后，剩下的webpack配置就看你自己需求加了，提示一点 nuxt里边自带了很多常见loader 如果不是有特别的需求loader不变，去加插件吧 nuxt打包完之后如果代码块大于100k 他会提示你，并且告诉你不利于ssr 在build里添加"),s("font",{attrs:{color:"#0093E9"}},[t._v("analyze:true")]),t._v("来查看打包文件的大小，去进行优化。")],1)]),t._v(" "),s("h2",{attrs:{id:"书写注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#书写注意"}},[t._v("#")]),t._v(" 书写注意")]),t._v(" "),s("p",[t._v("vue的生命周期还是都支持的额外新增了一个"),s("font",{attrs:{color:"#0093E9"}},[t._v("asyncData")]),t._v(" 官网的说法是 "),s("font",{attrs:{color:"#0093E9"}},[t._v("asyncData会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用。在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用 asyncData方法来获取数据并返回给当前组件")]),t._v("。他是在组件初始化之前调用的，所以在方法内部是没办法通过this来获取组件的实例 如果你是纯静态打包，那就可以忽略这项，如果你是build打包，还是要注意下的，他和data的区别 asyncData 请求写法\n"),s("img",{attrs:{src:a(468)}})],1),t._v(" "),s("ul",[s("li",[t._v("放在asyncData 请求打完包之后\n"),s("img",{attrs:{src:a(380)}}),t._v("\n如果那些要做seo的就放在asyncdata里")]),t._v(" "),s("li",[t._v("放在methods里的方法打包之后\n"),s("img",{attrs:{src:a(380)}}),t._v("\n这种打包后，会请求你的数据，看得到是返回的内容 所以嘞，nuxt generate的打包只适合存静态的打包，后台数据变更，前端要从新打包")])])])}),[],!1,null,null,null);s.default=e.exports}}]);