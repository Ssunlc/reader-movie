var postsData=require('../../../data/posts-data.js');
Page({
  data:{
    
  },
  onLoad:function(option){
    var postId=option.id;
    var postData=postsData.postList[postId];
    this.setData({
      postData:postData,
      currentPostId:postId
      })
    var postsCollected = wx.getStorageSync('posts_collected');
    if(postsCollected){
      var postCollected = postsCollected[postId];
      this.setData({
        collected:postCollected
      })
    }else{
       var postsCollected={};
       postsCollected[postId]=false;
       wx.setStorageSync('posts_collected', postsCollected)
    }  
  },
  onCollectionTap:function(event){
      var postsCollected=wx.getStorageSync('posts_collected');
      var postCollected=postsCollected[this.data.currentPostId];
      postCollected = !postCollected;
      postsCollected[this.data.currentPostId]=postCollected;
      wx.setStorageSync('posts_collected', postsCollected);
      this.setData({
        collected:postCollected
      })
      wx.showToast({
        title: postCollected?'收藏成功':'取消收藏成功',
        duration:1000,
        icon:"success"
      })
  },
  onShareTap:function(event){
    var itemList = [
      "分享给微信号有",
      "分享到朋友圈",
      "分享到QQ",
      "分享到微博"
    ];
    wx.showActionSheet({
      itemList: itemList,
      itemColor:"#405f80",
      success:function(res){
         wx.showModal({
           title: '分享',
           content: '用户想要分享到'+itemList[res.tapIndex],
         })
      }
    })
  },
  onMusicTap:function(event){
    var isPlayingMusic=this.data.isPlayingMusic;
    var currentPostId=this.data.currentPostId;
    if(isPlayingMusic){
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic:false
      })
    }else{
      wx.playBackgroundAudio({
        dataUrl: postsData.postList[currentPostId].music.url,
        title: postsData.postList[currentPostId].music.title,
        coverImgUrl: postsData.postList[currentPostId].music.coverImg
      });
      this.setData({
        isPlayingMusic: true
      })
    }   
  }  
})