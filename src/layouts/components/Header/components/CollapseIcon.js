import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { updateCollapse } from '@/redux/modules/menu/action'
import React from 'react'
const CollapseIcon = props => {
  const { isCollapse, updateCollapse } = props
  const handleClick = () => {
    updateCollapse(!isCollapse)
    console.log(isCollapse, '更改isCollapse的值')
  }
  return (
    <div className="collapsed" onClick={handleClick}>
      {isCollapse ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
    </div>
  )
}

const mapStateToProps = state => {
  return state.menuReducer
}
const mapDispatchToProps = { updateCollapse }
export default connect(mapStateToProps, mapDispatchToProps)(CollapseIcon)
