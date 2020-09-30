//双冒号运算符
//call和apply是function的函数，任何一个函数都可以调用这两个函数
//调用call和apply的函数内部的代码会直接执行，并且call或apply的第一个参数替换函数内部的this。
let name = '';
let obj = {
    name: 'tom',
    age: 18
};
function fn(str) {
    this.name = str;
}
fn.call(obj, 'jerry');
console.log(obj);
fn.apply(obj,['marry',4]);
console.log(obj);
let m = {
    name: ''
};


// m::fn('江流儿',5); //ES7的提案
// console.log(m);