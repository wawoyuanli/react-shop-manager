import React, { useRef, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.less'
const DataScreen = () => {
  let dataScreenRef = useRef(null)
  return (
    <div className="dataScreen-container">
      <div className="dataScreen" ref={dataScreenRef}>
        11
      </div>
    </div>
  )
}
export default DataScreen
