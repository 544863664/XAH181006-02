//接口， 行为的抽象
/*interface Index_2 {
    name:string;
    age: number;
    tel:number;
}
function p1(data:Index_2) {
    console.log(data);
}
p1({name:'tom',age:13,tel:12312});*/
function p1(data) {
    console.log(data);
}
p1({ name: 'tom', age: 13 });
function n1(n) {
    console.log(n);
}
n1({ x: 3, y: 5 });
n1.x = 10;
console.dir(n1);
//规定某个类必须具有某些属性
var Clock = /** @class */ (function () {
    function Clock() {
    }
    return Clock;
}());
var c = new Clock();
console.log(c);
