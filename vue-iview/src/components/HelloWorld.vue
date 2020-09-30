<template>
  <div class="hello">
    <!--<Layout>
      <Header>的会计法</Header>
      <Content>阿尔法</Content>
      <Footer>同人画代发</Footer>
    </Layout>

    <Layout>
      <Header>给你讲个鬼故事</Header>
      <Layout>
        &lt;!&ndash;自定义触发器&ndash;&gt;
        <Sider breakpoint="md" collapsible collapasd-width="20" v-model="bol" :hide-trigger="false">弗兰克撒地方</Sider>
        <Content>sdslkd</Content>
      </Layout>
      <Footer>页脚</Footer>
    </Layout>

    <Row class-name="list" :gutter="16">
      <Col span="12" class="item">我占了一半</Col>
      <Col span="12" class="item">我也占了一半</Col>
    </Row>
    <br>
    <Row class-name="list" :gutter="16">
      <Col span="8">
        <div class="item">我占了一半</div>
      </Col>
      <Col span="8">
        <div class="item">我也占了一半</div>
      </Col>
      <Col span="8">
        <div class="item">我也占了一半</div>
      </Col>
    </Row>
    <br>
    <Row class-name="list" type="flex">
      <Col span="8">
        <div class="item">1我占了一半</div>
      </Col>
      <Col span="8" order="1">
        <div class="item">2我也占了一半</div>
      </Col>
      <Col span="8">
        <div class="item">3我也占了一半</div>
      </Col>
    </Row>
    <br>
    <Row class-name="list" type="flex">
      <Col span="12" push="6">
        <div class="item">1我占了一半</div>
      </Col>
    </Row>
    <br>
    <Row class-name="list" type="flex">
      <Col span="8" offset="3">
        <div class="item">1我占了一半</div>
      </Col>
    </Row>
    <br>
    <Row class-name="list">
      <Col :lg="6" :md="8" :sm="12">
        <div class="item">1</div>
      </Col>
      <Col :lg="6" :md="8" :sm="12">
        <div class="item">2</div>
      </Col>
      <Col :lg="6" :md="8" :sm="12">
        <div class="item">3</div>
      </Col>
      <Col :lg="6" :md="8" :sm="12">
        <div class="item">4</div>
      </Col>
    </Row>-->

    <!--分页-->
    <!--page-size-opts:'[]' 设置的是每页展示数据的可选值-->
    <!--styles中的样式只针对ul标签，如果想要对分页按钮进行样式修改，就要使用class-name结合子级选择器-->
    <Page
      :total="100"
      :page-size="10"
      :show-sizer="true"
      :show-total="true"
      :simple="false"
      :show-elevator="true"
      :page-size-opts="[5,10,15,20,25]"
      placement="top"
      class-name="testPage"
      @on-change="pageChange"
      :current="currentPage"
      prev-text="上一页"
      next-text="下一页"
      @on-page-size-change="pageSizeChange"/>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return{
      bol: false,
      currentPage: 8,
    }
  },
  methods: {
    pageSizeChange (pageSize) {
      console.log(pageSize);
    },
    pageChange(page) {
      //当page组件页面切换时，会自动调用当前函数
      //形参page指当前页码数
      console.log(page);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid;
    font-size: 50px;
  }
</style>
