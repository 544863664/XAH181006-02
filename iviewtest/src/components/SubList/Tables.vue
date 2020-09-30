<template>
    <div class="tables" style="padding: 0 16px;">
        <Row style="padding: 10px 0;">
          <Col span="12">
            <h1 style="display: inline;">Simple Tables</h1> preview of simple tables
          </Col>
          <Col span="10" style="height: 42px;line-height: 42px; float: right;text-align: right;padding-right: 10px">
            <Icon type="md-color-palette" />
            <a href="">Home</a>
            >
            <a href="">Tables</a>
            >
            <a href="">Simple</a>
          </Col>
        </Row>
      <Row>
        <Col span="12">
          <Table border :columns="columns1" :data="data1">
            <template slot="header">
              <Row>
                <Col span="12" style="padding-left: 10px">
                  <h4>Bordered Table</h4>
                </Col>
              </Row>
            </template>
            <template slot="footer">
              <Row>
                <Col span="9" offset="15" style="text-align: right;padding-right: 10px">
                  <Page :total="30" />
                </Col>
              </Row>
            </template>
          </Table>
        </Col>
        <Col span="11" offset="1">
          <Table size="small" :columns="columns1" :data="data1">
            <template slot="header">
              <Row>
                <Col span="8" style="padding-left: 10px">
                  <h4>Simple Full Width Table</h4>
                </Col>
                <Col span="10" offset="6" style="text-align: right;padding-right: 10px">
                  <Page :total="30" />
                </Col>
              </Row>
            </template>
          </Table>
        </Col>
      </Row>
      <br>
      <Row>
        <Col span="12">
          <Table border size="small" :columns="columns1" :data="data1">
            <template slot="header">
              <Row>
                <Col span="12" style="padding-left: 10px">
                  <h4>Condensed Full Width Table</h4>
                </Col>
              </Row>
            </template>
          </Table>
        </Col>
        <Col span="11" offset="1">
          <Table size="small" stripe :columns="columns1" :data="data1">
            <template slot="header">
              <Row>
                <Col span="8" style="padding-left: 10px">
                  <h4>Striped Full Width Table</h4>
                </Col>
              </Row>
            </template>
          </Table>
        </Col>
      </Row>
      <br>
      <Table size="small" :columns="columns2" :data="data2">
        <template slot="header">
          <Row>
            <Col span="12" style="padding-left: 10px">
              <h4>Simple Full Width Table</h4>
            </Col>
            <Col span="5" offset="7" style="padding: 5px 10px 0">
              <Input style="vertical-align: middle" placeholder="Search">
                <Button slot="append" icon="ios-search"></Button>
              </Input>
            </Col>
          </Row>
        </template>
      </Table>
    </div>
</template>

<script>
    export default {
        name: "Tables",
        data () {
          return {
            columns1: [
              {
                type: 'index',
                width: '40px',
              },
              {
                width: '280px',
                title: 'Task',
                key: 'task'
              },
              {
                title: 'Progress',
                key: 'progress',
                render: (fn, params) => {
                  //fn: createElement
                  return fn('Progress', {
                    'class': {},
                    style: {},
                    attrs: {
                      percent: 55,
                      'hide-info': ''
                    },
                    on: {}
                  }, []);
                }
              },
              {
                width: '80px',
                title: 'Lable',
                key: 'lable'
              }
            ],
            data1: [
              {
                task: 'Update software',
                progress: 55,
                lable: '55%',
              },
              {
                task: 'Clean database',
                progress: 70,
                lable: '70%',
              },
              {
                task: 'Cron job running',
                progress: 30,
                lable: '30%',
              },
              {
                task: 'Fix and squish bugs',
                progress: 90,
                lable: '90%',
              }
            ],
            columns2: [
              {
                width: '60px',
                title: 'ID',
                key: 'id'
              },
              {
                width: '200px',
                title: 'User',
                key: 'user'
              },
              {
                width: '150px',
                title: 'Date',
                key: 'date'
              },
              {
                width: '150px',
                title: 'Status',
                key: 'status'
              },
              {
                title: 'Reason',
                key: 'reason'
              }
            ],
            data2: [
              {
                id: 183,
                user: 'John Doe',
                date: '11-7-2014',
                status: 'Approved',
                reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.'
              },{
                id: 219,
                user: 'Alexander Pierce',
                date: '11-7-2014',
                status: 'Pending',
                reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.'
              },{
                id: 657,
                user: 'Bob Doe',
                date: '11-7-2014',
                status: 'Approved',
                reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.'
              },{
                id: 175,
                user: 'Mike Doe',
                date: '11-7-2014',
                status: 'Denied',
                reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.'
              }
            ]
          }
        }
    }
</script>

<style scoped>
  .ivu-progress-show-info .ivu-progress-outer {
    padding-right: 0px;
  }
</style>
