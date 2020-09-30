//封装一全局的自定义指令
//绑定了v-focus指令的input元素，在当前组件挂载时，就要默认获取焦点
import Vue from "vue";

Vue.directive('focus', {
  //bind钩子函数在指令第一次绑定给元素时更新
  bind (el) {
    el.focus();
  }
});
Vue.directive('alert', {
  inserted (el, binding) {
    console.log(binding);
    //跟据调用指令时传的指令参数确定当前对于el的具体操作
    const arg = binding.arg;
    //跟据指令对这个元素el做出的样式设置列表
    switch (arg) {
      case 'success':
        el.style.background = 'green';
        el.style.border = '1px solid green';
        break;
      case 'warning':
        el.style.background = 'orange';
        el.style.border = '1px solid red';
        break;
      case 'danger':
        el.style.background = 'red';
        el.style.border = '1px solid orange';
        break;
    }
    //跟据调用指令时的修饰符对当前元素做出指定的操作
    const m = binding.modifiers;
    if (m.lg) {
      el.style.padding = '20px 10px';
    }
    if (m.md) {
      el.style.padding = '15px 8px';
    }
    if (m.sm) {
      el.style.padding = '8px 5px';
    }
  }
});
//封装一个指令
Vue.directive('myshow', {
  inserted (el, binding) {
    const e = binding.expression;
    if (e == 'true') el.style.display = '';
    if (e == 'false') el.style.display = 'none';
  }
});
/*
* v-filter:arg.m="list"
* arg:'','','','','','',''
* m:'asc','desc'
* list:调用这个
* */
Vue.directive('filter', {
  inserted (el, binding) {
    console.log(binding.value);
  }
});
