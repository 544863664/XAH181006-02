<template>
    <div class="home">
      <router-view :name="$route.params.show ? $route.params.show : 'default'" />
    </div>
</template>

<script>
    export default {
        name: "Home",
        data () {
          return {
            show: 'default'
          }
        }
    }
</script>

<style scoped>

</style>
