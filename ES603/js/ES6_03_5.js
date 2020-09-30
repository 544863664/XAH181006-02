//ES6中类的继承
class People {
    constructor (height, weight) {
        this.eyes = 2;
        this.legs = 2;
        this.height = height;
        this.weight = weight;
    }
}
//子类
class Man extends  People{
    /*
    * 由某个类中实例化对象时，类的额构造函数会自动被调用。如
    * 果存在继承关系，那么子类中实例化对象时，父类的构造函数
    * 都会被调用，为了保持调用的正确性，我们需要在子类的构造
    * 函数中调用一次super函数，并将父类的构造函数需要的参数，
    * 传到super中，super会自动将这个参数传递到父类的构造函数中。
    * */
    constructor () {
        super(180, 108);
        this.sex = 'nan';
    }
}
const m1 = new Man();
console.log(m1);