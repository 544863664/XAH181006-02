//字符串解构
const str = 'prefect';
{
    const [a,b,c,d,e] = str;
    console.log(a);
    console.log(b);
}
{
    //以对象的相识解构字符串
    const {length} = str;
    console.log(length);
}
{
    const arr = [4,5,6];
    const {length} = arr;
    console.log(length);

    //也可以像解构对象一样解构数组
    const {'0':x} = arr;
    console.log('text:',x);

    const {'0':y} = str;
    console.log(y);
}