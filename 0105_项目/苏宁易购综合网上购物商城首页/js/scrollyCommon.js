var scrollyData = localStorage.SNscrollyData;
var dataArr = JSON.parse(scrollyData);
var dtArr = dataArr[0].wzdh[0].dt;
var ddArr = dataArr[0].wzdh[1].dd;

function scrollyDd(e, ele) {
	ele.append('<dt>' + dtArr[e] + '</dt>');
	for(var i = 0; i < ddArr[e].length; i++) {
		ele.append('<dd>' + ddArr[e][i] + '</dd>');
	}
}
$(function() {
	scrollyDd(0, $('.wangzhandaohang1'));
})
$(function() {
	scrollyDd(1, $('.wangzhandaohang2'));
})
$(function() {
	scrollyDd(2, $('.wangzhandaohang3'));
})
$(function() {
	scrollyDd(3, $('.wangzhandaohang4'));
})
$(function() {
	scrollyDd(4, $('.wangzhandaohang5'));
})

var sjrzArr = dataArr[0].sjrz;
function scroDd(e, ele) {
	for(var i = 0; i < e.length; i++) {
		ele.append('<dd>' + e[i] + '</dd>');
	}
}
$(function() {
	scroDd(sjrzArr, $('.shangjiaruzhu dl'));
})

var wdddArr = dataArr[0].wddd;
var wdygArr = dataArr[0].wdyg;
var fwzxArr = dataArr[0].fwzx;
function scroP(e, ele) {
	for(var i = 0; i < e.length; i++) {
		ele.append('<p>' + sjrzArr[i] + '</p>');
	}
}
$(function () {
	scroP(wdddArr, $('.wodedingdan'));
})
$(function () {
	scroP(wdygArr, $('.wodeyigou'));
})
$(function () {
	scroP(fwzxArr, $('.fuwuzhongxin'));
	$('.fuwuzhongxin').append('<p>在线咨询<i class="fa fa-drupal"></i></p>');
})















//