<template>
    <div class="user-detail">
      <h1>{{$route.params.userId}}</h1>
      <h1>{{$route.params.sex}}</h1>
    </div>
</template>

<script>
    export default {
        name: "UserDetail",
        created() {
            console.log(this.$route);
        }
    }
</script>

<style scoped>

</style>
