//
const obj = {
    '0': 'name',
    '1': 'hello',
    '2': 'world',
    'length': '3'
};
//Array.from(obj);将obj（键值对的规则符合数组特点的对象）转换成真正的数组
//普通对象呗from转换，返回值依旧是一个数组，如果这个对象中有length属性，且属性值是number。那么这个对象中就会含有length个undefined元素。
//如果第一个事例中没有obj对象中没有length属性，那么发回值是一个空数组
let arr = Array.from(obj);
console.log(arr);

const obj2 = {
    name: 'tom',
    age: 16,
    length: 2
};
//Array.of(item1,item2,item3,item4);
//返回一个数组，数组中的元素是item1~item4
let arr2 = Array.from(obj2);
console.log(arr2);

const arr1 = Array.of();
console.log(arr1);

const r2 = Array.of(4,7);
console.log(r2);

//将数组中n位置的x个元素提取出来，替换m位置的x个元素。
const arr3 = ['a','b','c','d','e','f'];
let r3 = arr3.copyWithin(1,4);
console.log(r3);



Array.prototype.copy = function (copyStart,copyCount,putIndex) {
    const tempArr = this.splice(copyStart,copyCount);
    this.splice(putIndex,copyCount,...tempArr);
    this.splice(copyStart,0,...tempArr);
};
const arr5 = [1,2,3,4,5,6,7,8,9,10];
arr5.copy(6,2,1);
console.log(arr5); //[1, 7, 8, 4, 5, 6, 7, 8, 9, 10]