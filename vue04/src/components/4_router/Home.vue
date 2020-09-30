<template>
    <div class="home">
        <!--
          对于组件的调用方式，如果只是通过父组件导入子组件调用，限制太多，在开发网站时，我们
          可能由各种切换操作，如果全部使用子组件导入父组件，那么代码量很大，而且有些功能无法实现。
          基于此，vue（react，angular）提供了另外一种调用组件的方式即路由。
          使用路由的步骤：
          1.安装vue-router依赖包
          2.配置路由列表
          3.将路由配置传入根组件的实例化（new vue（））
          4.router-link调用路由
          5.router-view展示路由
          -->
      <!--调用路由-->
      <router-link to="/docs">文档</router-link>
      <router-link to="/blogs">博客</router-link>
      <router-link to="/resource">资源</router-link>

      <router-link v-bind:to="{name: 'docs'}">文档</router-link>
      <router-link v-bind:to="{name: 'blogs'}">博客</router-link>
      <router-link v-bind:to="{name: 'resource'}">资源</router-link>

      <!--跟据url中路由的path展示对应的组件-->
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
