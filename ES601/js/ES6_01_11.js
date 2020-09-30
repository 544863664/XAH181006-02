//获取函数的name
function test() {}
test(4,5,6);
console.log(test);
console.dir(test.name);

const fn1 = function () {};
console.log(fn1.name);

const obj = {
    fn:function () {}
};
console.log(obj.fn.name);

//当函数指针传递的时候，函数名一直是初次声明的函数的函数名。
const x = fn1;
console.log(x.name);

const name = 'tom';
const people = {
    name,
    eat () {
        console.log(1);
    }
};
people.eat();
console.log(people);