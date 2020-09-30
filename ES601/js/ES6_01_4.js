//变量的解析赋值
//解构赋值要求等号左右的数据类型必须保持一致。
{
    //对数组进行解析赋值
    let [a, b, c] = [4, [5, 7], 6];
    console.log(a); //4
    console.log(b); //[5, 7]
    console.log(c);//6
}
{
    let [a, [b, c], d] = [4, [5, 7], 6];
    console.log(a,b,c,d);
}
{
    let [a] = [4, [5, 7], 6];
    console.log(a);
    let [,,b] = [4, [5, 7], 6];
    console.log(b);
    let [,c] = [4, [5, 7], 6];
    console.log(c);
    let [,[,d]] = [4, [5, 7], 6];
    console.log(d);
}
{
    let a = 11;
    //··用来包裹字符串，并允许字符串在其内部换行。
    let newEle = `<div class="wrap">
                    <span>`+ a +`</span>
                  </div>`;
}
{
    //展开运算符     ...
    let arr = ['hello', 'world'];
    console.log(...arr);
    console.log(...arr[1]); //展开一个字符串
    let obj = {
        a:1,
        b:2,
        c:3
    };
    //console.log(...obj); //不能展开对象
    let numArr = [324,324,32,21,43,54];
    let min = Math.min(...numArr);
    let max = Math.max(...numArr);
    console.log(min, max); //21 324
}
{
    let [a, ...b] = ['hello', 'tom', 'jerry', 'hjdsfj'];
    console.log(a);
    console.log(b);
    let [c,d, ...f] = ['hello', 'tom', 'jerry', 'hjdsfj'];
    console.log(c,d,f);
}
{
    //解构赋值允许被赋值的量设置默认值
    let [a,b = 6] = [5];
    console.log(a,b);
    let [c,d] = [5,10];
    console.log(c,d);
}
{
    //如果解构赋值的默认值运算中，被复制量的默认值是一个表达式，那么这个表达式会惰性求职
    //在下面事例中，如果a赋值解析右边，有对应的值1，那么a设置的默认值fn(）不会执行
    const fn = function () {
        console.log('函数被调用');
    };
    let [a = fn()] = [1];
    //let [a = fn()] = [];
    console.log(a);

    let [b = 1 || 0] = [];
    console.log(b);
    let [c = b ? 'hello' : 'jerry'] = [];
    console.log(c,b);
}
{
    //对某一个数组的第一个元素加10
    //下面这个实例相当于解构了实参，解构赋值给了形参。
    const fn = function ([x]) {
        return x + 10;
    };
    const res = fn([6,7,8]);
    console.log(res);
}






















//