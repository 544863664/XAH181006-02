<template>
    <div class="home">
        <h1>老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。</h1>
        <h2>{{num}}</h2>
        <button @click="num++">点击</button>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data () {
            return {
              num: 100
            }
        },
        methods : {
            fn () {
                console.log('调用fn');
            }
        },
        beforeCreate() {
            //在这个钩子函数中，访问不到当前vue实例的data和methods
            console.log(this);
            //console.log(this.num); //undefined
            //this.fn(); //error：this.fn is not function
        },
        created() {
            //如果当前组件中有部分操作，是需要在组件载入页面是就是默认执行的，就写在created中。
            //在create中可以访问当前组件的data和methods
            console.log(this.num);
            this.fn();
        },
        mounted() {
            //当前组件挂载成功之后
            console.log(this.num);
            this.fn();
        },
        beforeUpdate() {
            console.log('要更新了');
        },
        updated() {
            console.log('更新成功');
        }
    }
</script>

<style scoped>

</style>

<!--
  vue实例的生命周期：
    一个vue实例从被创建到被销毁的这个过程就是这个vue实例的生命周期。
    vue为vue实例提供了8个钩子函数，分别在这个生命周期的不同阶段调用。
    beforeCreate
    created
    挂载前后（vue实例展示在页面上）
    beforeMount
    mounted
    数据更新前后
    beforeUpdate
    updated
    销毁前后
    beforeDestroy
    destroyed

    注：
      1.created和mounted
        组件载入时，有部分操作需要默认执行，如果需要操作不依托于页面中的DOM，独立自己完成的，就放在created中。
        如果这个操作需要页面中某些数据的支持（如：swiper），就将其写在mounted中。
        一般倩况下，在vue项目中使用到的插件的实例化，默认创建等操作放在mounted中。
      2.beforeUpdate和updated
        一旦当前组件中任何地方发生改变，就会调用这两个钩子函数。
        beforeUpdate在捕获到数据发生变化之后调用，意味着在beforeUpdate函数中获取到的数据已经是更新之后的数据了。
-->
