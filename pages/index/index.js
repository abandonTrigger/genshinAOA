// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      indexlist:[
        {
        versionNumber:'v.1.0.0',
        textEmail:'genshinaoa@163.com',
        textCharge:'https://space.bilibili.com/57748344',
        textData:'https://wiki.biligame.com/ys',
        updateTime:'2022年02月10日10:30:13',
        navAD:"https://webstatic.mihoyo.com/upload/static-resource/2022/02/07/c94065dbae7417928f7c28e20080d13d_8373427145217674191.jpg",
        bottomAD:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F20807453-0ba3617ea86f73f7.jpg&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646932978&t=0e8aabca2fd5e330a8a23ef32ae6ba9a",
      }
    ],  
    },
    // 点击复制文本
    copyText: function (e) {
        console.log(e)
        wx.setClipboardData({
          data: e.currentTarget.dataset.text,
          success: function (res) {
            wx.getClipboardData({
              success: function (res) {
                wx.showToast({
                  title: '复制成功'
                })
              }
            })
          }
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})