class Point {
    constructor () {}
    move() {
        console.log('调用');
    }
    //在类的声明中，如果有个函数使用startic修饰的，那么从类中实例化出来的对象继承不了这个函数
    static run () {
        console.log('idsj');
    }
}
const p1 = new Point();
p1.move();

////////////
People.prototype.move = function () {};
//ES6中static修饰的函数其根本就是为这个构造函数绑定的键值对。
People.run = function () {};
const p2 = new People();
////////////