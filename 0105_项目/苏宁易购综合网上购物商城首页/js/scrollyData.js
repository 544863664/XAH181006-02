var data = [{
	wzdh: [{
		dt: ['特色购物', '主题频道', '生活助手', '会员服务', '更多热点', ],
	}, {
		dd: [
			['苏宁互联', '苏宁V购', '苏宁卡', '海外购', '政企采购', '大聚惠', '0元试用', '视频购物', '办公直通车', '闪拍', '预售', '新发现', ],
			['电器城', '苏宁超市', '手机', '运动馆', '图书', '红孩子母婴', '美妆个护', '电脑', '服装城', '智能生活', ],
			['零钱包', '手机充值', '火车票', '转账还款', '约服务', '水电煤', '保险', '机票', '酒店团购', '门店查询', ],
			['会员联盟', '苏宁社区', '延长保修', '免费书城', '易付宝', '苏宁理财', '苏宁金融', ],
			['苏宁满座网', 'PPTV', '客户端', '商家入驻', '苏宁云盘', '苏宁众包', '苏宁联盟', '用户体验', '应用商店', '公益频道', '苏宁云', ],
		],
	}, ],
	sjrz: ['合作招商', '服务市场', '金融中心', '培训中心', '易通天下', '规则中心', '规则众议院', ],
	wddd: ['待支付', '待收货', '待评价', '修改订单', ],
	wdyg: ['我的消息', '我的金融', '我的收藏', '我的优惠券', '打卡赚云钻', '会员联盟', ],
	fwzx: ['帮助中心', '查找门店', '退换货', '约服务', '投诉', '建议反馈', ],
}, ]
var str = JSON.stringify(data);
localStorage.SNscrollyData = str;