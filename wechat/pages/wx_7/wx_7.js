// pages/wx_7/wx_7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    sum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const list = getApp().globalData.carList;
    console.log(list);
    this.setData({
      list
    })
  },
  changeStaus ({currentTarget: {dataset: {statu,i}}}) {
    let list = this.data.list;
    list[i].statu = !statu;
    this.setData({
      list
    });
    this.total();
  },
  changeCount ({currentTarget: {dataset: {type, i}}}) {
    let list = this.data.list;
    //跟据type的值判断当前的计算类型
    if(type == 'sub') {
      list[i].count = list[i].count == 1 ? 1 : --list[i].count;
    } else if (type == 'add') {
      list[i].count++;
    }
    this.setData({
      list
    });
    this.total();
  },
  //求被选中的商品的总价
  total () {
    const list = this.data.list;
    let sum = 0;
    for(let item of list) {
      if(item.statu) sum += item.price*item.count;
    }
    this.setData({sum});
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