# 如何使用
 _（先安装git,不会的看这个https://zhuanlan.zhihu.com/p/443527549?utm_id=0&wd=&eqid=fb9c4f4d00004e780000000564804069）_ 

 _（先安装[Node.js](https://nodejs.org/en)，建议安装lts版本)用管理员打开终端，输入npm --v
和图片上一致则安装成功![输入图片说明](.vscode/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-09-24%20200640.png)_ 

![输入图片说明](.vscode/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-09-24%20150953.png)
先打开VSCode，然后打开一个文件夹
![输入图片说明](.vscode/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-09-24%20151240.png)
然后打开终端
![输入图片说明](.vscode/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-09-24%20151655.png)
首先拉取git clone https://gitee.com/NeitherCupid139/godot.git
![输入图片说明](.vscode/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-09-24%20151858.png)
然后进入项目godot，输入cd godot

在终端中输入npm i
# 如何运行
### 在终端中输入npm run dev，打开网址就行
![输入图片说明](.vscode/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-09-24%20152028.png)
如果页面和图片中显示的一样，那么就成功了
![输入图片说明](.vscode/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-09-24%20152129.png)

# 如何开发
![输入图片说明](.vscode/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-09-24%20152301.png)
打开pages文件夹，找到你开发的网页的vue文件,然后在模板template中写html代码就行
![输入图片说明](.vscode/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-09-24%20152457.png)

# 如何查看自己开发的页面
在导航栏输入下面的网页
![输入图片说明](.vscode/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-09-24%20203954.png)
[这个代表首页](http://localhost:5173/)
[这个代表关于页面](http://localhost:5173/about)
[这个代表博客页面](http://localhost:5173/blog)
[这个代表社区页面](http://localhost:5173/community)
[这个代表特点页面](http://localhost:5173/features)
# 如何提交
第一次用git？
1. 先初始化一下git  

`git init`

2. 把文件添加到版本库中，使用命令 git add .添加到暂存区里面去，不要忘记后面的小数点“.”，意为添加文件夹下的所有文件

`git add .`

3. 用命令 git commit "提交说明" 告诉Git，把文件提交到仓库。引号内为提交说明

`git commit  -m "吧啦吧啦"`

4. 关联到远程库 git remote add origin 远程库地址 

` git remote add origin https://gitee.com/NeitherCupid139/godot.git`

5. git pull 获取远程库与本地同步合并(如果远程库不为空必须做这一步，否则后面的提交会失败) 

`git pull`

6. 把本地库的内容推送到远程，使用 git push 命令，实际上是把当前分支master推送到远程。执行此命令后会要求输入用户名、密码，验证通过后即开始上传。 

`git push -u origin "master" `
  
好的，你已经成为git高手了，提交代码

1.`git add .` 
 
2.`git commit  -m "吧啦吧啦"`  

3.`git pull`  

4.`git push -u origin "master" `

