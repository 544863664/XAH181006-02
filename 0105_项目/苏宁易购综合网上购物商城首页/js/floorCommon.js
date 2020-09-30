//取数据
var floorData = localStorage.SNFloorData;
var dataArr = JSON.parse(floorData);
//封装创建商品列表
function la(e, n) {
	//展示框右上角菜单
	for(l in e.links) {
		var newLinksA = '<a href="####">' + e.links[l] + '</a>';
		n.append(newLinksA);
	}
}

function numF(ele, num) {

	var flDown = '<div class="floor_down"><div class="side"><a class="big" href="####" title=" "><img src="' + ele.bigImg[0] + '" alt=""></a><div class="entrances entrances4"></div><!-- 品牌列表 --><ul class="brands"></ul></div><div class="main-col J-domLazy hotActivity" style="display: block;"><div class="col1"><a href="####" title=""><img class="lazy-loading" src="' + ele.bigImg[1] + '" alt="" /></a></div><ul class="col2"></ul><ul class="col3"></ul></div><div class="main-col J-domLazy sellGoods"><ul class="prd-list sellGoodsUp"></ul><ul class="prd-list sellGoodsDown"></ul></div></div>';
	//将创建的数据添加到floor中
	num.append(flDown);
	//左边展框中的标题
	for(j in ele.Title) {
		var newTitle = '<a href="####"><span class="bg"></span><i class="ng-iconfont">' + ele.Title[j].log + '</i><em>' + ele.Title[j].title + '</em></a>';
		$('.floor_down .entrances').append(newTitle);
	}
	//左边展框的品牌
	for(var i = 0; i < ele.Img.length; i++) {
		var n = i + 1;
		var newItem = '<li class="item' + n + '"><a href="####"><img src="' + ele.Img[i].sImg + '" alt=""></a></li>';
		$('.brands').append(newItem);
	}
	//中间展框
	for(q in ele.col2) {
		var newCol2 = '<li><a href="####" d-title=""><img class="lazy-loading" src="' + ele.col2[q].sImg + '" /></a></li>';
		$('.col2').append(newCol2);
	}
	//右边展框
	for(w in ele.col3) {
		var newCol3 = '<li><a href="####" d-title=""><img class="lazy-loading" src="' + ele.col3[w].sImg + '" /></a></li>';
		$('.col3').append(newCol3);
	}

	//热卖商品
	var goodsUpArr = dataArr[10].mainCol[0].sellGoodsUp;
	var similar = dataArr[10].mainCol[2];
	//上
	for(var u = 0; u < goodsUpArr.length; u++) {
		var newGoodUp = '<li><p class="face"><a href="detail.html?src_num='+ u +'" title=" "><img src="' + goodsUpArr[u].face + '" alt="" /></a></p><p class="name"><a href="####">' + goodsUpArr[u].name + '</a></p><p class="price"><span class="priceLeft">￥' + goodsUpArr[u].price + '</span><span class="similar">' + similar.similar + '</span></p></li>';
		$('.sellGoodsUp').append(newGoodUp);
	}
	//下
	var goodsDownArr = dataArr[10].mainCol[1].sellGoodsDown;
	for(var i = 0; i < goodsDownArr.length; i++) {
		var s = 5 + i;
		var newGoodDown = '<li><p class="face"><a href="detail.html?src_num='+ s +'" title=" "><img src="' + goodsDownArr[i].face + '" alt="" /></a></p><p class="name"><a href="####">' + goodsDownArr[i].name + '</a></p><p class="price"><span class="priceLeft">￥' + goodsDownArr[i].price + '</span><span class="similar">' + similar.similar + '</span></p></li>';
		$('.sellGoodsDown').append(newGoodDown);
	}
}
//1楼
$(function() {
	la(dataArr[0].oneF[0], $('#one .floor_top .links'));
	numF(dataArr[0].oneF[1], $('#one'));
})
//2楼
$(function() {
	la(dataArr[1].twoF[0], $('#two .floor_top .links'));
	numF(dataArr[1].twoF[1], $('#two'));
})
//3楼
$(function() {
	la(dataArr[2].threeF[0], $('.three .floor_top .links'));
	numF(dataArr[2].threeF[1], $('#three'));
})
//4楼
$(function() {
	la(dataArr[3].fourF[0], $('.four .floor_top .links'));
	numF(dataArr[3].fourF[1], $('#four'));
})
//5楼
$(function() {
	la(dataArr[4].fiveF[0], $('.five .floor_top .links'));
	numF(dataArr[4].fiveF[1], $('#five'));
})
//6楼
$(function() {
	la(dataArr[5].sixF[0], $('.six .floor_top .links'));
	numF(dataArr[5].sixF[1], $('#six'));
})
//7楼
$(function() {
	la(dataArr[6].sevenF[0], $('.seven .floor_top .links'));
	numF(dataArr[6].sevenF[1], $('#seven'));
})
//8楼
$(function() {
	la(dataArr[7].eightF[0], $('.eight .floor_top .links'));
	numF(dataArr[7].eightF[1], $('#eight'));
})
//9楼
$(function() {
	la(dataArr[8].nineF[0], $('.nine .floor_top .links'));
	numF(dataArr[8].nineF[1], $('#nine'));
})
//10楼
$(function() {
	la(dataArr[9].tenF[0], $('.ten .floor_top .links'));
	numF(dataArr[9].tenF[1], $('#ten'));
	$('#ten .floor_down .hotActivity .col3').remove();
	var col4Arr = dataArr[9].tenF[1].col4;
	var col4Ol = '<div class="col4"><div class="title"><span class="line"></span><b>畅销排行榜</b></div><ol class="list"></ol></div>';
	$('#ten .floor_down .hotActivity').append(col4Ol);
	for(var i = 0; i < col4Arr.length; i++) {
		var n = i + 1;
		var newOlli = '<li class="item' + n + '"><i class="num"></i><span class="face"><a href="####"  title=""><img src="' + col4Arr[i].sImg + '" alt=""/></a></span><div class="info"><p class="name"><a href="####">' + col4Arr[i].name + '</a></p><p class="price"><i>¥</i><span><b>' + col4Arr[i].price + '</b>.00</span></p></div></li>';
		$('#ten .floor_down .col4 .list').append(newOlli);
	}
})

//

//