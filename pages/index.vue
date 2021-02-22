<template>
  <div>
    <Nav/>
    <el-row>
      <el-col :span="8">
        <div id="echarts" style="width: 600px;height:400px;"></div>
      </el-col>
      <el-col :span="8">
        <div id="echarts1" style="width: 600px;height:400px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Nav from "~/components/Nav";
export default {
  components: {
    Nav
  },
  created() {

  },
  methods:{
    initPie(){
      var myChart = this.$echarts.init(document.getElementById('echarts'),'dark');
      let option = {
        title:{
          show: true,
          text: '标题',
          link: 'http://www.baidu.com',
          target: 'blank',
          textStyle:{
            color: '#c12456',
            lineHeight: 40,
            width: 100,
            textBorderWidth: 1,
            overflow: 'truncate',
            rich:{
              "a": {
                color: '#c25654'
              }
            }
          },
          subtext: '副标题',
          subtextStyle:{
            color: '#aaa'
          }
        },
        legend: {
          type: 'scroll',
          orient: 'horizontal',
          itemGap: 6,
          bottom: 0,
          symbolKeepAspect: true,
          // 用来格式化图例文本，支持字符串模板和回调函数两种形式
          formatter: '{name}',
          // formatter: function (name) {
          //   return 'Legend ' + name;
          // }
          selectedMode: true,//开启图例选择
          selected: {
            // 选中'系列1'
            '视频广告': true,
            // 不选中'系列2'
            '邮件营销': true
          },
          textStyle: {
            lineOverflow: 'none',
            rich: {
              "b": {
                color: '#fff'
              }
            }
          },
          tooltip: {
            show: true
          },
          // data: [
            // {
            //   name: '直接访问',
            //   textStyle:{
            //     color: 'green'
            //   }
            // }
          // ],
          backgroundColor: '#ccc',
          pageButtonItemGap: 10,
          pageButtonGap: 2,
          pageButtonPosition: 'start',
          pageIconColor: '#2f4554', //翻页按钮的颜色
          pageTextStyle: {//页码样式
            color: '#000'
          },
          animation: true,
          animationDurationUpdate: 800,//图例翻页时的动画时长
          emphasis:{
            selectorLabel:{
              show: true
            },
            selector: true,

          }
        },
        // backgroundColor: '#2c343c',//设置全局背景
        textStyle: {//文本的样式可以设置全局
          color: 'rgba(255, 255, 255, 0.3)'
        },
        itemStyle: {//全局设置
          color: '#c23531',//设置每个扇形背景色
          shadowBlur: 200,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0, 0, 0, 1)',//默认背景色
          emphasis: {//鼠标移动上去效果
            shadowBlur: 200,//阴影大小
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        labelLine: {//标签的视觉引导线
          lineStyle: {
            color: 'rgba(255, 25, 255, 0.3)'
          },
          emphasis:{
            color: 'rgba(255, 255, 200, 0.6)'
          }
        },
        visualMap: {
          // 不显示 visualMap 组件，只用于明暗度的映射
          show: false,
          // 映射的最小值为 80
          min: 80,
          // 映射的最大值为 600
          max: 600,
          inRange: {
            // 明暗度的范围是 0 到 1
            colorLightness: [0, 1]
          }
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            roseType: false,//开启南丁格尔图
            data:[
              {value:235, name:'视频广告',label: {
                  textStyle: {//单独每个系列设置text样式
                    color: 'rgba(25, 255, 255, 0.3)'
                  }
                }
              },
              {value:274, name:'联盟广告',itemStyle:{
                  color: '#a45630'//设置单个扇形颜色
                }},
              {value:310, name:'邮件营销'},
              {value:335, name:'直接访问'},
              {value:400, name:'搜索引擎'}
            ],
            emphasis: {
              itemStyle: {
                // 高亮时点的颜色。
                color: 'blue'
              },
              label: {
                show: true,
                // 高亮时标签的文字。
                formatter: 'This is a emphasis label.'
              }
            }
          }
        ]
      }
      myChart.showLoading()
      setTimeout(()=>{
        myChart.hideLoading()
        myChart.setOption(option);
      },1000)
    },
    initSeriesLine(){
      let myChart = this.$echarts.init(document.getElementById('echarts1'),'light');
      let symbolSize = 12;
      let data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
      let option = {
        tooltip: {
          triggerOn: 'none',
          formatter: function (params) {
            return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
          }
        },
        xAxis: {
          min: -100,
          max: 80,
          type: 'value',
          axisLine: {onZero: false},
          show: true,
          offset: 0, //  X 轴相对于默认位置的偏移
          name: 'x轴',
          nameLocation: 'end',
          nameTextStyle:{
            color: '#000',
            rich:{
              'c':{
                color: '#ffa'
              }
            }
          }
        },
        axisLine:{
          show: true,
          onZero: true,
          symbol:['none', 'arrow'],
          symbolSize: [10,10]
        },
        axisTick:{
          show: true,
          lineStyle:{
            color: '#aaa'
          }
        },
        yAxis: {
          min: -30,
          max: 60,
          type: 'value',
          axisLine: {onZero: false}
        },
        series: [
          {
            id: 'a',
            type: 'line',
            smooth: true,
            symbolSize: symbolSize,
            data: data
          }
        ],
        grid:{
          show: true,
          left: '20%',
          backgroundColor: '#FFaaaa',//网格背景颜色
          tooltip:{
            show: true,
            trigger: 'axis', //item数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
            axisPointer:{
              type: 'line',
              axis: 'auto',
              snap: true,
              label: {
                show: true,
                formatter: '{value}'
              },
              lineStyle: {
                color: 'rgb(128, 128, 128)',
                width: 1,
                type: 'solid'
              },
              textStyle: {
                color: '#10a'
              }
            }
          }
        }
      }
      myChart.setOption(option)
      myChart.setOption({
        graphic: this.$echarts.util.map(data, (item, dataIndex)=> {
          return {
            type: 'circle',
            position: myChart.convertToPixel('grid', item),
            shape: {
              r: symbolSize / 2
            },
            invisible: true,
            draggable: true,
            ondrag: this.$echarts.util.curry(this.onPointDragging, dataIndex),
            onmousemove: this.$echarts.util.curry(this.showTooltip, dataIndex),
            onmouseout: this.$echarts.util.curry(this.hideTooltip, dataIndex),
            z: 100
          };
        })
      });
    },
    showTooltip(dataIndex) {
      let myChart = this.$echarts.init(document.getElementById('echarts1'));
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
      });
    },
    hideTooltip(dataIndex) {
      let myChart = this.$echarts.init(document.getElementById('echarts1'));
      myChart.dispatchAction({
        type: 'hideTip'
      });
    },
    onPointDragging(dataIndex, dx, dy) {
      console.log(dataIndex)
      let data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
      let myChart = this.$echarts.init(document.getElementById('echarts1'));
      data[dataIndex] = myChart.convertFromPixel('grid', data[dataIndex]);
      myChart.setOption({
        series: [{
          id: 'a',
          data: data
        }]
      });
    },
  },
  mounted() {
    this.initPie()
    this.initSeriesLine()
    window.addEventListener('resize', function () {
      let myChart = this.$echarts.init(document.getElementById('echarts1'));
      // 对每个拖拽圆点重新计算位置，并用 setOption 更新。
      myChart.setOption({
        graphic: myChart.util.map(data, function (item, dataIndex) {
          return {
            position: myChart.convertToPixel('grid', item)
          };
        })
      });
    });

  }
}
</script>