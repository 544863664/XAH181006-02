const app = new Vue({
    //规定Vue.js生效的标签范围
    el: '#app',
    //ele选择器对应的元素中要展示的数据
    data: {
        mess: '',
        hobby: [], //复选框获取到的数据
        sex: '', //单选框相对应的数据
        cl: 'Java',
        bol: false,
        classObj: {
            default: true,
            warning: true
        }
    },
    //ele选择器中要使用的所有函数列表
    methods: {}
});