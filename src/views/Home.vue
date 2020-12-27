<!--
 * @Author: your name
 * @Date: 2020-12-01 18:22:14
 * @LastEditTime: 2020-12-01 23:08:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\views\Home.vue
-->
<template>

  <div class="box">
   
    <el-container style="height: 100%">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <div class="eacharts" style="width: 500px; height: 500px"></div>
            <Fater></Fater>
        </el-main>
      </el-container>
    </el-container>
   
  </div>
</template>

<script>
import echarts from "echarts";
import Fater from './Fater'
export default {
  data() {
    return {
      data: {
        title: {
          text: "ECharts 入门示例",
          textStyle: {
            color: "red",
          },
          borderWidth: 5,
          borderColor: "red",
          borderRadius: 5,
          left: 5,
        },
        tooltip: {
          // trigger: 'item',
          // trigger: 'axis'
          triggerOn: "click",
          // formatter: `{b} 的成绩时 {c}`
          // formatter: function (arg) {
          //   console.log(arg);
          //   return `${arg.name}的成绩是${arg.value}`;
          // },
        },
        //图表按扭
        toolbox: {
          feature: {
            saveAsImage: {},
            dataView: {},
            restore: {},  //重置功能,
            dataZoom: {}, //区域缩放
            magicType: {
              type: ['bar', 'line'] //不同列表展示
            }
          }
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        series: [
          {
            name: "语文",
            type: "bar",
            data: [80, 90, 80, 90, 80, 100],
            //求出平均值
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值",
                },
              ],
            },
            label: {
              show: true,
            },
            barWidth: "30%",
          },
          {
             name: "数学",
            type: "bar",
            data: [80, 50, 80, 7, 80, 60],
          }
        ],
        legend: {
          data:['语文', '数学']
        }
      },
    };
  },
  components: {
    'Fater': Fater,
  },
  methods: {},
  mounted() {
    console.log(echarts);
    let myChart = echarts.init(document.querySelector(".eacharts"));
    myChart.setOption(this.data);
  },
};
</script>

<style>
.box {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 80px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>