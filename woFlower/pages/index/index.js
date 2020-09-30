// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: '',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navImgArr: '',
    salesTitle: '',
    sales: '',
    newProductTitle: '',
    swiperImg: '',
    newProduct: '',
    timeLimitTitle: '',
    timeLimit: '',
    sellingTitle: '',
    selling: '',
    scrollTop: 0,
    floorstatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp().globalData;
    this.setData({
      imgUrls: app.imgUrls,
      navImgArr: app.navImgArr,
      salesTitle: app.salesTitle,
      sales: app.sales,
      newProductTitle: app.newProductTitle,
      swiperImg: app.swiperImg,
      newProduct: app.newProduct,
      timeLimitTitle: app.timeLimitTitle,
      timeLimit: app.timeLimit,
      sellingTitle: app.sellingTitle,
      selling: app.selling
    })
  },
  goTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
  scroll: function (e) {
    if (e.detail.scrollTop > 500) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  jump ({currentTarget: {dataset}}) {
    wx.navigateTo({
      url: '/pages/list/index?title=' + dataset.title,
      success () {}
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