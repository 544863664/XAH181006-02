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

interface Index_2 {
    name:string;
    age: number;
    tel?:number;
}
function p1(data:Index_2) {
    console.log(data);
}
p1({name:'tom',age:13});

//只读参数
interface Interface {
    x:number;
    y:number;
}
function n1(n:Interface) {
    console.log(n);
}
n1({x:3,y:5});
n1.x = 10;
console.dir(n1);



//实现接口
interface ClockInterface {
    currentTime: Date;
}
//规定某个类必须具有某些属性
class Clock implements ClockInterface {
    currentTime: Date;
    // constructor(h: number, m: number) {}
}
const c = new Clock();
console.log(c);
/*2019年4月9日12:02:27*/
