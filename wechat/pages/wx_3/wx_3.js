// pages/wx_3/wx_3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 100
  },
  jump () {
    //打开新的页面，旧的页面被存放在页面栈
    wx.navigateTo({
      url: '/pages/wx_2/wx_2?id=100&key=cake',
      success () {
        //页面切换成功的回调
        //页面栈里面的所有的页面
        // const pages = getCurrentPages();
        // console.log(pages);
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