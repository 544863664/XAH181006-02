/*let name = '';
const obj = {
    name: '',
    fn() {
        //原始函数中的this永远指向调用这个函数的那个对象
        this.name = 'tom';
    },
    fn2: () => {
        //this指向window
        this.name = 'jerry';
    }
};
obj.fn();
obj.fn2();
console.log(obj);
console.log(name);*/

ele.onclcik = function () {
    const obj = {
        fn () {
            this.name = 'tom';
        },
        fn1: () => {
            this.name = 'jerry';
        }
    };
    obj.fn();
    obj.fn1();
    console.log(obj);
};

const people = (...arr) => {
    //this
    console.log(arr);
};
people(5,6,7);

/*
* 1.箭头函数中的this指向函数声明时的this。
* 2.不能将箭头函数作为一个构造函数使用
* 3.箭头函数中不存在arguments对象.如果封装一个箭头函数，形参数量不确定，这种情况下，要准确
* 的接受所有的形参，可以使用rest参数。
* 4.不建议在声明对象的函数时，将函数声明称箭头函数（因为js是一门基于对象的语言，每一个对象都
* 会形成一个代码执行的上下文context环境，我们期望对象中的函数可以任意的访问对象的属性，这样
* 的访问需要this的支持，电视箭头函数中的this指向未被了这个规律）。
* */