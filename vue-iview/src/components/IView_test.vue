<template>
    <div class="iview-test">
      <Row type="flex">
        <Col span="20" order="2">
          <Header>
            <div class="layout-header">
              <a href="#">注册登录</a> |
              <a href="#">帮助中心</a> |
              <a href="#">安全中心</a> |
              <a href="#">服务大厅</a>
            </div>

          </Header>
        </Col>
        <Col span="4" style="height: 500px;">
            <div class="leftNav">
              <Header style="background: lightslategrey; height: 500px;">
                <div></div>
                <p href="#">注册登录</p>
                <p href="#">帮助中心</p>
                <p href="#">安全中心</p>
                <p href="#">服务大厅</p>
              </Header>
            </div>
        </Col>
      </Row>
    </div>
</template>

<script>
    export default {
        name: "IView_test"
    }
</script>

<style scoped>
  .layout-header {
    width: 400px;
    text-align: right;
    float: right;
  }
  .leftNav {
    width: 100%;
  }
</style>
