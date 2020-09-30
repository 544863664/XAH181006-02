<template>
  <div id="app">
    <!--<IView_test />-->
   <!-- <Tab_1 />
    <HelloWorld />-->

    <!--
    插槽的应用场景
      当子组件调用父组件时，希望对父组件中的某系内容作出更改，就是用插槽。
      template（父）
      slot（子）

      注：如果要使用插槽，父组件调用子组件时，要用双标签。
    -->
    <MySlot>
      <template slot="message">
        <h3>您做了一个错误的决定</h3>
      </template>
      <template slot="btns">
        <div>
          <Button>点击</Button>
        </div>
      </template>
    </MySlot>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  import Tab_1 from './components/Tab_1';
  // import IView_test from './components/IView_test';
  import MySlot from './components/MySlot'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Tab_1,
    // IView_test,
    MySlot
  }
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




<!--<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
  import Home from './components/Home';
  export default {
    name: 'App',
    components: {
      Home
    }
  }
</script>

<style>

</style>-->


