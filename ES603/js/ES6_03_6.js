//用ES6的extends实现继承链
class Animal {
    constructor (legs,sex) {
        this.legs = legs;
        this.sex = sex;
    }
}
class People extends Animal{
    constructor (sex, bol) {
        super(2,sex);
        this.canHasBaby = bol;
    }
}
class Man extends People{
    constructor () {
        super(0, false);
        this.ifSmoke = true;
    }
}
const p1 = new Animal(1, true);
console.log(p1);
const m1 = new Man();
console.log(m1);