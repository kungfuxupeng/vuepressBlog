# 项目目录

VuePress 作为一个静态网站生成器，它对于项目的目录是有一定的限制的，一个基本的项目结构如下所示

    |-- docs // 特定的目录
        |-- README.md // 首页
        |-- .vuepress // 特定的目录
            |-- config.js // 特定的配置文件
    |-- package.json // 脚本命令
    复制代码

首页

默认主题提供了一个首页(HomePage)，即上面目录结构中的README.md文件中的内容，首页是可选的，对于 VuePress 中默认主题的首页，我们可以进行如下配置

    ---
    home: true
    lang: zh-CN
    heroText: A  Personal Blog
    heroImage: /logo.jpg
    actionText: 开始 →
    actionLink: /interview/
    features:
    - title: A Blog
      details: 专注写作前端博客，记录日常所得。
    - title: For Me
      details: 故九万里，则风斯在下矣，而后乃今培风；背负青天，而莫之夭阏者，而后乃今将图南。
    - title: For Interview
      details: 广州，已入坑ღ( ´･ᴗ･` )比心
    footer: Copyright © 2019-present Wangtunan
    ---
    复制代码

以上配置即为本博客的首页效果

首页配置说明

在首页的YAML格式配置中，我们填写了一些配置，下面我们将详细描述每一个配置的具体含义

    home:true：标记此页面是否为首页
    lang:zh-CN：表示本页面的语言为zh-CN(简体中文)
    heroText: 首页的标题内容
    heroImage: 首页的标题图片，其中全路径为docs/.vuepress/public/logo.jpg，默认去public目录下找静态资源
    actionText: 首页跳转按钮的内容
    actionLink: 首页跳转按钮挑战的路径，其中全路径为docs/interview/readme.md，默认readme命名的文件可以省略不写链接的后面内容，省略后的链接如上
    features: 表明首页的特征，固定的格式为title + details，以三栏流式布局的方式展示
    footer: 为底部内容，与普通的网页一样，我们可以在footer里面写版权信息

导航栏

    配置导航栏需要在.vuepress/config.js文件中进行配置 

在默认主题下，导航栏需要在themeConfig属性上进行配置nav，导航栏的两个重要属性为text和link，其中text指明了导航的文字内容，link指明了导航的链接。

