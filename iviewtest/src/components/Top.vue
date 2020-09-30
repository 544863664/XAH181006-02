<template>
    <div class="top" style="background: #468dbc;padding-left: 10px;color:#fff">
      <Icon
        type="md-menu"
        size="30"
        @click="toggleLeft()"
      ></Icon>
      <Row style="width: 97%;font-size: 15px; display: inline-flex;justify-content: flex-end; text-align: center" type="flex" justify="end">
        <Col span="1" class="ivu_col">
          <Badge :count="4">
            <Icon type="ios-mail-outline" class="icon-flag" />
          </Badge>
        </Col>
        <Col span="1" class="ivu_col">
          <Badge :count="10">
            <Icon type="ios-notifications-outline" class="icon-flag" />
          </Badge>
        </Col>
        <Col span="1" class="ivu_col">
          <Badge :count="9">
            <Icon type="ios-flag-outline" class="icon-flag" />
          </Badge>
        </Col>
        <Col span="4" class="ivu_col">
          <Icon type="ios-person" class="icon-flag" /> Alexander Pierce
        </Col>
        <Col span="1" class="ivu_col">
            <Icon type="ios-settings-outline" class="icon-flag" />
        </Col>
      </Row>
    </div>
</template>

<script>
    export default {
        name: "Top",
        methods: {
          toggleLeft () {
            //通过点击当前图标，切换left中menu是否展开
            //设置vuex中的leftToggle
            this.$store.commit('setLeftToggle');
          }
        }
    }
</script>

<style scoped>
  .ivu_col:hover {
    background: #3e7fa9;
    cursor: pointer;
  }
  .icon-flag {
    font-size: 23px;
    font-weight: bold;
  }
  .ivu-badge {
    display: inline;
  }


  /**/
  .ivu-badge .ivu-badge-count {
    font-size: x-small;
    font-weight: 700;
    padding: 0 !important;
    line-height: 16px;
  }
</style>
