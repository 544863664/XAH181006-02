<template>
    <div class="echarts" style="padding: 0 16px;">
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
        <div class="sim">
          <span class="topic">ChartJS</span>
          <span class="ros">Preview sample</span>
        </div>
        <div class="leftint">
          <div class="totality">
            <div class="hurdle">
              <span>Area Chart</span>
            </div>
            <div class="centers">
              <div id="smchart" style="width: 100%;height: 350px;"></div>
            </div>
          </div>
          <div class="totality">
            <div class="hurdle">
              <span>Area Chart</span>
            </div>
            <div class="centers">
              <div id="smchartone" style="width: 100%;height: 350px;"></div>
            </div>
          </div>
        </div>
        <div class="rightint">
          <div class="totality">
            <div class="hurdle">
              <span>Line Chart</span>
            </div>
            <div class="centers">
              <div id="smacharttwo" style="width: 100%;height: 350px;"></div>
            </div>
          </div>
          <div class="totality" >
            <div class="hurdle">
              <span>Bar Chart</span>
            </div>
            <div class="centers">
              <div id="smachartthree" style="width: 100%;height: 350px;"></div>
            </div>
          </div>

        </div>
    </div>
</template>

<script>
    export default {
      name: "Echarts",
      data() {
        return {}
      },
      mounted() {
        this.smchart(),
          this.smchartone(),
          this.smacharttwo(),
          this.smachartthree()
      },
      methods: {
        smchart() {
          let myChart = this.$echarts.init(document.getElementById('smchart'));
          myChart.setOption({
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              splitLine:{show: false},
              type: 'value'
            },
            series: [{
              symbolSize: 0,
              smooth:true,//曲线
              data: [820, 932, 901, 2344, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {
                color:'#D1D6DE'
              },
              lineStyle:{
                width:0,

              }

            }, {
              symbolSize: 0,
              smooth:true,
              data: [20, 799, 345, 678, 2122, 990, 745, 567, 789, 2222],
              type: 'line',
              areaStyle: {
                color:'#1395C0'
              },
              lineStyle:{
                width:0
              }

            }]
          })
        },
        smchartone() {
          let myChart = this.$echarts.init(document.getElementById('smchartone'));
          myChart.setOption({
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },

            series: [
              {
                name:'访问来源',
                type:'pie',
                radius: ['45%', '80%'],
                avoidLabelOverlap: true,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: true

                  }
                },
                data:[
                  {value:700, name:'直接访问', itemStyle: { color: '#FF5E48' }},
                  {value:500, name:'邮件营销', itemStyle: { color: '#00A861' }},
                  {value:400, name:'联盟广告', itemStyle: { color: '#FF9600' }},
                  {value:600, name:'视频广告', itemStyle: { color: '#00C3F2' }},
                  {value:300, name:'搜索引擎', itemStyle: { color: '#008EBC' }},
                  {value:100, name:'啦啦啦啦', itemStyle: { color: '#D1D6DE' }},
                ]
              }
            ]
          })
        },
        smacharttwo() {
          let myChart = this.$echarts.init(document.getElementById('smacharttwo'));
          myChart.setOption({
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              splitLine:{show: false},//去掉网格线
              type: 'value'
            },
            series: [{
              symbolSize: 0,
              smooth:true,//曲线
              data: [1220, 932, 801, 2344, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {
                color:'none'
              },
              lineStyle:{
                width:2,
                color:'#D1D6DE'
              }


            }, {
              symbolSize: 0,
              smooth:true,
              data: [800, 799, 345, 678, 2122, 990, 745, 567, 789, 2222],
              type: 'line',
              areaStyle: {
                color:'none'
              },
              lineStyle:{
                width:2,
                color:'#1395C0'
              }

            }]
          })
        },
        smachartthree() {
          let myChart = this.$echarts.init(document.getElementById('smachartthree'));
          myChart.setOption({
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              barGap:'0',//改变柱状图之间的间距
              data: [20, 100, 130, 50, 100, 310, 130],
              type: 'bar',
              itemStyle:{
                color:'#D1D6DE',
              }
            },{
              data: [40, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              itemStyle:{
                color:'#00A861',
              }
            }]
          })
        }
      }
    }
</script>

<style scoped>
  .echarts{
    width: 100%;
  }
  .centers{
    width: 94%;
    margin: 0 auto;
    background:white;

  }
  .sim{
    margin: 10px;
  }
  .hurdle{
    border-bottom: 1px solid gainsboro;
    margin: 10px;
    line-height: 30px;
  }
  .hurdle>span{
    font-size: 16px;
    margin: 10px ;
  }
  .totality{
    background: white;
    border-top: 3px solid #D0D6DE;
    border-radius: 5px;
    margin-top: 20px;
  }
  .topic{
    font-family:"Hiragino Sans GB";
    font-size: 24px;
  }
  .ros{
    font-family:"Microsoft YaHei" ;
    font-size: 14px;
  }
  .bigbox{
    border-top: 3px solid #D0D6DE;
  }
  .leftint,.rightint{
    float: left;
    margin: auto 25px;
    width: 45%;
  }
</style>
