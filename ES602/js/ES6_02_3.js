{
    const arr = [3,4,'hello','world',true,false];
    /*///r1 Iterator遍历器对象
    *   next()
    *   value
    *   done
    * 1.要使用for...of循环遍历Iterator对象
    * 2.Iterator有一个原型函数next（），对象每被遍历一次，原型函数就会被调一次
    * 3.next（）函数调用时，读取数据的指针，会向后移一位，并且有一个标志数据done，
    * 表示是否到达了最后一个数据的位置，如果到达，遍历自动结束。
    * */
    //获取数组所有的键
    const r1 = arr.keys();
    console.log(r1);
    for (let item of r1) {
        console.log(item);
    }
    //获取数组所有的值
    const r2 = arr.values();
    console.log(r2);
    for (let item of r2) {
        console.log(item);
    }
    //获取数组所有的键值对
    const r3 = arr.entries();
    console.log(r3);
    for (let item of r3){
        console.log(item);
    }
}
//对象没有函数
////////////////////

{
    //includes() 判断数组中是否包含某个数据，返回值不二类型
    const arr = [3,4,'hello','world',true,false];
    const r1 = arr.includes('world');
    console.log(r1); //true
}

Array.prototype.myIncludes = function (searchElement,fromIndex = 0) {
    //接受两个参数，第一参数必须，第二个参数可选
    //如果有第一个参数，就从盖位置开始，检索第一个参数，能检索到返回true，否则false
    //如果没有第二个参数，就从0 开始检索
    typeof fromIndex == 'number' ? fromIndex : 0;
    for (var i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) return true;
    }
    return false;
};
const arr = [3,4,'hello','world',true,false];
    const r2 = arr.myIncludes('world',4);
    console.log(r2);



{
    const r3 = [1, [2, [3]]].flat(Infinity);
    console.log(r3);
    const r4 = [1, 2, , 4, 5].flat();
    console.log(r4);
}




























//