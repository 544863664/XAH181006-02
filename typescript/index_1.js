console.log('hello world');
/*
* typescript:
*   1.是js的超集
*   2.是强类型语言
*   3.基于类的面向对象的语言
* */
//字符串
var n = 'tom';
console.log(n);
var msg = "my name is " + n;
console.log(msg);
//数字
var num = 3;
console.log(num);
num = 100;
console.log(num);
//布尔类型
var isShow = false;
console.log(isShow);
//数组
var arr = [1, 2, 3, 4,];
console.log(arr);
//元组     元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
var x;
x = ['hello', 100];
console.log(x);
//联合类型
var y;
y = 'tom';
console.log(y);
//任意类型
var a;
a = [100, 'hello', [], true];
console.log(a);
//void
/*
* ts规定声明函数时，必须要声明形参的数据类型，具体声明方式和变量
* 的类型声明方式一样。，也要同时声明函数返回值的类型，如果没有返回值
* */
function add(x, y) {
    return x + y;
}
console.log(add(23, 34));
//无返回值的函数
function fn() {
    console.log(1);
}
console.log(fn());
//枚举       只读，不可以进行二次赋值
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["yellow"] = 1] = "yellow";
    colors[colors["green"] = 2] = "green";
})(colors || (colors = {}));
;
var c = colors.red;
console.log(c);
console.log(colors[2]);
//类型断言
var str = 'hello word';
var strLength = str.length;
console.log(strLength);
//
