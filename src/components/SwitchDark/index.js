import { Switch } from 'antd'
import { connect } from 'react-redux'
import { setThemeConfig } from '@/redux/modules/global/action'
import React from 'react'

const SwitchDark = props => {
  const { setThemeConfig, themeConfig } = props
  const onChange = checked => {
    setThemeConfig({ ...themeConfig, isDark: checked })
  }
  return <Switch className="dark" defaultChecked={themeConfig.isDark} checkedChildren={<>🌞</>} unCheckedChildren={<>🌜</>} onChange={onChange} />
}

/* state */
const mapStateToProps = state => {
  return state.globalReducer
}
/* action */
const mapDispatchToProps = { setThemeConfig }
export default connect(mapStateToProps, mapDispatchToProps)(SwitchDark)
