study url:[http://www.cnblogs.com/zhongweiv/p/nodejs_express_formidable.html](http://www.cnblogs.com/zhongweiv/p/nodejs_express_formidable.html)

## 创建一个新项目

	express -e sampleUpload



**cd 项目 执行**

	cd sampleUpload
	npm install


运行项目 
	
	node app.js
	supervisor app.js


## 页面展示 

![](https://github.com/zxx1988328/nodejs-sampleUpload/blob/master/img/web_index.png)

成功页面

![](https://github.com/zxx1988328/nodejs-sampleUpload/blob/master/img/upload_success.png)


　

	　　1.怎么没看到上传？
	
	　　注意：form.parse  再看看formidable的解释 
	
	Automatically writing file uploads to disk
	
	　　2.为什么需要fs.renameSync
	
	　　原因和上一个问题有关，它会自动被上传到用户的临时目录（这个可以把files.fulAvatar.path输出来看一下便知） http://nodejs.org/docs/latest/api/fs.html#fs_fs_renamesync_oldpath_newpath
	
	　　3.可不可以看到上传进度
	
	　　可以，https://github.com/felixge/node-formidable#events （仔细看看events，可能有你要用的其它部分）
	
	　　但是只是在控制台输出，想在前端去显示进度条是不行的（没有去研究，想想别的办法应该也可以）
	
	　　4.文件名想命名UUID不重复，在nodejs中怎么办？
	
	　　可以使用node-uuid，调用简单  https://github.com/broofa/node-uuid