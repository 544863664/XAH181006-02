<template>
    <div class="login">
      <button @click="login">登录</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
          login () {
            //发出HTTP请求，并且在登录成功之后，首页不在展示login，而是展示index
            //点击login中的登录按钮，对path为/的路由传递了一个参数，键show，值index
            this.$router.push({
              params: {
                show: 'index'
              }
            })
          }
        }
    }
</script>

<style scoped>

</style>
