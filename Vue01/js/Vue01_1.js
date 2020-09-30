/*
* 1.前端的主流框架：
*   Vue.js
*       （1）将其当做一个js函数库使用。
*       （2）vue-cli
*       （3）UI框架
*   react.js(react-native)
*   AngularJS、Angular
* 2.jQuery函数库和VAR框架的区别
*   （1）目前我们将jQuery称之为函数库
*   （2）在项目研发过程中，如果要将jQuery换为其他的库，不会
*   影响整个项目的目录结构，只需要在部分代码做出改变即可，如
*   果使用的VAR，那么替换成本就是整个项目推翻重写。
*   （3）框架的脚手架对于项目的目录结构有严格的要求，但是小型库影响不了整个项目大的配置。
*   （4）jQuery最大的好处是降低了逻辑代码对于DOM节点的操作。
*         框架的JS代码不在操作元素了（通过控制数据库，直接控制节点）。
*   （5）jQuery的项目是属于MVC模式中的一部分（m：module、V：view、c：controller）。
*   （6）Vue.js是MVVM的模式。
*       M：页面要展示数据
*       V：DOM结构
*       VM：M和V沟通的桥梁
* 3.框架的优点：
*   （1）让前端的开发结构层次更分明
*   （2）降低代码冗余，提高代码执行的效率
*   （3）模块化的开发
* */
const app = new Vue({
    el: '#app', //规定Vue.js代码的生效代码
    data: {
        //el选择器对应的元素中要展示的所有数据
        title: '大人物',
        bol: true,
        user: {
            name: 'tom',
            age: 18,
            sex: 0
        },
        inner: `
            <div>
                <p>我是内容</p>
                <mark>dkjfas</mark>
            </div>
        `,
        className: 'active',
        goodList: [{
            id: 1,
            title: '产生的那个'
        }],
        userList: [{
            email: '123@qq.com',
            tel: '2312312',
            name: '小明',
        },{
            email: '123@qq.com',
            tel: '2312312',
            name: '小明',
        },{
            email: '123@qq.com',
            tel: '2312312',
            name: '小明',
        }],
        fruitList: ['sdf','dsfs','fre'],
        count: 1,
        arr: ['dsa','gfsd',4,3,5,'tryr',0],
        resArr:[],
        username : [],
    },
    methods: {
        //el选择器对应的元素中要使用的所有函数
        /*
        * 我们在methods中访问当前Vue实例的变量时，直接用this变量名。
        * 虽然在代码书写上，methods中的函数和data中的变量是同一个上下文环境，但是Vue.js代码，
        * 在实例化当前的Vue实例对象时，会将data中的键值对和methods中的键值对直接绑给APP，让他们形成同一个上下文环境。
        * */
        filter1 () {
            //过滤数组
            const arr = this.arr;
            const res = arr.filter(function (item) {
                if (typeof item == 'string') return item;
            });
            //将过滤之后的值设置给resArr
            this.resArr = res;
        },
        filter2 () {
            //过滤数组
            const arr = this.arr;
            const res = arr.filter(function (item) {
                if (typeof item == 'number') return item;
            });
            //将过滤之后的值设置给resArr
            this.resArr = res;
        },
        filter (type) {
            const arr = this.arr;
            const res = arr.filter(function (item) {
                if (typeof item == type) return item;
            });
            this.resArr = res;
        },
        // getEvent (e) {
        //     console.log(e.target);
        // },
        //用形参解构实参
        getEvent (str, {a}, {target}) {
            console.log(a);
            console.log(str);
            console.log(target);
        },
        ulE () {
            console.log(1);
        },
        liE () {
            console.log(2);
        },
        captureFn (i) {
            console.log(i);
        },
        kd (e) {
            console.log('触发');
            console.log(e)},
    }
});
// console.log(app);

/*
* ele {
*   style:{},
*   className:'',
*   id:'',
*   onclick: function () {
*       因为onclick键所在的上下文环境元素，所以，事件对应的函数中的this指向的是当前节点的对象
*       this;
*   }
* }
* */

/*
* 这个实例中的o，fn，btn.onclick分别模拟vue世界绑定中的app，filter，v-on：click。
* 虽然在点击btn是调用了o.fn（），但是fn中的this依旧指向fn，而非btn
* */
// const o = {
//     fn () {console.log(this)},
// };
// btn.onclick = function () {
//     // o.fn(); //o
//     // fn(); //window
// };
//btn.onclick = fn; //btn