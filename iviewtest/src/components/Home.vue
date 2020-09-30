<template>
    <div class="home">
        <!--利用layout布局划分结构-->
        <layout>
           <Sider
             breakpoint="xxl"
             collapsible
             :value="$store.state.leftToggle"
             hide-trigger
             :collapsed-width="200"
           >
               <Left></Left>
           </Sider>
            <layout>
                <Header>
                    <Top></Top>
                </Header>
                <Content>
                  <Center_></Center_>
                </Content>
            </layout>
        </layout>
    </div>
</template>

<script>
    import Left from './Left';
    import Top from './Top';
    import Center_ from './Center'
    export default {
        name: "Home",
        components:{
          Left,
          Top,
          Center_
        },
    }
</script>

<style scoped>
    .ivu-layout-header {
      background: #2db7f5;
      padding: 0;
    }
    /*.ivu-layout-sider {
      width: 200px !important;
      min-width: 200px !important;
      max-width: 200px !important;
      flex: 0 0 200px !important;
    }*/

</style>
