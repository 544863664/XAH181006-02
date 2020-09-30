<template>
    <div class="login">
      登录成功
      <h1>{{$route.params.id}}</h1>
      <h1>{{$route.params.name}}</h1>
      <h1>{{$route.query.id}}</h1>
      <h1>{{$route.query.name}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Login",
        created() {
          console.log(this.$route);
        }
    }
</script>

<style scoped>

</style>
