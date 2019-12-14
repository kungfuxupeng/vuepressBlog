# 小技巧
## 安装conda后取消命令行前出现的base，取消每次启动自动激活conda的基础环境, 使用ubuntu 自带的Python环境
方法一：

退出base环境回到系统自带的环境

```
conda deactivate 
```


方法二

1，通过将auto_activate_base参数设置为false实现：
```
conda config --set auto_activate_base false
```
2，那要进入的话通过conda activate base

3，如果反悔了还是希望base一直留着的话通过
```
conda config --set auto_activate_base true
```
来恢复
