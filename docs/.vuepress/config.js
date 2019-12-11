module.exports = {
  title: '许鹏的个人博客',
  description: 'github blog',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    ['link', { rel: 'manifest', href: '/img/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/logo.png' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    logo: '/img/logo.png',
    search: false,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated', // string | boolean
    //nav:require('./nav.js'), // 导航栏配置
    nav:[
      {text: 'Android', link: '/android/'},
      {text: 'AI',
       icon:'/img/ai.jpg',
       items:[
         { text:'TensorFlow',link:'/ai/tensorflow/',icon:'/img/tensorflow.jpg'},
         { text:'Algorithm',link: '/ai/algorithm/',icon:'/img/algorithm.jpg'},
       ]
      },
      {text: '诗和杂谈', link: '/others/'},
      {text: '联系我',
       icon:'/img/contact',
       items:[
         { text:'微博', link: 'https://weibo.com/u/1277226970',icon:'/img/weibo.jpg'},
         { text:'GitHub', link: 'https://github.com/kungfuxupeng',icon:'/img/github.jpg'},
         { text:'CSDN',link: 'https://blog.csdn.net/flyingfox023',icon:'/img/csdn.jpg'},
         { text:'简书',link: 'https://www.jianshu.com/u/8c7d6756de8f',icon:'/img/jianshu.jpg'},
         { text:'WeChat',link:'https://mp.weixin.qq.com/',icon:'/img/wechat.jpg'},
       ]
      }
],

    //sidebar: 'auto', // 侧边栏配置
    //sidebarDepth: 2
    //  sidebar:require('./sidebar.js'),
    sidebar:{
      "/ai/tensorflow/":['','first','second'],
      '/android/':['','基础','进阶'],
      '/others/':['','guoer','qinyuanchun'],
    }
  }
};
