/*
* 当通过arr找到某个匿名函数并调用它时，这个匿名函数才会执行，执行时循环结束，i的值是5。
* */
let arr = [];
// for (let i = 0; i < 5; i++) {
//     arr.push(function () {console.log(i)});
// }
// console.log(arr);
// arr[0]();
//arr[1]();
// for (var i = 0; i < 5; i++) {
//     let fn = function (x) {
//         return function () {
//             console.log(x);
//         };
//     }();
//     arr.push(fn);
// }

// let testArr = [];
// (function (x) {
//     testArr.push(function () {
//         console.log(x);
//     })
// })(0);
// (function (x) {
//     testArr.push(function () {
//         console.log(x);
//     })
// })(1);
// testArr[0]();
for (let i = 0; i < 5; i++) {
    arr.push(function () {
        console.log(i);
    });
}
arr[2]();
//let和循环的{}会形成块级作用域，所以在某个作用域中访问i值只能访问到同在一个作用域中的i。
{
    let i = 0;
    arr.push(function () {
        console.log(i);
    });
}
{
    let i = 1;
    arr.push(function () {
        console.log(i);
    });
}