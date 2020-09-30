//类
/*function Preson(name) {
    this.name = name;
}
let p1 = new Preson('tom');*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Preson = /** @class */ (function () {
    function Preson(name, age) {
        this.name = name;
        this.age = age;
    }
    Preson.prototype.run = function () {
        console.log(this.name);
    };
    return Preson;
}());
var p = new Preson('tom', 13);
p.run();
//类的继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(tel, email) {
        var _this = _super.call(this, 'limig', 12) || this;
        _this.tel = tel;
        _this.email = email;
        return _this;
    }
    Student.prototype.move = function () {
        console.log('my tel is' + this.tel, 'my email is' + this.email);
    };
    return Student;
}(Preson));
var s1 = new Student(1123, '12312@qq.com');
console.log(s1);
//静态方法和静态属性
var Preson2 = /** @class */ (function () {
    function Preson2(name, age) {
        this.name = name;
        // this.age = age;  //静态属性不可以使用this调用
        Preson2.age = age; //调用静态属性
    }
    Preson2.prototype.print = function () {
        return this.name;
    };
    Preson2.show = function () {
        console.log('静态方法');
    };
    return Preson2;
}());
var ss2 = new Preson2('tom', 12);
console.log(ss2);
ss2.print();
// ss2.show();
Preson2.show();
var Student1 = /** @class */ (function () {
    function Student1(name, age, tel) {
        this.name = name;
        this.age = age;
        this.tel = tel;
    }
    Student1.prototype.show = function () {
        console.log(this.name);
    };
    return Student1;
}());
var student = new Student1('tom', 12, 122335);
student.show();
