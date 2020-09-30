// pages/wx_1/wx_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //当前页面载入成功之后调用
    const app = getApp();
    console.log(app);
    //调用APP实例上封装的函数
    app.any();
    //调用globalData中的数据
    console.log(getApp().globalData.num);
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
    //当将当前页面拉动到onReachBottomDistance规定的位置时，自动触发（用作懒加载处理）
    console.log('懒加载');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})