# 安装

    本博客VuePress主版本为0.x，相关配置最新的1.x也兼容，请放心使用。另请确认你的Node.js >= 8 

全局安装(推荐)

通常而言，全局安装 VuePress 会非常省心，可以通过如下命令进行全局安装

    $ npm install -g vuepress
    复制代码

本地安装

区别于全局安装，本地安装会把npm包安装在本项目上，生成一个叫node_modules目录，可以通过如下命令进行本地安装（需同时安装vuepress和webpack-dev-middleware）

    $ npm install vuepress webpack-dev-middleware --save-dev
    复制代码

基本配置

    基本配置下的内容适用于 VuePress 的默认主题，对于自定义主题配置可能会不太一样 

脚本命令

我们需要至少两个脚本命令，分别用于本地开发和打包上线，脚本命令需要配置在docs/package.json文件中，它的配置如下

    {
      "scripts": {
        // 本地开发
        "docs:dev": "vuepress dev docs",
        // 打包上线
        "docs:build": "vuepress build docs"
      }
    }
    复制代码

本地开发请使用如下命令，它在本地启用了一个小型的服务器，你可以在浏览器中使用localhost:8080(默认情况下)进行访问

    $ npm run docs:dev
    复制代码

打包命令请使用如下命令，它在.vuepress目录下生成一个dist文件夹

    $ npm run docs:build
    复制代码
