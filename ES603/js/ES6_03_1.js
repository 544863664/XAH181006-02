//ES6的类
class People {
    //类的构造函数在实例化对象时自动调用
    constructor (name) {
        this.eyes = 2;
        this.name = name;
        //声明类的公有方法
        this.run = function () {
            console.log('lkld');
        }
    }
    //类的原型方法
    eat () {
        console.log(this.name + 'kjsdklsf');
    }
    move () {
        this.eat();
    }
}
const p = new People('tom');
console.log(p);

const t = typeof People;
console.log(t);

const  r1 = People.prototype.constructor === People;
console.log(r1);