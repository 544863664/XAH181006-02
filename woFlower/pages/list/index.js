// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp().globalData;
    switch (options.title) {
      case '订阅鲜花':
        this.setData( {list: app.subscription });
        break;
      case '非订阅花':
        this.setData({ list: app.noSubscription });
        break;
      case '绿植':
        this.setData({ list: app.plants });
        break;
      case '永花生':
        this.setData({ list: app.preserved });
        break;
      case '花瓶':
        this.setData({ list: app.vase });
        break;
      case '花艺辅助':
        this.setData({ list: app.floral });
        break;
      case '节日礼物':
        this.setData({ list: app.holiday });
        break;
      case '美妆':
        this.setData({ list: app.makeup });
        break;
    }
  },
  toDetail ({currentTarget: {dataset}}) {
    wx:wx.navigateTo({
      url: '/pages/detail/index?id=' + dataset.id,
    })
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