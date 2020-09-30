//app.js
App({
  onLaunch: function () {
    console.log('自动调用');
  },
  onShow () {
    //小程序初次展示或者切到后台再次展示时自动调用
    console.log(2);
  },
  onHide () {
    //当小程序切到后台时自动调用（保存一些重要数据，或者做一些突发情况的逻辑处理）
    console.log(3);
  },
  //可以将当前小程序当中多个页面可能使用的函数，封装在这里
  any () {
    console.log('any');
  },
  //我们会将当前小程序中的全局的数据，声明在globalData中，声明之后就可以在任意页面，使用getApp（）函数拿到app实例，
  globalData: {
    userInfo: null,
    num: 100,
    //购物车中所有的商品列表
    carList: [
      {
        id: 1,
        name: '蛋糕',
        price: 190,
        count: 1
      },
      {
        id: 2,
        name: '鲜花',
        price: 140,
        count: 1
      },
      {
        id: 3,
        name: '酿皮',
        price: 690,
        count: 1
      }
    ]
  }
})