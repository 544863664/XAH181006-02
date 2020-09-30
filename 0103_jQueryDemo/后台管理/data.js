//声明数据
var data = [{
		title: '新品',
		bigImg: 'img/big.jpg',
		list: [{
			id: 1,
			imgurl: 'img/1.jpg',
			name: '浅草',
			descript: '中国绿茶与爽脆果实',
			lables: ['新品>', '人气>', '童趣>'],
			price: '￥298/2.0磅',
		}, {
			id: 2,
			imgurl: 'img/2.jpg',
			name: '芒果慕斯',
			descript: '优质芒果的三种姿态',
			lables: ['新品>', '人气>', '童趣>', '人气'],
			price: '￥298/2.0磅',
		}, {
			id: 3,
			imgurl: 'img/3.jpg',
			name: '榴莲飘飘',
			descript: '榴莲狂热者的不二选',
			lables: ['新品>', '人气>', ],
			price: '￥298/2.0磅',
		}, {
			id: 4,
			imgurl: 'img/4.jpg',
			name: '浅草',
			descript: '中国绿茶与爽脆果实',
			lables: ['新品>', '人气>', '童趣>'],
			price: '￥298/2.0磅',
		}, ],
	},
	{
		title: '人气',
		bigImg: 'img/big.jpg',
		list: [{
			id: 5,
			imgurl: 'img/1.jpg',
			name: '浅草',
			descript: '中国绿茶与爽脆果实',
			lables: ['新品>', '人气>', '童趣>'],
			price: '￥298/2.0磅',
		}, {
			id: 6,
			imgurl: 'img/2.jpg',
			name: '芒果慕斯',
			descript: '优质芒果的三种姿态',
			lables: ['新品>', '人气>', '童趣>', '人气'],
			price: '￥298/2.0磅',
		}, {
			id: 7,
			imgurl: 'img/3.jpg',
			name: '榴莲飘飘',
			descript: '榴莲狂热者的不二选',
			lables: ['新品>', '人气>', ],
			price: '￥298/2.0磅',
		}, {
			id: 8,
			imgurl: 'img/4.jpg',
			name: '浅草',
			descript: '中国绿茶与爽脆果实',
			lables: ['新品>', '人气>', '童趣>'],
			price: '￥298/2.0磅',
		}, ],
	}, ];
var str = JSON.stringify(data);
//将字符串存到localstring中
localStorage.goodList = str;