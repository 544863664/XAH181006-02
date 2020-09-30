<template>
    <div class="home">
        <input type="text" v-focus>
        <h1 v-alert:success.lg>IQ飞机大SAV都是</h1>
        <h1 v-alert:warning.md>警告框</h1>
        <h1 v-alert:danger.sm>危险框</h1>
        <h1 v-alert>默认</h1>

        <h2 v-alert:success.lg v-myshow="false"></h2>

        <h2 v-filter:number.asc="list"></h2>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data () {
            return {
                list: ['hello', 'world',3,1,[],{},null]
            }
        },
      methods: {
          fn () {}
      }
    }




</script>

<style scoped>

</style>
