# vuepress解析Markdown数学符号&公式
## config配置
1. 

使用markdown-it-katex插件
``` js
markdown: {
    ......
    extendMarkdown: md => {
      ......
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-katex'))
      ......
    },
    ......
  },
```
2. 

head里面添加下面两行代码
``` js
head: [ // 注入到当前页面的 HTML <head> 中的标签
    ......
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }],
    ......
  ],
```

## npm安装插件
```$ sudo npm add markdown-it-katex```  
## 执行build命令
```$ vuepress build docs```


大功告成！接下来就可以愉快地用markdown写数学公式了。:100:

写入  
```$\sum$```   
显示  
$\sum$    

写入    
```$\sum_{i=0}^n$```  
显示   
$\sum_{i=0}^n$  

写入  
```$x^2$```  
显示  
$x^2$   

写入  
```$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$```   
显示  
$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$  

更多数学符号请参考：[Markdown数学符号&公式](https://blog.csdn.net/katherine_hsr/article/details/79179622)  和[markdown最全数学公式速查](https://blog.csdn.net/jyfu2_12/article/details/79207643) 

## 外部链接测试
This is an [example link](http://example.com/ "With a Title"). 

当知道 [搜狗][2] 可以搜索微信和知乎时，我慢慢爱上了 [搜狗][2]。学术搜索还是用 [Google][1] 靠谱。也会用 [Bing][4] 和 [百度][3]，毕竟各有所长。

[1]: https://www.google.com/ "Google"
[2]: https://www.sogou.com/ "Sogou"
[3]: https://www.baidu.com/ "Baidu Search"
[4]: https://cn.bing.com/ "Bing Search"


## 页面链接测试
[行内式](#npm安装插件 '跳转')  

[9]: #config配置 'config配置'
[参考式][9]  

