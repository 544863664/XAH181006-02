//函数的拓展
//封装函数，当函数的数量不确定的时候,且在函数封装内部，要对形参列表做一些数组的处理，可以使用rest参数
//rest参数必须作为形参列表左后一个参数
//求n个num数据的乘积
// function cj() {
//     console.log(arguments);
//     //如果形参中存在0，那就直接返回0
//     if (arguments.indexOF(0)) {
//         return 0;
//     }
//     let res = 1;
//     for (let val of arguments) {
//         res*=val;
//     }
//     console.log(res);
// }
function cj(...arr) {
    if (arr.indexOf(0) >= 0) {
        return 0;
    }
    let res = 1;
    for (let val of arr) {
        res *= val;
    }
    console.log(res);
    return res;
}
cj(3,5,6,2,);
cj(2,65,7,8,5,7);