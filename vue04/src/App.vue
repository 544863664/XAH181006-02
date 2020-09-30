<template>
    <div id="app">
        <Home/>
    </div>
</template>

<script>
    //导入子组件
    //如果一个js数据被导入到另一个js文件中，却没有做任何使用，就会造成代码冗余
    // import Home from '@/components/1_child_to_father/Home';
    // import Home from '@/components/2_father_to_child/Home';
    // import Home from './components/3_directive/Home';
    // import Home from './components/4_router/Home';

    // import Home from './components/vuex_test/Home';

    // import Home from './components/5_router/Home';
    // import Home from './components/6_router/Home';
    // import Home from './components/7_router/Home';
    // import Home from './components/8_router/Home';
    // import Home from './components/9_router/Home';
    // import Home from './components/10_router/Home';

    // import  Home from './components/router_test/Home';

    // import Home from './components/11_router/Home';
    // import Home from './components/12_router/Home';
    import Home from './components/13_vuex/Home';
    export default {
        name: 'App',
        components: {
            Home,
        },
    }
</script>

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
