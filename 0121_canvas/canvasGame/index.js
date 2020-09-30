/*
* 1.鼠标移动时，我方方块要随着鼠标的移动左右移动
* 2.点击canvas，要创建子弹
* 3.敌方方块要掉落
* 4.碰撞检测
* 5.产生子弹尾随物
* 6.碰撞成功的爆炸物
* */

//获取元素
var mc = document.querySelector('#mc'); //画布
var ctx = mc.getContext('2d'); //画笔

//获取飞机图片
var bulletImg = new Image, planeImg = new Image, enemyPlane = new Image, canvasBg = new Image;
bulletImg.src = 'bullet.png';
planeImg.src = 'plane.png';
enemyPlane.src = 'enemyPlane.png';
canvasBg.src = 'canvasBg.jpg';

//获取游戏背景音乐
var planeM = document.querySelector('#planeM');
var bullet1M = document.querySelector('#bullet1M');
var boomM = document.querySelector('#boomM');
var gameOverM = document.querySelector('#gameOverM');

//获取canvas的宽高
var mcW = mc.width, mcH = mc.height;
var mouseX = mcW / 2; //鼠标在画布上移动时的坐标
//全局变量
var planeSize = 60; //我方飞机的宽高
var bulletSize = 6; //子弹的宽高
var bulletV = 8; //子弹的移动速度
var bulletArr = []; //承接存在于游戏运行中的所有子弹
var boomSize = 6; //爆炸物的初始大小
var boomArr = []; //爆炸物数组
var twinkleSize = 3; //尾随物大小
var twinkleArr = []; // 承接在于游戏中所有的尾随物
var enemyArr = []; //承接存在游戏中的所有的掉落物
var createStartPageTimer; //开始页面创建的计时器
var playFlag = true; //监听游戏是否正在运行
var score = 0, maxScore; //分数，初始值为0，maxScore为最高分
maxScore = localStorage.getItem('flyScore') == undefined ? 0 : localStorage.getItem('flyScore');
var dieNum = 0; //没被击中且移出画布的掉落物的数量，跟据次判断游戏是否结束
var life = 10; //允许步数

//随机数函数
function rn(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}
//生成随机颜色
function rnColorA() {
    return 'rgba('+ rn(30, 255) +','+ rn(30, 255) +','+ rn(30, 255) +','+ .6 +')';
}
function rnColor() {
    return 'rgba('+ rn(30, 255) +','+ rn(30, 255) +','+ rn(30, 255) +')';
}

//绘制游戏开始页面
function drawStartPage() {
    var g1 = ctx.createLinearGradient(400, 0, 800, 100); //创建渐变
    g1.addColorStop(0, rnColor());
    g1.addColorStop(0.1, rnColor());
    g1.addColorStop(0.2, rnColor());
    g1.addColorStop(0.3, rnColor());
    g1.addColorStop(0.4, rnColor());
    g1.addColorStop(0.5, rnColor());
    g1.addColorStop(0.6, rnColor());
    g1.addColorStop(0.7, rnColor());
    var c =rnColor(); //随机颜色
    createStartPageTimer = setInterval(function () {
        ctx.clearRect(0, 0, 1000, 600);
        ctx.beginPath();
        ctx.drawImage(canvasBg, 0, 0, mcW, mcH);
        ctx.font = '60px Myt';
        ctx.textAlign = 'center';
        ctx.baseline = 'middle';
        ctx.fillStyle = c;
        ctx.fillText('飞机大作战', 500, 200);
        ctx.closePath();

        ctx.beginPath();
        ctx.font = '30px Zlg';
        ctx.fillStyle = g1;
        ctx.fillText('点击游戏页面任何位置开始游戏', 500, 270);
        ctx.closePath();

        ctx.beginPath();
        ctx.font = '20px Mdt';
        ctx.fillStyle = c;
        ctx.fillText('掉落砖块超过指定数量时、游戏结束', 500, 320);
        ctx.closePath();
    }, 100)
}
drawStartPage();

/*
* 1.我方方块的移动
*   方块的绘制只能在整体绘制的频率中，鼠标移动只能确定白块的位置。
* */
//封装白飞机
function plane() {
    ctx.beginPath();
    ctx.fillStyle = 'transparent';
    ctx.drawImage(planeImg, mouseX - planeSize / 2, mcH - planeSize - 20, planeSize, planeSize);
    ctx.fillRect(mouseX - planeSize / 2, mcH - planeSize - 20, planeSize, planeSize);
}

//封装子弹类
function Bullet() {
    this.x = mouseX - bulletSize / 2;
    this.y = mcH - planeSize - 20;
    //move函数的调用次数
    this.time = 0;
}
Bullet.prototype.move = function () {
    this.time++;
    this.y -= bulletV;
    //绘子弹
    ctx.beginPath();
    ctx.fillStyle = 'transparent';
    ctx.drawImage(bulletImg, this.x, this.y, bulletSize + 3, bulletSize + 15);
    ctx.fillRect(this.x, this.y, bulletSize + 3, bulletSize + 15);
    //在子弹移动时要绘制尾随物
    var tempX = this.x + bulletSize / 2;
    var tempY = this.y + bulletSize;
    //控制尾随物创建的频率
    if (this.time % 5 == 0) {
        twinkleArr.push(
            new Twinkle(tempX - 1.3, tempY + 5, rnColorA()),
            new Twinkle(tempX + 1.1, tempY + 10, rnColorA()),
            new Twinkle(tempX - 1, tempY + 15, rnColorA()),
            new Twinkle(tempX + 0.6, tempY + 20, rnColorA()),
            new Twinkle(tempX - 0.2, tempY + 25, rnColorA())
        );
    }

    //如果子弹的y值代表其完全移出画布，那么这个子弹在没有必要在绘制，所以将其从bulletArr中移除
    if (this.y <= -bulletSize) {
        //因为子弹的移动的速度是一样的，先移除画布的子弹都是先创建的
        bulletArr.shift();
    }

};
//绘制子弹
function bulletDraw() {
    //游戏运行时可能存在很多子弹，所以将所有子弹都放在bulletArr数组中，然后进行绘制
    for (var i in bulletArr) {
        bulletArr[i].move();
    }
}

//3.掉落物的绘制
//左右范围：dis 左右可弹得距离

//设置掉落物的使用值范围
var minSize = 30, maxSize = 50;
var minV = -2, maxV = 1;
var minDis = 0, maxDis = 60;

function Enemy(x, size, bg, vx, vy, dis) {
    this.size = size;
    this.x = x;
    this.y = -this.size;
    this.bg = bg;
    this.vx = vx;
    this.vy = vy;
    //x方向碰壁反弹的条件
    this.minX = this.x - dis;
    this.maxX = this.x + dis;
}
Enemy.prototype.move = function () {
    //改变位置
    this.x += this.vx;
    this.y += this.vy;
    //绘制
    ctx.beginPath();
    ctx.fillStyle = 'transparent';
    ctx.drawImage(enemyPlane, this.x, this.y, this.size, this.size);
    ctx.fillRect(this.x, this.y, this.size, this.size);
    //判断是否到达x方向反弹的条件
    if (this.x < this.minX || this.x > this.maxX) {
        this.vx *= -1;
    }
};
//创建一个掉落物
function createOneEnemy() {
    //生成当前这个掉落物的数据
    var size = rn(maxSize, minSize);
    var x = rn(0, mcW - size);
    var bg = 'rgba('+ rn(30, 255) +','+ rn(30, 255) +','+ rn(30, 255) +','+ .6 +')';
    var vx = rn(maxV, minV);
    var vy = rn(maxV, 1); //因为掉落物的y始终要是累加的
    var dis = rn(maxDis, minDis);
    var enemy = new Enemy(x, size, bg, vx, vy, dis);
    enemyArr.push(enemy);
}
//绘制掉落物
function drawEnemy() {
    for (var i in enemyArr) {
        enemyArr[i].move();
    }
}
//当掉落物掉落出数组时，为了优化代码，提高代码的性能，避免不必要的循环，要咋绘制掉落物的过程中，判断掉落物的top值，完全移出画布，将其完全从数组中删除
function judgeEnemy() {
    for (var i = 0; i < enemyArr.length; i++) {
        if (enemyArr[i].y > mcH) {
            //已经移出画布，将其从数组中删除
            enemyArr.splice(i, 1);
            dieNum++;
            i--;//防止漏判
        }
    }
}

//爆炸物类
function Boom(x, y, bg, vx, vy) {
    this.x = x;
    this.y = y;
    this.bg = bg;
    this.size = boomSize;
    this.vx = vx;
    this.vy = vy;
}
Boom.prototype.move = function () {
    this.x += this.vx;
    this.y += this.vy;
    //绘制
    ctx.beginPath();
    ctx.fillStyle = this.bg;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    //让当前这个小块size累减
    this.size -= 0.2;
};
//当一个子弹打中一个掉落物时，创建一堆爆炸物
function createBoom(ex, ey, ebg, esize) {
    //计算和行列的次数
    var count = esize / boomSize;
    //x和y
    var x, y;
    //当前被击打中的这个掉落物产生的所有爆炸物
    var arr = [];

    //使用双层循环计算每个爆炸物的坐标，并且创建爆炸物
    for (var i = 0; i < count; i++) {
        //行的循环确定y坐标，每一行的元素，y坐标都一样
        y = i * boomSize + ey;
        for (var j = 0; j < count; j++) {
            x = j * boomSize + ex;
            //创建爆炸物，将其添加到boomArr中
            var vx = rn(-2, 2);
            var vy = rn(-2, 2);
            var boom = new Boom(x, y, ebg, vx, vy);
            arr.push(boom);
        }
    }
    //用boomArr承接当前这次产生的所有爆炸物数组
    boomArr.push(arr);
}
//绘制爆炸物
function drawBoom() {
    //外层循环拿到每一批爆炸物
    for (var i = 0; i < boomArr.length; i++) {
        //内层循环拿到每一个爆炸物
        for (var j in boomArr[i]) {
            boomArr[i][j].move();
            //判断当前的爆炸物的大小，如果已经减到0，就将其从数中移除。如果当前爆炸物减到0（因为他们是一起被创建的，变化是一样的），证明其所在的数组中的大小都为0，需要从boomArr中移除所在的数组
            if (boomArr[i][j].size <= 0) {
                boomArr.splice(i, 1);
                i--; //防止漏判
                //一旦循环到一个size为0的，代表这个数组中的爆炸物都为0，就没必要循环后面的元素
                break;
            }
        }
    }
}

//尾随物类
function Twinkle(x, y, bg) {
    this.x = x;
    this.y = y;
    this.size = twinkleSize;
    this.bg = bg;
}
Twinkle.prototype.move = function () {
    ctx.beginPath();
    ctx.fillStyle = this.bg;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    this.size -= 0.2; //大小更变
};
//绘制twinkle
function drawTwinkle() {
    for (var i = 0; i < twinkleArr.length; i++) {
        twinkleArr[i].move();
        //判断当前尾随物的大小，如果为0，从数组中移除
        if (twinkleArr[i].size <= 0) {
            twinkleArr.splice(i, 1);
        i--;
        }
    }
}

//碰撞检测（子弹和掉落物）
function judgeHit() {
    for (var i = 0; i < enemyArr.length; i++) {
        for (var j = 0; j < bulletArr.length; j++) {
            var e = enemyArr[i], b = bulletArr[j];
            //碰撞条件
            var lc = e.x + e.size >= b.x;
            var rc = e.x <= b.x + bulletSize;
            var tc = e.y + e.size >= b.y;
            var bc = e.y <= b.y + bulletSize;
            if (lc && rc && tc && bc) {
                //分数累加
                score += 1000;
                maxScore = maxScore > score ? maxScore : score;
                //击中，创建爆炸物
                createBoom(e.x, e.y, e.bg, e.size);
                boomM.play();
                //移除掉落物
                enemyArr.splice(i, 1);
                //移除子弹
                bulletArr.splice(j, 1);
                i--; //防止漏判
                //当前的子弹已经击打到了这个掉落物，所以没有必要再去循环后面的子弹和当前掉落物的关系，直接break
                break;
            }
        }
    }
}
//



/**************/

/***************/


var hz = 0; //控制requestAnimationFrame对于某些函数的调用频率
//游戏的绘制函数
function draw() {
    hz++;
    //清除画布
    ctx.clearRect(0, 0, mcW, mcH);

    ctx.fillStyle = 'transparent';
    ctx.drawImage(canvasBg, 0, 0, mcW, mcH);

    //绘制白块
    plane();

    //绘制子弹
    bulletDraw();

    //创建掉落物
    if (!(hz % 50)) createOneEnemy();
    drawEnemy(); //绘制掉落物

    //判断掉落物是否移出画布
    judgeEnemy();

    //碰撞检测
    judgeHit();

    //绘制爆炸物
    drawBoom();

    //绘制尾随物
    drawTwinkle();

    //绘制分数
    drawScore();

    //
    if (dieNum == life) {
        gameOver();
    }
    if (playFlag) {
        requestAnimationFrame(draw);
        planeM.play();
    }
}

//绘制分数
function drawScore() {
    //当前分数
    ctx.beginPath();
    ctx.font = '25px Mdt';
    ctx.fillStyle = 'orange';
    ctx.textAlign = 'left';
    ctx.fillText('分数：' + score, 20, 70);
    ctx.closePath();
    //最高分
    ctx.beginPath();
    ctx.font = '25px Mdt';
    ctx.fillStyle = 'yellow';
    ctx.fillText('最高分数：' + maxScore, 20, 35);
    ctx.closePath();
    //剩余步数
    ctx.beginPath();
    ctx.font = '25px Myt';
    ctx.fillStyle = 'red';
    ctx.textAlign = 'right';
    ctx.fillText('剩余生命：' + (life - dieNum), 980, 35);
    ctx.closePath();
}

//点击事件的开关 0：开始游戏 1：绘制子弹 2：结束游戏
var gameFlag = 0;
//2.为画布绑定点击事件，点击一次创建一次指定位置的子弹，并且这个子弹移动
mc.onclick = function () {
    //第一次点击画布开始游戏，第二次点击绘制子弹
    if (gameFlag == 0) {
        mc.onmousemove = function (ev) {
            var e = ev || window.event;
            mouseX = e.offsetX;
            //mouseX = e.offsetX < planeSize / 2 ? planeSize / 2 : e.offsetX;
            //mouseX = e.offsetX > mcW - planeSize / 2 ? mcW - planeSize / 2 : e.offsetX;
            //限制我方白块的移动区域
            if (e.offsetX < planeSize / 2) { //最小值
                mouseX = planeSize / 2;
            } else if (e.offsetX > mcW - planeSize / 2) { //最大值
                mouseX = mcW - planeSize / 2
            }
        };
        playFlag = true;
        draw();
        gameFlag = 1;
        drawScore();
        clearInterval(createStartPageTimer); //清除初始化开始页面的计时器
    } else if (gameFlag == 1) {
        //发射子弹音效
        bullet1M.play();
        //实例化一个子弹对象
        var bullet = new Bullet();
        //将当前生成的这个子弹添加到子弹数组
        bulletArr.push(bullet);
    } else {
        ctx.clearRect(0, 0, 1000, 600);
        drawStartPage();
        gameFlag = 0;
    }
};

//游戏结束
function gameOver() {
    //清除游戏运行计时器
    playFlag = false;
    //清除画布的事件
    mc.onmousemove = null;
    ctx.clearRect(0, 0, 1000, 600);
    ctx.drawImage(canvasBg, 0, 0, mcW, mcH);
    //结束音乐
    planeM.pause();
    gameOverM.play();
    //绘制最终分数
    ctx.beginPath();
    ctx.font = '50px Mdt';
    ctx.fillStyle = rnColor();
    ctx.textAlign = 'center';
    ctx.fillText('您的最终得分：' + score, 500, 200);
    ctx.closePath();

    ctx.font = '40px Mdt';
    ctx.fillStyle = rnColor();
    ctx.textAlign = 'center';
    ctx.fillText('历史最高分：' + maxScore, 500, 300);
    ctx.closePath();

    //初始所有数据
    score = 0;
    localStorage.setItem('flyScore', maxScore); //将最高分写入本地
    dieNum = 0;
    bulletArr = [];
    enemyArr = [];
    boomArr = [];
    gameFlag = 2;
}
































//
