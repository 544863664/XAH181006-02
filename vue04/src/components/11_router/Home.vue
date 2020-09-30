<template>
    <div class="home">
      <LeftMenu />
      <Content />
    </div>
</template>

<script>
  //导入子组件
  import LeftMenu from './LeftMenu';
  import Content from './Content';
    export default {
        name: "Home",
        components: {
          LeftMenu,
          Content
        }
    }
</script>

<style scoped>
  .home {
    font-size: 0;
  }
  .left-menu {
    width: 20%;
    height: 600px;
    background: aliceblue;
    display: inline-block;
    font-size: 30px;
    vertical-align: top;
  }
  .content {
    display: inline-block;
    width: 80%;
    height: 600px;
    font-size: 30px;
    padding: 30px;
    background: cornsilk;
    vertical-align: top;
  }
</style>
