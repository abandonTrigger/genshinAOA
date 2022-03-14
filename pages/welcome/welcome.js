// welcome.js
// 获取欢迎页实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    welcomelist:[
      {
        motto: '向着星辰与深渊！欢迎来到冒险者协会',
        images:{},
        imageUrl:"https://i0.hdslb.com/bfs/article/5811c941b2c0c3132d0f0c79217fc676acf0b8f9.jpg",
      }
    ], 
    timer: '',// 定时器名字
    countDownNum: '5'// 倒计时初始值 
  },
  imageLoad: function(e) {
    var $width=e.detail.width,    //获取图片真实宽度
        $height=e.detail.height,
        ratio=$width/$height;    //图片的真实宽高比例
    var viewWidth=600,           //设置图片显示宽度
        viewHeight=600/ratio;    //计算的高度值
     var image=this.data.images; 
     //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
     image[e.target.dataset.index]={
        width:viewWidth,
        height:viewHeight
     }
     this.setData({
      images:image
     })
  },
  //路由跳转，从欢迎页进入首页
  goToIndex: function(param){
    wx.navigateTo({
      url: '/pages/index/index',
      })
  },
  //倒计时
  onShow: function(){
    //用户进入小程序欢迎页时调用这个函数
    this.countDown();
  },
  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum;  //获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () {  //这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })
        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (countDownNum == 0) {
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能，因为timer是存在data里面的，所以关掉时候也要再data里取出后再关闭
        //回调
          that.onJumpIndex()
          //关闭定时器之后，可作其他处理codes go here
        }
      }, 1000)
    })
  },
onJumpIndex:function(){
  wx.navigateTo({
    url:'/pages/index/index'
  })
    const that = this
    clearInterval(that.data.timer);
    that.setData({
      countDownNum: 5
    })
  },
})
