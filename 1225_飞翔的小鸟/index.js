/*
 1.点击开始按钮
 （1）小鸟要自由降落（点击wrap小鸟要起飞一段距离，在降落）
 （2）开始创建管道（默认在wrap的最右边，要从最右边移动到最左边）
 （3）小鸟和管道的碰撞检测，碰撞，游戏结束
 （4）小鸟通过一个管道要加分
 2.将当前分数和最高分数展示在结束界面上
 3.点击结束界面按钮的ok按钮，要重新开始游戏（初始化所有数据）
 * */
//获取元素
var wrap = document.querySelector('.wrap'); //
var bird = document.querySelector('.bird'); //小鸟
var pipeWrap = document.querySelector('.pipeWrap'); //管道
var scoreWrap = document.querySelector('.scoreWrap'); //分数
var nowScore = document.querySelector('.nowScore'); //当前分数
var bestScore = document.querySelector('.bestScore'); //最高分
var btns = document.getElementsByClassName('btns')[0]; //按钮
var startPage = document.querySelector('.startPage'); //开始界面
var overPage = document.querySelector('.overPage'); //结束界面
var overPageOK = document.getElementsByClassName('overPage')[0];
var gameMusic = document.getElementById('gameMusic'); //游戏背景音乐
var overMusic = document.getElementById('overMusic'); //失败背景音乐

var startBtn = btns.firstElementChild; //获取btns下的第一个元素子节点img
var overPageOk = overPageOK.children[2].firstElementChild;
var birdDownTimer; //小鸟降落的计时器
var birdUpTimer; //小鸟起飞的计时器
var createPipeTimer; //创建管道计时器
var pipeMoveTimer; //所有管道移动的计时器
var pipeArr = []; //承接页面中存在的所有管道

var score = 0;
var MaxScore = 0;

//随机数函数
function rn(max, min) {
	return Math.round(Math.random() * (max - min)) + min;
}

//小鸟降落
function birdDown() {
	birdDownTimer = setInterval(function() {
		//小鸟的offsettop累加
		bird.style.top = bird.offsetTop + 1 + 'px';
		if(bird.offsetTop >= 397) {
			clearInterval(birdDownTimer);
		}
	}, 10)
}

//点击一次wrap，小鸟起飞一次
function birdUp() {
	//清除掉小鸟降落的计时器
	clearInterval(birdDownTimer);
	//清除上一次小鸟起飞的计时器
	clearInterval(birdUpTimer);
	//点击的瞬间获取当前的top值
	var nowTop = bird.offsetTop;
	//计算这次点击应该到达的top值
	var pointTop = nowTop - 30;
	//用计时器控制让top值减到pointTop
	birdUpTimer = setInterval(function() {
		bird.style.top = bird.offsetTop - 1 + 'px';
		//当小鸟到达目标位置时，小鸟要继续降落
		if(bird.offsetTop == pointTop || bird.offsetTop <= 0) {
			clearInterval(birdUpTimer);
			//到达目标top位置时，要继续降落
			birdDown();
		}
	}, 10)
}

//创建一个管道
function createOnePipe() {
	//创建pipe
	var pipe = document.createElement('div');
	//添加类名(匹配提前预设好的样式)
	pipe.className = 'pipe';
	//生成pipe的上下两部分管道
	var h = rn(80, 223);
	var pipeUpper = document.createElement('div');
	pipeUpper.className = 'pipeUpper';
	pipeUpper.style.height = h + 'px';
	pipeUpper.innerHTML = '<div class="pipeUpperTop"></div>';
	var pipeLower = document.createElement('div');
	pipeLower.className = 'pipeLower';
	pipeLower.style.height = 303 - h + 'px';
	pipeLower.innerHTML = '<div class="pipeLowerTop"></div>';
	//将上下的两部分添加到pipe中
	pipe.appendChild(pipeUpper);
	pipe.appendChild(pipeLower);
	//将这个pipe添加到页面中和js承接数组中
	pipeWrap.appendChild(pipe);
	pipeArr.push(pipe);
}

//分数转换
function scoreShow() {
	//每次创建一个新的分数时，要将上一次的分数清空（清空图片）
	scoreWrap.innerHTML = '';
	var scoreArr = String(score).split('');
	//循环数组，创建对应的数字的图片，一次添加到scoreWrap中
	for(var i in scoreArr) {
		var newImg = document.createElement('img');
		newImg.src = 'img/' + scoreArr[i] + '.jpg';
		scoreWrap.appendChild(newImg);
	}
}

//碰撞检测
function hitJudeg(ele) {
	var tc = bird.offsetTop + bird.offsetHeight >= ele.offsetTop;
	var rc = bird.offsetLeft <= ele.parentNode.offsetLeft + ele.offsetWidth;
	var bc = bird.offsetTop <= ele.offsetTop + ele.offsetHeight;
	var lc = bird.offsetLeft + bird.offsetWidth >= ele.parentNode.offsetLeft
	if(tc && rc && bc && lc || bird.offsetTop >= 397) {
		return true;
	} else {
		return false;
	}
}

//游戏运行
function gameRun() {
	birdDown();
	//创建管道
	createPipeTimer = setInterval(createOnePipe, 2000);
	//管道移动
	pipeMoveTimer = setInterval(function() {
		//循环pipeArr
		for(var i in pipeArr) {
			var nowPipe = pipeArr[i];
			nowPipe.style.left = nowPipe.offsetLeft - 1 + 'px';
			var upperRes = hitJudeg(nowPipe.children[0]);
			var lowerRes = hitJudeg(nowPipe.children[1]);
			if(upperRes || lowerRes) {
				//游戏结束
				gameMusic.pause(); //停止背景音乐
				overMusic.play(); //播放失败背景音乐
				//清除管道移动的计时器
				clearInterval(pipeMoveTimer);
				//清除管道创建计时器
				clearInterval(createPipeTimer);
				//清除wrap的点击事件
				wrap.onclick = null;
				overPage.style.display = 'block';
				nowScore.innerHTML = score;
				if(MaxScore < score) {
					MaxScore = score;
					localStorage.setItem('Score', MaxScore);
					bestScore.innerHTML = MaxScore;
				} else if(localStorage.Score > score) {
					localStorage.setItem('Score', localStorage.Score);
					bestScore.innerHTML = localStorage.Score;
				}
			}
			/* 如果小鸟和管道碰撞，那么管道就会停止移动，反之，小鸟始终碰到
			当前的管道，那么意味着，这个管道会移动到小鸟左侧，也就是管道
			left值为-22的位置，此时应该加分*/
			if(nowPipe.offsetLeft == -22) {
				score++;
				//将分数展示在游戏界面中
				scoreShow();
			}
			//当管道完全移出游戏界面，将其从页面中清除
			if(nowPipe.offsetLeft <= -62) {
				nowPipe.remove();
				pipeArr.splice(i, 1);
				i--;
			}
		}
	}, 5)
	wrap.onclick = birdUp;
}

//开始按钮
startBtn.onclick = function() {
	gameRun();
	startPage.style.display = 'none';
	bird.style.display = 'block';
	scoreWrap.style.display = 'block';
	gameMusic.play(); //添加游戏背景音乐
}

//OK按钮
overPageOk.onclick = function() {
	//location.reload();  //刷新当前页面
	overPage.style.display = 'none';
	bird.style.display = 'none';
	scoreWrap.style.display = 'none';
	bird.style.top = 200 + 'px';
	score = 0;
	pipeWrap.innerHTML = '';
	clearInterval(pipeMoveTimer);
	clearInterval(createPipeTimer);
	clearInterval(birdDownTimer);
	startPage.style.display = 'block';
	scoreWrap.innerHTML = '<img src="img/0.jpg"/>';
}