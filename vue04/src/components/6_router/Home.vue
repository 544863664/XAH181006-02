<template>
    <div class="home">
      <router-link to="/docs">文档</router-link>
      <router-link to="/blogs" tag="em">博客</router-link>
      <router-link to="/goods-list" tag="i">商品列表</router-link>

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
