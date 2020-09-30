/*
 1.布局
 	wrap
 		开始界面，结束界面，游戏运行，所有狼的容器
 2.倒计时累减
 3.创建狼
 	（1）确定类型
 	（2）初始图片的src  x0/h0
 	（3）位置  （这个位置没有狼）
 	（4）切换图片
 		未被击打：  0 ~ 5 ~ 0  删除
 		被击打：无论其当前是什么顺序，直接切换到5， 5~9 ,删除
 4.被击打时，要判断狼的类型， x， -10  h，+10
 5.时间到，游戏结束，出现结束界面
 6.点击结束页面的重新开始按钮，重新开始游戏
 * */

//获取元素
var wrap = document.querySelector('.wrap');
var timeWrap = document.querySelector('.time-wrap'); //倒计时
var wolves = document.querySelector('.wolves'); //所有狼的父级div
var initPage = document.querySelector('.initPage'); //开始按钮
var scoreWrap = document.querySelector('.score'); //分数容器

//变量
//所有的数组    
//	posArr[index][0]:left
//	posArr[index][1]:right
var posArr = [
	['98px', '115px'],
	['17px', '160px'],
	['15px', '220px'],
	['30px', '293px'],
	['122px', '273px'],
	['207px', '295px'],
	['200px', '211px'],
	['187px', '141px'],
	['100px', '192px']
];
var createManyWolfTimer;
var score = 0;

//随机数
function rn(max, min) {
	return Math.round(Math.random() * (max - min)) + min;
}

//倒计时
function timeSubtract() {
	//倒计时条的宽度
	var timeNum = 180;
	var timer = setInterval(function() {
		//倒计时累减

		timeWrap.style.width = --timeNum + 'px';
		//当宽度减到0 时，游戏结束，计时器停止调用
		if(timeNum == 0) {
			clearInterval(timer);

			//游戏结束要处理的所有事项
			clearInterval(createManyWolfTimer);
			//创建弹窗
			var newEle = document.createElement('div');
			wrap.appendChild(newEle);
			newEle.className = 'res';
			newEle.innerHTML = '您的得分：' + score + '分！';
			setTimeout(function() {
				newEle.remove();
				initPage.style.display = 'block';
				//得分清零
				score = 0;
				scoreWrap.innerHTML = 0;
				timeWrap.style.width = '180px';
			},5000)
		}
	}, 100)
}

//生成一个位置
function getPosition() {
	var num = rn(0, 8);
	//获取当前页面中存在的所有狼
	var allWolf = document.querySelectorAll('.wolves img');

	var bol = true;
	//循环所有狼
	while(bol) {
		var num = rn(0, 8);
		for(var i = 0; i < allWolf.length; i++) {
			//拿到当前循环到的狼的left值，和num所对应的posArr中的left作比较，如果相等就重新生成num
			if(allWolf[i].style.left == posArr[num][0]) {
				break;
			}

		}
		//num可用：for循环结束，没有被break
		if(i == allWolf.length) {
			bol = false;
		}

	}
	return num;
}

//创建一只狼
function createWolf() {
	//创建
	var wolf = document.createElement('img');
	//确定狼的类型（生成灰太狼的频率远远高于生成小灰灰的）
	wolf.type = rn(100, 1) < 80 ? 'h' : 'x';
	//狼当前展示的图片的顺序（0~9）
	wolf.index = 0;
	//设置img的src
	wolf.src = 'imgs/' + wolf.type + wolf.index + '.png';
	//将其添加到付级标签wolves中
	wolves.appendChild(wolf);
	//确定其位置
	var num = getPosition();
	wolf.style.left = posArr[num][0];
	wolf.style.top = posArr[num][1];
	return wolf;
}

//生成一只狼，且让其有动画效果
function wolfMove() {
	//先生成一只狼
	var wolf = createWolf();
	//运动
	wolf.appearTimer = setInterval(function() {
		wolf.index++;
		wolf.src = 'imgs/' + wolf.type + wolf.index + '.png';
		if(wolf.index == 5) {
			//清除狼出现的计时器
			clearInterval(wolf.appearTimer);
			//创建让狼消失的计时器
			wolf.disappearTimer = setInterval(function() {
				wolf.index--;
				wolf.src = 'imgs/' + wolf.type + wolf.index + '.png';
				//当index减到0时，清除消失的计时器
				if(wolf.index == 0) {
					clearInterval(wolf.disappearTimer);
					//将这只狼从页面中移除
					wolf.remove();
				}
			}, 100)
		}
	}, 100)
	//为当前创建的这只狼绑定点击事件
	wolf.onclick = function() {
		//改变分数（判断当前的狼的类型）
		if(wolf.type == 'h') {
			scoreWrap.innerHTML = score += 10;
		} else {
			scoreWrap.innerHTML = score -= 10;
		}

		//无论当前展示的是狼的什么顺序，都直接切换到第5个
		wolf.index = 5;
		//清除当前控制切换这只狼index的计时器
		clearInterval(wolf.appearTimer);
		clearInterval(wolf.disappearTimer);
		//清除掉之前的hitTimer
		clearInterval(wolf.hitTimer);
		//让狼展示被击打状态
		wolf.hitTimer = setInterval(function() {
			wolf.index++;
			wolf.src = 'imgs/' + wolf.type + wolf.index + '.png';
			//展示到最后一个状态时，清除计时器
			if(wolf.index == 9) {
				clearInterval(wolf.hitTimer);
				//将wolf从页面中移除
				wolf.remove();
			}
		}, 100)
	}
}

function createManyWolf() {
	createManyWolfTimer = setInterval(wolfMove, 700);
}

//开始按钮
initPage.onclick = function() {
	timeSubtract();
	createManyWolf();
	initPage.style.display = 'none';
}
