/*
jQuery的封装特点：
* 1.$是jQuery中最大的工厂方法。
* 2.$也是jQuery中最大的对象。
* 3.$函数的返回值是一个符合选择器的所有元素。
* 4.jQuery中对于DOM的操作函数，接受不同的参数，反馈不同。
* 5.$本身是一个对象，jQuery为其封装了一些工具方法（循环方式）。
 */
function $(selector) {
    //选择到的元素
    var el = document.querySelectorAll(selector);
    el.hide = function () {
        for (var i = 0; i < this.length; i++) {
            el[i].style.display = 'none';
        }
    };
    el.show = function () {
        for (var i = 0; i < this.length; i++) {
            el[i].style.display = '';
        }
    };
    el.toggle = function () {
        for (var i = 0; i < this.length; i++) {
            if (el[i].style.display == 'none') {
                el[i].style.display = '';
            } else {
                el[i].style.display = 'none';
            }
        }
    };
    el.click = function (callback) {
        for (var i = 0; i < this.length; i++) {
            el[i].onclick = callback;
        }
    };
    el.css = function () {
        if (arguments.length == 2) setCssByTwoArg(this, arguments[0], arguments[1]);
        if (arguments.length == 1) setCssByOneArg(this, arguments[0]);
    };
    el.on = function () {
        if (arguments.length == 1) setEventByOneArg(this, arguments[0]);
        if (arguments.length == 2) setEventByTwoArg(this, arguments[0], arguments[1]);
        if (arguments.length == 3) setEventByThreeArg(this, arguments[0], arguments[1], arguments[2]);
    };
    return el;
}

//css函数传两参数
function setCssByTwoArg(el, cssKey, cssValue) {
    for (var i = 0; i < el.length; i++) {
        el[i].style[cssKey] = cssValue;
    }
}
//css函数传一个参数
function setCssByOneArg(el, cssList) {
    //循环el列表中的所有元素设置样式
    for (var i = 0; i < el.length; i++) {
        for (var cssKey in cssList) {
            el[i].style[cssKey] = cssList[cssKey];
        }
    }
}

//on函数接受一个参数
function setEventByOneArg(el, eventList) {
    for (var i = 0; i < el.length; i++) {
        for (var eventName in eventList) {
            //做浏览器兼容
            if (document.attchEvent) { //IE
                el[i].attchEvent('on' + eventName, eventList[eventName]);
            } else { //非IE
                el[i].addEventListener(eventName, eventList[eventName]);
            }
        }
    }
}
//on函数接受两个参数
function setEventByTwoArg(el, eventName, callback) {
    for (var i = 0; i < el.length; i++) {
        //浏览器兼容
        if (document.attchEvent) { //IE
            el[i].attchEvent('on' + eventName, callback);
        } else { //非IE
            el[i].addEventListener(eventName, callback);
        }
    }
}
//on函数接受三个参数
function setEventByThreeArg(el, eventName, childSelector, callback) {
    //el: [div.wrap]
    for (var i = 0; i < el.length; i++) {
        //浏览器兼容
        if (document.attchEvent) { //IE
            el[i].attchEvent('on' + eventName, function (ev) {
                var e = ev || window.event;
                if ('.' + e.target.className == childSelector) {
                    callback();
                }
            });
        } else { //非IE
            el[i].addEventListener(eventName, function (ev) {
                var e = ev || window.event;
                if ('.' + e.target.className == childSelector) {
                    callback();
                }
            });
        }
    }
}

















//