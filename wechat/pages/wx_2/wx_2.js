// pages/wx_2/wx_2.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    num: 200,
    list: [
      {
        id: 1,
        name: '蛋糕'
      },{
        id: 2,
        name: '鲜花'
      },{
        id: 3,
        name: '项链'
      }
    ]
  },
  fn1 () {
    console.log(1);
  },
  addToCar (e) {
    //如果当前函数绑定给了某个事件，那么这个函数会自动接收一个形参，参数及昂前触发的这个事件的事件对象
    /*
      事件对象：
        type： 事件类型
        timeStamp：页面初始化成功时候到触发这个事件的事件
        target：事件触发元素的对象
        current：事件绑定的对象
    */ 
    const id = e.currentTarget.dataset.id;
    const name = e.currentTarget.dataset.name;
    console.log(id,name);
  },
  fn2 ({currentTarget: {dataset}}) {
    /*
      解构事件对象，从其中拿到currentTarget这个键对应的值，赋值给
      冒号后面的数据，然后冒号后面的{}有解构了currentTarget这个对
      象，从其中拿到了dataset这个键对应的值，赋值给了data变量。
      它是e.currentTarget.dataset;
    */
    console.log(dataset);
  },
  fn3({ currentTarget: { dataset } }) {
    console.log(dataset.i)
  },
  fn4 () {
    console.log('测试成功');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接受其他页面切换当前页面时，向当前页面传递的参数列表
    console.log(options);
    //页面栈里面的所有的页面
    const pages = getCurrentPages();
    console.log(pages);
    const _this = this;
    //将当前页面中的数据num，赋值给上一个页面中的num
    pages[0].setData({
      num: _this.data.num
    })
  },
  /*
    页面与页面之间数据的交互方式：
      1.本地存储
      2.app.js中声明globalData
      3.利用页面栈做交互
        （1）getCurrentPages函数可以获取到当前这个操作形成的页面栈。
        （2）该函数返回的是一个数组，数组中有如干对象，每个对象代表页面栈中的每个页面的上下文环境
        （3）可以从这个数组中拿到任意页面的上下文环境获取其数据，或调用其函数。
      4.url传参，options接受参数
      小程序的击中路由方式及区别：
      1.wx.navifateTo()
      跳转到新的页面，且当前页面进入到页面栈里
      2.wx.switchTab()
      跳转到tabBar中配置的页面
      3.wx.redirectTo()
      跳转到新的页面，上一个页面从页面栈移除，当前页面进入页面栈
      4.wx.navigateBack()
      返回到当前页面在页面栈中的上一个页面
      5.wx.reLaunch()
      重新载入某个页面
  */


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