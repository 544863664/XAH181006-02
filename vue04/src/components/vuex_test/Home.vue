<template>
    <div class="home">
      <Avue />
      <Bvue />
    </div>
</template>

<script>
    //引入组件
    import Avue from './Avue';
    import Bvue from './Bvue';
    export default {
        name: "Home",
        components: {
          Avue, Bvue
        }
    }
</script>

<style scoped>

</style>
