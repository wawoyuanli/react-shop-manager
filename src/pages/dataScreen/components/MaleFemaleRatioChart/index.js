/* 男女比例 */
import * as echarts from 'echarts'
import React, { useEffect, useRef } from 'react'
import woman from '../../images/woman.png'
import './index.less'
const MaleFemaleRatioChart = () => {
  console.log(echarts)
  const echartsRef = useRef(null)
  let data = {
    man: 0.6,
    woman: 0.4,
  }
  const option = {
    xAxis: {
      type: 'value',
      show: false,
    },
    grid: {
      left: 0,
      top: '30px',
      bottom: 0,
      right: 0,
    },
    yAxis: [
      {
        type: 'category',
        position: 'left',
        data: ['男生'],
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      {
        type: 'category',
        position: 'right',
        data: ['女士'],
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
          padding: [0, 0, 40, -60],
          fontSize: 12,
          lineHeight: 60,
          color: 'rgba(255, 255, 255, 0.9)',
          formatter: '{value}' + data.woman * 100 + '%',
          rich: {
            a: {
              color: 'transparent',
              lineHeight: 30,
              fontFamily: 'digital',
              fontSize: 12,
            },
          },
        },
      },
    ],
    series: [
      {
        type: 'bar',
        barWidth: 20,
        data: [data.man],
        z: 20,
        itemStyle: {
          borderRadius: 10,
          color: '#007AFE',
        },
        label: {
          show: true,
          color: '#E7E8ED',
          position: 'insideLeft',
          offset: [0, -20],
          fontSize: 12,
          formatter: () => {
            return `男士 ${data.man * 100}%`
          },
        },
      },
      {
        type: 'bar',
        barWidth: 20,
        data: [1],
        barGap: '-100%',
        itemStyle: {
          borderRadius: 10,
          color: '#FF4B7A',
        },
        label: {
          show: true,
          color: '#E7E8ED',
          position: 'insideRight',
          offset: [0, -20],
          fontSize: 12,
          formatter: () => {
            return `女士 ${data.woman * 100}%`
          },
        },
      },
    ],
  }
  useEffect(() => {
    if (echartsRef.current) {
      let myEchart = echarts.init(echartsRef.current)
      option && myEchart.setOption(option)
    }
  })
  return (
    <div className="malefemaleRatio-main">
      <div className="malefemaleRatio-header">
        <div className="man">
          <span>男士</span>
          <img
            alt="man"
            src="data:image/png;base64,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"
          />
        </div>
        <div className="woman">
          <span>女士</span>
          <img alt="woman" src={woman} />
        </div>
      </div>
      <div className="echarts" ref={echartsRef}></div>
    </div>
  )
}

export default MaleFemaleRatioChart
