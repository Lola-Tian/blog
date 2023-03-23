// module.exports = {
//     title: "科技趣玩",
//     description: "分享各类资源、教程、黑科技软件、工具等等",
//     markdown: {
//         lineNumbers: true,
//     },
//     themeConfig: {
//         sidebar: [{
//             title: 'vue3',
//             children: ['/vue3'],
//             initialOpenGroupIndex: 1 // 可选的, 默认值是 0
//         }]
//     },
// };
module.exports = {
    base: '/blog/',
    title: "博客",
    description: "教程、技术、问题总结",
    theme: 'reco',
    markdown: {
        lineNumbers: true,
    },
    // head: [
    //     // ['link', { rel: 'icon', href: 'favicon.jpeg' }]
    //     ['link', {
    //         rel: 'icon',
    //         href: 'favicon.ico'
    //     }],
    //     ['meta', {
    //         name: 'theme-color',
    //         content: '#3eaf7c'
    //     }],
    // ],

    themeConfig: {
        sidebarDepth: 3,
        navBar: true,
        lastUpdated: '上次更新',
        nav: [
            //     {
            //     text: '配置文件',
            //     items: [{
            //         text: '统一配置文件',
            //         link: '/rule/settings'
            //     }]
            // },
            {
                text: '教程',
                items: [
                    { text: 'markdown语法', link: '/guide/markd' },
                    { text: 'SEO解决方案', link: '/guide/seo' },
                    {
                        text: 'javaScript',
                        link: '/guide/js/basic'
                    },
                    {
                        text: 'CSS',
                        link: '/guide/css/basic'
                    },
                    {
                        text: 'Vue',
                        link: '/guide/vue/vue3/basic',
                    },
                    {
                        text: 'Git',
                        link: '/guide/git/svn'
                    },
                    {
                        text: 'Yarn',
                        link: '/guide/yarn/basic'
                    },
                    {
                        text: '插件',
                        link: '/guide/plugins/iconPicker'
                    }, {
                        text: 'nuxt',
                        link: '/guide/nuxt/basic'
                    }
                ]
            }, {
                text: '网址',
                link: '/websites/links'
            }
        ],
        sidebar: {
            '/guide/js/': rootSidebarConfig('javaScript', ['basic', 'array', 'id', 'regular', 'idCard', 'dataType', 'endForEach', 'clone', 'valueOf', 'task', 'openUrl', 'changeToRem', 'changeToCM', 'method', 'getParams', 'judgeVal', 'cache', 'settings']),
            '/guide/css/': rootSidebarConfig('CSS相关知识点', ['basic', 'is']),
            '/guide/vue/vue3/': rootSidebarConfig('Vue', ['basic', 'diff']),
            '/guide/git/': rootSidebarConfig('Git相关知识点', ['svn', 'cz', 'error'])
        },
        // sidebar: [{
        //     title: 'javaScript',
        //     children: ['/js/array1', '/js/1'],
        //     initialOpenGroupIndex: 1 // 可选的, 默认值是 0
        // }]
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                dateOptions: {
                    hour12: false
                }
            }
        ]
    ],
};

function rootSidebarConfig(title, children) {
    return [{
        title,
        children
    }]
}