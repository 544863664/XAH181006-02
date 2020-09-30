<template>
    <div class="home">
        <Left />
        <HeaderNav />
        <Content />
    </div>
</template>

<script>
  //引入组件
  import Left from '../13_vuex/Left';
  import HeaderNav from '../13_vuex/HeaderNav';
  import Content from '../13_vuex/Content';
    export default {
        name: "Home",
        components: {
            Left, HeaderNav, Content
        }
    }
</script>

<style scoped>

</style>
