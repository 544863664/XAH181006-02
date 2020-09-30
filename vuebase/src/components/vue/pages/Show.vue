<template>
    <div class="show">
      <h1>{{currentUser}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Show",
        //任何一个组件实例都有props属性，用来接受其他组件在调用当前组件时，向当前组件传的值
        props: ['currentUser']
    }
</script>

<style scoped>

</style>
