//ES6对于函数的拓展
{
    /*
    * 1.函数参数可以设置默认值
    * 2.对函数的参数设置了默认值之后，如果传了，那就使用传的这个参数，如果没穿，那就使用默认值。
    * 3.ES6建议设置了默认值的形参要声明在形参列表的最后方
    * 4.函数形参的默认值可以试试个表达式
    * 5.函数的默认值的设置也存在惰性求职
    * */
    const add = function (x = 0,y = 0) {
        console.log(x+y);
    };
    add(5);
}
{
    const fn = function (x = 0,y = x ? 1: 0) {
        console.log(x,y);
    };
    fn();
    fn(2);
}
{
    const res = function () {
        console.log('被调用');
        return 1;
    };
    res();
}