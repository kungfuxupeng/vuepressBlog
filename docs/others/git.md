# git命令基本用法总结
## 初始化
git init
## 提交到仓库
git add xxx.txt 添加某一文件到仓库  
git add -A 添加所有修改到仓库  
git commit 提交到仓库  （git commit -m "提交声明")  
## 版本管理
git status 可以让我们时刻掌握仓库当前的状态  
git diff xxx.txt  查看不同(工作区和暂存区的区别)  
git log 命令显示从最近到最远的提交日志  
git reflog 记录每一次命令  
git reset --hard HEAD^ 回到上一个版本  
git reset --hard HEAD^^ 回到上上一个版本  
git reset --hard HEAD~n 回到上n个版本  
git reset --hard commit_id 或者某一次提交的版本  
git diff HEAD -- xxx.txt  命令可以查看工作区和版本库里面最新版本的区别  
git checkout -- xxx.txt 意思就是，把xxx.txt文件在工作区的修改全部撤销.  

                这里有两种情况：
    
                一种是xxx.txt自修改后还没有被放到暂存区，现在，撤销修改就回到
                和版本库一模一样的状态；
    
                一种是xxx.txt已经添加到暂存区后，又作了修改，现在，撤销修改就
                回到添加到暂存区后的状态。  

git reset HEAD xxx.txt  可以把暂存区的修改撤销掉（unstage），重新放回工作区  
rm xxx.txt 删除文件后两种选择  
                1.真删   git rm xxx.txt     git commit -m "remove xxx.txt"  
                2.误删   git checkout -- xxx.txt  
                (git checkout其实是用版本库里的版本替换工作区的版本，无论工作区
                是修改还是删除，都可以“一键还原”。)


## 远程仓库跟本地关联（两种情况）
1.本地关联到github  
        (1)git remote add origin git@github.com:xxxxxxxxxxxx/xxxxx.git 先关联  
        (2)git push -u origin master   推送本地到github(第一次)  
2.github关联到本地  
        git clone git@github.com:xxxxxxxxxxxx/xxxxx.git



建立关联后推送  
git push origin master    推送到github(非第一次)  
不建立关联强行推送  
git push -f git@github.com:xxxxxxxxxx/xxxxxxx.git master  
查看关联的远程库  
git remote -v  
解除与远程库的关联  
git remote rm origin  

## 分支管理

### 创建合并分支
git checkout -b xxx(或者git switch -c xxx) 创建xxx分支(相当于  git branch dev    git checkout xxx)  
git branch 查看当前分支  
git checkout master(或者git switch master) 切换到主分支  
git merge xxx  把xxx分支合并过来  
git branch -d xxx   删除xxx分支  

### 保存/恢复现场（bug分支）
git stash 保存现场  
git stash list  查看现场列表  
git stash drop stash@{0}     删除stash内容    
git stash apply stash@{0}    恢复现场，但stash内容没有删除  
git stash pop stash@{0}      恢复现场 + stash内容删除  


## 标签管理
git tag v1.0  打标签  
git tag   查看所有标签  
git tag v0.9 commit_id 给某一次提交打标签  
git tag -a v0.1 -m "version 0.1 released" commit_id   带有说明文字的标签  
git show v0.1   查看某一标签  
git tag -d v0.1 删除标签  
git push origin v1.0  推送标签  
git push origin --tags   一次性推送所有标签  
