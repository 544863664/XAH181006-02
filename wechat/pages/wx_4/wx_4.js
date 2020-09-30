// pages/wx_4/wx_4.js

//require函数接受要导入的js文件的路径，返回这个js文件中导出的数据
const car = require('../../common/js/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: 'tom',
        tel: 1231123,
        email: '23423'
      },{
        name: 'tetyr',
        tel: 1231123,
        email: '23423'
      },{
        name: 'urew',
        tel: 1231123,
        email: '23423'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    car.fn1();
    car.fn2();
    car.fn3();
  },
  templateFn ({currentTarget: {dataset}}) {
    console.log(dataset);
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