//遍历对象的键值对
//ES6提供了5种方法
const obj = {
    name: 'tom',
    age: 17,
    sex: '男',
    move() {}
};
{
    //for..in...循环
    for (let key in obj) {
        console.log(key);
        console.log(obj[key]);
    }
}
{
    //Object.keys(obj)
    const r = Object.keys(obj);
    console.log(r);
}
{
    //创建一个XMLHttpRequest对象
    const ajax = new XMLHttpRequest();
    ajax.open('get','http://jsonplaceholder.typicode.com/posts');
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            const res = ajax.responseText;
            // console.log(res);
        }
    }
}
{
    //console.log(...obj);
    /*
    * 1.如果将展开运算符应用到对象的解构赋值上，那么...修饰的量一定是被赋值的数据列表中的最后一个。
    * */
    let {name,...o} = obj;
    console.log(name,o);
}
{
    //将...【】和对象结合起来
    const obj = {...['a','b','c']};
    console.log(obj);
}