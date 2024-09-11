import { Dropdown } from 'antd'
import { connect } from 'react-redux'
import { setLanguage } from '@/redux/modules/global/action'
import React from 'react'
const Language = props => {
  const { language, setLanguage } = props
  let items = [
    {
      key: '1',
      label: <span>简体中文</span>,
      onClick: () => setLanguage('zh'),
      disabled: language === 'zh',
    },
    {
      key: '2',
      label: <span>English</span>,
      onClick: () => setLanguage('en'),
      disabled: language === 'en',
    },
  ]
  return (
    <Dropdown menu={{ items }}>
      <i className="icon-style iconfont icon-zhongyingwen"></i>
    </Dropdown>
  )
}

const mapStateToProps = state => state.globalReducer
const mapDispatchToProps = { setLanguage }
export default connect(mapStateToProps, mapDispatchToProps)(Language)
