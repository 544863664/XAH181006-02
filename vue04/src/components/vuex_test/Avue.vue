<template>
    <div class="a">
      <h1>a组件</h1>
      <h2>a中的author是{{author}}</h2>
      <h2>a中的another是{{another}}</h2>
    </div>
</template>

<script>
    //导入mpaStore
    import { mapState } from 'vuex';
    export default {
        name: "Avue",
        data () {
          return {}
        },
        computed: {
          //在computed中调用mapStore
          ...mapState([
            //以数组中罗列字符串的形式将想要访问的数据传入mapStore，其将会自动返回这些数据
            'author',
            'another'
          ])
        }
    }
</script>

<style scoped>

</style>
