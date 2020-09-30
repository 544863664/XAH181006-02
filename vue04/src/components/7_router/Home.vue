<template>
    <div class="home">
      <router-link
        :to="{
          name:'login',
          param:{
            id: 0,
            name: 'marry'
      }}">登录</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
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
