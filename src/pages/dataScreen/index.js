import React, { useRef, useState, useEffect } from 'react'
/* 引入年龄分布echart */
import AgeRatioChart from './components/AgeRatioChart/index.js'
/* 引入男女比例echarts */
import MaleFemaleRatioChart from './components/MaleFemaleRatioChart/index.js'
import * as echarts from 'echarts'
import './index.less'
const DataScreen = () => {
  let dataScreenRef = useRef(null)
  const [currentTime] = useState(new Date().getFullYear())
  let option = {
    tooltip: {
      trigger: 'item',
    },
    /* 图例 */
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    /* 数据集 */
    series: [
      {
        name: '鞍山',
        type: 'pie',
        radius: '70%',
        data: [
          { value: 1048, name: '中国' },
          { value: 735, name: '美国' },
          { value: 580, name: '法国' },
          { value: 484, name: '英国' },
          { value: 300, name: '俄罗斯' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }
  useEffect(() => {
    if (dataScreenRef.current) {
      let mychart = echarts.init(dataScreenRef.current)
      option && mychart.setOption(option)
    }
  }, [])
  return (
    <div className="dataScreen-container">
      <div className="dataScreen">
        <div className="dataScreen-header">
          <div className="header-lf">
            <span className="header-screening">首页</span>
          </div>
          <div className="header-ct">
            <div className="header-ct-title">
              <span>智慧旅游可视化大数据展示平台</span>
              <div className="header-ct-warning">平台高峰预警信息（2条）</div>
            </div>
          </div>
          <div className="header-rg">
            <span className="header-download">统计报告</span>
            <span className="header-time">当前时间：{currentTime}</span>
          </div>
        </div>
        <div className="dataScreen-main">
          <div className="dataScreen-lf">
            <div className="dataScreen-top">
              <div className="dataScreen-main-title">
                <span>实时游客统计</span>
                <img
                  alt="00"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAHCAYAAACx3+twAAAAAXNSR0IArs4c6QAAAZ9JREFUSEvNlb9LHFEQxz/fE4MXsJEUVhaCndcKqSxVUspZHeS0zIGChYIEXcXGxuLQgzSiohD8Ucr5BwRBWxvRzkJSCXqFsuqOuIrE7O5bDQfxtW/m+2bmzWdGVqWIUUFkSTrGKRny6uXgbxPboIFrZhHjgBwaBxh5feX0Txubp4VG1hB9ib6PF8v4fNMoV5EYZshhrAM5x/s+YoxJyhKWZBcmYDvkEOsoRTDDGD3xgrZGH0GYWIsjqHMyFFSg+qIohlhgAjENNDj8Dwno1wgnkaLMk+Uy/NhiSmGrGAV5nMfZPf+o7ZHlggqkCBrVMKneqKCt0IZYRXQ7gjKMOZqY0gD+i8JU6CbgJ9Dq8K8hhlViOc7GPIoozMPd8ZCXF+34SIv/d4QWaSVgqQ4IbQMdb0UolvknhLZRiuB7RmiOZq4ovxWhxCFov2imRrkOCG0iul6B0HcNcPePCA2pxFY9EEreCk/qtksXxkfnoAo40xeOYwPa4APXfEaODfTgeMuRBvkdGZY/+IRPZ8qghBv24zZQuDQ82oG2FA1fHnv3y0m/CFsHcS4AAAAASUVORK5CYII="
                />
              </div>
              <div className="dataScreen-main-chart">
                <div className="actual-total">
                  <div className="expect-total">
                    可预约总量<i>999</i>人
                  </div>
                  <div className="actual-total">
                    <div className="actual-item">1</div>
                    <div className="actual-item">8</div>
                    <div className="actual-item">2</div>
                    <div className="actual-item">6</div>
                    <div className="actual-item">4</div>
                    <div className="actual-item">9</div>
                  </div>
                </div>
                <div className="actual-echarts" ref={dataScreenRef}></div>
              </div>
            </div>
            <div className="dataScreen-center">
              <div className="dataScreen-main-title">
                <span>男女比例</span>
                <img
                  alt="img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAHCAYAAACx3+twAAAAAXNSR0IArs4c6QAAAZ9JREFUSEvNlb9LHFEQxz/fE4MXsJEUVhaCndcKqSxVUspZHeS0zIGChYIEXcXGxuLQgzSiohD8Ucr5BwRBWxvRzkJSCXqFsuqOuIrE7O5bDQfxtW/m+2bmzWdGVqWIUUFkSTrGKRny6uXgbxPboIFrZhHjgBwaBxh5feX0Txubp4VG1hB9ib6PF8v4fNMoV5EYZshhrAM5x/s+YoxJyhKWZBcmYDvkEOsoRTDDGD3xgrZGH0GYWIsjqHMyFFSg+qIohlhgAjENNDj8Dwno1wgnkaLMk+Uy/NhiSmGrGAV5nMfZPf+o7ZHlggqkCBrVMKneqKCt0IZYRXQ7gjKMOZqY0gD+i8JU6CbgJ9Dq8K8hhlViOc7GPIoozMPd8ZCXF+34SIv/d4QWaSVgqQ4IbQMdb0UolvknhLZRiuB7RmiOZq4ovxWhxCFov2imRrkOCG0iul6B0HcNcPePCA2pxFY9EEreCk/qtksXxkfnoAo40xeOYwPa4APXfEaODfTgeMuRBvkdGZY/+IRPZ8qghBv24zZQuDQ82oG2FA1fHnv3y0m/CFsHcS4AAAAASUVORK5CYII="
                ></img>
              </div>
              <MaleFemaleRatioChart />
            </div>
            <div className="dataScreen-bottom">
              <div className="dataScreen-main-title">
                <span>年龄比例</span>
                <img
                  alt="age"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAHCAYAAACx3+twAAAAAXNSR0IArs4c6QAAAZ9JREFUSEvNlb9LHFEQxz/fE4MXsJEUVhaCndcKqSxVUspZHeS0zIGChYIEXcXGxuLQgzSiohD8Ucr5BwRBWxvRzkJSCXqFsuqOuIrE7O5bDQfxtW/m+2bmzWdGVqWIUUFkSTrGKRny6uXgbxPboIFrZhHjgBwaBxh5feX0Txubp4VG1hB9ib6PF8v4fNMoV5EYZshhrAM5x/s+YoxJyhKWZBcmYDvkEOsoRTDDGD3xgrZGH0GYWIsjqHMyFFSg+qIohlhgAjENNDj8Dwno1wgnkaLMk+Uy/NhiSmGrGAV5nMfZPf+o7ZHlggqkCBrVMKneqKCt0IZYRXQ7gjKMOZqY0gD+i8JU6CbgJ9Dq8K8hhlViOc7GPIoozMPd8ZCXF+34SIv/d4QWaSVgqQ4IbQMdb0UolvknhLZRiuB7RmiOZq4ovxWhxCFov2imRrkOCG0iul6B0HcNcPePCA2pxFY9EEreCk/qtksXxkfnoAo40xeOYwPa4APXfEaODfTgeMuRBvkdGZY/+IRPZ8qghBv24zZQuDQ82oG2FA1fHnv3y0m/CFsHcS4AAAAASUVORK5CYII="
                />
              </div>
              <AgeRatioChart />
            </div>
          </div>
          <div className="dataScreen-ct"></div>
          <div className="dataScreen-rg"></div>
        </div>
      </div>
    </div>
  )
}
export default DataScreen
