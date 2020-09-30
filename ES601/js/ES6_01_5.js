//对象的解构赋值
//1.对象的解构赋值没有顺序要求
//2.被赋值的量的名称，必须是被解构的对象中的某个键值对的键名。如果被赋值的量在被解构的对象中不存在对应的键值对，那么拿到的值是undefined。
//3.对象的解构赋值只和键名本身有关，顺序不影响解构结果
const obj = {
    num:100,
    arr: [3,2,3,4,2,1,],
    bol:true,
    child: {
        name:'冰心',
        age:'100'
    }
};
{
    const {num} = obj; //从对象中解构一个键值对
    console.log(num);
    const {child} = obj;
    console.log(child);
}
{
    //从一个对象中解构对个键值对
    const {num, child} = obj;
    console.log(num, child);
}
{
    //冒号前面是obj中的键，冒号后面是解构这个键，拿到值要赋值的那个变量。当名称相同时，就使用简写形式。
    const {num:num, child:child} = obj;
}
function fn(name,age,sex) {
    //ES6规定，声明对象时，如果对象的键和这个键值位置的变量名相同可以采用下面的简化写法。
    return {
        name,
        age,
        sex
    }
}
{
    //对象解构赋值的嵌套
    const {num, arr:[,,x]} = obj;
    console.log(num,x);
    const {bol, child:{age}} = obj;
    console.log(bol,age);
}