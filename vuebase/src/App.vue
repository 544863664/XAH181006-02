<!--<template>
    <div id="app">
        &lt;!&ndash;以单标签或双标签的方式引用&ndash;&gt;
        &lt;!&ndash;
          vue(react，angular）这些框架开发项目时，大大降低了代码冗余和多余的HTTP请求。使我们的项目研发更模块化，前端展示组件化。
          1.使用框架开发项目，只需要一个HTML页面，项目中所有需要展示的内容，都跟据功能被划分成了各种各样的组件
          2.这些组件都是以子组件导入父组件，路由，插槽形式被调用。
          3.所有的vue项目的逻辑，是main.js。
          4.app.vue是vue项目的根组件，整个项目中，所有的vue文件，一定是通过各种各样的方式最终到达了app.vue中的ID为app的div标签，映射的就是index.html中的id为app的div，从而将vue文件的内容展示在浏览器上。
          5.在main.js中，new Vue（）创建了vue的实例，这个实例就是app.vue.
          6.任何一个vue项目中，每一个vue文件都是一个单独的vue实例，这些vue实例形成单独的上下文环境。
        &ndash;&gt;
        <h1>根组件</h1>
        <Header/>
        &lt;!&ndash;想要在 某个父组件中引入子组件：
            1.子组件一定是被export导出的，因为只有在导出之后才能在其他文件中被导入使用。
            2.在父组件中，要展示某个其他组件，要先导入这个组件。
            3.要将导入的子组件和当前的父组件建立联系
              父组件中有components对象，将子组件设置成components对象的键值对。（只有进行这样的设置才能在父组件的HTML解构中调用子组件）
            4.在父组件中以标签的形式调用子组件。
        &ndash;&gt;
    </div>
</template>

<script>
//导入一个组件
/*
* 一般情况下组件名称建议大写，区分H5标签和组件
* */
  import Header from './components/Header'

  export default {
      name: 'App',
      components: {
          //将导入的其他组件传入当前组件的components中，就代表当前组件可以在DOM中引用被导入的的这个组件
          Header,
      }
  }
</script>-->

<!--<template>
    <div id="app">
        <Home/>
    </div>
</template>

<script>
    //导入一个组件
    //子组件导入父组件及之间的传值
    // import Home from './components/vue/Home';
    //vue实例的生命周期以及钩子函数
    import Home from './components/vue_3/Home';
    export default {
        name: 'App',
        components: {
            Home
        }
    }
</script>-->
<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
  //导入一个组件
  //子组件导入父组件及之间的传值
  // import Home from './components/vue/Home';
  //vue实例的生命周期以及钩子函数
  import Home from './components/vue_test/Home';
  export default {
    name: 'App',
    components: {
      Home
    }
  }
</script>

<!--<template>
    <div id="app">
        <h1>
            <router-link to="Home">首页</router-link>
            <router-link to="mynav1">nav1</router-link>
            <router-link to="mynav2">nav2</router-link>
            <router-link to="mynav3">nav3</router-link>
        </h1>
        <router-view></router-view>
    </div>
</template>

<script>
    //导入一个组件

    export default {
        data () {
            return {}
        },
    }
</script>-->

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
