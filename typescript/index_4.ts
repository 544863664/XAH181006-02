//类
/*function Preson(name) {
    this.name = name;
}
let p1 = new Preson('tom');*/

class Preson {
    name:string; //为类声明公有属性
    age: number;
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }
    run () {
        console.log(this.name);
    }
}
let p = new Preson('tom',13);
p.run();

//类的继承
class Student extends  Preson{
    tel:number;
    email:string;
    constructor(tel:number,email:string) {
        super('limig',12);
        this.tel = tel;
        this.email = email;
    }
    move () {
        console.log('my tel is' + this.tel, 'my email is' + this.email);
    }
}
let s1 = new Student(1123,'12312@qq.com');
console.log(s1);

//静态方法和静态属性
class Preson2 {
    name:string;
    static age:number; //静态属性
    constructor (name:string,age:number) {
        this.name = name;
        // this.age = age;  //静态属性不可以使用this调用
        Preson2.age = age;  //调用静态属性
    }
    print () {
        return this.name;
    }
     static show () {
        console.log('静态方法')
    }
}
let ss2 = new Preson2('tom',12);
console.log(ss2);
ss2.print();
// ss2.show();
Preson2.show();

class Student1 {
    public name:string; //公有的
    private age:number; //私有的
    protected tel:number; //受保护的
    constructor(name:string,age:number,tel:number) {
        this.name = name;
        this.age = age;
        this.tel = tel;
    }
    show () {
        console.log(this.name);
    }
}
let  student = new Student1('tom',12,122335);
student.show();