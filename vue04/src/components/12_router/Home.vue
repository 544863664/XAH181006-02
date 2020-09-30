<template>
    <div class="home">
      <!--
      我们可以使用watch动态的检测路由的变化
      一般情况下，我们可以在被路由切换的组件的声明周期钩子函数中
      响应路由切换，但是有时候切换路由时，组件可能已经被渲染了，这种
      情况下，钩子函数不会再调用，也就无法动态的响应路由变化，那么就使用watch。
      -->

      <router-link tag="h1" v-for="i in 3" :to="'/detail/' + i">详情{{i}}</router-link>

      <router-view />
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
