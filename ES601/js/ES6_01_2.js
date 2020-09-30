//块级作用域
/*
* 块级作用域：
* （1）es6规定，可以使用{}形成的块级作用域，在块级作用域中使用
* 的es6语法声明的变量和函数只能生效于这个作用域。var和function
* 关键词不收块级作用域的约束
* (2)块级作用域可以嵌套，字块可以访问父块中的代码，但是，子块和子
* 块之间是独立的，无法互通。
* （3）使用let声明的变量和const声明的常量，只能在当前作用域声明之后使用。
* （4）分支和循环的{}可以形成块级作用域。
* */
//在es5中，作用域只有两种，全局和局部，局部的作用域一定是由function形成的，我们常用的分支和循环不会形成单独的作用域。分支和循环内部的变量，可以在分支和循环外部访问。
{
    let num = 100;
    {
        num = 200;
        console.log(num);
    }
    {
        console.log(num);
    }
}
{
    let a = 1;
    console.log(a);
}
{
    let a = 3;
    console.log(a);
}
{
    var c = 2;
    console.log(c);

    function fn() {
        console.log(4);
    }
}
console.log(c);
    fn();