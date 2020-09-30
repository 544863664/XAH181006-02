const eleArr = document.querySelectorAll('div');
for (let i = 0; i < eleArr.length; i++) {
    eleArr[i].onclick = function (ev) {
        const e = ev || window.event;
        console.log(e);
        add_x_y(e);
    }
}
function add_x_y(offsetX, offsetY) {
    console.log(offsetX);
    console.log(offsetY);
}
//上面这个例子相当于形参在对调用函数时传过来的实参进行解构。实参中如果含有对应的键值对，就取值赋值，如果没有，被赋值的offsetX和offsetY的值就是undefined。