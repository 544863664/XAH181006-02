var floorData = localStorage.SNFloorData;
var dataArr = JSON.parse(floorData);
var goodsUpArr = dataArr[10].mainCol[0].sellGoodsUp;
console.log(goodsUpArr);
function showList() {
	for (var i = 0; i < goodsUpArr.length; i++) {
		var newTd = '<tr><td><img src="'+ goodsUpArr[i].face +'" /></td><td><div>'+ goodsUpArr[i].name +'</div></td><td>￥'+ goodsUpArr[i].price +'.00</td><td>￥0.00</td><td>黑色，浅咖啡，浅绿，深蓝</td><td>S,M,L,XL,2XL,3XL</td><td></td><td><button class="btn btn-primary" data-toggle="modal" data-target="#eitherModal" onclick="eitherBtnClick(this)" id="'+ goodsUpArr[i].id +'">编辑</button><button class="btn btn-danger" id="'+ goodsUpArr[i].id +'" onclick="delGood(this)">删除</button></td></tr>';
		$('.layui-table').append(newTd);
	}
}
showList();
//获取商品信息
function eitherBtnClick(btn) {
	var trChild = $(btn).parent().parent().children(); //找出的父级的父级下的所有tr
	$('.eitherImg').val(trChild.eq(0).children('img').attr('src')); //获取商品图片属性
	$('.eitherName').val(trChild.eq(1).children('div').text()); //获取商品名称
	$('.eitherPrice').val(trChild.eq(2).text()); //获取商品价格
	$('.eitherPreferential').val(trChild.eq(3).text()); //获取商品优惠
	$('.eitherColor').val(trChild.eq(4).text()); //获取商品颜色
	$('.eitherSize').val(trChild.eq(5).text()); //获取商品尺码
	$('.eitherNote').val(trChild.eq(6).text()); //获取商品备注
}
//添加商品
$('.addGoodBtn').click(function () {
	var newObj = {
		id: goodsUpArr.length + 1,
		face: $('.addImg').val(),
		name: $('.addName').val(),
		price: $('.addPrice').val()
	};
	var newId = goodsUpArr.length + 1;
	goodsUpArr.push(newObj);
	//显示到页面
	var _newTd = '<tr><td><img src="'+ $('.addImg').val() +'" /></td><td><div>'+ $('.addName').val() +'</div></td><td>￥'+ $('.addPrice').val() +'.00</td><td>￥0.00</td><td>黑色，浅咖啡，浅绿，深蓝</td><td>S,M,L,XL,2XL,3XL</td><td></td><td><button class="btn btn-primary" data-toggle="modal" data-target="#eitherModal" onclick="eitherBtnClick(this)" id="'+ newId +'">编辑</button><button class="btn btn-danger" id="'+ newId +'" onclick="delGood(this)">删除</button></td></tr>';
	$('.layui-table').append(_newTd);
	//清除掉添加框里所有的内容
	$('#addGood .form-control').val('');
});
//删除按钮
function delGood(b) {
	var delId = $(b).attr('id');
	for(var i = 0; i < goodsUpArr.length; i++) {
		if(goodsUpArr[i].id == delId) {
			//从数组中删除这个数据
			goodsUpArr.splice(i, 1);
			//将新的数据存入localStorage中
			//
			//删除当前数据页面中的节点
			$(b).parent().parent().remove();
			break;
		}
	}
}























//