import React, { useRef } from 'react'
const DataScreen = () => {
  const dataScreenRef = useRef(0)
  return (
    <div className="dataScreen-container">
      <div className="dataScreen" ref={dataScreenRef}>
        1
      </div>
    </div>
  )
}
export default DataScreen
