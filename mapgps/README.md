# vue_cli3_test

## Project setup
```
npm install
```

### 安装 webpack-require-http
```
npm install webpack-require-http --save
```

### 在vue.config.js 里面加入以下代码
```
configureWebpack: {
	externals: [
		require('webpack-require-http')
	],
}
```

### 在vue项目中的main.js文件 Vue.config.productionTip = false 上面加入以下代码
```
window.Vue = Vue;
require('http://oss.lbssoft.com/lbsmap/lbsmap-0.6.3.min.js')
```

### 修改main.js里的new Vue部分代码如下：
```
setTimeout(function () {
	new Vue({
		render: h => h(App),
	}).$mount('#app')
}, 500)
```

### 使用地图组件替换App.vue里的HelloWorld组件标签
```
<template>
	<div id="app">
		<lbs-map></lbs-map>
	</div>
</template>
```

### 再次启动项目

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
