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
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated', // string | boolean
    nav:require('./nav.js'), // 导航栏配置
    //sidebar: 'auto', // 侧边栏配置
    //sidebarDepth: 2
    sidebar:require('./sidebar.js'),
  }
};
