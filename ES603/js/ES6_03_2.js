//封装一个分数类，约分，加减乘除
class Grade {
    //构造函数中声明公有属性 分子和分母
    constructor (t, b) {
        this.t = t; //分子
        this.b = b; //分母
    }
    //约分
    yf () {
        //求分子分母的最大公约数
        let max = this.t > this.b ? this.t : this.b;
        let min = this.t + this.b - max;
        let c;
        while (min != 0) {
            c = max % min;
            max = min;
            min = c;
        }
        //循环结束后，max就会说t和b的最大公约数
        this.t /= max;
        this.b /= max;
    }
    //加
    add (an) {
        //相加产生结果，对做加运算的两个分数本身没有任何影响，add函数会返回this和an相加的结果
        const ng = new Grade();
        ng.t = this.t * an.b + an.t * this.b;
        ng.b = this.b * an.b;
        //ng是从Gread中实例化的对象，所以可以调用Greade这个类的原型方法，将其华简称最贱分数
        ng.yf();
        return ng;
    }
}
//从分数类中实例化一个对象
const f1 = new Grade(5, 10);
f1.yf();
console.log(f1);
const f2 = new Grade(1,10);
const r = f1.add(f2);
console.log(r);