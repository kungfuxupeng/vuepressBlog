(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{212:function(t,r,x){"use strict";x.r(r);var i=x(0),a=Object(i.a)({},(function(){var t=this,r=t.$createElement,x=t._self._c||r;return x("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[x("h1",{attrs:{id:"git命令基本用法总结"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#git命令基本用法总结"}},[t._v("#")]),t._v(" git命令基本用法总结")]),t._v(" "),x("h2",{attrs:{id:"初始化"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),x("p",[t._v("git init")]),t._v(" "),x("h2",{attrs:{id:"提交到仓库"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#提交到仓库"}},[t._v("#")]),t._v(" 提交到仓库")]),t._v(" "),x("p",[t._v("git add xxx.txt 添加某一文件到仓库"),x("br"),t._v("\ngit add -A 添加所有修改到仓库"),x("br"),t._v('\ngit commit 提交到仓库  （git commit -m "提交声明")')]),t._v(" "),x("h2",{attrs:{id:"版本管理"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#版本管理"}},[t._v("#")]),t._v(" 版本管理")]),t._v(" "),x("p",[t._v("git status 可以让我们时刻掌握仓库当前的状态"),x("br"),t._v("\ngit diff xxx.txt  查看不同(工作区和暂存区的区别)"),x("br"),t._v("\ngit log 命令显示从最近到最远的提交日志"),x("br"),t._v("\ngit reflog 记录每一次命令"),x("br"),t._v("\ngit reset --hard HEAD^ 回到上一个版本"),x("br"),t._v("\ngit reset --hard HEAD^^ 回到上上一个版本"),x("br"),t._v("\ngit reset --hard HEAD~n 回到上n个版本"),x("br"),t._v("\ngit reset --hard commit_id 或者某一次提交的版本"),x("br"),t._v("\ngit diff HEAD -- xxx.txt  命令可以查看工作区和版本库里面最新版本的区别"),x("br"),t._v("\ngit checkout -- xxx.txt 意思就是，把xxx.txt文件在工作区的修改全部撤销.")]),t._v(" "),x("pre",[x("code",[t._v("            这里有两种情况：\n\n            一种是xxx.txt自修改后还没有被放到暂存区，现在，撤销修改就回到\n            和版本库一模一样的状态；\n\n            一种是xxx.txt已经添加到暂存区后，又作了修改，现在，撤销修改就\n            回到添加到暂存区后的状态。  \n")])]),t._v(" "),x("p",[t._v("git reset HEAD xxx.txt  可以把暂存区的修改撤销掉（unstage），重新放回工作区"),x("br"),t._v("\nrm xxx.txt 删除文件后两种选择"),x("br"),t._v('\n1.真删   git rm xxx.txt     git commit -m "remove xxx.txt"'),x("br"),t._v("\n2.误删   git checkout -- xxx.txt"),x("br"),t._v("\n(git checkout其实是用版本库里的版本替换工作区的版本，无论工作区\n是修改还是删除，都可以“一键还原”。)")]),t._v(" "),x("h2",{attrs:{id:"远程仓库跟本地关联（两种情况）"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库跟本地关联（两种情况）"}},[t._v("#")]),t._v(" 远程仓库跟本地关联（两种情况）")]),t._v(" "),x("p",[t._v("1.本地关联到github"),x("br"),t._v("\n(1)git remote add origin git@github.com:xxxxxxxxxxxx/xxxxx.git 先关联"),x("br"),t._v("\n(2)git push -u origin master   推送本地到github(第一次)"),x("br"),t._v("\n2.github关联到本地"),x("br"),t._v("\ngit clone git@github.com:xxxxxxxxxxxx/xxxxx.git")]),t._v(" "),x("p",[t._v("建立关联后推送"),x("br"),t._v("\ngit push origin master    推送到github(非第一次)"),x("br"),t._v("\n不建立关联强行推送"),x("br"),t._v("\ngit push -f git@github.com:xxxxxxxxxx/xxxxxxx.git master"),x("br"),t._v("\n查看关联的远程库"),x("br"),t._v("\ngit remote -v"),x("br"),t._v("\n解除与远程库的关联"),x("br"),t._v("\ngit remote rm origin")]),t._v(" "),x("h2",{attrs:{id:"分支管理"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),x("h3",{attrs:{id:"创建合并分支"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#创建合并分支"}},[t._v("#")]),t._v(" 创建合并分支")]),t._v(" "),x("p",[t._v("git checkout -b xxx(或者git switch -c xxx) 创建xxx分支(相当于  git branch dev    git checkout xxx)"),x("br"),t._v("\ngit branch 查看当前分支"),x("br"),t._v("\ngit checkout master(或者git switch master) 切换到主分支"),x("br"),t._v("\ngit merge xxx  把xxx分支合并过来"),x("br"),t._v("\ngit branch -d xxx   删除xxx分支")]),t._v(" "),x("h3",{attrs:{id:"保存-恢复现场（bug分支）"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#保存-恢复现场（bug分支）"}},[t._v("#")]),t._v(" 保存/恢复现场（bug分支）")]),t._v(" "),x("p",[t._v("git stash 保存现场"),x("br"),t._v("\ngit stash list  查看现场列表"),x("br"),t._v("\ngit stash drop stash@{0}     删除stash内容"),x("br"),t._v("\ngit stash apply stash@{0}    恢复现场，但stash内容没有删除"),x("br"),t._v("\ngit stash pop stash@{0}      恢复现场 + stash内容删除")]),t._v(" "),x("h2",{attrs:{id:"标签管理"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#标签管理"}},[t._v("#")]),t._v(" 标签管理")]),t._v(" "),x("p",[t._v("git tag v1.0  打标签"),x("br"),t._v("\ngit tag   查看所有标签"),x("br"),t._v("\ngit tag v0.9 commit_id 给某一次提交打标签"),x("br"),t._v('\ngit tag -a v0.1 -m "version 0.1 released" commit_id   带有说明文字的标签'),x("br"),t._v("\ngit show v0.1   查看某一标签"),x("br"),t._v("\ngit tag -d v0.1 删除标签"),x("br"),t._v("\ngit push origin v1.0  推送标签"),x("br"),t._v("\ngit push origin --tags   一次性推送所有标签")])])}),[],!1,null,null,null);r.default=a.exports}}]);