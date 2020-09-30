//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    imgUrls: [
      "../../images/2a146_1726c.jpg",
      "../../images/2a686_bfd7.jpg",
      "../../images/2ac33_12170.jpg",
      "../../images/2a146_1726c.jpg",
      "../../images/2a686_bfd7.jpg",
      "../../images/2ac33_12170.jpg"
    ],
    navImgArr: [
      {
        src: "../../images/2ace8_560e.png",
        title: "订阅鲜花"
      },
      {
        src: "../../images/2ae09_178c8.png",
        title: "非订阅花"
      },
      {
        src: "../../images/2c2dc_12b13.png",
        title: "绿植"
      },
      {
        src: "../../images/2c82d_1017a.png",
        title: "永花生"
      },
      {
        src: "../../images/2d318_10d60.png",
        title: "花瓶"
      },
      {
        src: "../../images/2d135_d66a.png",
        title: "花艺辅助"
      },
      {
        src: "../../images/2f1ab_b66e.png",
        title: "节日礼物"
      },
      {
        src: "../../images/2f2c4_df9e.png",
        title: "美妆"
      }
    ],
    salesTitle: ['闪购专区', 'FLASH SALE'],
    sales: [
      {
        src: "../../images/2ac33_12170.jpg",
        name: "花材预售--康乃馨",
        mess: "新品限量1000份，加购29.9得唯美主义1月",
        price: "RMB 9.9/10枝"
      },
      {
        src: "../../images/2a146_1726c.jpg",
        name: "花材预售--玫瑰",
        mess: "限量开抢仅限500份",
        price: "RMB 19.9/10枝"
      },
      {
        src: "../../images/2a686_bfd7.jpg",
        name: "花材预售--芍药",
        mess: "上新限量抢购仅限1000份",
        price: "RMB 19.9/10枝"
      },
      {
        src: "../../images/2a146_1726c.jpg",
        name: "花瓶闪购--芳湮花瓶",
        mess: "就让芬芳在此湮没",
        price: "RMB 49/只"
      }
    ],
    newProductTitle: ['新品专区', 'NEW ARRIVALS', '../../images/1c07c_4056.jpg'],
    swiperImg: [
      "../../images/2ac33_12170.jpg",
      "../../images/2a146_1726c.jpg"
    ],
    newProduct: [
      {
        src: "../../images/sp01.jpg",
        name: "多肉--蓝苹果",
        price: "RMB 39",
        mess: "",
        smallTitle: "特价"
      },
      {
        src: "../../images/sp04.jpg",
        name: "绿植--卷柏",
        price: "RMB 39",
        mess: "",
        smallTitle: ""
      },
      {
        src: "../../images/sp05.jpg",
        name: "花瓶--弥生花瓶",
        price: "RMB 39",
        mess: "",
        smallTitle: ""
      }
    ],
    timeLimitTitle: ['限时团购', 'GROUP-BUYING'],
    timeLimit: [
      {
        src: "../../images/2f391_7dce.png",
        name: "自然主义",
        price: "RMB 49/月",
        mess: "",
        smallTitle: "包年 送鄢陵花瓶"
      },
      {
        src: "../../images/2f20b_445f.png",
        name: "唯美主义",
        price: "RMB 99/月",
        mess: "",
        smallTitle: "限时包月买1送1"
      },
      {
        src: "../../images/2f2ce_1421c.png",
        name: "浪漫主义",
        price: "RMB 169/月",
        mess: "",
        smallTitle: "限时包月买1送1"
      },
      {
        src: "../../images/2f2c4_df9e.png",
        name: "风格主义",
        price: "RMB 399/月",
        mess: "",
        smallTitle: "限时包月买1送2"
      }
    ],
    sellingTitle: ['热卖专区', 'HOT PRODUITS', '../../images/1c07c_4056.jpg'],
    selling: [
      {
        src: "../../images/2f5eb_856e.png",
        name: "自然主义",
        price: "RMB 49",
        mess: "加99元在送半年",
        smallTitle: "起"
      },
      {
        src: "../../images/2d135_d66a.png",
        name: "唯美主义",
        price: "RMB 99",
        mess: "买6送9再送花瓶",
        smallTitle: "起"
      },
      {
        src: "../../images/31353_10434.png",
        name: "芍药预售",
        price: "RMB 19.9",
        mess: "限量1000份",
        smallTitle: "起"
      },
      {
        src: "../../images/2c2dc_12b13.png",
        name: "康乃馨预售",
        price: "RMB 9.9",
        mess: "新品限时抢",
        smallTitle: ""
      },
      {
        src: "../../images/2d318_10d60.png",
        name: "浪漫主义",
        price: "RMB 169",
        mess: "买6送9再送花瓶",
        smallTitle: "起"
      }
    ],
    subscription: {
      src: '../../images/Screenshot_2019-04-05-17-38-52-655_com.tencent.mm.png',
      title: 'DISCOVER MOVE+',
      list: [
        {
          id: 0,
          img: '../../images/mmexport1554456452388.jpg',
          name: '似梦·零星 Comely',
          passPrice: '',
          price: '￥139/月',
          mess: '家庭职场自选'
        },
        {
          id: 1,
          img: '../../images/mmexport1554456466958.jpg',
          name: '清梦·晨星 Elegant',
          passPrice: '',
          price: '￥199/月',
          mess: '家庭职场自选'
        },
        {
          id: 2,
          img: '../../images/mmexport1554456476799.jpg',
          name: '简梦·灿星 Refined',
          passPrice: '',
          price: '￥299/月',
          mess: '家庭职场自选'
        },
        {
          id: 3,
          img: '../../images/mmexport1554456486743.jpg',
          name: '叙梦·星芒 Noble',
          passPrice: '',
          price: '￥499/月',
          mess: '家庭职场自选'
        },
        {
          id: 4,
          img: '../../images/mmexport1554456496852.jpg',
          name: '自然主义',
          passPrice: '',
          price: '￥49/月',
          mess: '包年送焰灵花瓶'
        },
        {
          id: 5,
          img: '../../images/mmexport1554456505400.jpg',
          name: '唯美主义',
          passPrice: '',
          price: '￥99/月',
          mess: '限时包月买1送1'
        },
        {
          id: 6,
          img: '../../images/mmexport1554456598204.jpg',
          name: '浪漫主义',
          passPrice: '',
          price: '￥169/月',
          mess: '限时包月买1送2'
        },
        {
          id: 7,
          img: '../../images/mmexport1554456624583.jpg',
          name: '风格主义',
          passPrice: '',
          price: '￥399/月',
          mess: '限时包月买1送2'
        }
      ]
    },
    noSubscription: {
      src: '../../images/Screenshot_2019-04-05-17-39-42-894_com.tencent.mm.png',
      title: '',
      list: []
    },
    plants: {
      src: '../../images/Screenshot_2019-04-05-17-40-18-336_com.tencent.mm.png',
      title: 'DISCOVER MOVE+',
      list: [
        {
          id: 0,
          img: '../../images/mmexport1554456496852.jpg',
          name: '阿波线蕨',
          passPrice: '',
          price: '￥39',
          mess: '清新有朝气'
        },
        {
          id: 1,
          img: '../../images/mmexport1554456505400.jpg',
          name: '红粉佳人合果芋',
          passPrice: '',
          price: '￥29',
          mess: '把春天带回家'
        },
        {
          id: 2,
          img: '../../images/mmexport1554456598204.jpg',
          name: '卷柏',
          passPrice: '',
          price: '￥39',
          mess: '像携一缕清风'
        },
        {
          id: 3,
          img: '../../images/mmexport1554456624583.jpg',
          name: '蓝苹果/小米星/白熊/野卡',
          passPrice: '',
          price: '￥39',
          mess: '起 四个组合8折优惠'
        }
      ]
    },
    preserved: {
      src: '../../images/Screenshot_2019-04-05-17-39-42-894_com.tencent.mm.png',
      title: '',
      list: []
    },
    vase: {
      src: '../../images/Screenshot_2019-04-05-17-40-18-336_com.tencent.mm.png',
      title: 'DISCOVER MOVE+',
      list: [
        {
          id: 0,
          img: '../../images/mmexport1554456466958.jpg',
          name: '焰灵',
          passPrice: '',
          price: '￥29',
          mess: '推焰火走出的精灵'
        },
        {
          id: 1,
          img: '../../images/mmexport1554456476799.jpg',
          name: '极光',
          passPrice: '',
          price: '￥35',
          mess: '宛如极光般绚丽多彩'
        },
        {
          id: 2,
          img: '../../images/mmexport1554456486743.jpg',
          name: '弥生',
          passPrice: '￥69',
          price: '￥29',
          mess: '轻奢与大气的代表'
        },
        {
          id: 3,
          img: '../../images/mmexport1554456496852.jpg',
          name: '黑锦',
          passPrice: '￥132',
          price: '￥79',
          mess: '半透渐变的烟灰色'
        },
        {
          id: 4,
          img: '../../images/mmexport1554456505400.jpg',
          name: '清涟',
          passPrice: '￥148',
          price: '￥89',
          mess: '玻璃与大理石的和谐'
        },
        {
          id: 5,
          img: '../../images/mmexport1554456598204.jpg',
          name: '芳湮',
          passPrice: '￥119',
          price: '￥69',
          mess: '简单的享受'
        },
        {
          id: 6,
          img: '../../images/mmexport1554456624583.jpg',
          name: '黑童话',
          passPrice: '￥69',
          price: '￥39',
          mess: '像永远猜不透的谜'
        }
      ]
    },
    floral: {
      src: '../../images/Screenshot_2019-04-05-17-39-42-894_com.tencent.mm.png',
      title: '',
      list: []
    },
    holiday: {
      src: '../../images/Screenshot_2019-04-05-17-39-42-894_com.tencent.mm.png',
      title: '',
      list: []
    },
    makeup: {
      src: '../../images/Screenshot_2019-04-05-17-39-42-894_com.tencent.mm.png',
      title: '',
      list: []
    },
  }
})