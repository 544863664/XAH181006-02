// pages/wx_6/wx_6.js
// const tip = request('../../common/js/altert.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentMenu: 0
  },
  changeMenu ({target: {dataset: {i}}}) {
    this.setData({
      currentMenu:i
    });
    let param = '';
    switch (i) {
      case 0:
       param = 'users';
       break;
      case 1:
        param = 'todos';
        break;
      case 2:
        param = 'photos';
        break;
      case 3:
        param = 'albums';
        break;
    }
    tip.alert('加载中...', 'loading', function () {
      //发送HTTP请求拿到当前菜单对应的数据
      wx.request({
        url: 'http://jsonplaceholder.typicode.com/' + param,
        success(res) {
          wx.hideToast();
          console.log(res);
        }
      })
    });
    
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