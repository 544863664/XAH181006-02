<template>
    <div class="detail">
      <h1>我是详情{{this.$route.params.id}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        /*created() {
          //接受路由中的参数id，每当其变化动态响应
          const id = this.$route.params.id;
          console.log(id);
        },*/
        //在watch中添加要监听的数据，以及响应函数

      //如果某个数据的变化无法规律的捕获到但是需要在这个数据变化之后动态的响应，做一些处理，就可以使用watch监听数数据，一旦数据变化，watch中对应的函数会立即调用

        watch: {
          //$router：被监听的数据
          '$route': 'routerWatcher'
        },
        methods: {
          routerWatcher () {
            //在watch中响应watch对于$router的监听
            const id = this.$route.params.id;
            console.log(id);
          }
        },
        /*
        * beforeRouteEnter：是路由过程中的钩子函数，可以在其中捕获到要跳转的下一个路由信息，和当前路由信息。
        * 该函数接受三个形参，to，from，next，其中next代表从from切换到to。
        * 如果写了beforeRouteEnter钩子函数，但是在这个函数中，没有调用next函数，那么路由不会切换。
        * 基于以上特点，我们可以在钩子函数中，对数据做一些判断，以保证路由切换时，有一个姜维安全的韩静。
        * */


        /*
        * beforeRouteUpdate:
        * beforeRouteUpdate中如果未调用next函数，会阻断当前路由跟新的响应。
        * 跟据以上特点，我们可以在当前组件响应路由变化之前，判断某些数据，做一些设置等等。
        * */
    }
</script>

<style scoped>

</style>
