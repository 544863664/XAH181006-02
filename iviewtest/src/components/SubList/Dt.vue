<template>
    <div class="dt" style="padding: 0 16px">
        <Row style="padding: 10px 0;">
          <Col span="12">
            <h1 style="display: inline;">Data Tables</h1> advanced tables
          </Col>
          <Col span="10" style="height: 42px;line-height: 42px; float: right;text-align: right;padding-right: 10px">
            <Icon type="md-color-palette" />
            <a href="">Home</a>
            >
            <a href="">Tables</a>
            >
            <a href="">Data tables</a>
          </Col>
        </Row>
      <Table border size="small" :columns="columns" :data="data">
        <template slot="header">
          <Row>
            <Col span="8" style="padding-left: 10px">
              <h4>Hover Data Table</h4>
            </Col>
          </Row>
        </template>
        <template slot="footer">
          <Row>
            <Col span="8" style="padding-left: 10px">
              Showing 1 to 10 of 57 entries
            </Col>
            <Col span="7" offset="9" style="text-align: right;padding-right: 10px">
              <Page :total="60" prev-text="Previous" next-text="Next" />
            </Col>
          </Row>
        </template>
      </Table>
      <br>
      <Table border size="small" :columns="columns" :data="data">
        <template slot="header">
          <Row>
            <Col span="24" style="padding-left: 10px">
              <h4>Hover Data Table</h4>
              <!--<Select v-model="model11" filterable>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>-->
            </Col>
          </Row>
        </template>
        <template slot="footer">
          <Row>
            <Col span="8" style="padding-left: 10px">
              Showing 1 to 10 of 57 entries
            </Col>
            <Col span="7" offset="9" style="text-align: right;padding-right: 10px">
              <Page :total="60" prev-text="Previous" next-text="Next" />
            </Col>
          </Row>
        </template>
      </Table>
    </div>
</template>

<script>
    export default {
        name: "Dt",
        data () {
          return {
            columns: [
              {
                title: 'Rendering engine',
                key: 'Rengine'
              },{
                title: 'Browser',
                key: 'Browser'
              },{
                title: 'Platform(s)',
                key: 'Platform'
              },{
                title: 'Engine version',
                key: 'Eversion'
              },{
                title: 'CSS grade',
                key: 'grade'
              }
            ],
            data: [
              {
                Rengine: 'Gecko',
                Browser: 'Firefox 1.0',
                Platform: 'Win 98+ / OSX.2+',
                Eversion: '1.7',
                grade: 'A'
              },{
                Rengine: 'Gecko',
                Browser: 'Firefox 1.5',
                Platform: 'Win 98+ / OSX.2+',
                Eversion: '1.8',
                grade: 'A'
              },{
                Rengine: 'Gecko',
                Browser: 'Firefox 2.0',
                Platform: 'Win 98+ / OSX.2+',
                Eversion: '1.8',
                grade: 'A'
              },{
                Rengine: 'Gecko',
                Browser: 'Firefox 3.0',
                Platform: 'Win 2k+ / OSX.3+',
                Eversion: '1.9',
                grade: 'A'
              },{
                Rengine: 'Gecko',
                Browser: 'Camino 1.0',
                Platform: 'OSX.2+',
                Eversion: '1.8',
                grade: 'A'
              },{
                Rengine: 'Gecko',
                Browser: 'Camino 1.5',
                Platform: 'OSX.3+',
                Eversion: '1.8',
                grade: 'A'
              },{
                Rengine: 'Gecko',
                Browser: 'Netscape 7.2',
                Platform: 'Win 95+ / Mac OS 8.6-9.2',
                Eversion: '1.7',
                grade: 'A'
              },{
                Rengine: 'Gecko',
                Browser: 'Netscape Browser 8',
                Platform: 'Win 98SE+',
                Eversion: '1.7',
                grade: 'A'
              },{
                Rengine: 'Gecko',
                Browser: 'Netscape Navigator 9',
                Platform: 'Win 98+ / OSX.2+',
                Eversion: '1.8',
                grade: 'A'
              },{
                Rengine: 'Gecko',
                Browser: 'Mozilla 1.0',
                Platform: 'Win 95+ / OSX.1+',
                Eversion: '1',
                grade: 'A'
              }
            ],
            cityList: [
              {
                value: 'New York',
                label: 'New York'
              },
              {
                value: 'London',
                label: 'London'
              },
              {
                value: 'Sydney',
                label: 'Sydney'
              },
              {
                value: 'Ottawa',
                label: 'Ottawa'
              },
              {
                value: 'Paris',
                label: 'Paris'
              },
              {
                value: 'Canberra',
                label: 'Canberra'
              }
            ],
          }
        }
    }
</script>

<style scoped>

</style>
