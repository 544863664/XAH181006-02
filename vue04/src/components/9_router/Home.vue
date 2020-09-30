<template>
    <div class="home">
      <router-view :name="showM"/>
      <!--<router-view name="good-m"/>-->
      <!--<router-view name="data-m"/>-->
    </div>
</template>

<script>
    export default {
        name: "Home",
      data () {
          return {
            showM: 'dafault'
          }
      }
    }
</script>

<style scoped>

</style>
