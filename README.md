# reader-movie By wx小程序
##  项目介绍及收获
尝试着跟随网上的教程和微信小程序官方开发文档做了个简单的微信小程序，用到了页面路由以及跳转数据绑定，列表数据渲染，模板template的使用，其中阅读tabbar数据用的本地jsdata文件，电影tabbar使用的豆瓣公用restful API，并实现了下拉刷新，音乐播放，等功能。通过这次尝试，学习了小程序的基本API和组件以及深刻了数据绑定实现页面渲染的前端开发方式，对于小程序的生命周期也有了基本的认识。   
## 存在问题
音乐播放页面
## 注意点  
- x.navigateTo({ url: '../posts/post', })是跳到下一子级的页面，有对应的返回按钮，当前页面触发的是onHide（）事件。（限制五级跳转！！！） wx.redirectTo({ url: '../posts/post', })是平行页面跳转（关闭当前页面），无返回按钮，触发的是onUnload（）事件
- 引用本地数据jsData时，必须要用相对路径，绝对路径报错 var postsData = reuqire('../../data/posts-data.js') 
## 效果图请看“效果图片”文件夹
![pictureShow]()
![pictureShow]()
![pictureShow]()
![pictureShow]()
![pictureShow]()
![pictureShow]()