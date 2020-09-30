//对象的拓展
/*
* obj.key；
* key本身作为obj的键。
* obj[key];
* key的被当做一个变量，key的值作为obj的键。
* */
{
    let obj = {
        name: 'tom',
        age: 16,
        sex: '男'
    };
    obj.run = function () {};
    obj['move'] = function () {};
    function getItem(key) {
        return obj[key];
    }
    const r = getItem('run');
    console.log(r); //undefined
    //
}
{
    //对象新的声明方式（可以用表达式计算键）
    const key = name;
    const num =  0;
    const obj = {
        age: 16, //age本身就是obj的键
        [key]: 'tom', //key被当做一个变量，key的值是obj的键
        [num > 10 ? 'sex' : 'height']: 100
    };
    console.log(obj);
}
{
    //对象中的函数的name属性
    const f = function () {};
    const preson = {
        run () {},
        move: f
    };
    const  r = preson.run.name;
    console.log(r);
    //当存在函数指针传递的时候，函数名称（name属性)是这个函数首次被声明时的name
    const  r2 = preson.move.name;
    console.log(r2);
}

{
    let n = 123;
    const r = Object.getOwnPropertyDescriptor(n);
    console.log(r); //undefined

    let obj = {
        name: 'tom'
    };
    const r1 = Object.getOwnPropertyDescriptor(obj, 'name');
    console.log(r1);

    //使用const声明一个对象，这个对象本身是个常量，不能进行二次赋值，但是，对象中的键不受声明对象的关键词const的影响。
    const obj2 = {
        name: 'jerry'
    };
    const r2 = Object.getOwnPropertyDescriptor(obj2, 'name');
    console.log(r2);

//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
}