import { Switch, Button } from 'antd'
import React, { useState } from 'react'
// import { setThemeConfig } from '../../redux/modules/global/action'
// console.log(setThemeConfig)

const SwitchDark = () => {
  const [disabled, setDisabled] = useState(false)
  const toggle = () => {
    // setDisabled(!disabled)
  }
  return (
    <>
      <Switch disabled={disabled} checkedChildren={<>🌞</>} unCheckedChildren={<>🌜</>} onChange={toggle}>
        11
      </Switch>
    </>
  )
}

export default SwitchDark
