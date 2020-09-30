<template>
    <div class="tab_1">
      <Table
        class="my-tab"
        :columns="userM.col"
        :data="userM.data"
        stripe
        border
        :width="800"
        :highlight-row="true"
        :row-class-name="fn"
        @on-current-change="currentChang"
        ref="selection"
        @on-select="selectRow"
        @on-select-cancel="cancelSelectRow"
        @on-selection-change="selChange">
        <!--自定义表头-->
        <template slot="header">
          <h1>表头</h1>
        </template>
        <!--自定义表格尾部-->
        <template slot="footer">
          <h1>页脚</h1>
        </template>
        <!--自定义loading界面-->
        <template slot="loading">
          <h1>加载中...</h1>
        </template>
      </Table>
      <Button @click="exportData()">导出表格数据</Button>
    </div>
</template>

<script>
    export default {
        name: "Tab_1",
        data () {
          return {
            userM: {
              col: [{
                type: 'selection',
                width: 100,
                align: 'left'
              },{
                title: 'UserName',
                key: 'username'
              },{
                title: 'Tel',
                key: 'tel'
              },{
                title: 'Email',
                key: 'email'
              },{
                type: 'expand',
                title: '备注',
                key: 'describle'
              },{
                title: '操作',
                key: 'action',
                render: (fn, params) => {
                  //fn: createElement
                  return fn('div', {
                    'class': {
                      tab: true,
                      'tab-default': true
                    },
                    style: {
                      color: '#fff',
                    },
                    attrs: {
                      id: 'wrap'
                    },
                    on: {
                      click: this.f,
                    }
                  }, [
                    fn('button', {
                      on: {
                        click: () => {
                          this.updateData(params);
                        }
                      }
                    }, '修改'),
                    fn('button', {
                      on: {
                        click: this.deleteDate
                      }
                    }, '删除')
                  ]);
                }
              }],
              data: [{
                username: '小明',
                tel: 1243432432,
                email: '123@qq.com',
                describle: '小明的备注'
              },{
                username: '小红',
                tel: 1243432432,
                email: '123@qq.com'
              },{
                username: '红明',
                tel: 1243432432,
                email: '123@qq.com'
              }]
            }
          }
        },
        methods: {
          //当前tr的样式发生变化时，调用
          fn (a, b) {
            //可以获取到当前行的数据和这个数据在表格data中的index值
            // console.log(a, b);
          },
          currentChang(current, old) {
            // console.log(current, old);
          },
          selectRow (allSelect,currentSelected) {
            // console.log(allSelect, currentSelected);
          },
          cancelSelectRow (allSelect,currentSelected) {
            // console.log(allSelect, currentSelected);
          },
          selChange (select) {
            console.log(select);
          },
          exportData () {
            /*
            * 要调用iview为表格提供函数exportCsv,需要利用表格ref属性去开启使用
            * */
            this.$refs.selection.exportCsv({
              filename: 'myTestData',
            })
          },
          f () {
            // console.log(1);
          },
          updateData (data) {
            console.log(data)
          },
          deleteDate () {
            // console.log(2)
          },
        }
    }
</script>

<style scoped>
  .my-tab {
    margin: 0 auto;
  }
</style>


<!--
vue规定不可使使用DOM的方式操作元素，但是在某些时候，跟据代码的约束，我们就是要向页面中的某个标签添加子元素，
就去调用createElement函数。
createElement（tagName，tagSetObj，tagChildren）；
tagName：符合HTML规定的标签名
tagSetObj：可以在这个对象中，对当前创建的这个标签做设置，。
tagChildren：数组。当前标签的子元素列表，每个子元素都使用createElement创建的标签。
-->
