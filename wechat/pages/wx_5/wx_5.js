// pages/wx_5/wx_5.js

const tip = require('../../common/js/alert.js'); 
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
    // wx.showToast({
    //   title: '网络错误',
    //   icon: 'none',
    //   success () {
    //     //弹框调用出现之后执行
    //   },
    //   // duration: 3000
    // })
    // setTimeout(function () {
    //   wx.hideToast();
    // }, 3000)



    // tip.alert('支付成功', 'success',function () {
    //   console.log('跳转');
    // });

    // wx.showModal({
    //   title: '__提示您',
    //   content: '确定要删除信息',
    //   success (res) {
    //     //模态框显示成功的回调(点击确定或取消按钮抵用)
    //     console.log(res);
    //     if(res.confirm) {
    //       //做删除操作
    //       console.log('调用删除接口，删除数据');
    //     }
    //   }
    // })

    // tip.modal('温馨提示', '删除不可恢复', function () {
    //   console.log('点按钮，做操作');
    // })


    /*
      发送HTTP请求的api
      1.小程序要求，发送的HTTP请求必须是HTTPS协议
      2.如果在当前小程序中调用接口，那么这个接口的域名信息必须
      要在微信公众号平台小程序管理页面进行配置
      配置过程：小程序管理界面>开发>开发设置>域名信息
      */
      wx.request({
        url: 'http://jsonplaceholder.typicode.com/users',
        success (res) {
          console.log(res);
        }
      })
      wx.getUserInfo({
        success (res) {
          console.log(res);
        }
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