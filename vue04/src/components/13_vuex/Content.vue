<template>
    <div class="content">
      <h1>{{num}}</h1>
      <h1>{{arr}}</h1>
    </div>
</template>

<script>
    //导入vuex提供的mapState工具(下面这种导入方式，是在用导入的数据结构vuex中被导入的数据)
    import {mapState} from 'vuex';
    export default {
        name: "Content",
        computed: {
          ...mapState(['num', 'arr'])
        }
    }
</script>

<style scoped>

</style>
