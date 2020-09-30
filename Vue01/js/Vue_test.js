const app = new Vue({
    el: '#app', //规定Vue.js生效的标签范围
    data: {
        userlist: [{
            email: '123@qq.com',
            tel: '2312312',
            name: '小明',
            id: 1,
        },{
            email: '123@qq.com',
            tel: '2312312',
            name: '小明',
            id: 2,
        },{
            email: '123@qq.com',
            tel: '2312312',
            name: '小明',
            id: 3,
        }],
    }, //ele选择器对应的元素中要展示的数据
    methods: {
        getMess (user) {
            console.log(user);
        },
    } //ele选择器中要使用的所有函数列表
});