<template>
    <div class="left">
        <!--为menu组件加width属性，不设置值，那么menu会和其父级保持同样的宽度-->
        <Menu width theme="dark" active-name="icons" @on-select="jumpPage">
            <MenuItem name="title-logo" style="text-align: center;font-weight: bold;font-size: x-large;background: #3e7fa9;">AdminLTE</MenuItem>
            <Input style="vertical-align: middle;margin-top: 10px" placeholder="Search">
              <Button slot="append" icon="ios-search"></Button>
            </Input>
            <MenuItem name="" style="font-size: xx-small;">MAIN NAVIGATION</MenuItem>
            <MenuItem name="icons">
                <Icon type="ios-analytics" />
                图标
            </MenuItem>
              <!--多级菜单嵌套-->
            <submenu name="charts">
                <!--当前父级菜单的自己的信息写在template中-->
                <template slot="title">
                    <Icon type="ios-cog" />
                    Canvas图表实例
                </template>
                <!--当前父级菜单对应的子菜单列表-->
                <MenuItem name="chartJS">静态示例</MenuItem>
                <MenuItem name="flot">动态示例</MenuItem>
            </submenu>
            <!--多级菜单嵌套-->
            <submenu name="form">
                <!--当前父级菜单的自己的信息写在template中-->
                <template slot="title">
                    <Icon type="ios-document" />
                    Form表单
                </template>
                <!--当前父级菜单对应的子菜单列表-->
                <MenuItem name="ge">General Elements</MenuItem>
                <MenuItem name="ae">Advanced Elements</MenuItem>
                <MenuItem name="ed">Editors</MenuItem>
            </submenu>
            <!--多级-->
            <submenu name="table">
                 <template slot="title">
                     <Icon type="ios-list-box" />
                      Table表单
                 </template>
                <!--当前父级菜单对应的子菜单列表-->
                <MenuItem name="st">Simple Tables</MenuItem>
                <MenuItem name="dt">Data Tables</MenuItem>
            </submenu>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: "Left",
        methods: {
          jumpPage (current) {
            this.$router.push({
              name: current
            })
          }
        }
    }
</script>

<style scoped>
.left{
    min-height: 750px;
}
.ivu-input-group {
  width: 95%;
  top: 0;
  margin: 0 auto;
}

</style>
