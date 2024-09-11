/*
 柱状图
*/
import React, { useRef } from 'react'
import { Layout, Divider, Card } from 'antd'
import * as echarts from 'echarts'
class ColumnChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mlList: [],
    }
  }
  componentDidMount() {
    let i = 0
    let ml = [
      {
        dd: 0,
        num: [10520, 0, 10520, 0],
      },
      {
        dd: 1,
        num: [5194, 5326, 1, 10519],
      },
      {
        dd: 2,
        num: [5731, 4789, 2, 10518],
      },
      {
        dd: 3,
        num: [6059, 4461, 4, 10516],
      },
      {
        dd: 4,
        num: [6312, 4208, 7, 10513],
      },
      {
        dd: 5,
        num: [6437, 4083, 14, 10506],
      },
      {
        dd: 6,
        num: [6675, 3845, 28, 10492],
      },
      {
        dd: 7,
        num: [6588, 3932, 23, 10497],
      },
      {
        dd: 8,
        num: [6725, 3795, 29, 10491],
      },
      {
        dd: 9,
        num: [6805, 3715, 38, 10482],
      },
      {
        dd: 10,
        num: [7045, 3475, 79, 10441],
      },
      {
        dd: 11,
        num: [6935, 3585, 56, 10464],
      },
      {
        dd: 12,
        num: [6928, 3592, 56, 10464],
      },
      {
        dd: 13,
        num: [7024, 3496, 67, 10453],
      },
      {
        dd: 14,
        num: [6926, 3594, 56, 10464],
      },
      {
        dd: 15,
        num: [6971, 3549, 58, 10462],
      },
      {
        dd: 16,
        num: [7004, 3516, 63, 10457],
      },
      {
        dd: 17,
        num: [7020, 3500, 65, 10455],
      },
      {
        dd: 18,
        num: [7027, 3493, 67, 10453],
      },
      {
        dd: 19,
        num: [7181, 3339, 111, 10409],
      },
      {
        dd: 20,
        num: [7165, 3355, 106, 10414],
      },
      {
        dd: 21,
        num: [6994, 3526, 60, 10460],
      },
      {
        dd: 22,
        num: [7037, 3483, 70, 10450],
      },
      {
        dd: 23,
        num: [7114, 3406, 100, 10420],
      },
      {
        dd: 24,
        num: [7197, 3323, 117, 10403],
      },
      {
        dd: 25,
        num: [7099, 3421, 94, 10426],
      },
      {
        dd: 26,
        num: [7037, 3483, 72, 10448],
      },
      {
        dd: 27,
        num: [7135, 3385, 105, 10415],
      },
      {
        dd: 28,
        num: [7012, 3508, 64, 10456],
      },
      {
        dd: 29,
        num: [7053, 3467, 74, 10446],
      },
      {
        dd: 30,
        num: [7076, 3444, 80, 10440],
      },
      {
        dd: 31,
        num: [7259, 3261, 143, 10377],
      },
      {
        dd: 32,
        num: [7127, 3393, 100, 10420],
      },
      {
        dd: 33,
        num: [7152, 3368, 104, 10416],
      },
      {
        dd: 34,
        num: [7152, 3368, 104, 10416],
      },
      {
        dd: 35,
        num: [7063, 3457, 77, 10443],
      },
      {
        dd: 36,
        num: [7147, 3373, 104, 10416],
      },
      {
        dd: 37,
        num: [7070, 3450, 79, 10441],
      },
      {
        dd: 38,
        num: [7292, 3228, 153, 10367],
      },
      {
        dd: 39,
        num: [7135, 3385, 101, 10419],
      },
      {
        dd: 40,
        num: [7051, 3469, 76, 10444],
      },
      {
        dd: 41,
        num: [7154, 3366, 104, 10416],
      },
      {
        dd: 42,
        num: [7185, 3335, 112, 10408],
      },
      {
        dd: 43,
        num: [7071, 3449, 80, 10440],
      },
      {
        dd: 44,
        num: [7157, 3363, 105, 10415],
      },
      {
        dd: 45,
        num: [7173, 3347, 109, 10411],
      },
      {
        dd: 46,
        num: [7140, 3380, 99, 10421],
      },
      {
        dd: 47,
        num: [7117, 3403, 90, 10430],
      },
      {
        dd: 48,
        num: [7138, 3382, 96, 10424],
      },
      {
        dd: 49,
        num: [7139, 3381, 97, 10423],
      },
      {
        dd: 50,
        num: [7101, 3419, 87, 10433],
      },
    ]
    let _th = this
    _th.initMap(ml[i].dd, ml[i].num[0], ml[i].num[1], ml[i].num[2], ml[i].num[3])
    this.timer = setInterval(() => {
      i++
      if (i === ml.length - 1) {
        // 数据读取完毕的时候将定时器去除
        // flag = false
        // clearInterval(this.timer)
      }
      // _th.initMap(ml[i].dd, ml[i].num[0], ml[i].num[1], ml[i].num[2], ml[i].num[3])
    }, 1000)
  }
  incrementCount() {
    console.log('incrementCount')
  }
  /* 初始化echarts */
  initMap(dd, num1, num2, num3, num4) {
    let option

    let myChart = echarts.init(document.getElementById('main'))
    option = {
      title: {
        text: '攻击2效果展示',
      },
      tooltip: {
        trigger: 'axis',
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },

      legend: {
        data: ['A', 'B', 'C', 'D'],
      },
      xAxis: {
        data: [dd],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'A',
          type: 'bar',
          barWidth: '15%',
          data: [num1],
        },
        {
          name: 'B',
          type: 'bar',
          barWidth: '15%',
          data: [num2],
        },
        {
          name: 'C',
          type: 'bar',
          barWidth: '15%',
          data: [num3],
        },
        {
          name: 'D',
          type: 'bar',
          barWidth: '15%',
          data: [num4],
        },
      ],
    }
    myChart.setOption(option) // 绘制画布
  }
  render() {
    const styleObj = {
      // flex: 1,
      height: '400px',
      width: '700px',
    }
    return (
      <Layout>
        <div id="main" style={styleObj}></div>
      </Layout>
    )
  }
}
export default ColumnChart
