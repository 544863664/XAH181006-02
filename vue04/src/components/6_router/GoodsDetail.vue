<template>
    <div class="goods-detail">
      <!--$route中包含了当前组件被路由调用的路由信息-->
      <h1>{{$route.params.id}}-----{{$route.params.name}}</h1>
    </div>
</template>

<script>
    export default {
        name: "GoodsDetail",
      created() {
          //在js中通过$route接受路由参数
          const id = this.$route.params.id;
          const name = this.$route.params.name;
          console.log(id,name);
      }
    }
</script>

<style scoped>

</style>
