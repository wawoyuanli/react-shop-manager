import React, { useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import './index.less'
const DataScreen = () => {
  let dataScreenRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(new Date().getFullYear())
  return (
    <div className="dataScreen-container">
      <div className="dataScreen" ref={dataScreenRef}>
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
      </div>
    </div>
  )
}
export default DataScreen
