// pages/wx_1_2/wx_1_2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str: 'hello world',
    classN: 'active',
    bol: false,
    num: 10,
    arr: [{
      name: 'tom',
      tel: 12323,
      email: '123@qq.com',
      a: [1,2,3]
    },{
        name: 'grg',
        tel: 134653,
        email: '1345@qq.com',
        a: [4,5,6]
    },{
        name: 'ehesd',
        tel: 176543,
        email: '1565@qq.com',
        a:[7,8,9]
    }],
    num1: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //从globalData()中获取的数据，不可以直接渲染在某个页面中，而要将这个数据设置给当前页面的data，然后才可以渲染
    const n = getApp().globalData.num;
    //要在函数中设置当前data，必须要将当前实例的setData
    this.setData ({
      num1:n
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